# Judgment — verification engineering (prove AI-written change)

Absorb **verification engineering** as **judgment only**: the craft of building **checks, environments, and evidence** so an agent-produced change is trustworthy before Done — not reading every line by hand, and not accepting “the agent said it works.”

**Name collision:** in chip design, “verification engineer” often means hardware design verification (SystemVerilog / UVM). This file is about **software / AI-coding-agent** verification. Do **not** vendor LightSprint, Simulithic, or any one product’s sandbox UI into the factory.

**When this applies:** every implementation day that ships code (or non-trivial tests). Doc-only days: mark **N/A** for runtime layers; still keep honest evidence for doc claims when they affect delivery.

## Problem this prevents

Agents write faster than humans can line-review. Teams then either (a) become the bottleneck reading every diff, or (b) merge on hope. A green unit test can still miss the agreed criterion (login button clicks, session never created). Builder-written tests alone are an **activity**, not independent proof. “Completion without evidence” is the failure mode.

**Target:** every must-finish checkbox maps to **objective evidence** against **pre-stated criteria**; independent checks (CI / review) judge the builder; residual uncertainty is named; humans own validation of whether the ask was right.

## Testing vs verification vs validation

| Word | Question | In this factory |
|------|----------|------------------|
| **Testing** | Did the checks we built pass? | Unit/integration/E2E runs, lint/types |
| **Verification** | Does the change meet the **agreed criteria**? | Acceptance ↔ evidence map; FEATURE verification matrix; day gates |
| **Validation** | Do those criteria solve the **real** problem? | Owner / Outcome Achieved — not the agent’s call alone |

A passing test without a criterion cell is incomplete verification. Outcome Achieved stays separate from Done ([`04-FEATURE_SDLC.md`](../04-FEATURE_SDLC.md)).

## Principles (day-usable)

1. **Specify success before (or with) the ask** — must-finish / acceptance criteria are specific enough that a check can confirm them.
2. **Separate author and judge** — the builder agent does not sole-certify Done. CI, CodeRabbit (or paid review), and the human code-review bar are the judge plane ([`software-factory.md`](software-factory.md) independent review).
3. **Prefer deterministic checks before model opinion** — failing/passing tests and CI beat “another model said LGTM.”
4. **Verify in a running environment when the surface needs it** — local HTTP / browser / staging smoke by phase ([`api-readiness.md`](api-readiness.md), product TESTING docs). Isolated unit-only is not enough for auth, money, or user journeys.
5. **Save evidence of execution** — CI run links, command outputs, contract IDs, screenshots/recordings when UI — bound to the commit under review.
6. **Match depth to risk** — copy fix ≠ migration; FEATURE Lightweight / Standard / Comprehensive + day gates (DSA, API, SEO, booking, compliance).
7. **No self-certification** — builder-authored tests may support a cell; they do not **alone** close high-stakes criteria. Protected CI + independent review required for Done on code days.
8. **Name residual uncertainty** — what was not verified stays explicit (N/A with reason, or open follow-up) — never silent.

## Verification layers (fast → slow)

Use the cheapest layer that answers the criterion; escalate for risk:

| Layer | Examples in this method |
|-------|-------------------------|
| Static | Lint, format, types, secret scan |
| Automated tests | Unit / integration / contract per TESTING docs |
| Running app / API | Local HTTP proof, E2E, staging smoke (phase B/C) |
| Independent mechanical review | CodeRabbit Free CLI/IDE (or paid GitHub review) |
| Senior human bar | [`human-code-review.md`](human-code-review.md) |
| Domain gates | API readiness, cross-surface, SEO+GEO, booking, compliance |
| Human merge / validation | Owner approval of criteria and consequential release |

Fast layers should run while building so the agent can self-correct. Slow layers run before claiming Done / before merge.

## Day workflow hook

1. **Start** — for each must-finish item, know the success criterion (Story AC, feature file, or explicit day checkbox).
2. **Build** — implement; keep a mental **criterion → evidence** map (FEATURE matrix when a feature file exists).
3. **Before PR** — run the same local checks CI will run; fill evidence cells; fail open gaps honestly.
4. **Closeout** — CI green → human code-review + CodeRabbit → merge → verify on default branch → CD/smoke when configured. Day summary cites verification evidence (links), not “tests passed” alone.
5. **Never** mark tracker/day Done on builder narrative without the judge-plane gates above.

## How this relates to existing homes

| Home | Role |
|------|------|
| [`04-FEATURE_SDLC.md`](../04-FEATURE_SDLC.md) | Verification matrix, DoD ≠ Released ≠ Outcome |
| [`08-IMPLEMENTATION-DAY.md`](../08-IMPLEMENTATION-DAY.md) | Calendar proof + closeout order |
| [`09-CI-CD.md`](../09-CI-CD.md) | Deterministic CI/CD phases |
| [`software-factory.md`](software-factory.md) | Builder vs independent review on the line |
| [`enterprise-system-design.md`](enterprise-system-design.md) | Boundary questions when verification-dominant / High-risk |
| [`human-code-review.md`](human-code-review.md) | Senior readability / modern syntax bar |
| Product TESTING / TestSprite docs | Owner-split test ownership; optional live-app agents |

## Anti-patterns

| Do not | Why |
|--------|-----|
| “Agent said Done” / chat claim without CI+evidence | Completion without evidence |
| Only builder-written tests for auth/money/PII | Self-certification |
| Treat CodeRabbit as replacing CI or criteria map | Mechanical assist ≠ contract proof |
| Vendor one verification SaaS into every product | Judgment only; pick tools per product |
| Chip-design UVM ceremony on a web SaaS day | Wrong domain |
| Skip human merge for consequential changes to “go faster” | Principle 6–8 |

## Professional bar (checklist)

- [ ] Success criteria known before claiming the slice Done
- [ ] Each critical criterion has an evidence link (or honest Failed / N/A)
- [ ] Deterministic CI (and required local checks) green on the commit
- [ ] Independent review plane ran (CodeRabbit + human bar on code days)
- [ ] Running-environment proof when the surface requires it
- [ ] Residual gaps named; Outcome left to validation when appropriate

## Related homes

- Method: `04` · `08` · `09` · agent-skills “evidence over hope”
- Factory: [`software-factory.md`](software-factory.md) · studio seats
- Sources distilled (not dependencies): LightSprint / Simulithic explainers; independent-assurance / harness literature on evidence-bound completion
