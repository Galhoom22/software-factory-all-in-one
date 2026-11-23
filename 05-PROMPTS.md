# Prompts — What to Ask the Agent at Each Step

Ready prompts for the steps in [`01-STEPS.md`](01-STEPS.md). Replace the `<...>` parts. Write them in any language; the agent always replies in **English** per `AGENTS.md`. Each prompt assumes the agent follows `docs/AGENT_START.md` and `AGENTS.md` (checks, commit, push, CI).

## Implementation bar (judgment)

When coding in an implementation repo (see also [08-IMPLEMENTATION-DAY.md](08-IMPLEMENTATION-DAY.md) and [07-judgment/agent-skills.md](07-judgment/agent-skills.md)):

1. State assumptions or ask — do not silently invent requirements.
2. Prefer a thin vertical slice that leaves tests green.
3. Contract before dual FE/BE work (docs/API_CONTRACT.md).
4. High-stakes changes: name what would falsify the claim before Done.
5. Pre-merge: correctness, readability, architecture, security, performance (CodeRabbit Free CLI + CI).

## Technologies packs
Use with [`technologies/README.md`](technologies/README.md).

> Open `playbook/technologies/<stack>/` for the stack I am using (start with `php/` + `php-8.6` for PHP). Follow official-refs, best-practices, **quality.md**, use-these, stop-using, and common-mistakes. **Automatically** re-check official docs/Context7 for the pinned line (no separate search ask). Enforce modern syntax + Clean Code + architecture + earned patterns. Do not dump the full vendor manual. Do not change the product’s SRS version pin without an ADR. If the pack is missing, create it from `technologies/_pack-template/`, update coverage, and sync the studio playbook mirror.

## Playbook coverage (before adding a practice)
Use with [`EXCELLENCE.md`](EXCELLENCE.md) + [`coverage/README.md`](coverage/README.md). Prefer deepen-over-duplicate.

> Before adding or inventing practice `<X>` in the playbook/template: confirm it raises an [`EXCELLENCE.md`](EXCELLENCE.md) dimension (none down). Then read `playbook/coverage/README.md` and the matching domain file. Reply with Status (✅/⚠️/❌), Coverage %, paths, and Action (skip / deepen / add). If ✅ and high %, do not create a parallel file — deepen the existing home only if professionalism clearly rises. If you change the playbook, update the coverage row/% in the same change and sync the studio playbook mirror.
> If `<X>` would **lower** professionalism or weaken the day/workflow: Action = **refuse**; explain why; propose a better alternative or recommend skipping (Candor / D-82). Do not dual-sync a degrading change.
> If `<X>` would violate COMPLIANCE/SECURITY, professional ethics, or create unmanaged High risk: Action = **refuse**; cite the rule/risk class; propose a **safer alternative scenario** (`07-judgment/compliance-ethics-risk.md`, D-83).

## Requirements-driven activation

Use with [`00-USAGE.md`](00-USAGE.md). Prefer this over asking the user to pick templates.

**New planning repo (user already added `my-project-requirements.md`):**

> Root `my-project-requirements.md` is present. That is the activation signal. Read it fully, then `playbook/00-USAGE.md` and `playbook/01-STEPS.md`. Do not wait for another command. Do not overwrite the entry file. Apply 80/20: produce the smallest complete planning workspace for this project. Fill placeholders from the file, ask only blocking questions, record assumptions, keep `playbook/` generic, and do not create implementation repos unless I authorize that.

**Reconcile after the user edited the entry file:**

> I updated `my-project-requirements.md`. Reconcile derived planning docs (`requirements.md`, BRD/PRD/SRS, and anything stale). Preserve accepted decisions unless the new text justifies revisiting them. List what is still incomplete. Do not duplicate whole documents from scratch.

**Read the repository (start of every chat — detect entry file):**

> First check for root `my-project-requirements.md`. If it exists, follow `AGENTS.md` § Requirements-driven activation and `playbook/00-USAGE.md`. Also read `docs/AGENT_START.md`, `AGENTS.md`, `README.md`, `requirements.md` (if present), `.cursor/rules/`, `.codex/`, `.github/`, `docs/`, `playbook/`, and `project-ui/`. Then continue the user's task (or planning if the entry file just activated work).

## Starting

**Read the repository (start of every chat):**

> Check for root `my-project-requirements.md` first (activation). Then read `docs/AGENT_START.md`, `AGENTS.md`, `README.md`, `requirements.md` (if present), `.cursor/rules/`, `.codex/`, `.github/copilot-instructions.md`, `GEMINI.md`, `.windsurf/rules/`, `.github/`, `docs/`, `playbook/`, and `project-ui/`, then reply only "ok".

**Any AI (including a weak or unfamiliar harness):**

