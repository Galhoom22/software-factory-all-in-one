# Reverse proxy — trade-offs

## Pros

- Shared vocabulary for reviews and ADRs.
- Forces explicit numbers and failure thinking.
- Composes with related packs in relations.md.

## Cons

- Easy to over-design from interview muscle memory.
- Wrong family worsens cost or consistency.
- Exercises are teaching scaffolds — not product templates to paste.

## Costs

| Cost | Notes |
|------|-------|
| Complexity | Extra tiers/ops |
| Consistency lag | Often traded for availability |
| Indirection | Harder traces |

## Common misuse

- Opening the whole `system-design/` tree.
- Copying primer brand examples into products.
- Skipping modular monolith baseline.

## Review checklist

1. Problem sentence matches this pack?
2. Simpler alternative rejected?
3. Numbers or explicit N/A?
4. Confused-with considered?
5. ADR when consequential?
6. Forever-generic — no private product facts?
