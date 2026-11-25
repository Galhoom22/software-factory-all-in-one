01-method-docs.md [82L]
# Coverage — method docs (`00`–`09` + judgment)
Legend: ✅ / ⚠️ / ❌ · % per [`README.md`](README.md) rubric. Paths are under `software-factory-all-in-one/`.
---
## Numbered method files
| ✅ | Capability | Path | % | What “covered” means | Gaps / upgrade notes |
... [lean-ctx: omitted 1 lines]
| ✅ | Playbook entry + layout | `README.md` | **95** | Numbered layout, when to use, seed steps, placeholders, keeping current | Point newcomers to `coverage/` (done 2026-11-21) |
| ✅ | Requirements-driven usage | `00-USAGE.md` | **95** | Entry file activates planning; 80/20; planning vs impl; CI automation pointers | — |
... [lean-ctx: omitted 2 lines]
| ✅ | Prototype / API explorer | `03-PROTOTYPE.md` | **90** | UI stack fidelity, design skills, states, bilingual/RTL, anti-slop | No full app scaffold inside method (by design) |
| ✅ | Feature-level SDLC | `04-FEATURE_SDLC.md` | **93** | Decomposition, profiles, evidence, gates, Done/Released/Outcome | Feature files live in **impl** repos only |
... [lean-ctx: omitted 3 lines]
| ✅ | Implementation day pipeline | `08-IMPLEMENTATION-DAY.md` | **97** | Run-through, closeout, CodeRabbit, **file-anchored Pareto**, handoff, lesson capture |
| ✅ | CI/CD progressive phases | `09-CI-CD.md` | **94** | Phase A/B/C, planning + impl CI, CD rules, agent checklist | Host-specific secrets stay in product DEPLOYMENT |
... [lean-ctx: omitted 2 lines]
## Judgment modules (`07-judgment/`)
| ✅ | Capability | Path | % | Absorbed as | Gaps / upgrade notes |
... [lean-ctx: omitted 4 lines]
| ✅ | API design (consumer-first) | `07-judgment/api-design.md` | **90** | Resource naming; method semantics; docs=agreement; no HATEOAS/Digest mandate |
| ✅ | API readiness across environments | `07-judgment/api-readiness.md` | **88** | Contract + local + CI + staging/prod smoke by phase | Wired into `08`/`09`/BE TESTING |
... [lean-ctx: omitted 2 lines]
| ✅ | Requirements-driven stack selection | `07-judgment/stack-selection.md` | **90** | Advise from requirements; no universal stack; pin via ADR/SRS | Wired into `00-USAGE` + `technologies/` |
| ✅ | Packages over reinvention | `07-judgment/packages.md` | **90** | Non-trivial → verified package; trivial → house/stdlib | Wired into standing + engineering-standards |
... [lean-ctx: omitted 3 lines]
| ✅ | Verification engineering | `07-judgment/verification-engineering.md` | **94** | Criteria→evidence; author≠judge; layers; risk-matched |
| ✅ | Integration engineering | `07-judgment/integration-engineering.md` | **93** | Any partner: interfaces, contract, adapter, idempotency, fallback |
| ✅ | AI engineering | `07-judgment/ai-engineering.md` | **92** | Det/prob seam, admission, golden eval, practice level; dual-mode classical+AI |
... [lean-ctx: omitted 1 lines]
| ✅ | Agent skills operating bar | `07-judgment/agent-skills.md` | **88** | Assumptions, thin slices, five-axis review | Not a vendored skills OS |
| ✅ | Payments / providers | `07-judgment/payments.md` | **88** | Webhook-first, idempotency, current APIs | Pair with SECURITY/COMPLIANCE templates |
... [lean-ctx: omitted 4 lines]
| ✅ | Enterprise system design | `07-judgment/enterprise-system-design.md` | **90** | Six questions; practice levels; verification-dominant; output admission |
... [lean-ctx: omitted 3 lines]
## Supporting folders (method side)
| ✅ | Capability | Path | % | Notes |
... [lean-ctx: omitted 1 lines]
| ✅ | Entry requirements example | `examples/my-project-requirements.example.md` | **90** | Copyable activation sample |
| ✅ | Playbook self-check scripts | `scripts/check-requirements-activation.mjs`, `check-planning-entry.mjs` | **92** | CI + local |
... [lean-ctx: omitted 1 lines]
| ✅ | Excellence north star | `EXCELLENCE.md` | **95** | Ratchet + **why** (speed×quality single reference; vibe + professional) |
... [lean-ctx: omitted 2 lines]
| ✅ | Software Factory + multi-agent | `07-judgment/software-factory.md` | **93** | Stages + independent review + Factory.com absorb (routing, outcomes, control); pairs with seats | — |
... [lean-ctx: omitted 2 lines]
## Agent decision cheat-sheet
| If owner asks to add… | Check these rows first | Prefer |
... [lean-ctx: omitted 1 lines]
| New “delivery mode” / MVP shortcut | `02-DELIVERY`, `08` | **Refuse** — deepen actor-loop wording instead |
| New day-closeout step | `08`, `09`, `04-workflows` | Extend `08`/`09` once; update coverage % |
| New outside methodology (Spec Kit, ESD…) | `07-judgment/*` | Judgment map only; no second constitution |
... [lean-ctx: omitted 1 lines]

