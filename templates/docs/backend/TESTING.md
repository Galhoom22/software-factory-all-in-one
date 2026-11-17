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
3. Fake external providers (AI, payments, mail) in CI. If a real provider sandbox is required, use a **CI-only** sandbox separate from local developer sandboxes.
4. Coverage % is a signal, not a merge goal.
5. Depth follows `playbook/04-FEATURE_SDLC.md` profiles; never weaken security tests for “Lightweight.”

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
| Auth | Password and session rules from SECURITY |

## 4. Per-feature matrix

| Feature | Unit | Feature / job |
|---------|------|---------------|
| <!-- F-xx --> | | |

## 5. Deferred tooling

Mutation testing, load suites in CI, browser E2E in the backend repo — unless needed.

## 6. CI

Formatter, static analysis, full test suite, secret scan on every PR.
