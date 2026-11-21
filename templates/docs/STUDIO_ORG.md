# Studio org chart (company seats)

Fill this once per product studio. Treat the planning + FE/BE work as a **small company**: every seat has a job, one manager, and clear checkout rules. Method: playbook [`07-judgment/studio-company.md`](../../07-judgment/studio-company.md) (Paperclip patterns absorbed as judgment — not a second OS).

## Company goal

| Field | Value |
|-------|--------|
| Product | {{PRODUCT}} |
| North-star goal (measurable) | {{COMPANY_GOAL}} |
| Current actor in focus | {{CURRENT_ACTOR}} |

Every implementation day and Story must stay traceable to this goal (goal ancestry).

## Seats

| Seat | Person / agent | Reports to | Job (one line) | Checkout (owns) |
|------|----------------|------------|----------------|-----------------|
| Board / Owner | {{OWNER_NAME}} | — | Goals, Candor, strategy, tool/role hires, budgets | Consequential approvals |
| Planning | Agent in planning repo | Board | Requirements, prototype, Jira pack, playbook sync | Planning stages |
| Backend engineer | {{BE_NAME}} (+ BE day agent) | Board | API Stories to production quality | BE calendar day / Story |
| Frontend engineer | {{FE_NAME}} (+ FE day agent) | Board | UI Stories to production quality | FE calendar day / Story |
| Reviewer | CI + CodeRabbit | Board | Merge evidence; not product ownership | PR review only |

Add rows when the studio grows (design, QA, ops). Each new seat needs a **manager**, a **job**, and **checkout scope** — no anonymous agent tabs.

## Operating rules (always)

1. **One checkout** — one active agent session owns a given day/Story slice; no competing chats on the same must-finish.
2. **Goal on the ticket** — day page / Story states product + actor goal in one line.
3. **Delegation down, escalation up** — FE/BE agents escalate blockers to the owner; they do not invent parallel product directions.
4. **Board approvals** — new always-on tools, stack pins, bar-lowering asks, or new seats need owner decision (Candor applies).
5. **Routines** — implementation days follow playbook `08-IMPLEMENTATION-DAY.md`; planning follows actor-loop delivery.

## Optional multi-agent control plane

Paperclip (or similar) may be used **only** if the owner explicitly opts in. It does **not** replace this file, Jira, Notion, or GitHub as sources of truth by default.
