#!/usr/bin/env node
/**
 * Automates the requirements-driven entry gate (seeded planning repos).
 *
 * - If root `my-project-requirements.md` is absent: exit 0 (no bootstrap requested).
 * - If present: fail when agent activation wiring is missing or the entry file is empty;
 *   print a progress report of derived planning docs (missing docs do not fail CI early).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.basename(path.dirname(here)) === "playbook"
  ? path.resolve(here, "../..")
  : path.resolve(here, "..");

const entryRel = "my-project-requirements.md";

function fail(msg) {
  console.error(`check-planning-entry: ${msg}`);
  process.exit(1);
}

function exists(rel) {
  return fs.existsSync(path.join(root, rel));
}

function read(rel) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}

if (!exists(entryRel)) {
  console.log(
    "check-planning-entry: no root my-project-requirements.md — skip (no activation requested).",
  );
  process.exit(0);
}

const entry = read(entryRel).trim();
if (entry.length < 80) {
  fail(`${entryRel} exists but is too short to plan from (need real content).`);
}

const requiredWhenActivated = [
  ["AGENTS.md", ["my-project-requirements.md", "Requirements-driven activation"]],
  ["docs/AGENT_START.md", ["my-project-requirements.md", "requirements activation"]],
  [
    ".cursor/rules/requirements-activation.mdc",
    ["alwaysApply: true", "my-project-requirements.md"],
  ],
];

for (const [rel, needles] of requiredWhenActivated) {
  if (!exists(rel)) fail(`activation requires ${rel}`);
  const text = read(rel);
  for (const n of needles) {
    if (!text.toLowerCase().includes(n.toLowerCase())) {
      fail(`${rel} must mention: ${n}`);
    }
  }
}

const progress = [
  "requirements.md",
  "docs/DELIVERY.md",
  "docs/BRD.md",
  "docs/PRD.md",
  "docs/SRS.md",
  "docs/API_CONTRACT.md",
  "docs/SECURITY.md",
  "docs/COMPLIANCE.md",
  "docs/DECISIONS.md",
  "project-ui/README.md",
];

const present = [];
const missing = [];
for (const rel of progress) {
  (exists(rel) ? present : missing).push(rel);
}

console.log("check-planning-entry: activation OK (entry file present + agent wiring).");
console.log(`  entry: ${entryRel} (${entry.length} chars)`);
console.log(`  derived present (${present.length}): ${present.join(", ") || "(none)"}`);
if (missing.length) {
  console.log(
    `  derived not yet (${missing.length}): ${missing.join(", ")} — agent continues planning; not a CI fail.`,
  );
}
process.exit(0);
