# Playbook coverage atlas

**What this is:** the living inventory of what the Engineering Playbook already covers — method docs, templates, workflows, judgment packs, and CI rails. Agents use it **before** adding or “inventing” a practice the owner requests.

**What this is not:** a second constitution, a product backlog, or permission to skip quality. Presence ≠ Done for a product; this atlas only answers “does the **template/method** already have this?”

**Mirrors:** keep this folder identical in the local product `playbook/` copy **and** the studio GitHub playbook mirror (same-session sync). Forever-generic — no product names, people, tracker keys, or day-page URLs.

---

## How agents must use this atlas

When the owner says *add X to the playbook / template / workflow* (any language):

0. **North star** — [`EXCELLENCE.md`](../EXCELLENCE.md): raise at least one excellence dimension without lowering another? If not, skip or refuse (Candor).
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
7. **Candor:** if the owner’s ask would **lower** professionalism or weaken a working workflow, **do not implement it**. Say no, explain why, propose a better alternative or recommend skipping (D-82). Dual-sync only changes that raise the bar.

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
| [`06-technologies.md`](06-technologies.md) | Per-stack packs under `technologies/` | ~28 | **89%** | ✅ |

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
| Day run-through / closeout / Pareto | `04-workflows` + `08-IMPLEMENTATION-DAY` | ✅ ~97% |
| Human code review (senior bar) | `07-judgment/human-code-review` + `08` + CodeRabbit | ✅ ~92% |
| Context7 / current library docs | `07-judgment/context7-docs` + `08` + technologies | ✅ ~93% |
| Verification engineering | `07-judgment/verification-engineering` + `08` + FEATURE | ✅ ~94% |
| CI / CD / Forge phases | `04-workflows` + `09-CI-CD` + impl GA templates | ✅ ~92% |
| Feature files / Done vs Released | `01-method` + `04-FEATURE_SDLC` | ✅ ~93% |
| DSA / Big-O on hot paths | `07-judgment/dsa-performance` + day pipeline | ✅ ~90% |
| Payments / webhooks | `07-judgment/payments` + SECURITY/COMPLIANCE templates | ✅ ~88% |
| Playwright E2E | `07-judgment/playwright-e2e` + FE TESTING + CI | ✅ ~88% |
| Design patterns | `07-judgment/design-patterns` | ✅ ~85% |
| AI system design / golden set | `07-judgment/ai-system-design` + `docs/AI.md` | ✅ ~88% |
| Enterprise system design (boundaries) | `07-judgment/enterprise-system-design` + day high-stakes | ✅ ~90% |
| API readiness (all environments) | `07-judgment/api-readiness` + day/`09` | ✅ ~90% |
| API design (consumer-first REST) | `07-judgment/api-design` + contract template + gate 7 | ✅ ~90% |
| Cross-surface compatibility (FE↔BE↔services) | `07-judgment/cross-surface-compatibility` + `08` + `SIBLING` | ✅ ~90% |
| ADR / architecture decisions | `07-judgment/sad-adr` + `DECISIONS` template | ✅ ~90% |
| Requirements-driven stack selection | `07-judgment/stack-selection` + `00-USAGE` + `technologies/` | ✅ ~90% |
| Owner-names-stack pack freshness | `technologies/README` (D-79) | ✅ ~90% |
| Packages over reinvention | `07-judgment/packages` (D-80) | ✅ ~90% |
| SEO + GEO dual opt (public pages) | `07-judgment/seo-geo` + SEO templates + `08` (D-81) | ✅ ~88% |
| Candor / refuse degrading asks | OWNER_STANDING + coverage protocol + `08` (D-82) | ✅ ~90% |
| Compliance / ethics / risk | `07-judgment/compliance-ethics-risk` + COMPLIANCE template + `08` (D-83) | ✅ ~88% |
| Booking / reservations | `07-judgment/booking` + `08` (D-84) | ✅ ~88% |
| Excellence north star / ratchet | `EXCELLENCE.md` + this atlas (D-87) | ✅ ~94% |
| Playbook purpose / speed×quality single reference | `EXCELLENCE.md` § Why + `README` + `00-USAGE` (D-93) | ✅ ~95% |
| Studio as a company / org seats | `07-judgment/studio-company` + `STUDIO_ORG` template (D-88) | ✅ ~90% |
| Competitor recon / clean-room | `07-judgment/competitor-recon` + template (D-89) | ✅ ~88% |
| Software Factory + multi-agent | `07-judgment/software-factory` + `STUDIO_ORG` + `08` (D-90) | ✅ ~90% |
| Proportional day pipeline | `08` § Proportional + `09` phases + FEATURE profiles (D-85) | ✅ ~90% |
| Context window / memory pointers | `07-judgment/context-window` + `08` + handoffs (D-86) | ✅ ~90% |
| TALL / VILT compositions map | `technologies/php-laravel-compositions` | ✅ ~90% |
| Requirements activation | `00-USAGE` + entry scripts + CI | ✅ ~95% |
| Playbook dual sync (local↔GitHub) | `04-workflows` (product script outside templates) | ✅ ~93% |
| PHP 8.6 tech pack | `technologies/php` | ✅ ~85% |
| Laravel 13 tech pack | `technologies/laravel` | ✅ ~88% |
| Tailwind CSS v4 tech pack | `technologies/tailwindcss` | ✅ ~88% |
| Alpine.js 3 tech pack | `technologies/alpinejs` | ✅ ~88% |
| Livewire 4 tech pack | `technologies/livewire` | ✅ ~88% |
| Filament 5 tech pack | `technologies/filament` | ✅ ~88% |
| JavaScript / ES2026 tech pack | `technologies/javascript` | ✅ ~88% |
| HTML Living Standard tech pack | `technologies/html` | ✅ ~88% |
| CSS Snapshot 2026 tech pack | `technologies/css` | ✅ ~88% |
| Inertia.js 3 tech pack | `technologies/inertiajs` | ✅ ~88% |
| Vue 3 tech pack | `technologies/vue` | ✅ ~88% |
| Symfony 8 tech pack | `technologies/symfony` | ✅ ~88% |
| Next.js tech pack | `technologies/nextjs` | ❌ 0% |
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
| 2026-11-21 | D-90: Software Factory + multi-agent line paired with studio seats.
| 2026-11-23 | D-100: Next.js 16 technologies pack from nextjs.org/docs; npm 16.4.x. |
| 2026-11-23 | D-99: React 19 technologies pack from react.dev; npm 19.3.x. |
| 2026-11-23 | D-98: verification engineering judgment (criteria→evidence; author≠judge) in day workflow. |
| 2026-11-23 | D-97: Context7 / current-docs day gate (pinned-line freshness; day evidence). |
| 2026-11-23 | D-96: human code-review bar (readability, modern syntax, best practices) in day workflow; CodeRabbit assists. |
| 2026-11-23 | D-95: Pareto 20% file-anchored (paths, structure, connections) for ChatGPT code-reading growth. |
| 2026-11-23 | D-94: enterprise system-design judgment (six questions, practice levels, verification-dominant) absorbed; course tree not vendored. |
| 2026-11-23 | D-93: playbook purpose explicit — single reference for agent speed×quality (vibe + professional products). |
| 2026-11-23 | D-92: API design judgment (consumer-first REST craft) absorbed from course; design bar in API readiness gate. |
| 2026-11-23 | D-91: cross-surface compatibility day gate (sibling read / owned-seat write; monorepo+split+services). |
| 2026-11-21 | D-89: competitor recon / clean-room parity (replica-skill judgment).
| 2026-11-21 | D-88: studio-as-company (Paperclip judgment) + STUDIO_ORG + optional CLI.
| 2026-11-21 | D-87: EXCELLENCE.md north star + ratchet for every future playbook upgrade.
| 2026-11-21 | D-86: context-window hygiene (memory pointers, handoff, mid-day checkpoint ≠ owner go). |
| 2026-11-21 | D-85: proportional day pipeline (flexible rigor; always-on core). |
| 2026-11-21 | D-84: booking/reservations judgment + day gate. |
| 2026-11-21 | D-83: compliance/ethics/risk judgment + candor safer-scenario; day check. |
| 2026-11-21 | D-82 candor: refuse/advise when an add would lower professionalism. |
| 2026-11-21 | D-81: SEO + GEO judgment + templates + day gate; dual sync. |
|------------|--------|
| 2026-11-21 | Symfony 8 pack (D-77) from symfony.com/doc. |
| 2026-11-21 | Vue 3 pack (D-76) from vuejs.org/guide/introduction. |
| 2026-11-21 | Inertia.js 3 pack (D-75) from inertiajs.com/docs/v3/getting-started. |
| 2026-11-21 | CSS Snapshot 2026 pack (D-74) from MDN Web/CSS. |
| 2026-11-21 | HTML Living Standard pack (D-73) from MDN Web/HTML. |
| 2026-11-21 | JavaScript / ES2026 pack (D-72) from MDN Web/JavaScript. |
| 2026-11-21 | Laravel 13 pack (D-67). |
| 2026-11-21 | Technologies library + PHP 8.6 pack (D-65). |
| 2026-11-21 | API readiness gate absorbed (D-64); workflows ~91%. |
| 2026-11-21 | Created coverage atlas; first full inventory + scoring; wired into playbook README / prompts / lessons / OWNER_STANDING template. |
