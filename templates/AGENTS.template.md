# AGENTS.md

<!-- Rename this file to AGENTS.md at the new repository's root. -->

Instructions for AI coding agents working in this repository. These rules override default agent behavior.

**New or weak model?** Read `docs/AGENT_START.md` first (hard rails + map + checks), then continue with this file.

## Agent platforms

This file is the **single rulebook**. Harness-specific files only help discovery — they must stay consistent with this file and never weaken it.

| Harness | Discovers |
|---------|-----------|
| Any / unknown | `docs/AGENT_START.md`, this file, `llms.txt` |
| Codex (OpenAI) | This file + `.codex/` |
| Cursor | This file + `.cursor/rules/` |
| Claude Code | `CLAUDE.md` |
| Gemini CLI | `GEMINI.md` + `.gemini/settings.json` |
| GitHub Copilot | `.github/copilot-instructions.md` + `.github/instructions/` |
| Windsurf / Cascade | This file + `.windsurf/rules/` |

When adding a new harness: add a thin pointer that points here; do not fork a second rulebook.

## Before any edit

1. Confirm the task belongs in this **planning** repo (docs / prototype). Real FE/BE implementation is out of scope here.
2. Read [`docs/DELIVERY.md`](docs/DELIVERY.md) when the change touches scope, screens, actors, or “later / MVP” framing.
3. For prototype work: read its PRODUCT.md, DESIGN.md, and `.cursor/rules/project-ui-design.mdc` before editing.
4. Split into small stages. After each stage, run the relevant checks from `.github/workflows/ci.yml` (at least `node scripts/check-delivery.mjs` for doc/rule changes).

## Communication

- Always reply to the user in **{{REPLY_LANGUAGE}}**, whatever language the user writes in.

## Professionalism bar

- Every pass must leave the repository **measurably more professional** than before: fix defects found on the way (and log them), leave a guard or check when a contract changed, delete dead weight you uncover, verify every interface language and text direction that the change touches, and report concretely what improved. A pass that only adds without improving quality is incomplete.

## Borrowing from outside

- Log every external borrow in [`docs/REFERENCES.md`](docs/REFERENCES.md) in the same commit (taken / rejected / where it landed). Read that register before a new borrowing pass.
- Scope bans live in [`docs/SCOPE_REJECTIONS.md`](docs/SCOPE_REJECTIONS.md) as stable `REJ-xx` IDs.
- Absorb outside methods as judgment only ([`docs/JUDGMENT.md`](docs/JUDGMENT.md) / playbook `07-judgment/`) — never install a second constitution or competing design authority.

## Efficiency (ponytail)

Lazy means efficient, not careless. Before writing anything new: skip if unneeded, reuse what exists, prefer stdlib / platform / installed deps, prefer one clear line over a new abstraction, then write the minimum that works. No unrequested abstractions or dependencies. Shortest **correct** diff after you understand the real flow. Never lazy about security, accessibility, or what the user explicitly asked for.

## Repository Context

