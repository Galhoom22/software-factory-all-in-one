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
Proof: tests / acceptance evidence for every checkbox (local = same checks CI will run)
        ↓
Closeout (automatic, same session):
  PR
  → CI green (GitHub Actions on the PR — merge gate)
  → CodeRabbit (Free: CLI/IDE review + optional PR summary; paid: GitHub review)
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
- **Candor** on SECURITY / COMPLIANCE / ethics / High residual risk (refuse + safer scenario).
- No secrets / no real PII in git.
- Honest skip notes (e.g. “CD not configured — Phase A”) — never fake passes.

Actor-loop delivery still applies when the product uses it: do not stub the **current actor** by calling the day “flexible.”

### Scale with the product (template default)

| Product shape | Day loop depth | Typical gates |
|---------------|----------------|---------------|
| **Small / early** (prototype tool, few screens, no money/PII/booking) | Core closeout only; FEATURE **Lightweight** when risk is bounded | CI Phase A; skip SEO/booking/API-readiness/CodeRabbit theater when those surfaces do not exist — mark **N/A** |
| **Growing** (real users, API, bilingual app) | Core + gates that match touched surfaces | API readiness when APIs change; SEO+GEO when public pages change; DSA on hot paths |
| **Full product** (payments, PII, AI, booking, multi-day Stories, Notion/Jira calendar) | Full method in this file | All applicable numbered gates; CodeRabbit; Pareto + handoff; tracker + day page; CD when hooks exist |

**Grow forward, do not pretent:** when risk or surface area increases (first payment, first PII, first booking, first public marketing page), **add** the matching gate the same day — do not keep running “small product” mode after those surfaces exist.

**Shrink honestly:** domain gates already say **N/A** when the day does not touch that surface. Flexibility means using those N/As and FEATURE profiles — **not** deleting CI, skipping merge verification, or inventing a second MVP delivery mode.

### Product standing may pin “full cadence”

A product’s `docs/OWNER_STANDING.md` may require the **full** implementation day cadence (calendar must-finish, CodeRabbit, Pareto, Notion/Jira closeout, all applicable gates). That pin **overrides** “start small” for that product. Example: a real multi-day FE/BE build with money/PII stays on full cadence even though the generic template allows lighter starts elsewhere.

### Anti-patterns

| Do not | Why |
|--------|-----|
| Run every optional gate on a tiny no-API tool “because the playbook listed them” | Over-engineering; wastes the day |
| Skip CI / merge verify / red lines “because the project is small” | Under-engineering; not flexibility |
| Keep Lightweight FEATURE profile after High-risk money/PII/booking appears | Risk grew; rigor must grow |
| Invent a parallel “lite day loop” file | One pipeline; proportional depth inside it |

Pairs with: [`04-FEATURE_SDLC.md`](04-FEATURE_SDLC.md) (Lightweight / Standard / Comprehensive), [`09-CI-CD.md`](09-CI-CD.md) (Phase A/B/C), Candor (D-82 / D-83).


**Lesson capture (automatic — no owner ask):** when the day produced a surprising root cause **or** a useful discovery the agent did not know, capture it **before the final reply** without waiting to be told. Write `docs/learning-from-mistakes/<kebab>.md` in the implementation repo. If the rule is reusable and **raises playbook professionalism**, add one generic bullet to playbook `06-LESSONS.md` (or the matching template) and sync the studio playbook mirror the same session. **Quality bar:** next product avoids real rework or a trust/security mistake; forever-generic; no duplicate of an existing `06-LESSONS` bullet; skip typos and one-offs. Prefer depth over volume.

Treat this as a **handoff pipeline**: each stage feeds the next. Do not invent mid-day approval gates.

## Day run-through

**Operating bar (from agent-skills judgment):** surface assumptions on non-trivial work; stop and name confusion instead of guessing; deliver in thin vertical slices that stay testable; before Done on high-stakes paths (auth, money, PII, irreversible data), ask what would prove the claim wrong. When the day’s stack has a [`technologies/`](technologies/README.md) pack (e.g. PHP), open it before coding and **re-check official docs/Context7 for the pinned line** (no owner ask). Apply pack `quality.md` (Clean Code + architecture + patterns) together with modern syntax.

