# Implementation GitHub Actions skeletons

Copy into each **frontend** or **backend** implementation repository under `.github/workflows/`. Do **not** copy these into the planning repository (planning uses [`../.github/workflows/ci.yml`](../../.github/workflows/ci.yml)).

**Progressive copy (do not skip ahead):**

| When | Copy |
|------|------|
| First implementation days (**Phase A**) | `backend-ci.yml` or `frontend-ci.yml` only → rename to `.github/workflows/ci.yml`. No deploy jobs. |
| Host + staging hook exist (**Phase B**) | Add staging job from `ci-with-staging-deploy.yml`. |
| Production release path ready (**Phase C**) | Add `deploy-production.yml` + GitHub `production` environment with reviewers. |

Before first push:

1. Pin every `uses:` action to a **commit SHA** (Dependabot can open PRs later).
2. Match PHP / Node versions to the product SRS §2 and lockfiles.
3. Add secret scan if not already covered org-wide.
4. **Do not** enable deploy jobs until the matching secret exists — a missing hook must never red every CI run.
5. Keep deploy hooks in GitHub secrets only — never in YAML plaintext.

Method: [`../../../09-CI-CD.md`](../../../09-CI-CD.md) (§ Progressive activation). Day loop: [`../../../08-IMPLEMENTATION-DAY.md`](../../../08-IMPLEMENTATION-DAY.md).