> You are a coding agent in this planning repository. Read `docs/AGENT_START.md` first, then obey `AGENTS.md` completely. There is no MVP delivery mode — actor loop only (`docs/DELIVERY.md`). Never add application code outside `project-ui/`. Never force-push or commit secrets / real personal data. Reply in English. After each stage run `node scripts/check-delivery.mjs`, `node scripts/check-agents.mjs`, and `node scripts/check-scope.mjs` (and project-ui checks if you touched the prototype). Then reply only "ok".

**OpenAI Codex CLI (first session — preferred harness):**

> You are OpenAI Codex CLI in this planning repository (started from the git root). Obey `docs/AGENT_START.md`, `AGENTS.md`, and `.codex/` completely (see `.codex/CLI.md`). There is no MVP delivery mode — actor loop only (`docs/DELIVERY.md`). Never add application code outside `project-ui/`. Never force-push or commit secrets / real personal data. Before any `project-ui` edit, read `PRODUCT.md`, `DESIGN.md`, and `.cursor/rules/project-ui-design.mdc`. After each stage run `node scripts/check-delivery.mjs`, `check-agents.mjs`, and `check-scope.mjs`, then commit with Conventional Commits. Reply in English. Confirm SessionStart rails loaded, then reply only "ok".

**OpenAI Codex (IDE extension or Desktop app — same rails as CLI):**

> Same rules as Codex CLI. Trust this project and approve `.codex/hooks.json` via `/hooks` if prompted. Obey `docs/AGENT_START.md` and `AGENTS.md`. Reply only "ok".

**Set up from the playbook (new product):**

> This is a new planning repository. Seed `playbook/templates/` per `playbook/00-USAGE.md` / `playbook/README.md`. I will put (or already put) requirements in root `my-project-requirements.md` — treat that file as activation. Fill placeholders from it, ask only blocking questions, keep the playbook generic, then follow `playbook/01-STEPS.md` with 80/20 depth.

## Phase 0 and 1

> List the competitors of `<product>` in `<markets>`, pick the single closest one to learn from (**clean-room**: patterns/flows only — no code, logos, copy, or owned content), and list the features that would make us stronger than it. When that peer is load-bearing, add a recon map + must/should/could matrix (`docs/competitor-recon/` or BRD appendix) per `playbook/07-judgment/competitor-recon.md`. If using public reviews for gaps: verbatim linked quotes only, state sample size, mark thin themes — never fabricate. Write the result into BRD §8 and `docs/REFERENCES.md`.

> Turn this idea into `requirements.md` in English, following the template's line style. Include both interface languages with a switch on every screen, every sign-in method, sign-out, settings, data rights, billing, the account emails, and the empty state of every core object: `<idea>`.

## Phase 2

> Create the BRD, PRD, and SRS from `requirements.md`. Every FR and NFR has an Owner (FE / BE / Both) and appears in SRS §10 traceability. Write the stack in SRS §2 with versions checked today on each official site.

> Absorb GoF-style design-pattern judgment (problem → naive → blueprint; composition; shared language; forbid pattern-for-show) into FEATURE_SDLC and `07-judgment/design-patterns.md`. Do not dump a pattern catalog into the repo.

> Absorb Pareto DSA / Big-O habits (name `n`, Time/Space, Brute→better, edges; hot-path check in the day loop) into `07-judgment/dsa-performance.md`, FEATURE Performance module, and `08-IMPLEMENTATION-DAY.md`. Do not dump LeetCode problem catalogs or solution trees into the product.

> Absorb Playwright official intro / best practices / CI / accessibility into the FE TESTING guide and CI templates (short critical list, user-facing locators, web-first asserts, mocked PR API, axe, traces on retry). Update playbook `07-judgment/playwright-e2e.md` if missing. Do not grow a flaky mega-suite.

> Research the payment providers and methods for `<markets>`. Prices only in US dollars, regional prices for `<regions>`, only the main methods on public pages, hosted checkout only. Plan webhook-first entitlement, signature verification, idempotent events, separate local/CI sandboxes (or fakes), and current Checkout/Payment Intent/Setup Intent patterns (no deprecated Sources/Charges/Tokens for new work). Update `requirements.md` §4, expand `SECURITY.md` WH and `COMPLIANCE.md` CP, and every document that mentions pricing. Use the provider's official Agents/docs (MCP/skills or `.md` URLs) — not memorized API shapes. Judgment: `playbook/07-judgment/payments.md`.
> If this product reserves scarce capacity (hotels, appointments, seats, slots): design the booking lifecycle (quote → hold → pay/confirm → cancel) with inventory units, hold TTL, recheck-before-commit, idempotency + external reference, policy snapshots, timezone rules, and supplier webhook/poll handling. Sandbox before live. If using a travel MCP (e.g. Nuitée Connect), mirror official API tool order (search → lock price → book → manage) and never invent confirmation numbers. Update API contract + TESTING. Judgment: `playbook/07-judgment/booking.md` (+ `payments.md` when money moves).

