# AI suggestions silently rewrote the source record

**Date:** YYYY-MM-DD · **Area:** AI jobs / domain Actions

## Symptom

Users (or tests) saw canonical data change after requesting “suggestions” or “improve with AI,” with no explicit apply step.

## Root cause

The job wrote model output straight into the master/source entity to “save a round trip,” skipping the product rule that AI proposes and humans commit.

## Resolution

Suggestion endpoints create a suggestion set + queued job (`202`). Validators (length floor, identity fields, numeric tokens) run on model output. Source records change only through normal authenticated CRUD when the user applies a suggestion.

## Lesson

Never auto-merge AI output into source-of-truth data. Consent, throttle, anonymize-before-provider, and post-model validation are trust boundaries — not optional polish.
