# Visitor — trade-offs

## Pros

- New operations plug in as new classes without editing every element.
- Keeps element types thin and free of tool SDKs.
- Per-type methods stay explicit and reviewable.
- Encourages a stable, documented object structure.

## Cons

- New element types break every visitor — high cost when structure churns.
- Double dispatch is harder to navigate than a single method call.
- Visitors often accumulate mutable scratch state that needs reset rules.
- Cyclic dependencies between visitor and element packages if poorly modularized.

## Costs

| Cost | Notes |
|------|-------|
| Complexity | Visitor interface + N elements + M visitors |
| Indirection | Call path: accept → visit* |
| Performance | Usually fine; watch allocation of many short-lived visitors |
| Testability | Strong with fixture trees; weak if visitors depend on heavy SDKs |

## Common misuse

- Applying Visitor when both structure and operations change weekly.
- One “god visitor” that performs unrelated lint + serialize + metrics.
- Using Visitor instead of a serializer library for trivial JSON dumps.
- Forgetting to recurse into children — silent incomplete walks.
- Visitors that mutate the tree without documenting side effects.

## Review checklist

1. Is the element taxonomy actually stable for the next product horizon?
2. Was Iterator + functions or pattern matching tried first?
3. Does each visitor implement exactly one operation?
4. Are new element types treated as breaking changes across visitors?
5. Do tests cover every element type in a fixture tree?
6. Are SDK dependencies confined to the relevant visitor?
7. Is there an exit path (methods on nodes / union match) if operations shrink?
