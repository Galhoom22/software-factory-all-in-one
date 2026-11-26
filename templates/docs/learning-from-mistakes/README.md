# Learning from mistakes

Hard-won **engineering** lessons so the same non-obvious bug is not paid for twice.

Use this folder in the **planning** repo (prototype / docs bugs) and copy the same pattern into each **implementation** repo (API / app bugs). Planning-process lessons stay in `software-factory-all-in-one/06-LESSONS.md`. **UI visual defects** go in `project-ui/DESIGN-ERRORS.md` (fix same turn + append).

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

## Promote to the factory (same session — automatic)

Agents promote **without waiting for the owner** when the **Lesson** would help the **next** product **and** clearly raises template professionalism:

1. Draft one bullet for the matching section of the factory's `06-LESSONS.md` (forever-generic — no product names, people, or ticket keys), or a tightening of the TESTING / SECURITY / CI templates if that is the better home — in a checkout of the factory repository, not in the vendored copy.
2. Open that change as a pull request to the factory repository the same session (generic wording), targeting the home chosen in step 1.
3. Leave the detailed story in this folder; the factory only keeps the rule.
4. **Do not promote** typos, one-off env glitches, or a rule already present in `06-LESSONS.md`. Depth over volume.

Starter examples (generic): [`queue-dispatch-before-commit.md`](queue-dispatch-before-commit.md), [`ci-runtime-mismatched-lockfile.md`](ci-runtime-mismatched-lockfile.md), [`ai-suggestions-must-not-mutate-source.md`](ai-suggestions-must-not-mutate-source.md).

## Recall

Before declaring a hard bug unsolvable, scan this folder, the sibling implementation repo’s `docs/learning-from-mistakes/`, `software-factory-all-in-one/06-LESSONS.md` § Implementation, and `project-ui/DESIGN-ERRORS.md`.
