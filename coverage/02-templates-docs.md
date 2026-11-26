# Coverage — planning document templates (`templates/`)

Paths relative to `software-factory-all-in-one/templates/` unless noted. These seed a **new planning repository**.

---

## Root / product entry

| ✅ | Capability | Path | % | Notes |
|----|------------|------|---|-------|
| ✅ | Planning README skeleton | `README.md` | **85** | Product overview outline |
| ✅ | Structured requirements SoT | `requirements.md` | **90** | Line-style User/System/Rule; governing rules |
| ✅ | License template | `LICENSE.template` | **95** | Proprietary default |
| ✅ | Scratch notes | `notes.md` | **80** | Ideas not yet requirements |
| ✅ | Repo hygiene | `.editorconfig`, `.gitattributes`, `.gitignore` | **95** | — |

---

## Shared docs (`docs/`)

| ✅ | Capability | Path | % | Notes |
|----|------------|------|---|-------|
| ✅ | Docs index | `docs/README.md` | **85** | — |
| ✅ | Agent hard rails (short) | `docs/AGENT_START.md` | **95** | Weak-model onboarding |
| ✅ | Owner standing ledger | `docs/OWNER_STANDING.md` | **92** | Day loop, factory dual-update, generic rule |
| ✅ | Actor-loop delivery doc | `docs/DELIVERY.md` | **95** | Mirrors method `02` |
| ✅ | Decision log | `docs/DECISIONS.md` | **90** | ADR-style entries |
| ✅ | BRD | `docs/BRD.md` | **88** | Why / market / competitors |
| ✅ | PRD | `docs/PRD.md` | **90** | Features F-xx, acceptance, DoR |
| ✅ | SRS | `docs/SRS.md` | **92** | Stack + FR/NFR + owners + traceability |
| ✅ | API contract | `docs/API_CONTRACT.md` | **92** | Only shared FE↔BE interface; design bar conventions (resources, HTTP semantics, docs currency) |
| ✅ | Compliance red lines | `docs/COMPLIANCE.md` | **92** | Markets, consent, payments, a11y, ethics + risk sections |
| ✅ | Security red lines | `docs/SECURITY.md` | **92** | OWASP IDs + Every Page Checklist |
| ✅ | AI provider / rules | `docs/AI.md` | **85** | Optional delete if no AI |
| ✅ | SEO + GEO (shared) | `docs/SEO.md` | **90** | Honest public SEO + GEO craft; day gate wired |
| ✅ | Docker (shared) | `docs/DOCKER.md` | **85** | Local Compose; prod host separate |
| ✅ | Deployment (shared) | `docs/DEPLOYMENT.md` | **88** | Hosting choice + DR rules |
| ✅ | CodeRabbit (shared) | `docs/CODERABBIT.md` | **88** | Free vs paid; does not replace CI |
| ✅ | TestSprite (shared) | `docs/TESTSPRITE.md` | **80** | Agentic E2E/API — thinner than CodeRabbit |
| ✅ | References borrow register | `docs/REFERENCES.md` | **85** | Taken / rejected / where landed |
| ✅ | Scope rejections | `docs/SCOPE_REJECTIONS.md` | **88** | Stable `REJ-xx` IDs |
| ✅ | Judgment pointer | `docs/JUDGMENT.md` | **90** | Points at factory `07-judgment` |
| ✅ | Actors pack | `docs/actors/**` | **85** | Current-actor screens/flow skeletons |
| ✅ | Decision-log folder | `docs/decision-logs/README.md` | **75** | Optional overflow; main log is DECISIONS |
| ✅ | Learning-from-mistakes | `docs/learning-from-mistakes/**` | **90** | README + sample lessons (queue, AI mutate, CI lockfile) |
| ✅ | Jira / tracker pack | `docs/jira/**` | **82** | Generic current-actor SPRINTS + README (product fills keys) |

**Shared-docs average: ~89%**

---

## Frontend / backend split guides

| ✅ | Capability | Path | % | Notes |
|----|------------|------|---|-------|
| ✅ | FE index / ARCHITECTURE / TESTING / DEPLOYMENT / DOCKER / SEO+GEO | `docs/frontend/**` | **90** | Owner-split testing (SF-10); FE SEO includes GEO craft |
| ✅ | BE index / ARCHITECTURE / TESTING / DEPLOYMENT / DOCKER | `docs/backend/**` | **88** | — |
| ✅ | FE/BE CodeRabbit yaml + guidelines | `docs/{frontend,backend}/coderabbit.yaml`, `CODERABBIT_GUIDELINES.md` | **90** | Sync when SECURITY/COMPLIANCE change |
| ✅ | FE/BE TestSprite guidelines | `docs/*/TESTSPRITE_GUIDELINES.md` | **78** | Present; less battle-tested than CodeRabbit rails |

---

## Prototype docs (`project-ui/`)

| ✅ | Capability | Path | % | Notes |
|----|------------|------|---|-------|
| ✅ | Prototype README / DESIGN guides | `project-ui/README.md` | **70** | How to build; not a full Next app |
| ✅ | Anti-slop | `project-ui/ANTI-SLOP.md` | **85** | — |
| ✅ | Pre-delivery UX | `project-ui/PRE-DELIVERY-UX.md` | **85** | — |
| ✅ | Design errors catalog | `project-ui/DESIGN-ERRORS.md` | **80** | — |
| ⚠️ | Runnable `project-ui` app in templates | *(absent)* | **35** | Intentionally: copy starter from a finished planning product; see `05-gaps` |

---

## What is intentionally **not** in planning templates

| Item | Why | Where it belongs |
|------|-----|------------------|
| `docs/features/**` feature files | Planning stays SoT; evidence lives with code | Implementation repos (`04-FEATURE_SDLC`) |
| Spec Kit `.specify` / constitution dump | Second constitution forbidden in planning | Impl repos; judgment in `07-judgment` |
| Product day-page Notion URLs | Product-specific | Product `OWNER_STANDING` |
| Real secrets / DSNs | Security | Host env only |

---

## Agent decision cheat-sheet

| If owner asks to add a doc… | Prefer home | Skip if |
|-----------------------------|-------------|---------|
| New “constitution” | Expand SECURITY / COMPLIANCE / AGENTS | Duplicates governing rules |
| New architecture bible | FE/BE `ARCHITECTURE.md` + DECISIONS | Full SAD paste (`07-judgment/sad-adr`) |
| New testing bible shared FE+BE | Keep split TESTING guides | Inventing a third shared testing book |
| New prototype screen rules | `03-PROTOTYPE` + `project-ui-design` rule | Baking product screens into factory |
