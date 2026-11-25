# Judgment — Studio as a company (org operating model)



## Problem this prevents



A planning + FE/BE studio that feels like **one chat with a bot** does not scale: work collides, goals drift, nobody knows who owns what, and agents invent “hires” (new tools/roles) without board control. Real companies have seats, reporting lines, goals, exclusive task ownership, and approval for consequential moves.



## Source (judgment only)



Absorb operating ideas from [Paperclip](https://github.com/paperclipai/paperclip) (“If OpenClaw is an *employee*, Paperclip is the *company*”) and its docs ([what is Paperclip](https://docs.paperclip.ing/guides/welcome/what-is-paperclip/), [org structure](https://docs.paperclip.ing/guides/org/org-structure/), [approvals](https://docs.paperclip.ing/guides/day-to-day/approvals/), glossary: atomic checkout / goals). Log the borrow in product `docs/REFERENCES.md`.



**Do not** install Paperclip as a second constitution, replace Jira/Notion/GitHub as sources of truth, or require its server for day closeout. Optional CLI: `paperclipai` / `npx paperclipai@latest` for owners who want a multi-agent control-plane experiment — disable telemetry if undesired (`PAPERCLIP_TELEMETRY_DISABLED=1` or `DO_NOT_TRACK=1`).



## Adopt (map onto this playbook)



| Paperclip idea | Studio mapping |

|----------------|----------------|

| **Board / founder** | Human owner — goals, Candor veto, strategy, budgets, hire of new tools/roles |

| **Org chart + one manager** | Explicit seats in `docs/STUDIO_ORG.md` (template) / `OWNER_STANDING` — each seat has a job, one reporting line, no ambiguous dual-owners on the same Story |

| **Goal ancestry** | Every day / Story / feature cites the **product + current-actor goal** (why this work exists) |

| **Atomic checkout** | One assignee + one active agent session owns a calendar day / Story slice; no two chats competing on the same must-finish |

| **Heartbeats / routines** | Implementation day pipeline (`08`) — start cue → finish must-finish → closeout |

| **Approvals / governance** | Consequential changes need owner decision (new stack, new always-on tool, bar-lowering asks → Candor); merge gates = CI + CodeRabbit |

| **Skills library** | Playbook `07-judgment/`, `technologies/`, Cursor skills — versioned reusable craft |

| **Cost control** | Prefer proportional depth (D-85); avoid runaway token loops; name cost when choosing heavy approaches |

| **Team catalog** | Seeded FE/BE day seats + planning agent — not twenty unsupervised terminals |



### Default small-studio seats (fill names in product standing)



```text

Owner (Board)

└── Planning agent (planning repo) — requirements, prototype, Jira pack

└── Backend engineer (+ BE day agent) — API Stories

└── Frontend engineer (+ FE day agent) — UI Stories

    Reviewer (CI + CodeRabbit) — merge gate, not a second product owner

```



Scale later (design, QA, ops) by **adding seats with a manager and a job description** — never by opening anonymous agent tabs.



## Forbid



| Do not | Why |

|--------|-----|

| Vendor Paperclip (or any agent OS) as `AGENTS.md` / day SoT | Second constitution; fights D-40 delivery + existing trackers |

| Two agents checkout the same Story/day without coordination | Duplicate PRs, lost context, spend waste |

| Work with no goal link (“just coding”) | Goal drift; Paperclip’s “why” rule |

| Hire new always-on agents/tools without owner approval | Unbounded org + cost |

| Replace actor-loop quality with “the CEO agent said so” | Board still owns product rules |



## Day pipeline placement



At day start (`08`): name **goal** (product + actor) + **seat** (FE or BE day agent) + **checkout** (this chat owns today’s must-finish). Closeout still PR → CI → CodeRabbit → merge → verify. Judgment pairs with [`context-window.md`](context-window.md), [`EXCELLENCE.md`](../EXCELLENCE.md), Candor.



## Optional Paperclip CLI



When the owner wants to **experiment** with a multi-agent company dashboard (not required for the product day cadence):



```bash

# Node >= 24.11

npx paperclipai@latest --help

# or global: npm install -g paperclipai

# Telemetry off: PAPERCLIP_TELEMETRY_DISABLED=1

# Do not run onboard into production trackers without an explicit owner decision

```



Keep Jira/Notion/GitHub as the studio’s work SoT unless a new DECISIONS row says otherwise.



## Pair with Software Factory

Seats answer **who**. The **line** (intake → triage → plan → build → independent review → human decision → Done) lives in [`software-factory.md`](software-factory.md) (D-90). Use both: company org + factory stages on every implementation day.

## Related homes



- Template org chart: [`templates/docs/STUDIO_ORG.md`](../templates/docs/STUDIO_ORG.md)

- Day loop: [`08-IMPLEMENTATION-DAY.md`](../08-IMPLEMENTATION-DAY.md)

- Excellence ratchet: [`EXCELLENCE.md`](../EXCELLENCE.md)

