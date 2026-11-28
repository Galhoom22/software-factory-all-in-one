# Adapter — trade-offs

## Pros

- Domain code stays free of vendor types and rename churn.
- New providers plug in as new Adapter classes behind the same port.
- Tests fake one Target interface.

## Cons

- Extra type and mapping layer to maintain when the SDK changes.
- Easy to smuggle business rules into the Adapter (it should only translate).
- Two-way "round trip" adapters can hide lossy conversions.

## Costs

| Cost | Notes |
|------|-------|
| Complexity | One class per foreign system |
| Indirection | Jump through Adapter to see the real call |
| Performance | Negligible mapping cost |
| Testability | Improves when the seam is the port |

## Common misuse

Calling every wrapper an "Adapter" when it actually orchestrates workflows (Facade), adds caching (Proxy/Decorator), or selects algorithms (Strategy). Building a deep Adapter inheritance tree instead of one final class per vendor.

## Review checklist

1. Is the Target a real domain port the client already needs?
2. Does the Adapter only translate shape/status — no business policy?
3. Was a plain mapper function tried first?
4. Are vendor exceptions mapped at this boundary?
5. Is there one focused mapping test with a fake Adaptee?
6. Could Facade or Decorator be the real pain?
7. Will deleting a vendor delete this Adapter cleanly?
