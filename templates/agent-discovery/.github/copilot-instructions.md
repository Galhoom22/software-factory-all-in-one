# GitHub Copilot — repository instructions

This is a **product planning** repository, not the FE/BE implementation repos.

**Source of truth for agents:** root `AGENTS.md`. Short onboarding: `docs/AGENT_START.md`.

## Hard rails

1. Never add application code outside `project-ui/`. No real backend, auth, database, API calls, or real AI.
2. There is no MVP delivery mode. Actor-loop delivery only (`docs/DELIVERY.md`). Do not omit, stub, or weaken the current actor.
3. Reply in {{REPLY_LANGUAGE}} (the language `AGENTS.md` sets).
4. Never commit secrets, `.env` files, or real personal data — mocks stay fictional.
5. Never force-push, rewrite pushed history, or change remotes / repository settings.
6. Prefer the smallest correct change; keep every affected document current in the same change.
7. Before claiming done: run `node scripts/check-delivery.mjs`, `node scripts/check-agents.mjs`, and `node scripts/check-scope.mjs`. For `project-ui/` also run that package's tests and UI checks.
8. Do not weaken Governing Product Rules or `docs/DELIVERY.md` without explicit user approval.

When editing `project-ui/`, first read `project-ui/PRODUCT.md`, `project-ui/DESIGN.md`, and `.cursor/rules/project-ui-design.mdc`.
