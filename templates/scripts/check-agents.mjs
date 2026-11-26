#!/usr/bin/env node
/**
 * Fails CI if universal agent discovery files are missing or no longer
 * point at AGENTS.md / AGENT_START (SF-03). Keeps harness pointers honest
 * without duplicating the full rulebook.
 */
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (rel) => readFileSync(join(root, rel), "utf8");
const fail = (msg) => {
  console.error(`check-agents: ${msg}`);
  process.exit(1);
};

const required = [
  "docs/AGENT_START.md",
  "AGENTS.md",
  "CLAUDE.md",
  "GEMINI.md",
  "llms.txt",
  ".github/copilot-instructions.md",
  ".github/instructions/project-ui.instructions.md",
  ".gemini/settings.json",
  ".windsurf/rules/00-agent-start.md",
  ".codex/config.toml",
  ".codex/CLI.md",
  ".codex/hooks.json",
  ".cursor/rules/delivery.mdc",
  "scripts/check-scope.mjs",
  "scripts/verify-codex-cli.mjs",
];

for (const f of required) {
  if (!existsSync(join(root, f))) fail(`missing ${f}`);
}

const start = read("docs/AGENT_START.md");
for (const phrase of [
  "There is no MVP delivery mode",
  "AGENTS.md",
  "project-ui/",
  "check-delivery.mjs",
  "check-agents.mjs",
  "check-scope.mjs",
  "Reply in",
  "Governing Product Rules",
  "Conventional Commits",
]) {
  if (!start.includes(phrase)) fail(`docs/AGENT_START.md must contain: ${phrase}`);
}

if (!/Reply in \S+/.test(start)) fail("docs/AGENT_START.md must state the reply language (\"Reply in <language>\")");

const agents = read("AGENTS.md");
if (!agents.includes("docs/AGENT_START.md")) {
  fail("AGENTS.md must point new agents at docs/AGENT_START.md");
}
if (!agents.includes("single rulebook")) {
  fail("AGENTS.md must state it is the single rulebook");
}

/** Every pointer must mention AGENTS.md and the no-MVP rail. */
const pointers = [
  "CLAUDE.md",
  "GEMINI.md",
  "llms.txt",
  ".github/copilot-instructions.md",
  ".windsurf/rules/00-agent-start.md",
];
for (const f of pointers) {
  const text = read(f);
  if (!text.includes("AGENTS.md") && !text.includes("@AGENTS.md")) {
    fail(`${f} must point at AGENTS.md`);
  }
  if (!/no MVP delivery mode|AGENT_START|@AGENTS\.md|@docs\/AGENT_START/i.test(text)) {
    fail(`${f} must mention no-MVP rails or import AGENT_START / AGENTS`);
  }
}

const copilot = read(".github/copilot-instructions.md");
for (const phrase of ["There is no MVP delivery mode", "project-ui/", "check-delivery.mjs"]) {
  if (!copilot.includes(phrase)) fail(`.github/copilot-instructions.md must contain: ${phrase}`);
}

const geminiSettings = read(".gemini/settings.json");
for (const name of ["AGENTS.md", "GEMINI.md", "docs/AGENT_START.md"]) {
  if (!geminiSettings.includes(name)) {
    fail(`.gemini/settings.json must list ${name}`);
  }
}

const claude = read("CLAUDE.md");
if (!/no MVP delivery mode/i.test(claude)) {
  fail("CLAUDE.md must state there is no MVP delivery mode (not only @-imports)");
}

const uiInstr = read(".github/instructions/project-ui.instructions.md");
if (!uiInstr.includes("applyTo:") || !uiInstr.includes("project-ui")) {
  fail(".github/instructions/project-ui.instructions.md must target project-ui");
}

const codexCli = read(".codex/CLI.md");
for (const phrase of ["Codex CLI", "trust", "/hooks", "verify-codex-cli.mjs"]) {
  if (!codexCli.includes(phrase)) fail(`.codex/CLI.md must contain: ${phrase}`);
}

// File presence + CLI.md phrases above are enough here.
// CI also runs `node scripts/verify-codex-cli.mjs --ci` as its own step.
// verify may call this script; this script must never call verify (no recursion).

console.log("check-agents: ok");
