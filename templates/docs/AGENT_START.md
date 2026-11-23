# Agent start (any AI)

<!-- Copy to docs/AGENT_START.md. Replace {{PRODUCT}} and {{CURRENT_ACTOR}}. Use plain path names (no relative Markdown links) so link checkers stay green while this file lives under templates/. -->

Read this file first if you are new to this repository. Then obey `AGENTS.md` in full. Platform-specific files (`.cursor/`, `.codex/`, `CLAUDE.md`, `GEMINI.md`, `.github/copilot-instructions.md`, `.windsurf/`) only help discovery — they never replace `AGENTS.md`.

## First check — requirements activation

1. Look for root **`my-project-requirements.md`**.
2. If it **exists**: that file is the activation signal. Read it fully, then read `playbook/00-USAGE.md` and run (or continue) playbook planning per `AGENTS.md` § Requirements-driven activation. Do **not** wait for a separate “start planning” command. Do **not** overwrite the entry file.
3. If it is **absent**: do **not** bootstrap a new product unless the user explicitly asked. Continue with the user’s task under the rails below.
4. Formal product truth, once written, lives in `requirements.md` (derived from the entry file). Keep both consistent when both exist.

## What this repository is

- **Product planning only** for {{PRODUCT}}.
- **Not** the frontend or backend implementation repo.
- Allowed code: **`project-ui/`** only — a prototype with **fictional mock data**. No real API, auth, database, or AI.

## Hard rails (never break these)

1. Do **not** add application code outside `project-ui/`.
2. **There is no MVP delivery mode.** Actor-loop only: `docs/DELIVERY.md`. Finish the **current actor** ({{CURRENT_ACTOR}}) to production quality; do not stub or weaken it. Historical “MVP” wording in old decisions is not permission to ship incomplete work.
3. Reply in **English** (or the language `AGENTS.md` sets).
4. **Candor:** refuse/advise when an ask would lower professionalism (`OWNER_STANDING` § Candor).
4. Never commit secrets, `.env` files, or **real** personal data.
5. Never force-push, rewrite pushed history, or change remotes / repo settings.
6. Do only what the user asked. Prefer the smallest correct change. (Exception: when `my-project-requirements.md` is present, “what the user asked” includes running the playbook from that file.)
7. Keep every affected document current in the **same** change.
8. Do **not** weaken Governing Product Rules, `docs/DELIVERY.md`, or accepted decisions without **explicit** user approval.
9. Keep `playbook/` generic — no product names, people, or tracker IDs in method docs.
10. Do **not** create implementation repositories unless the user explicitly authorizes that.

## Where truth lives

| Need | Open |
|------|------|
| Human entry / activation | `my-project-requirements.md` (when present) |
| Product rules (formal) | `requirements.md` |
| How to use the playbook | `playbook/00-USAGE.md` |
| Delivery method | `docs/DELIVERY.md` |
| Full agent rules | `AGENTS.md` |
| Decisions | `docs/DECISIONS.md`, `docs/decision-logs/` |
| Scope bans / borrows | `docs/SCOPE_REJECTIONS.md`, `docs/REFERENCES.md` |
| Judgment / actors | `docs/JUDGMENT.md`, `docs/actors/` |
| Legal / security | `docs/COMPLIANCE.md`, `docs/SECURITY.md` |
| Prototype | `project-ui/PRODUCT.md`, `project-ui/DESIGN.md`, `project-ui/PRE-DELIVERY-UX.md`, `project-ui/ANTI-SLOP.md`, `project-ui/DESIGN-ERRORS.md`, `.cursor/rules/project-ui-design.mdc` (open even if you are not Cursor) |

## Git (short)

- Conventional Commits: `type(scope): summary`
- One commit per finished stage
- Push only after checks pass

## Checks (before claiming done)

```bash
node scripts/check-delivery.mjs
node scripts/check-agents.mjs
node scripts/check-scope.mjs
node scripts/check-planning-entry.mjs
```

If this repository keeps a nested `playbook/`, also run `node playbook/scripts/check-requirements-activation.mjs` and `node playbook/scripts/check-playbook-freshness.mjs`.

If you changed `project-ui/`, also run that package's `npm test`, `npm run check:ui`, and `npm run lint`.

## If something is unclear

Ask the user only when blocked. Separate confirmed facts from assumptions; record assumptions. Do not invent product, pricing, security, or API answers that change the design.
