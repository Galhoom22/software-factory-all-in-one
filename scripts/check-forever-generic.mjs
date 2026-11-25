/**
 * Forever-generic hard gate for this public kit.
 * Scans the repo for product/person/org/path/secret leakage.
 * Extend scripts/forever-generic-denylist.json when a new leak is found once.
 *
 * Exit 0 = clean. Exit 1 = findings (CI / sync must refuse).
 * Usage: node scripts/check-forever-generic.mjs
 * Optional: FOREVER_GENERIC_ROOT=/path/to/tree
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(process.env.FOREVER_GENERIC_ROOT || path.join(HERE, ".."));
const DENYLIST_PATH = path.join(HERE, "forever-generic-denylist.json");

const SKIP_DIRS = new Set([".git", "node_modules", ".next", "dist", "coverage-tmp"]);
const BINARY_EXT = /\.(png|jpg|jpeg|gif|webp|ico|woff2?|pdf|zip|gz|tgz|7z|exe|dll|so|dylib|bin)$/i;

const text = fs.readFileSync(DENYLIST_PATH, "utf8");
const { rules } = JSON.parse(text);
if (!Array.isArray(rules) || rules.length === 0) {
  console.error("check-forever-generic: denylist empty or invalid");
  process.exit(1);
}

const compiled = rules.map((r) => {
  if (!r.id || !r.pattern || !r.probe) {
    throw new Error(`denylist rule missing id/pattern/probe: ${JSON.stringify(r)}`);
  }
  return {
    ...r,
    re: new RegExp(r.pattern, r.flags || ""),
  };
});

// Sanity: every rule must match its own probe (prevents silent broken regex).
for (const r of compiled) {
  if (!r.re.test(r.probe)) {
    console.error(`check-forever-generic: probe does not match rule ${r.id}: ${r.probe}`);
    process.exit(1);
  }
}

function walk(dir, out) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(ent.name)) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else out.push(p);
  }
}

const files = [];
walk(ROOT, files);
const findings = [];

for (const file of files) {
  if (BINARY_EXT.test(file)) continue;
  // Do not scan the denylist / this checker for probe strings themselves.
  const base = path.basename(file);
  if (base === "forever-generic-denylist.json" || base === "check-forever-generic.mjs") continue;

  let body;
  try {
    body = fs.readFileSync(file, "utf8");
  } catch {
    continue;
  }
  if (body.includes("\u0000")) continue;

  const rel = path.relative(ROOT, file).split(path.sep).join("/");
  for (const rule of compiled) {
    rule.re.lastIndex = 0;
    const m = body.match(rule.re);
    if (!m) continue;
    // Allow documenting the forbid pattern with an ellipsis placeholder (KAN-…).
    if (rule.id === "jira-kan-key" && /KAN-[.…⋯]/.test(m[0])) continue;
    const line = body.slice(0, m.index).split(/\n/).length;
    findings.push({
      file: rel,
      rule: rule.id,
      name: rule.name,
      sample: m[0],
      line,
    });
  }
}

if (findings.length) {
  console.error("check-forever-generic: FAIL — this kit must stay 100% generic");
  console.error(JSON.stringify({ finding_count: findings.length, findings }, null, 2));
  console.error(
    "Fix: remove product/person/org/path/secret details. Put them only in a private product planning repo. Extend forever-generic-denylist.json if a new private name leaked once.",
  );
  process.exit(1);
}

console.log(
  JSON.stringify(
    {
      ok: true,
      files_scanned: files.length,
      rules: compiled.length,
      note: "Forever generic — Galhoom22 is the public OSS owner only.",
    },
    null,
    2,
  ),
);
