# Composite

| | |
|--|--|
| **Family** | Structural |
| **Intent** | Treat individual objects and nested groups uniformly so clients walk a tree with one operation. |
| **Also known as** | Object Tree |

## Summary

A document editor holds paragraphs, tables, and sections that contain more nodes. Clients need `render()`, `export()`, or `wordCount()` on any node without caring whether it is a leaf or a group. Composite gives leaves and containers the same component interface. Open this folder only after [`07-judgment/design-patterns.md`](../../07-judgment/design-patterns.md) names it. Prefer a flat list or the framework's nested collection API when nesting is shallow or rare.

## Use when

- The domain is naturally a tree (document outline, nested export folders, notification recipient groups).
- Clients must run the same operation on leaves and on whole subtrees.
- Nesting depth is open-ended, not a fixed two-level list.

## Avoid when

- Structure is a flat array with an optional parent id used only for display.
- Eloquent / ORM relations already model the tree and you would duplicate them.
- You only need to wrap one object with extra behavior ([Decorator](../decorator/README.md)).

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
| https://refactoring.guru/design-patterns/composite | 2026-11-28 |
| Gamma, Helm, Johnson, Vlissides. *Design Patterns: Elements of Reusable Object-Oriented Software.* Addison-Wesley, 1994. | 2026-11-28 |
