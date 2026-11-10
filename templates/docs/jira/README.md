# Jira handoff (planning → tracker)

One folder per actor under `docs/jira/<actor>/`. Do not invent other actors early.

| Folder | Meaning |
|--------|---------|
| `job-seeker/` (example) | Current actor import pack |
| *(later)* | Next actor when delivery loop reaches it |

Per actor: `README.md`, `SPRINTS.md`, `ESTIMATES.json`, `feature-screen-map.json`, generated `backlog.csv` + `SCREEN_MAP.md` + `OWNERS.md`.

One CSV import (Epic → Story → Sub-task with Component Frontend/Backend). Owner boards are generated views, not a second hierarchy.

When a live Atlassian site is connected, document the mirror contract in `docs/jira/SYNC.md` and keep tracker keys in `jira-key-map.json` (see MasarHub D-47 pattern).

**Implementation repos:** keep a short `docs/JIRA.md` in each FE/BE repo that mirrors this actor’s locked start/end, daily hours, sprint labels, and Story map. When the planning calendar changes, update those files in the same session as the tracker — do not leave a half-patched table (old sprint rows with rewritten dates).
