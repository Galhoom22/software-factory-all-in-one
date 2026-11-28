# Decorator — trade-offs

## Pros

- Stack behaviors without modifying the core class.
- Order of wrapping is explicit at the composition root.
- Each concern stays in its own type and test.

## Cons

- Long wrapper chains obscure the runtime object.
- Identity (`===` / reference equality) breaks across wrappers.
- Easy to forget forwarding a new interface method.

## Costs

| Cost | Notes |
|------|-------|
| Complexity | One class per concern |
| Indirection | Deep call stacks |
| Performance | Extra hops; usually fine |
| Testability | Strong per layer |

## Common misuse

DIY Decorators that duplicate HTTP middleware. Mixing Adapter responsibilities into a Decorator. Decorators that skip forwarding some methods silently.

## Review checklist

1. Same interface in and out?
2. Framework middleware already available?
3. One concern per Decorator class?
4. Forwarding complete for every method?
5. Layer test with fake inner?
6. Proxy vs Decorator deciding question answered?
7. Composition order documented?
