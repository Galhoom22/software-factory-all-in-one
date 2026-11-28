# Facade

| | |
|--|--|
| **Family** | Structural |
| **Intent** | Offer a short, coarse API that hides a tangle of collaborating subsystems. |
| **Also known as** | — |

## Summary

File export may need template load, data query, formatter, storage upload, and notification. Clients should call `exportReport(id)` once — not wire five services. Facade is that coarse entry. Open this folder only after [`07-judgment/design-patterns.md`](../../07-judgment/design-patterns.md) names it. Prefer a single application service or use-case class when the team already structures code that way — name the pattern only when the simplification is the point.

## Use when

- Call sites repeatedly orchestrate the same multi-step dance across modules.
- You want a stable entry for a messy subsystem without exposing its types.
- Onboarding cost to "just run export" is too high.

## Avoid when

- You are only translating one foreign interface ([Adapter](../adapter/README.md)).
- The façade becomes a god object that owns all business rules.
- A single service method already exists and naming it "Facade" adds nothing.

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
| https://refactoring.guru/design-patterns/facade | 2026-11-28 |
| Gamma, Helm, Johnson, Vlissides. *Design Patterns: Elements of Reusable Object-Oriented Software.* Addison-Wesley, 1994. | 2026-11-28 |
