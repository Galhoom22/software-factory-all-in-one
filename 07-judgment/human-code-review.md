# Judgment — human code review (senior / tech-lead bar)

Absorb **human-first code review** as **judgment only**. Map it onto the day pipeline, Clean Code rules, `technologies/<slug>/quality.md`, and CodeRabbit — never invent a second review product, a “style committee,” or a ritual that replaces CI.

**When this applies:** every implementation day that changes production code (or non-trivial tests). Doc-only / config-only days: mark **N/A** for syntax/framework checks; still skim prose clarity when docs are agent-facing.

## Problem this prevents

Code that only an AI “gets”: dense one-liners, lying names, nested control flow, outdated language idioms, ignored framework conventions, and “it passes tests” while a human senior would reject the PR. Companies fix that with a **tech-lead / senior review** after the builder finishes. Agents must apply that bar **before** Done — CodeRabbit assists; it does not excuse inhuman code.

**Target:** a competent human **and** an AI can read the change in one pass and understand intent.

## Review axes (senior pass)

Run these on the day’s diff (touched files only — Ponytail: no drive-by rewrites):

| Axis | Pass when | Fail looks like |
|------|-----------|-----------------|
| **Human readability** | Names reveal intent; small functions; early returns; structure readable without a decoder ring | Cryptic abbreviations, deep nesting, comment-as-excuse, “clever” density |
| **Clean Code bar** | Matches project Clean Code / Principal Engineer rules (campsite: leave touched code clearer) | SOLID/pattern theater on a three-line fix; noise comments |
| **Modern syntax (pinned line)** | Uses current idioms of the **product-pinned** language/framework line (SRS §2); pack `use-these` / official docs / Context7 checked when non-trivial | Deprecated APIs, old syntax while the pack/line moved on, copy-paste from outdated tutorials |
| **Framework best practices** | Follows house architecture + `technologies/<slug>/best-practices.md` + `quality.md` for the day’s stack | Fighting the framework; inventing parallel patterns; ignoring pack `stop-using` |
| **Correctness & edges** | Happy path + honest edges at trust boundaries | Tests green but validation/authz/error paths weak |
| **Security / privacy** | No secrets, no real PII, trust-boundary checks intact | Logging PII, skipping authz “for speed” |
| **Diff hygiene** | Only what the task needs; no unrelated churn | Drive-by renames, formatting wars outside scope |

Performance/DSA stays the existing hot-path check ([`dsa-performance.md`](dsa-performance.md)). Architecture fit stays FEATURE / [`sad-adr.md`](sad-adr.md) / [`enterprise-system-design.md`](enterprise-system-design.md) when consequential.

## How this relates to CodeRabbit / CI

| Gate | Role |
|------|------|
| **Human code-review bar (this file)** | Builder (agent) acts as senior: readability + modern syntax + best practices before claiming the slice Done |
| **CI** | Clean-runner proof (tests, lint/format, secret scan) |
| **CodeRabbit** | Mechanical second pass; fix **blocking** findings | 

None replaces another. CodeRabbit Free CLI is still the default closeout review assist ([`08-IMPLEMENTATION-DAY.md`](../08-IMPLEMENTATION-DAY.md)). A green CodeRabbit run does **not** waive unreadable or outdated code the agent can see.

## Professional bar (checklist)

Before merge / before marking must-finish Done on code days:

- [ ] A human could follow the touched functions in one pass (readability)
- [ ] Names and structure match Clean Code / project engineering standards
- [ ] Syntax and APIs match the **pinned** language/framework line (re-check pack + official docs when unsure)
- [ ] Pack best-practices / quality applied (or N/A — no pack for this stack yet)
- [ ] No secrets / real PII; trust boundaries still validated
- [ ] Diff scoped to the task
- [ ] CodeRabbit (or paid GitHub review) run per day pipeline; blocking items fixed

## Day workflow hook

1. **While coding** — write for the next human reader; prefer pack `use-these` over memory.
2. **Before PR** — self-review the day’s diff against the axes above (senior pass).
3. **Closeout** — CI green → **human code-review bar** (this file) + CodeRabbit → fix blockers → merge.
4. Day summary: note **human code-review** pass (or **N/A — docs only**) plus CodeRabbit evidence.

Candor: refuse “ship ugly; AI understands it” — rewrite for human readability in the same session when the bar fails (D-82).

## Related homes

- Clean Code / engineering standards (project `.cursor/rules/clean-code.mdc`, playbook clean-code rules)
- [`technologies/`](../technologies/README.md) packs · [`agent-skills.md`](agent-skills.md) five-axis review
- Method: [`08-IMPLEMENTATION-DAY.md`](../08-IMPLEMENTATION-DAY.md) · CodeRabbit templates
