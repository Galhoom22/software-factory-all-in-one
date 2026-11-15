#!/usr/bin/env node
/**
 * Verifies the playbook wires requirements-driven activation.
 * Run from planning repo: node playbook/scripts/check-requirements-activation.mjs
 * Or from playbook root after sync: node scripts/check-requirements-activation.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const playbookRoot = path.resolve(here, "..");

const required = [
  "00-USAGE.md",
  "examples/my-project-requirements.example.md",
  "templates/AGENTS.template.md",
  "templates/docs/AGENT_START.md",
  "templates/cursor-rules/requirements-activation.mdc",
  "01-STEPS.md",
  "05-PROMPTS.md",
  "README.md",
];

const needles = {
  "00-USAGE.md": ["my-project-requirements.md", "activation signal", "80/20"],
  "examples/my-project-requirements.example.md": ["Working title", "Must-have features"],
  "templates/AGENTS.template.md": [
    "Requirements-driven activation",
    "my-project-requirements.md",
    "Do **not** overwrite",
  ],
  "templates/docs/AGENT_START.md": [
    "First check — requirements activation",
    "my-project-requirements.md",
  ],
  "templates/cursor-rules/requirements-activation.mdc": [
    "activation signal",
    "my-project-requirements.md",
    "alwaysApply: true",
  ],
  "01-STEPS.md": ["Requirements-driven path", "0.0 Provide the entry requirements file"],
  "05-PROMPTS.md": ["Requirements-driven activation", "my-project-requirements.md"],
  "README.md": ["00-USAGE.md", "my-project-requirements.md"],
};

let failed = 0;
for (const rel of required) {
  const full = path.join(playbookRoot, rel);
  if (!fs.existsSync(full)) {
    console.error("MISSING:", rel);
    failed++;
    continue;
  }
  const text = fs.readFileSync(full, "utf8");
  for (const n of needles[rel] || []) {
    if (!text.includes(n)) {
      console.error("MISSING NEEDLE in", rel, "→", n);
      failed++;
    }
  }
}

// Scenario: example file is copyable as activation input
const example = fs.readFileSync(
  path.join(playbookRoot, "examples/my-project-requirements.example.md"),
  "utf8",
);
if (example.length < 400) {
  console.error("Example requirements file too short to be a useful sample");
  failed++;
}

if (failed) {
  console.error("FAIL:", failed, "check(s)");
  process.exit(1);
}
console.log("OK: requirements-driven activation wiring present");
console.log("Scenario: copy examples/my-project-requirements.example.md → root my-project-requirements.md; agent must auto-start per 00-USAGE + AGENTS.");
