# Coverage — operating workflows

Workflows are **how agents and owners run work**, not just file names. Each row cites the method home + template/standing mirrors.

---

## Planning bootstrap

| ✅ | Workflow | Homes | % | Covered behaviors |
|----|----------|-------|---|-------------------|
| ✅ | Requirements-driven activation | `00-USAGE`, `01-STEPS`, entry example, `check-planning-entry`, Cursor `requirements-activation.mdc` | **95** | Detect root entry file → plan without waiting; never overwrite entry; 80/20 |
| ✅ | Seed new planning repo from templates | `README`, `00-USAGE` | **92** | Copy templates including hidden files; fill placeholders |
| ✅ | Keep every document current | `AGENTS.template`, `01-STEPS` | **90** | Same-commit doc updates; no stale summaries |
| ✅ | Factory Always-Current closeout | `07-judgment/playbook-freshness`, `scripts/check-structure.mjs`, CI | **95** | Every factory edit: atlas/% + official Checked dates + structural CI + upstream pull request (SF-14) |
| ✅ | Small stages + Conventional Commits | `AGENTS.template` | **90** | One stage → check → commit (planning repo cadence) |
| ✅ | Planning CI gates | `09-CI-CD`, templates `.github/workflows/ci.yml` | **90** | Delivery/agents/scope/activation checks |

---

## Delivery philosophy

| ✅ | Workflow | Homes | % | Covered behaviors |
|----|----------|-------|---|-------------------|
| ✅ | Actor loop / no MVP mode | `02-DELIVERY`, templates `DELIVERY.md`, Cursor `delivery.mdc` | **98** | Production-complete current actor; deferred = sequencing only |
| ✅ | Prototype production fidelity | `03-PROTOTYPE`, `project-ui-design.mdc` | **90** | Millimetre-accurate for actor in focus; mock data only |
| ✅ | Contract-first FE↔BE | `API_CONTRACT` template, prompts | **90** | Change contract in planning before dual impl |

---

## Implementation day loop

| ✅ | Workflow | Homes | % | Covered behaviors |
|----|----------|-------|---|-------------------|
| ✅ | Day run-through (no mid-day waits) | `08-IMPLEMENTATION-DAY`, OWNER_STANDING template | **96** | Start cue → finish whole must-finish |
| ✅ | Proportional day depth | `08` § Proportional, `09` phases, FEATURE profiles | **90** | Scale rigor; never skip CI/red lines (SF-08) |
| ✅ | Local proof = CI checks | `08`, `09` | **94** | Same commands GitHub Actions will run |
| ✅ | Feature evidence same day | `04-FEATURE_SDLC`, `08` | **93** | Filled template ≠ Done; gates need results |
| ✅ | DSA check on hot paths | `07-judgment/dsa-performance`, `08` | **90** | Name `n`, class, structure, edges |
| ✅ | Cross-surface compatibility | `07-judgment/cross-surface-compatibility`, `08`, `SIBLING` template | **90** | Sibling read; owned-seat write; contract-first handoff |
| ✅ | API readiness across environments | `07-judgment/api-readiness`, `08`, `09`, BE TESTING/DEPLOYMENT | **90** | Contract + design bar + local + CI + phase smoke; FE-handoff honesty |
| ✅ | API design craft | `07-judgment/api-design`, contract template, `08` gate 7 | **90** | Consumer-first; HTTP semantics; docs=agreement |
| ✅ | API client import packs (Postman / Insomnia / Apidog) | `07-judgment/api-clients`, `templates/docs/api-clients/` | **88** | One inventory → OpenAPI + client folders; not a second SoT |
| ✅ | SEO + GEO on public-page days | `07-judgment/seo-geo`, `08`, SEO templates | **88** | Checklist + N/A for private-only days; no ranking vanity Done |
| ✅ | Candor on degrading asks | OWNER_STANDING + coverage + `08` (SF-07) | **90** | Refuse/advise; never propose bar-lowering changes upstream |
| ✅ | Enterprise system-design boundary review | `07-judgment/enterprise-system-design`, `08` high-stakes | **90** | Six questions + AI practice level on consequential days |
| ✅ | Compliance / ethics / risk day check | `07-judgment/compliance-ethics-risk`, `08`, COMPLIANCE | **88** | PII/money/AI/claims; safer scenario on refuse |
| ✅ | Booking / reservation gate | `07-judgment/booking`, `08`, payments when money | **88** | Recheck + idempotency + hold TTL; N/A if no booking |
| ✅ | Automatic closeout order | `08`, `09` | **96** | PR → CI green → AI PR reviewer if used → merge → verify → CD(phase) → tracker → day page |
| ✅ | Progressive CD (A/B/C) | `09-CI-CD`, impl Actions YAML | **94** | Auto-detect; honest skip; no fake deploys |
| ✅ | Human code-review bar | `07-judgment/human-code-review`, `08` closeout | **92** | Senior self-review: readability + modern syntax + best practices |
| ✅ | Context7 / current-docs gate | `07-judgment/context7-docs`, `08` always-on | **93** | This-session docs for pinned library/framework APIs |
| ✅ | Verification engineering gate | `07-judgment/verification-engineering`, `08` always-on | **94** | Criteria→evidence; builder ≠ sole judge |
| ✅ | Integration engineering gate | `07-judgment/integration-engineering`, `08` always-on | **93** | External partners: checklist or N/A |
| ✅ | AI engineering gate | `07-judgment/ai-engineering`, `08` always-on | **92** | AI paths: seam + eval + admission or N/A |
| ✅ | Agent delegation gate | `07-judgment/delegation`, `08` always-on | **91** | Separate implementer: brief + land or N/A |
| ✅ | Optional AI PR reviewer (CodeRabbit Free templates) | `08`, `CODERABBIT` templates | **92** | CLI/IDE gate; no paid trials unless asked; does not waive human bar |
| ✅ | Pareto 20% + handoff | `08`, prompts | **97** | Teachable depth **file-anchored** (paths/structure/connections) + operational handoff |
| ✅ | Context window hygiene | `07-judgment/context-window`, `08`, `05`, lessons | **90** | Pointers over blobs; fresh-chat checkpoint; SF-09 |
| ✅ | Automatic lesson capture | `08`, `06-LESSONS`, learning-from-mistakes templates | **93** | Quality bar; propose upstream when reusable |

