## What and why

<!-- What does this change improve for any team using the kit? Link EXCELLENCE / coverage / method doc if relevant. -->

## Forever-generic checklist

- [ ] No product names, people, tracker keys, day-page URLs, secrets, or real personal data
- [ ] Deepens an existing home when coverage is already strong (see `coverage/`)
- [ ] Raises professionalism (clarity, correctness, safety) — not vanity
- [ ] Ran every gate CI runs: `check-forever-generic.mjs`, `check-content-integrity.mjs`, `check-structure.mjs`, `check-requirements-activation.mjs`, `check-seed.mjs` (commands in `CONTRIBUTING.md`)
- [ ] Reviewed net deletions in the diff (no tool output or elided view written back)
- [ ] Updated `coverage/` % or atlas row when coverage changed
- [ ] Added a `CHANGELOG.md` line under `[Unreleased]` (with migration steps if vendored copies must act)

## Test plan

- [ ] Describe how a reader can verify the change (file to open, check to run)
