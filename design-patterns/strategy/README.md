# Strategy

| | |
|--|--|
| **Family** | Behavioral |
| **Intent** | Encapsulate interchangeable algorithms behind one contract so clients can swap them without rewriting callers. |
| **Also known as** | Policy |

## Summary

Export formats, cache eviction policies, and payment-provider selection are algorithms that share a shape but differ in guts. Strategy makes that shape a contract and lets the context hold one algorithm at a time. Open this folder only after [`07-judgment/design-patterns.md`](../../07-judgment/design-patterns.md) names it. Prefer a plain function map or injected callable before a class hierarchy.

## Use when

- Several algorithms are true alternatives for the same problem (CSV vs PDF export, LRU vs TTL eviction).
- Callers must pick or swap the algorithm without editing the orchestration that uses it.
- Tests need to substitute a cheap algorithm at the same seam.

## Avoid when

- Only one algorithm exists for the product horizon.
- A `Record<string, Fn>` or container binding already swaps implementations cleanly.
- Variation is a lifecycle mode of the object itself — that is closer to State.

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
| https://refactoring.guru/design-patterns/strategy | 2026-11-28 |
| Gamma, Helm, Johnson, Vlissides. *Design Patterns: Elements of Reusable Object-Oriented Software.* Addison-Wesley, 1994. | 2026-11-28 |
