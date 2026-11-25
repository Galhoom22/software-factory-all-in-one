04-workflows.md [91L]
# Coverage — operating workflows
Workflows are **how agents and owners run work**, not just file names. Each row cites the method home + template/standing mirrors.
---
## Planning bootstrap
| ✅ | Workflow | Homes | % | Covered behaviors |
... [lean-ctx: omitted 1 lines]
| ✅ | Requirements-driven activation | `00-USAGE`, `01-STEPS`, entry example, `check-planning-entry`, Cursor `requirements-activation.mdc` | **95** | Detect root entry file → plan without waiting; never overwrite entry; 80/20 |
| ✅ | Seed new planning repo from templates | `README`, `00-USAGE` | **92** | Copy templates including hidden files; fill placeholders |
| ✅ | Keep every document current | `AGENTS.template`, `01-STEPS` | **90** | Same-commit doc updates; no stale summaries |
| ✅ | Playbook Always-Current closeout | `07-judgment/playbook-freshness`, `scripts/check-playbook-freshness.mjs`, CI | **95** | Every playbook edit: atlas/% + official Checked dates + structural CI + D-110 mirror |
... [lean-ctx: omitted 3 lines]
## Delivery philosophy
| ✅ | Workflow | Homes | % | Covered behaviors |
... [lean-ctx: omitted 1 lines]
| ✅ | Actor loop / no MVP mode | `02-DELIVERY`, templates `DELIVERY.md`, Cursor `delivery.mdc` | **98** | Production-complete current actor; deferred = sequencing only |
| ✅ | Prototype production fidelity | `03-PROTOTYPE`, `project-ui-design.mdc` | **90** | Millimetre-accurate for actor in focus; mock data only |
| ✅ | Contract-first FE↔BE | `API_CONTRACT` template, prompts | **90** | Change contract in planning before dual impl |
... [lean-ctx: omitted 1 lines]
## Implementation day loop
| ✅ | Workflow | Homes | % | Covered behaviors |
... [lean-ctx: omitted 1 lines]
| ✅ | Day run-through (no mid-day waits) | `08-IMPLEMENTATION-DAY`, OWNER_STANDING template | **96** | Start cue → finish whole must-finish |
... [lean-ctx: omitted 4 lines]
| ✅ | Cross-surface compatibility | `07-judgment/cross-surface-compatibility`, `08`, `SIBLING` template | **90** | Sibling read; owned-seat write; contract-first handoff |
| ✅ | API readiness across environments | `07-judgment/api-readiness`, `08`, `09`, BE TESTING/DEPLOYMENT | **90** | Contract + design bar + local + CI + phase smoke; FE-handoff honesty |
| ✅ | API design craft | `07-judgment/api-design`, contract template, `08` gate 7 | **90** | Consumer-first; HTTP semantics; docs=agreement |
... [lean-ctx: omitted 1 lines]
| ✅ | Candor on degrading asks | OWNER_STANDING + coverage + `08` (D-82) | **90** | Refuse/advise; no dual-sync of bar-lowering changes |
| ✅ | Enterprise system-design boundary review | `07-judgment/enterprise-system-design`, `08` high-stakes | **90** | Six questions + AI practice level on consequential days |
... [lean-ctx: omitted 4 lines]
| ✅ | Human code-review bar | `07-judgment/human-code-review`, `08` closeout | **92** | Senior self-review: readability + modern syntax + best practices |
| ✅ | Context7 / current-docs gate | `07-judgment/context7-docs`, `08` always-on | **93** | This-session docs for pinned library/framework APIs |
... [lean-ctx: omitted 1 lines]
| ✅ | Integration engineering gate | `07-judgment/integration-engineering`, `08` always-on | **93** | External partners: checklist or N/A |
... [lean-ctx: omitted 1 lines]
| ✅ | Agent delegation gate | `07-judgment/delegation`, `08` always-on | **91** | Separate implementer: brief + land or N/A |
... [lean-ctx: omitted 5 lines]
## Playbook maintenance workflows
| ✅ | Workflow | Homes | % | Covered behaviors |
... [lean-ctx: omitted 1 lines]
| ✅ | Forever-generic playbook | OWNER_STANDING template, `README` | **98** | No product/people/tracker URLs in playbook |
... [lean-ctx: omitted 2 lines]
| ✅ | Excellence north star / ratchet | `EXCELLENCE.md`, coverage protocol step 0 | **92** | Every edit raises a dimension; trajectory not one-shot (D-87) |
| ✅ | Studio as a company | `07-judgment/studio-company`, `STUDIO_ORG`, `08` | **90** | Seats, goals, checkout; Paperclip judgment only (D-88) |
| ✅ | Competitor recon / clean-room | `07-judgment/competitor-recon`, `01-STEPS` 0.2, REFERENCES | **88** | Patterns only; evidence reviews; D-89 |
| ✅ | Software Factory + multi-agent | `07-judgment/software-factory`, `STUDIO_ORG`, `08`, `09` | **93** | Line + seats; independent review; outcome metrics; D-90 |
... [lean-ctx: omitted 3 lines]
## Security / trust workflows (cross-cutting)
| ✅ | Workflow | Homes | % | Covered behaviors |
... [lean-ctx: omitted 2 lines]
| ✅ | AI propose / human commit | `06-LESSONS`, learning-from-mistakes sample | **90** | Suggestions must not mutate canonical records |
| ✅ | Consent soft-skip vs hard-fail | `06-LESSONS` | **85** | Background vs explicit AI endpoints |
| ✅ | Payments webhook-first | `07-judgment/payments`, SECURITY WH | **88** | Signature + idempotency |
... [lean-ctx: omitted 1 lines]
## Domain average
**Workflow coverage ≈ 91%** — strongest studio operating system area. Remaining gaps are mostly product-side tooling (Notion page shapes, org atlas) intentionally kept out of the generic playbook.

