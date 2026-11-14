# Prompts — What to Ask the Agent at Each Step

Ready prompts for the steps in [`01-STEPS.md`](01-STEPS.md). Replace the `<...>` parts. Write them in any language; the agent always replies in **English** per `AGENTS.md`. Each prompt assumes the agent follows `docs/AGENT_START.md` and `AGENTS.md` (checks, commit, push, CI).

## Starting

**Read the repository (start of every chat):**

> Read `docs/AGENT_START.md`, `AGENTS.md`, `README.md`, `requirements.md`, `.cursor/rules/`, `.codex/`, `.github/copilot-instructions.md`, `GEMINI.md`, `.windsurf/rules/`, `.github/`, `docs/`, `playbook/`, and `project-ui/`, then reply only "ok".

**Any AI (including a weak or unfamiliar harness):**

> You are a coding agent in this planning repository. Read `docs/AGENT_START.md` first, then obey `AGENTS.md` completely. There is no MVP delivery mode — actor loop only (`docs/DELIVERY.md`). Never add application code outside `project-ui/`. Never force-push or commit secrets / real personal data. Reply in English. After each stage run `node scripts/check-delivery.mjs`, `node scripts/check-agents.mjs`, and `node scripts/check-scope.mjs` (and project-ui checks if you touched the prototype). Then reply only "ok".

**OpenAI Codex CLI (first session — preferred harness):**

> You are OpenAI Codex CLI in this planning repository (started from the git root). Obey `docs/AGENT_START.md`, `AGENTS.md`, and `.codex/` completely (see `.codex/CLI.md`). There is no MVP delivery mode — actor loop only (`docs/DELIVERY.md`). Never add application code outside `project-ui/`. Never force-push or commit secrets / real personal data. Before any `project-ui` edit, read `PRODUCT.md`, `DESIGN.md`, and `.cursor/rules/project-ui-design.mdc`. After each stage run `node scripts/check-delivery.mjs`, `check-agents.mjs`, and `check-scope.mjs`, then commit with Conventional Commits. Reply in English. Confirm SessionStart rails loaded, then reply only "ok".

**OpenAI Codex (IDE extension or Desktop app — same rails as CLI):**

> Same rules as Codex CLI. Trust this project and approve `.codex/hooks.json` via `/hooks` if prompted. Obey `docs/AGENT_START.md` and `AGENTS.md`. Reply only "ok".

**Set up from the playbook (new product):**

> This is a new planning repository for `<product>`: `<one-line idea>`. Copy `playbook/templates/` to the root as `playbook/README.md` describes, fill every placeholder from what I tell you, and ask me for anything you cannot infer. Then follow `playbook/01-STEPS.md` from Phase 1.

## Phase 0 and 1

> List the competitors of `<product>` in `<markets>`, pick the single closest one to learn from (without copying), and list the features that would make us stronger than it. Write the result into BRD §8.

> Turn this idea into `requirements.md` in English, following the template's line style. Include both interface languages with a switch on every screen, every sign-in method, sign-out, settings, data rights, billing, the account emails, and the empty state of every core object: `<idea>`.

## Phase 2

> Create the BRD, PRD, and SRS from `requirements.md`. Every FR and NFR has an Owner (FE / BE / Both) and appears in SRS §10 traceability. Write the stack in SRS §2 with versions checked today on each official site.

> Research the payment providers and methods for `<markets>`. Prices only in US dollars, regional prices for `<regions>`, only the main methods on public pages, hosted checkout only. Update `requirements.md` §4 and every document that mentions pricing.

> Write `docs/COMPLIANCE.md` covering the data protection, consumer protection, payment, marketing, accessibility, and AI laws of `<markets>`, from official sources. List the UI each law requires.

> Write `docs/SECURITY.md` from the latest OWASP Top 10 (web, API, and LLM if the product uses AI), ASVS, and NIST password guidance, with rule IDs, owners, and an Every Page Checklist.

> Write `docs/API_CONTRACT.md` so every PRD screen can be built from it alone, with every business error code, and the contract-first change process.

> Write `docs/DEPLOYMENT.md` (shared) plus `docs/frontend/DEPLOYMENT.md` and `docs/backend/DEPLOYMENT.md` (step by step, one per repository). Pick the cheapest hosting that meets every requirement in SRS §2 and COMPLIANCE, with prices and terms checked today on the official pages, the options compared, environments, release flow, backups, rollback, and when to grow. Record the choice in DECISIONS.md.

