# Strategy — trade-offs

## Pros

- Algorithms become interchangeable without editing callers.
- Selection moves to composition/config where it belongs.
- Each algorithm can be tested alone.
- Encourages a narrow shared contract.

## Cons

- Readers must know which strategy is bound to understand runtime behavior.
- Interface design pressure: one fat strategy interface invites unused methods.
- Class explosion when a map of functions would do.
- Easy to confuse with State or Template Method.

## Costs

| Cost | Notes |
|------|-------|
| Complexity | Interface + N implementations (or N functions) |
| Indirection | Jump to concrete algorithm at runtime |
| Performance | Negligible for I/O-bound work |
| Testability | Strong if injection is the only path |

## Common misuse

- Strategy-per-constant (boolean flags wrapped as types).
- Putting orchestration and I/O policy into every strategy instead of the context.
- Using Strategy where the object’s lifecycle should own the change (State).
- Naming every injected dependency a “Strategy” for review optics.

## Review checklist

1. Are the variants true peer algorithms for one problem?
2. Was a function map / single injected callable tried first?
3. Is the strategy interface narrow and honest?
4. Is selection at the composition root, not buried mid-flow?
5. Does a test prove the context delegates to the injected strategy?
6. Could State or Template Method fit the deciding questions better?
7. Exit path if only one algorithm remains?
