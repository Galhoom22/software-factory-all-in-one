# Judgment — Context window hygiene (agents)

## Problem this prevents

Context window overflow is **silent**. When tool outputs, logs, or chat history exceed what the model can keep, the agent does not always crash — it truncates, drops earlier instructions, invents from incomplete data, or “finishes” half-done work. That is a professionalism failure, not a model quirk.

This judgment absorbs (do **not** vendor frameworks into the product):

- **Memory Pointer Pattern** — store large tool payloads outside the LLM context; pass a short reference (path / key / SHA) and a summary ([AWS / Strands write-up](https://dev.to/aws/ai-context-window-overflow-memory-pointer-fix-3akc); IBM-scale pointer vs raw-token research cited there).

- **Context engineering** — decide what enters the window and when; compact or hand off rather than hoping a larger window fixes pollution ([Anthropic — Effective context engineering](https://www.anthropic.com/research/effective-context-engineering-for-ai-agents)).

- **Long-running harness** — one feature / clean commit / progress outside chat so the next session does not guess ([Anthropic — Effective harnesses for long-running agents](https://www.anthropic.com/research/effective-harnesses-for-long-running-agents)).

## Adopt (always on for agents)

1. **Truth outside the chat.** Git commits, feature files, day checklist, issue tracker, and written handoffs are the system of record. Chat is working memory only.

2. **Memory pointers, not blobs.** If a tool returns large data (CI logs, dumps, full trees, long JSON): keep it on disk or in the tool store; return a **path / id / SHA + short summary** to the model. Prefer `path:line` citations over pasting whole files.

3. **Read the slice you need.** Search → open the relevant region. Do not re-ingest the whole repository or re-paste the same log every turn.

4. **Bounded helpers.** Use subagents / isolated reviews for large exploration; the parent keeps objectives and receives a compact finding with evidence paths — not the worker’s full transcript. When the helper **edits the tree**, apply [`delegation.md`](delegation.md) (brief, review, land).

5. **Fresh chat is a feature.** Implementation: one fresh chat per calendar day + end-of-day handoff ([`08-IMPLEMENTATION-DAY.md`](../08-IMPLEMENTATION-DAY.md), [`05-PROMPTS.md`](../05-PROMPTS.md)). Planning: hand off before the chat gets long, then start the next chat with the handoff and a repository re-read.

6. **Mid-day context refresh ≠ mid-day owner “go”.** Owner start-once / finish-must-finish still holds. If the **window** is polluted (huge logs, repeated failed approaches, topic thrash), the agent may: write a short **progress checkpoint** (paths, SHAs, next action) to the day page or a file; then continue in a **fresh chat** seeded with that checkpoint — still no per-slice approval theater.

7. **Handoffs carry pointers.** SHAs, paths, test commands + outcomes, open risks, next concrete action — not a transcript dump. The receiving agent **re-verifies** against git and the repo before trusting the summary.

8. **Security / money / PII:** never rely on a compacted summary alone — re-check files and tests.

## Forbid

| Do not | Why |
|--------|-----|
| Paste entire CI logs, DB dumps, or multi-thousand-line files into the chat | Overflow + silent truncation |
| Mid-day “approve the next slice” gates | Burns context **and** breaks the day pipeline |
| Keep a polluted chat hoping automatic compaction remembers decisions | Compaction loses subtle facts; write them to files first |
| Re-fetch the same large payload every turn | Waste; use a pointer |
| Treat the handoff as proof without re-reading cited paths / SHAs | Stale pointer risk |
| Invent a second agent framework or memory product inside planning | Judgment only — harness features (compact, subagents) stay in the IDE |

## Day pipeline placement

Apply continuously during [`08-IMPLEMENTATION-DAY.md`](../08-IMPLEMENTATION-DAY.md) run-through and closeout. End-of-day **New-chat handoff** is the primary cross-session pointer. Domain gates (API, SEO, booking, …) stay as they are — this judgment is about **how** evidence enters the model, not which gates fire.

## Minimum habits (checklist)

- [ ] Large tool output → path/id + ≤ short summary in chat

- [ ] Progress committed or written to day/feature file before a context refresh

- [ ] Handoff lists SHAs / paths / next action; no diary dump

- [ ] Next chat: paste handoff → re-read repo → verify claims against git

## Related homes

- Day loop: [`08-IMPLEMENTATION-DAY.md`](../08-IMPLEMENTATION-DAY.md)

- Prompts: [`05-PROMPTS.md`](../05-PROMPTS.md)

- Lessons: [`06-LESSONS.md`](../06-LESSONS.md) § Working With AI Agents

- Proportional depth (do not over-engineer tiny products): `08` § Proportional day pipeline (D-85)
