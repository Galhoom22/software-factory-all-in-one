# Memento — trade-offs

## Pros

- Preserves encapsulation while enabling undo/checkpoint.
- Caretaker stays dumb — easy to bound history.
- Originator owns the only interpret path for snapshots.
- Works for in-memory wizards and durable sealed tokens alike.

## Cons

- Large mementos multiply memory with history depth.
- Language support for true opacity varies (PHP visibility weaker than nested classes).
- Easy to accidentally widen memento APIs “for debugging.”
- Not a substitute for audit logs or event sourcing.

## Costs

| Cost | Notes |
|------|-------|
| Complexity | Originator + Memento + Caretaker |
| Memory | O(depth × state size) |
| Performance | Copy cost on each checkpoint |
| Testability | Good when opacity is enforced; fragile if mementos are public bags |

## Common misuse

- Public getters on every memento field (defeats the pattern).
- Unbounded undo stacks for hot keystroke paths.
- Using Memento as a general persistence format without sealing.
- Sharing one memento across originator types.
- Storing secrets in cleartext mementos inside sessions or logs.

## Review checklist

1. Can the caretaker usefully read memento internals? If yes, fix opacity.
2. Is history depth capped and product-agreed?
3. Was Command/inverse or framework form state tried first?
4. Do tests cover restore after intervening mutations?
5. Are serialized mementos sealed when durable?
6. Does restore reject foreign or corrupt tokens?
7. Is there an exit path if undo is dropped from the product?
