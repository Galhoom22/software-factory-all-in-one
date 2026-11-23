# Judgment — AI engineering (deterministic + probabilistic systems)

Absorb **AI engineering** as **judgment only**: the craft of building and operating software where some behavior is **probabilistic** (model samples, retrieval ranks, agent plans) while the product still must be **correct, safe, and operable**. Use this whenever must-finish touches prompts, models, RAG, agents/tools, AI jobs, evals, or AI observability — **and** when classical (fully deterministic) features sit next to those paths so the seam stays honest.

**Sources distilled (not dependencies):** Chip Huyen *AI Engineering* / agents practice (eval sets, failure modes); Agentic SDLC “two computers” / deterministic–probabilistic boundary; GenAIOps / eval harness practice (offline golden sets → CI gates → runtime traces → drift); AWS/enterprise RAI guardrails + HITL patterns; production AI observability (journey traces, admission ≠ generation stop). Do **not** vendor a single LLMOps platform, LangChain kit, or rotating model price sheet into the playbook.

**When this applies:** must-finish changes model choice, prompts, retrieval, tool-using agents, AI job queues, eval fixtures, guardrails/admission, or AI telemetry. Pure classical CRUD/UI with **no** model path and no AI side effects: **N/A** (classical engineering + verification still apply).

**Dual-mode target:** the same playbook succeeds for (1) **deterministic** software — fixed outputs, loud failures, CI as judge — and (2) **probabilistic** / AI-deep systems — distributional outputs, quiet failures — by putting every consequential effect on the deterministic side of the seam.

## Problem this prevents

Teams treat “the AI feature” as one machine. Probabilistic outputs look fluent and pass superficial review; side effects commit before schema/policy/admission; evals are vibes or a one-off demo; production has no trace of prompt/retrieval/tool versions; guardrails are keyword filters; classical and AI paths share no shared SoR or failure story. Result: confident wrong writes, un-auditable incidents, and a playbook that only works for CRUD.

**Target:** every AI-touching change names the **det/prob seam**, runs a **fixed fictional golden eval** (or assert smoke) before Done, admits outputs before side effects, and leaves **criteria→evidence** (not “model said OK”).

## Core ideas (two computers, one product)

| Idea | Agent meaning |
|------|----------------|
| **Two computers** | Deterministic side: I/O, schema validation, allowlists, tests, audit, commits. Probabilistic side: draft, rank, plan, sample text/tool intents. They are glued — not one mind. |
| **Seam discipline** | Probabilistic may **propose**; deterministic may **execute**. Nothing consequential crosses out of the model without a gate. |
| **Termination ≠ admission** | Generation stop / tool-call JSON ≠ safe to publish, charge, email, or write ([`ai-system-design.md`](ai-system-design.md), [`enterprise-system-design.md`](enterprise-system-design.md)). |
| **Eval harness = regression suite** | Fixed golden cases (happy / boundary / adversarial) versioned like tests; run on change of prompt, model pin, retrieval, or tools. |
| **Deterministic checks first** | Schema, product rules, authz, exact-match fixtures **before** LLM-as-judge or human taste ([`verification-engineering.md`](verification-engineering.md)). |
| **Practice level ≠ confidence** | Advisory / assisted / delegated / consequential follows **side-effect risk**, not model self-score. |
| **Observability of the journey** | Trace route → retrieval → model → validate → tool → terminal outcome; versions (prompt, model id, index); redacted; no raw PII dumps. |
| **Classical paths stay classical** | Non-AI features do not inherit “soft” acceptance; AI does not weaken COMPLIANCE/SECURITY for nearby code. |

Complements (does not replace): [`ai-system-design.md`](ai-system-design.md) (patterns → `docs/AI.md`), product `docs/AI.md` (providers + red lines), [`enterprise-system-design.md`](enterprise-system-design.md) (practice levels), [`verification-engineering.md`](verification-engineering.md), [`integration-engineering.md`](integration-engineering.md) (AI vendor as partner).

## AI engineering checklist (any model path)

Run before coding and again before Done:

