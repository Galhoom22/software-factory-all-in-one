# Queue job ran before the DB commit

**Date:** YYYY-MM-DD · **Area:** async jobs / actions

## Symptom

A job stayed `queued` or failed with “model not found” even though the HTTP request returned `202` and the row existed afterward in the database.

## Root cause

`dispatch()` ran inside the same database transaction that inserted the job’s target row. With a sync (or very fast) queue, the worker started **before commit**, so the select saw no row.

## Resolution

Keep creates inside the transaction; **dispatch only after commit** (framework `afterCommit` on the job/bus, or dispatch outside the transaction).

## Lesson

Any “insert then queue work that loads that insert” flow needs after-commit dispatch. Applies to embeddings, imports, AI suggestion sets, and mail that references new records.
