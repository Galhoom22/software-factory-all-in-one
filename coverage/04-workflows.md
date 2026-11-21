# Coverage — operating workflows

Workflows are **how agents and owners run work**, not just file names. Each row cites the method home + template/standing mirrors.

---

## Planning bootstrap

| ✅ | Workflow | Homes | % | Covered behaviors |
|----|----------|-------|---|-------------------|
| ✅ | Requirements-driven activation | `00-USAGE`, `01-STEPS`, entry example, `check-planning-entry`, Cursor `requirements-activation.mdc` | **95** | Detect root entry file → plan without waiting; never overwrite entry; 80/20 |
| ✅ | Seed new planning repo from templates | `README`, `00-USAGE` | **92** | Copy templates including hidden files; fill placeholders |
| ✅ | Keep every document current | `AGENTS.template`, `01-STEPS` | **90** | Same-commit doc updates; no stale summaries |
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
| ✅ | Local proof = CI checks | `08`, `09` | **94** | Same commands GitHub Actions will run |
| ✅ | Feature evidence same day | `04-FEATURE_SDLC`, `08` | **93** | Filled template ≠ Done; gates need results |
| ✅ | DSA check on hot paths | `07-judgment/dsa-performance`, `08` | **90** | Name `n`, class, structure, edges |
| ✅ | API readiness across environments | `07-judgment/api-readiness`, `08`, `09`, BE TESTING/DEPLOYMENT | **88** | Contract + local + CI + phase smoke; FE-handoff honesty |
| ✅ | SEO + GEO on public-page days | `07-judgment/seo-geo`, `08`, SEO templates | **88** | Checklist + N/A for private-only days; no ranking vanity Done |
| ✅ | Candor on degrading asks | OWNER_STANDING + coverage + `08` (D-82) | **90** | Refuse/advise; no dual-sync of bar-lowering changes |
| ✅ | Compliance / ethics / risk day check | `07-judgment/compliance-ethics-risk`, `08`, COMPLIANCE | **88** | PII/money/AI/claims; safer scenario on refuse |
| ✅ | Automatic closeout order | `08`, `09` | **96** | PR → CI green → CodeRabbit → merge → verify → CD(phase) → tracker → day page |
| ✅ | Progressive CD (A/B/C) | `09-CI-CD`, impl Actions YAML | **94** | Auto-detect; honest skip; no fake deploys |
| ✅ | CodeRabbit Free default | `08`, `CODERABBIT` templates | **92** | CLI/IDE gate; no paid trials unless asked |
| ✅ | Pareto 20% + handoff | `08`, prompts | **95** | Teachable depth + operational handoff |
| ✅ | Automatic lesson capture | `08`, `06-LESSONS`, learning-from-mistakes templates | **93** | Quality bar; dual sync when reusable |

---

## Playbook maintenance workflows

| ✅ | Workflow | Homes | % | Covered behaviors |
|----|----------|-------|---|-------------------|
| ✅ | Forever-generic playbook | OWNER_STANDING template, `README` | **98** | No product/people/tracker URLs in playbook |
| ✅ | Owner “add to playbook” dual mirror | OWNER_STANDING, `08` | **95** | Local `playbook/` + studio sync same session |
| ✅ | Coverage atlas consult-before-add | `coverage/` (this folder), prompts, lessons | **100** | Status + % + upgrade vs add |
| ✅ | Standing preference → playbook | OWNER_STANDING template | **92** | Lasting workflow prefs update method + sync |
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

**Workflow coverage ≈ 91%** — strongest studio operating system area. Remaining gaps are mostly product-side tooling (Notion page shapes, org atlas) intentionally kept out of the generic playbook.
