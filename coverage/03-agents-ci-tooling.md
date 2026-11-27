# Coverage — agents, harnesses, CI, scripts, implementation Actions

Paths under `software-factory-all-in-one/templates/` unless noted.

---

## Single rulebook + harness discovery

| ✅ | Capability | Path | % | Notes |
|----|------------|------|---|-------|
| ✅ | Single rulebook | `AGENTS.template.md` | **95** | Becomes product `AGENTS.md` |
| ✅ | Agent discovery pack | `agent-discovery/**` | **93** | CLAUDE, GEMINI, llms.txt, Copilot, Windsurf, Gemini settings |
| ✅ | Agents harness library | `software-factory-all-in-one/agents/**` + `coverage/08-ai-agents` | **88** | Per-harness craft; atlas % (SF-11) |
| ✅ | Cursor rules | `cursor-rules/*.mdc` | **92** | delivery, ponytail, clean-code, engineering-standards, owner-standing, project-ui-design, requirements-activation |
| ✅ | Codex rails | `codex/**` | **90** | config.toml, hooks, SessionStart/Stop scripts, CLI.md |
| ✅ | Codex verify script | `scripts/verify-codex-cli.mjs` | **85** | Machine check |

**Harness average: ~91%**

---

## Planning-repo GitHub + scripts

| ✅ | Capability | Path | % | Notes |
|----|------------|------|---|-------|
| ✅ | Planning CI workflow | `.github/workflows/ci.yml` | **90** | Docs + activation + optional project-ui |
| ✅ | PR template | `.github/pull_request_template.md` | **85** | — |
| ✅ | Issue forms | `.github/ISSUE_TEMPLATE/**` | **85** | Blank issues off via config |
| ✅ | CODEOWNERS | `.github/CODEOWNERS` | **80** | Placeholder owners |
| ✅ | Dependabot | `.github/dependabot.yml` | **88** | Minor/patch groups |
| ✅ | Delivery check | `scripts/check-delivery.mjs` | **92** | No MVP wording / delivery rails |
| ✅ | Agents check | `scripts/check-agents.mjs` | **90** | Discovery not gutted |
| ✅ | Scope check | `scripts/check-scope.mjs` | **88** | Planning-only scope |
| ✅ | Planning entry gate | `scripts/check-planning-entry.mjs` | **92** | Activation when entry file exists |
| ✅ | Factory activation wiring | `software-factory-all-in-one/scripts/check-requirements-activation.mjs` | **92** | Factory self-check (method side) |

---

## Implementation repository Actions (FE/BE)

| ✅ | Capability | Path | % | Notes |
|----|------------|------|---|-------|
| ✅ | Impl Actions README | `implementation/github-actions/README.md` | **90** | Phase A first |
| ✅ | Backend CI skeleton | `implementation/github-actions/backend-ci.yml` | **88** | PHP/format/tests pattern |
| ✅ | Frontend CI skeleton | `implementation/github-actions/frontend-ci.yml` | **88** | Node/lint/test/build (+ Playwright hook) |
| ✅ | Staging deploy CI | `implementation/github-actions/ci-with-staging-deploy.yml` | **85** | Phase B — only when hooks exist |
| ✅ | Production deploy | `implementation/github-actions/deploy-production.yml` | **85** | Manual `workflow_dispatch` |
| ✅ | Method for progressive CD | `software-factory-all-in-one/09-CI-CD.md` | **94** | Agents auto-detect phase |

**Impl CI/CD average: ~88%**

---

## Studio / product scripts **outside** `templates/` (still part of the factory system)

These live in the **product planning repo** that owns the factory copy (not copied into every new seed unless you choose to). Still inventory them so agents do not “reinvent sync.”

| ✅ | Capability | Typical path (product planning repo) | % | Notes |
|----|------------|--------------------------------------|---|-------|
| ✅ | Upstream contributions (vendored copies read-only) | `CONTRIBUTING.md`, `scripts/seed.mjs --update` | **93** | Public OSS; pull requests upstream (SF-14) |
| ✅ | Jira CSV / card generators | `scripts/generate-jira-*.mjs` (product) | **70** | Product-specific; method in `docs/jira` templates is thinner |
| ⚠️ | Coverage % auto-validator | `scripts/check-structure.mjs` (rollup arithmetic only) | **50** | Row %s stay judgment; the equal-weight breadth rollups are recomputed from their rows since both drifted (see `05-gaps`) |

---

## Agent decision cheat-sheet

| If owner asks to add… | Prefer | Avoid |
|-----------------------|--------|-------|
| New AI harness support | Pack under `software-factory-all-in-one/agents/<slug>/` + thin `agent-discovery/` pointer + `08-ai-agents` % | Forking a second rulebook |
| New CI gate | Extend `09-CI-CD` + matching YAML skeleton | Mid-day PR spam “for CI” |
| New CodeRabbit paid product | Wait for explicit owner opt-in (`08` Free default) | Starting trials |
| Improve the factory | Pull request to the factory repository; refresh copies with `seed.mjs --update` | Editing a vendored copy in place |
