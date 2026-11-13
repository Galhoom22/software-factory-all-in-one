# project-ui — Prototype

A non-functional prototype of {{PRODUCT}}, built with **{{FRONTEND}}** (the production frontend stack), or an API explorer for a backend-only product. Its only purpose is to see and click through the product from [`requirements.md`](../requirements.md) before implementation starts. How to build it: `playbook/03-PROTOTYPE.md`.

**Owner:** the frontend developer (see [`docs/frontend/README.md`](../docs/frontend/README.md)).

## Scope

**Allowed:** pages, components, client-side UI state, and static mock data.

**Not allowed:** backend, API routes, server actions, fetch calls, databases, auth, storing user input (including browser storage), real AI calls, analytics, trackers, or real personal data. All sample data is clearly fictional.

Every screen must pass [`docs/COMPLIANCE.md`](../docs/COMPLIANCE.md) and the [Every Page Checklist](../docs/SECURITY.md#14-every-page-checklist-uiux).

## Run Locally

```bash
cd project-ui
npm install
npm run dev
```

## Quality Gates

| Gate | Command | Protects against |
|------|---------|------------------|
| UI guard | `npm run check:ui` | Breaking the rules in `.cursor/rules/project-ui-design.mdc`. |
| Unit tests | `npm test` | Flows that miss a screen, a Screen Index below that misses a screen, broken traceability, broken Markdown links. |
| Dependency audit | `npm audit --omit=dev --audit-level=high` | Known vulnerabilities. |
| Lint and types | `npm run lint`, `npm run build` | Code and type errors. |

Before calling a screen done: tick `PRE-DELIVERY-UX.md`, skim `ANTI-SLOP.md`, and keep `DESIGN-ERRORS.md` current when the owner reports a visual defect.

After a batch of screens, run the crawl on a production build (`npm run build`, `npx next start -p 3100`, then `npm run crawl -- http://localhost:3100`): axe, overflow, unnamed controls, broken anchors, wrong language or direction, console errors, and link status on every screen and state, in every language and theme.

## Code Structure

| Where | What goes there |
|-------|-----------------|
| `src/components/` | Shared pieces, added only when a second screen needs them. |
| `src/mocks/` | Fictional data shaped like API_CONTRACT §3. |
| `src/app/screens.ts` | The screen index. |
| `src/app/flows.ts` | The user flows. |

## Screen Index

<!-- The tests require every screen ID in screens.ts to appear in this section; ranges like A01–A05 count. -->

The home page (`/`) lists the built screens by actor and section. Built so far: {{SCREEN IDS}}. Screens show their states through `?state=<ID>`; keep IDs stable.

## Workflow

1. Plan the screen and its states.
2. Build it with the design tokens and shared components; add it to `screens.ts`, `flows.ts`, and the Screen Index above.
3. Review accessibility, every interface language, and long content.
4. Run the quality gates.
