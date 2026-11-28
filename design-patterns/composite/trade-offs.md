# Composite — trade-offs

## Pros

- Clients treat leaf and group the same; recursion stays inside the tree.
- New leaf types plug into existing composites without walker rewrites.
- Natural fit for document and outline domains.

## Cons

- Uniform interface can force meaningless operations on leaves (`addChild` on a paragraph).
- Overly deep trees hurt clarity and stack depth.
- Harder to enforce "only sections may nest" without type narrowing.

## Costs

| Cost | Notes |
|------|-------|
| Complexity | Component + leaf + composite types |
| Indirection | Recursive dispatch |
| Performance | Deep trees; measure if huge |
| Testability | Good with small fixture trees |

## Common misuse

Building Composite for a flat list. Mirroring Eloquent relations as Composite "for purity." Using Composite when Decorator (linear wrapping) is the real shape.

## Review checklist

1. Is the domain a true open-ended tree?
2. Was a flat list + recursive function tried?
3. Are leaf APIs free of bogus child methods where possible?
4. Aggregation behavior covered by a small fixture test?
5. ORM/framework tree already enough?
6. Confused with Decorator?
7. Depth limits or cycle guards considered?
