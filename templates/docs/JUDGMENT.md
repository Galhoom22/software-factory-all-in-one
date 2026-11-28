# Judgment — external methods mapped onto this repo

See factory [`07-judgment/`](../software-factory-all-in-one/07-judgment/README.md). This file is the product-local list of what was absorbed.

## Active maps

| External method | Adopted here as | Forbidden |
|-----------------|-----------------|-----------|
| Spec-driven loop (e.g. Spec Kit) | Map phases onto BRD/PRD/SRS / actors / DECISIONS; converge before claiming alignment | `specify init`, parallel `specs/`, second constitution |
| Boundary / enterprise design lenses | Ask load-bearing questions on schema, authz, money, PII writes | Vendoring a cloud course; inventing SLOs for show |
| Engineering-agent kits | Explore → clarify essentials → verify → deliberate expensive forks | Replacing `AGENTS.md` with an upstream identity |
| Design skill packs | Distill into `DESIGN.md` + `project-ui/PRE-DELIVERY-UX.md` + `ANTI-SLOP.md` | Generators or packs that override product tokens |
| AI system design guides | Map into `docs/AI.md` + `SECURITY.md` LM + FEATURE_SDLC AI module; factory `07-judgment/ai-system-design.md` | Vendoring the full guide, interview banks, or rotating model price sheets |
| SAD / ADR template packs | Strengthen `DECISIONS.md` + FE/BE `ARCHITECTURE.md` C4 views; factory `07-judgment/sad-adr.md` | Full Uber-style SAD tree or parallel `docs/adr/` in planning |
| Production agent-skills packs | Map behaviors into day loop + FEATURE_SDLC + SECURITY; factory `07-judgment/agent-skills.md` | Installing 25 skills as a second constitution or mandatory slash-command OS |
| Payment-provider agent docs (MCP, skills, security, webhooks, sandboxes) | Map into `SECURITY.md` WH + `COMPLIANCE.md` CP + BE TESTING; factory `07-judgment/payments.md` | Full provider catalog dump; deprecated Sources/Charges for new work; entitlement from success URLs |
| Booking / reservation engines (inventory, OTA, travel MCP) | Map into API contract + FEATURE + TESTING; factory `07-judgment/booking.md` (+ payments when money moves) | Confirm from cache; skip price lock; retry without idempotency/external ref |
| Playwright intro / best practices / CI / a11y | FE TESTING + CI workflow; factory `07-judgment/playwright-e2e.md` | Mega flaky suites; CSS-first locators; live API on every PR |
| GoF-style design pattern courses | FEATURE_SDLC pattern evaluation + day design notes; factory `07-judgment/design-patterns.md` | Full catalog dump; patterns for show; Singleton-as-default |
| Adaptive Feature-Level SDLC templates | Absorb gates/evidence/DoR/completion semantics into `04-FEATURE_SDLC.md` + day bridge; keep condensed | Dumping the full multi-section template into planning or every feature file |
| DSA / Big-O / algorithmic performance (Pareto study) | FEATURE Performance module + day hot-path check; factory `07-judgment/dsa-performance.md` | LeetCode catalog/solution dumps; interview grind as CI gate |
| Community agent collections (agents, instructions, skills, hooks) | Workflow hardening, threat modeling, blameless postmortems and vet-before-install mapped into CI, `SECURITY.md`, `DEPLOYMENT.md` rollback; factory `07-judgment/ci-hardening.md`, `threat-modeling.md`, `incident-response.md`, `agent-skills.md` | Bulk-installing hundreds of agents/instructions; vendor-specific packs as default craft; unreviewed skills, MCP servers or hooks |
| API readiness across environments | Day API gate + BE TESTING/DEPLOYMENT smoke; factory `07-judgment/api-readiness.md` | Second OpenAPI SoT; Done on local-only; real PII on smoke |
| Stack / framework shopping lists | Advise from **this** product’s requirements; pin in SRS + DECISIONS; factory `07-judgment/stack-selection.md` | One stack for every product; locking from pack availability alone |
| Package vs DIY for a capability | Prefer verified packages for non-trivial work; factory `07-judgment/packages.md` | Dependency for every micro-task; reinventing maintained ecosystem solutions |
| SEO + GEO (public pages) | Dual technical + citeable craft; factory `07-judgment/seo-geo.md` + day gate in `08` | Ranking/citation vanity as Done; fake authority; AI-only markup theater |
| Compliance / ethics / risk | Map laws + IEEE ethics + risk treat cycle; factory `07-judgment/compliance-ethics-risk.md` | Dumping ISO manuals; fake SOC2 claims; obeying unlawful asks |

## Converge checklist (end of a docs / UI pass)

- [ ] Governing rules and red lines unchanged unless the owner approved.
- [ ] New screens/states appear in the screen index and actor `screens.md` / `flow.md`.
- [ ] API / data facts live only in `docs/API_CONTRACT.md` (and SRS where required).
- [ ] Borrowed patterns logged in `docs/REFERENCES.md` (taken + rejected).
- [ ] Scope answers still match `docs/SCOPE_REJECTIONS.md`.
- [ ] UI defects fixed + logged in `project-ui/DESIGN-ERRORS.md` when the owner reported them.
- [ ] Engineering aha (if any) appended under `docs/learning-from-mistakes/`.

