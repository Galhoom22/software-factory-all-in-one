# Implementation day pipeline (owner ↔ agent)

Reusable **day loop** for frontend and backend **implementation** repositories once planning is ready and the team builds by calendar day (must-finish checklist + issue tracker).

Keep this generic. Product-specific names (Notion pages, Jira keys, repo paths) live in that product’s `docs/OWNER_STANDING.md` and day pages — not here.

CI/CD detail: [`09-CI-CD.md`](09-CI-CD.md) — **progressive phases** (A = CI only by default; B/C = CD only when host hooks exist). Agents auto-detect the phase; never block Done on missing staging/production.

## Pipeline (fixed order — depth is proportional)

```text
Owner: “start today’s tasks”
        ↓
Agent: run through the whole day’s must-finish list (no mid-day pause)
        ↓
Proof: verification engineering — criterion → evidence for every checkbox (local = same checks CI will run); builder does not sole-certify
        ↓
Closeout (automatic, same session):
  PR
  → CI green (GitHub Actions on the PR — merge gate)
  → Human code-review bar (+ the product's AI PR reviewer, if it uses one)
  → merge
  → verify on that commit (local) + confirm CI on default branch green
  → CD when configured (staging deploy from main → smoke → Sentry if live)
  → issue tracker (Done, or progress comment if the Story continues)
  → day checklist page (checked + day finished + day summary)
        ↓
Final chat reply only:
  1) Pareto 20% (teachable depth)   2) New-chat handoff
```

## Proportional day pipeline (flexibility — hard rule)

The pipeline **order** above is stable. The **depth and which gates fire** must fit the product and the day’s risk — not every new product starts at “enterprise full stack.”

### Always on (every implementation product)

These never shrink away for convenience:

- Finish that calendar day’s **must-finish 100%** (no mid-day “go” waits once the owner started the day).
- Proof that matches what CI will run; **PR → CI green → merge → verify** on the default branch.
- **Cross-surface honesty** when another deployable/package consumes today’s change: read sibling expectations; write only the owned seat; contract-first (or mark N/A for single-surface days). Judgment: [`07-judgment/cross-surface-compatibility.md`](07-judgment/cross-surface-compatibility.md).
- **Human-readable code on every code day** — senior self-review for readability, pinned-line modern syntax, and best practices before Done ([`07-judgment/human-code-review.md`](07-judgment/human-code-review.md)); an AI PR reviewer, if used, assists but does not waive.
- **Current library docs (Context7)** — before non-trivial library/framework code, re-check Context7 MCP and/or official vendor docs for the **product-pinned** line this session ([`07-judgment/context7-docs.md`](07-judgment/context7-docs.md)); memory is not evidence of “latest.”
- **Verification engineering** — map must-finish criteria to objective evidence; separate builder from judge (CI + human bar + a non-builder reviewer); no “agent said Done” ([`07-judgment/verification-engineering.md`](07-judgment/verification-engineering.md)).
- **Integration engineering** — when must-finish touches any external/partner boundary (API, webhook, OAuth, storage, AI vendor, …), run the integration checklist (interfaces, contract, adapter, idempotency, fallback) ([`07-judgment/integration-engineering.md`](07-judgment/integration-engineering.md)); N/A when no new boundary.
- **AI engineering** — when must-finish touches models, prompts, RAG, agents/tools, AI jobs, or evals, run the AI engineering checklist (det/prob seam, admission, golden eval, practice level) ([`07-judgment/ai-engineering.md`](07-judgment/ai-engineering.md)); N/A when no AI path.
- **Agent delegation** — when must-finish dispatches coding work to a separate implementer (CLI, Task/subagent, second session), run the delegation checklist (self-contained brief, implementer never commits, orchestrator re-runs gates and lands) ([`07-judgment/delegation.md`](07-judgment/delegation.md)); N/A for inline single-session work.
- **Candor** on SECURITY / COMPLIANCE / ethics / High residual risk (refuse + safer scenario).
- No secrets / no real PII in git.
- Honest skip notes (e.g. “CD not configured — Phase A”) — never fake passes.