> *(In a new implementation repository)* On a branch, run `specify init --here --integration <agent>` with the Spec Kit version pinned in SRS §2, then write the constitution only from rules that already exist in the planning repository, cited by ID: the governing rules, the SECURITY and COMPLIANCE red lines, the accessibility target, the stack versions, this developer's Definition of Done, and the adaptive feature rules in `playbook/04-FEATURE_SDLC.md` (evidence over checklists, no fabricated results, security unchanged by profile).

> *(Handoff to implementation)* Using `playbook/04-FEATURE_SDLC.md`, decompose the approved SRS into epics and independently verifiable features. Write `docs/features/requirements-map.md` so every FR/NFR is mapped or explicitly unresolved, flag conflicts, and create one short feature file per feature from the skeleton. Do not copy the SRS into those files.

> *(AI products)* Write `docs/AI.md`: at least ten free AI sources with an API, their current models per task, and the rules a source must pass before it handles real data.

## Phase 4

> In `project-ui/`, install `<framework>` using only the official installer from `<official docs URL>`. Install nothing else.

> Set up the design skills with one role each as `playbook/03-PROTOTYPE.md` describes, write `PRODUCT.md`, `DESIGN.md`, the design rules file, the UI guard, and the tests, then add them to CI.

> Build the starter kit from `playbook/03-PROTOTYPE.md` and the home page "Screens and flows".

> Build the `<area>` screens for the `<actor>`: every state in the PROTOTYPE.md state checklist, production-level, realistic fictional data in every language, both themes, phone width. Add them to `screens.ts`, `flows.ts`, and the README Screen Index, and run the design review.

> Walk every flow of the `<actor>` as a first-time and as a returning user. Report every dead end, missing next action, wrong link, or repeated question, then fix them.

> Build every remaining screen and state the `<actor>` needs against the SRS frontend requirements and every API contract error, so nothing is missing for implementation.

## Audits

> Read-only audit: check every derived document against `requirements.md` and against each other. Report only concrete inconsistencies with file, line, the stale text, and what it should say. Then fix them.

> Check every version written in the repository against its official site today. Update only within each version line, and confirm nothing breaks.

> Find repeated or unnecessary content across the repository; merge or delete it.

> Check every screen in Arabic and English for spelling, grammar, alignment, and direction.

> Run `npm run crawl` on a production build and Lighthouse on the main screens; fix every finding.

> Score the repository out of 100 as a planning repository with a prototype. List concrete findings only, then fix them until none remain.

## Handoff Before a New Chat

> I am opening a new chat. Write a handoff I can paste: what the repository is, the rules to follow, the prototype conventions, the CI checks and how to watch the run, the audit commands, tooling quirks, what was done and pushed in this chat (commit hashes and one line each), and the open items and decisions waiting for me.

A good handoff has these sections:

```markdown
# Handoff: <product> planning repo (<path>)

## What this repo is
## Rules (AGENTS.md highlights)
## Prototype conventions
## CI checks (run locally before every push) and how to watch CI
## Audit tools
## Tooling quirks
## Done and pushed (CI green)
## Open items and decisions for me
```

Then start the new chat with the handoff, followed by the "read the repository" prompt above.

## Implementation Day Start and End

Use with [`08-IMPLEMENTATION-DAY.md`](08-IMPLEMENTATION-DAY.md). One fresh chat per calendar day in the FE/BE repo.

### Start the day

> Start today’s tasks. Work the whole must-finish list for this calendar day end-to-end (day run-through). Do not pause for mid-day continue cues. When every checkbox is proven, run automatic closeout, then reply with Pareto 20% and the new-chat handoff only.

### End-of-day reply shape (agent — after closeout)

```markdown
## Pareto 20%
- <highest-leverage facts: what shipped, SHAs/links, risks>

## New-chat handoff (paste into tomorrow’s chat)

    <product> Day N+1 — start today’s tasks (day run-through).

    Paths / SHAs / tracker keys / yesterday shipped (do not redo)
    Must finish today
    Do not break
```

Planning-repo handoffs (long planning chats) still use the section above; implementation days use this shape.

