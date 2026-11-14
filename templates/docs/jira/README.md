# Jira handoff (planning → tracker)

One folder per actor under `docs/jira/<actor>/`. Do not invent other actors early.

| Folder | Meaning |
|--------|---------|
| `current-actor/` (example; rename to the actor slug) | Current actor import pack |
| *(later)* | Next actor when delivery loop reaches it |

Per actor: `README.md`, `SPRINTS.md`, `ESTIMATES.json`, `feature-screen-map.json`, generated `backlog.csv` + `SCREEN_MAP.md` + `OWNERS.md`.

Prefer **separate Frontend and Backend Stories** (assignee per owner), not shared umbrellas with nested Sub-tasks for both people. Owner boards are filters on assignee/component, not a second hierarchy.

When a live Atlassian site is connected, document the mirror contract in `docs/jira/SYNC.md` and keep tracker keys in `jira-key-map.json`.

**Implementation repos:** keep a short `docs/JIRA.md` in each FE/BE repo that mirrors this actor’s locked start/end, daily hours, sprint labels, and Story map. When the planning calendar changes, update those files in the same session as the tracker — do not leave a half-patched table (old sprint rows with rewritten dates).

**Optional daily checklist:** if the team uses an external daily page (Notion or similar), keep separate FE/BE lanes, link each day to the matching tracker issue keys, treat the tracker as status SoT, and rebaseline those day→issue links in the same session as calendar moves.


