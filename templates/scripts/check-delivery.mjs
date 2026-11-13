#!/usr/bin/env node
/**
 * Fails CI if the actor-loop delivery method (D-40) is removed or weakened
 * in the places agents rely on. Does not ban the letters "MVP" in historical
 * decision titles — only the delivery excuse patterns and required wiring.
 */
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (rel) => readFileSync(join(root, rel), "utf8");
const fail = (msg) => {
  console.error(`check-delivery: ${msg}`);
  process.exit(1);
};

const requiredFiles = [
  "docs/DELIVERY.md",
  "playbook/02-DELIVERY.md",
  "AGENTS.md",
  ".cursor/rules/delivery.mdc",
  ".codex/config.toml",
  ".codex/hooks.json",
  ".codex/README.md",
  "docs/DECISIONS.md",
];

for (const f of requiredFiles) {
  if (!existsSync(join(root, f))) fail(`missing required file ${f}`);
}

const delivery = read("docs/DELIVERY.md");
for (const phrase of [
  "There is no MVP delivery mode",
  "The only loop",
  "Production bar",
  "pick the next actor",
  "Implement elsewhere",
]) {
  if (!delivery.includes(phrase)) fail(`docs/DELIVERY.md must contain: ${phrase}`);
}

const agents = read("AGENTS.md");
for (const phrase of ["docs/DELIVERY.md", "There is no MVP delivery mode", "production"]) {
  if (!agents.includes(phrase)) fail(`AGENTS.md must contain: ${phrase}`);
}

const rule = read(".cursor/rules/delivery.mdc");
if (!rule.includes("alwaysApply: true")) fail(".cursor/rules/delivery.mdc must be alwaysApply: true");
if (!rule.includes("docs/DELIVERY.md")) fail(".cursor/rules/delivery.mdc must point at docs/DELIVERY.md");
if (!rule.includes("There is no MVP delivery mode")) fail(".cursor/rules/delivery.mdc must ban MVP delivery mode");

const codexConfig = read(".codex/config.toml");
for (const phrase of [
  "There is no MVP delivery mode",
  "AGENTS.md",
  "docs/DELIVERY.md",
  "project-ui",
]) {
  if (!codexConfig.includes(phrase)) {
    fail(`.codex/config.toml developer_instructions must contain: ${phrase}`);
  }
}

const codexHooks = read(".codex/hooks.json");
if (!codexHooks.includes("SessionStart")) fail(".codex/hooks.json must declare SessionStart");
if (!codexHooks.includes("session-start.mjs")) fail(".codex/hooks.json must run session-start.mjs");
if (!codexHooks.includes("stop-check.mjs")) fail(".codex/hooks.json must run stop-check.mjs");

const agentsPlatform = read("AGENTS.md");
if (!agentsPlatform.includes("Codex (OpenAI)")) {
  fail("AGENTS.md must document Codex (OpenAI) as an agent platform");
}
if (!agentsPlatform.includes(".codex/")) {
  fail("AGENTS.md must point agents at .codex/");
}

const decisions = read("docs/DECISIONS.md");
if (!/No MVP mode|actor loop is the only delivery/i.test(decisions)) {
  fail("docs/DECISIONS.md must record the no-MVP / actor-loop delivery decision");
}

const governing = read("requirements.md");
if (!/^## \d+\. Governing Product Rules/m.test(governing)) {
  fail("requirements.md missing Governing Product Rules section");
}
if (!/no MVP delivery mode/i.test(governing) || !/actor/i.test(governing)) {
  fail("requirements.md governing rules must require actor-loop delivery (no MVP mode)");
}

/** Agent-facing files must not teach MVP-as-excuse. */
const agentFacing = [
  "AGENTS.md",
  "docs/AGENT_START.md",
  "docs/DELIVERY.md",
  ".cursor/rules/delivery.mdc",
  ".codex/config.toml",
  ".codex/README.md",
  ".github/copilot-instructions.md",
  ".windsurf/rules/00-agent-start.md",
  "playbook/02-DELIVERY.md",
];
const banned = [
  /good enough for MVP/i,
  /MVP-only subset/i,
  /for MVP we (drop|omit|skip|stub)/i,
  /MVP quality/i,
  /reduced.?MVP/i,
];
for (const f of agentFacing) {
  const text = read(f);
  for (const re of banned) {
    if (re.test(text)) fail(`${f} contains forbidden MVP-excuse phrasing: ${re}`);
  }
}

const playbook = read("playbook/02-DELIVERY.md");
if (!playbook.includes("There is no MVP delivery mode")) {
  fail("playbook/02-DELIVERY.md must state there is no MVP delivery mode");
}
if (!playbook.includes("actor")) fail("playbook/02-DELIVERY.md must describe the actor loop");

console.log("check-delivery: ok");
