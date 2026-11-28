# Proxy

| | |
|--|--|
| **Family** | Structural |
| **Intent** | Stand in for another object to control access, lazy-load, or add cross-cutting checks. |
| **Also known as** | Surrogate |

## Summary

A caller needs the same contract as a real subject (file exporter, payment adapter, document store), but construction is expensive, access must be gated, or remote I/O should wait until first use. A proxy implements that contract, intercepts calls, then forwards to the real subject. Open this folder only after [`07-judgment/design-patterns.md`](../../07-judgment/design-patterns.md) names it. Prefer framework middleware, gates, and HTTP clients with interceptors when those already own the check — do not invent a Proxy class for every policy.

## Use when

- Creating the real subject is expensive and often unused on a given path.
- Access must be checked, rate-limited, or audited at the object boundary.
- You need a local stand-in for a remote or out-of-process service.
- Lazy connect / lazy open must be transparent to callers.

## Avoid when

- You only want to add behavior layers around an always-present object — [Decorator](../decorator/) may fit better.
- You are translating an incompatible API — [Adapter](../adapter/).
- Framework middleware, policies, or gates already cover the check.
- A plain function wrapper at the composition root is enough.

## File map

| File | Contents |
|------|----------|
| [`problem-solution.md`](problem-solution.md) | Problem, forces, naive fail, solution, analogy, Mermaid |
| [`applicability.md`](applicability.md) | Signals, anti-signals, simpler alternative, framework-native |
| [`implementation.md`](implementation.md) | Steps, pseudocode, TS + PHP sketches, tests, refactor paths |
| [`trade-offs.md`](trade-offs.md) | Pros, cons, costs, misuse, checklist |
| [`relations.md`](relations.md) | Confused-with, combines-with, alternatives |

## Sources

| Source | Checked |
|--------|---------|
| https://refactoring.guru/design-patterns/proxy | 2026-11-28 |
| Gamma, Helm, Johnson, Vlissides. *Design Patterns: Elements of Reusable Object-Oriented Software.* Addison-Wesley, 1994. | 2026-11-28 |
