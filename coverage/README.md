README.md [210L]
# Playbook coverage atlas
**What this is:** the living inventory of what the Engineering Playbook already covers — method docs, templates, workflows, judgment packs, CI rails, **and software-industry surfaces** (web, mobile, desktop, games, …) with honest ✅/⚠️/❌ and **%**. Agents use it **before** adding or “inventing” a practice the owner requests.
... [lean-ctx: omitted 1 lines]
**Mirrors:** keep this folder identical in the local product `software-factory-all-in-one/` copy **and** the public Software Factory GitHub mirror (same-session sync). Forever-generic — no product names, people, tracker keys, or day-page URLs.
... [lean-ctx: omitted 1 lines]
## How agents must use this atlas
When the owner says *add X to the playbook / template / workflow* (any language):
0. **North star** — [`EXCELLENCE.md`](../EXCELLENCE.md): raise at least one excellence dimension without lowering another? If not, skip or refuse (Candor).
1. **Search this atlas first** (`README` scorecard + the matching domain file). For *can we build X kind of software?* or *what percent are we on mobile/desktop?* use [`07-software-surfaces.md`](07-software-surfaces.md). For *what % are we on Cursor/Codex/Trae/Antigravity?* use [`08-ai-agents.md`](08-ai-agents.md). Do not confuse industry/harness breadth with the **professionalism** scorecard for domains 01–06.
... [lean-ctx: omitted 7 lines]
5. **If ❌ or &lt; 40%:** add the smallest complete practice (method and/or `templates/`), update this atlas in the **same** change, then sync the studio mirror.
... [lean-ctx: omitted 1 lines]
7. **Candor:** if the owner’s ask would **lower** professionalism or weaken a working workflow, **do not implement it**. Say no, explain why, propose a better alternative or recommend skipping (D-82). Dual-sync only changes that raise the bar.
Owner standing / product calendars stay out of this folder — link from product `docs/OWNER_STANDING.md` only.
... [lean-ctx: omitted 1 lines]
## Scoring rubric (fixed)
| Mark | Meaning |
... [lean-ctx: omitted 1 lines]
| ✅ | Capability exists and is wired enough that a new product can follow it without inventing a second system |
| ⚠️ | Mentioned or skeleton exists, but depth, prompts, CI, or day-loop wiring is incomplete |
... [lean-ctx: omitted 4 lines]
| **1–39** | Name-drop or one sentence only |
... [lean-ctx: omitted 2 lines]
| **85–94** | Battle-tested for studio products; lessons + prompts + CI/day loop where relevant |
| **95–100** | Fully specified; upgrades are edge cases only |
**How to re-score after a change:** bump or drop the row’s % in the domain file **and** refresh the scorecard below in the same edit. Date the changelog at the bottom of this README.
... [lean-ctx: omitted 1 lines]
## Scorecard (rollup)
Last full audit: **2026-11-23**. Domain files hold the line-by-line detail.
... [lean-ctx: omitted 3 lines]
| [`02-templates-docs.md`](02-templates-docs.md) | Planning `templates/docs/**` + requirements skeleton | 35 | **88%** | ✅ |
... [lean-ctx: omitted 1 lines]
| [`04-workflows.md`](04-workflows.md) | Operating workflows (activation, day loop, sync, closeout…) | 22 | **90%** | ✅ |
... [lean-ctx: omitted 1 lines]
| [`06-technologies.md`](06-technologies.md) | Per-stack packs under `technologies/` | ~28 | **89%** | ✅ |
| [`07-software-surfaces.md`](07-software-surfaces.md) | Industry surfaces (web/mobile/desktop/games/…) + language map | 21 | **~27%** breadth | ⚠️ |
... [lean-ctx: omitted 1 lines]
### Overall playbook professionalism
| Metric | Value |
... [lean-ctx: omitted 2 lines]
| **Industry-surface breadth** ([`07`](07-software-surfaces.md), equal-weight surfaces) | **~27%** |
| **AI-agent harness breadth** ([`08`](08-ai-agents.md), equal-weight harnesses) | **~58%** |
... [lean-ctx: omitted 2 lines]
| **Strongest areas** | Actor-loop delivery, implementation day pipeline, CI/CD progressive phases, agent discovery, requirements activation, lessons capture, web/API stack packs |
| **Weakest areas** | Mobile native/cross-platform, games, extensions, OS/embedded, full `project-ui` scaffold in templates, observability method depth |
... [lean-ctx: omitted 1 lines]
| **Two numbers rule** | Never quote ~89% when the owner asked about *mobile/desktop/games coverage* — use [`07`](07-software-surfaces.md) |
... [lean-ctx: omitted 1 lines]
## Quick lookup (common owner asks)
| Owner ask (examples) | Atlas home | Typical status |
... [lean-ctx: omitted 1 lines]
| Day run-through / closeout / Pareto | `04-workflows` + `08-IMPLEMENTATION-DAY` | ✅ ~97% |
... [lean-ctx: omitted 4 lines]
| AI engineering (det/prob) | `07-judgment/ai-engineering` + `08` + FEATURE + `docs/AI.md` | ✅ ~92% |
... [lean-ctx: omitted 6 lines]
| Payments / webhooks | `07-judgment/payments` + SECURITY/COMPLIANCE templates | ✅ ~88% |
... [lean-ctx: omitted 3 lines]
| Enterprise system design (boundaries) | `07-judgment/enterprise-system-design` + day high-stakes | ✅ ~90% |
| API readiness (all environments) | `07-judgment/api-readiness` + day/`09` | ✅ ~90% |
| API design (consumer-first REST) | `07-judgment/api-design` + contract template + gate 7 | ✅ ~90% |
| Cross-surface compatibility (FE↔BE↔services) | `07-judgment/cross-surface-compatibility` + `08` + `SIBLING` | ✅ ~90% |
| ADR / architecture decisions | `07-judgment/sad-adr` + `DECISIONS` template | ✅ ~90% |
| Requirements-driven stack selection | `07-judgment/stack-selection` + `00-USAGE` + `technologies/` | ✅ ~90% |
| Owner-names-stack pack freshness | `technologies/README` (D-79) | ✅ ~90% |
| Packages over reinvention | `07-judgment/packages` (D-80) | ✅ ~90% |
... [lean-ctx: omitted 1 lines]
| Candor / refuse degrading asks | OWNER_STANDING + coverage protocol + `08` (D-82) | ✅ ~90% |
| Compliance / ethics / risk | `07-judgment/compliance-ethics-risk` + COMPLIANCE template + `08` (D-83) | ✅ ~88% |
... [lean-ctx: omitted 2 lines]
| Playbook purpose / speed×quality single reference | `EXCELLENCE.md` § Why + `README` + `00-USAGE` (D-93) | ✅ ~95% |
| Studio as a company / org seats | `07-judgment/studio-company` + `STUDIO_ORG` template (D-88) | ✅ ~90% |
| Competitor recon / clean-room | `07-judgment/competitor-recon` + template (D-89) | ✅ ~88% |
| Software Factory + multi-agent | `07-judgment/software-factory` + `STUDIO_ORG` + `08` (D-90) | ✅ ~93% |
| Proportional day pipeline | `08` § Proportional + `09` phases + FEATURE profiles (D-85) | ✅ ~90% |
| Context window / memory pointers | `07-judgment/context-window` + `08` + handoffs (D-86) | ✅ ~90% |
... [lean-ctx: omitted 16 lines]
| Full Next.js prototype app in templates | `02` / `05-gaps` | ⚠️ ~35% (docs + anti-slop only; copy from a finished product) |
| Always-Current / playbook freshness | `07-judgment/playbook-freshness` + CI script | ✅ ~95% |
| AI agent harness % (Cursor/Codex/Claude/Trae/…) | `08-ai-agents` + `agents/` | ⚠️ breadth ~58%; studio-default ~92% |
... [lean-ctx: omitted 6 lines]
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
... [lean-ctx: omitted 1 lines]
## Changelog

