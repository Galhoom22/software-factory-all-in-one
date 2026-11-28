# Anti-Corruption Layer

| | |
|--|--|
| **Family** | Integration / migration |
| **Intent** | Translate between a modern model and a legacy (or foreign) model so legacy shapes do not leak. |
| **Also known as** | ACL |
| **WAF pillars (source map)** | Operational Excellence |

## Summary

Translate between a modern model and a legacy (or foreign) model so legacy shapes do not leak. Open this folder only after [`07-judgment/architecture-patterns.md`](../../07-judgment/architecture-patterns.md) names it. Prefer the simpler alternatives and platform features listed in applicability before inventing new infrastructure. Cloud-agnostic: Azure docs inspired the catalog; implementations use your pinned stack.

## Use when

- Strangler migration with ongoing dual systems
- Vendor SDK shapes must not enter the domain
- Two bounded contexts speak incompatible languages

## Avoid when

- One mapping function at the composition root is enough
- Systems share the same ubiquitous language already
- You only need a façade for a subsystem — see Facade (GoF)

## File map

| File | Contents |
|------|----------|
| [`problem-solution.md`](problem-solution.md) | Problem, forces, naive fail, solution, analogy, Mermaid |
| [`applicability.md`](applicability.md) | Signals, anti-signals, simpler alternative, framework-native |
| [`implementation.md`](implementation.md) | Steps, pseudocode, sketches, tests, refactor paths |
| [`trade-offs.md`](trade-offs.md) | Pros, cons, costs, misuse, checklist |
| [`relations.md`](relations.md) | Confused-with, combines-with, alternatives |

## Sources

| Source | Checked |
|--------|---------|
| https://learn.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer | 2026-11-28 |
| Microsoft Learn — Cloud design patterns catalog | 2026-11-28 |
