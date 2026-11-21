# Playbook coverage atlas

**What this is:** the living inventory of what the Engineering Playbook already covers — method docs, templates, workflows, judgment packs, and CI rails. Agents use it **before** adding or “inventing” a practice the owner requests.

**What this is not:** a second constitution, a product backlog, or permission to skip quality. Presence ≠ Done for a product; this atlas only answers “does the **template/method** already have this?”

**Mirrors:** keep this folder identical in the local product `playbook/` copy **and** the studio GitHub playbook mirror (same-session sync). Forever-generic — no product names, people, tracker keys, or day-page URLs.

---

## How agents must use this atlas

When the owner says *add X to the playbook / template / workflow* (any language):

1. **Search this atlas first** (`README` scorecard + the matching domain file).
2. Report in one short block:
   - **Status:** ✅ present · ⚠️ thin / partial · ❌ missing
   - **Coverage %** from the row (or a revised % if you re-audited the files)
   - **Where:** path(s)
   - **Action:** skip · deepen/upgrade · add new (with quality bar)
3. **If ✅ and ≥ 85%:** do **not** duplicate. Say it exists; only deepen if the owner asked for more professionalism or a real gap vs current practice.
4. **If ⚠️ (40–84%):** upgrade the existing home first (method + template + prompt + lesson as needed) — do not create a parallel doc.
5. **If ❌ or &lt; 40%:** add the smallest complete practice (method and/or `templates/`), update this atlas in the **same** change, then sync the studio mirror.
6. Quality bar unchanged: forever-generic; must raise professionalism; dual local + GitHub sync.

Owner standing / product calendars stay out of this folder — link from product `docs/OWNER_STANDING.md` only.

---

## Scoring rubric (fixed)

| Mark | Meaning |
|------|---------|
| ✅ | Capability exists and is wired enough that a new product can follow it without inventing a second system |
| ⚠️ | Mentioned or skeleton exists, but depth, prompts, CI, or day-loop wiring is incomplete |
| ❌ | Not in the playbook (may still live only in one product’s docs — do not count that as template coverage) |

| % band | Meaning |
|--------|---------|
| **0** | Absent |
| **1–39** | Name-drop or one sentence only |
| **40–69** | Usable skeleton / partial method; gaps force improvisation |
| **70–84** | End-to-end usable; missing polish, edge lessons, or one harness |
| **85–94** | Battle-tested for studio products; lessons + prompts + CI/day loop where relevant |
| **95–100** | Fully specified; upgrades are edge cases only |

**How to re-score after a change:** bump or drop the row’s % in the domain file **and** refresh the scorecard below in the same edit. Date the changelog at the bottom of this README.

---

## Scorecard (rollup)

Last full audit: **2026-11-21**. Domain files hold the line-by-line detail.

| Domain file | Focus | Rows (approx.) | Domain avg % | Mark |
|-------------|-------|----------------|--------------|------|
| [`01-method-docs.md`](01-method-docs.md) | Numbered method `00`–`09` + judgment pack | 20 | **91%** | ✅ |
| [`02-templates-docs.md`](02-templates-docs.md) | Planning `templates/docs/**` + requirements skeleton | 35 | **88%** | ✅ |
| [`03-agents-ci-tooling.md`](03-agents-ci-tooling.md) | Agents, harnesses, scripts, GitHub, impl CI/CD YAML | 28 | **87%** | ✅ |
| [`04-workflows.md`](04-workflows.md) | Operating workflows (activation, day loop, sync, closeout…) | 22 | **90%** | ✅ |
| [`05-gaps-and-upgrades.md`](05-gaps-and-upgrades.md) | Honest weak spots + upgrade backlog | — | — | ⚠️ |

### Overall playbook professionalism

| Metric | Value |
|--------|-------|
| **Weighted overall coverage** | **~89%** |
| **Strongest areas** | Actor-loop delivery, implementation day pipeline, CI/CD progressive phases, agent discovery, requirements activation, lessons capture |
| **Weakest areas** | Full `project-ui` code scaffold in templates, Notion day-page skeleton (intentionally product-side), Spec Kit files in planning templates (judgment-only by design), observability method depth in templates |
| **Atlas itself** | ✅ **100%** present (this folder) — keep it honest when practices change |

---

## Quick lookup (common owner asks)

| Owner ask (examples) | Atlas home | Typical status |
|----------------------|------------|----------------|
| Day run-through / closeout / Pareto | `04-workflows` + `08-IMPLEMENTATION-DAY` | ✅ ~95% |
| CI / CD / Forge phases | `04-workflows` + `09-CI-CD` + impl GA templates | ✅ ~92% |
| Feature files / Done vs Released | `01-method` + `04-FEATURE_SDLC` | ✅ ~93% |
| DSA / Big-O on hot paths | `07-judgment/dsa-performance` + day pipeline | ✅ ~90% |
| Payments / webhooks | `07-judgment/payments` + SECURITY/COMPLIANCE templates | ✅ ~88% |
| Playwright E2E | `07-judgment/playwright-e2e` + FE TESTING + CI | ✅ ~88% |
| Design patterns | `07-judgment/design-patterns` | ✅ ~85% |
| AI system design / golden set | `07-judgment/ai-system-design` + `docs/AI.md` | ✅ ~86% |
| ADR / architecture decisions | `07-judgment/sad-adr` + `DECISIONS` template | ✅ ~90% |
| Requirements activation | `00-USAGE` + entry scripts + CI | ✅ ~95% |
| Playbook dual sync (local↔GitHub) | `04-workflows` (product script outside templates) | ✅ ~93% |
| Full Next.js prototype app in templates | `02` / `05-gaps` | ⚠️ ~35% (docs + anti-slop only; copy from a finished product) |
| Notion daily task page template | `05-gaps` | ❌ 0% in playbook (product standing by design) |

---

## File map

```text
playbook/coverage/
  README.md                 ← you are here (rubric + scorecard + agent protocol)
  01-method-docs.md         ← 00–09 + 07-judgment
  02-templates-docs.md      ← templates/docs, requirements, project-ui docs
  03-agents-ci-tooling.md   ← agents, cursor, codex, .github, scripts, impl Actions
  04-workflows.md           ← how work runs day-to-day
  05-gaps-and-upgrades.md   ← weak spots + what to deepen next
```

---

## Changelog

| Date (UTC) | Change |
|------------|--------|
| 2026-11-21 | Created coverage atlas; first full inventory + scoring; wired into playbook README / prompts / lessons / OWNER_STANDING template. |
