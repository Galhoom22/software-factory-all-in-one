# Frontend Testing Guide

> ⚠️ **Planning only.** Implementation lives in the frontend repository.

**Own the UI tests.** Backend tests live in `docs/backend/TESTING.md`. Do not re-test server business rules in the browser.

| Field | Value |
|-------|-------|
| Document | Frontend Testing Guide |
| Status | Draft |
| Related | API contract, SRS NFRs for CI/a11y, SECURITY Every Page Checklist |

## 1. Principles

1. Test what the user sees and what the client decides (states, locale, contract error handling) — not implementation details (CSS class soup, internal function names).
2. Prefer unit/component tests; keep E2E to a **short critical list** (typically 3–6 journeys). Coverage % is a signal, not the goal.
3. Mock the API on every PR (`page.route`, MSW, or stub server). Full-stack smoke is staging/release — never a live sibling API on PR CI.
4. Accessibility is a gate: `@axe-core/playwright` on critical journeys (no critical/serious). Automated axe does not replace keyboard/manual checks.
5. Depth follows `software-factory-all-in-one/04-FEATURE_SDLC.md` profiles — never weaken security or a11y for “Lightweight.”
6. Playwright judgment: planning playbook `07-judgment/playwright-e2e.md` (official intro / best practices / CI / a11y distilled).

## 2. Tooling

<!-- Fill with verified versions in SRS §2 when the FE repo is created. Pin from the registry, not memory. -->

| Tool | Role |
|------|------|
| Unit / component runner | e.g. Vitest + Testing Library |
| E2E | Playwright (`@playwright/test`) + `@axe-core/playwright` |
| Static | Lint, typecheck (`tsc --noEmit`), secret scan |

Suggested layout in the FE repo: `e2e/` (or `tests/e2e/`) + `playwright.config.ts` with `webServer` booting the app for E2E.

## 3. Playwright quality rails (when E2E exists)

| Rule | Practice |
|------|----------|
| Locators | Prefer `getByRole` / `getByLabel` / `getByText` / `getByTestId`; chain/filter; avoid brittle CSS/XPath |
| Assertions | Web-first: `await expect(locator).toBeVisible()`; never `expect(await locator.isVisible()).toBe(true)` |
| Isolation | Each test owns its storage/cookies; use `beforeEach` or a setup project for signed-in state — do not chain tests |
| Network | Mock third parties and API contract shapes; do not assert on sites you do not control |
| Axe | Wait for the UI state, then `AxeBuilder.analyze()`; tag WCAG A/AA when the product requires AA; fixture for shared config |
| Debug | Local: UI Mode / `--debug` / VS Code extension; CI: HTML report artifact + **trace on first retry** (not `trace: on` every run) |
| Browsers on PR | Install only what CI needs (often Chromium only); broader matrix on schedule/release if justified |
| Secrets | Treat reports/traces like secrets — no credentials in fixtures uploaded to untrusted stores |
| Keep current | Upgrade Playwright with browser install (`npx playwright install --with-deps`) when the pin moves |

## 4. Mandatory safety net

| Area | Minimum |
|------|---------|
| API error mapping | Important contract error codes → correct UI |
| Auth gate | Protected routes redirect when signed out |
| High-risk widgets | Interactive flows that can lose data or money |
| Billing UI | Full price + renewal shown before CTA; cancel path reachable; never treat thank-you query params as paid proof |
| Critical E2E | Short journey list in each supported locale |
| axe | No critical/serious on those journeys |

## 5. Per-feature matrix

| Feature | Unit / component | E2E |
|---------|------------------|-----|
| <!-- F-xx --> | | |

## 6. Deferred tooling

Visual regression CI, Pact, exhaustive E2E of every screen state, full multi-browser matrix on every PR — unless a real failure forces them.

## 7. CI

Lint, typecheck, unit/component, **critical Playwright** (when enabled), secret scan on every PR. Upload `playwright-report/` on failure/cancelled. Method: playbook `09-CI-CD.md` + `07-judgment/playwright-e2e.md`.

## Algorithmic / hot-path performance

When a change can grow with data (lists, search/match, export, heavy queries), require a short DSA check: expected `n`, Time/Space class, structure choice, edge cases. Treat N+1 / unbounded loads / nested O(n²+) in the request path as failures. Judgment: `software-factory-all-in-one/07-judgment/dsa-performance.md`.
