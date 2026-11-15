# CI / CD — quality gates for planning and implementation

Reusable method for **continuous integration** (prove every change) and **continuous delivery** (ship only from a green default branch through the pipeline). Keep product host names, secrets, and day-page URLs out of this file — put those in the product’s `docs/DEPLOYMENT.md` and `docs/OWNER_STANDING.md`.

Pairs with [`08-IMPLEMENTATION-DAY.md`](08-IMPLEMENTATION-DAY.md): CI/CD is not optional decoration; it is a **hard gate** in the day closeout.

## Why this exists

Local tests catch most bugs. **GitHub Actions** catches “works on my machine,” missing files, wrong PHP/Node, and secret leaks. **CD** (host deploy hooks started by CI) stops laptop deploys and keeps staging/production tied to `main` only after checks pass. Together they raise professionalism without inventing a second delivery method.

## Two layers

| Layer | Where | Job |
|-------|--------|-----|
| **Planning CI** | Planning repository | Docs/rails intact, secret scan, prototype build/tests when `project-ui/` exists. Template: [`templates/.github/workflows/ci.yml`](templates/.github/workflows/ci.yml). |
| **Implementation CI** | FE and BE repositories | Lint/format, unit/feature tests, secret scan, dependency audit as needed. Skeletons: [`templates/implementation/github-actions/`](templates/implementation/github-actions/). |
| **CD** | Same FE/BE repos + host (e.g. Forge) | After CI green on `main`: auto-deploy **staging**; **production** only via manual approved workflow. Never deploy from a laptop. Rules live in product `docs/DEPLOYMENT.md` (DR-01 / DR-02). |

## Principles (do not weaken)

1. **CI is a merge gate.** Do not merge a day PR while the repository’s GitHub Actions check is red or still running.
2. **Local proof first.** Agents still run the same checks locally before opening the PR (fail fast). CI is the shared proof, not a substitute for local runs.
3. **CD only from `main`, only after CI.** Staging may auto-deploy on push to `main`. Production requires an explicit approved run (`workflow_dispatch` + environment reviewers).
4. **Secrets only in host env and GitHub Actions secrets** — never in git, images, or chat.
5. **Pin Actions to commit SHAs** (Dependabot updates them). Pin CLI tools run via `npx` to exact versions.
6. **CodeRabbit ≠ CI.** Review finds design/security smells; CI proves tests and scans. Both are required in day closeout when the repo has them.
7. **No CD theater.** Until staging/production hooks exist, document the CD steps and skip deploy/smoke/Sentry-after-deploy — do **not** fake a green deploy. CI still runs.

## Planning repository CI

Minimum jobs (grow with the product):

- Secret scan (e.g. gitleaks CLI).
- Required docs exist; governing rules / delivery / agent-discovery / scope scripts.
- When `project-ui/` exists: install, lint, tests, build, UI anti-pattern detect.

Agents: run the same scripts locally before every push; watch the Actions run after push; fix red CI in the same session.

## Implementation repository CI

### Backend (typical Laravel)

- Checkout → setup PHP (version from SRS / `composer.json`) → `composer install` → app key for testing → format check (e.g. Pint `--test`) → `php artisan test` (or Pest).
- Prefer the same DB driver the test suite already uses in CI (often SQLite `:memory:` via `phpunit.xml`) so PRs stay fast. Use Compose Postgres in CI only when tests require it.
- Optional later: static analysis, `composer audit`.

### Frontend (typical Next.js)

- Checkout → setup Node (Active LTS from SRS) → `npm ci` → lint → unit/component tests → build → short Playwright list if the TESTING guide requires it on PRs.
- Mock the API on PRs; full-stack smoke is staging/release.

### Shared on every implementation PR

- Secret scan.
- Fail the job on test failure; do not `continue-on-error` for the merge gate.

Copy the YAML under [`templates/implementation/github-actions/`](templates/implementation/github-actions/) into each FE/BE repo’s `.github/workflows/`, then pin SHAs and match the stack versions.

## CD (continuous delivery)

Aligned with the shared deployment guide pattern:

```text
PR → CI green → merge to main
        ↓
CI on main green → call staging deploy hook (Forge / host)
        ↓
Smoke test (repo DEPLOYMENT guide) → optional Sentry glance
        ↓
Production: manual “Deploy production” workflow + environment approval
```

- Store deploy hook URLs only as GitHub secrets (`FORGE_DEPLOY_HOOK_STAGING`, `FORGE_DEPLOY_HOOK_PRODUCTION` in a `production` environment).
- API contract changes: deploy **backend** production before frontend.
- Rollback: revert on `main`, let CI redeploy staging, then run production deploy again (or host release history in an emergency, then fix `main` immediately).

## Day closeout — where CI/CD sits

Full pipeline: [`08-IMPLEMENTATION-DAY.md`](08-IMPLEMENTATION-DAY.md).

Order that raises quality without mid-day PR spam:

1. Must-finish **100%** + local proof.
2. **PR** (one PR for the day).
3. **CI green** on that PR (watch GitHub Actions; fix failures before continuing).
4. **CodeRabbit** (Free: CLI/IDE primary; paid: GitHub review).
5. **Merge** to default branch.
6. **Verify on `main`** (local proof again) **and** confirm CI on `main` is green.
7. **CD (when configured):** wait for staging deploy job / hook; run smoke; Sentry glance if that release is live.
8. Tracker → day checklist page.
9. Final reply: Pareto 20% + new-chat handoff (cite CI run URL + merge SHA).

Until CD exists: stop after step 6 for deploy concerns; still complete tracker/day page from verified `main` + green CI.

## Agent checklist (implementation day)

- [ ] Local checks match what CI will run.
- [ ] PR open only after must-finish is 100%.
- [ ] `gh run watch` / Actions UI: PR CI green before merge.
- [ ] CodeRabbit blocking findings fixed.
- [ ] After merge: local verify + `main` CI green.
- [ ] If staging hooks exist: smoke + Sentry glance; else note “CD not configured yet” in the day summary (honest, not a fake pass).
- [ ] Never force-push; never put secrets in workflows as plaintext.

## What this is not

- Not permission to open mid-day PRs to “get CI feedback early” when the day standing forbids it — finish the day, then one PR.
- Not a second product requirements source.
- Not a substitute for SECURITY / COMPLIANCE / Governing Product Rules / actor-loop delivery.
