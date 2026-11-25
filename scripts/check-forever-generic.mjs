/**
 * Forever-generic hard gate for this public kit.
 * Scans for structural private leakage (mailboxes, secrets, day URLs, user paths).
 * Extend scripts/forever-generic-denylist.json for structural rules only.
 * Product/person names are blocked at planning sync time (never listed here).
 *
 * Exit 0 = clean. Exit 1 = findings.
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

const { rules } = JSON.parse(fs.readFileSync(DENYLIST_PATH, "utf8"));
if (!Array.isArray(rules) || rules.length === 0) {
  console.error("check-forever-generic: denylist empty or invalid");
  process.exit(1);
}

const compiled = rules.map((r) => {
  if (!r.id || !r.pattern || !r.probe) {
    throw new Error(`denylist rule missing id/pattern/probe: ${JSON.stringify(r)}`);
  }
  return { ...r, re: new RegExp(r.pattern, r.flags || "") };
});

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
    const line = body.slice(0, m.index).split(/\n/).length;
    findings.push({ file: rel, rule: rule.id, name: rule.name, sample: m[0], line });
  }
}

if (findings.length) {
  console.error("check-forever-generic: FAIL — this kit must stay 100% generic");
  console.error(JSON.stringify({ finding_count: findings.length, findings }, null, 2));
  console.error(
    "Fix: remove private details. Put product-specific facts only in a private planning repo. Extend forever-generic-denylist.json for structural rules only.",
  );
  process.exit(1);
}

console.log(
  JSON.stringify(
    {
      ok: true,
      files_scanned: files.length,
      rules: compiled.length,
      note: "Forever generic — public structural gate only.",
    },
    null,
    2,
  ),
);
