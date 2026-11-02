#!/usr/bin/env node
/**
 * Codex Stop hook: run delivery + agents + scope checks and remind the model.
 * Always exits 0 so the session can finish; failures are injected as context
 * the agent must fix before claiming done.
 */
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const notes = [];

const required = [
  "AGENTS.md",
  "docs/AGENT_START.md",
  "docs/DELIVERY.md",
  ".codex/config.toml",
];
for (const rel of required) {
  if (!existsSync(join(root, ...rel.split("/")))) {
    notes.push(`${rel} is missing — restore it before further edits.`);
  }
}

const runCheck = (script) => {
  const path = join(root, "scripts", script);
  if (!existsSync(path)) {
    notes.push(`scripts/${script} is missing.`);
    return;
  }
  const result = spawnSync(process.execPath, [path], {
    cwd: root,
    encoding: "utf8",
  });
  if (result.status !== 0) {
    notes.push(
      `scripts/${script} failed:\n${(result.stderr || result.stdout || "").trim()}`,
    );
  }
};

runCheck("check-delivery.mjs");
runCheck("check-agents.mjs");
runCheck("check-scope.mjs");

const additionalContext =
  notes.length === 0
    ? [
        "Codex Stop: delivery, agents, and scope checks OK.",
        "Before you claim the task done: confirm CI-equivalent checks for files you touched,",
        "documents are current, Governing Rules untouched without approval,",
        "and you did not add app code outside project-ui/.",
      ].join(" ")
    : ["Codex Stop: fix these before claiming done:", ...notes.map((n) => `- ${n}`)].join(
        "\n",
      );

process.stdout.write(additionalContext + "\n");
process.exit(0);