Actor-loop delivery still applies when the product uses it: do not stub the **current actor** by calling the day “flexible.”

### Scale with the product (template default)

| Product shape | Day loop depth | Typical gates |
|---------------|----------------|---------------|
| **Small / early** (prototype tool, few screens, no money/PII/booking) | Core closeout only; FEATURE **Lightweight** when risk is bounded | CI Phase A; skip SEO/booking/API-readiness/CodeRabbit theater when those surfaces do not exist — mark **N/A** |
| **Growing** (real users, API, more than one interface language) | Core + gates that match touched surfaces | API readiness + cross-surface when APIs/contracts change; SEO+GEO when public pages change; DSA on hot paths |
| **Full product** (payments, PII, AI, booking, multi-day Stories, Notion/Jira calendar) | Full method in this file | All applicable numbered gates; the AI PR reviewer if used; Pareto + handoff; tracker + day page; CD when hooks exist |

**Grow forward, do not pretend:** when risk or surface area increases (first payment, first PII, first booking, first public marketing page), **add** the matching gate the same day — do not keep running “small product” mode after those surfaces exist.

**Shrink honestly:** domain gates already say **N/A** when the day does not touch that surface. Flexibility means using those N/As and FEATURE profiles — **not** deleting CI, skipping merge verification, or inventing a second MVP delivery mode.

### Product standing may pin “full cadence”

A product’s `docs/OWNER_STANDING.md` may require the **full** implementation day cadence (calendar must-finish, the AI PR reviewer if the product uses one, Pareto, Notion/Jira closeout, all applicable gates). That pin **overrides** “start small” for that product. Example: a real multi-day FE/BE build with money/PII stays on full cadence even though the generic template allows lighter starts elsewhere.

### Anti-patterns

| Do not | Why |
|--------|-----|
| Run every optional gate on a tiny no-API tool “because the factory listed them” | Over-engineering; wastes the day |
| Skip CI / merge verify / red lines “because the project is small” | Under-engineering; not flexibility |
| Keep Lightweight FEATURE profile after High-risk money/PII/booking appears | Risk grew; rigor must grow |
| Invent a parallel “lite day loop” file | One pipeline; proportional depth inside it |

Pairs with: [`04-FEATURE_SDLC.md`](04-FEATURE_SDLC.md) (Lightweight / Standard / Comprehensive), [`09-CI-CD.md`](09-CI-CD.md) (Phase A/B/C), Candor (SF-07).

**Lesson capture (automatic — no owner ask):** when the day produced a surprising root cause **or** a useful discovery the agent did not know, capture it **before the final reply** without waiting to be told. Write `docs/learning-from-mistakes/<kebab>.md` in the implementation repo. If the rule is reusable and **raises factory professionalism**, propose one generic bullet for the factory's `06-LESSONS.md` (or the matching template) upstream as a pull request the same session. **Quality bar:** next product avoids real rework or a trust/security mistake; forever-generic; no duplicate of an existing `06-LESSONS` bullet; skip typos and one-offs. Prefer depth over volume.

Treat this as a **handoff pipeline**: each stage feeds the next. Do not invent mid-day approval gates.

## Context window hygiene (hard rule)

Long days and large tool outputs **silently** degrade agents (truncation, lost early instructions, invented “Done”). Treat context as scarce.

**Always:** keep truth in git / feature files / day page / tracker — not only in chat. Prefer **memory pointers** (path, SHA, tool store key + short summary) over pasting CI logs, dumps, or whole files into the model. Read the slice you need; use bounded subagents for big searches and keep compact findings. End-of-day **New-chat handoff** is the primary cross-session pointer; the next chat re-verifies against the repo.

**Mid-day context refresh ≠ mid-day owner “go”:** start-once / finish must-finish still holds. If the window is polluted, write a short progress checkpoint (paths, SHAs, next action), then continue in a **fresh chat** with that checkpoint — never invent per-slice approval theater.

Judgment: [`07-judgment/context-window.md`](07-judgment/context-window.md) (SF-09). Pairs with Anthropic-style compaction/handoff craft and the Memory Pointer pattern (large payloads stay outside the LLM).

