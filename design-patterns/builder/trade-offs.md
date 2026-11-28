# Builder — trade-offs

## Pros

- Call sites read as a sequence of intentions, not a bag of nulls.
- Invariants concentrate in `build()`.
- Directors reuse recipes; concrete builders vary representation.
- Half-built state stays private to the builder.

## Cons

- More types than a small options DTO.
- Fluent APIs can hide side effects if steps do I/O early.
- Directors can become dumping grounds for unrelated recipes.
- Parallel builders drift unless covered by shared tests.

## Costs

| Cost | Notes |
|------|-------|
| Complexity | Builder (+ optional Director) + Product |
| Allocation | Temporary builder state per construction |
| Performance | Usually fine; watch giant in-memory section buffers |
| Testability | Good when `build()` is the validation gate |

## Common misuse

- Fluent setters with no validation branded as Builder.
- Builder that immediately writes to disk on each step (hard to test; prefer build-then-persist).
- Using Builder where [Abstract Factory](../abstract-factory/) is needed (family of types, not steps).
- Process-wide Singleton builder holding leftover state between requests.

## Review checklist

1. Are construction steps truly multi-combinatorial or multi-representation?
2. Was an options object / static factory tried first?
3. Does `build()` enforce invariants before returning?
4. Is builder state discarded or reset after `build()`?
5. Is a director justified by ≥2 call sites sharing a recipe?
6. Are framework HTTP/mail helpers already sufficient?
7. Clear exit path if the product shrinks to a simple DTO?
