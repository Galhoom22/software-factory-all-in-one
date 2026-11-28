# Iterator — relations

## Confused with

| Other | Deciding question |
|-------|-------------------|
| [Composite](../composite/README.md) | Do you need a *uniform tree of parts* (Composite), or a *cursor that walks* a structure without exposing it (Iterator)? Trees often use both: Composite for structure, Iterator for traversal. |
| [Visitor](../visitor/README.md) | Are you *walking* to pull items, or *dispatching an operation* into each element type? Pull items → Iterator; add operations across types without changing elements → Visitor. |
| Generator / stream | Does the language feature already hide structure? If yes, you already have the pattern’s benefit — no extra classes. |

## Combines with

- **Composite:** iterate a document’s nested blocks.
- **Factory Method:** collection creates the right ConcreteIterator.
- **Memento:** rare — snapshot iteration position if walks are resumable.

## Alternatives

- Native `foreach` / `for…of`.
- Generators and ORM/query cursors.
- Streams for byte/row pipelines (file export).
- No pattern when one array is enough.
