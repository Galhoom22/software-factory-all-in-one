# Lessons — What Went Wrong Once, So It Doesn't Again

Each lesson comes from real rework in MasarHub (146 commits over three long chats). Add a line whenever a mistake costs time. Keep each lesson to the problem and the fix.

## Product and Scope

- **Name the product before anything else.** MasarHub started as "AI Resume Tailor" and was renamed after dozens of screens; every document, screen, and mock email changed.
- **Write the full current-actor surface on day one.** Social sign-in (Google, LinkedIn, GitHub), sign-out, settings, data rights, billing, the empty-state ways to start, and "current job" dates were each added later and touched many documents. Requirements step 1 lists them. There is no MVP mode that excuses leaving them out.
- **Design the returning user's path, not only the first visit.** A user who already has data must not be asked for it again; this was caught late.
- **Emails are screens too.** Verification, reset, security notices, data export links, and renewal reminders were missing until a final completeness audit; design them in the screen index with the account screens, and give every emailed link a landing state (a download page, an expired link, a confirmation).
- **One feature, offered everywhere its object appears.** Resume templates existed on the master resume but not on tailored resumes until the owner noticed.
- **One actor at a time, production-complete.** The screen index briefly held other actors and post-scope screens; cut those back. For the actor in focus, design production-ready screens and rules — do not omit lasting product choices (for example a billing period) by citing MVP.

## Pricing and Payments

- **Prices only in US dollars.** Fixed local-currency prices (for example 49 EGP) go stale when the exchange rate moves; convert at payment time instead.
- **Prices and periods changed several times** (including a mid commitment SKU, a doubling paid-plan ladder, a temporary drop of a period under MVP framing, then restoring the production catalog). Keep amounts and periods in one place (`requirements.md` §4) so each change is one edit plus links; record it in DECISIONS without rewriting older accepted entries.
- **Show only the main payment methods.** A long list of wallets and gateways on the landing page looked cluttered; the full list belongs at checkout, by country.
- **Undefined numbers stay labelled.** A value not decided yet (such as plan limits) is a clearly labelled sample in the prototype and "defined later" in the requirements.

## Documents

- **Write compliance and security before screens.** They came after many screens, and every screen had to be revisited.
- **Start the decision log with the first decision.** Writing it later means reconstructing reasons from memory.
- **One home per fact.** Versions only in SRS §2, endpoints only in the API contract, prices only in `requirements.md`. Repeated tables drift; a cleanup commit had to resolve contradictions between copies.
- **State each standard once, at one level.** The compliance and SRS rows said WCAG 2.1 AA while the README and the audit used 2.2; pick the level in COMPLIANCE and make every other mention follow it.
- **Every requirement row has an owner** (FE / BE / Both) from the moment it is written; CI checks it.
- **Counting lines go stale first.** "Six templates", "14 AI sources", "21 tests": reread every line that counts or lists things before each commit.
- **Absorb, then delete, outside references.** A UX roadmap PDF and an Agile course file were added as input; their useful rules were merged into the rules and docs, then the files were deleted.
- **Check hosting against the exact stack, not the brand.** Managed platforms lagged the planned versions (one offered PostgreSQL 17 against a required 18, another an older pgvector), a free frontend tier forbade commercial use, and an edge adapter only experimentally supported Next.js 16's `proxy.ts`. Compare each requirement in SRS §2 with the host's own docs before choosing.
- **Give staging its own domain when cookies span subdomains.** Production cookies scoped to `.domain` reach every subdomain, so a staging subdomain breaks sign-in for anyone using both.
- **Spec tooling belongs in the implementation repositories.** A spec-driven tool such as Spec Kit in the planning repository would add a constitution and specs beside the requirements, a second source of truth. Use it where code is built, with a constitution that cites the planning rules by ID.
- **Feature files hold evidence, not a second SRS.** Decompose once with [`FEATURE_SDLC.md`](FEATURE_SDLC.md); match Lightweight / Standard / Comprehensive to real risk; never mark Done without linked verification. Done, Released, and Outcome Achieved are separate.
- **SEO is technical honesty, not growth hacks.** Index marketing and legal; keep the app `noindex`; ship robots/sitemap/hreflang/honest JSON-LD. Do not invent reviews or ratings for rich results ([`docs/SEO.md`](../docs/SEO.md) pattern).
- **Docker is for local parity, not a silent production rewrite.** Compose for Postgres/mail/API on laptops; keep the accepted production host (Forge, PaaS, …) until DECISIONS change. Never bake secrets into images.
- **Keep a `notes.md` for ideas**, and move an idea out once it is decided or built, so it never reads as a requirement.

