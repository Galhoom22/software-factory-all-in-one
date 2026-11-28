# Template Method — trade-offs

## Pros

- One sealed order for mandatory steps.
- Variants implement only what differs.
- Compliance/audit hooks stay centralized.
- Call-order tests are straightforward.

## Cons

- Inheritance couples variants to the base.
- Hook proliferation creates fragile base classes.
- Harder to compose steps out of order when product needs change.
- Easy to overuse when Strategy hooks would suffice.

## Costs

| Cost | Notes |
|------|-------|
| Complexity | Abstract base + concrete subclasses |
| Indirection | Behavior split across template and hooks |
| Performance | Negligible |
| Testability | Good for order; watch override holes |

## Common misuse

- Leaving `export` overridable so subclasses delete audit.
- Abstract bases shared by unrelated flows.
- Using Template Method where a middleware pipeline is the real need.
- Ten tiny hooks instead of one Strategy for a cohesive varying block.

## Review checklist

1. Is the step order a real invariant?
2. Was hook-injection or Strategy tried first?
3. Is the template method sealed/`final`?
4. Do concrete classes override only intended hooks?
5. Is there a test that locks call order?
6. Would a pipeline compose better for optional stages?
7. Exit path to a plain function skeleton if the hierarchy dies?