Review axes before merge: correctness, readability, architecture, security, performance (**includes DSA / Big-O on hot paths** — name `n`, complexity class, structure, edges) — CodeRabbit Free CLI is the default mechanical assist. **API surfaces:** contract parity + HTTP proof for every endpoint touched today; local green is not enough — CI must pass, and staging/production smoke runs when that phase exists. **Public pages:** SEO + GEO checklist when indexable surfaces change. Details: [`07-judgment/agent-skills.md`](07-judgment/agent-skills.md) · [`07-judgment/dsa-performance.md`](07-judgment/dsa-performance.md) · [`07-judgment/api-readiness.md`](07-judgment/api-readiness.md) · [`07-judgment/seo-geo.md`](07-judgment/seo-geo.md).

**Feature SDLC on the day:** Stories that map to a `docs/features/…` file follow [`04-FEATURE_SDLC.md`](04-FEATURE_SDLC.md). Same day: keep the verification matrix and lifecycle status honest (evidence links). Match proof depth to the feature’s profile. Never call the day Done from a filled template alone — gates in Design / Security / Verification / Integration still need real results.

When a new chat starts and the owner says to work **today’s** tasks (any clear start cue, including other languages), the agent:

1. Opens that day’s must-finish list (daily checklist tool + linked issue keys).
2. Completes **every** checkbox with real proof — no stubs, no “good enough for later.”
3. Does **not** stop after each slice to ask for continue / “go.”
4. Does **not** open or merge a PR until the day’s must-finish is **100%** earned locally.
5. Runs the **same local checks CI will run** before opening the PR (fail fast).
6. When the day touches a mapped feature file, updates that file’s evidence (matrix + status + PR links) before closeout.
7. **API readiness gate** (backend / contract days): for every API surface in must-finish — (a) matches planning `API_CONTRACT.md` (update contract first if needed), (b) feature/HTTP tests pass locally, (c) ready for the same suite on CI, (d) FE-handoff notes honest if FE consumes it. Remote env smoke follows the CI/CD phase in closeout — do not claim staging/prod green in Phase A. Judgment: [`07-judgment/api-readiness.md`](07-judgment/api-readiness.md).
8. **SEO + GEO gate** (frontend / public-page days): when must-finish ships or changes **indexable** marketing/legal URLs, metadata, robots, sitemap, public FAQ, or JSON-LD — run the product `docs/SEO.md` + FE SEO checklist **and** GEO craft (people-first copy, clear headings/Q&A, citeable claims, no fake authority). Backend-only or private-app days: mark **N/A**. Do not block Done on ranking or AI citation counts. Judgment: [`07-judgment/seo-geo.md`](07-judgment/seo-geo.md). Prefer [Google’s generative AI Search guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) over vendor “GEO hack” lists.
9. **Compliance / ethics / risk check** (any day): before Done, if must-finish touches PII, money, AI, marketing claims, new vendors, irreversible delete, or cross-border data — confirm product COMPLIANCE/SECURITY red lines still hold; name residual risk and treatment (avoid/reduce/accept). If the owner asked for something unlawful or unethical, refuse with a safer scenario (Candor). Judgment: [`07-judgment/compliance-ethics-risk.md`](07-judgment/compliance-ethics-risk.md).
10. **Booking / reservation gate** (when the product reserves scarce capacity): if must-finish touches holds, inventory, confirm/cancel, supplier/OTA APIs, or travel MCP tools — prove recheck-before-commit, idempotency + external reference, hold TTL/expiry, and cancel policy snapshot (or mark N/A). Pair with payments judgment when money moves. Refuse designs that confirm from search cache or skip recheck. Judgment: [`07-judgment/booking.md`](07-judgment/booking.md).

**Pause only when:**

- A missing owner decision would change security, compliance, product rules, or spend.
- An interactive approval the agent cannot complete alone (host UI).
- The day changes AI models, prompts, retrieval, or AI jobs: re-run the product fictional golden set (or assert smoke in `docs/AI.md`) before marking Done.
- The day changes FE critical journeys (auth, money, locale, irreversible UI): run the matching **mocked** Playwright list locally the same way CI will; on failure use HTML report / trace — do not guess.
- The day introduces a **consequential new abstraction**: in the design note or Pareto, state problem → naive path → why this pattern/framework shape (or why not). No pattern-for-show. Judgment: [`07-judgment/design-patterns.md`](07-judgment/design-patterns.md).
- The day changes a lasting architecture or product trade-off: add or supersede a `docs/DECISIONS.md` entry (options + consequences) in the same session before Done.
- A hard blocker the agent cannot fix.