## Tracker and delivery calendar

- **Name the actor calendar explicitly.** Start date, end date, daily hours, and “this actor only” must be in ESTIMATES / SPRINTS / board rules and mirrored to the live tracker. Compressing with AI-assisted longer days is fine when owners accept it — record it as a decision; do not silently stub production quality.
- **Do not half-patch a calendar.** Replacing only end dates while leaving S2–S6 rows (or old capacity math) produces fake windows like identical start/end per sprint. Rewrite the sprint table and Story map; remapping labels to a single sprint means every Story’s schedule and implementation-repo `docs/JIRA.md` move together.
- **Same-session mirror to implementation repos.** When the planning calendar moves, update FE/BE `docs/JIRA.md` (binding side, capacity, Story→sprint map) in the same session as Jira Start/Due and Schedule bodies.
- **Board cards are separate FE/BE Stories**, not one shared umbrella with nested Sub-tasks for both owners. Assignee filters must show only that person’s work.
- **Daily checklist ↔ tracker.** If the team keeps a daily must-finish page (Notion or similar), use separate FE/BE lanes, link each day to the matching issue keys, treat the tracker as status SoT, and refresh day→issue links whenever the calendar map moves — same session as the rebaseline.

## Design

- **Pick references once, with one role each.** Many skill and guideline sites were tried one by one; only rules that filled a real gap were kept. Decide the component foundation, the UX reference, and the visual inspiration early, and write the precedence order.
- **Distinct brand, not a copy.** A dark theme too close to a competitor's had to be redone, and the light theme was redone to match it. Borrow patterns, never palettes, logos, or illustrations wholesale.
- **The product name needs a wordmark** that stands out from the copy, and a unique logo; plan them with the brand, not after the screens.
- **The screen index changed four times** (Figma-like canvas, live thumbnails, text catalogue, then one "Screens and flows" page). Build the final shape from PROTOTYPE.md directly.
- **No prototype labels.** Screens first carried "prototype" banners and review controls; they were removed so every screen looks like production.
- **Production-realistic mock data** exposes layout bugs (long names, many items, unbroken URLs) that `Test` data hides. Never use real people, including the team.
- **Use logical CSS (start/end), never left/right**, when any interface language is right-to-left. The guard catches it.
- **Design tokens only.** Raw colors and default palette classes break the themes; the guard catches them.
- **Interactive states are part of the design**: hover, pressed, current section, sticky header, 44px touch targets on touch screens.
- **Small text in empty states is easy to miss**; the owner asked to enlarge an empty preview message. Check empty states at real size.

## Prototype Engineering

- **Install only with the official installer**, then add one approved dependency at a time.
- **Every link prefetches the full page** in the production build; judge speed with a production build, never the dev server.
- **New routes show type errors until the first build** generates the route types. Run `npm run build` before `tsc --noEmit`.
- **Split screens by concern early** (shared components only when a second screen needs them, everything else next to its screen), so editing one screen cannot break another.
- **Theme in a cookie, not browser storage**: the server renders the right theme without a flash, and the guard can keep banning storage APIs.
- **`allowedDevOrigins: ["127.0.0.1"]`**: without it the dev server blocks its scripts on that address and nothing is interactive. A theme toggle that "did nothing" was this.
- **Error and not-found pages need every language** and a retry action.

