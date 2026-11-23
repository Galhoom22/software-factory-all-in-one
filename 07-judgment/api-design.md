# Judgment — API design (consumer-first REST craft)

Absorb **API design** craft as **judgment only**. Map it onto planning `API_CONTRACT.md`, SECURITY, FEATURE Design/Integration gates, and the day pipeline — never vendor a course PDF, SOAP/gRPC tutorial tree, or a second OpenAPI bible beside the contract.

**When this applies:** any day that **adds or changes** HTTP endpoints, error codes, auth headers, resource shapes, or versioning rules. Pure internal refactors with no contract change: mark **N/A**.

Pairs with:
- [`api-readiness.md`](api-readiness.md) — environments / CI / smoke (ship readiness)
- [`cross-surface-compatibility.md`](cross-surface-compatibility.md) — sibling consumers (integration honesty)

This file is the **design bar** (how the interface should look and behave for humans and clients).

## Problem this prevents

APIs that are “correct” in code but hostile to consumers: RPC verbs in paths, wrong HTTP method semantics (unsafe GET, non-idempotent PUT), vague errors without stable `code`s, docs that drift from reality, breaking changes without a version story, and security theater (passwords in headers, Digest/Basic as “good enough”). Joint FE/BE testing then fails late.

## Adopt (map onto existing docs)

| Practice | Pass when | Where |
|----------|-----------|--------|
| **Consumer-first** | Before new endpoints, name who consumes them and which **tasks** they complete (not “expose the table”) | Contract § + Design note |
| **API as UI** | Paths, fields, and errors are scannable; a new developer can call the happy path from the contract alone | `API_CONTRACT` + mocks |
| **Resource orientation** | Collections are plural nouns; IDs in the path; nesting only when ownership is real (avoid deep `/a/{id}/b/{id}/c/...` trees) | Contract paths |
| **HTTP method semantics** | GET/HEAD **safe**; PUT/DELETE **idempotent**; POST for non-idempotent creates; PATCH for partial updates — matches what the server actually does | Contract + BE tests |
| **Status + stable error `code`** | Success/error status codes match intent; machine-readable `code` strings; messages never leak PII or stack traces | Contract § Errors + SECURITY |
| **Content-Type honesty** | Requests/responses declare the media type the handler actually parses; no “JSON body with form Content-Type” | BE validation |
| **Idempotency where earned** | Money, queue starts, checkouts, and other unsafe retries take an idempotency key (or equivalent) as the product already requires | Contract + payments/booking |
| **Versioning honesty** | Additive fields OK (consumers ignore unknown); breaking changes need a new major (`/api/v2`) or a coordinated dual-seat release | Contract § Versioning |
| **Docs = the agreement** | Contract (and any published docs) stay **current the same day** as the change; “Getting started” examples use fictional data only | Contract + day summary |
| **Authn ≠ authz** | Authentication proves identity; authorization proves permission — every mutating route has an owner check | SECURITY + BE TESTING |
| **Protocol choice via ADR** | REST vs GraphQL vs gRPC is a **stack/ADR** decision from requirements — not fashion mid-Story | [`stack-selection.md`](stack-selection.md) + DECISIONS |

### OpenAPI / Swagger (optional)

OpenAPI may be **generated from** or kept as a **view of** the planning contract for interactive try-outs. It is **never** a second source of truth. Dual-editing contract + OpenAPI by hand is forbidden (drift).

### Hypermedia / HATEOAS (optional, rarely earned)

Useful for highly generic clients discovering actions at runtime. For a first-party SPA/mobile that already knows routes from the contract, **do not** require HATEOAS envelopes. Prefer stable paths + error codes. If a product truly needs hypermedia, pin it in an ADR — never as silent default.

## Forbid

| Forbid | Why |
|--------|-----|
| Designing endpoints as a dump of DB tables / internal module names | Leaks internals; breaks when schema moves |
| Unsafe GET/HEAD (mutations, credit spend, sends mail) | Breaks caches, crawlers, retries |
| Treating Digest Access / Basic-over-HTTP as production auth for modern SPAs | Weak or obsolete vs cookie sessions / OAuth / current stack pin |
| Requiring HATEOAS on every JSON API “because REST maturity level 3” | Over-engineering for owned clients |
| Hand-maintaining OpenAPI **and** `API_CONTRACT.md` as twin SoTs | Silent drift |
| Shipping breaking JSON without version bump or paired consumer Stories | Cross-surface failure |
| Putting PII or secrets in error bodies, logs, or example docs | COMPLIANCE / SECURITY |
| Dumping OSI/SOAP/course slides into the repo as AGENTS | Judgment only; forever-generic |

## Professional bar (checklist)

Before Done on a Story that changes the HTTP surface:

- [ ] Consumers + tasks named (or N/A — internal-only, no new surface)
- [ ] Paths are resource-oriented; methods match safe/idempotent semantics
- [ ] Error table covers the new failure modes with stable `code`s
- [ ] Authn/authz and owner scoping proven in tests
- [ ] Contract updated **first**; sibling notified (cross-surface judgment)
- [ ] Examples/mocks fictional; no real PII
- [ ] Versioning rule respected (additive vs breaking)
- [ ] API readiness still green ([`api-readiness.md`](api-readiness.md))

## Day workflow hook

When must-finish adds/changes endpoints or contract shapes:

1. Open this file + product `API_CONTRACT.md` + [`api-readiness.md`](api-readiness.md) + [`cross-surface-compatibility.md`](cross-surface-compatibility.md).
2. Apply the design bar **before** coding the handler.
3. Cite design evidence in the day summary (or **N/A — no HTTP surface change**).
4. Candor: refuse “just expose the model” designs — propose resource + task-shaped endpoints (D-82).

## Related homes

- Method: [`08-IMPLEMENTATION-DAY.md`](../08-IMPLEMENTATION-DAY.md) (API readiness gate includes this design bar)
- Templates: `templates/docs/API_CONTRACT.md`, `templates/docs/SECURITY.md`, BE `TESTING.md`
- Lessons: prefer one transferable bullet over course dumps in [`06-LESSONS.md`](../06-LESSONS.md)
