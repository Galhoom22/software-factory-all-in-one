# Judgment — incident response and blameless postmortems

Absorb **incident practice** as judgment for products that run in production: restore service first, learn second, and turn the learning into tracked work that makes the next incident shorter or impossible. Use this when a production incident, a significant degradation or a near-miss happens, and when a product first gets a production environment (so detection and rollback exist before they are needed).

**When this applies:** production exists (Phase B+ in [`09-CI-CD.md`](../09-CI-CD.md)). Before that: **N/A**, except writing the rollback section of product `docs/DEPLOYMENT.md`.

**Pairs with:** product `docs/DEPLOYMENT.md` § Rollback and Recovery · product `docs/SECURITY.md` (security incidents and breach notice duties) · product `docs/COMPLIANCE.md` · [`06-LESSONS.md`](../06-LESSONS.md) (a lesson is the generic half of a postmortem) · [`verification-engineering.md`](verification-engineering.md).

---

## Problem this prevents

Without a practice, incidents are fixed in a hurry, explained from memory, blamed on a person, and forgotten. The same alert gap and the same missing rollback step cause the next one. Postmortems written weeks later invent timestamps; action items like "improve monitoring" never close.

## During the incident (respond)

1. **Declare** — one owner (incident lead) and one channel. Severity by user impact, not by how hard the bug is.
2. **Mitigate before diagnosing** — roll back the last deploy, turn off the flag, fail over, or rate-limit. Restoring service beats finding the root cause first.
3. **Keep a timeline as you go** — UTC time, what was seen or done, by whom, link to evidence (alert, log query, deploy id). Memory written later is not evidence.
4. **Protect data** — stop writes that corrupt; never "fix" production data by hand without a backup and a second person.
5. **Security incident?** — preserve logs, rotate exposed secrets, follow product `docs/SECURITY.md` and any legal notice duty in `docs/COMPLIANCE.md` (deadlines can be hours, not days).
6. **Communicate** — honest status to affected users when impact is visible; no speculation about cause.

## When a postmortem is required

Write one for: user-visible downtime or degradation past the product's threshold; any data loss; an on-call intervention (rollback, traffic reroute, manual data repair); resolution time past the threshold; a monitoring failure (a human noticed before an alert did); any security incident. Anyone may request one for a near-miss. Write it within a few working days, while evidence is fresh.

## Postmortem method (blameless)

- **Blameless:** systems and processes fail, not people. Write "the deploy checklist had no config validation", never "X forgot to check the config". If an answer is "human error", ask why the system allowed it.
- **Evidence only:** every time, number and cause comes from logs, alerts, chat, deploy history. Unknowns are written as open questions, never filled with plausible guesses.
- **Widen, then drill:** brainstorm candidate causes by category (fishbone), mark each **confirmed / suspected / ruled out**, then run "5 whys" only on the confirmed branches until each lands on a fixable system or process gap. Include the detection branch when detection was slow.
- **Separate** the **trigger** (what set it off), the **root causes** (deepest fixable gaps — there may be more than one) and **contributing factors** (what made it worse).
- **Typed actions:** every root cause and factor gets at least one action typed **Detect** (alert sooner), **Mitigate** (recover faster or reduce impact) or **Prevent** (stop it happening). Each has one named owner, a tracker key and a due date. "Improve monitoring" is not an action; "alert on checkout 5xx rate above 2% for 5 minutes, routed to on-call" is.

| Fishbone category | Prompts |
|-------------------|---------|
| Code & change | Recent deploy, migration, flag, dependency bump, missing rollback path |
| Infrastructure | Capacity, quotas, networking, host health |
| Configuration & data | Config drift, expired certificate or secret, data volume or shape |
| Monitoring & detection | Missing metric, wrong threshold or routing, noisy alerts |
| Process & tooling | Review or test gap, checklist, runbook, handoff, escalation |
| Dependencies | Upstream or downstream service, provider outage, traffic spike |

## Postmortem skeleton (implementation repository `docs/postmortems/YYYY-MM-DD-<slug>.md`)

```markdown
# Postmortem: {{TITLE}}

| Date | Status | Severity | Incident lead | Authors |
|------|--------|----------|---------------|---------|
| YYYY-MM-DD | Draft / In review / Final | {{SEV}} | {{ROLE}} | {{ROLES}} |

## Summary
Two or three sentences: what broke, for whom, how long, how it was fixed.

## Impact
Affected services · user-facing effect · users affected · data loss (none / scope) · SLO budget used.

## Timeline (UTC)
| Time | Event | Evidence |
|------|-------|----------|

Time to detect (start → detection) and time to mitigate (detection → mitigation) stated separately.

## Trigger · Root causes · Contributing factors

## Analysis
Fishbone table (category · cause · confirmed/suspected/ruled out · evidence), then one 5-whys chain per confirmed branch.

## Action items
| # | Action | Type (Detect / Mitigate / Prevent) | Owner | Tracker | Due |
|---|--------|------------------------------------|-------|---------|-----|

## Lessons
What went well · what went wrong · where we got lucky.

## Open questions
```

## After the postmortem

- Actions go into the tracker the same day; the postmortem links them and is marked Final only when each has an owner.
- The **generic** lesson (no product names) goes upstream to [`06-LESSONS.md`](../06-LESSONS.md) through the kit contribution path; product-specific detail stays in the product repository.
- If a runbook step was missing, add it to product `docs/DEPLOYMENT.md` § Rollback and Recovery in the same change.

## Anti-patterns

| Anti-pattern | Do instead |
|--------------|------------|
| Root-causing while users are down | Mitigate first (rollback, flag off), then analyse |
| Naming the person who pushed the change | Name the missing guard that let the change through |
| Only Prevent actions | Add Detect and Mitigate when detection or recovery was slow |
| Postmortem written from memory weeks later | Timeline during the incident; draft within days |
| Actions owned by "the team" | One named owner, a tracker key and a date |

## Sources (checked 2026-11-28)

- Google SRE book — [Postmortem Culture: Learning from Failure](https://sre.google/sre-book/postmortem-culture/) (blameless culture; postmortem triggers).
- Distilled from the MIT-licensed community collection [github/awesome-copilot](https://github.com/github/awesome-copilot) (`incident-postmortem` skill) — ideas only, original prose.
