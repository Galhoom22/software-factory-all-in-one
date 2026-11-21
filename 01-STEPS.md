# Steps — From an Idea to a Complete Plan

**Requirements-driven path (preferred for new products):** the user seeds this playbook into an empty planning repo and adds root `my-project-requirements.md`. That file is the activation signal — see [`00-USAGE.md`](00-USAGE.md). The agent detects it, owns planning, applies **80/20** (smallest complete set for this project's complexity), and walks the phases below without waiting for "start planning". Do **not** overwrite the entry file. Formal `requirements.md` is derived from it. If the entry file is absent, do **not** assume bootstrap.

The order below is the order that worked, corrected with hindsight. In the reference product several things came late and forced rework: the product name changed after dozens of screens, compliance, security, the decision log, and the license were applied backwards, and prices changed three times. Here they come early. Each step names its output and what **done** means; [`05-PROMPTS.md`](05-PROMPTS.md) has a ready prompt for most steps, and [`06-LESSONS.md`](06-LESSONS.md) explains why each rule exists.

## Phase 0 — Before the Repository

### 0.0 Provide the entry requirements file

- **Output:** root `my-project-requirements.md` (copy from [`examples/my-project-requirements.example.md`](examples/my-project-requirements.example.md) and adapt). Incomplete is fine.
- **Why:** this is the **only** required human input and the agent activation signal ([`00-USAGE.md`](00-USAGE.md)).
- **Agent:** on detecting the file, start or continue planning automatically; ask only blocking questions; record assumptions.
- **Done:** the file exists at the repo root and the agent has read it. The agent must never overwrite it.

### 0.1 Decide the name and the brand basics

- **Output:** the product name in every interface language, checked for an available domain and no obvious trademark clash.
- **Why first:** the name appears in every document, screen, metadata tag, and mock email. Renaming later touched the whole repository.
- **Done:** the name is final and written in `requirements.md`.

### 0.2 Research competitors and choose references

- **Output:** a short competitor list, the **one** closest competitor to learn from, the features that would make the product stronger than it, and the references the prototype will borrow from: one component foundation (for example shadcn/ui), one UX reference for the core screen (for example Reactive Resume), and visual inspiration sites. Start [`docs/REFERENCES.md`](templates/docs/REFERENCES.md) in the same pass (taken / rejected / where it landed).
- **Rule:** borrow patterns, never branding, logos, copy, or illustrations. Record every reference and its license.
- **Done:** BRD §8 lists the competitors; `docs/REFERENCES.md` has the borrow register; `project-ui/README.md` lists prototype references.

### 0.3 Create the repository and the workspace

- **Output:** a **private**, empty GitHub repository named `<product>-planning` (no generated README, license, or `.gitignore`; they come from the templates), seeded from this playbook’s `templates/` (or from the studio’s private playbook mirror when one exists), the GitHub CLI signed in (`gh auth status`), and the agent workspace ready. Product and planning work repos stay private.
- **Workspace:** the reply language rule, the ponytail rule, design skills with one role each (see [`03-PROTOTYPE.md`](03-PROTOTYPE.md#design-skills)), and an official-documentation source for agents (for example the Context7 MCP server).
- **Also:** add root `my-project-requirements.md` in the same bootstrap when starting a new product (see 0.0).
- **Done:** the first commit (templates copied, entry file present when bootstrapping) is pushed.

## Phase 1 — Foundation

### 1. Write the requirements

- **Output:** [`requirements.md`](templates/requirements.md), the structured single source of truth, in English — derived from root `my-project-requirements.md` when that entry file exists (write the idea in any language first; the agent converts and structures).
- **How:** the idea, the problem, the core flow, every feature as `User:` / `System:` / `Rule:` lines, the **current actor** scope, what is deferred, the actor-loop delivery method ([`02-DELIVERY.md`](02-DELIVERY.md)), and the **Governing Product Rules**. Open [`docs/SCOPE_REJECTIONS.md`](templates/docs/SCOPE_REJECTIONS.md) with stable `REJ-xx` IDs for out-of-scope and won-forever items, and seed [`docs/actors/Actor-01-CurrentActor/`](templates/docs/actors/Actor-01-CurrentActor/) (rename the folder to a real slug).
- **Include from the start:** both interface languages and a language switch on every screen, sign-in methods (email plus the social providers the market expects), sign-out, account settings, data rights (download, delete, consent), and the empty states of every core object. The reference product added each of these later.
- **Done:** someone new can read it and explain the current actor, that there is no MVP delivery mode, and the red lines.

### 2. Add the README, the license, and the notes file

- **Output:** [`README.md`](templates/README.md), a `LICENSE` (from [`LICENSE.template`](templates/LICENSE.template)), and [`notes.md`](templates/notes.md) for ideas that are not requirements yet.
- **Rule:** an idea moves from `notes.md` to `requirements.md` when it is decided, and leaves `notes.md` once it is built.
- **README style:** a "Jump to" line, emojis only as wayfinding at the start of headings and list items, and a prototype section that lists what is built. Update it after every visible change.
- **Done:** README and requirements agree; `package.json` files carry the same license (`UNLICENSED` for proprietary).

### 3. Add the agent rules

- **Output:** `AGENTS.md` (from [`AGENTS.template.md`](templates/AGENTS.template.md)), `docs/AGENT_START.md` (short onboarding for any / weak model), harness pointers from [`agent-discovery/`](templates/agent-discovery/) (`CLAUDE.md`, `GEMINI.md`, `llms.txt`, Copilot instructions, Windsurf rule, `.gemini/settings.json`), `.cursor/rules/` (from [`cursor-rules/`](templates/cursor-rules/)), and `.codex/` (from [`codex/`](templates/codex/)).
- **How:** planning-only scope, the source of truth, git safety (no force-push, no history rewrite, auto-push only after checks pass), Conventional Commits, small stages with one commit each, "keep every document current", the reply language, and personal files never to commit. **One rulebook only** (`AGENTS.md`); every other file is a thin pointer. Keep Cursor / Codex / Copilot / Gemini / Windsurf aligned — platform folders never weaken the shared rules.
- **Done:** any agent (Cursor, Codex, Claude, Gemini, Copilot, Windsurf, or a plain chat model pointed at `docs/AGENT_START.md`) can work without asking what the rules are.

### 4. Add repository hygiene and CI

- **Output:** `.editorconfig`, `.gitattributes`, `.gitignore`, and [`.github/`](templates/.github/): CI, pull request checklist, issue forms (blank issues off), CODEOWNERS, Dependabot.
- **How:** CI starts small (secret scan, required documents exist, governing rules intact, every SRS requirement has an owner) and grows with every later step. Pin every action to a commit SHA.
- **Done:** CI passes on `main`. Turn on branch protection for `main` yourself in the GitHub settings (agents must not change repository settings).

## Phase 2 — Shared Documents

### 5. Business and product documents

- **Output:** [`docs/BRD.md`](templates/docs/BRD.md) (why: problem, objectives, users, competitors, success metrics) and [`docs/PRD.md`](templates/docs/PRD.md) (what: features F-xx with stories, acceptance criteria, and the Definition of Ready).
- **Done:** every business requirement (BR-xx) and every current-actor feature has a PRD feature.

### 6. Technical specification

- **Output:** [`docs/SRS.md`](templates/docs/SRS.md): the stack with versions and **official** documentation links (the only place versions live), architecture, functional (FR-xx) and non-functional (NFR-xx) requirements each with an **Owner** (FE / BE / Both), data model, open decisions, traceability.
- **How:** search the official site for the latest release of each version line; never trust memory. Note upcoming releases and when to move.
- **Done:** every FR traces to a PRD feature and every PRD feature to a BR.

### 7. Pricing and payments

- **Output:** `requirements.md` §4: plans, prices, regional prices, one-time credits if any, renewal rules, and payment providers per market.
- **Rules:** set prices only in US dollars and convert to local currency at payment time (local-currency prices go stale when exchange rates move); show only the main payment methods on public pages (too many confuse the user); hosted checkout only (no card data on the product); state which methods can renew automatically; keep the smallest payment well above the provider's fixed fee per payment (for one-time packs, give regional users more units for the same price instead of a lower price). Values not decided yet are written as "defined later" and shown as labelled samples.
- **Also plan the rails (when the product charges):** entitlement only after verified provider webhooks; signature verification + idempotent event handling; current Checkout / Payment Intent / Setup Intent patterns (not deprecated Sources/Charges/Tokens for new work); separate local vs CI sandboxes or full fakes in CI; secret keys server-only. Expand `SECURITY.md` WH and `COMPLIANCE.md` CP; judgment in [`07-judgment/payments.md`](07-judgment/payments.md).
- **Done:** prices exist in one place; every other document links to it; payment security/compliance IDs exist when billing is in scope.

### 8. Legal and security red lines

- **Output:** [`docs/COMPLIANCE.md`](templates/docs/COMPLIANCE.md) (laws per market including Egypt / Arab / global as relevant, consent, consumer protection, payments, accessibility, AI, ethics, risk-management notes, legal documents needed) and [`docs/SECURITY.md`](templates/docs/SECURITY.md) (OWASP-based rules with IDs and owners, and an **Every Page Checklist**). Judgment: [`07-judgment/compliance-ethics-risk.md`](07-judgment/compliance-ethics-risk.md).
- **How:** research the official sources for every launch market; write both **before** the prototype so screens are built compliant.
- **Also list the UI the law requires:** consent at sign-up (unchecked marketing box), AI or processing consent before first use, data download, account deletion, one-step cancellation, full price and renewal terms, legal footer links, company information, sub-processor list.
- **Done:** each has a red-lines table, and the PRD and SRS cite their rule IDs.

### 9. The API contract

- **Output:** [`docs/API_CONTRACT.md`](templates/docs/API_CONTRACT.md): conventions, every error code (including business errors such as limits, consent required, market not available), authentication, data types, endpoints, the main flow, and the contract-first change process.
- **Done:** every PRD screen can be built from the contract alone; it is the only endpoint list.

### 10. Decision log and AI sources

- **Output:** [`docs/DECISIONS.md`](templates/docs/DECISIONS.md) from the first lasting decision (context, options considered, decision, honest consequences; optional impact sections when earned), FE/BE [`ARCHITECTURE.md`](templates/docs/frontend/ARCHITECTURE.md) C4 context/container views, [`docs/decision-logs/`](templates/docs/decision-logs/) for light forks, and [`docs/JUDGMENT.md`](templates/docs/JUDGMENT.md) when absorbing outside methods ([`07-judgment/sad-adr.md`](07-judgment/sad-adr.md)). Do **not** add a standalone SAD that duplicates BRD/PRD/SRS. *Optional:* [`docs/AI.md`](templates/docs/AI.md) if the product uses AI: at least ten free sources with their current models, and the rules a source must pass before it touches real data.
- **Rule:** never edit an accepted decision; add a new entry that supersedes it.
- **Done:** every non-obvious choice in SRS §2 has an entry.

## Phase 3 — Split by Developer

### 11. Frontend and backend guides

- **Output:** [`docs/frontend/`](templates/docs/frontend/) and [`docs/backend/`](templates/docs/backend/): each with a `README.md` (what you own, reading order, tasks per feature, compliance items, Definition of Done), an `ARCHITECTURE.md` proposal, and a **`TESTING.md`** (risk-matched unit/integration/E2E ownership — separate files, not one shared testing bible).
- **Also:** a shared [`docs/DEPLOYMENT.md`](templates/docs/DEPLOYMENT.md) (hosting choice, options compared with dated prices, region, cost, environments, release flow, rollback) and a step-by-step `DEPLOYMENT.md` in each developer folder. Check every stack requirement (database version and extensions, workers, browser-based tools) against each host, and read the plan terms: some free tiers forbid commercial use.
- **Also:** local containerization ([`docs/DOCKER.md`](templates/docs/DOCKER.md) plus FE/BE Docker guides and copyable `docker/` skeletons): Compose for database/mail/API on laptops; do not silently replace the production hosting decision with Docker on the server.
- **Also:** if the team will use an AI PR reviewer (for example [CodeRabbit](https://www.coderabbit.ai/)), add a shared setup doc plus per-owner `coderabbit.yaml` and `CODERABBIT_GUIDELINES.md` to copy into each implementation repository ([templates](templates/docs/CODERABBIT.md)).
- **Also:** if the team will use agentic live-app verification (for example [TestSprite](https://www.testsprite.com/)), add a shared setup doc plus per-owner guidelines, lean PRD/api-doc upload files, and optional FE plan samples ([templates](templates/docs/TESTSPRITE.md)). Keep it complementary to in-repo unit/E2E tests — staging proof, not a substitute for PR CI.
- **Also:** decide the working method for the implementation repositories (for example Spec Kit plus [`04-FEATURE_SDLC.md`](04-FEATURE_SDLC.md)) as a DECISIONS entry, with a line in each Definition of Done. Keep feature files and Spec Kit out of the planning repository. Record the testing split (FE vs BE tools and mandatory safety nets) in DECISIONS when it is product-specific.
- **Done:** each developer can start from their own README without reading the other's, can deploy from their own deployment guide, and knows which tests they must write before coding.

## Phase 4 — Prototype

Everything in this phase is detailed in [`03-PROTOTYPE.md`](03-PROTOTYPE.md).

### 12. Scaffold

- **Output:** `project-ui/` installed with the framework's **official** installer only, in the production stack, with the [README](templates/project-ui/README.md). Backend-only product: the API explorer track.
- **Done:** it builds in CI and runs locally with one command.

### 13. Design system and protection

- **Output:** `PRODUCT.md`, `DESIGN.md` (tokens for light and dark, typography per language, components), the design rules file, the UI guard script, CODEOWNERS on the design files, plus `project-ui/PRE-DELIVERY-UX.md`, `project-ui/ANTI-SLOP.md`, and empty `project-ui/DESIGN-ERRORS.md`.
- **Done:** the guard fails the build on every banned pattern; craft checklists exist and are checklist-only (no competing design pack as authority).

### 14. The starter kit and the home page

- **Output:** the shared pieces every screen needs (language and direction, theme, full-prefetch links, security headers, frames, form validation, toast, confirm dialog, progress simulation, error and not-found pages), and the home page **Screens and flows**: user flows on top, the screen index below.
- **Done:** a blank screen built from the kit already passes the guard and the crawl.

### 15. Screens, area by area

- **Order:** account → the core feature (the product's reason to exist) → its supporting screens → billing and settings → landing page → legal pages.
- **Scope:** one actor at a time, production-complete for that actor ([`02-DELIVERY.md`](02-DELIVERY.md)); other actors and deferred screens stay out of the index. **There is no MVP delivery mode.** Keep that actor’s `docs/actors/.../screens.md` and `flow.md` current with the prototype index.
- **Each screen:** every state reachable through `?state=` (see the state checklist in PROTOTYPE.md), production-level copy with no "prototype" labels, realistic fictional data, both languages, both themes, phone width — millimetre-accurate to what ships.
- **Done:** the tests prove every screen is in a flow and the README, and every state belongs to a screen.

### 16. Walk every flow as the user

- Click through each flow from the landing page to the last success screen, as a first-time user and as a returning user.
- Check that every success state offers the next action, every object offers the same actions wherever it appears, every button leads to the right screen, and a returning user is never asked again for data the product already has.
- **Done:** no dead end and no missing step; One product’s owner found five such gaps by clicking.

### 17. Quality pass

- Accessibility (WCAG 2.2 AA; `npm run crawl` with axe on every screen and state, both languages and themes), responsive at 320px, long content, RTL and LTR alignment, spelling in every language, fonts, colors, button states (hover, pressed, current), touch targets of 44px, purposeful motion that respects reduced motion, SEO+GEO per `docs/SEO.md` (public pages indexed with title/description/canonical/hreflang/robots/sitemap/honest JSON-LD + citeable Q&A craft; private ones not), Lighthouse. Tick `project-ui/PRE-DELIVERY-UX.md` and skim `ANTI-SLOP.md` before calling a screen done.
- **Done:** the crawl reports only intentional problems; Lighthouse accessibility is 100 on every screen; landing SEO category is clean on a production-like build; owner-reported visual defects are fixed and logged in `DESIGN-ERRORS.md`.

## Phase 5 — Ongoing

### 18. Keep everything current

- Every change updates every affected document in the same commit; reread every line that counts or lists things; run the CI checks locally; push; confirm the CI run passes.
- When a step here proves wrong or incomplete, fix this playbook in the same commit.

### 19. Regular audits

Run these after every large batch of work (prompts in [`05-PROMPTS.md`](05-PROMPTS.md#audits)):

- Consistency: every derived document against `requirements.md`.
- Versions: every version against its official site.
- Duplication: merge or delete repeated content.
- Completeness: every screen, state, and flow for the main actor.
- Score out of 100: fix until no concrete finding remains.

### 20. Absorb outside references, then delete them

- When a PDF, article, or course is used as input, move the useful rules into the right document and delete the source file. Reference files left in the repository go stale and confuse agents.

### 21. Hand over between chats

- Before a chat gets long, ask for a handoff (template in [`05-PROMPTS.md`](05-PROMPTS.md#handoff-before-a-new-chat)) and start the next chat with it, then have the agent read the repository.

### 22. Hand over to implementation

- **Output:** separate implementation repositories that read this one as their reference; a `docs/features/requirements-map.md` (and feature files) produced by the decomposition in [`04-FEATURE_SDLC.md`](04-FEATURE_SDLC.md); Spec Kit (or the chosen method) initialized with a constitution that cites planning rules by ID; optional Jira import from the planning repo’s `docs/jira/<actor>/` CSV pack for Epics → separate FE/BE Stories and sprint slicing — Jira remains a tracker, not the requirements SoT.
- **How:** when every PRD feature meets the Definition of Ready (PRD §9), decompose the SRS into independently verifiable features once, then build each feature with an engineering profile (Lightweight / Standard / Comprehensive) matched to its risk. Keep planning docs as the single source of truth; feature files hold evidence and status, not a second copy of the SRS. Definition of Done, production release, and business-outcome validation stay separate milestones.
- **Done:** every SRS requirement is mapped or explicitly unresolved; each developer can start a feature from the map, the API contract, and their Definition of Done without inventing scope.

### 23. Run implementation days as a fixed pipeline

- Once FE/BE repos are building against a daily must-finish checklist, follow [`08-IMPLEMENTATION-DAY.md`](08-IMPLEMENTATION-DAY.md) and [`09-CI-CD.md`](09-CI-CD.md): owner starts the day → agent finishes every checkbox without mid-day continue cues → automatic closeout (PR → **CI green** → CodeRabbit → merge → verify → **CD when configured** → tracker → day page) → final reply = Pareto 20% then new-chat handoff. Copy FE/BE workflow skeletons from [`templates/implementation/github-actions/`](templates/implementation/github-actions/) before the first implementation PR.
- Seed the product’s `docs/OWNER_STANDING.md` from [`templates/docs/OWNER_STANDING.md`](templates/docs/OWNER_STANDING.md). When lasting day-loop preferences change, update standing **and** this playbook (generic wording) in the same session, then sync any studio playbook mirror.