## Studio company seats (hard rule)

Work like a **small company**, not a pile of chats. At day start, name: (1) **goal** (product + current actor), (2) **seat** (FE or BE day agent — see product `docs/STUDIO_ORG.md`), (3) **checkout** — this session exclusively owns today’s must-finish (no second agent competing on the same Story/day). Escalate blockers to the Board (owner); do not invent parallel product direction. Consequential new seats/tools need owner approval. Judgment: [`07-judgment/studio-company.md`](07-judgment/studio-company.md) (seats — SF-12) + [`07-judgment/software-factory.md`](07-judgment/software-factory.md) (line: intake→triage→plan→build→independent review→Done — SF-12). Name the factory stage you are in; keep acceptance criteria as the contract; CI plus a reviewer other than the builder (a human, a separate agent session or an AI PR reviewer) are independent review — not the builder’s self-score.

## Day run-through

**Operating bar (from agent-skills judgment):** surface assumptions on non-trivial work; stop and name confusion instead of guessing; deliver in thin vertical slices that stay testable; before Done on high-stakes paths (auth, money, PII, irreversible data, AI tools/writes), ask what would prove the claim wrong — apply **verification engineering** (criteria → evidence; author ≠ judge) ([`07-judgment/verification-engineering.md`](07-judgment/verification-engineering.md)) — and answer the **six boundary questions** + AI **practice level** when authority or side effects change ([`07-judgment/enterprise-system-design.md`](07-judgment/enterprise-system-design.md)). When the day’s stack has a [`technologies/`](technologies/README.md) pack (e.g. PHP), open it before coding and **re-check Context7 MCP and/or official docs for the pinned line** this session (no owner ask) — [`07-judgment/context7-docs.md`](07-judgment/context7-docs.md). Apply pack `quality.md` (Clean Code + architecture + patterns) together with modern syntax.

Review axes before merge: correctness, **human readability**, architecture, security, performance (**includes DSA / Big-O on hot paths** — name `n`, complexity class, structure, edges), **modern pinned-line syntax**, and **framework best practices** — apply the senior **human code-review bar** on the day’s diff ([`07-judgment/human-code-review.md`](07-judgment/human-code-review.md)); an AI PR reviewer, when the product uses one, is a mechanical assist, not a waiver for unreadable or outdated code. **API surfaces:** contract parity + HTTP proof for every endpoint touched today; local green is not enough — CI must pass, and staging/production smoke runs when that phase exists. **Cross-surface:** when another FE/BE/service consumes today’s change, prove compatibility against the shared contract and **read** the sibling (do not write outside this seat unless standing allows). **External integrations:** apply [`07-judgment/integration-engineering.md`](07-judgment/integration-engineering.md) (or N/A). **AI paths:** apply [`07-judgment/ai-engineering.md`](07-judgment/ai-engineering.md) (or N/A). **Agent delegation:** apply [`07-judgment/delegation.md`](07-judgment/delegation.md) (or N/A). **Public pages:** SEO + GEO checklist when indexable surfaces change. Apply [`07-judgment/context-window.md`](07-judgment/context-window.md) every turn (pointers over blobs; checkpoint before a fresh-chat refresh). Details: [`07-judgment/agent-skills.md`](07-judgment/agent-skills.md) · [`07-judgment/dsa-performance.md`](07-judgment/dsa-performance.md) · [`07-judgment/api-readiness.md`](07-judgment/api-readiness.md) · [`07-judgment/cross-surface-compatibility.md`](07-judgment/cross-surface-compatibility.md) · [`07-judgment/seo-geo.md`](07-judgment/seo-geo.md).

**Feature SDLC on the day:** Stories that map to a `docs/features/…` file follow [`04-FEATURE_SDLC.md`](04-FEATURE_SDLC.md). Same day: keep the verification matrix and lifecycle status honest (evidence links). Match proof depth to the feature’s profile. Never call the day Done from a filled template alone — gates in Design / Security / Verification / Integration still need real results. Day-level craft: [`07-judgment/verification-engineering.md`](07-judgment/verification-engineering.md).

