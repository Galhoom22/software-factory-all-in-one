# Factory coverage atlas

**What this is:** the living inventory of what the Software Factory already covers — method docs, templates, workflows, judgment packs, CI rails, **and software-industry surfaces** (web, mobile, desktop, games, …) with honest ✅/⚠️/❌ and **%**. Agents use it **before** adding or “inventing” a practice the owner requests.

**What this is not:** a second constitution, a product backlog, or permission to skip quality. Presence ≠ Done for a product; this atlas only answers “does the **template/method** already have this?”

**Copies:** product repositories vendor this folder read-only (`scripts/seed.mjs`); improvements land through pull requests to the factory repository, and each product picks them up with `seed.mjs --update` from a fresh factory checkout. Forever-generic — no product names, people, tracker keys, or day-page URLs.

---

## How agents must use this atlas

This explains how to read and score the atlas; the full procedure for changing the factory is [`CONTRIBUTING.md`](../CONTRIBUTING.md) § Changing the factory.

When the owner says *add X to the factory / template / workflow* (any language):

0. **North star** — [`EXCELLENCE.md`](../EXCELLENCE.md): raise at least one excellence dimension without lowering another? If not, skip or refuse (Candor).
1. **Search this atlas first** (`README` scorecard + the matching domain file). For *can we build X kind of software?* or *what percent are we on mobile/desktop?* use [`07-software-surfaces.md`](07-software-surfaces.md). For *what % are we on Cursor/Codex/Trae/Antigravity?* use [`08-ai-agents.md`](08-ai-agents.md). Do not confuse industry/harness breadth with the **professionalism** scorecard for domains 01–06.
2. Report in one short block:
   - **Status:** ✅ present · ⚠️ thin / partial · ❌ missing
   - **Coverage %** from the row (or a revised % if you re-audited the files)
   - **Where:** path(s)
   - **Action:** skip · deepen/upgrade · add new (with quality bar)
3. **If ✅ and ≥ 85%:** do **not** duplicate. Say it exists; only deepen if the owner asked for more professionalism or a real gap vs current practice.
4. **If ⚠️ (40–84%):** upgrade the existing home first (method + template + prompt + lesson as needed) — do not create a parallel doc.
5. **If ❌ or &lt; 40%:** add the smallest complete practice (method and/or `templates/`), update this atlas in the **same** change, then land it upstream through a pull request.
6. Quality bar unchanged: forever-generic; must raise professionalism; lands upstream through a pull request.
7. **Candor:** if the owner’s ask would **lower** professionalism or weaken a working workflow, **do not implement it**. Say no, explain why, propose a better alternative or recommend skipping (SF-07). Propose upstream only changes that raise the bar.

Owner standing / product calendars stay out of this folder — link from product `docs/OWNER_STANDING.md` only.

---

## Scoring rubric (fixed)

| Mark | Meaning |
|------|---------|
| ✅ | Capability exists and is wired enough that a new product can follow it without inventing a second system |
| ⚠️ | Mentioned or skeleton exists, but depth, prompts, CI, or day-loop wiring is incomplete |
| ❌ | Not in the factory (may still live only in one product’s docs — do not count that as template coverage) |

| % band | Meaning |
|--------|---------|
| **0** | Absent |
| **1–39** | Name-drop or one sentence only |
| **40–69** | Usable skeleton / partial method; gaps force improvisation |
| **70–84** | End-to-end usable; missing polish, edge lessons, or one harness |
| **85–94** | Battle-tested for studio products; lessons + prompts + CI/day loop where relevant |
| **95–100** | Fully specified; upgrades are edge cases only |

**How to re-score after a change:** bump or drop the row’s % in the domain file **and** refresh the scorecard below in the same edit, and add a line to [`CHANGELOG.md`](../CHANGELOG.md).

---

## Scorecard (rollup)

Last full audit: **2026-11-23**. Domain files hold the line-by-line detail.

| Domain file | Focus | Rows (approx.) | Domain avg % | Mark |
|-------------|-------|----------------|--------------|------|
| [`01-method-docs.md`](01-method-docs.md) | Numbered method `00`–`09` + judgment pack | 20 | **91%** | ✅ |
| [`02-templates-docs.md`](02-templates-docs.md) | Planning `templates/docs/**` + requirements skeleton | 35 | **88%** | ✅ |
| [`03-agents-ci-tooling.md`](03-agents-ci-tooling.md) | Agents, harnesses, scripts, GitHub, impl CI/CD YAML | 28 | **87%** | ✅ |
| [`04-workflows.md`](04-workflows.md) | Operating workflows (activation, day loop, sync, closeout…) | 22 | **90%** | ✅ |
| [`05-gaps-and-upgrades.md`](05-gaps-and-upgrades.md) | Honest weak spots + upgrade backlog | — | — | ⚠️ |
| [`06-technologies.md`](06-technologies.md) | Per-stack packs under `technologies/` | ~28 | **89%** | ✅ |
| [`07-software-surfaces.md`](07-software-surfaces.md) | Industry surfaces (web/mobile/desktop/games/…) + language map | 21 | **~27%** breadth | ⚠️ |
| [`08-ai-agents.md`](08-ai-agents.md) | AI agent / IDE harnesses (Cursor, Codex, Claude, Gemini, CN tools, …) | ~20 | **~58%** breadth | ⚠️ |

### Overall factory professionalism

