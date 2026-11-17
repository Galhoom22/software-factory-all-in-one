# CI / CD — quality gates for planning and implementation

Reusable method for **continuous integration** (prove every change) and **continuous delivery** (ship only from a green default branch through the pipeline). Keep product host names, secrets, and day-page URLs out of this file — put those in the product’s `docs/DEPLOYMENT.md` and `docs/OWNER_STANDING.md`.

Pairs with [`08-IMPLEMENTATION-DAY.md`](08-IMPLEMENTATION-DAY.md): CI/CD is not optional decoration; it is a **hard gate** in the day closeout — **at the phase the product has reached**, not beyond it.

## Progressive activation (flexibility — hard rule)

The template must work on **day one of a new product**, when there is no server and no deploy hooks yet. Do **not** require CD, Forge, staging domains, or production environments until those exist. Do **not** invent fake deploys. Agents detect the current phase and run only what that phase allows — no owner re-teaching each time.

| Phase | When it turns on | What the day closeout must do | What it must not do |
|-------|------------------|-------------------------------|---------------------|
| **A — CI only** | First implementation PR (default) | Local proof → PR → **CI green** → CodeRabbit → merge → verify on `main` (+ CI on `main`) → tracker → day page | Fail or block Done because staging/production is missing; call a deploy hook that does not exist |
| **B — Staging CD** | Host is up **and** staging deploy hook secret exists **and** a `deploy-staging` (or equivalent) job is in the workflow | Everything in A, then wait for staging deploy from green `main` → smoke from DEPLOYMENT guide → Sentry glance if live | Deploy from a laptop; treat an empty Sentry inbox as a Done gate before any live release |
| **C — Production CD** | GitHub `production` environment + production hook + owner approval path exist | Same as B for daily closeout; **production** only via manual `workflow_dispatch` + reviewers when the owner releases | Auto-deploy production on every day merge |

**How the agent detects the phase (automatic):**

1. If `.github/workflows/` has no deploy job **or** the staging hook secret is missing / undocumented as configured → **Phase A**.
2. If a deploy-staging job exists **and** product DEPLOYMENT / standing says the staging hook is configured → **Phase B**.
3. If a `deploy-production` workflow (or equivalent) + `production` environment exist → **Phase C** is available for releases; daily closeout still does not auto-ship production.

When the product later adds a server and hooks, the agent enables Phase B/C from this table and the skeletons under [`templates/implementation/github-actions/`](templates/implementation/github-actions/) — same method, next phase. No new delivery philosophy.

## Why this exists

Local tests catch most bugs. **GitHub Actions** catches “works on my machine,” missing files, wrong PHP/Node, and secret leaks. **CD** (host deploy hooks started by CI) stops laptop deploys and keeps staging/production tied to `main` only after checks pass. Together they raise professionalism without inventing a second delivery method — and without blocking early products that have only CI.

## Two layers

| Layer | Where | Job |
|-------|--------|-----|
| **Planning CI** | Planning repository | Docs/rails intact, secret scan, prototype build/tests when `project-ui/` exists. Template: [`templates/.github/workflows/ci.yml`](templates/.github/workflows/ci.yml). |
| **Implementation CI** | FE and BE repositories | Lint/format, unit/feature tests, secret scan, dependency audit as needed. Skeletons: [`templates/implementation/github-actions/`](templates/implementation/github-actions/). **Ship CI workflows first; leave deploy jobs commented or in a separate file until Phase B.** |
| **CD** | Same FE/BE repos + host (e.g. Forge) | **Phase B+ only.** After CI green on `main`: auto-deploy **staging**; **production** only via manual approved workflow. Never deploy from a laptop. Rules live in product `docs/DEPLOYMENT.md` (DR-01 / DR-02). |

## Principles (do not weaken)

1. **CI is a merge gate** once a CI workflow exists. Do not merge a day PR while the repository’s required GitHub Actions check is red or still running.
2. **Local proof first.** Agents still run the same checks locally before opening the PR (fail fast). CI is the shared proof, not a substitute for local runs.
3. **CD only from `main`, only after CI, only in Phase B+.** Staging may auto-deploy on push to `main`. Production requires an explicit approved run (`workflow_dispatch` + environment reviewers).
4. **Secrets only in host env and GitHub Actions secrets** — never in git, images, or chat.
5. **Pin Actions to commit SHAs** (Dependabot updates them). Pin CLI tools run via `npx` to exact versions.
6. **CodeRabbit ≠ CI.** Review finds design/security smells; CI proves tests and scans. Both are required in day closeout when the repo has them.
7. **No CD theater / no future-dependency traps.** Until staging/production hooks exist, stay in Phase A: document CD for later, skip deploy/smoke/Sentry-after-deploy honestly. Never add a live deploy job that will fail every PR because the secret is missing. Never make Done depend on infrastructure that is not live yet.

