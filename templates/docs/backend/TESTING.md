# Backend Testing Guide

> ⚠️ **Planning only.** Implementation lives in the backend repository.

**Own the API and domain tests.** Frontend tests live in `docs/frontend/TESTING.md`. Browser E2E is not your job.

| Field | Value |
|-------|-------|
| Document | Backend Testing Guide |
| Status | Draft |
| Related | API contract, SRS NFRs for tests/CI, SECURITY, COMPLIANCE |

## 1. Principles

1. Test behavior that can lose money, leak data, invent facts, or break authorization.
2. Feature (HTTP) tests are the default; unit tests for pure domain math.
3. Fake external providers (AI, payments, mail, embeddings) in CI. If a real provider sandbox is required, use a **CI-only** sandbox separate from local developer sandboxes.
4. SPA cookie-auth feature tests use the stateful/session harness the product actually ships — not bearer-only assumptions.
5. Coverage % is a signal, not a merge goal.
6. Depth follows `software-factory-all-in-one/04-FEATURE_SDLC.md` profiles; never weaken security tests for “Lightweight.”

## 2. Tooling

<!-- Fill with verified versions in SRS §2 when the BE repo is created. -->

| Tool | Role |
|------|------|
| Runner | Framework-native (e.g. Pest or PHPUnit) |
| HTTP Feature tests | Contract shapes, authz, validation, limits |
| Fakes | AI SDK, HTTP client, notifications, queues |
| Static | Formatter, static analysis, secret scan |

## 3. Mandatory safety net

| Area | Minimum |
|------|---------|
| Object-level auth | Foreign IDs cannot read/write another user’s resources |
| Privacy / AI | Outbound payloads have no direct identifiers (if the product uses AI) |
| Money / limits | Plan, credits, webhooks, idempotency as applicable |
| Payments / webhooks | Bad signature → reject; duplicate event id → no double entitlement; success URL without webhook → no upgrade; sandbox/fake only (never live keys) |
| Queue + DB | Job that loads a row created in the same request: prove dispatch-after-commit (sync queue must not race uncommitted rows) |
| AI output | Fabrication guards (length / identity / numerics) + consent gate; suggestions do not mutate source records |
| Authz | Second-user foreign ID → `404 not_found` JSON (not 403) |
| Auth | Password and session rules from SECURITY |

## 4. Per-feature matrix

| Feature | Unit | Feature / job |
|---------|------|---------------|
| <!-- F-xx --> | | |

## 5. Deferred tooling

Mutation testing, load suites in CI, browser E2E in the backend repo — unless needed.

## 6. CI

Formatter, static analysis, full test suite, secret scan on every PR.

## Algorithmic / hot-path performance

When a change can grow with data (lists, search/match, export, heavy queries), require a short DSA check: expected `n`, Time/Space class, structure choice, edge cases. Treat N+1 / unbounded loads / nested O(n²+) in the request path as failures. Judgment: `software-factory-all-in-one/07-judgment/dsa-performance.md`.

## 7. API readiness (environments)

Local HTTP green is **not** enough to hand an API to frontend or call it production-ready. Judgment: `software-factory-all-in-one/07-judgment/api-readiness.md`.

| Layer | Proof | Owner |
|-------|-------|-------|
| Contract parity | Touched routes/errors/shapes match planning `API_CONTRACT.md` (update contract first if the shape changed) | BE (+ FE notified) |
| Local | Feature/HTTP tests for today’s surfaces; mandatory safety net still green | BE |
| CI | Same suite on GitHub Actions (clean runner) | BE |
| Staging | After deploy: health + critical-path smoke from `backend/DEPLOYMENT.md` | BE (Phase B+) |
| Production | Same smoke on approved release only — never real PII | BE (Phase C release) |
| FE handoff | Status codes, auth/cookie needs, and error codes documented; fictional examples only | BE |

**Day Done bar:** contract + local + CI. Add staging smoke when CD Phase B+ exists. Do not claim production API verified on a normal day merge.
