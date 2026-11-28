# Bridge — trade-offs

## Pros

- Axes of change stay independent; no combinatorial subclass grid.
- Abstractions test against a narrow Implementor fake.
- New channels land without editing refined abstractions.

## Cons

- Two hierarchies to learn; easy to over-split early.
- Abstraction may grow a "god" API that every Implementor must satisfy.
- Looks like Adapter to reviewers if only one concrete Implementor exists.

## Costs

| Cost | Notes |
|------|-------|
| Complexity | Dual trees and wiring |
| Indirection | Runtime hop Abstraction → Implementor |
| Performance | Negligible |
| Testability | Strong if ports stay narrow |

## Common misuse

Naming every composition "Bridge." Using Bridge when Adapter (one foreign type) or Strategy (one varying algorithm) would do. Widening Implementor until it mirrors the entire SDK.

## Review checklist

1. Are there truly two independent variation axes?
2. Was Strategy / single interface tried first?
3. Is Implementor a narrow port, not a kitchen-sink SDK mirror?
4. Does each hierarchy have a clear owner or reason to grow?
5. Fake Implementor used in abstraction tests?
6. Could this be Laravel notification channels instead?
7. Exit plan if one axis freezes?
