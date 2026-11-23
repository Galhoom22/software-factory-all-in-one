# Coverage — gaps, intentional exclusions, upgrade backlog


**North star:** upgrades exist to ratchet toward [`EXCELLENCE.md`](../EXCELLENCE.md) — prefer closing ⚠️ / low-% rows over inventing parallel domains. One prompt never finishes the dream.
Honest weak spots. **Intentional exclusions are not defects.** Upgrade only when professionalism rises for the *next* product.

Scoring of a gap uses the same rubric as [`README.md`](README.md): how covered the capability is **inside the playbook today**.

---

## Intentional exclusions (do not “fix” by dumping product stuff here)

| Topic | Playbook % | Why excluded | Where it lives instead |
|-------|------------|--------------|------------------------|
| Notion day-page / calendar URLs | **0** | Product- and calendar-specific | Product `docs/OWNER_STANDING.md` |
| Tracker project keys (`KAN-…`) | **0** | Product board | Product `docs/jira/**` + board rules |
| Full Spec Kit tree in planning | **0** | Second constitution forbidden | Impl repos; judgment in `07-judgment` |
| `docs/features/**` in planning | **0** | Evidence belongs with code | Impl `docs/features/` per `04-FEATURE_SDLC` |
| Runnable Next.js app under `templates/project-ui` | **35** | Templates stay light; copy from a finished planning product | Method `03-PROTOTYPE` + optional reference product |
| Host secrets / Forge tokens | **0** | Security | Host env + product DEPLOYMENT |

---

## Real thin spots (upgrade candidates)

Prioritize by **leverage × risk**. Re-score the matching atlas row when you deepen.

| Priority | Capability | Today % | Target % | Suggested upgrade (smallest complete) | Status |
|----------|------------|---------|----------|----------------------------------------|--------|
| P0 | **Coverage atlas itself** | was 0 | **100** | This folder + agent protocol + prompts/lessons | ✅ Done 2026-11-21 |
| P1 | **Software industry surfaces atlas** | was 0 | **living** | `07-software-surfaces.md` + language map + two-numbers rule | ✅ Done 2026-11-23 |
| P0 | **API readiness in day loop** | was ~55 | **88** | `07-judgment/api-readiness.md` + `08`/`09` + BE TESTING/DEPLOYMENT | ✅ Done 2026-11-21 |
| P0 | **Technologies library + PHP 8.6** | was 0 | **85** (PHP slice) | `technologies/` + php-8.6 pack from php.net | ✅ Done 2026-11-21 |
| P0 | **Tech pack quality bar + auto latest-docs** | was thin | **92** | `quality.md` + hard agent protocol (D-66) | ✅ Done 2026-11-21 |
| P0 | **Laravel 13 pack** | was 0 | **88** | `technologies/laravel/` from laravel.com/docs/13.x | ✅ Done 2026-11-21 |
| P2 | Next.js pack | **92** | **92** | `technologies/nextjs/` (D-100) | ✅ Done 2026-11-23 |
| P1 | Consult-before-add agent habit | was ~40 | **95** | Wire atlas into README, `05-PROMPTS`, `06-LESSONS`, OWNER_STANDING | ✅ Done 2026-11-21 |
| P1 | TypeScript pack | **0** | **85** | `technologies/typescript/` from typescriptlang.org | ❌ Open (raises web/RN/Electron/extensions) |
| P1 | Mobile surface (Swift **or** Kotlin **or** Flutter — product-driven) | **8–12** | **70** | Judgment + one pack when first mobile product starts | ❌ Open |
| P2 | Browser extension MV3 | **5** | **70** | Judgment + Chromium/Firefox pack | ❌ Open |
| P2 | Electron or Tauri pack | **15** | **70** | Hybrid desktop craft | ❌ Open |
| P2 | TestSprite rails depth | **78** | **88** | When a product ships TestSprite for real: fold lessons into templates + `06-LESSONS` | ⚠️ Open |
| P2 | Observability (Sentry-class) method in templates | **60** | **85** | Short shared `docs/` stub or DEPLOYMENT subsection: DSN empty in git, no PII, glance-after-deploy — keep host names out | ⚠️ Open |
| P3 | Studio repo-map practice in seed | **55** | **80** | Generic one-pager under method or templates: “when product repos change, update atlas diagrams” (no org URLs) | ⚠️ Open |
| P3 | Jira/tracker pack genericity | **82** | **90** | Keep CSV/generator scripts product-side; strengthen `templates/docs/jira` with “implementation-ready card body” checklist only | ⚠️ Open |
| P4 | Full prototype starter in templates | **35** | **70** | Optional: publish a *generic* `project-ui` minimal kit **without** product screens — only if copy-from-finished-product friction stays high | ❌ Deferred (Ponytail) |
| P4 | Auto % validator script | **20** | **50** | Only if humans/agents stop updating the atlas; until then manual is fine | ❌ Deferred |

---

## Workflow professionalism improvements landed with this atlas (2026-11-21)

| Change | Why it raises professionalism |
|--------|-------------------------------|
| `playbook/coverage/**` inventory + % | Agents stop duplicating practices; upgrades target thin spots |
| Agent protocol in coverage README | Owner asks become: check → report status/% → skip/deepen/add |
| Prompt in `05-PROMPTS.md` | Copy-paste path for “is this already in the template?” |
| Lesson in `06-LESSONS.md` | Next product inherits the habit |
| OWNER_STANDING template bullet | Seeded products get the consult-before-add rule |
| Playbook README link | Discoverable from the entry page |

---

## How to process an owner “add X” using gaps

1. Find X in domain files `01`–`04`.
2. If missing, check this file’s **intentional exclusions** — maybe it must stay product-side.
3. If it is a **real thin spot**, prefer upgrading the listed home over a new parallel file.
4. After the change: update the row %, this backlog status, and `coverage/README` scorecard date.
5. Sync studio playbook mirror same session.

---

## Snapshot — where professionalism is already high (do not rebuild)

These are **not** gaps; listed so agents do not reinvent them:

- Actor-loop / no MVP (`02`, `DELIVERY`) — **~98%**
- Implementation day closeout + progressive CI/CD (`08`, `09`) — **~95%**
- Requirements activation + CI entry gates (`00`, scripts) — **~95%**
- Multi-harness discovery with one `AGENTS` rulebook — **~93%**
- Feature SDLC evidence rules — **~93%**
- Automatic lesson capture + forever-generic dual sync — **~93%**
