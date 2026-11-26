# Judgment — integration engineering (any external connection)

Absorb **integration engineering** as **judgment only**: the craft of connecting systems, APIs, people, and knowledge so the **whole** works — especially at **interfaces**. Use this whenever an agent integrates with **anything** (payment provider, OAuth, email, storage, webhooks, AI vendor, sibling API, legacy SOAP, MCP tool, third-party SDK).

**Sources distilled (not dependencies):** [integration.engineering](https://integration.engineering/) (systems / interface / lifecycle framing); software API-contract and agent-integration practice (adapters, idempotency, retries, fallbacks). Do **not** vendor NEDION cubes, railway case libraries, or a maturity-model product into the factory.

**When this applies:** must-finish touches an **external or cross-boundary** dependency (HTTP partner, webhook, queue consumer of foreign events, OAuth, file/object store, email/SMS, AI provider, browser MCP, another deployable). Pure in-process refactors with no new boundary: **N/A**.

## Problem this prevents

Integrations fail at **boundaries**, not inside the happy-path SDK call: unclear system-of-record, silent breaking changes, retries that double-charge, no fallback when the partner is down, secrets in the client, docs that drift from reality, and “it talks” mistaken for “it is integrated.” Interoperability (bytes flow) is **not** the same as integration (coherent behavior under failure, ops, and change).

**Target:** every integration has a named interface, owned semantics, safe failure/retry story, evidence, and a way to learn when production disagrees.

## Core ideas (systems + software)

| Idea | Agent meaning |
|------|----------------|
| **Boundaries first** | Name what is inside our system vs the partner vs shared |
| **Interfaces are where it breaks** | Inventory technical, data, auth, org, and ops interfaces for this change |
| **Interoperability ≠ integration** | A 200 OK is not Done — semantics, failures, and lifecycle must cohere |
| **Lifecycle** | Design for operate/monitor/rotate/deprecate — not only first connect |
| **Knowledge stays traceable** | Contract + ADR/decision + official docs date; no tribal-only wiring |
| **Adapter over bleed** | Isolate partner protocols behind a narrow house interface |
| **Author ≠ partner** | We do not control their uptime; plan fallbacks and kill switches |

Domain packs still win for money/booking/AI: [`payments.md`](payments.md), [`booking.md`](booking.md), [`ai-system-design.md`](ai-system-design.md), [`ai-engineering.md`](ai-engineering.md), [`api-design.md`](api-design.md), [`cross-surface-compatibility.md`](cross-surface-compatibility.md).

## Integration checklist (any partner)

Run before coding and again before Done:

1. **Purpose & SoR** — What user/job does this enable? Which system is **source of truth** for each entity?
2. **Interface inventory** — Protocol (REST/webhook/SDK/MCP), auth, environments (sandbox/prod), data fields in/out, who initiates.
3. **Contract** — Machine-readable or documented surface: operations, states **with meaning**, error taxonomy, versioning/deprecation. Prefer official partner docs + Context7 this session ([`context7-docs.md`](context7-docs.md)).
4. **Adapter** — One module/client owns mapping; product code talks to our interface, not raw partner shapes everywhere.
5. **Auth & secrets** — Server-only credentials; rotate path; least privilege; never `NEXT_PUBLIC_` for secrets.
6. **Idempotency & unknown** — State-changing calls: idempotency key (or equivalent); timeouts are **unknown**, not automatic failure ([`enterprise-system-design.md`](enterprise-system-design.md)).
7. **Retries** — Only retryable error classes; bounded backoff; same key after ambiguous timeout; no blind hammering.
8. **Webhooks / async** — Verify signatures; dedupe by event id; reconcile with poll/status when delivery is at-least-once.
9. **Fallback / degrade** — What happens when the partner is down? Feature flag or clear user error — not silent corruption.
10. **Observability** — Correlate our request id with partner ids; log safe metadata (no secrets/PII dumps).
11. **Test evidence** — Sandbox or fake in CI; contract/integration test for the critical path; staging smoke when phase requires ([`verification-engineering.md`](verification-engineering.md)).
12. **Change control** — Breaking partner or house-API changes need version story + consumer note (sibling/FE handoff).

## Day workflow hook

1. **Day start** — If must-finish names a vendor/integration, open this file + the matching domain judgment (payments/booking/AI/…).
2. **Design** — Fill the checklist mentally (or in the feature file Integration section); record open assumptions.
3. **Build** — Adapter + contract tests; Context7/official docs for the partner SDK line.
4. **Before Done** — Evidence for happy path **and** at least one failure/retry/idempotency case (or honest N/A).
5. **Day summary** — Note **integration** partners touched + evidence pointers (or N/A).

## How this relates to existing homes

| Home | Role |
|------|------|
| [`api-design.md`](api-design.md) / `API_CONTRACT` | House HTTP shape we publish |
| [`cross-surface-compatibility.md`](cross-surface-compatibility.md) | FE↔BE↔services honesty |
| [`payments.md`](payments.md) / [`booking.md`](booking.md) | Money and inventory specifics |
| [`packages.md`](packages.md) | Prefer verified SDKs over DIY protocols |
| [`enterprise-system-design.md`](enterprise-system-design.md) | Unknown outcomes, practice levels |
| FEATURE Integration gate | Traceability of external deps |

## Anti-patterns

| Do not | Why |
|--------|-----|
| “SDK installed = integrated” | Missing failure, ops, SoR |
| Copy partner types through every layer | Bleed; upgrade tax |
| Retry POST without idempotency | Duplicate money/side effects |
| Skip webhook verification “in staging forever” | Habit leaks to prod |
| Vendor NEDION maturity worksheets into every product | Judgment only |
| Edit the sibling repo to “make integration pass” without seat rights | Ownership ([`cross-surface-compatibility.md`](cross-surface-compatibility.md)) |

## Professional bar (checklist)

- [ ] Partner + SoR + environments named
- [ ] Adapter boundary exists (or justified thin call site)
- [ ] Errors/retries/idempotency documented in code or contract
- [ ] Secrets stay server-side; official docs checked this session
- [ ] Evidence for success + failure/unknown path (or N/A)
- [ ] Day summary records the integration or N/A

## Related homes

- Method: [`08-IMPLEMENTATION-DAY.md`](../08-IMPLEMENTATION-DAY.md) · [`04-FEATURE_SDLC.md`](../04-FEATURE_SDLC.md) Integration  
- Platform: [integration.engineering](https://integration.engineering/) (conceptual; not a required toolchain)
