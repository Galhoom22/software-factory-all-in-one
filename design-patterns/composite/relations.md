# Composite — relations

## Confused with

| Other | Deciding question |
|-------|-------------------|
| [Decorator](../decorator/README.md) | Do you have a *branching tree* of many children, or a *linear chain* that wraps one component to add behavior? |
| [Flyweight](../flyweight/README.md) | Are you sharing *intrinsic* state across many nodes, or modeling *part-whole* structure? |
| Iterator | Do clients need a uniform *operation* on the tree, or only a way to *traverse* it? |

## Combines with

- **Iterator / Visitor:** external walkers over the component tree.
- **Decorator:** wrap a leaf to add caching of `wordCount` without changing the tree shape.
- **Builder:** assemble a document tree step by step.

## Alternatives

Flat list + recursion; nested DTOs; ORM recursive relations; filesystem-like path APIs.
