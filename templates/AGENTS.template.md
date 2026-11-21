AGENTS.template.md [89L]
AGENTS.template.md [144L]
# AGENTS.md
<!-- Rename this file to AGENTS.md at the new repository's root. -->
Instructions for AI coding agents working in this repository. These rules override default agent behavior.
**New or weak model?** Read `docs/AGENT_START.md` first (hard rails + map + checks), then continue with this file.
## Requirements-driven activation (mandatory)
Root file **`my-project-requirements.md`** is the user's project entry and the **activation signal**.
... [lean-ctx: omitted 1 lines]
1. If root `my-project-requirements.md` **exists**, treat that as the instruction to run (or continue) playbook planning — do **not** wait for "start planning" / "initialize".
... [lean-ctx: omitted 1 lines]
3. Read `playbook/00-USAGE.md` and `playbook/01-STEPS.md`. Apply **80/20**: smallest complete planning set for this project's complexity; skip unneeded docs.
... [lean-ctx: omitted 1 lines]
6. On re-runs: reconcile derived docs; preserve accepted decisions unless the new requirements justify revisiting them; list incomplete work. Do not duplicate whole documents from scratch.
... [lean-ctx: omitted 1 lines]
If root `my-project-requirements.md` is **absent**, do **not** assume a new-project bootstrap was requested. Follow the user's explicit task and the rest of this file.
## Agent platforms
This file is the **single rulebook**. Harness-specific files only help discovery — they must stay consistent with this file and never weaken it.
... [lean-ctx: omitted 3 lines]
| Gemini CLI | `GEMINI.md` + `.gemini/settings.json` |
| GitHub Copilot | `.github/copilot-instructions.md` + `.github/instructions/` |
| Windsurf / Cascade | This file + `.windsurf/rules/` |
... [lean-ctx: omitted 1 lines]
## Before any edit
1. Confirm the task belongs in this **planning** repo (docs / prototype). Real FE/BE implementation is out of scope here.
... [lean-ctx: omitted 1 lines]
3. For prototype work: read its PRODUCT.md, DESIGN.md, and `.cursor/rules/project-ui-design.mdc` before editing.
4. Split into small stages. After each stage, run the relevant checks from `.github/workflows/ci.yml` (at least `node scripts/check-delivery.mjs` for doc/rule changes).
## Communication
- **Candor:** if the owner asks for something that would lower professionalism, weaken a working workflow, violate COMPLIANCE/SECURITY/ethics, or create unmanaged High risk, say **no** clearly, explain why, and propose a safer alternative scenario or skip (`docs/OWNER_STANDING.md` § Candor; `07-judgment/compliance-ethics-risk.md`).
- Always reply to the user in **{{REPLY_LANGUAGE}}**, whatever language the user writes in.
## Professionalism bar
- Every pass must leave the repository **measurably more professional** than before: fix defects found on the way (and log them), leave a guard or check when a contract changed, delete dead weight you uncover, verify every interface language and text direction that the change touches, and report concretely what improved. A pass that only adds without improving quality is incomplete.
- Playbook/template edits follow playbook `EXCELLENCE.md`: ratchet toward the best reusable method; raise an excellence dimension; deepen-over-duplicate via `playbook/coverage/`; never dual-sync a bar-lowering change.
## Borrowing from outside
- Log every external borrow in [`docs/REFERENCES.md`](docs/REFERENCES.md) in the same commit (taken / rejected / where it landed). Read that register before a new borrowing pass.
... [lean-ctx: omitted 1 lines]
- Absorb outside methods as judgment only ([`docs/JUDGMENT.md`](docs/JUDGMENT.md) / playbook `07-judgment/`) — never install a second constitution or competing design authority.
## Efficiency (ponytail)
Lazy means efficient, not careless. Before writing anything new: skip if unneeded, reuse what exists, prefer stdlib / platform / installed deps, prefer one clear line over a new abstraction, then write the minimum that works. No unrequested abstractions or dependencies. Shortest **correct** diff after you understand the real flow. Never lazy about security, accessibility, or what the user explicitly asked for.
## Repository Context
- This repository is **for product planning only**. It is **not** the implementation repository. **Never add application code** here; implementation lives in separate repositories.
- **Delivery method ([`docs/DELIVERY.md`](docs/DELIVERY.md)):** **There is no MVP delivery mode.** Work one **actor** at a time: discuss business and product here → design and prototype every screen for that actor to **production** quality (millimetre-accurate) → implement that actor in the backend and frontend repositories → return here for the next actor. Do not omit, weaken, or stub anything for the actor in focus. Deferred features and other actors wait their turn; that is sequencing, not half-finishing the current actor. CI enforces this via `scripts/check-delivery.mjs`.
- **Single exception:** [`project-ui/`](project-ui/README.md) may contain a prototype in the production stack ({{FRONTEND}}), or an API explorer for a backend-only product. It must have no backend, no real API calls, no real AI, no auth, no database, and no real personal data — only static, clearly fictional mock data. Follow its README and `.cursor/rules/` when working there. Prototype fidelity for the actor in focus must match production.
... [lean-ctx: omitted 5 lines]
- [`docs/SEO.md`](docs/SEO.md) and [`docs/frontend/SEO.md`](docs/frontend/SEO.md) define launch search readiness: index public marketing and legal only; keep the signed-in app `noindex`; bilingual metadata, robots/sitemap, honest structured data, plus GEO craft for AI answer surfaces — never fake authority. Day gate: playbook `07-judgment/seo-geo.md`.
- **Official references only:** versions and documentation links live in [SRS §2](docs/SRS.md#2-technology-stack). Use the latest **stable / Active LTS** of each listed line (not RCs). Verify on the official site before changing a version. Pin CI tools (Node, `impeccable@x.y.z`) to the same lines.
... [lean-ctx: omitted 1 lines]
- `playbook/` holds the reusable method behind this repository. When a change creates a practice worth repeating in the next product (a document, a check, a rule, a lesson), update the playbook in the same commit, keeping it generic. `playbook/04-FEATURE_SDLC.md` is for **implementation** repositories (feature decomposition and adaptive depth); do not create `docs/features/` in the planning repository. `playbook/08-IMPLEMENTATION-DAY.md` is the owner↔agent **day pipeline** (run-through → closeout → Pareto + handoff). Lasting cadence changes update `docs/OWNER_STANDING.md` **and** the playbook (then sync any studio playbook mirror).
## Git Safety (Mandatory)
- **Auto-push:** after every completed change, commit and push without waiting to be asked, but only once everything is verified:
... [lean-ctx: omitted 1 lines]
- **Never force-push**, never rewrite pushed history (`reset --hard`, `rebase`, `commit --amend`, `filter-*`), and never delete branches, tags, or files unless the user explicitly asks.
... [lean-ctx: omitted 1 lines]
- Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/): `type(scope): summary` (for example `feat(prototype): add billing screen states`).
## Work in Small Stages (Mandatory)
For every AI agent and every change, large or small:
... [lean-ctx: omitted 1 lines]
... [lean-ctx: omitted 2 lines]
- Run checks as separate short commands and long-running processes in the background; if a command hangs, split the work further instead of retrying the same large step.
... [lean-ctx: omitted 1 lines]
## Keeping Documents Current (Mandatory)
In the same commit as every change:
... [lean-ctx: omitted 1 lines]
2. For prototype work, also update the screen index, the user flows, the Screen Index paragraph in `project-ui/README.md`, and the current actor’s `docs/actors/.../screens.md` / `flow.md`; `npm test` fails if a prototype index entry is missing.
3. Owner-reported UI defects: fix in the same turn and append `project-ui/DESIGN-ERRORS.md`. Non-obvious engineering lessons go under `docs/learning-from-mistakes/`.
... [lean-ctx: omitted 2 lines]
## Protecting the Requirements
- Do not remove, weaken, or contradict the **Governing Product Rules** in `requirements.md` without explicit user approval.
- Make **targeted edits** only; preserve section numbering and structure.
... [lean-ctx: omitted 1 lines]
## Security and Privacy
- **Never commit secrets** or `.env` files, and **never commit real personal data**.
- Do not add dependencies, third-party scripts, binaries, or large files without justification and user approval.
## Evidence and Assumptions
- **Evidence over checklists.** Do not mark work complete or claim tests, CI, reviews, or deploys succeeded without verifying. Cite the evidence when reporting completion.
- **No silent assumptions.** If ambiguity would change design, API, security, or pricing, ask before inventing an answer.
... [lean-ctx: omitted 1 lines]
## Scope Discipline
- Do only what the user asked. Follow `docs/DELIVERY.md`: finish the current actor to production quality; postpone other actors and deferred-scope items. **There is no MVP delivery mode.**
- If a request conflicts with these rules, stop and ask the user before proceeding.

