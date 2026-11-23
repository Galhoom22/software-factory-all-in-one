# Judgment — API readiness across environments

Absorb API-quality practices as **judgment only**. Map them onto the day pipeline, backend TESTING, DEPLOYMENT smoke, and the planning `API_CONTRACT` — never invent a second OpenAPI bible or a parallel “API squad” process.

## Problem this prevents

An API that is green on the developer’s machine can still fail when:

- CI runs a clean checkout (missing env, wrong PHP/Node, missing migrations).
- Staging/production has different `APP_URL`, cookies, CORS, HTTPS, queue workers, or secrets.
- The frontend developer hits routes or error shapes that never matched `docs/API_CONTRACT.md`.
- Docs list endpoints that were never shipped (or shipped endpoints that were never documented).

Local feature tests alone do **not** prove FE-ready or production-ready.

## Adopt (wire into the day)

| Check | Pass when | Where it runs |
|-------|-----------|---------------|
| **Contract parity** | Every route/error/shape touched today matches planning `API_CONTRACT.md` (or the contract was updated first, with FE notified) | Before Done / before PR |
| **Local API proof** | Feature (HTTP) tests for the day’s surfaces pass; authz/privacy/money/AI guards from BACKEND TESTING still hold | Day run-through |
| **CI API proof** | Same suite green on GitHub Actions (clean runner) | Closeout merge gate |
| **Staging API smoke** | After staging deploy (Phase B+): health + today’s critical paths from DEPLOYMENT smoke | Closeout CD step |
| **Production API smoke** | Only on approved production release (Phase C): same smoke list; never auto on every day merge | Release only |
| **FE-handoff readiness** | Contract + example status codes + required headers/cookies documented; fictional fixtures only; no “works on my laptop” caveats; pair with [`cross-surface-compatibility.md`](cross-surface-compatibility.md) (read sibling expectations) | Before marking Story Done if FE consumes it |
| **Docs honesty** | No endpoint in the day’s PR is undocumented; no documented-as-shipped endpoint is missing from the suite or smoke list | Same day |

## Forbid

| Forbid | Why |
|--------|-----|
| Declaring Done because only local `artisan test` / unit tests passed | Misses CI/env drift |
| Hitting production with real personal data for “just a quick check” | COMPLIANCE / SECURITY |
| Requiring live staging/production for every PR while Phase A (no hooks) | Fake CD / blocked Done |
| Dumping a full Postman dump or generated OpenAPI tree as a second SoT | Contract drifts; keep one contract |
| Skipping contract updates “we’ll tell FE later” | Pairing break; silent 4xx/5xx for FE |
| Treating CodeRabbit or DSA checks as a substitute for HTTP proof | Different failure modes |

## Day pipeline placement (with DSA / CodeRabbit / CI)

Same spirit as DSA (hot paths) and CodeRabbit (review): a **named gate**, not a vibe.

1. **During the day** — for every API surface in must-finish: contract parity + local feature tests (see `08-IMPLEMENTATION-DAY.md`).
2. **Before PR** — local suite = what CI will run (includes API feature tests).
3. **CI** — clean-runner proof (merge gate).
4. **After merge verify** — re-run day’s API proof on the merge commit.
5. **Phase B+ CD** — staging smoke from DEPLOYMENT (API health + critical paths).
6. **Production** — manual release smoke only; daily closeout does not auto-ship production.

Progressive phases stay in force (`09-CI-CD.md`): Phase A skips remote smoke honestly and still requires contract + local + CI.

## Minimum evidence to cite in the day summary

- Contract section(s) / endpoint IDs touched.
- Test command(s) + pass (local and CI run URL).
- Phase: A (no remote smoke) **or** B+ staging smoke result **or** C production release smoke.
- Explicit note if FE can integrate against the contract as shipped (or what is still blocked).

## Related homes

- Method: [`08-IMPLEMENTATION-DAY.md`](../08-IMPLEMENTATION-DAY.md), [`09-CI-CD.md`](../09-CI-CD.md)
- Templates: `templates/docs/backend/TESTING.md`, `templates/docs/backend/DEPLOYMENT.md` § Smoke, `templates/docs/API_CONTRACT.md`
- Sibling quality gates: [`cross-surface-compatibility.md`](cross-surface-compatibility.md), [`dsa-performance.md`](dsa-performance.md), CodeRabbit in `08`, CI in `09`
