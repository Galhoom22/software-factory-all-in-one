# Agent start (any AI)

<!-- Copy to docs/AGENT_START.md. Replace {{PRODUCT}} and {{CURRENT_ACTOR}}. Use plain path names (no relative Markdown links) so link checkers stay green while this file lives under templates/. -->

Read this file first if you are new to this repository. Then obey `AGENTS.md` in full. Platform-specific files (`.cursor/`, `.codex/`, `CLAUDE.md`, `GEMINI.md`, `.github/copilot-instructions.md`, `.windsurf/`) only help discovery — they never replace `AGENTS.md`.

## What this repository is

- **Product planning only** for {{PRODUCT}}.
- **Not** the frontend or backend implementation repo.
- Allowed code: **`project-ui/`** only — a prototype with **fictional mock data**. No real API, auth, database, or AI.

## Hard rails (never break these)

1. Do **not** add application code outside `project-ui/`.
2. **There is no MVP delivery mode.** Actor-loop only: `docs/DELIVERY.md`. Finish the **current actor** ({{CURRENT_ACTOR}}) to production quality; do not stub or weaken it. Historical “MVP” wording in old decisions is not permission to ship incomplete work.
3. Reply in **English** (or the language `AGENTS.md` sets).
4. Never commit secrets, `.env` files, or **real** personal data.
5. Never force-push, rewrite pushed history, or change remotes / repo settings.
6. Do only what the user asked. Prefer the smallest correct change.
7. Keep every affected document current in the **same** change.
8. Do **not** weaken Governing Product Rules, `docs/DELIVERY.md`, or accepted decisions without **explicit** user approval.

## Where truth lives

| Need | Open |
|------|------|
| Product rules | `requirements.md` |
| Delivery method | `docs/DELIVERY.md` |
| Full agent rules | `AGENTS.md` |
| Decisions | `docs/DECISIONS.md` |
| Legal / security | `docs/COMPLIANCE.md`, `docs/SECURITY.md` |
| Prototype | `project-ui/PRODUCT.md`, `project-ui/DESIGN.md`, `.cursor/rules/project-ui-design.mdc` (open even if you are not Cursor) |

## Git (short)

- Conventional Commits: `type(scope): summary`
- One commit per finished stage
- Push only after checks pass

## Checks (before claiming done)

```bash
node scripts/check-delivery.mjs
node scripts/check-agents.mjs
node scripts/check-scope.mjs
```

If you changed `project-ui/`, also run that package's `npm test`, `npm run check:ui`, and `npm run lint`.

## If something is unclear

Ask the user. Do not invent product, pricing, security, or API answers.