---

## Factory maintenance workflows

| ✅ | Workflow | Homes | % | Covered behaviors |
|----|----------|-------|---|-------------------|
| ✅ | Forever-generic factory | OWNER_STANDING template, `README` | **98** | No product/people/tracker URLs in factory |
| ✅ | Owner “add to the factory” → upstream pull request | OWNER_STANDING, `08`, `CONTRIBUTING.md` | **95** | Vendored copy read-only; generic change proposed upstream the same session |
| ✅ | Coverage atlas consult-before-add | `coverage/` (this folder), prompts, lessons | **100** | Status + % + upgrade vs add |
| ✅ | Excellence north star / ratchet | `EXCELLENCE.md`, coverage protocol step 0 | **92** | Every edit raises a dimension; trajectory not one-shot (SF-11) |
| ✅ | Studio as a company | `07-judgment/studio-company`, `STUDIO_ORG`, `08` | **90** | Seats, goals, checkout; Paperclip judgment only (SF-12) |
| ✅ | Competitor recon / clean-room | `07-judgment/competitor-recon`, `01-STEPS` 0.2, REFERENCES | **88** | Patterns only; evidence reviews; SF-13 |
| ✅ | Software Factory + multi-agent | `07-judgment/software-factory`, `STUDIO_ORG`, `08`, `09` | **93** | Line + seats; independent review; outcome metrics; SF-12 |
| ✅ | Standing preference → factory | OWNER_STANDING template | **92** | Lasting workflow prefs update method + sync |
| ⚠️ | Studio repo-map diagram updates | Product standing / decisions (not in generic templates deeply) | **55** | Practice exists in mature studios; thin in seed templates — see gaps |

---

## Security / trust workflows (cross-cutting)

| ✅ | Workflow | Homes | % | Covered behaviors |
|----|----------|-------|---|-------------------|
| ✅ | No secrets / no real PII in git | AGENTS, SECURITY, COMPLIANCE | **95** | Fictional fixtures only |
| ✅ | AI propose / human commit | `06-LESSONS`, learning-from-mistakes sample | **90** | Suggestions must not mutate canonical records |
| ✅ | Consent soft-skip vs hard-fail | `06-LESSONS` | **85** | Background vs explicit AI endpoints |
| ✅ | Payments webhook-first | `07-judgment/payments`, SECURITY WH | **88** | Signature + idempotency |

---

## Domain average

**Workflow coverage ≈ 91%** — strongest studio operating system area. Remaining gaps are mostly product-side tooling (Notion page shapes, org atlas) intentionally kept out of the generic factory.
