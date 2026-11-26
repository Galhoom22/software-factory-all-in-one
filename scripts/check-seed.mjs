#!/usr/bin/env node
/**
 * Seed smoke test (zero dependencies): proves templates/ works once instantiated in a product repo.
 * Seeds this kit into temporary directories and runs the seeded repository's own gates:
 *   A. fresh seed (no my-project-requirements.md, no prototype app yet) — CI must be green on day one
 *   B. activated seed (example requirements copied to the root)
 *   C. GitHub "Use this template" + `seed.mjs --in-place` (kit at the root, default folder name)
 *   D. `seed.mjs --update` of the vendored kit, and refusal to re-seed over existing files
 *   E. refusal (writing nothing) when a file sits where the seed needs a folder
 * Each seeded repo also passes the template CI's required-docs list and a product-coordinate
 * content-integrity check (tables + links as the product will see them).
 * Exit 0 = every scenario passes.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const KIT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const KIT_DIR = "software-factory-all-in-one";
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "sfaio-seed-"));
let failed = 0;

const node = (cwd, script, ...a) => spawnSync(process.execPath, [script, ...a], { cwd, encoding: "utf8" });
function check(label, r) {
  const ok = r.status === 0;
  if (!ok) failed++;
  const detail = ok
    ? ""
    : `\n${`${r.stdout || ""}${r.stderr || ""}`.trim().split(/\r?\n/).slice(0, 10).map((l) => `      ${l}`).join("\n")}`;
  console.log(`${ok ? "PASS" : "FAIL"}  ${label}${detail}`);
}
const fact = (ok, message) => ({ status: ok ? 0 : 1, stdout: message, stderr: "" });

function copyTree(from, to) {
  for (const ent of fs.readdirSync(from, { withFileTypes: true })) {
    if (ent.name === ".git" || ent.name === "node_modules") continue;
    const s = path.join(from, ent.name);
    const d = path.join(to, ent.name);
    if (ent.isDirectory()) {
      fs.mkdirSync(d, { recursive: true });
      copyTree(s, d);
    } else if (ent.isFile()) fs.copyFileSync(s, d);
  }
}

function seededGates(repo, label) {
  for (const s of ["scripts/check-delivery.mjs", "scripts/check-agents.mjs", "scripts/check-scope.mjs", "scripts/check-planning-entry.mjs"]) {
    check(`${label}: ${s}`, node(repo, s));
  }
  check(`${label}: scripts/verify-codex-cli.mjs --ci`, node(repo, "scripts/verify-codex-cli.mjs", "--ci"));
  check(`${label}: ${KIT_DIR}/scripts/check-requirements-activation.mjs`, node(repo, `${KIT_DIR}/scripts/check-requirements-activation.mjs`));
  check(`${label}: ${KIT_DIR}/scripts/check-structure.mjs`, node(repo, `${KIT_DIR}/scripts/check-structure.mjs`));
  const ci = fs.readFileSync(path.join(repo, ".github", "workflows", "ci.yml"), "utf8");
  const list = (ci.match(/for f in ([^;]+); do/) || [null, ""])[1].trim().split(/\s+/).filter(Boolean);
  const missing = list.filter((f) => !fs.existsSync(path.join(repo, f)));
  check(`${label}: template CI required docs (${list.length})`, fact(list.length > 0 && !missing.length, `missing: ${missing.join(", ") || "(list not found)"}`));
  const req = fs.readFileSync(path.join(repo, "requirements.md"), "utf8");
  check(`${label}: governing product rules section`, fact(/^## [0-9]+\. Governing Product Rules/m.test(req), "requirements.md lacks the section"));
  check(`${label}: product-coordinate integrity`, node(KIT, "scripts/check-content-integrity.mjs", "--root", repo, "--product"));
}

try {
  const fresh = path.join(tmp, "acme-planning");
  check("A: seed into a new directory", node(KIT, "scripts/seed.mjs", fresh));
  seededGates(fresh, "A fresh");

  fs.copyFileSync(path.join(fresh, KIT_DIR, "examples", "my-project-requirements.example.md"), path.join(fresh, "my-project-requirements.md"));
  check("B activated: scripts/check-planning-entry.mjs", node(fresh, "scripts/check-planning-entry.mjs"));

  const reseed = node(KIT, "scripts/seed.mjs", fresh);
  check("D: re-seeding over an existing repo is refused", fact(reseed.status !== 0, "seed.mjs overwrote an existing repository"));
  check("D: --update replaces the vendored kit", node(KIT, "scripts/seed.mjs", "--update", fresh));
  check("D updated: structure", node(fresh, `${KIT_DIR}/scripts/check-structure.mjs`));

  const blocked = path.join(tmp, "blocked");
  fs.mkdirSync(blocked);
  fs.writeFileSync(path.join(blocked, "docs"), "a file where the seed needs a folder");
  const b = node(KIT, "scripts/seed.mjs", blocked);
  check("E: a file where a folder is needed is a conflict, nothing written", fact(b.status !== 0 && !fs.existsSync(path.join(blocked, KIT_DIR)), "seed wrote into a conflicting target"));

  const tpl = path.join(tmp, "template-repo", KIT_DIR);
  fs.mkdirSync(path.join(tpl, ".git"), { recursive: true });
  copyTree(KIT, tpl);
  const dirty = path.join(tmp, "dirty-repo", KIT_DIR);
  fs.mkdirSync(path.join(dirty, ".git"), { recursive: true });
  copyTree(KIT, dirty);
  fs.writeFileSync(path.join(dirty, "owner-notes.md"), "added by the owner before seeding");
  const d = node(dirty, "scripts/seed.mjs", "--in-place");
  check("C: --in-place refuses a repo with unexpected root files (nothing moved)", fact(d.status !== 0 && !fs.existsSync(path.join(dirty, KIT_DIR)), "--in-place moved files in a non-fresh repo"));

  check("C: --in-place inside a repo created from the template", node(tpl, "scripts/seed.mjs", "--in-place"));
  seededGates(tpl, "C in-place");
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}

if (failed) {
  console.error(`check-seed: FAIL (${failed} check${failed === 1 ? "" : "s"})`);
  process.exit(1);
}
console.log("check-seed: ok");
