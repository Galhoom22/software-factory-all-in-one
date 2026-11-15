# Implementation day pipeline (owner ↔ agent)

Reusable **day loop** for frontend and backend **implementation** repositories once planning is ready and the team builds by calendar day (must-finish checklist + issue tracker).

Keep this generic. Product-specific names (Notion pages, Jira keys, repo paths) live in that product’s `docs/OWNER_STANDING.md` and day pages — not here.

CI/CD detail: [`09-CI-CD.md`](09-CI-CD.md).

## Pipeline (fixed order)

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

Treat this as a **handoff pipeline**: each stage feeds the next. Do not invent mid-day approval gates.

## Day run-through

When a new chat starts and the owner says to work **today’s** tasks (any clear start cue, including other languages), the agent:

1. Opens that day’s must-finish list (daily checklist tool + linked issue keys).
2. Completes **every** checkbox with real proof — no stubs, no “good enough for later.”
3. Does **not** stop after each slice to ask for continue / “go.”
4. Does **not** open or merge a PR until the day’s must-finish is **100%** earned locally.
5. Runs the **same local checks CI will run** before opening the PR (fail fast).

**Pause only when:**

- A missing owner decision would change security, compliance, product rules, or spend.
- An interactive approval the agent cannot complete alone (host UI).
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
8. **Day page** — check off must-finish, mark day finished, fill finished / tomorrow / **full day summary** (include merge SHA, CI run link, and CD/smoke result or “CD not configured”).

Never mark tracker or checklist finished before post-merge verification (and required CI) succeeds. Never wait for the owner to ask for closeout.

## CI / CD in this pipeline

- **CI** proves the branch on a clean runner (tests, lint/format, secret scan). It is a **merge gate** equal in force to local proof.
- **CD** ships only from green `main` through the host pipeline (e.g. Forge deploy hooks called by Actions). No laptop deploys.
- Until hooks exist, CI still runs; CD steps are skipped honestly.
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
- CodeRabbit does **not** replace CI tests, human judgment on auth/billing/AI/deletion, or SECURITY/COMPLIANCE red lines. Setup: product `docs/CODERABBIT.md` (or playbook `templates/docs/CODERABBIT.md`).

## Final reply shape (mandatory)

After closeout, the agent’s last message has **exactly two parts**, in order:

1. **Pareto 20% (teachable depth)** — select the **most important** outcomes of the day (not every commit log). For **each** selected topic, write a **full, thorough explanation** the owner can paste into ChatGPT (or similar) to learn: what was built, why it matters, the key terms and concepts, how the pieces fit, decisions and trade-offs, and what to study next. **“20%” means topic selection (highest leverage only), not ultra-short stubs.** Skimping on depth defeats the purpose — the owner uses this block to grow as an engineer.
2. **New-chat handoff** — one copy-paste block for tomorrow’s fresh chat: paths, SHAs, issue keys, tomorrow must-finish, do-not-break rails. Include last green CI / merge evidence. Keep the handoff operational and tight; put teaching depth in the Pareto half.

Emit both automatically. Do not wait for a second ask. Prompt shape: [`05-PROMPTS.md`](05-PROMPTS.md#implementation-day-start-and-end).

## Pareto 20% — what it means

- **Select** the few highest-leverage outcomes of the day (features, concepts, decisions). Do not narrate every commit or mid-day detour.
- **Explain each selected topic thoroughly** — enough that the owner can copy the Pareto half into ChatGPT (or similar) and learn: vocabulary, how the system works, why choices were made, and what to study next.
- **“20%” is topic selection, not brevity.** Ultra-short stubs fail this requirement. Teaching depth belongs here; the handoff stays operational and tight.

## Owner standing ↔ playbook mirror

Lasting collaboration preferences (this pipeline, language, remotes, assignees) live in the product’s `docs/OWNER_STANDING.md`.

When the owner **changes** a lasting preference that belongs in this method (day loop, closeout order, CI/CD gates, final reply shape, or “update both playbook copies”):

1. Update the product `docs/OWNER_STANDING.md` (+ changelog) in the same session.
2. Update **this playbook** (this file, [`09-CI-CD.md`](09-CI-CD.md), and/or `templates/docs/OWNER_STANDING.md`, prompts, lessons) so the **next** product inherits it — keep wording generic.
3. If the studio keeps a private playbook GitHub mirror, **sync in the same session** (for example `node scripts/sync-planning-playbook.mjs`).

Do not leave standing only in chat memory or only in one product’s docs.

## What this is not

- Not permission to half-finish the current actor (see [`02-DELIVERY.md`](02-DELIVERY.md) — no MVP mode).
- Not a second requirements source. Features still follow [`04-FEATURE_SDLC.md`](04-FEATURE_SDLC.md).
- Not a substitute for SECURITY / COMPLIANCE / Governing Product Rules.
- Not permission to skip CI because local tests passed, or to deploy from a laptop.
