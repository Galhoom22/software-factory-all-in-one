#!/usr/bin/env node
/**
 * Codex SessionStart hook: inject hard rails into model context.
 * Prints JSON with additionalContext (Codex SessionStart schema).
 */
const additionalContext = [
  "{{PRODUCT}} planning repo — Codex SessionStart rails:",
  "- Scope: planning docs + project-ui prototype only. No real backend/app code outside project-ui/.",
  "- Delivery: There is no MVP delivery mode. Actor loop only (docs/DELIVERY.md, D-40). Current actor = {{CURRENT_ACTOR}}.",
  "- Rules: docs/AGENT_START.md then AGENTS.md. English replies. No secrets, no real personal data, no force-push, no history rewrite.",
  "- Prototype: before UI edits read project-ui/PRODUCT.md, DESIGN.md, .cursor/rules/project-ui-design.mdc; then npm test + npm run check:ui.",
  "- Done bar: run node scripts/check-delivery.mjs, check-agents.mjs, check-scope.mjs (and project-ui checks if UI changed) before commit/push.",
  "- Prefer smallest correct change; keep every affected document current in the same stage.",
].join("\n");

process.stdout.write(
  JSON.stringify({
    continue: true,
    hookSpecificOutput: {
      hookEventName: "SessionStart",
      additionalContext,
    },
  }),
);

