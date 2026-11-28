# Judgment — CI workflow hardening (GitHub Actions)

Absorb **workflow security** as judgment: the YAML that runs your checks is code with its own threat model. Risk sits in trigger types, token scopes and the way `${{ }}` expressions are pasted into a shell, so application linters and code review of `src/` never see it. Use this whenever a change adds or edits a file under `.github/workflows/`, a reusable workflow, or a composite action.

**When this applies:** any workflow change in a planning, implementation or kit repository. Other CI hosts (GitLab, Azure Pipelines, Buildkite) have the same classes of risk with different names; map the checklist onto them.

**Pairs with:** [`09-CI-CD.md`](../09-CI-CD.md) § Principles (pins, secrets, CD gates) · product `docs/SECURITY.md` · [`verification-engineering.md`](verification-engineering.md).

---

## Problem this prevents

A workflow looks like configuration, so it gets a lighter review than code. Agents generate `run: echo "${{ github.event.pull_request.title }}"` readily; maintainers switch to `pull_request_target` "to make secrets work on fork PRs"; jobs inherit a read/write token they never needed. One crafted branch name or PR title then runs as a shell command with a write token and the repository's secrets.

## Core ideas

| Idea | Means |
|------|-------|
| **`${{ }}` is text substitution** | The runner expands the expression into the script **before** the shell parses it. An attacker-set value inside `run:` or `github-script`'s `script:` is code, not data. |
| **Trust follows the trigger** | `push` and same-repository `pull_request` run with collaborator trust. A fork `pull_request` gets a read-only token and no secrets — safe by design. `pull_request_target`, `workflow_run`, `issue_comment` and `issues` run in the base repository with a write token and secrets, yet outsiders can fire them. |
| **The token is the blast radius** | Without a `permissions:` block a job inherits the repository default, which may be write to most scopes. Deny by default; grant per job. |
| **References are supply chain** | A tag or branch can be moved. GitHub's current guidance: a workflow-dependency **lockfile** is the strongest measure where the repository adopts one; otherwise pin every action to a full commit SHA with a `# vX.Y.Z` comment and let Dependabot raise updates. Never `@main` / `@master`. |
| **Artifacts and caches cross trust levels** | Output of an untrusted run is data. A privileged job may read it, never execute it, and validates paths on extract. |

## Checklist (every workflow change)

1. **Triggers** — List every `on:` entry. A privileged trigger (`pull_request_target`, `workflow_run`, `issue_comment`, `issues`) needs a written reason in the PR. It never checks out the PR head and then installs, builds or tests it; split into an unprivileged `pull_request` workflow that runs the code and a privileged `workflow_run` that only consumes its result.
2. **Injection** — Grep every `run:` and `script:` for `${{`. Any value an outside contributor can set (issue/PR/comment/review title or body, `head_ref`, branch labels, commit messages and author fields, wiki page names) moves to `env:` and is read as a quoted shell variable (`"$PR_TITLE"`) or `process.env.X`. Validate shape before use (a branch name matches `^[A-Za-z0-9._/-]+$`).
3. **Permissions** — Top-level `permissions: {}` or `contents: read`; each job adds only the scope it uses (`pull-requests: write` only on the commenting job, `id-token: write` only on the deploying job). Never `write-all`.
4. **Credentials on disk** — `actions/checkout` stores the token in `.git/config` by default. Set `persist-credentials: false` unless a later step in that job pushes.
5. **Secrets** — Referenced only in the job that needs them; never echoed; no `set -x` near them; never passed to an unpinned third-party action or to a step that runs untrusted code. Multiline untrusted text written to `$GITHUB_ENV` / `$GITHUB_OUTPUT` uses a random heredoc delimiter, or is not written at all.
6. **Cloud access** — OIDC short-lived credentials (`id-token: write` + a trust policy scoped to repository and branch or environment) instead of stored cloud keys.
7. **Downloaded tools** — A binary fetched in `run:` (`curl … | tar`) is supply chain too: pin the exact version, download to a file, verify the publisher's SHA-256 (`sha256sum -c`) before extracting, and never pipe a remote script into a shell.
8. **Runners** — No self-hosted runner for any workflow a fork can trigger; if unavoidable, ephemeral single-use runners with no secrets.
9. **Production** — Deploy jobs sit behind a protected `environment` with required reviewers, run only from `main`, and follow [`09-CI-CD.md`](../09-CI-CD.md) phases.
10. **Evidence** — The PR says which items were checked. A clean result still lists what was checked.

### Safe pattern (copy shape, not values)

```yaml
permissions:
  contents: read
jobs:
  label:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: write
    steps:
      - uses: actions/checkout@<40-char-sha> # vX.Y.Z
        with:
          persist-credentials: false
      - env:
          PR_TITLE: ${{ github.event.pull_request.title }}
        run: printf 'Title: %s\n' "$PR_TITLE"
```

## Severity (for review findings)

| Severity | Example |
|----------|---------|
| Critical | Privileged trigger that checks out and runs PR code; attacker-set `${{ }}` in `run:` on a privileged trigger |
| High | Action on a branch or mutable tag; `write-all`; unused `write` scope; injection sink on any trigger |
| Medium | No `permissions:` block; secret reachable by a same-repository PR author who does not need it |
| Low | `persist-credentials` left on in a job that never pushes; missing version comment beside a SHA |

Do not rate a fork `pull_request` running untrusted code as Critical: it has no secrets and a read-only token.

## Day workflow hook

When must-finish edits a workflow: run the checklist above before opening the PR, cite it in the PR body, and let the kit structure gate (or the product's own CI) prove the mechanical parts. The reviewer other than the builder reads the trigger and permission lines explicitly.

## Gate in this kit

`scripts/check-structure.mjs` enforces the mechanical subset on the kit's own CI and every template workflow: actions pinned to a SHA with a version comment, a top-level `permissions:` key in every workflow that defines jobs, no `pull_request_target` trigger, and no attacker-controllable context interpolated inside a `run:` or `script:` body. Products copy the same rules into their own CI when they want them enforced.

## Anti-patterns

| Anti-pattern | Do instead |
|--------------|------------|
| Switch to `pull_request_target` so fork PRs see secrets | Keep `pull_request`; move the secret-needing step to a privileged `workflow_run` that consumes results only |
| `run: git checkout ${{ github.head_ref }}` | `env: HEAD_REF: ${{ github.head_ref }}` then `git checkout "$HEAD_REF"` |
| One top-level `permissions: write-all` "to stop errors" | Find the job that needs the scope; grant it there |
| Long-lived cloud keys in repository secrets | OIDC with a scoped trust policy |
| "It is only CI" review | Same reviewer bar as production code ([`human-code-review.md`](human-code-review.md)) |

## Sources (checked 2026-11-28)

- GitHub Docs — [Secure use reference](https://docs.github.com/en/actions/reference/security/secure-use) (intermediate environment variables, lockfile over SHA pinning, least-privilege `GITHUB_TOKEN`, `pull_request_target` / `workflow_run` risk, OIDC).
- Distilled from the MIT-licensed community collection [github/awesome-copilot](https://github.com/github/awesome-copilot) (`github-actions-hardening` skill) — ideas only, original prose.
