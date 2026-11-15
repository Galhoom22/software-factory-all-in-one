# Implementation GitHub Actions skeletons

Copy into each **frontend** or **backend** implementation repository under `.github/workflows/`. Do **not** copy these into the planning repository (planning uses [`../.github/workflows/ci.yml`](../../.github/workflows/ci.yml)).

Before first push:

1. Pin every `uses:` action to a **commit SHA** (Dependabot can open PRs later).
2. Match PHP / Node versions to the product SRS §2 and lockfiles.
3. Add secret scan if not already covered org-wide.
4. Add `deploy-staging` only after the host deploy hook secret exists; add `deploy-production.yml` with a GitHub `production` environment and required reviewers.
5. Keep deploy hooks in GitHub secrets only — never in YAML plaintext.

Method: [`../../../09-CI-CD.md`](../../../09-CI-CD.md). Day loop: [`../../../08-IMPLEMENTATION-DAY.md`](../../../08-IMPLEMENTATION-DAY.md).
