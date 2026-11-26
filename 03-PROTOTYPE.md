# Prototype — See the Product Before Building It

The prototype lives in `project-ui/` inside the planning repository. It is the **only** code allowed there. Its job is to make the plan visible and clickable so gaps show up before implementation, not after. Prefer copying a finished `project-ui/` from an existing planning repo (typical stack example: Next.js + React + Tailwind + shadcn/ui + one icon library; CI on Node Active LTS) rather than rewriting the starter kit.

## Rules for Both Tracks

- **Same technology as production.** Use the exact stack and versions from SRS §2, so the prototype looks and behaves like the shipped product and its patterns carry over.
- **Production-level, not a mock-up.** No "prototype", "demo", or review labels on product screens; each screen looks exactly as it will ship. Prototype navigation lives only on the home page.
- **No real system.** No backend, database, real auth, real AI, analytics, trackers, or storing user input (cookies only for UI preferences such as the theme).
- **Fictional but realistic data.** Invented people and companies, emails and links on reserved `example` domains, never real names (not even the team's). Enough items to exercise lists, long and short values, concrete numbers and dates, and native content in every interface language, never `Lorem ipsum` or `Test`.
- **Mocks follow the contract.** All mock data lives in `src/mocks/`, shaped exactly like `docs/API_CONTRACT.md` §3.
- **One actor, production-complete ([`02-DELIVERY.md`](02-DELIVERY.md)).** **There is no MVP delivery mode.** Only screens for the actor in focus, finished millimetre-accurate to production. Other actors and deferred features stay out of the index until their turn.
- **Guarded in CI.** Tests and a guard script fail the build when a rule is broken. Never weaken a gate to make a change pass.

## Track A — Product With a Frontend

### Setup

1. Install with the framework's **official** installer only (for Next.js: `npx create-next-app@latest project-ui`), nothing else at first.
2. Add the component foundation (for example `npx shadcn@latest init`) and one icon library; list every dependency in SRS §2 and in the guard's allowed list.
3. Write `PRODUCT.md` and `DESIGN.md` (design skills generate them), then `.cursor/rules/project-ui-design.mdc` (template in `templates/cursor-rules/`) with the precedence order and banned patterns.
4. Add the guard (`scripts/check-ui.mjs`), the tests, and the CI steps before the first screen.
5. Commit the `AGENTS.md` and `CLAUDE.md` that `next dev` writes into `project-ui/`; deleting them only makes them reappear.

### Design Skills

Install design skills with **one role each**, and write the precedence in the rules file so they never compete:

| Skill | Role |
|-------|------|
| Impeccable | Owns `PRODUCT.md` and `DESIGN.md`; plans (`shape`), reviews (`critique`, `audit`, `harden`, `polish`), and its `detect` command runs in CI. |
| Taste skill (minimalist-ui, redesign-existing-projects) | Visual direction and an audit checklist for generic patterns. |
| UI UX Pro Max | One-time research (palette, type, UX rules), merged into `DESIGN.md`, never kept separately. |

Pin the Impeccable version in CI (and prefer the same pin locally). Vendor design skills in `.cursor/skills/` with their licenses in `THIRD_PARTY_NOTICES.md`, and mark `.cursor/**` as `linguist-vendored`. When a new skill or guideline site comes up, take only the rules that fill a real gap and put them in the rules file; do not install every skill. Peer study feeds **screen/flow/state completeness**, not trade-dress clones ([`07-judgment/competitor-recon.md`](07-judgment/competitor-recon.md)). Distill UX/anti-slop rules into `PRE-DELIVERY-UX.md` and `ANTI-SLOP.md` (**checklist only** — never let an external pack override `DESIGN.md`). Keep a living `DESIGN-ERRORS.md`: fix owner-reported visual defects in the same turn, then append. Motion/taste packs (for example Emil Kowalski's animation skills) may stay **global** on the machine: distill frequency/purpose/easing gates into the product Motion rule, keep CSS-only constraints, and never vendor skills that push animation libraries the product forbids. A false positive from `impeccable detect` (for example a deliberately chosen font) goes in `.impeccable/config.json` with a reason.

### Starter Kit

Build these before the first product screen; every screen then reuses them. File names below are the usual `project-ui/` layout.

| Piece | What it does | Typical file |
|-------|--------------|---------------|
| Language and direction | `?lang=` picks the language (default: the main market's); the root sets `lang` and `dir`; a proxy passes the language and path to server components such as the 404 page; fonts per language through `next/font`. | `src/lib/i18n.ts`, `src/proxy.ts`, `src/app/layout.tsx` |
| Language switch | Visible on every screen, keeps the current path and state. | `src/components/common.tsx` |
| Theme | Light and dark, follows the device by default, a toggle on every screen, the choice kept in a cookie so the server renders it without a flash. | `src/components/ThemeToggle.tsx`, `src/app/layout.tsx` |
| Full-prefetch link | Every route reads `?lang` and `?state`, so it is dynamic and the default prefetch loads nothing; one `Link` wrapper prefetches the whole page, making navigation instant. The guard bans the direct import. | `src/components/Link.tsx` |
| Security headers | CSP, `nosniff`, referrer and permissions policies, no framing, no `X-Powered-By`; `allowedDevOrigins: ["127.0.0.1"]` so the dev server hydrates on that address. | `next.config.ts` |
| Frames | Signed-in shell (navigation, language, theme, sign-out), auth frame, and one frame per area. | `src/components/AppShell.tsx`, `src/app/(auth)/AuthFrame.tsx` |
| Forms | Client validation for usability, an error summary, then navigation to the saved state. | `src/components/form.tsx`, `src/lib/validation.ts` |
| Feedback | Auto-hiding toast for saved states; confirm dialog opened by `?state=` (destructive or default tone). | `src/components/Toast.tsx`, `src/components/ConfirmDialog.tsx` |
| Background work | A progress card that moves on by itself, standing in for polling a queued job. | `ProgressCard` in `common.tsx`, `src/components/AutoForward.tsx` |
| Error pages | A translated "page not found" and an error page with a retry button. | `src/app/not-found.tsx`, `src/app/error.tsx` |
| Metadata | Translated titles; public pages indexed, every other screen `noindex`; absolute URLs. | `generateMetadata` in each page, `layout.tsx` |

### Home Page: Screens and Flows

The home page (`/`) is the team's map, built in its final shape from the start (one product went through four versions):

- **On top, the user flows:** one card per actor listing its stages; each stage opens a clickable diagram (`/flows/<actor>`).
- **Below, the screen index:** text only (no thumbnails or live previews), grouped by actor and section, each screen with its ID and its states underneath, each section linking to the flow stages that use it.
- **Only built screens for the actor in focus**, production-complete. Both languages.

### URL Conventions

| Parameter | Meaning |
|-----------|---------|
| `?state=<ID>` | Shows one state of a screen, for example `/profile/experience?state=P03-validation`. |
| `?item=<id>` | Opens one record of a list. |
| `?lang=en` | Switches the interface language. |

Screen IDs are a letter per area and a number (`A01` account, `P03` profile section); state IDs extend them (`P03-validation`). Keep IDs stable; documents and conversations refer to them.

### State Checklist (every screen)

- [ ] Default with realistic data, and **empty** (first use) with a clear first action.
- [ ] **Loading or progress** for anything slow, and **failure** that keeps the user's input and offers a retry.
- [ ] **Validation** errors per field and in a summary.
- [ ] **Success** that names the next action and links to it.
- [ ] **Limits**: plan limit, rate limit (throttled), market not available, consent required.
- [ ] **Links from email** (verify, reset): valid, used, and expired.
- [ ] **Confirmations** for destructive actions; typed confirmation where there is no password.
- [ ] **First-time and returning user** variants where the flow differs.
- [ ] Every action offered on an object is offered wherever that object appears.
- [ ] Long content and dozens of items at 320px without horizontal scroll.

### Files That Keep It Honest

| File | Role |
|------|------|
| `src/app/screens.ts` | The screen index: every built screen with its `href` and states, grouped by actor and section. |
| `src/app/flows.ts` | User flows per actor; each step names screens from the index. |
| `src/app/flows.test.ts` | Fails when a flow misses a main screen or a state has no main screen. |
| `src/app/docs.test.ts` | Fails when the README Screen Index misses a screen, SRS traceability misses an ID, or any Markdown link or heading anchor is broken. |
| `scripts/check-ui.mjs` | UI guard: physical left/right utilities, raw colors instead of tokens, gradients, inline styles, network or storage code, raw HTML, `eval`, external images, direct `next/link`, unapproved dependencies, a screen without the language switch. |
| `scripts/crawl.mjs` | Audit (`npm run crawl`): every screen and state in both languages, light and dark, desktop and phone, with axe, overflow, unnamed controls, broken anchors, wrong `lang`/`dir`, console errors, and link status. |
| `scripts/capture-landing-shots.mjs` | Captures real product screenshots for the landing page from the running prototype, per language and theme. |

### Checks

Before every push (the same as CI):

```bash
npm audit --omit=dev --audit-level=high
npm run check:ui
npm test
npm run lint
npm run build
npx tsc --noEmit
npx -y impeccable@4.8.0 detect .
```

After a batch of screens, on a production build (never the dev server: it is slower and shows a dev badge):

```bash
npm run build
npx next start -p 3100
npm run crawl -- http://localhost:3100            # optional path filter and "detail" arguments
```

Then Lighthouse on a few screens (accessibility and SEO). The crawl's expected result is no problems (it skips the intentional `/does-not-exist` 404) and a zero exit code, so a script or CI can rely on it.

### Screen Workflow

1. Plan the screen and its states (`/impeccable shape` or a short written plan).
2. Build it from the starter kit and the design tokens; add it to `screens.ts`, `flows.ts`, and the README Screen Index.
3. Review: `critique`, `audit`, `harden` (RTL, long content, edge states), `polish`.
4. Run the checks, then walk the flow it belongs to as the user (STEPS.md step 16).

### Landing Page

- Sections in the order a visitor decides: what it is, how it works, the core value, privacy and trust, pricing, questions, a final call to action, and a footer with grouped links (product, legal, company).
- Each section shows a **real screenshot** of the prototype, captured by script in both languages and themes, never a mock illustration.
- Pricing switches between billing periods with the product's documented default selected (do not invent a different default in the prototype), shows the full amount for the period with its per-month price, the full terms, and only the main payment methods. Every plan and pack button opens checkout with that choice already made (one URL parameter), and the checkout keeps it across the language switch.
- Never fabricated reviews, metrics, or logos; a reviews section waits for real reviews (`notes.md`).
- Draft legal pages, company information, and the sub-processor list are linked from the footer, marked as drafts until legal review.

## Track B — Backend-Only Product

A backend-only product still needs something to look at: an **API explorer** that shows every endpoint, request, and response with realistic mock data, as close as possible to the documentation the real backend will publish.

### Setup

1. Write the endpoints as an **OpenAPI 3.1** file, `project-ui/openapi.yaml`, generated from `docs/API_CONTRACT.md` (the contract keeps the conventions, errors, and change process; the OpenAPI file holds the endpoint details, and the contract points to it).
2. Give every operation request and response `examples` with fictional data, including every error code in the contract.
3. Render it with an open-source OpenAPI viewer (for example Scalar API Reference or Swagger UI) and serve mock responses from the examples with a mock server (for example Stoplight Prism). Prefer the viewer the real backend will use: if its framework generates OpenAPI docs (Laravel Scramble, FastAPI, ASP.NET), use the same viewer so the prototype matches production.
4. Verify each tool's license and current version on its official site, record it in SRS §2, and log the choice in `docs/DECISIONS.md` before adding it.

### What It Must Show

- Every endpoint grouped by feature, with authentication and rate limits stated.
- Every error response from the contract, with its `code`.
- The main flow as an ordered list of calls (contract §5), each linking to its endpoint.
- Background jobs: the request that starts the job, the status polling, and the result.

### Checks

- The OpenAPI file validates (for example with the mock server's own validation or a linter such as Spectral).
- A test fails when an endpoint in the contract is missing from the OpenAPI file, or the reverse.
- The same secret scan, dependency audit, and Markdown link test as Track A.

## When a Product Has Both

Build Track A. The API explorer is optional and only worth it when external developers will call the API directly.
