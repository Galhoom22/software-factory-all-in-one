# Judgment — Software Factory + multi-agent line

## Problem this prevents

A studio with **seats** (who) but no **line** (how work moves) still thrash: agents implement before triage, self-review their own patches, expand scope mid-flight, or declare Done without acceptance evidence. Multi-agent chaos without a factory is just more tabs. A vendor factory without seats ignores human board judgment.

## Two halves (use both)

| Half | Question | Playbook home |
|------|----------|---------------|
| **Studio company (MAS)** | Who owns what? | [`studio-company.md`](studio-company.md) + `STUDIO_ORG` |
| **Software Factory** | How does a work item move from signal → evidence → merge? | This file + day loop `08` + FEATURE `04` + CI `09` |

Together: **specialized roles on a governed assembly line**, humans own judgment gates.

When a build step uses a **separate implementer** (another CLI/session/subagent), apply [`delegation.md`](delegation.md): self-contained brief, implementer never commits, orchestrator re-runs gates and lands. That is the portable craft behind optional tools such as [delegate-skills](https://github.com/amElnagdy/delegate-skills) — judgment only; do not vendor the package.

## Sources (judgment only)

Absorb patterns (do **not** vendor frameworks as AGENTS):

- [Mastra — How to Build an AI Software Factory](https://mastra.ai/blog/software-factory) + [What is an AI software factory?](https://mastra.ai/articles/what-is-ai-software-factory)

- [Vercel — Software Factories](https://vercel.com/docs/agent-resources/software-factory) / [eve stations](https://vercel.com/kb/guide/eve-software-factory)

- [Warp Factories](https://docs.warp.dev/factories/how-factories-work/) (foreman, skippable stages, human handoff)

- Multi-agent craft: one convergence owner, bounded contracts, independent review ([SalarsNet multi-agent coding team](https://salars.net/ai/multi-agent-software-development) and similar handbook patterns)

- [Factory.com — Software Factory product](https://factory.com/product/software-factory) (model routing, full-SDLC stages, quality gates + human judgment, outcome metrics, trust/control)

Log borrows in product `docs/REFERENCES.md`. Optional vendor CLIs (Mastra Studio, Warp, Paperclip) are **experiments** — never replace Jira/Notion/GitHub or playbook day closeout unless a DECISIONS row says so.

## Factory stages → this playbook

Stages are stable; **depth is proportional** (SF-08). Skip honestly when the work is already scoped.

| Stage | Question | Studio mapping |
|-------|----------|----------------|
| **1. Intake** | What arrived, and is it enough to investigate? | Tracker item / Notion must-finish / owner start cue |
| **2. Triage / investigate** | Reproduce or clarify; classify size/risk; stop if unsupported | Day start: inventory `main`, read feature file, name assumptions; return findings without coding when already fixed |
| **3. Plan** | Approach, files, acceptance criteria, checks | FEATURE note / short plan when Standard+ or High risk; Lightweight may fold plan into build |
| **4. Human authorize (gate)** | May this plan/scope proceed? | Owner start-once for the day **or** explicit accept of a non-trivial plan; Candor on red-line asks |
| **5. Build** | Change + local proof | Exclusive checkout seat implements; vertical slices; tests |
| **6. Independent review** | Does the **diff** meet criteria without unacceptable fallout? | CI + CodeRabbit (or equivalent) — reviewer must not rely only on the builder’s story |
| **7. Human release decision** | Merge / revise / stop | Closeout merge rules; production stays manual when CD Phase C |
| **8. Done** | Outcome met (not just a PR merged) | Tracker Done + day page; FEATURE Done ≠ Released ≠ Outcome |

**Mastra’s six work categories** (signal, codegen, validation, release, docs, monitoring) map onto the same line over a product lifetime — early products may only run intake→build→review→done; monitoring/docs stages appear when those surfaces exist (proportional).

## Multi-agent rules on the line

1. **Specialization ≠ always parallel.** Roles (planner, builder, reviewer) are kinds of judgment. Run in parallel only when write scopes do not collide.

2. **One convergence owner.** The checked-out day seat (or assigned Story owner) reconciles evidence and delivers one coherent result — not “whoever finished last.”

3. **Acceptance criteria are the contract.** Planner writes them; builder satisfies them; independent reviewer judges the **diff + checks** against them verbatim. Verification engineering: author ≠ judge; evidence over narrative ([`verification-engineering.md`](verification-engineering.md)).

4. **Independent review.** Prefer a separate session/model/tool (CI, CodeRabbit) that sees the branch and criteria — not the builder’s private reasoning dump.

5. **Bounded revisions.** Fix review findings; after a small number of failed loops, escalate to the Board with unresolved evidence — do not infinite-retry token burn.

6. **Atomic checkout + one writer per path.** Same as studio-company; shared contracts serialize through the convergence owner.

7. **Handoffs are pointers.** Paths, SHAs, commands + outcomes, next action ([`context-window.md`](context-window.md)) — not transcript paste-bombs.

8. **Orchestrator does not replace the Board.** Humans keep product judgment, SECURITY/COMPLIANCE, and merge/release policy.

## Five factory components (Mastra shape → ours)

| Component | Ours |
|-----------|------|
| Input sources | Jira/Notion/Sentry/CI/owner cues |
| Agents / seats | `STUDIO_ORG` + day agent |
| Tools | Repo tools, tests, MCP — least privilege |
| Feedback loops | `08` closeout order; CI phases `09` |
| Outputs | PRs, evidence, day summary, Pareto + handoff, traces/logs when configured |

## Forbid

| Do not | Why |
|--------|-----|
| Vendor Mastra/Warp/eve as product constitution | Second OS; fights forever-generic playbook |
| Builder self-approves Done without CI/independent review | Capture; factory without a line |
| Skip triage into a High-risk money/PII change | Silent wrong build |
| Infinite revision loops | Cost + context overflow |
| Parallel agents on the same Story/day | Breaks atomic checkout |
| Claim “factory Done” when FEATURE Outcome is unmet | PR ≠ outcome |

## Day pipeline placement

At day start (`08`): goal + seat + checkout **and** name the factory stage you are in (usually triage→build for a scoped day; plan gate when Standard+/High risk). Closeout **is** stages 6–8. Judgment pairs with [`studio-company.md`](studio-company.md), [`04-FEATURE_SDLC.md`](../04-FEATURE_SDLC.md), [`09-CI-CD.md`](../09-CI-CD.md), SF-08 proportional depth.

## Related homes

- Seats: [`studio-company.md`](studio-company.md) · template `STUDIO_ORG.md`

- Day loop: [`08-IMPLEMENTATION-DAY.md`](../08-IMPLEMENTATION-DAY.md)

- Feature depth: [`04-FEATURE_SDLC.md`](../04-FEATURE_SDLC.md)

- Excellence: [`EXCELLENCE.md`](../EXCELLENCE.md)

## Factory.com absorb (judgment only — 2026-11-25)

Patterns from [Factory’s Software Factory](https://factory.com/product/software-factory). **Do not** vendor Droids, Factory SaaS, or their cookbooks as AGENTS / day SoT. Keep Jira/Notion/GitHub + this playbook’s day closeout.

### 1. Layers of a software factory (map to ours)

| Their layer | Portable meaning | Our home |
|-------------|------------------|----------|
| **Agents & orchestration** | Single seat → multi-step missions; optional scheduled automations | `08` day seat · [`delegation.md`](delegation.md) · CI recipes below |
| **Entry / triage** | Signals become owned goals; nothing starts mid-build | Intake + triage stages above · tracker / Notion must-finish |
| **Quality gates** | Automated validation; humans own judgment | CI `09` · CodeRabbit · [`verification-engineering.md`](verification-engineering.md) · [`human-code-review.md`](human-code-review.md) |
| **Ops & knowledge** | After merge: incidents, docs freshness, rollouts, outcome measurement | Product DEPLOYMENT / SECURITY · [`playbook-freshness.md`](playbook-freshness.md) · metrics below |
| **Foundation** | Model choice, where agents run, governance | [`ai-engineering.md`](ai-engineering.md) · product `docs/AI.md` · SECURITY · Candor |

### 2. Model routing (not one model forever)

No single model wins every axis. **Route the task** (plan vs codegen vs review vs security skim) to the tool/model that fits; adopt new models without rewriting the day pipeline. Pins and evals still live in product `docs/AI.md` + [`ai-engineering.md`](ai-engineering.md). Floating “whatever is newest” without a pin is a reliability bug.

### 3. Outcome metrics (measure delivered work, not tokens)

Lines, tokens, and “PRs opened” do not prove the factory works. Prefer product-level outcome signals when the team measures (record the **practice**, not vanity dashboards):

| Metric | Question |
|--------|----------|
| **Cycle time** | Signal → production (or → Done for the current phase) |
| **Autonomy ratio** | Share of merged work that needed no mid-flight human rewrite (honest; include review gates) |
| **Incident MTTR** | Alert → deployed fix (when ops exist) |
| **Code shelf life** | How long shipped code stays untouched (stability, not “never change”) |
| **Cost / merged PR** | Model+tool spend ÷ PRs that actually merged with green CI |

Use these in day/weekly review only when numbers exist. Do **not** invent fake case-study numbers in this playbook.

### 4. Trust before autonomy

Autonomy scales only with control:

- Least privilege; **secrets never in agent context** when avoidable
- Risk tiers per repo/change; validation gates before merge
- Command / tool allowlists where the harness supports them
- Auditable actions (PR, CI logs, tracker comments) — narrative “agent said Done” is not an audit trail
- Roll out readiness first (Phase A CI before Phase B/C CD — [`09-CI-CD.md`](../09-CI-CD.md))

### 5. Scheduled recipes (optional automations)

Factory lists recurring jobs (PR review bots, docs sync, lint autofix, license headers, matrix tests). Portable rule: **automate only what already has a clear gate and a human owner for exceptions**. Prefer GitHub Actions / existing CI over a second agent OS. Never let a nightly bot merge without the same independent review bar as a human day.

### Forbid (Factory.com-specific)

| Don’t | Do |
|-------|-----|
| Require Factory / Droids / AutoWiki as product SoT | Keep stages + seats + CI you already run |
| Paste vendor case-study numbers into README as if they were ours | Measure *your* cycle time / MTTR when you have data |
| Swap model pins mid-day without eval | Route + pin + golden eval ([`ai-engineering.md`](ai-engineering.md)) |
| Skip human judgment because “full SDLC agent” | Quality gates stay author≠judge |