## Git, CI, and Tooling

- **CI Node tracks Active LTS.** When Node publishes a new Active LTS, move `actions/setup-node` and SRS §2 together; leave Maintenance LTS only when a hard dependency forces it.
- **Pin CI actions to commit SHAs** and pin CLI tools run through `npx` to an exact version, then let Dependabot update them.
- **Use a branch and a pull request for large changes** (the shadcn foundation went through PR #1); small changes go straight to `main` after the checks.
- **Never commit build output** (`.next/`, `node_modules/`) or personal files the owner keeps uncommitted.
- **Ask before adding any dependency**, and record it in SRS §2 and the guard's allowed list in the same commit.
- **Branch protection is a repository setting**; the owner turns it on, not an agent.
- **Keep audit scripts in the repository.** The crawl script lived in `%TEMP%` for weeks, where Windows can delete it; it now lives in `project-ui/scripts/`.

## Working With AI Agents
- **Keep skills and MCP servers on today’s stables.** Design skills (Impeccable, ui-ux-pro-max, taste-skill) and local MCPs (lean-ctx, Context7, REA) drift. After a Node LTS bump, rebuild native CLIs (`npm rebuild lean-ctx-bin` when the binary is missing), pin `impeccable@x.y.z` in CI, and restart the editor so MCP discovery reloads.
- **Never commit MCP API keys.** Tokens belong in the user’s local `mcp.json` / secrets store, not in the planning repository or playbook templates.

- **Harnesses do not share rule files.** Cursor loads `.cursor/rules/`; Codex loads `AGENTS.md` and `.codex/`; Copilot wants `.github/copilot-instructions.md`; Gemini wants `GEMINI.md`; Windsurf wants `.windsurf/rules/` or `AGENTS.md`. Put the full rules in **one** `AGENTS.md`, give weak models `docs/AGENT_START.md`, add thin pointers per harness, and keep CI (`check-delivery.mjs` + `check-agents.mjs`) failing if discovery is gutted.
- **Long chats lose context.** Write a handoff before opening a new chat (PROMPTS.md), and start the new chat by having the agent read the repository.
- **"Update everything" sweeps find real staleness.** Run the audits in PROMPTS.md after every batch of work, not only at the end.
- **A second agent's audit is input, not instructions.** An outside report found real bugs (a language switch dropping the selected item, a tailored check reading the master text, contract gaps), but each finding was checked in the code first and fixed once in the shared function; the report file was deleted once its findings were applied, so it never became a second source of truth.
- **Ask for a score out of 100 with concrete findings**, then fix until none remain; vague "make it more professional" requests produce vague changes.
- **Check every entry point of a legal gate.** AI consent was wired to upload, job analysis, and tailoring, but "Improve with AI", added later, skipped it; when a feature adds a new AI entry point, route it through the consent screen and its flow.

- **Embedding models are not interchangeable.** Matching dimensions does not make vector spaces comparable. Stamp the embedding model on each row, ignore stale rows in similarity search, and re-embed on model change — do not treat an env flip as a free migration.
- **Click through the flows yourself.** The agent's checks passed while a sign-in button led to the wrong page and an approved version had no button to view it.

## Windows

- Files are checked out with CRLF line endings. Multi-line string replacement in PowerShell silently fails on them; use an editor tool that matches exact text.
- Headless Edge screenshots may stop writing files; use the IDE's browser tool instead.
- `Start-Process npx` fails silently (npx is a `.cmd` file); use `Start-Process npx.cmd`, and check the server answers `200` before an audit. A crawl against a server that never started reports hundreds of false problems from the browser's error page.
- To stop a server on a port: `Get-NetTCPConnection -LocalPort <port> -State Listen | % { Stop-Process -Id $_.OwningProcess -Force }`.
