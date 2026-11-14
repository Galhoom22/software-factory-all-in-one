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
  PR → merge to default branch → verify on that commit
  → issue tracker (Done, or progress comment if the Story continues)
  → day checklist page (checked + day finished + day summary)
        ↓
Final chat reply only:
  1) Pareto 20%   2) New-chat handoff
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
2. **Merge** into the default branch in the same session.
3. **Verify** on that merge commit (re-run the day’s proof checks). If verify fails: stop — do not mark tracker/checklist Done; fix first.
4. **Issue tracker** — mark Done only when the Story’s acceptance is fully met; otherwise leave In Progress with a progress comment (Stories may span days).
5. **Day page** — check off must-finish, mark day finished, fill finished / tomorrow / **full day summary**.

Never mark tracker or checklist finished before post-merge verification succeeds. Never wait for the owner to ask for closeout.

## Final reply shape (mandatory)

After closeout, the agent’s last message has **exactly two parts**, in order:

1. **Pareto 20%** — the few highest-leverage facts (what shipped, SHAs/links that matter, risks). No play-by-play.
2. **New-chat handoff** — one copy-paste block for tomorrow’s fresh chat: paths, SHAs, issue keys, tomorrow must-finish, do-not-break rails.

Emit the handoff automatically. Do not wait for a second ask. Prompt shape: [`05-PROMPTS.md`](05-PROMPTS.md#implementation-day-start-and-end).

## Owner standing ↔ playbook mirror

Lasting collaboration preferences (this pipeline, language, remotes, assignees) live in the product’s `docs/OWNER_STANDING.md`.

When the owner **changes** a lasting preference that belongs in this method (day loop, closeout order, final reply shape, or “update both playbook copies”):

1. Update the product `docs/OWNER_STANDING.md` (+ changelog) in the same session.
2. Update **this playbook** (this file and/or `templates/docs/OWNER_STANDING.md`, prompts, lessons) so the **next** product inherits it — keep wording generic.
3. If the studio keeps a private playbook GitHub mirror, **sync in the same session** (MasarHub: `node scripts/sync-planning-playbook.mjs` → `code-hunters-studio/planning-playbook`, D-52).

Do not leave standing only in chat memory or only in one product’s docs.

## What this is not

- Not permission to half-finish the current actor (see [`02-DELIVERY.md`](02-DELIVERY.md) — no MVP mode).
- Not a second requirements source. Features still follow [`04-FEATURE_SDLC.md`](04-FEATURE_SDLC.md).
- Not a substitute for SECURITY / COMPLIANCE / Governing Product Rules.
