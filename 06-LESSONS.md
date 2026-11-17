06-LESSONS.md [156L]
# Lessons — What Went Wrong Once, So It Doesn't Again
Each lesson comes from real rework on a shipped planning product **or** from implementation days (API/app surprises). Add a line whenever a mistake costs time **or** a useful discovery would raise the next product’s professionalism. Agents do this **automatically** (no owner ask) when the quality bar is met — see [`08-IMPLEMENTATION-DAY.md`](08-IMPLEMENTATION-DAY.md) § Lesson capture. Keep each lesson to the problem and the fix — no product or personal names. Prefer one sharp reusable rule over a long diary.
## Product and Scope
- **Name the product before anything else.** One product started under a working title and was renamed after dozens of screens; every document, screen, and mock email changed.
- **Write the full current-actor surface on day one.** Social sign-in (Google, LinkedIn, GitHub), sign-out, settings, data rights, billing, the empty-state ways to start, and "current job" dates were each added later and touched many documents. Requirements step 1 lists them. There is no MVP mode that excuses leaving them out.
... [lean-ctx: omitted 1 lines]
- **Emails are screens too.** Verification, reset, security notices, data export links, and renewal reminders were missing until a final completeness audit; design them in the screen index with the account screens, and give every emailed link a landing state (a download page, an expired link, a confirmation).
... [lean-ctx: omitted 1 lines]
- **One actor at a time, production-complete.** The screen index briefly held other actors and post-scope screens; cut those back. For the actor in focus, design production-ready screens and rules — do not omit lasting product choices (for example a billing period) by citing MVP.
## Pricing and Payments
- **Prices only in US dollars.** Fixed local-currency prices go stale when the exchange rate moves; convert at payment time instead (or price only in a stable currency such as USD).
- **Prices and periods changed several times** (including a mid commitment SKU, a doubling paid-plan ladder, a temporary drop of a period under MVP framing, then restoring the production catalog). Keep amounts and periods in one place (`requirements.md` §4) so each change is one edit plus links; record it in DECISIONS without rewriting older accepted entries.
... [lean-ctx: omitted 2 lines]
- **Never upgrade from the thank-you URL.** Browser redirects are UX; paid entitlement comes from a verified webhook (or server confirm) with idempotent event ids. Signature failures fail closed.
... [lean-ctx: omitted 1 lines]
- **Agents use provider MCP/skills for payments, not memory.** Pin SDK versions from the registry; prefer current Intent/Checkout/Setup APIs; skip deprecated Sources/Charges/Tokens for new work. Judgment: [`07-judgment/payments.md`](07-judgment/payments.md).
## Documents
- **Write compliance and security before screens.** They came after many screens, and every screen had to be revisited.
... [lean-ctx: omitted 2 lines]
- **ADRs live in `DECISIONS.md`, not a second SAD.** Capture options and honest ❌ consequences; add C4/context diagrams in FE/BE `ARCHITECTURE.md`. Do not paste a full Solution Architecture Document that rewrites BRD/PRD/SRS ([`07-judgment/sad-adr.md`](07-judgment/sad-adr.md)).
- **Agent skills are judgment, not a second OS.** Keep vertical slices, assumption surfacing, and five-axis review; do not vendor a full skills pack over product `AGENTS.md` ([`07-judgment/agent-skills.md`](07-judgment/agent-skills.md)).
... [lean-ctx: omitted 4 lines]
- **Check hosting against the exact stack, not the brand.** Managed platforms lagged the planned versions (one offered PostgreSQL 17 against a required 18, another an older pgvector), a free frontend tier forbade commercial use, and an edge adapter only experimentally supported Next.js 16's `proxy.ts`. Compare each requirement in SRS §2 with the host's own docs before choosing.
... [lean-ctx: omitted 1 lines]
- **Spec tooling belongs in the implementation repositories.** A spec-driven tool such as Spec Kit in the planning repository would add a constitution and specs beside the requirements, a second source of truth. Use it where code is built, with a constitution that cites the planning rules by ID. In planning, absorb outside methods as **judgment only** ([`07-judgment/`](07-judgment/README.md)) — map and converge; never install a second constitution.
- **Number the playbook method files.** Prefixed names (`01-STEPS`, `02-DELIVERY`, …) keep delivery order visible without forcing a BRD/PRD folder tree onto every product.
... [lean-ctx: omitted 3 lines]
- **Feature files hold evidence, not a second SRS.** Decompose once with [`04-FEATURE_SDLC.md`](04-FEATURE_SDLC.md); match Lightweight / Standard / Comprehensive to real risk; never mark Done without linked verification. Done, Released, and Outcome Achieved are separate. A populated template is not Done — quality gates need real results. Profile sets depth, not ASVS level.
- **AI paths need a golden set, not vibes.** Pin model IDs; treat uploads and retrieved text as untrusted; evaluate before lock/swap. Absorb AI design guides as judgment only ([`07-judgment/ai-system-design.md`](07-judgment/ai-system-design.md)) — never dump interview banks or price sheets into the repo.
- **SEO is technical honesty, not growth hacks.** Index marketing and legal; keep the app `noindex`; ship robots/sitemap/hreflang/honest JSON-LD. Do not invent reviews or ratings for rich results ([`docs/SEO.md`](../docs/SEO.md) pattern).
... [lean-ctx: omitted 2 lines]
## Tracker and delivery calendar
- **Name the actor calendar explicitly.** Start date, end date, daily hours, and “this actor only” must be in ESTIMATES / SPRINTS / board rules and mirrored to the live tracker. Compressing with AI-assisted longer days is fine when owners accept it — record it as a decision; do not silently stub production quality.
- **Do not half-patch a calendar.** Replacing only end dates while leaving S2–S6 rows (or old capacity math) produces fake windows like identical start/end per sprint. Rewrite the sprint table and Story map; remapping labels to a single sprint means every Story’s schedule and implementation-repo `docs/JIRA.md` move together.
- **Same-session mirror to implementation repos.** When the planning calendar moves, update FE/BE `docs/JIRA.md` (binding side, capacity, Story→sprint map) in the same session as Jira Start/Due and Schedule bodies.
... [lean-ctx: omitted 1 lines]
- **Day run-through beats mid-day continue cues.** For implementation days, the owner starts once; the agent finishes the whole must-finish list, closeout, then Pareto 20% + handoff. Mid-day “approve the next slice” gates burn context and break the pipeline — see [`08-IMPLEMENTATION-DAY.md`](08-IMPLEMENTATION-DAY.md).
... [lean-ctx: omitted 1 lines]
- **Pareto 20% is not “be terse.”** Owners paste the Pareto half into another AI to learn. Cover the important slice in enough depth (names, concepts, proofs) that teaching works; skip session chatter, not substance — see [`08-IMPLEMENTATION-DAY.md`](08-IMPLEMENTATION-DAY.md#pareto-20--what-it-means).
... [lean-ctx: omitted 3 lines]
## Design
- **Pick references once, with one role each.** Many skill and guideline sites were tried one by one; only rules that filled a real gap were kept. Decide the component foundation, the UX reference, and the visual inspiration early, and write the precedence order. Keep anti-slop and pre-delivery checklists subordinate to `DESIGN.md`.
... [lean-ctx: omitted 1 lines]
- **Engineering aha ≠ planning lessons.** Put non-obvious bug root causes in `docs/learning-from-mistakes/` (planning **or** implementation repo). Promote reusable rules into this file (especially **Implementation (backend API)**) the same session; keep product names out.
- **Distinct brand, not a copy.** A dark theme too close to a competitor's had to be redone, and the light theme was redone to match it. Borrow patterns, never palettes, logos, or illustrations wholesale.
... [lean-ctx: omitted 1 lines]
- **The screen index changed four times** (Figma-like canvas, live thumbnails, text catalogue, then one "Screens and flows" page). Build the final shape from PROTOTYPE.md directly.
... [lean-ctx: omitted 1 lines]
- **Production-realistic mock data** exposes layout bugs (long names, many items, unbroken URLs) that `Test` data hides. Never use real people, including the team.
... [lean-ctx: omitted 4 lines]
## Implementation (backend API)
Hard-won while shipping a real Laravel (or similar) modular API beside a planning contract. Keep product names out; write the practice.
- **Inventory `main` before reinventing.** A multi-day Story often already landed jobs, validators, or routes on an earlier day. Read the feature file + handoff “already on main” list first — deepening beats a duplicate greenfield.
- **Dispatch queue work after the DB commit.** Creating a row and `dispatch()` inside the same transaction lets a sync/fast worker run before commit → job loads nothing and sticks as `queued`. Create rows in the transaction; dispatch **after** commit (embeddings, imports, AI suggestion jobs).
... [lean-ctx: omitted 2 lines]
- **Consent: soft-skip vs hard-fail.** Background enrichments (e.g. embed-on-save) skip quietly when AI consent is missing so ordinary saves still work. Explicit AI endpoints fail closed with `ai_consent_required` (or the product’s contract code).
... [lean-ctx: omitted 4 lines]
- **Foreign IDs → `404 not_found` JSON.** Ownership misses must not return `403` that confirms the record exists. One shared NotFound exception + renderer; feature tests with a second user.
... [lean-ctx: omitted 1 lines]
- **CI language version follows the lockfile.** Composer/npm pins (and transitive Symfony/etc.) can require a newer PHP/Node than “latest LTS memory.” Match `composer.lock` / engine fields in Actions; re-verify after lock bumps.
... [lean-ctx: omitted 2 lines]
- **SPA cookie auth tests must be stateful.** Sanctum/session login tests need the SPA/stateful harness (`withSession` / acting as first-party), not bearer-only assumptions, or login appears to “not stick.”
... [lean-ctx: omitted 2 lines]
- **Webhook-only plan/credit changes.** Checkout success URLs are UX. Entitlement updates land from verified webhooks (see payments judgment). Coupons and prices stay server-side.
... [lean-ctx: omitted 1 lines]
- **Promote surprising root causes twice.** Write `docs/learning-from-mistakes/<kebab>.md` in the **implementation** repo the same day; if the rule is reusable across products, add one bullet to playbook [`06-LESSONS.md`](06-LESSONS.md) and sync the studio playbook mirror the same session.
## Design patterns (implementation)
- **Problem → naive → enhance — then name the blueprint.** Patterns are shared language for a solved pain (duplication, coupling, closed-for-extension), not a badge. If you cannot state the naive failure, you do not need the pattern yet.
- **Composition before inheritance; framework before DIY.** Prefer has-a and platform features (middleware, jobs, container) over inventing Factory/Observer/Singleton scaffolding. Singleton-as-global is usually a smell.
- **Not mandatory; not unique.** Many problems have more than one valid shape — record the chosen one and the rejected alternative when the abstraction is consequential (`DECISIONS.md` / FEATURE note). Judgment: [`07-judgment/design-patterns.md`](07-judgment/design-patterns.md).
## Frontend E2E (Playwright)
- **Short critical list beats a flaky mega-suite.** Three to six user journeys with mocked API on PRs; unit/component for logic. Exhaustive `?state=` coverage belongs to the planning prototype crawl, not FE PR CI.
- **User-facing locators and web-first assertions.** Prefer role/label/text/test-id; `await expect(…).toBeVisible()`. CSS/XPath and manual `isVisible()` checks cause flakes when the DOM or timing moves.
... [lean-ctx: omitted 3 lines]
## Prototype Engineering
- **Install only with the official installer**, then add one approved dependency at a time.
... [lean-ctx: omitted 1 lines]
- **New routes show type errors until the first build** generates the route types. Run `npm run build` before `tsc --noEmit`.
... [lean-ctx: omitted 2 lines]
- **`allowedDevOrigins: ["127.0.0.1"]`**: without it the dev server blocks its scripts on that address and nothing is interactive. A theme toggle that "did nothing" was this.
... [lean-ctx: omitted 1 lines]
## Git, CI, and Tooling
- **Implementation repos need their own Actions workflows** (not only the planning repo). Copy [`templates/implementation/github-actions/`](templates/implementation/github-actions/) early; day closeout treats CI as a merge gate ([`09-CI-CD.md`](09-CI-CD.md)).
- **CI Node tracks Active LTS.** When Node publishes a new Active LTS, move `actions/setup-node` and SRS §2 together; leave Maintenance LTS only when a hard dependency forces it.
... [lean-ctx: omitted 2 lines]
- **Never commit build output** (`.next/`, `node_modules/`) or personal files the owner keeps uncommitted.
... [lean-ctx: omitted 3 lines]
## Working With AI Agents
- **Root `my-project-requirements.md` is the start command.** If the agent waits for “initialize” or asks the user to pick templates while that file exists, the playbook failed its job. Detect the file, do not overwrite it, run `00-USAGE` / `01-STEPS` with 80/20 depth, and keep `playbook/` generic.
- **Keep skills and MCP servers on today’s stables.** Design skills (Impeccable, ui-ux-pro-max, taste-skill) and local MCPs (lean-ctx, Context7, REA) drift. After a Node LTS bump, rebuild native CLIs (`npm rebuild lean-ctx-bin` when the binary is missing), pin `impeccable@x.y.z` in CI, and restart the editor so MCP discovery reloads.
... [lean-ctx: omitted 1 lines]
- **Harnesses do not share rule files.** Cursor loads `.cursor/rules/`; Codex loads `AGENTS.md` and `.codex/`; Copilot wants `.github/copilot-instructions.md`; Gemini wants `GEMINI.md`; Windsurf wants `.windsurf/rules/` or `AGENTS.md`. Put the full rules in **one** `AGENTS.md`, give weak models `docs/AGENT_START.md`, add thin pointers per harness, and keep CI (`check-delivery.mjs` + `check-agents.mjs`) failing if discovery is gutted.
... [lean-ctx: omitted 5 lines]
- **Embedding models are not interchangeable.** Matching dimensions does not make vector spaces comparable. Stamp the embedding model on each row, ignore stale rows in similarity search, and re-embed on model change — do not treat an env flip as a free migration.
... [lean-ctx: omitted 1 lines]
## Windows
- Files are checked out with CRLF line endings. Multi-line string replacement in PowerShell silently fails on them; use an editor tool that matches exact text.
... [lean-ctx: omitted 1 lines]
- `Start-Process npx` fails silently (npx is a `.cmd` file); use `Start-Process npx.cmd`, and check the server answers `200` before an audit. A crawl against a server that never started reports hundreds of false problems from the browser's error page.
- To stop a server on a port: `Get-NetTCPConnection -LocalPort <port> -State Listen | % { Stop-Process -Id $_.OwningProcess -Force }`.