> Write `docs/COMPLIANCE.md` covering the data protection, consumer protection, payment, marketing, accessibility, and AI laws of `<markets>` (include Egypt / Arab / global as relevant), from official sources. List the UI each law requires. Include ethics (IEEE-CS/ACM spirit) and a short risk-management section. Judgment: `playbook/07-judgment/compliance-ethics-risk.md`.

> Write `docs/SECURITY.md` from the latest OWASP Top 10 (web, API, and LLM if the product uses AI), ASVS, and NIST password guidance, with rule IDs, owners, and an Every Page Checklist.

> Write `docs/API_CONTRACT.md` so every PRD screen can be built from it alone, with every business error code, and the contract-first change process.

> Write `docs/DEPLOYMENT.md` (shared) plus `docs/frontend/DEPLOYMENT.md` and `docs/backend/DEPLOYMENT.md` (step by step, one per repository). Pick the cheapest hosting that meets every requirement in SRS §2 and COMPLIANCE, with prices and terms checked today on the official pages, the options compared, environments, release flow, backups, rollback, and when to grow. Record the choice in DECISIONS.md.

> *(In a new implementation repository)* On a branch, run `specify init --here --integration <agent>` with the Spec Kit version pinned in SRS §2, then write the constitution only from rules that already exist in the planning repository, cited by ID: the governing rules, the SECURITY and COMPLIANCE red lines, the accessibility target, the stack versions, this developer's Definition of Done, and the adaptive feature rules in `playbook/04-FEATURE_SDLC.md` (evidence over checklists, no fabricated results, security unchanged by profile).

> *(Handoff to implementation)* Using `playbook/04-FEATURE_SDLC.md`, decompose the approved SRS into epics and independently verifiable features. Write `docs/features/requirements-map.md` so every FR/NFR is mapped or explicitly unresolved, flag conflicts, and create one short feature file per feature from the skeleton. Choose Lightweight / Standard / Comprehensive from risk (profile ≠ ASVS level). Keep Definition of Ready, verification matrix, quality gates, and completion decision honest — a filled template is not Done. Do not copy the SRS into those files.

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

## Context window (during any long session)

Use with [`07-judgment/context-window.md`](07-judgment/context-window.md).

> Keep large tool outputs out of the chat: write or leave them on disk / in the tool store and reply with a path or id plus a short summary (memory pointers). Prefer `path:line` over pasting whole files. If this chat is polluted mid-day, write a progress checkpoint (paths, SHAs, next action) then open a fresh chat with that checkpoint — do not invent mid-day slice-approval waits. End-of-day handoff stays the primary cross-session pointer.

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

> Start today’s tasks. Work the whole must-finish list for this calendar day end-to-end (day run-through). Do not pause for mid-day continue cues. When every checkbox is proven, run automatic closeout (PR → CI green → CodeRabbit → merge → verify on main → CD when configured → tracker → day page → **automatically** capture surprising root causes / useful discoveries in `docs/learning-from-mistakes/` and promote reusable high-bar rules to playbook `06-LESSONS.md` + sync studio mirror — no owner ask), then reply with Pareto 20% and the new-chat handoff only. Follow playbook `08-IMPLEMENTATION-DAY.md` (including § Proportional — D-85; § Context window — D-86; § Studio company seats — D-88; § Software Factory line — D-90: goal + seat + checkout + stage; independent review via CI/CodeRabbit) and `09-CI-CD.md`. On backend/API days also enforce the **API readiness gate** (contract parity + local HTTP + CI; staging/prod smoke per phase) — `07-judgment/api-readiness.md` (includes **API design bar** — `07-judgment/api-design.md`). On any day that changes a shared contract/payload, enforce the **cross-surface compatibility gate** (read sibling expectations; write only this seat; honest handoff) — `07-judgment/cross-surface-compatibility.md`. On High-risk / AI-tool days also run **enterprise system-design** six questions + practice level — `07-judgment/enterprise-system-design.md`. On frontend/public-page days also enforce the **SEO + GEO gate** (index allow-list, metadata, honest schema, people-first/Q&A craft) — `07-judgment/seo-geo.md`; mark N/A when no public surfaces changed.

### End-of-day reply shape (agent — after closeout)

**Pareto 20%** = pick the most important topics (not a full diary). For each topic, write a **full teachable explanation** the owner can paste into ChatGPT to learn — not a terse stub. Put operational facts in the handoff half.

```markdown
## Pareto 20% (teachable depth)

### <Topic 1 — e.g. feature / concept name>
- What shipped and why it matters
- Key terms and concepts (define them)
- How the pieces fit (modules, flows, decisions/trade-offs)
- Proof (tests, SHAs, links) and what to study next

### <Topic 2 — …>
- …

## New-chat handoff (paste into tomorrow’s chat)

    <product> Day N+1 — start today’s tasks (day run-through).

    Paths / SHAs / tracker keys / yesterday shipped (do not redo)
    Must finish today
    Do not break
```

Planning-repo handoffs (long planning chats) still use the section above; implementation days use this shape.

