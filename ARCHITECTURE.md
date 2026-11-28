# Architecture — Software Factory All-in-One

How the kit is organised, which document wins when two apply, and how to load only what a task needs. The kit lives either in its own repository or vendored inside a product repository as `software-factory-all-in-one/` (created by [`scripts/seed.mjs`](scripts/seed.mjs)).

## 1. Load only what the task needs

Never read the whole kit. Pick the one route that matches the task, read its **always** column, and open the rest only when its condition is true. Judgment guides are opened through the trigger table in [`07-judgment/README.md`](07-judgment/README.md) (the router); open only the technology pack for the product's pinned stack and only the harness pack you are driving.

| Task | Always read | Read when it applies | Leave closed |
|------|-------------|----------------------|--------------|
| Plan a new product (requirements → plan) | [`00-USAGE`](00-USAGE.md) → [`01-STEPS`](01-STEPS.md) → [`02-DELIVERY`](02-DELIVERY.md) | [`03-PROTOTYPE`](03-PROTOTYPE.md) for a UI or API explorer · [`stack-selection`](07-judgment/stack-selection.md) before pinning a stack · router rows whose trigger matches · [`templates/`](templates/README.md) while instantiating | `technologies/` until a stack is pinned · `agents/` except your harness · `04`, `08` (implementation) · `coverage/` |
| Implement a feature, fix a bug or refactor (implementation repository) | [`08-IMPLEMENTATION-DAY`](08-IMPLEMENTATION-DAY.md) (pipeline, closeout, reply shape) | [`04-FEATURE_SDLC`](04-FEATURE_SDLC.md) for feature decomposition · router rows for the concerns the change touches (API, security, integration, AI, payments, …) · `technologies/<pinned-stack>/` · when adding a consequential abstraction: [`design-patterns`](07-judgment/design-patterns.md) selector then at most 1–3 [`design-patterns/<candidate>/`](design-patterns/README.md) folders · when changing distributed topology: [`architecture-patterns`](07-judgment/architecture-patterns.md) selector then at most 1–3 [`architecture-patterns/<candidate>/`](architecture-patterns/README.md) folders · when sketching large-scale design: [`system-design`](07-judgment/system-design.md) selector then at most 1–3 [`system-design/<candidate>/`](system-design/README.md) folders · [`09-CI-CD`](09-CI-CD.md) for pipeline work · [`06-LESSONS`](06-LESSONS.md) when the change resembles a past mistake | Other stacks' packs · planning-only docs (`01`, `03`) · `coverage/` · the whole `design-patterns/` / `architecture-patterns/` / `system-design/` trees |
| Security- or money-sensitive change | Product `docs/SECURITY.md` and `docs/COMPLIANCE.md` · [`compliance-ethics-risk`](07-judgment/compliance-ethics-risk.md) | [`payments`](07-judgment/payments.md) · [`booking`](07-judgment/booking.md) · [`integration-engineering`](07-judgment/integration-engineering.md) · [`ai-engineering`](07-judgment/ai-engineering.md) · [`enterprise-system-design`](07-judgment/enterprise-system-design.md) | Guides whose trigger does not apply |
| Set up or change CI/CD | [`09-CI-CD`](09-CI-CD.md) | [`templates/implementation/github-actions/`](templates/implementation/github-actions/README.md) · [`api-readiness`](07-judgment/api-readiness.md) | Method docs for planning |
| Drive a specific agent or IDE | The product's `AGENTS.md` · [`agents/<harness>/`](agents/README.md) | — | Every other harness pack |
| Change the factory itself | [`CONTRIBUTING`](CONTRIBUTING.md) → this file → [`coverage/README`](coverage/README.md) | [`EXCELLENCE`](EXCELLENCE.md) · [`DECISIONS`](DECISIONS.md) · the index of the area you touch | Areas you are not changing |

## 2. Which instruction wins

