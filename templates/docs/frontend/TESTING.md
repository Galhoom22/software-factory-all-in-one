# Frontend Testing Guide

> ⚠️ **Planning only.** Implementation lives in the frontend repository.

**Own the UI tests.** Backend tests live in `docs/backend/TESTING.md`. Do not re-test server business rules in the browser.

| Field | Value |
|-------|-------|
| Document | Frontend Testing Guide |
| Status | Draft |
| Related | API contract, SRS NFRs for CI/a11y, SECURITY Every Page Checklist |

## 1. Principles

1. Test what the user sees and what the client decides (states, locale, contract error handling).
2. Prefer unit/component tests; keep E2E to a short critical list.
3. Mock the API on every PR; full-stack smoke is staging/release.
4. Accessibility is a gate (axe on critical journeys).
5. Depth follows `playbook/04-FEATURE_SDLC.md` profiles — not coverage %.

## 2. Tooling

<!-- Fill with verified versions in SRS §2 when the FE repo is created. -->

| Tool | Role |
|------|------|
| Unit / component runner | e.g. Vitest + Testing Library |
| E2E | e.g. Playwright + axe |
| Static | Lint, typecheck, secret scan |

## 3. Mandatory safety net

| Area | Minimum |
|------|---------|
| API error mapping | Important contract error codes → correct UI |
| Auth gate | Protected routes redirect when signed out |
| High-risk widgets | Interactive flows that can lose data or money |
| Billing UI | Full price + renewal shown before CTA; cancel path reachable; never treat thank-you query params as paid proof |
| Critical E2E | Short journey list in each supported locale |
| axe | No critical/serious on those journeys |

## 4. Per-feature matrix

| Feature | Unit / component | E2E |
|---------|------------------|-----|
| <!-- F-xx --> | | |

## 5. Deferred tooling

Visual regression CI, Pact, exhaustive E2E of every screen state — unless a real failure forces them.

## 6. CI

Lint, typecheck, unit/component, critical Playwright, secret scan on every PR.