- This repository is **for product planning only**. It is **not** the implementation repository. **Never add application code** here; implementation lives in separate repositories.
- **Delivery method ([`docs/DELIVERY.md`](docs/DELIVERY.md)):** **There is no MVP delivery mode.** Work one **actor** at a time: discuss business and product here → design and prototype every screen for that actor to **production** quality (millimetre-accurate) → implement that actor in the backend and frontend repositories → return here for the next actor. Do not omit, weaken, or stub anything for the actor in focus. Deferred features and other actors wait their turn; that is sequencing, not half-finishing the current actor. CI enforces this via `scripts/check-delivery.mjs`.
- **Single exception:** [`project-ui/`](project-ui/README.md) may contain a prototype in the production stack ({{FRONTEND}}), or an API explorer for a backend-only product. It must have no backend, no real API calls, no real AI, no auth, no database, and no real personal data — only static, clearly fictional mock data. Follow its README and `.cursor/rules/` when working there. Prototype fidelity for the actor in focus must match production.
- **Prototype non-negotiables:** bilingual UI with a language switch; full RTL with logical CSS; accessibility bar from COMPLIANCE; mocks shaped like the API contract; no fabricated social proof; keep screen/flow indexes current. Never weaken a quality gate to pass a change.
- [`requirements.md`](requirements.md) is the **source of truth** for product requirements.
- [`docs/BRD.md`](docs/BRD.md), [`docs/PRD.md`](docs/PRD.md), [`docs/SRS.md`](docs/SRS.md), [`docs/API_CONTRACT.md`](docs/API_CONTRACT.md), [`docs/frontend/`](docs/frontend/), and [`docs/backend/`](docs/backend/) are derived from `requirements.md` and must stay consistent with it.
- The team is **frontend and backend**. Frontend-only content goes in `docs/frontend/`, backend-only content in `docs/backend/`, and anything both sides need stays in the shared docs. Every SRS requirement has an Owner (FE / BE / Both). The API contract is the only shared interface.
- [`README.md`](README.md) is the public summary and must stay consistent with `requirements.md`.
- [`docs/COMPLIANCE.md`](docs/COMPLIANCE.md) and [`docs/SECURITY.md`](docs/SECURITY.md) define legal and security red lines. Never propose or document a feature that violates them; flag any conflict to the user. Run the SECURITY "Every Page Checklist" for UI work.
- [`docs/frontend/TESTING.md`](docs/frontend/TESTING.md) and [`docs/backend/TESTING.md`](docs/backend/TESTING.md) define how each owner verifies the product. Keep them split; prefer risk-matched tests over coverage theater.
- [`docs/CODERABBIT.md`](docs/CODERABBIT.md) (if present) defines how an AI PR reviewer is configured for implementation repos. Keep FE/BE yaml and guidelines in sync with SECURITY and the API contract.
- [`docs/TESTSPRITE.md`](docs/TESTSPRITE.md) (if present) defines how agentic live-app verification is configured for staging. Keep FE/BE guidelines and PRD/api-doc uploads in sync with the product contract; never use real personal data.
- [`docs/DECISIONS.md`](docs/DECISIONS.md) records why each lasting decision was made. When a change makes or reverses one, add a new entry (never edit an accepted one).
- [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) is the shared hosting setup, with step-by-step guides in `docs/frontend/` and `docs/backend/`. Re-verify prices and plans on the official pages before relying on them.
- [`docs/DOCKER.md`](docs/DOCKER.md) (and FE/BE `DOCKER.md`) defines local containerization for implementation repos. Never bake secrets into images; do not replace the chosen production host with Docker unless a decision says so.
- [`docs/SEO.md`](docs/SEO.md) and [`docs/frontend/SEO.md`](docs/frontend/SEO.md) define launch search readiness: index public marketing and legal only; keep the signed-in app `noindex`; bilingual metadata, robots/sitemap, honest structured data — never fake authority.
- **Official references only:** versions and documentation links live in [SRS §2](docs/SRS.md#2-technology-stack). Use the latest **stable / Active LTS** of each listed line (not RCs). Verify on the official site before changing a version. Pin CI tools (Node, `impeccable@x.y.z`) to the same lines.
- [`notes.md`](notes.md) holds ideas, not requirements. An idea enters `requirements.md` only when the user decides it, and leaves `notes.md` once it is built.
- `playbook/` holds the reusable method behind this repository. When a change creates a practice worth repeating in the next product (a document, a check, a rule, a lesson), update the playbook in the same commit, keeping it generic. `playbook/04-FEATURE_SDLC.md` is for **implementation** repositories (feature decomposition and adaptive depth); do not create `docs/features/` in the planning repository. `playbook/08-IMPLEMENTATION-DAY.md` is the owner↔agent **day pipeline** (run-through → closeout → Pareto + handoff). Lasting cadence changes update `docs/OWNER_STANDING.md` **and** the playbook (then sync any studio playbook mirror).

## Git Safety (Mandatory)

- **Auto-push:** after every completed change, commit and push without waiting to be asked, but only once everything is verified:
  1. Run the same checks as `.github/workflows/ci.yml` locally and review the staged diff for secrets or real personal data.
  2. Commit only the files related to the change.
  3. After pushing, confirm the CI run passes (for example `gh run watch`). If it fails, fix the cause and push the fix.
  4. If a check fails and cannot be fixed, do not push; report the failure.
- **Never force-push**, never rewrite pushed history (`reset --hard`, `rebase`, `commit --amend`, `filter-*`), and never delete branches, tags, or files unless the user explicitly asks.
- **Never change** the remote URL, repository visibility, or repository settings.
- Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/): `type(scope): summary` (for example `feat(prototype): add billing screen states`).

## Work in Small Stages (Mandatory)

For every AI agent and every change, large or small:

- Split the work into many small stages before editing; each touches a few files and can be checked on its own.
- Finish each stage (edit, check, commit) before starting the next.
- Each stage ends with its own Conventional Commit holding only that stage's files, pushed under the Auto-push rules.
- Run checks as separate short commands and long-running processes in the background; if a command hangs, split the work further instead of retrying the same large step.
- Tell the user which stage is done and what comes next.

## Keeping Documents Current (Mandatory)

In the same commit as every change:

1. Search the repository for the feature, screen ID, route, number, or term that changed, and update every document that mentions it.
2. For prototype work, also update the screen index, the user flows, the Screen Index paragraph in `project-ui/README.md`, and the current actor’s `docs/actors/.../screens.md` / `flow.md`; `npm test` fails if a prototype index entry is missing.
3. Owner-reported UI defects: fix in the same turn and append `project-ui/DESIGN-ERRORS.md`. Non-obvious engineering lessons go under `docs/learning-from-mistakes/`.
4. Fix any outdated statement you notice, or tell the user if it needs their decision.
4. Reread every summary line that counts or lists things and correct it.

## Protecting the Requirements

- Do not remove, weaken, or contradict the **Governing Product Rules** in `requirements.md` without explicit user approval.
- Make **targeted edits** only; preserve section numbering and structure.
- Documentation language is **English**.

## Security and Privacy

- **Never commit secrets** or `.env` files, and **never commit real personal data**.
- Do not add dependencies, third-party scripts, binaries, or large files without justification and user approval.

## Evidence and Assumptions

- **Evidence over checklists.** Do not mark work complete or claim tests, CI, reviews, or deploys succeeded without verifying. Cite the evidence when reporting completion.
- **No silent assumptions.** If ambiguity would change design, API, security, or pricing, ask before inventing an answer.
- **Security is not optional for small changes.** Never weaken COMPLIANCE or SECURITY red lines because a change looks small.

## Scope Discipline

- Do only what the user asked. Follow `docs/DELIVERY.md`: finish the current actor to production quality; postpone other actors and deferred-scope items. **There is no MVP delivery mode.**
- If a request conflicts with these rules, stop and ask the user before proceeding.
