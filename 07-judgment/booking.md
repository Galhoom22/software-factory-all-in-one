# Judgment — booking and reservations

Absorb **booking / reservation** craft as **judgment only**. Map it onto product requirements, API contract, SECURITY / COMPLIANCE, FEATURE_SDLC (idempotency, state machines, money), and the day pipeline — never invent a second booking bible or bolt Livewire/admin UIs onto an SPA↔API product without an ADR.

**When this applies:** any product that reserves scarce capacity (hotel nights, appointments, seats, equipment, tables, time slots) — own inventory **or** supplier/OTA APIs. If the product has no booking surface, mark day checks **N/A**.

**Prefer these sources (re-check when advice conflicts):**

1. Product `requirements.md` / API contract / COMPLIANCE (cancellation, consumer, payments)
2. Sibling payments judgment [`payments.md`](payments.md) (webhook-first money; never confirm unpaid prepaid stays without a stated policy)
3. Inventory + hold + state-machine designs (room-night / slot capacity; short-lived holds; guarded transitions)
4. Supplier/OTA patterns: **recheck rate & availability immediately before commit**; client/external reference + idempotency keys; at-least-once webhooks with dedupe
5. Optional AI/travel tool wiring (e.g. [Nuitée Connect MCP](https://nuitee.com/connect/mcp-server)): sandbox first; same tools as production API; **never skip price lock / recheck** because an agent “already searched”

## Problem this prevents

Double bookings, charging without a reservation, confirming a stale price, leaking holds forever, timezone wrong check-in, cancelling under the wrong policy, and AI agents that book twice after a timeout. These destroy trust faster than almost any UI bug.

## Core model (keep forever-generic)

| Concept | Meaning |
|---------|---------|
| **Inventory unit** | What cannot be sold twice for the same interval (room-type×night, seat×show, slot×resource, SKU×date). Counters must reconcile to **physical** capacity (or an explicit overbooking policy with a walk/cost model — never silent). |
| **Quote** | Priced offer; **no** inventory claim until hold. |
| **Hold / prebook** | Short-lived exclusive claim (TTL). Server expires holds; UI may show a timer. |
| **Booking attempt** | Durable row **before** supplier/payment side effects; carries idempotency + external reference. |
| **Confirmed** | Honourable reservation; inventory moved from held → confirmed. |
| **Policy snapshot** | Cancellation / no-show / penalty terms **copied onto the booking at purchase time** — never re-looked-up only at cancel. |

## State machine (minimum)

Use an explicit lifecycle (names may vary):

`QUOTED → HELD → PENDING_PAYMENT (or PENDING_SUPPLIER) → CONFIRMED`

Terminal / recovery: `EXPIRED`, `PAYMENT_FAILED`, `CANCELLED`, `REFUNDED`, plus reconciliation states when **money and reservation disagree** (e.g. captured but not confirmed).

**Guarded transitions only:** `UPDATE … SET state = :to WHERE id = :id AND state = :from` (and version when needed). Zero rows updated → another actor won; stop — do not last-write-wins.

## Adopt (map onto existing docs)

| Practice | Pass when | Where |
|----------|-----------|--------|
| **Hold before pay (prepaid)** | Traveler is never charged for nights/slots that were not claimable | API + BE |
| **Recheck before commit** | Availability + price revalidated immediately before confirm; price-up → guest must accept or abort | API + FE |
| **Idempotency + external ref** | Create/cancel/refund keyed; retries return the same booking; supplier client reference stops duplicates after timeouts | API + BE |
| **Atomic inventory** | Hold/confirm/release for the full interval in one transaction (or equivalent CAS); search indexes are not the source of truth for decrement | BE |
| **TTL + expiry worker** | Holds expire server-side; payment arriving after expiry is rejected or requires a new hold — never silent confirm | BE jobs |
| **Timezone honesty** | Store property/local rules explicitly; display guest TZ carefully; “night” boundaries use property local date | API + FE |
| **Webhook / poll truth** | Supplier webhooks verified + deduped by event id; poll status after ambiguous failures; UI says “processing” until confirmed | BE + FE |
| **Cancel path** | Quote penalty → show guest → cancel with new idempotency key; refunds tracked separately from inventory release | API + payments |
| **Sandbox / fakes** | Local + CI use sandbox or fakes; no real supplier bookings in CI; no production keys in git | TESTING + CI |
| **AI / MCP agents** | If using travel MCP (e.g. Nuitée): sandbox key first; tools mirror official API; agent must run lock/recheck/book tools in order; treat tool errors as recoverable — never invent confirmation numbers | AI.md + BE |

## Forbid

| Forbid | Why |
|--------|-----|
| Confirming from search-cache counts alone | Double booking |
| Skipping price/availability recheck “to go faster” | Surprise charges / sold-out at confirm |
| Retrying create-booking without the same idempotency key **and** external reference after timeout | Duplicate supplier reservations |
| Showing “Confirmed” while status is processing / awaiting review | Deception (ethics + support hell) |
| Looking up today’s cancellation policy instead of the snapshot on the booking | Wrong penalties; compliance risk |
| Long DB transactions that hold locks across payment provider HTTP | Deadlocks / stuck inventory |
| AI assistant booking with production keys in demos / committing API keys | SECURITY |
| Silent overbooking without an explicit product decision + walk handling | Reputational + ethics |

## Professional bar (checklist)

Before calling a booking feature Done:

- [ ] Capacity model documented (what unit; overbooking yes/no)
- [ ] Hold TTL chosen and expiry job proven
- [ ] State transitions guarded; crash/reconciliation path named (pay≠book)
- [ ] Recheck-before-book proven with a price-change / sold-out test
- [ ] Idempotency + external reference proven (retry does not double-book)
- [ ] Cancel + policy snapshot + refund path proven
- [ ] Timezone cases covered (DST / property local)
- [ ] Payments sibling checklist still green when money moves ([`payments.md`](payments.md))
- [ ] No real PII in fixtures; sandbox only in CI

## Day workflow hook

When must-finish touches booking inventory, holds, confirm/cancel, supplier APIs, or travel MCP tools:

1. Open this file + [`payments.md`](payments.md) if money moves.
2. Prove recheck + idempotency + hold expiry (or N/A with reason).
3. Candor: refuse designs that skip holds, recheck, or idempotency — propose the safer scenario (D-82 / D-83).

Closeout day summary: cite booking proof (or **N/A — no booking surfaces**).

## Related homes

- [`payments.md`](payments.md) · [`compliance-ethics-risk.md`](compliance-ethics-risk.md) · [`api-readiness.md`](api-readiness.md)
- Method: [`08-IMPLEMENTATION-DAY.md`](../08-IMPLEMENTATION-DAY.md), [`04-FEATURE_SDLC.md`](../04-FEATURE_SDLC.md)
- Optional vendor example (not a required dependency): [Nuitée Connect MCP](https://nuitee.com/connect/mcp-server) — search → lock price → book → manage; sandbox before live
