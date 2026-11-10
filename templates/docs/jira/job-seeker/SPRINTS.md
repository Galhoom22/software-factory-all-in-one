# Sprints — {{CURRENT_ACTOR}}

## Cadence (locked for this actor)

| Rule | Value |
|------|--------|
| Implementation start | **YYYY-MM-DD** (weekday) |
| Implementation end (this actor 100% Done) | **YYYY-MM-DD** |
| Daily focus budget | **N hours/day** (may be AI-assisted / higher than a “normal” day) |
| Effort unit | **working days** at an **8 h** reference |
| Sprint model | One or more sprints spanning the window (label `sprint-S#` if the board has no native Sprint field) |
| Capacity / developer / sprint | weekdays in sprint × daily hours ÷ 8 |
| Scope of this calendar | **This actor only** — not later actors / whole-system |

Fill the table from a DECISIONS entry. Do not leave start/end ambiguous.

| Sprint | Window (inclusive) | Capacity / developer |
|--------|--------------------|----------------------|
| S1 | YYYY-MM-DD → YYYY-MM-DD | … |

Keep FE and BE Stories for the same Feature in the same sprint when the API contract is ready. Prefer true parallel ownership over a shared umbrella card.

## Schedule flexibility

- Finish a Story early → pull the next ranked board item the same day (do not wait for Due).
- When plan calendar windows or daily hours must move: edit this actor’s `ESTIMATES.json` + this file first, then same-session rebaseline the live tracker (Start/Due + Schedule bodies + sprint labels) **and** each implementation repo’s `docs/JIRA.md` (or equivalent calendar doc).
- Mechanical find/replace of end dates is not enough — drop obsolete sprint rows and remap every Story’s sprint label when collapsing or expanding the plan.
