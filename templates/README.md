# {{PRODUCT}} — Planning

Planning repository for **{{PRODUCT}}**: {{ONE_LINE}}.

> ⚠️ **This repository is for product planning only.** It is **not** the implementation repository. The implementation ({{FRONTEND}} frontend, {{BACKEND}} backend) will live in separate repositories. The only code allowed here is [`project-ui/`](project-ui/README.md): a non-functional prototype with mock data, used to understand the product.

## The Idea

1. Step one of the user's path.
2. Step two.

## Core Principles

- **Principle** — one line each, copied in spirit from requirements.md §17.

## Delivery method

**There is no MVP delivery mode.** One actor at a time to production quality — see [`docs/DELIVERY.md`](docs/DELIVERY.md).

## Current actor scope

- One line per current-actor feature (requirements.md §7).

**Deferred (later actors / phases):** one line listing requirements.md §8.

## Documents

> 📌 marks the source of truth · ⭐ marks where each developer starts

### Shared (both developers)

- 📌 [`requirements.md`](requirements.md) — full product requirements (source of truth).
- [`docs/DELIVERY.md`](docs/DELIVERY.md) — actor-loop delivery; no MVP mode.
- [`docs/BRD.md`](docs/BRD.md) — business requirements: problem, objectives, users, success metrics.
- [`docs/PRD.md`](docs/PRD.md) — product requirements: features, user stories, acceptance criteria, Definition of Ready.
- [`docs/SRS.md`](docs/SRS.md) — software requirements: stack, architecture, functional and non-functional requirements with owners, data model.
- [`docs/API_CONTRACT.md`](docs/API_CONTRACT.md) — the only meeting point between frontend and backend.
- [`docs/DECISIONS.md`](docs/DECISIONS.md) — why each lasting decision was made.
- [`docs/COMPLIANCE.md`](docs/COMPLIANCE.md) — legal red lines and pre-launch checklist.
- [`docs/SECURITY.md`](docs/SECURITY.md) — security red lines, OWASP mapping, Every Page Checklist.
- [`docs/CODERABBIT.md`](docs/CODERABBIT.md) — optional AI PR-reviewer setup (CodeRabbit) for implementation repos.
- [`docs/TESTSPRITE.md`](docs/TESTSPRITE.md) — optional agentic live-app verification (TestSprite) for implementation staging.
- [`docs/AI.md`](docs/AI.md) — *Optional:* AI sources and the rules a source must pass.
- [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) — hosting choice, cost, environments, release flow, and rollback.
- [`docs/SEO.md`](docs/SEO.md) — launch SEO (public pages only); FE details in `docs/frontend/SEO.md`.
- [`docs/DOCKER.md`](docs/DOCKER.md) — local Docker Compose; FE/BE details in `docs/frontend/DOCKER.md` and `docs/backend/DOCKER.md`.
- [`notes.md`](notes.md) — ideas for later that are not requirements yet.
- `software-factory-all-in-one/` — how this planning repository is set up, reusable for the next product.

### Frontend developer

- ⭐ [`docs/frontend/README.md`](docs/frontend/README.md) — start here.
- [`docs/frontend/ARCHITECTURE.md`](docs/frontend/ARCHITECTURE.md) — architecture proposal.
- [`docs/frontend/TESTING.md`](docs/frontend/TESTING.md) — frontend testing guide.
- [`docs/frontend/coderabbit.yaml`](docs/frontend/coderabbit.yaml) + [`CODERABBIT_GUIDELINES.md`](docs/frontend/CODERABBIT_GUIDELINES.md) — optional CodeRabbit copyables.
- [`docs/frontend/TESTSPRITE_GUIDELINES.md`](docs/frontend/TESTSPRITE_GUIDELINES.md) + `testsprite.prd.md` — optional TestSprite FE copyables.
- [`docs/frontend/DEPLOYMENT.md`](docs/frontend/DEPLOYMENT.md) — step-by-step deployment.
- [`project-ui/`](project-ui/README.md) — prototype.

### Backend developer

- ⭐ [`docs/backend/README.md`](docs/backend/README.md) — start here.
- [`docs/backend/ARCHITECTURE.md`](docs/backend/ARCHITECTURE.md) — architecture proposal.
- [`docs/backend/TESTING.md`](docs/backend/TESTING.md) — backend testing guide.
- [`docs/backend/coderabbit.yaml`](docs/backend/coderabbit.yaml) + [`CODERABBIT_GUIDELINES.md`](docs/backend/CODERABBIT_GUIDELINES.md) — optional CodeRabbit copyables.
- [`docs/backend/TESTSPRITE_GUIDELINES.md`](docs/backend/TESTSPRITE_GUIDELINES.md) + `testsprite.prd.md` + `testsprite.api-doc.md` — optional TestSprite BE copyables.
- [`docs/backend/DEPLOYMENT.md`](docs/backend/DEPLOYMENT.md) — step-by-step server setup and deployment.

## Prototype

[`project-ui/`](project-ui/README.md) covers: one line per built area.

## Planned Tech Stack

{{FRONTEND}} frontend, {{BACKEND}} backend. Exact versions and official references live only in [SRS §2](docs/SRS.md#2-technology-stack).

## Roadmap

| Phase | Focus |
|-------|-------|
| 1 (Current actor) | requirements.md §7 |
| 2 | requirements.md §12 |

## License

See `LICENSE`.
