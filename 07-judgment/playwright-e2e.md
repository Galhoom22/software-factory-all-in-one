# Judgment — Playwright E2E (browser quality)

Absorb **Playwright official guidance** (intro, best practices, CI, accessibility) as judgment for frontend implementation repos. Do **not** paste the full docs tree, require every browser on every PR, or grow a flaky mega-suite that clicks every screen.

Upstream (human reading / agent Context7): [playwright.dev/docs/intro](https://playwright.dev/docs/intro), [best-practices](https://playwright.dev/docs/best-practices), [ci-intro](https://playwright.dev/docs/ci-intro), [accessibility-testing](https://playwright.dev/docs/accessibility-testing). Pin `@playwright/test` from the registry when the FE repo starts; re-verify Node LTS against Playwright’s system requirements.

## Adopt (map onto existing docs)

| Idea | Lands in |
|------|----------|
| Short critical E2E list; unit/component for most logic | `docs/frontend/TESTING.md` · FEATURE_SDLC verification |
| User-visible behavior only; role/text/test-id locators; web-first assertions (`await expect(…).toBeVisible()`) | FE TESTING · CodeRabbit FE guidelines |
| Isolated tests (own storage/cookies); mock third-party and API via `page.route` / stub server on PRs | FE TESTING · `09-CI-CD.md` |
| axe via `@axe-core/playwright` on critical journeys; WCAG A/AA tags when product requires AA | FE TESTING · COMPLIANCE accessibility |
| Trace on **first CI retry** (not every run); HTML report artifact; `npx playwright show-report` | FE CI workflow · day closeout evidence |
| Install only browsers CI needs (`npx playwright install chromium --with-deps` when Chromium-only on PRs) | `templates/implementation/github-actions/frontend-ci.yml` |
| `webServer` in config to boot the app for E2E; TypeScript specs; lint no floating promises | FE repo scaffold |
| Codegen / UI Mode / VS Code extension for writing locators — humans and agents | FE local docs · prompts |
| Keep Playwright current (`@latest` + `npx playwright install --with-deps` when upgrading) | SRS §2 · Dependabot |

## Forbid

| Do not | Why |
|--------|-----|
| Exhaustive E2E of every prototype `?state=` on every PR | Slow, flaky; prototype crawl owns that in planning |
| Live backend required for every PR E2E | CI must stay fast; mock API; full-stack is staging |
| CSS/XPath-first locators tied to class soup | Brittle when design moves |
| Manual `expect(await locator.isVisible()).toBe(true)` without web-first expect | No auto-wait → flakes |
| Trace `on` for every test in CI | Heavy; use `on-first-retry` |
| Upload traces/reports that embed secrets to untrusted stores | Treat artifacts like secrets ([CI secrets note](https://playwright.dev/docs/ci-intro)) |
| Claim “a11y Done” from axe alone | Automated axe ≠ full WCAG; keep manual / crawl gates |

## Professional bar (checklist)

Before claiming an FE E2E slice Done:

1. Journey list still short and named in TESTING.md?
2. Locators user-facing; assertions web-first?
3. API mocked on PRs; no third-party live calls?
4. axe (critical/serious = 0) on those journeys; wait for UI state before `analyze()`?
5. CI: browser install scoped; report artifact; traces on retry?
6. Failures debuggable via HTML report / trace — not “red with no evidence”?

## Day workflow hook

Same as [`08-IMPLEMENTATION-DAY.md`](../08-IMPLEMENTATION-DAY.md): when the day’s FE must-finish touches auth, money, locale, or irreversible UI, prove the matching critical Playwright journey (mocked) locally = CI. On red CI, download report/trace before guessing. Promote new E2E traps into [`06-LESSONS.md`](../06-LESSONS.md) automatically when they raise professionalism.
