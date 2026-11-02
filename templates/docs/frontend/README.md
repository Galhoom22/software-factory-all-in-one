# Frontend Developer Guide

> ⚠️ **Planning only.** This repository is for product planning only. It is **not** the implementation repository.

**Start here if you are the frontend developer.** You own everything the user sees and touches. The backend developer owns everything behind the API. You meet only in [`API_CONTRACT.md`](../API_CONTRACT.md).

## 1. What You Own

| You own | You do not own |
|---------|----------------|
| The {{FRONTEND}} app: pages, components, layout, styling | Business rules |
| UI state, forms, loading, empty, and error states | Validation authority (the backend decides; you display `422` errors) |
| Interface languages, accessibility (WCAG 2.2 AA) | Data storage, integrations, background jobs |
| Calling the API exactly as the contract says | Changing the API without an approved contract change |
| The `project-ui/` prototype and the design system | Backend infrastructure |

## 2. Read in This Order

1. [`requirements.md`](../../requirements.md) — the product and its Governing Product Rules.
2. [`PRD.md`](../PRD.md) — features, acceptance criteria, Definition of Ready.
3. [`API_CONTRACT.md`](../API_CONTRACT.md) — every request, type, and error you will use.
4. [Frontend architecture](ARCHITECTURE.md) — how the app is built.
5. [Frontend testing](TESTING.md) — what to automate and what not to.
6. [`project-ui/README.md`](../../project-ui/README.md) — prototype and design workflow.
7. SRS rows with **Owner = FE or Both** ([`SRS.md`](../SRS.md)).
8. [`SECURITY.md`](../SECURITY.md) — rules with Owner = FE or Both and the Every Page Checklist.
9. [`DECISIONS.md`](../DECISIONS.md) — why the stack is what it is.
10. [`DEPLOYMENT.md`](../DEPLOYMENT.md), then [frontend deployment](DEPLOYMENT.md) — hosting, then the deploy steps.

## 3. Your Tasks per Feature

| Feature | Frontend work |
|---------|---------------|
| F-01 {{FEATURE}} | {{SCREENS AND STATES}} |

## 4. Compliance Items You Implement

| ID | What it means in the UI |
|----|-------------------------|
| {{RULE_ID}} | {{UI_BEHAVIOR}} |

## 5. Definition of Done (frontend)

- [ ] Matches the PRD acceptance criteria and uses only contract endpoints and shapes.
- [ ] Works in every interface language, desktop and mobile.
- [ ] Has loading, empty, error, and success states; no user input is lost on errors.
- [ ] Keyboard accessible, visible focus, labels, 4.5:1 contrast; no axe violations.
- [ ] Passes the SECURITY Every Page Checklist.
- [ ] Tests match [TESTING.md](TESTING.md).
- [ ] Lint, type check, and tests pass in CI.
- [ ] Staging smoke against the real API once before release (see TESTING.md).
- [ ] Engineering depth matches the feature's risk profile in `playbook/FEATURE_SDLC.md`; completion cites verification evidence. Definition of Done, release, and outcome validation stay separate.

## 6. Working With the Backend Developer

- Need a new field or endpoint? Propose it as a change to [`API_CONTRACT.md`](../API_CONTRACT.md) (§6.1).
- Until an endpoint is live, build on mocks in the exact contract shape.
