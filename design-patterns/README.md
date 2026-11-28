# Design patterns library (GoF)

**On-demand reference.** Agents open this library **only through** the selector in [`07-judgment/design-patterns.md`](../07-judgment/design-patterns.md). Load the selector first, then **at most 1–3** candidate folders — never dump this tree into a product.

Ponytail stays the default: every pack's avoid-when is as strong as its use-when. **Chosen: none (baseline)** is often correct.

## How to load

1. Name the design pain in one sentence.
2. Run the selection procedure in the judgment guide (baseline first).
3. Open only the candidate folders the table names.
4. Write a Pattern Decision Record before landing a consequential abstraction.

## Index

| Pattern | Family | Intent |
|---------|--------|--------|
| [`factory-method/`](factory-method/README.md) | Creational | Let subclasses (or strategy hooks) decide which concrete type to create. |
| [`abstract-factory/`](abstract-factory/README.md) | Creational | Create families of related products without naming concrete classes at call sites. |
| [`builder/`](builder/README.md) | Creational | Construct a complex object step by step with a clear, readable sequence. |
| [`prototype/`](prototype/README.md) | Creational | Clone an existing instance when creating from scratch is costly or awkward. |
| [`singleton/`](singleton/README.md) | Creational | Ensure one shared instance — usually the wrong default; prefer the container. |
| [`adapter/`](adapter/README.md) | Structural | Wrap an incompatible interface so existing client code can call it. |
| [`bridge/`](bridge/README.md) | Structural | Split abstraction from implementation so each can vary independently. |
| [`composite/`](composite/README.md) | Structural | Treat individual objects and trees of objects uniformly. |
| [`decorator/`](decorator/README.md) | Structural | Add behavior by wrapping, without exploding subclasses. |
| [`facade/`](facade/README.md) | Structural | Offer a narrow entry point over a noisy subsystem. |
| [`flyweight/`](flyweight/README.md) | Structural | Share fine-grained immutable state to cut memory when many similar objects exist. |
| [`proxy/`](proxy/README.md) | Structural | Stand in for another object to control access, lazy load, or add cross-cutting checks. |
| [`chain-of-responsibility/`](chain-of-responsibility/README.md) | Behavioral | Pass a request along a pipeline until a handler deals with it. |
| [`command/`](command/README.md) | Behavioral | Turn a request into an object so you can queue, log, undo, or retry it. |
| [`iterator/`](iterator/README.md) | Behavioral | Traverse a collection without exposing its internal structure. |
| [`mediator/`](mediator/README.md) | Behavioral | Route colleague communication through a hub to cut N-to-N coupling. |
| [`memento/`](memento/README.md) | Behavioral | Capture and restore an object's internal state without breaking encapsulation. |
| [`observer/`](observer/README.md) | Behavioral | Notify many dependents when one subject's state changes. |
| [`state/`](state/README.md) | Behavioral | Replace large state-conditionals with objects that represent each state. |
| [`strategy/`](strategy/README.md) | Behavioral | Swap interchangeable algorithms behind a common interface. |
| [`template-method/`](template-method/README.md) | Behavioral | Fix an algorithm skeleton in a base type; let steps vary in subclasses or hooks. |
| [`visitor/`](visitor/README.md) | Behavioral | Add operations over an object structure without changing the element types. |

## Criticism (why this library must not inflate code)

Patterns are not mandatory architecture. Languages with first-class functions, generics, and rich standard libraries already absorb many classical shapes. Unjustified use and cargo-cult copies create indirection without leverage. This library exists so agents can *refuse* a pattern with evidence, not so they can decorate every PR.

## Sources (library-level)

| Source | Checked |
|--------|---------|
| https://refactoring.guru/design-patterns | 2026-11-28 |
| https://refactoring.guru/design-patterns/catalog | 2026-11-28 |
| https://refactoring.guru/design-patterns/classification | 2026-11-28 |
| https://refactoring.guru/design-patterns/criticism | 2026-11-28 |
| https://refactoring.guru/design-patterns/what-is-pattern | 2026-11-28 |
| https://refactoring.guru/design-patterns/history | 2026-11-28 |
| Gamma, Helm, Johnson, Vlissides. *Design Patterns: Elements of Reusable Object-Oriented Software.* Addison-Wesley, 1994. | 2026-11-28 |

All pattern pages are rewritten in original prose for this MIT kit. Do not paste vendor course text or toy sample domains into products.
