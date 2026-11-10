# Jira pack — {{CURRENT_ACTOR}}

| File | Role |
|------|------|
| `backlog.csv` | Import / sync wording |
| `feature-screen-map.json` | Feature → prototype screen IDs/paths |
| `SCREEN_MAP.md` / `OWNERS.md` | Generated tables |
| `SPRINTS.md` | Actor calendar, capacity, pull order, exit checks |
| `ESTIMATES.json` | Exact working-days Duration + sprint membership per Story |

## Sprint model (fill from DECISIONS)

| Rule | Value |
|------|--------|
| Implementation start → end | **YYYY-MM-DD → YYYY-MM-DD** (this actor only) |
| Daily focus budget | **N hours/day** |
| Sprint length / count | … |
| Capacity / developer | … |

Keep FE/BE as separate owner Stories (or Sub-tasks under the same Feature) with a `Component` column. Regenerate when screens change. When the calendar moves, rebaseline the live board and implementation-repo calendar docs in the same session.