| 2026-11-25 | Factory.com Software Factory absorb (routing, outcome metrics, trust/control) into `07-judgment/software-factory.md`; coverage ~93%. |
| Date (UTC) | Change |
... [lean-ctx: omitted 1 lines]
| 2026-11-23 | D-109: AI agent harness atlas (`08-ai-agents`) + `agents/` packs (US + China + Antigravity). |
| 2026-11-23 | D-108: Always-Current playbook freshness closeout + `check-playbook-freshness.mjs` CI gate. |
... [lean-ctx: omitted 1 lines]
| 2026-11-23 | D-106: software industry surfaces atlas (`07-software-surfaces`) — % per surface + language map; two-numbers rule vs 01–06 professionalism. |
... [lean-ctx: omitted 1 lines]
| 2026-11-23 | D-101: integration engineering judgment (any partner boundary) in day workflow. |
| 2026-11-23 | D-102: AI engineering judgment (det/prob seam, evals, admission) in day workflow. |
... [lean-ctx: omitted 5 lines]
| 2026-11-23 | D-98: verification engineering judgment (criteria→evidence; author≠judge) in day workflow. |
| 2026-11-23 | D-97: Context7 / current-docs day gate (pinned-line freshness; day evidence). |
| 2026-11-23 | D-96: human code-review bar (readability, modern syntax, best practices) in day workflow; CodeRabbit assists. |
| 2026-11-23 | D-95: Pareto 20% file-anchored (paths, structure, connections) for ChatGPT code-reading growth. |
| 2026-11-23 | D-94: enterprise system-design judgment (six questions, practice levels, verification-dominant) absorbed; course tree not vendored. |
| 2026-11-23 | D-93: playbook purpose explicit — single reference for agent speed×quality (vibe + professional products). |
... [lean-ctx: omitted 1 lines]
| 2026-11-23 | D-91: cross-surface compatibility day gate (sibling read / owned-seat write; monorepo+split+services). |
... [lean-ctx: omitted 1 lines]
| 2026-11-21 | D-88: studio-as-company (Paperclip judgment) + STUDIO_ORG + optional CLI.
... [lean-ctx: omitted 1 lines]
| 2026-11-21 | D-86: context-window hygiene (memory pointers, handoff, mid-day checkpoint ≠ owner go). |
| 2026-11-21 | D-85: proportional day pipeline (flexible rigor; always-on core). |
... [lean-ctx: omitted 15 lines]

