# CI language version did not match the lockfile

**Date:** YYYY-MM-DD · **Area:** GitHub Actions / Composer

## Symptom

Local tests passed; CI failed installing dependencies or running the suite with obscure Symfony/platform errors.

## Root cause

The Actions workflow pinned an older PHP (or Node) from memory or an outdated SRS line, while `composer.lock` / engine fields already required a newer runtime.

## Resolution

Set CI to the runtime the lockfile actually needs; re-verify after every major lock bump; keep SRS §2 and the workflow in the same commit when the pin moves.

## Lesson

CI runtime follows the lockfile, not training data. Format gates (Pint/prettier) are the same class of failure — run them locally before opening the day PR.