| Metric | Value |
|--------|-------|
| **Weighted overall coverage** (domains 01–06 craft homes) | **~89%** |
| **Industry-surface breadth** ([`07`](07-software-surfaces.md), equal-weight surfaces) | **~27%** |
| **AI-agent harness breadth** ([`08`](08-ai-agents.md), equal-weight harnesses) | **~58%** |
| **Studio-default harness strength** (Cursor + Codex + Claude Code) | **~92%** |
| **Studio-default strength** (web app + HTTP API + admin web) | **~83%** |
| **Strongest areas** | Actor-loop delivery, implementation day pipeline, CI/CD progressive phases, agent discovery, requirements activation, lessons capture, web/API stack packs |
| **Weakest areas** | Mobile native/cross-platform, games, extensions, OS/embedded, full `project-ui` scaffold in templates, observability method depth |
| **Atlas itself** | ✅ **100%** present (this folder) — keep it honest when practices change |
| **Two numbers rule** | Never quote ~89% when the owner asked about *mobile/desktop/games coverage* — use [`07`](07-software-surfaces.md) |

---

## Quick lookup (common owner asks)

| Owner ask (examples) | Atlas home | Typical status |
|----------------------|------------|----------------|
| Day run-through / closeout / Pareto | `04-workflows` + `08-IMPLEMENTATION-DAY` | ✅ ~97% |
| Human code review (senior bar) | `07-judgment/human-code-review` + `08` + CodeRabbit | ✅ ~92% |
| Context7 / current library docs | `07-judgment/context7-docs` + `08` + technologies | ✅ ~93% |
| Verification engineering | `07-judgment/verification-engineering` + `08` + FEATURE | ✅ ~94% |
| Integration engineering | `07-judgment/integration-engineering` + `08` + FEATURE | ✅ ~93% |
| AI engineering (det/prob) | `07-judgment/ai-engineering` + `08` + FEATURE + `docs/AI.md` | ✅ ~92% |
| Agent delegation | `07-judgment/delegation` + `08` + FEATURE | ✅ ~91% |
| C# language pack | `technologies/csharp` + `csharp-14` | ✅ ~88% |
| .NET platform pack | `technologies/dotnet` + `dotnet-10` | ✅ ~88% |
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
| Owner-names-stack pack freshness | `technologies/README` (SF-05) | ✅ ~90% |
| Packages over reinvention | `07-judgment/packages` (SF-06) | ✅ ~90% |
| SEO + GEO dual opt (public pages) | `07-judgment/seo-geo` + SEO templates + `08` (SF-10) | ✅ ~88% |
| Candor / refuse degrading asks | OWNER_STANDING + coverage protocol + `08` (SF-07) | ✅ ~90% |
| Compliance / ethics / risk | `07-judgment/compliance-ethics-risk` + COMPLIANCE template + `08` (SF-07) | ✅ ~88% |
| Booking / reservations | `07-judgment/booking` + `08` (SF-10) | ✅ ~88% |
| Excellence north star / ratchet | `EXCELLENCE.md` + this atlas (SF-11) | ✅ ~94% |
| Factory purpose / speed×quality single reference | `EXCELLENCE.md` § Why + `README` + `00-USAGE` (SF-11) | ✅ ~95% |
| Studio as a company / org seats | `07-judgment/studio-company` + `STUDIO_ORG` template (SF-12) | ✅ ~90% |
| Competitor recon / clean-room | `07-judgment/competitor-recon` + template (SF-13) | ✅ ~88% |
| Software Factory + multi-agent | `07-judgment/software-factory` + `STUDIO_ORG` + `08` (SF-12) | ✅ ~93% |
| Proportional day pipeline | `08` § Proportional + `09` phases + FEATURE profiles (SF-08) | ✅ ~90% |
| Context window / memory pointers | `07-judgment/context-window` + `08` + handoffs (SF-09) | ✅ ~90% |
| TALL / VILT compositions map | `technologies/php-laravel-compositions` | ✅ ~90% |
| Requirements activation | `00-USAGE` + entry scripts + CI | ✅ ~95% |
| Upstream contributions (vendored copy read-only) | `04-workflows` + `CONTRIBUTING.md` | ✅ ~93% |
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
| Next.js tech pack | `technologies/nextjs` | ✅ ~92% |
| Full Next.js prototype app in templates | `02` / `05-gaps` | ⚠️ ~35% (docs + anti-slop only; copy from a finished product) |
| Always-Current / factory freshness | `07-judgment/playbook-freshness` + CI script | ✅ ~95% |
| AI agent harness % (Cursor/Codex/Claude/Trae/…) | `08-ai-agents` + `agents/` | ⚠️ breadth ~58%; studio-default ~92% |
| Software industry % (web/mobile/desktop/games/…) | `07-software-surfaces` | ⚠️ breadth ~27%; web+API ~83% |
| Mobile iOS / Android / cross-platform readiness | `07-software-surfaces` | ❌ ~8–12% |
| Desktop / Electron / extensions / games | `07-software-surfaces` | ❌/~⚠️ ~3–18% |
| Which language maps to which surface | `07-software-surfaces` § Languages | living map |
| Notion daily task page template | `05-gaps` | ❌ 0% in factory (product standing by design) |

---

## File map

```text
software-factory-all-in-one/coverage/
  README.md                 ← you are here (rubric + scorecard + agent protocol)
  01-method-docs.md         ← 00–09 + 07-judgment
  02-templates-docs.md      ← templates/docs, requirements, project-ui docs
  03-agents-ci-tooling.md   ← agents, cursor, codex, .github, scripts, impl Actions
  04-workflows.md           ← how work runs day-to-day
  05-gaps-and-upgrades.md   ← weak spots + what to deepen next
  06-technologies.md        ← technologies/ packs
  07-software-surfaces.md   ← industry surfaces + language↔surface map
  08-ai-agents.md           ← AI agent / IDE harnesses + %
```

---

## Changelog

Atlas re-scores and every other kit change are recorded in [`CHANGELOG.md`](../CHANGELOG.md).
