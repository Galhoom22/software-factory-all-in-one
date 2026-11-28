# Facade — trade-offs

## Pros

- Call sites shrink to one coarse method.
- Subsystem churn stays behind the façade.
- Onboarding and testing at the edge get simpler.

## Cons

- Risk of a god orchestrator that owns too much policy.
- Can hide important failure modes if errors are over-swallowed.
- Overuse creates an anemic "Manager" layer with no clear domain home.

## Costs

| Cost | Notes |
|------|-------|
| Complexity | Extra type at the edge |
| Indirection | One hop to real work |
| Performance | Negligible |
| Testability | Improves at the edge; keep subsystem unit tests |

## Common misuse

Facade that is really an Adapter. Facade that reimplements domain logic instead of sequencing. Multiple façades that each wrap everything "just in case."

## Review checklist

1. Is there a repeated multi-step sequence?
2. Was a single use-case / job enough?
3. Does the façade sequence rather than own deep policy?
4. Subsystems still independently testable?
5. Failure short-circuit covered by a test?
6. Adapter vs Facade deciding question answered?
7. Exit path if only one caller remains?
