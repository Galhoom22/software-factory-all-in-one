# Factory Method — trade-offs

## Pros

- Workflow code stays free of concrete product types.
- New products plug in by adding a creator (or hook implementation), not by editing every call site of the algorithm.
- Tests substitute fakes at one named seam.
- Makes the construction decision explicit and reviewable.

## Cons

- Creator hierarchies can mirror product hierarchies and grow noisy.
- Readers must jump from workflow to `createProduct` to see what really runs.
- Easy to invent subclasses when a map or container binding would suffice.
- Inheritance-based form couples creators to a base class; the hook/function form is usually lighter.

## Costs

| Cost | Notes |
|------|-------|
| Complexity | Extra types: Product, Creator, Concrete* |
| Indirection | Harder “go to implementation” for `send` |
| Performance | Negligible for typical I/O-bound collaborators |
| Testability | Improves when the seam is the only construction path |

## Common misuse

- Naming every `new` wrapper a “Factory” when it returns only one hard-coded type forever.
- Using Factory Method instead of the framework container for process-wide bindings.
- Building a Creator per trivial DTO.
- Hiding side effects (network, disk) inside `createProduct` without documenting them.

## Review checklist

1. Is there a shared workflow that truly must own product construction?
2. Was constructor injection or a config map tried first?
3. Does the product interface match what the workflow calls — no fat API?
4. Is construction reachable only through the factory method / hook?
5. Does at least one test fake the product at that seam?
6. Would Laravel/Node container or middleware already cover this case?
7. Is there an exit path (collapse to injection) if variants shrink to one?
