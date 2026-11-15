# Owner standing instructions

**What this is:** the durable ledger of lasting preferences the product owners state in chat. Agents must follow these **without re-asking** and **without relying on chat memory**.

**What this is not:** product/tech decisions (`DECISIONS.md`), product requirements, or tool-specific board rules alone.

## How agents must use this file

1. **Read** this file at session start (from `AGENT_START.md`).
2. When the user states a **lasting** working preference, **append or update a bullet here in the same session**.
3. Prefer editing an existing section over duplicating.
4. Date the change in the **Changelog** below.
5. Keep tool-specific boards (e.g. Jira) in their own standing file; point to them from here.
6. If the preference is a **reusable method** (day loop, closeout order, CI/CD gates, final reply shape, remotes mirror), also update the product’s `playbook/` copy in generic wording (especially `playbook/08-IMPLEMENTATION-DAY.md`, `playbook/09-CI-CD.md`, and this template) **and** sync any studio playbook GitHub mirror in the same session.

---

## Language and communication

- Always reply in **English**, even when the user writes in another language.
- Be direct and concise.

## Owner supervises; agent executes

- The owner is the **supervisor**, not the hands-on executor (unless they choose otherwise).
- The agent executes commands, code, checks, PRs/merges (when the day’s cadence allows), and tracker/checklist updates.

### Day run-through (implementation FE/BE)

Default for implementation chats. Full method: `playbook/08-IMPLEMENTATION-DAY.md` + `playbook/09-CI-CD.md`.

- When the owner says to work **today’s** tasks, finish the **whole** must-finish list without mid-day continue / “approve next slice” waits.
- **Final reply after closeout:** (1) **Pareto 20% (teachable depth)** — most important topics only, each explained thoroughly so the owner can paste into ChatGPT and learn (terms, concepts, what shipped, why) — not ultra-short stubs; (2) **New-chat handoff** — copy-paste block for tomorrow. Emit both automatically.
- **Closeout (automatic when 100%):** PR → **CI green** (GitHub Actions) → **CodeRabbit** (Free: CLI/IDE full review + optional PR summary; paid: GitHub review) → merge → verify on default branch (+ confirm CI on that branch) → **CD when configured** (staging deploy → smoke → Sentry if live) → tracker → day page. Stay on Free CodeRabbit until the owner explicitly pays; no paid trials/usage products by default.
- Pause only for real blockers (security/compliance/product/spend decisions, interactive approvals, unfixable hard stops).

## Git and remotes

- Keep local default branch and `origin` identical after verified work: commit, push, confirm CI.
- Never force-push or rewrite pushed history on the default branch.

## Delivery pointers

- Link your delivery / actor-loop doc here.
- Link your board standing rules here (if any).
- Implementation day pipeline: `playbook/08-IMPLEMENTATION-DAY.md`.
- CI/CD gates: `playbook/09-CI-CD.md`.

## Changelog

| Date (UTC) | Change |
|------------|--------|
| YYYY-MM-DD | CI/CD (GitHub Actions + staging/prod delivery) is a hard gate in implementation day closeout (`09-CI-CD.md`). |
| YYYY-MM-DD | Created ledger; seeded day run-through + Pareto/handoff + playbook dual-update rule. |
