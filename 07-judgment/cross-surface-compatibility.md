# Judgment — cross-surface compatibility (FE ↔ BE ↔ services)

Absorb **integration honesty** as **judgment only**. Map it onto the day pipeline, planning `API_CONTRACT` (or equivalent shared interface), FEATURE Integration gate, and each implementation repo’s `docs/SIBLING.md` — never invent a second “integration squad” process or edit a seat you do not own.

**When this applies:** any product with more than one deployable or package boundary — separate frontend/backend repos, a monorepo with apps/packages, or multiple services. If the product is a single surface with no consumer elsewhere, mark day checks **N/A**.

## Problem this prevents

One side ships a “correct” change that the other side cannot consume: renamed fields, new required headers, status codes the UI never handles, auth cookie/CORS drift, event schemas that break a worker, or a microservice that assumes a payload the producer never sends. Manual joint testing then fails late — after both owners thought they were Done.

**Local green on your seat alone is not product-ready.** Compatibility with every consumer/producer you touch is part of Done.

## Topology (keep forever-generic)

| Shape | Shared interface | Typical “other surface” |
|-------|------------------|-------------------------|
| Separate FE + BE repos | Planning `API_CONTRACT.md` (HTTP/JSON, errors, auth) | Sibling UI or API repo |
| Monorepo (apps + packages) | Published package types / OpenAPI / contract module | Other app or shared package |
| Microservices | Versioned events/APIs between services | Upstream/downstream service |
| Mobile + API | Same contract (or mobile-specific slice of it) | API seat |

Always identify **owned seat** vs **read-only sibling surface(s)** for this chat. Product `docs/OWNER_STANDING.md` / `STUDIO_ORG.md` name who may write where.

## Adopt (wire into the day)

| Check | Pass when | Where |
|-------|-----------|--------|
| **Surface map** | Before coding, name every consumer/producer of the change (UI feature, sibling service, worker, webhook partner) | Day start / Design |
| **Contract first** | Shared interface updated in planning (or the monorepo contract package) **before** dual implementation; sibling owner notified when shapes change | Before PR |
| **Read sibling, don’t guess** | Open the sibling’s client/types/mocks/docs (or event consumers) and confirm expected paths, fields, error codes, headers/cookies | During implementation |
| **Seat write boundary** | Edit **only** the repo/package this seat owns; sibling trees are **read-only** unless standing explicitly assigns that seat write access | Always |
| **Parity proof** | Day’s surfaces match the contract; feature/HTTP (or contract) tests cover the shapes the sibling will call | Before Done |
| **Honest FE/service handoff** | Day summary states what the sibling can integrate now, what is still blocked, and the pairing tracker keys | Closeout |
| **Breaking change ritual** | Breaking rename/remove → contract ADR/change note + paired Story on the other seat; never “they’ll notice” | Same session |

Pairs with [`api-readiness.md`](api-readiness.md) (env/CI/smoke for APIs) — this judgment is the **sibling/consumer** half; API readiness is the **environment** half.

## Forbid

| Forbid | Why |
|--------|-----|
| Shipping a contract-breaking API/event without updating the shared contract and notifying the sibling seat | Silent 4xx/5xx / empty UI |
| Editing the sibling repo “to make integration pass” when that seat is not yours | Ownership collision; review/CI on the wrong side |
| Inventing fields the sibling already uses under different names “for convenience” | Drift; double maintenance |
| Claiming Done because only *this* repo’s tests are green while the consumer still expects the old shape | False Done |
| Skipping sibling read when the change is “backend-only” but returns new JSON the UI must render | Integration failure at joint test |
| Using live sibling staging with real PII to “check compatibility” | COMPLIANCE / SECURITY |

## Professional bar (checklist)

Before calling a cross-surface Story Done on your seat:

- [ ] Consumers/producers of today’s change are named (or **N/A — single surface**)
- [ ] Shared contract / interface matches what this seat ships
- [ ] Sibling client, mocks, types, or consumer code was **read** (pointer cited) when a consumer exists
- [ ] No writes outside the owned seat (unless standing allows)
- [ ] Error codes / auth / idempotency headers the sibling relies on still hold
- [ ] Handoff note: sibling can integrate **now** / **blocked on** …
- [ ] API readiness still green when this seat owns HTTP ([`api-readiness.md`](api-readiness.md))

## Day workflow hook

When must-finish touches a shared API, contract field, auth cookie/CORS, event schema, or any payload another surface consumes:

1. Open this file + product `docs/SIBLING.md` (each impl repo) + planning contract.
2. **Read** the sibling surface for current expectations; **do not write** there unless this seat owns it.
3. Prove contract parity + local/CI proof; cite compatibility evidence in the day summary (or **N/A — no other surface**).
4. Candor: refuse “ship now, tell the other side later” for breaking changes — propose contract-first + paired Story (D-82).

Closeout day summary: cite **cross-surface compatibility** evidence (surfaces checked + contract IDs + handoff note) or **N/A**.

## Related homes

- [`api-readiness.md`](api-readiness.md) · [`software-factory.md`](software-factory.md) · [`studio-company.md`](studio-company.md)
- Method: [`08-IMPLEMENTATION-DAY.md`](../08-IMPLEMENTATION-DAY.md), [`04-FEATURE_SDLC.md`](../04-FEATURE_SDLC.md) Integration gate
- Templates: `templates/docs/SIBLING.md`, `templates/docs/API_CONTRACT.md`, FE/BE `README.md` “Working with …”
