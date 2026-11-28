# Abstract Factory

| | |
|--|--|
| **Family** | Creational |
| **Intent** | Create families of related products that must stay consistent without naming their concrete classes. |
| **Also known as** | Kit |

## Summary

When a client needs several collaborators that belong together (a payment charge client *and* its webhook verifier; a notify sender *and* its template renderer for the same channel family), Abstract Factory supplies one factory object that builds the whole matching set. Open this folder only after [`07-judgment/design-patterns.md`](../../07-judgment/design-patterns.md) names it. Prefer Factory Method, a map, or container bindings when you only need one product.

## Use when

- Products come in **compatible families** and mixing across families is a bug (sandbox charge client with live webhook verifier).
- Switching family (provider, channel suite, export theme) must happen in one place.
- Clients should depend only on product interfaces, never on `new Stripe*` / `new Paypal*` style names.

## Avoid when

- Only one product type varies; use [Factory Method](../factory-method/) or injection.
- Families are imaginary (“maybe we’ll need X”) with a single real provider today.
- The container already binds each interface independently and cross-family mixing is impossible by process config.

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
| https://refactoring.guru/design-patterns/abstract-factory | 2026-11-28 |
| Gamma, Helm, Johnson, Vlissides. *Design Patterns: Elements of Reusable Object-Oriented Software.* Addison-Wesley, 1994. | 2026-11-28 |
