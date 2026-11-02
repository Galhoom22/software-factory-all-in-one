# Owner standing instructions

**What this is:** the durable ledger of lasting preferences the product owners state in chat. Agents must follow these **without re-asking** and **without relying on chat memory**.

**What this is not:** product/tech decisions (`DECISIONS.md`), product requirements, or tool-specific board rules alone.

## How agents must use this file

1. **Read** this file at session start (from `AGENT_START.md`).
2. When the user states a **lasting** working preference, **append or update a bullet here in the same session**.
3. Prefer editing an existing section over duplicating.
4. Date the change in the **Changelog** below.
5. Keep tool-specific boards (e.g. Jira) in their own standing file; point to them from here.

---

## Language and communication

- Always reply in **English**, even when the user writes in another language.
- Be direct and concise.

## Git and remotes

- Keep local default branch and `origin` identical after verified work: commit, push, confirm CI.
- Never force-push or rewrite pushed history on the default branch.

## Delivery pointers

- Link your delivery / actor-loop doc here.
- Link your board standing rules here (if any).

## Changelog

| Date (UTC) | Change |
|------------|--------|
| YYYY-MM-DD | Created ledger. |
