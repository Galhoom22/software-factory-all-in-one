# Cursor — agent harness pack

**Pinned slice:** **Cursor IDE + Agent / Cloud Agents** (checked **2026-11-23**).  
**Official home:** [cursor.com/docs](https://cursor.com/docs) (re-verify)

**Region note:** Global product; follow Cursor ToS / availability for the account.

Shared rules for every harness — the single rulebook, session habits and quality bar — are in [`../README.md`](../README.md).

## When to open this pack

- Coding or planning inside **Cursor** Agent chat, Tab, or Cloud Agents.
- Wiring MCP tools, rules, and Skills for this factory.

## Official references

Re-verify on the vendor site when bumping; prefer these over blogs.

| Topic | Official URL | Checked |
|-------|--------------|---------|
| Cursor docs hub | https://cursor.com/docs | 2026-11-23 |
| Cursor changelog / product | https://cursor.com/changelog | 2026-11-23 |

## How to drive it

- **Discovery pointer:** Project `.cursor/rules/*.mdc` (thin always-on rules) + `AGENTS.md`.
- **Depth:** **full**. If thin: deepen from official docs before claiming high coverage %.

## Use these

- Trust the project; keep `.cursor/rules` thin pointers to AGENTS.md / AGENT_START.
- Use MCP only when the task needs it; auth failed servers before relying on them.
- Day loop: one must-finish list → closeout → Pareto + handoff (implementation repos).
- Prefer @-mentions of real paths over pasting huge files.

## Stop using

- Do not put the full AGENTS.md into a Cursor user rule (drift).
- Do not disable delivery / ponytail project rules to “go faster.”
- Do not treat Cloud Agent output as Done without local CI / freshness gates.

## Common mistakes

| Mistake | Fix |
|---------|-----|
| Ignoring AGENT_START on a weak model | Paste AGENT_START first; reply ok only after rails load |
| Editing FE from BE seat (or reverse) | Read sibling; write owned seat only |
| MCP red error ignored | Auth / fix server; prove with a live tool call |

## Product vs pack

- **Single rulebook:** product `AGENTS.md` (+ `docs/AGENT_START.md`) remains the only full constitution. This pack teaches **how to drive Cursor** so it obeys that rulebook.
- Discovery pointer: Project `.cursor/rules/*.mdc` (thin always-on rules) + `AGENTS.md`.
- Do not fork a second rulebook inside this pack.