1. **Inside a product repository:** the product's `AGENTS.md` (its single rulebook) → the product's own docs (`requirements.md`, then SRS / PRD / BRD, `SECURITY`, `COMPLIANCE`, `DECISIONS`) → this kit (method docs → judgment guides → packs) → harness packs, which are craft only. The kit never overrides a product decision; propose an ADR in the product instead.
2. **Inside the kit:** method docs (`00`–`09`) define the process and its gate slots; judgment guides define what a gate checks; packs define stack and harness craft. The owner listed in § 3 is the source of truth for its subject; if two kit documents disagree, that is a bug — fix it or open an issue.
3. **Wording:** *must*, *never* and *hard rule* are mandatory; *prefer*, *consider*, *optional* and *when earned* are guidance. Anything in [`examples/`](examples/) or written as "e.g." is an illustration, never a requirement. Coverage percentages are self-assessment, not promises. Only decisions defined in [`DECISIONS.md`](DECISIONS.md) may be cited.

## 3. Areas and owners

| Area | Single source of truth for | Never contains | Index |
|------|----------------------------|----------------|-------|
| Root files | Overview and counts ([`README`](README.md)), agent rules for the kit ([`AGENTS`](AGENTS.md)), structure and routes (this file), how to change the kit ([`CONTRIBUTING`](CONTRIBUTING.md)), why it is shaped this way ([`DECISIONS`](DECISIONS.md)), what changed ([`CHANGELOG`](CHANGELOG.md)), the north star ([`EXCELLENCE`](EXCELLENCE.md)) | Product facts; private workflow | — |
| Method `00`–`09` | The delivery process and the slots where gates plug in | Lists of every guide or pack; vendor tools as mandatory steps | [`README`](README.md) map |
| [`07-judgment/`](07-judgment/README.md) | One guide per specialist concern and its trigger | Second constitutions; product facts | Router table (the only list of guides) |
| [`technologies/`](technologies/README.md) | Craft for one stack and version line | Which stack a product uses; product version pins | Pack table + shared protocol |
| [`design-patterns/`](design-patterns/README.md) | On-demand GoF pattern packs (problem, applicability, implementation, trade-offs, relations) | Selection logic (lives in judgment); product architecture | Index table |
| [`system-design/`](system-design/README.md) | On-demand large-scale system design packs (fundamentals + exercises; primer-inspired, original prose) | Selection logic (lives in judgment); capacity/topology sketches | Index table |
| [`architecture-patterns/`](architecture-patterns/README.md) | On-demand cloud/distributed architecture packs (Azure catalog–inspired, original prose) | Selection logic (lives in judgment); product cloud topology | Index table |
| [`agents/`](agents/README.md) | How to drive one harness well | Rules (the product's `AGENTS.md` owns those) | Pack table + shared quality bar |
| [`templates/`](templates/README.md) | The product seed | Kit-relative links; one product's defaults; private workflow | `seed.mjs` mapping |
| [`coverage/`](coverage/README.md) | Self-assessment; the only home of percentages | Rules | Scorecard |
| [`scripts/`](scripts/) + `.github/` | Gates, seeding, CI | Content | § 6 |
| [`examples/`](examples/), [`assets/`](assets/README.md) | Illustrations | Real data | — |

## 4. Rules that keep the kit maintainable

1. **One owner per fact.** Counts are computed from the tree; percentages live only in the atlas; the guide list lives only in the router; each pack list lives only in its index; reasons live only in `DECISIONS.md`. Everything else links.
2. **Two path systems.** Kit files link in kit coordinates. Files under `templates/` are written in **product coordinates** — the paths they will have after seeding — and reach the kit only through `software-factory-all-in-one/…`, a name that never changes. Nothing links outside the checked root.
3. **Method links the router, not every guide.** A hub document names the gate slot and links the router; only always-on guides are linked directly.
4. **Observers never drive.** No rule depends on a coverage percentage.
5. **Self-contained.** Every link and cited ID resolves inside the kit.
6. **Vendored copies are read-only.** Products change the kit only upstream, through a pull request.
7. **Generic at three layers.** Identifiers are gated in CI, defaults are placeholders, history stays clean ([SF-14](DECISIONS.md#sf-14-forever-generic-public-contributions-upstream)).
8. **Tooling is check-only.** Gates are zero-dependency Node scripts with self-tests; nothing rewrites documents automatically ([SF-15](DECISIONS.md#sf-15-gates-are-zero-dependency-check-only-and-probe-tested)).

## 5. Adding something

| To add | Touch | Proven by |
|--------|-------|-----------|
| A judgment guide | The guide + one router row (+ an atlas row) | `check-structure` (router ↔ files) |
| A technology pack or a new major version | Copy [`technologies/_pack-template/`](technologies/_pack-template/README.md), or add a `<slug>-<version>/` slice next to the old one; one pack-table row | `check-structure` (pack shape, dated official refs) |
| A design-pattern pack | Copy [`design-patterns/_pack-template/`](design-patterns/_pack-template/README.md); one index-table row; original prose only | `check-structure` (six files, Sources Checked dates, index ↔ folders) |
| A system-design pack | Copy [`system-design/_pack-template/`](system-design/_pack-template/README.md); one index-table row; original prose only | `check-structure` (six files, Sources Checked dates, index ↔ folders) |
| An architecture-pattern pack | Copy [`architecture-patterns/_pack-template/`](architecture-patterns/_pack-template/README.md); one index-table row; original prose only | `check-structure` (six files, Sources Checked dates, index ↔ folders) |
| An agent harness | One `agents/<slug>/README.md` from [`agents/_pack-template/`](agents/_pack-template/README.md) | `check-structure` |
| A method doc | The next free number (`10-…`); never renumber existing docs | `check-content-integrity` |
| A template file | Write it in product coordinates; add it to the template CI list only if every product must have it | `check-seed` |
| A gate | A zero-dependency script with probes, run in CI and named in CONTRIBUTING, AGENTS, this file and the PR template | Its own probes + `check-structure` (gate lists) |
| A new top-level entry | Also add it to `KIT_TOP` in `scripts/seed.mjs` | `check-structure` |
| A release | Move the `[Unreleased]` entries under a version heading in [`CHANGELOG.md`](CHANGELOG.md), then tag ([`CONTRIBUTING.md`](CONTRIBUTING.md) § Releasing) | `check-structure` (CHANGELOG format) |

## 6. Gates

| Script | Proves | Runs in |
|--------|--------|---------|
| [`check-forever-generic.mjs`](scripts/check-forever-generic.mjs) | No mailboxes, secret-shaped tokens, private page URLs or user paths | Kit CI, maintainer sync |
| [`check-content-integrity.mjs`](scripts/check-content-integrity.mjs) | No tool artifacts written back; tables render on GitHub; links and anchors resolve | Kit CI, maintainer sync, seeded repos (`--product`) |
| [`check-structure.mjs`](scripts/check-structure.mjs) | Packs well-formed; router lists every guide; README facts match the tree; cited decisions and decision ranges match the log; every gate is wired into CI and named in each gate list; equal-weight atlas rollups equal the mean of their rows; every workflow action is pinned to a commit SHA (container actions to an image digest); `KIT_TOP` exact; CHANGELOG release format | Kit CI, seeded repos |
| [`check-requirements-activation.mjs`](scripts/check-requirements-activation.mjs) | The requirements-driven activation path is wired | Kit CI, seeded repos |
| [`check-seed.mjs`](scripts/check-seed.mjs) | A seeded repository passes its own gates — fresh, activated, in place, updated | Kit CI, maintainer sync |

Run them all with the commands in [`CONTRIBUTING.md`](CONTRIBUTING.md).

## 7. Known limits

- **Team shape.** Templates assume frontend and backend seats (`docs/frontend/`, `docs/backend/`, SRS owners FE / BE / Both). Mobile, desktop, data and infrastructure surfaces are thinner — see [`coverage/07-software-surfaces.md`](coverage/07-software-surfaces.md).
- **Self-assessed coverage.** Atlas percentages are judgment; treat them as orientation.
- **Markdown edge cases.** The integrity gate covers the table and link failures seen in practice, not every CommonMark corner.
