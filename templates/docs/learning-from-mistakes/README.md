# Learning from mistakes

Hard-won **engineering** lessons so the same non-obvious bug is not paid for twice.

Use this folder in the **planning** repo (prototype / docs bugs) and copy the same pattern into each **implementation** repo (API / app bugs). Planning-process lessons stay in `playbook/06-LESSONS.md`. **UI visual defects** go in `project-ui/DESIGN-ERRORS.md` (fix same turn + append).

## When to write

- The owner had to intervene to crack a stuck bug, or
- A long hunt ended in a surprising root cause worth remembering, or
- An implementation day Pareto uncovered a trap others will hit (queue-after-commit, CI language pin, silent export field drop, …)

Skip routine fixes and anything obvious in hindsight.

## Naming

`docs/learning-from-mistakes/<kebab-problem>.md`

## Template

```markdown
# <Problem in one line>

**Date:** YYYY-MM-DD · **Area:** <domain / file>

## Symptom

What looked wrong.

## Root cause

The non-obvious truth.

## Resolution

What fixed it (credit owner guidance if that unblocked it).

## Lesson

Transferable rule for next time.
```

## Promote to the playbook (same session)

If the **Lesson** would help the **next** product (not only this codebase):

1. Add one bullet under the matching section in `playbook/06-LESSONS.md` (keep it forever-generic — no product names, people, or ticket keys).
2. Sync the studio planning-playbook mirror the same session when that is how the studio works.
3. Leave the detailed story in this folder; the playbook only keeps the rule.

Starter examples (generic): [`queue-dispatch-before-commit.md`](queue-dispatch-before-commit.md), [`ci-runtime-mismatched-lockfile.md`](ci-runtime-mismatched-lockfile.md), [`ai-suggestions-must-not-mutate-source.md`](ai-suggestions-must-not-mutate-source.md).

## Recall

Before declaring a hard bug unsolvable, scan this folder, the sibling implementation repo’s `docs/learning-from-mistakes/`, `playbook/06-LESSONS.md` § Implementation, and `project-ui/DESIGN-ERRORS.md`.
