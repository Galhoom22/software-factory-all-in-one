# Coverage — method docs (`00`–`09` + judgment)

Legend: ✅ / ⚠️ / ❌ · % per [`README.md`](README.md) rubric. Paths are under `playbook/`.

---

## Numbered method files

| ✅ | Capability | Path | % | What “covered” means | Gaps / upgrade notes |
|----|------------|------|---|----------------------|----------------------|
| ✅ | Playbook entry + layout | `README.md` | **95** | Numbered layout, when to use, seed steps, placeholders, keeping current | Point newcomers to `coverage/` (done 2026-11-21) |
| ✅ | Requirements-driven usage | `00-USAGE.md` | **95** | Entry file activates planning; 80/20; planning vs impl; CI automation pointers | — |
| ✅ | Ordered planning steps | `01-STEPS.md` | **93** | Phase 0→N with outputs + Done; wires prompts/lessons | Keep steps aligned when templates grow |
| ✅ | Actor-loop delivery (no MVP) | `02-DELIVERY.md` | **98** | Production-complete per actor; wiring so agents cannot forget | — |
| ✅ | Prototype / API explorer | `03-PROTOTYPE.md` | **90** | UI stack fidelity, design skills, states, bilingual/RTL, anti-slop | No full app scaffold inside method (by design) |
| ✅ | Feature-level SDLC | `04-FEATURE_SDLC.md` | **93** | Decomposition, profiles, evidence, gates, Done/Released/Outcome | Feature files live in **impl** repos only |
| ✅ | Ready agent prompts | `05-PROMPTS.md` | **90** | Activation, phases, audits, day/start cues | Coverage-check prompt added 2026-11-21 |
| ✅ | Process lessons | `06-LESSONS.md` | **92** | Scope, payments, docs, tracker, design, BE API, Playwright, agents, Windows | Grows via automatic capture; avoid duplicates |
| ✅ | Judgment pack index | `07-judgment/README.md` | **95** | Absorb outside methods; never second constitution | — |
| ✅ | Implementation day pipeline | `08-IMPLEMENTATION-DAY.md` | **96** | Run-through, closeout order, CodeRabbit Free, Pareto, handoff, lesson capture | — |
| ✅ | CI/CD progressive phases | `09-CI-CD.md` | **94** | Phase A/B/C, planning + impl CI, CD rules, agent checklist | Host-specific secrets stay in product DEPLOYMENT |

**Domain average (method core): ~93%**

---

## Judgment modules (`07-judgment/`)

| ✅ | Capability | Path | % | Absorbed as | Gaps / upgrade notes |
|----|------------|------|---|-------------|----------------------|
| ✅ | Spec Kit / ESD / ATLAS style | `07-judgment/README.md` | **90** | Map onto existing docs; forbid second SoT | Spec Kit lives in **impl** repos |
| ✅ | DSA / performance on hot paths | `07-judgment/dsa-performance.md` | **90** | `n`, Big-O, structure, edges; TLE mindset | Wire into day Done (already in `08`) |
| ✅ | Cross-surface compatibility | `07-judgment/cross-surface-compatibility.md` | **90** | Read sibling; write owned seat; contract-first; day gate |
| ✅ | API design (consumer-first) | `07-judgment/api-design.md` | **90** | Resource naming; method semantics; docs=agreement; no HATEOAS/Digest mandate |
| ✅ | API readiness across environments | `07-judgment/api-readiness.md` | **88** | Contract + local + CI + staging/prod smoke by phase | Wired into `08`/`09`/BE TESTING |
| ✅ | SEO + GEO (public pages) | `07-judgment/seo-geo.md` + `08` + SEO templates | **88** | Dual tech + citeable craft; day gate when indexable URLs change |
| ✅ | Compliance / ethics / risk | `07-judgment/compliance-ethics-risk.md` | **88** | IEEE ethics + risk treat cycle; candor safer scenario |
| ✅ | Requirements-driven stack selection | `07-judgment/stack-selection.md` | **90** | Advise from requirements; no universal stack; pin via ADR/SRS | Wired into `00-USAGE` + `technologies/` |
| ✅ | Packages over reinvention | `07-judgment/packages.md` | **90** | Non-trivial → verified package; trivial → house/stdlib | Wired into standing + engineering-standards |
| ✅ | Design patterns | `07-judgment/design-patterns.md` | **85** | Problem → naive → enhance; composition first | Not a pattern catalog dump |
| ✅ | Agent skills operating bar | `07-judgment/agent-skills.md` | **88** | Assumptions, thin slices, five-axis review | Not a vendored skills OS |
| ✅ | Payments / providers | `07-judgment/payments.md` | **88** | Webhook-first, idempotency, current APIs | Pair with SECURITY/COMPLIANCE templates |
| ✅ | Booking / reservations | `07-judgment/booking.md` | **88** | Holds, recheck, idempotency, inventory; pair payments |
| ✅ | Context window hygiene | `07-judgment/context-window.md` | **90** | Pointers; fresh chat; D-86 | — |
| ✅ | Playwright E2E | `07-judgment/playwright-e2e.md` | **88** | Short critical list, locators, CI traces | FE TESTING template holds product rules |
| ✅ | SAD / ADR | `07-judgment/sad-adr.md` | **90** | DECISIONS.md + C4 in ARCHITECTURE; no second SAD | — |
| ✅ | Enterprise system design | `07-judgment/enterprise-system-design.md` | **90** | Six questions; practice levels; verification-dominant; output admission |
| ✅ | AI system design | `07-judgment/ai-system-design.md` | **86** | Golden set, untrusted text, model pins | Product `docs/AI.md` holds provider shortlist |

**Domain average (judgment): ~88%**

---

## Supporting folders (method side)

| ✅ | Capability | Path | % | Notes |
|----|------------|------|---|-------|
| ✅ | Entry requirements example | `examples/my-project-requirements.example.md` | **90** | Copyable activation sample |
| ✅ | Playbook self-check scripts | `scripts/check-requirements-activation.mjs`, `check-planning-entry.mjs` | **92** | CI + local |
| ✅ | Playbook CI workflow | `.github/workflows/ci.yml` | **90** | Studio mirror uses synced copy |
| ✅ | Excellence north star | `EXCELLENCE.md` | **95** | Ratchet + **why** (speed×quality single reference; vibe + professional) |
| ✅ | Studio as a company | `07-judgment/studio-company.md` + `templates/docs/STUDIO_ORG.md` | **90** | Org seats; Paperclip judgment | — |
| ✅ | Competitor recon / clean-room | `07-judgment/competitor-recon.md` | **88** | Matrix + evidence gaps; no clone OS | — |
| ✅ | Software Factory + multi-agent | `07-judgment/software-factory.md` | **90** | Stages + independent review; pairs with seats | — |
| ✅ | Coverage atlas (this folder) | `coverage/` | **100** | Inventory + %; update on every practice change |

---

## Agent decision cheat-sheet

| If owner asks to add… | Check these rows first | Prefer |
|-----------------------|------------------------|--------|
| New “delivery mode” / MVP shortcut | `02-DELIVERY`, `08` | **Refuse** — deepen actor-loop wording instead |
| New day-closeout step | `08`, `09`, `04-workflows` | Extend `08`/`09` once; update coverage % |
| New outside methodology (Spec Kit, ESD…) | `07-judgment/*` | Judgment map only; no second constitution |
| New lesson from a bug | `06-LESSONS` + learning-from-mistakes templates | One bullet + sync if quality bar met |
