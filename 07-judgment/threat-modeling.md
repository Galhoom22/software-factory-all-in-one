# Judgment — threat modeling (lightweight, per change)

Absorb **threat modeling** as a short design step, not a document genre. It answers four questions before controls are chosen, so security work targets real abuse instead of a generic checklist. Use this when a change carries material security or privacy risk — the FEATURE_SDLC "Threat modeling" module ([`04-FEATURE_SDLC.md`](../04-FEATURE_SDLC.md)) points here.

**When this applies:** a new or changed trust boundary — authentication or sessions, authorization rules, uploads, webhooks, payments, personal data, admin surfaces, AI tools with side effects, a new external partner, or a new public endpoint. A copy change or a refactor that keeps every boundary: **N/A**.

**Pairs with:** product `docs/SECURITY.md` (red lines and Every Page Checklist) · [`enterprise-system-design.md`](enterprise-system-design.md) (six boundary questions on consequential writes) · [`ai-system-design.md`](ai-system-design.md) (untrusted text) · [`integration-engineering.md`](integration-engineering.md) · [`ci-hardening.md`](ci-hardening.md) (the pipeline is a boundary too).

---

## Problem this prevents

Teams either skip threat modeling ("we use a framework") or produce a large diagram nobody updates. Both end the same way: controls are chosen by habit, the one abuse case that matters (the IDOR on an export, the webhook nobody verifies, the upload that is served back as HTML) is never named, and review cannot tell whether the change is safe.

## The four questions

| # | Question | Output (a few lines, in the PR or the feature evidence) |
|---|----------|----------------------------------------------------------|
| 1 | **What are we working on?** | The data flow in one sentence or a five-box sketch: actors, entry points, stores, external parties. Mark each **trust boundary** — anywhere data or control crosses between trust levels, in either direction: input arriving from a less-trusted party, and data leaving to one (personal data sent to a partner, logs shipped to a vendor, text sent to a model provider). |
| 2 | **What can go wrong?** | For each boundary the change touches, walk STRIDE (below) and keep only the threats that are plausible here. Write at least one concrete **abuse case** ("a signed-in user changes the id in the export URL and downloads another account's file"). |
| 3 | **What are we going to do about it?** | One response per kept threat: mitigate (name the control and where it lives), eliminate (remove the feature or the data), transfer (a provider owns it, with the contract named) or accept (owner-approved, recorded as a risk). |
| 4 | **Did we do a good enough job?** | Each mitigation has evidence: a test that tries the abuse case, a config check, a review note. Unverified mitigations are open risks, not Done. |

## STRIDE lens (per boundary)

| Threat | Ask | Typical control |
|--------|-----|-----------------|
| **S**poofing | Can someone act as another user, service or webhook sender? | Authentication; signed webhooks with timestamp; mutual auth between services |
| **T**ampering | Can input, a stored record or a message be changed in transit or at rest by the wrong party? | Server-side validation; integrity checks; authorization on every write |
| **R**epudiation | Could an actor deny a consequential action and we cannot show otherwise? | Append-only audit entries for consequential writes (who, what, when, from where) |
| **I**nformation disclosure | Can data reach someone not entitled to it — through responses, logs, errors, caches, AI prompts? | Object-level authorization; field allowlists in responses; redaction in logs and model input |
| **D**enial of service | Can one actor exhaust a shared resource — requests, queue, storage, model spend? | Rate limits; size limits; timeouts; spend caps |
| **E**levation of privilege | Can a lower role reach a higher role's action, or can untrusted text gain tool authority? | Role checks at the boundary (not only in the UI); least-privilege tokens; AI admission rules |

## Depth by risk (proportional — SF-08)

| Risk | Depth |
|------|-------|
| Low boundary change (a new read-only field behind existing auth) | Questions 1–2 in two lines; confirm the existing control covers it |
| Material (new endpoint, upload, webhook, role, export) | All four questions; one abuse-case test per kept threat |
| High (money, personal data at scale, AI with side effects, admin power) | All four questions; abuse-case tests; a reviewer other than the builder signs off on the threat list itself; product `docs/SECURITY.md` updated if a new red line emerges |

## Day workflow hook

At day design, if the trigger applies, write the four answers into the slice's evidence (implementation repository `docs/features/…` per FEATURE_SDLC, or the PR body). At closeout, the reviewer checks the abuse-case tests exist and pass. A threat that cannot be mitigated today is an explicit open risk with an owner, never a silent gap.

## Anti-patterns

| Anti-pattern | Do instead |
|--------------|------------|
| A full-system diagram that is never updated | Model only the boundaries this change touches; keep the sketch next to the change |
| Listing all six STRIDE letters for every box | Keep plausible threats only; empty is fine when argued |
| "The framework handles security" | Name which framework control covers which threat, and test the abuse case |
| Controls without evidence | Each mitigation points to a test, config or review note |
| Threat model as a gate only security people can pass | Any engineer answers the four questions; depth grows with risk |

## Sources (checked 2026-11-28)

- OWASP — [Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html) (four questions; STRIDE categories).
- OWASP Gen AI Security Project — [Top 10 for LLM applications](https://genai.owasp.org/llm-top-10/) (prompt injection, supply chain, excessive agency) for AI boundaries.
- Distilled from the MIT-licensed community collection [github/awesome-copilot](https://github.com/github/awesome-copilot) (`threat-model-analyst` skill) — ideas only, original prose.
