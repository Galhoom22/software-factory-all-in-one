# Implementation day pipeline (owner ↔ agent)

Reusable **day loop** for frontend and backend **implementation** repositories once planning is ready and the team builds by calendar day (must-finish checklist + issue tracker).

Keep this generic. Product-specific names (Notion pages, Jira keys, repo paths) live in that product’s `docs/OWNER_STANDING.md` and day pages — not here.

## Pipeline (fixed order)

```text
Owner: “start today’s tasks”
        ↓
Agent: run through the whole day’s must-finish list (no mid-day pause)
        ↓
Proof: tests / acceptance evidence for every checkbox
        ↓
Closeout (automatic, same session):
  PR → CodeRabbit (Free: CLI/IDE review + optional PR summary; paid: GitHub review) → merge
  → verify on that commit
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

**Pause only when:**

- A missing owner decision would change security, compliance, product rules, or spend.
- An interactive approval the agent cannot complete alone (host UI).
- A hard blocker the agent cannot fix.

State the blocker once, then stop. Do not weaken rails to keep moving.

## Closeout (automatic)

When must-finish is truly 100%:

1. **PR** — one PR for the day’s finished work (Conventional Commits; no secrets / no real PII).
2. **CodeRabbit** — on **Free**: run **CLI or IDE** full review on the day branch (primary gate); GitHub may post a **PR summary** only. On **paid**: wait for the GitHub App full PR review. Fix **blocking** findings before merge. Do **not** start paid trials or usage products unless the owner asks.
3. **Merge** into the default branch in the same session.
4. **Verify** on that merge commit (re-run the day’s proof checks). If verify fails: stop — do not mark tracker/checklist Done; fix first.
5. **Issue tracker** — mark Done only when the Story’s acceptance is fully met; otherwise leave In Progress with a progress comment (Stories may span days).
6. **Day page** — check off must-finish, mark day finished, fill finished / tomorrow / **full day summary**.

Never mark tracker or checklist finished before post-merge verification succeeds. Never wait for the owner to ask for closeout.

## CodeRabbit in this pipeline

Default while on the **Free** plan ([plans](https://docs.coderabbit.ai/management/plans)): do **not** start paid trials, usage-based reviews, Deep Scan, or Agent products unless the owner explicitly opts in later.

| Surface | Free plan role |
|---------|----------------|
| **CLI / IDE (Cursor)** | **Primary merge gate.** Full code review. Limits: **3 IDE + 3 CLI reviews / developer / hour**, ≤150 files/review after path filters. Run on the day branch **before merge**. |
| **GitHub App on the PR** | **PR summarization only** on Free (not full inline review). Still connect FE/BE repos; keep **1 PR summary / developer / hour**. Useful walkthrough; not the depth gate. |
| **Web settings** | Connect org + repos; keep committed `.coderabbit.yaml` + guidelines. Skip paid-only surfaces (Triage extras, linked repos, knowledge repos, usage billing). |

- Closeout still opens a PR (summary may post). Agent runs **CodeRabbit CLI or IDE review**, fixes **blocking** findings, then merges.
- When the owner later pays (Essentials+), GitHub App full PR review becomes the primary gate again; CLI/IDE stay optional early passes.
- CodeRabbit does **not** replace CI tests, human judgment on auth/billing/AI/deletion, or SECURITY/COMPLIANCE red lines. Setup: product `docs/CODERABBIT.md` (or playbook `templates/docs/CODERABBIT.md`).

## Final reply shape (mandatory)

After closeout, the agent’s last message has **exactly two parts**, in order:

1. **Pareto 20% (teachable depth)** — select the **most important** outcomes of the day (not every commit log). For **each** selected topic, write a **full, thorough explanation** the owner can paste into ChatGPT (or similar) to learn: what was built, why it matters, the key terms and concepts, how the pieces fit, decisions and trade-offs, and what to study next. **“20%” means topic selection (highest leverage only), not ultra-short stubs.** Skimping on depth defeats the purpose — the owner uses this block to grow as an engineer.
2. **New-chat handoff** — one copy-paste block for tomorrow’s fresh chat: paths, SHAs, issue keys, tomorrow must-finish, do-not-break rails. Keep the handoff operational and tight; put teaching depth in the Pareto half.

Emit both automatically. Do not wait for a second ask. Prompt shape: [`05-PROMPTS.md`](05-PROMPTS.md#implementation-day-start-and-end).

## Pareto 20% — what it means

- **Select** the few highest-leverage outcomes of the day (features, concepts, decisions). Do not narrate every commit or mid-day detour.
- **Explain each selected topic thoroughly** — enough that the owner can copy the Pareto half into ChatGPT (or similar) and learn: vocabulary, how the system works, why choices were made, and what to study next.
- **“20%” is topic selection, not brevity.** Ultra-short stubs fail this requirement. Teaching depth belongs here; the handoff stays operational and tight.

## Owner standing ↔ playbook mirror

Lasting collaboration preferences (this pipeline, language, remotes, assignees) live in the product’s `docs/OWNER_STANDING.md`.

When the owner **changes** a lasting preference that belongs in this method (day loop, closeout order, final reply shape, or “update both playbook copies”):

1. Update the product `docs/OWNER_STANDING.md` (+ changelog) in the same session.
2. Update **this playbook** (this file and/or `templates/docs/OWNER_STANDING.md`, prompts, lessons) so the **next** product inherits it — keep wording generic.
3. If the studio keeps a private playbook GitHub mirror, **sync in the same session** (for example `node scripts/sync-planning-playbook.mjs`).

Do not leave standing only in chat memory or only in one product’s docs.

## What this is not

- Not permission to half-finish the current actor (see [`02-DELIVERY.md`](02-DELIVERY.md) — no MVP mode).
- Not a second requirements source. Features still follow [`04-FEATURE_SDLC.md`](04-FEATURE_SDLC.md).
- Not a substitute for SECURITY / COMPLIANCE / Governing Product Rules.