State the blocker once, then stop. Do not weaken rails to keep moving.

## Closeout (automatic)

When must-finish is truly 100%:

1. **PR** — one PR for the day’s finished work (Conventional Commits; no secrets / no real PII).
2. **CI green** — wait for GitHub Actions on that PR to pass. Fix failures on the branch before continuing. Do **not** merge on a red or unfinished required check. Method: [`09-CI-CD.md`](09-CI-CD.md).
3. **CodeRabbit** — on **Free**: run **CLI or IDE** full review on the day branch (primary review gate); GitHub may post a **PR summary** only. On **paid**: wait for the GitHub App full PR review. Fix **blocking** findings before merge. Do **not** start paid trials or usage products unless the owner asks.
4. **Merge** into the default branch in the same session.
5. **Verify** on that merge commit (re-run the day’s proof checks locally) **and** confirm CI on the default branch is green. If either fails: stop — do not mark tracker/checklist Done; fix first.
6. **CD (when staging/production hooks exist)** — wait for the staging deploy started by CI on `main` (or the documented hook); run the smoke test from the repo’s DEPLOYMENT guide; glance Sentry if that release is live. If CD is **not** configured yet, say so in the day summary and skip — do not invent a fake deploy pass. Production stays **manual approval** (`workflow_dispatch` + environment reviewers), not an automatic day step.
7. **Issue tracker** — mark Done only when the Story’s acceptance is fully met; otherwise leave In Progress with a progress comment (Stories may span days).
8. **Day page** — check off must-finish, mark day finished, fill finished / tomorrow / **full day summary** (include merge SHA, CI run link, **API readiness evidence** — contract IDs + test/CI proof + phase A/B/C smoke note — **SEO+GEO evidence** when public pages changed or “N/A”, **compliance/ethics/risk note** when PII/money/AI/claims/vendors touched or “N/A”, **booking proof** when inventory/holds/supplier touched or “N/A”, and CD/smoke result or “CD not configured”).
9. **Lesson capture (automatic when earned)** — surprising root cause or useful discovery → implementation `docs/learning-from-mistakes/`; if reusable **and** it raises professionalism → playbook `06-LESSONS.md` (or matching template) + studio sync same session. No owner prompt. Skip noise and duplicates.

Never mark tracker or checklist finished before post-merge verification (and required CI) succeeds. Never wait for the owner to ask for closeout.

## CI / CD in this pipeline

- **CI** proves the branch on a clean runner (tests, lint/format, secret scan). It is a **merge gate** equal in force to local proof.
- **CD** ships only from green `main` through the host pipeline (e.g. Forge deploy hooks called by Actions). No laptop deploys.
- Until hooks exist (**Phase A**), CI still runs; CD steps are skipped honestly. When hooks appear later, move to Phase B/C using the same method — no new philosophy ([`09-CI-CD.md`](09-CI-CD.md) § Progressive activation).
- Full rules and workflow skeletons: [`09-CI-CD.md`](09-CI-CD.md), [`templates/implementation/github-actions/`](templates/implementation/github-actions/).

## CodeRabbit in this pipeline

