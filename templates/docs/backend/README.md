# Backend Developer Guide

> ⚠️ **Planning only.** This repository is for product planning only. It is **not** the implementation repository.

**Start here if you are the backend developer.** You own everything behind the API: data, business rules, security, integrations, and background jobs. You meet the frontend developer only in [`API_CONTRACT.md`](../API_CONTRACT.md).

## 1. What You Own

| You own | You do not own |
|---------|----------------|
| The {{BACKEND}} API, database, and background jobs | Screens, UI state, styling |
| All business rules and authoritative validation | How errors are displayed |
| Authentication, authorization, rate limits | Changing the API without an approved contract change |
| Integrations (payments, email, AI, storage) | The prototype |

## 2. Read in This Order

1. [`requirements.md`](../../requirements.md) — the product and its Governing Product Rules.
2. [`PRD.md`](../PRD.md) — features and acceptance criteria.
3. [`API_CONTRACT.md`](../API_CONTRACT.md) — every endpoint you build.
4. [Backend architecture](ARCHITECTURE.md) — how the API is built.
5. [Backend testing](TESTING.md) — Feature/unit matrix and mandatory safety net.
6. SRS rows with **Owner = BE or Both** ([`SRS.md`](../SRS.md)).
7. [`SECURITY.md`](../SECURITY.md) and [`COMPLIANCE.md`](../COMPLIANCE.md) — rules with Owner = BE or Both.
8. [`DECISIONS.md`](../DECISIONS.md) — why the stack is what it is.
9. [`DEPLOYMENT.md`](../DEPLOYMENT.md), then [backend deployment](DEPLOYMENT.md) — hosting, then the server and deploy steps.

## 3. Your Tasks per Feature

| Feature | Backend work |
|---------|--------------|
| F-01 {{FEATURE}} | {{ENDPOINTS, RULES, JOBS}} |

## 4. Compliance Items You Implement

| ID | What it means in the backend |
|----|------------------------------|
| {{RULE_ID}} | {{BEHAVIOR}} |

## 5. Definition of Done (backend)

- [ ] Matches the PRD acceptance criteria and returns exactly the contract shapes and error codes.
- [ ] Every record is loaded through its owner; tests prove a foreign ID returns `404`.
- [ ] Validation, rate limits, and logging follow SECURITY; no personal data in logs.
- [ ] Tests match [TESTING.md](TESTING.md).
- [ ] Tests, static analysis, and dependency audits pass in CI.
- [ ] Verified end to end with the real frontend.
- [ ] Engineering depth matches the feature's risk profile in `playbook/04-FEATURE_SDLC.md`; completion cites verification evidence. Definition of Done, release, and outcome validation stay separate.

## 6. Working With the Frontend Developer

- Draft every new or changed endpoint as a change to [`API_CONTRACT.md`](../API_CONTRACT.md) (§6.1) and wait for approval.
- Provide example responses so the frontend can build on mocks.