## Planning repository CI

Minimum jobs (grow with the product):

- Secret scan (e.g. gitleaks CLI).
- Required docs exist; governing rules / delivery / agent-discovery / scope scripts.
- **Automation (always):** `playbook/scripts/check-requirements-activation.mjs` (playbook wiring) and `scripts/check-planning-entry.mjs` (when root `my-project-requirements.md` exists, enforce agent activation rules and print planning progress; skip cleanly when the entry file is absent). Studio mirror runs the same via Playbook CI.
- When `project-ui/` exists: install, lint, tests, build, UI anti-pattern detect.

Agents: run the same scripts locally before every push; watch the Actions run after push; fix red CI in the same session.

## Implementation repository CI

### Backend (typical Laravel)

- Checkout → setup PHP (**version from `composer.lock` / platform pins**, not memorized “latest”) → `composer install` → app key for testing → format check (e.g. Pint `--test`) → `php artisan test` (or Pest).
- Prefer the same DB driver the test suite already uses in CI (often SQLite `:memory:` via `phpunit.xml`) so PRs stay fast. Use Compose Postgres in CI only when tests require it (pgvector features need Postgres or a documented fallback).
- Optional later: static analysis, `composer audit`.
- Format locally before push — a red Pint/prettier gate is a closeout failure, not a surprise.

### Frontend (typical Next.js)

- Checkout → setup Node (Active LTS from SRS) → `npm ci` → lint → unit/component tests → build → short Playwright list if the TESTING guide requires it on PRs.
- Mock the API on PRs; full-stack smoke is staging/release.

### Shared on every implementation PR

- Secret scan (when added).
- Fail the job on test failure; do not `continue-on-error` for the merge gate.
- **Payments:** fake the provider in CI by default. If a sandbox is required, use a **CI-only** sandbox (never shared with local, never live keys). Cover bad webhook signatures and duplicate event ids when billing is in scope.

Copy the YAML under [`templates/implementation/github-actions/`](templates/implementation/github-actions/) into each FE/BE repo’s `.github/workflows/`, then pin SHAs and match the stack versions. **Start with `backend-ci.yml` / `frontend-ci.yml` only (Phase A).** Add staging/production from `ci-with-staging-deploy.yml` / `deploy-production.yml` only when entering Phase B/C.

## CD (continuous delivery)

Aligned with the shared deployment guide pattern — **Phase B+ only**:

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

Order that raises quality without mid-day PR spam (run only the steps the current phase supports):

1. Must-finish **100%** + local proof.
2. **PR** (one PR for the day).
3. **CI green** on that PR (watch GitHub Actions; fix failures before continuing). *If the repo has no CI workflow yet, add Phase A CI in the same closeout before treating the day as done — do not skip inventing CI forever.*
4. **CodeRabbit** (Free: CLI/IDE primary; paid: GitHub review).
5. **Merge** to default branch.
6. **Verify on `main`** (local proof again) **and** confirm CI on `main` is green.
7. **CD (Phase B+ only):** wait for staging deploy; smoke; Sentry if live. **Phase A:** skip and write “CD not configured yet (Phase A)” in the day summary.
8. Tracker → day checklist page.
9. Final reply: Pareto 20% + new-chat handoff (cite CI run URL + merge SHA + current CI/CD phase).

## Agent checklist (implementation day)

- [ ] Detect phase (A / B / C) from workflows + secrets + DEPLOYMENT — do not ask the owner to restate it every day.
- [ ] Local checks match what CI will run.
- [ ] PR open only after must-finish is 100%.
- [ ] `gh run watch` / Actions UI: PR CI green before merge.
- [ ] CodeRabbit blocking findings fixed.
- [ ] After merge: local verify + `main` CI green.
- [ ] Phase B+: smoke + Sentry glance. Phase A: note “CD not configured yet” (honest, not a fake pass).
- [ ] Never force-push; never put secrets in workflows as plaintext; never enable a deploy job that will red-CI every push because hooks are missing.

## What this is not

- Not permission to open mid-day PRs to “get CI feedback early” when the day standing forbids it — finish the day, then one PR.
- Not a second product requirements source.
- Not a substitute for SECURITY / COMPLIANCE / Governing Product Rules / actor-loop delivery.
- Not a requirement to stand up staging/production before the first feature days — Phase A is valid and professional.