1. **Mode map** — Which user journeys are fully deterministic vs touch a model? Name the seam boxes (propose vs execute).
2. **Practice level** — Advisory / assisted / delegated / consequential for every new side effect; HITL where consequence demands it.
3. **Admission rule** — Schema + product-rule + policy check **after** generation, **before** publish/tool/commit; fail closed when consequential.
4. **Untrusted inputs** — Uploads, retrieved chunks, tool results, user paste = untrusted data (indirect injection); no write authority from that text alone.
5. **Pins** — Model IDs (and embedding ids); prompt/version or hash; retrieval index version. Floating SDK defaults are a reliability bug.
6. **Golden eval** — Fixed **fictional** cases: happy, boundary, adversarial (injection / OOD / “should refuse”). No real personal data. Start small (tens of cases) if none exist; grow from bugs caught in review.
7. **Eval methods** — Prefer exact-match / structured asserts in CI; semantic or LLM-judge only where needed and **calibrated**; human spot-check for high stakes.
8. **Agent/tool paths** — Allowlisted tools; validate args; plan/tool-selection failures are first-class eval dimensions (invalid tool, bad params, goal miss, false “done”).
9. **Reliability** — Timeouts, bounded retries, terminal `failed`, idempotent AI jobs; provider outage = degrade or clear error ([`integration-engineering.md`](integration-engineering.md)).
10. **Observability** — Correlate request id; log safe metadata (model, tokens, latency, validation outcome) — not raw prompts/PII by default.
11. **Cost & routing** — Task-appropriate model; cache stable prefixes when supported; do not max effort on every call.
12. **Evidence** — Link golden-set run or assert smoke + admission path proof (or honest N/A for pure classical day).

## Day workflow hook

1. **Day start** — If must-finish names AI/model/prompt/RAG/agent/eval, open this file + product `docs/AI.md` + [`ai-system-design.md`](ai-system-design.md).
2. **Design** — Draw the seam; name practice level + admission; list golden cases to add/update.
3. **Build** — Deterministic gates first; adapter to the AI vendor; Context7/official docs for the SDK line ([`context7-docs.md`](context7-docs.md)).
4. **Before Done** — Golden eval / smoke green for touched path; failure/refusal case covered when tools or writes exist.
5. **Day summary** — Note **AI engineering** (paths + eval evidence + practice level) or **N/A**.

## How this relates to existing homes

| Home | Role |
|------|------|
| [`ai-system-design.md`](ai-system-design.md) | Staff patterns → land in product `docs/AI.md` / SECURITY |
| Product `docs/AI.md` | Provider shortlist, task map, red lines for *this* product |
| [`enterprise-system-design.md`](enterprise-system-design.md) | Practice levels, six boundary questions, unknown outcomes |
| [`verification-engineering.md`](verification-engineering.md) | Criteria→evidence; author≠judge; det before model opinion |
| [`integration-engineering.md`](integration-engineering.md) | AI provider as external partner (adapter, fallback, secrets) |
| FEATURE verification / AI modules | Traceability of golden set + admission |

## Anti-patterns

| Do not | Why |
|--------|-----|
| Treat “agent” as one coherent computer | Quiet probabilistic failures slip past |
| Commit side effects on generation stop | Termination ≠ admission |
| Demo once = Done | No regression harness |
| Real user data in eval fixtures | COMPLIANCE / privacy |
| Raise tool power because the model is “confident” | Practice level follows consequence |
| LLM-judge only, no deterministic asserts | Circular, uncalibrated trust |
| Vendor LangChain/LLMOps as the constitution | Framework-native first; judgment only |
| Soften classical acceptance because “AI is hard” | Dual-mode: CRUD stays strict |

## Professional bar (checklist)

- [ ] Seam named (propose vs execute) for every AI-touching path — or day marked N/A
- [ ] Practice level + admission rule for new side effects
- [ ] Model/prompt/index pins recorded
- [ ] Fictional golden eval or assert smoke run this change (evidence linked)
- [ ] Untrusted retrieval/tool text cannot silently gain write authority
- [ ] Day summary records AI engineering evidence or N/A

## Related homes

- Method: [`08-IMPLEMENTATION-DAY.md`](../08-IMPLEMENTATION-DAY.md) · [`04-FEATURE_SDLC.md`](../04-FEATURE_SDLC.md)  
- Patterns: [`ai-system-design.md`](ai-system-design.md) · product `docs/AI.md`  
- Optional human reading: [Agentic SDLC — deterministic/probabilistic boundary](https://danielmeppiel.github.io/agentic-sdlc-handbook/handbook/ch16-deterministic-probabilistic-boundary.html); [Chip Huyen — Agents](https://huyenchip.com/2025/01/07/agents.html); GenAIOps eval practice (Microsoft Learn / industry) — re-verify; do not copy vendor trees into the repo.
