# Abstract Factory — trade-offs

## Pros

- Enforces family consistency at the type/composition boundary.
- Clients stay free of concrete provider types.
- Swapping environment or vendor is one decision at the root.
- Fake toolkits give honest integration-style unit tests.

## Cons

- New product **role** forces edits to the abstract factory and every concrete factory.
- Easy to over-grow the toolkit interface (“god factory”).
- More types than a single module export for one-family apps.
- Indirection obscures which SDK method actually runs.

## Costs

| Cost | Notes |
|------|-------|
| Complexity | N roles × M families of types |
| Change cost | Adding a role touches all factories |
| Performance | Negligible vs network I/O of payment/notify |
| Testability | Strong when fakes are family-consistent |

## Common misuse

- Abstract Factory for a single product (use Factory Method / injection).
- One factory method that returns a struct of concretes *and* also exposes each concrete type to clients — leaking the family.
- Building factories for UI themes when CSS variables or a design-token map suffice.
- Using Singleton “toolkit holders” instead of container bindings.

## Review checklist

1. Are there ≥2 product roles that must stay consistent?
2. Are ≥2 families real (not speculative)?
3. Was a single composition-root module tried first?
4. Does the abstract factory API stay narrow (roles only)?
5. Do clients avoid importing concrete product classes?
6. Is there a fake toolkit used in tests?
7. Is the exit path documented (collapse to one module / Factory Method)?
