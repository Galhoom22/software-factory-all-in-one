# TestSprite — Agentic Testing Setup

> ⚠️ **Planning only.** TestSprite runs against the **implementation** apps (staging or local), not this planning repository. It does **not** replace in-repo unit/feature/E2E tests.

> Product: [TestSprite](https://www.testsprite.com/). Prefer official docs for install (MCP / CLI) when you subscribe.

| Field | Value |
|-------|-------|
| Document | TestSprite setup |
| Status | Draft (use when the team subscribes) |
| Related | frontend/backend `TESTING.md`, `API_CONTRACT.md`, `SECURITY.md` |

## How we use it

| Surface | Project type | Upload | Copy into implementation repo |
|---------|--------------|--------|-------------------------------|
| Frontend | `frontend` | `docs/frontend/testsprite.prd.md` as `--role prd` | `TESTSPRITE_GUIDELINES.md` + optional `testsprite.plans/` |
| Backend | `backend` | `testsprite.prd.md` as `--role prd` + lean api-doc or full `API_CONTRACT.md` as `--role api-doc` | `TESTSPRITE_GUIDELINES.md` |

Keep FE and BE in **separate** TestSprite projects. Prefer staging with **fictional** fixtures only. Store API keys in env — never commit them.

## Install checklist (when you subscribe)

1. Create an account and API key.
2. `testsprite setup` (or MCP with `API_KEY`).
3. Create two projects with staging URLs.
4. Upload PRD / api-doc roles.
5. Store fictional test credentials on each project.
6. Generate or hand-author plans; dry-run before spending credits.
7. Optional: CI against staging deploys.

## Keeping docs current

When product journeys or the API contract change, update the upload files in the same planning commit, then re-upload to TestSprite.
