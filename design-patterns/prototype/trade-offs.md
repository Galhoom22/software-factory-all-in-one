# Prototype — trade-offs

## Pros

- Avoids repeating expensive construction.
- New variants can be introduced as data (registered instances) without new subclasses.
- Clients depend on `clone()` / registry, not concrete constructors.
- Natural fit for document editors and template galleries.

## Cons

- Deep-copy rules are easy to get wrong.
- Circular graphs and identity fields need explicit policy.
- Debugging “where did this instance come from?” is harder than a constructor call.
- Prototype registries can become hidden global state if not injected.

## Costs

| Cost | Notes |
|------|-------|
| Complexity | Clone semantics + optional registry |
| Memory | Holding masters + copies |
| Performance | Clone vs rebuild — measure for large trees |
| Testability | Strong if identity/independence asserts exist |

## Common misuse

- Cloning service objects from a DI container.
- Shallow copy of nested mutable arrays presented as safe templates.
- JSON serialize/deserialize as a silent “clone” that drops types.
- Singleton registry accessible from everywhere instead of injection.

## Review checklist

1. Is rebuild cost or constructor sprawl proven?
2. Is copy depth documented and tested?
3. Do clones get new identity where required?
4. Is the registry injected (not a global Singleton)?
5. Were Builder / options alternatives considered?
6. Are non-cloneable resources excluded from the graph?
7. Exit path if templates become simple data factories?
