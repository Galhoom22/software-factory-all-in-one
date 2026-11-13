# Learning from mistakes

Hard-won **engineering** lessons so the same non-obvious bug is not paid for twice.

Planning-process lessons stay in `playbook/06-LESSONS.md`. **UI visual defects** go in `project-ui/DESIGN-ERRORS.md` (fix same turn + append).

## When to write

- The owner had to intervene to crack a stuck bug, or
- A long hunt ended in a surprising root cause worth remembering

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

## Recall

Before declaring a hard bug unsolvable, scan this folder and `project-ui/DESIGN-ERRORS.md`.