Default while on the **Free** plan ([plans](https://docs.coderabbit.ai/management/plans)): do **not** start paid trials, usage-based reviews, Deep Scan, or Agent products unless the owner explicitly opts in later.

| Surface | Free plan role |
|---------|----------------|
| **CLI / IDE (Cursor)** | **Primary review gate.** Full code review. Limits: **3 IDE + 3 CLI reviews / developer / hour**, ≤150 files/review after path filters. Run on the day branch **before merge** (after CI is green or in parallel once the PR exists — still fix CI first if both fail). |
| **GitHub App on the PR** | **PR summarization only** on Free (not full inline review). Still connect FE/BE repos; keep **1 PR summary / developer / hour**. Useful walkthrough; not the depth gate. |
| **Web settings** | Connect org + repos; keep committed `.coderabbit.yaml` + guidelines. Skip paid-only surfaces (Triage extras, linked repos, knowledge repos, usage billing). |

- Closeout still opens a PR (summary may post). Agent runs **CodeRabbit CLI or IDE review**, fixes **blocking** findings, then merges **only after CI is green**.
- When the owner later pays (Essentials+), GitHub App full PR review becomes the primary review gate again; CLI/IDE stay optional early passes.
- CodeRabbit does **not** replace CI tests, human judgment on auth/billing/AI/deletion, SECURITY/COMPLIANCE red lines, the DSA hot-path check, the API readiness gate (contract + HTTP + env smoke), or the SEO+GEO gate on public pages. Setup: product `docs/CODERABBIT.md` (or playbook `templates/docs/CODERABBIT.md`).

## Final reply shape (mandatory)

After closeout, the agent’s last message has **exactly two parts**, in order:

1. **Pareto 20% (teachable depth)** — select the **most important** outcomes of the day (not every commit log). For **each** selected topic, write a **full, thorough explanation** the owner can paste into ChatGPT (or similar) to learn: what was built, why it matters, the key terms and concepts, how the pieces fit, decisions and trade-offs, and what to study next. **“20%” means topic selection (highest leverage only), not ultra-short stubs.** Skimping on depth defeats the purpose — the owner uses this block to grow as an engineer.
2. **New-chat handoff** — one copy-paste block for tomorrow’s fresh chat: paths, SHAs, issue keys, tomorrow must-finish, do-not-break rails. Include last green CI / merge evidence. Keep the handoff operational and tight; put teaching depth in the Pareto half.

Emit both automatically. Do not wait for a second ask. Prompt shape: [`05-PROMPTS.md`](05-PROMPTS.md#implementation-day-start-and-end).

## Pareto 20% — what it means

- **Select** the few highest-leverage outcomes of the day (features, concepts, decisions). Do not narrate every commit or mid-day detour.
- **Explain each selected topic thoroughly** — enough that the owner can copy the Pareto half into ChatGPT (or similar) and learn: vocabulary, how the system works, why choices were made, and what to study next.
- **“20%” is topic selection, not brevity.** Ultra-short stubs fail this requirement. Teaching depth belongs here; the handoff stays operational and tight.

## Coverage atlas (before inventing a practice)
When the owner asks to add a day-loop, closeout, CI, or similar practice to the playbook, consult [`coverage/`](coverage/README.md) first (✅/⚠️/❌ + %). Deepen existing homes at high %; do not fork a second pipeline. Update atlas rows when coverage changes.
**Candor (D-82 / D-83):** if that ask would lower professionalism, weaken this pipeline, violate COMPLIANCE/SECURITY/ethics, or create unmanaged High risk, **refuse and advise** (why + safer alternative scenario or skip). Do not dual-sync a degrading change. Judgment: [`07-judgment/compliance-ethics-risk.md`](07-judgment/compliance-ethics-risk.md). Product standing: `docs/OWNER_STANDING.md` § Candor.

## Owner standing ↔ playbook mirror

Lasting collaboration preferences (this pipeline, language, remotes, assignees) live in the product’s `docs/OWNER_STANDING.md`.

When the owner **changes** a lasting preference that belongs in this method (day loop, closeout order, CI/CD gates, final reply shape, or “update both playbook copies”):

1. Update the product `docs/OWNER_STANDING.md` (+ changelog) in the same session.
2. Update **this playbook** (this file, [`09-CI-CD.md`](09-CI-CD.md), and/or `templates/docs/OWNER_STANDING.md`, prompts, lessons) so the **next** product inherits it — keep wording generic.
3. If the studio keeps a private playbook GitHub mirror, **sync in the same session** (for example `node scripts/sync-planning-playbook.mjs`).

Do not leave standing only in chat memory or only in one product’s docs.

## What this is not

- Not permission to half-finish the current actor (see [`02-DELIVERY.md`](02-DELIVERY.md) — no MVP mode).
- Not a second requirements source. Features still follow [`04-FEATURE_SDLC.md`](04-FEATURE_SDLC.md) (adaptive depth, evidence, separate Done / Released / Outcome).
- Not a substitute for SECURITY / COMPLIANCE / Governing Product Rules.
- Not permission to skip CI because local tests passed, or to deploy from a laptop.