When a new chat starts and the owner says to work **today’s** tasks (any clear start cue, including other languages), the agent confirms **goal + seat + checkout** (`STUDIO_ORG` / studio-company judgment), then:

1. Opens that day’s must-finish list (daily checklist tool + linked issue keys).
2. Completes **every** checkbox with real proof — no stubs, no “good enough for later.”
3. Does **not** stop after each slice to ask for continue / “go.”
4. Does **not** open or merge a PR until the day’s must-finish is **100%** earned locally.
5. Runs the **same local checks CI will run** before opening the PR (fail fast).
6. When the day touches a mapped feature file, updates that file’s evidence (matrix + status + PR links) before closeout.
7. **API readiness gate** (backend / contract days): for every API surface in must-finish — (a) matches planning `API_CONTRACT.md` (update contract first if needed), (b) **API design bar** when routes/shapes change (consumer tasks, resource naming, safe/idempotent method semantics, stable error `code`s) — [`07-judgment/api-design.md`](07-judgment/api-design.md), (c) feature/HTTP tests pass locally, (d) ready for the same suite on CI, (e) FE-handoff notes honest if FE consumes it, (f) **API clients always-current** — when the product ships `docs/api-clients/`, update inventory/OpenAPI in the **same** change as the route, regenerate Postman/Insomnia/Apidog packs, and keep CI `check-api-clients` green (OpenAPI 3.1 hub from day one — [openapis.org](https://www.openapis.org/) / [Swagger](https://swagger.io/); never defer collections until actor done). Judgment: [`07-judgment/api-readiness.md`](07-judgment/api-readiness.md) · [`07-judgment/api-clients.md`](07-judgment/api-clients.md). Remote env smoke follows the CI/CD phase in closeout — do not claim staging/prod green in Phase A.
8. **Cross-surface compatibility gate** (any day that touches a shared API, contract field, auth/CORS, event schema, or payload another surface consumes): (a) name consumers/producers, (b) contract-first if shapes change, (c) **read** sibling client/mocks/types/consumers for expected shapes — **write only this seat’s repo** unless standing grants write elsewhere, (d) cite honest handoff (sibling can integrate now / blocked on …). Single-surface days: mark **N/A**. Judgment: [`07-judgment/cross-surface-compatibility.md`](07-judgment/cross-surface-compatibility.md).
9. **SEO + GEO gate** (frontend / public-page days): when must-finish ships or changes **indexable** marketing/legal URLs, metadata, robots, sitemap, public FAQ, or JSON-LD — run the product `docs/SEO.md` + FE SEO checklist **and** GEO craft (people-first copy, clear headings/Q&A, citeable claims, no fake authority). Backend-only or private-app days: mark **N/A**. Do not block Done on ranking or AI citation counts. Judgment: [`07-judgment/seo-geo.md`](07-judgment/seo-geo.md). Prefer [Google’s generative AI Search guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) over vendor “GEO hack” lists.
10. **Compliance / ethics / risk check** (any day): before Done, if must-finish touches PII, money, AI, marketing claims, new vendors, irreversible delete, or cross-border data — confirm product COMPLIANCE/SECURITY red lines still hold; name residual risk and treatment (avoid/reduce/accept). If the owner asked for something unlawful or unethical, refuse with a safer scenario (Candor). Judgment: [`07-judgment/compliance-ethics-risk.md`](07-judgment/compliance-ethics-risk.md).
11. **Booking / reservation gate** (when the product reserves scarce capacity): if must-finish touches holds, inventory, confirm/cancel, supplier/OTA APIs, or travel MCP tools — prove recheck-before-commit, idempotency + external reference, hold TTL/expiry, and cancel policy snapshot (or mark N/A). Pair with payments judgment when money moves. Refuse designs that confirm from search cache or skip recheck. Judgment: [`07-judgment/booking.md`](07-judgment/booking.md).
12. **Security boundary gate** (any day that adds or changes a trust boundary or a CI workflow): for any new or changed trust boundary (for example authentication or session handling, an endpoint, an authorization rule or role, an upload, a webhook, a personal-data flow, an outbound data share, an AI tool with side effects — examples, not a closed list) — answer the four threat-model questions and prove one abuse case per kept threat with a test ([`07-judgment/threat-modeling.md`](07-judgment/threat-modeling.md)); for an edited `.github/workflows/` file — least-privilege `permissions:`, no attacker-set `${{ }}` in scripts, no privileged trigger running PR code, `persist-credentials: false` unless the job pushes ([`07-judgment/ci-hardening.md`](07-judgment/ci-hardening.md)). Otherwise mark N/A.

**Pause only when:**

- A missing owner decision would change security, compliance, product rules, or spend.
- An interactive approval the agent cannot complete alone (host UI).
- The day changes AI models, prompts, retrieval, or AI jobs: re-run the product fictional golden set (or assert smoke in `docs/AI.md`) before marking Done.
- The day changes FE critical journeys (auth, money, locale, irreversible UI): run the matching **mocked** Playwright list locally the same way CI will; on failure use HTML report / trace — do not guess.
- The day introduces a **consequential new abstraction**: in the design note or Pareto, state problem → naive path → why this pattern/framework shape (or why not). No pattern-for-show. Judgment: [`07-judgment/design-patterns.md`](07-judgment/design-patterns.md). Distributed topology → [`07-judgment/architecture-patterns.md`](07-judgment/architecture-patterns.md).
- The day changes a lasting architecture or product trade-off: add or supersede a `docs/DECISIONS.md` entry (options + consequences) in the same session before Done.
- A hard blocker the agent cannot fix.

State the blocker once, then stop. Do not weaken rails to keep moving.

## Closeout (automatic)

When must-finish is truly 100%:

1. **PR** — one PR for the day’s finished work (Conventional Commits; no secrets / no real PII).
2. **CI green** — wait for GitHub Actions on that PR to pass. Fix failures on the branch before continuing. Do **not** merge on a red or unfinished required check. Method: [`09-CI-CD.md`](09-CI-CD.md).
3. **Human code-review bar (+ AI reviewer if configured)** — (a) always: self-review the day’s diff as a senior/tech lead: human readability, Clean Code, **modern syntax for the pinned language/framework line**, and pack best practices ([`07-judgment/human-code-review.md`](07-judgment/human-code-review.md)); (b) only when the product uses an AI PR reviewer (for example CodeRabbit): run it as the product's reviewer configuration says (for CodeRabbit: `docs/CODERABBIT.md`) and fix **blocking** findings before merge — never start paid trials or usage products unless the owner asks; (c) when the product uses no AI reviewer, or the AI reviewer did not review this change (for example its path filters exclude the files, or it ran only locally): a reviewer other than the builder (a human or a separate agent session) reads the diff against the acceptance criteria before merge ([SF-12](DECISIONS.md#sf-12-studio-seats-and-the-factory-line)). An AI reviewer never waives inhuman or outdated code.
4. **Merge** into the default branch in the same session.
5. **Verify** on that merge commit (re-run the day’s proof checks locally) **and** confirm CI on the default branch is green. If either fails: stop — do not mark tracker/checklist Done; fix first.
6. **CD (when staging/production hooks exist)** — wait for the staging deploy started by CI on `main` (or the documented hook); run the smoke test from the repo’s DEPLOYMENT guide; glance Sentry if that release is live. If CD is **not** configured yet, say so in the day summary and skip — do not invent a fake deploy pass. Production stays **manual approval** (`workflow_dispatch` + environment reviewers), not an automatic day step.
7. **Issue tracker** — mark Done only when the Story’s acceptance is fully met; otherwise leave In Progress with a progress comment (Stories may span days).
8. **Day page** — check off must-finish, mark day finished, fill finished / tomorrow / **full day summary** (include merge SHA, CI run link, **verification evidence** (criterion→evidence or N/A), **human code-review** pass (or N/A — docs only), **Context7 / current-docs** (library IDs or official URLs checked, or N/A — no library API), **integration** (partners + checklist evidence or N/A), **AI engineering** (paths + golden-eval/admission evidence or N/A), **delegation** (implementer + brief/gate evidence or N/A), **API readiness evidence** — contract IDs + test/CI proof + phase A/B/C smoke note + **API clients** regenerate/CI note (or N/A if no `docs/api-clients/`) — **cross-surface compatibility** — surfaces checked + sibling read pointers + handoff note or “N/A” — **SEO+GEO evidence** when public pages changed or “N/A”, **compliance/ethics/risk note** when PII/money/AI/claims/vendors touched or “N/A”, **booking proof** when inventory/holds/supplier touched or “N/A”, and CD/smoke result or “CD not configured”).
9. **Lesson capture (automatic when earned)** — surprising root cause or useful discovery → implementation `docs/learning-from-mistakes/`; if reusable **and** it raises professionalism → propose it upstream for the factory's `06-LESSONS.md` (or matching template) as a pull request the same session. No owner prompt. Skip noise and duplicates.

Never mark tracker or checklist finished before post-merge verification (and required CI) succeeds. Never wait for the owner to ask for closeout.

## CI / CD in this pipeline

- **CI** proves the branch on a clean runner (tests, lint/format, secret scan). It is a **merge gate** equal in force to local proof.
- **CD** ships only from green `main` through the host pipeline (e.g. Forge deploy hooks called by Actions). No laptop deploys.
- Until hooks exist (**Phase A**), CI still runs; CD steps are skipped honestly. When hooks appear later, move to Phase B/C using the same method — no new philosophy ([`09-CI-CD.md`](09-CI-CD.md) § Progressive activation).
- Full rules and workflow skeletons: [`09-CI-CD.md`](09-CI-CD.md), [`templates/implementation/github-actions/`](templates/implementation/github-actions/).

## Review in this pipeline

**Senior / tech-lead bar first:** every code day, the agent reviews its own diff for human readability, current pinned-line syntax and best practices before treating the slice as Done — [`07-judgment/human-code-review.md`](07-judgment/human-code-review.md). Goal: a real human and an AI can both understand the change.

**AI pull-request reviewer (optional, e.g. CodeRabbit):** closeout opens a PR; when the product uses an AI reviewer, run it on the day branch, fix **blocking** findings, then merge **only after CI is green**. Plan, surfaces and limits are product configuration — keep them in the product's reviewer doc (for CodeRabbit: `docs/CODERABBIT.md`, [template](templates/docs/CODERABBIT.md)).

An AI reviewer does **not** replace CI tests, the human code-review bar, human judgment on auth / billing / AI / deletion, SECURITY and COMPLIANCE red lines, the DSA hot-path check, the API readiness gate, the cross-surface compatibility gate, or the SEO+GEO gate on public pages.

## Final reply shape (mandatory)

After closeout, the agent’s last message has **exactly two parts**, in order:

1. **Pareto 20% (teachable depth, file-anchored)** — select the **most important** outcomes of the day (not every commit log). For **each** selected topic, write a **full, thorough explanation** the owner can paste into ChatGPT (or similar) to learn — **and** ground it in real paths/symbols, structure roles, and how pieces connect (see § Pareto 20%). **“20%” means topic selection (highest leverage only), not ultra-short stubs and not a file dump.** Depth + concreteness; the owner uses this block to grow as an engineer **and** as a code reader.
2. **New-chat handoff** — one copy-paste block for tomorrow’s fresh chat: paths, SHAs, issue keys, tomorrow must-finish, do-not-break rails. Include last green CI / merge evidence. Keep the handoff operational and tight (**pointers**, not a transcript dump); put teaching depth in the Pareto half. Receiving chat re-verifies against git ([`07-judgment/context-window.md`](07-judgment/context-window.md)).

Emit both automatically. Do not wait for a second ask. Prompt shape: [`05-PROMPTS.md`](05-PROMPTS.md#implementation-day-start-and-end).

## Pareto 20% — what it means

- **Select** the few highest-leverage outcomes of the day (features, concepts, decisions). Do not narrate every commit or mid-day detour.
- **Explain each selected topic thoroughly** — enough that the owner can copy the Pareto half into ChatGPT (or similar) and learn: vocabulary, how the system works, why choices were made, and what to study next.
- **“20%” is topic selection, not brevity.** Ultra-short stubs fail this requirement. Teaching depth belongs here; the handoff stays operational and tight.
- **File-anchored (hard rule — SF-09):** keep Pareto topic selection. Do **not** replace it with a file dump or a long diary. For **each** selected topic, ground the teaching in the **real paths the day changed or introduced**, so a second AI (ChatGPT, etc.) can walk the owner through **code reading**, structure, and architecture — not only abstract prose.

### Per-topic shape (teachable + concrete)

For every Pareto topic, include all of the following (skip a bullet only with an explicit **N/A** reason):

1. **Why this topic** — one sentence: why it is in the 20% (highest leverage for the day).
2. **Concept** — terms, mental model, trade-offs (same depth as before).
3. **Primary paths** — concrete repo-relative files/dirs (and key symbols: class/function/component names). Prefer the few files that *teach* the topic; not every file in the diff.
4. **Role in the structure** — what this unit is (e.g. HTTP action, domain service, job, React feature module, test, contract slice) and which layer it lives in.
5. **How it connects** — what calls it / what it calls (siblings, modules, API contract IDs, queue/event). Enough for a call-path or “component A → B → C” picture.
6. **Architecture / system-design angle** — only when earned: where it sits in the modular monolith (or other pinned shape), trust boundary, or design choice; otherwise **N/A**.
7. **How to read it next time** — 2–4 cues the owner should look for when this pattern appears in another project (naming, folder, test shape).
8. **Study next** — one focused follow-up (official docs, judgment file, or related path).

### Anti-patterns

| Do not | Why |
|--------|-----|
| Generic essay with no paths | Second AI cannot open or map the real tree |
| Paste entire files or huge diffs into Pareto | Context bloat; handoff/context-window rules; owner asked for focus |
| List every touched file “for completeness” | Breaks 20% selection; becomes a commit log |
| Paths without roles/connections | Names alone do not teach structure |
| Ultra-short stubs that only say “see `Foo.php`” | Depth still required — paths **add** concreteness, they do not replace explanation |

### Owner paste intent

The Pareto block is written so the owner can paste it into ChatGPT (or similar) and ask to explain **those files**, how they fit the architecture, and how to **read** similar code later. The agent does not need to render full source in chat; accurate paths + symbols + connection narrative are enough for the next tool to load the tree.

## Changing the factory during a day

Lasting collaboration preferences (this pipeline, language, remotes, assignees) live in the product's `docs/OWNER_STANDING.md`; update it and its changelog in the same session — never leave standing only in chat memory.

When the change belongs in the method itself (day loop, closeout order, CI/CD gates, final reply shape) or the owner asks to add a practice to the factory, follow [`CONTRIBUTING.md`](CONTRIBUTING.md) § Changing the factory: atlas first, raise an excellence dimension, refuse a downgrade with a safer alternative (Candor, SF-07 — [`compliance-ethics-risk.md`](07-judgment/compliance-ethics-risk.md)), and propose the generic change upstream as a pull request. The vendored copy stays read-only.

## What this is not

- Not permission to half-finish the current actor (see [`02-DELIVERY.md`](02-DELIVERY.md) — no MVP mode).
- Not a second requirements source. Features still follow [`04-FEATURE_SDLC.md`](04-FEATURE_SDLC.md) (adaptive depth, evidence, separate Done / Released / Outcome).
- Not a substitute for SECURITY / COMPLIANCE / Governing Product Rules.
- Not permission to skip CI because local tests passed, or to deploy from a laptop.

When the change is a **large-scale capacity or topology sketch**, run [`07-judgment/system-design.md`](07-judgment/system-design.md) (SF-22) and open at most 1–3 [`system-design/`](system-design/README.md) packs.

When the change **ships or alters a UI/content locale**, run [`07-judgment/languages.md`](07-judgment/languages.md) (SF-23) and open the matching [`languages/`](languages/README.md) pack(s).
