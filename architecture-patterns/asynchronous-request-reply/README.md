# Asynchronous Request-Reply

| | |
|--|--|
| **Family** | Messaging / UX |
| **Intent** | Accept work quickly, process asynchronously, and give the client a clear way to learn the result. |
| **Also known as** | Async request-response |
| **WAF pillars (source map)** | Performance Efficiency |

## Summary

Accept work quickly, process asynchronously, and give the client a clear way to learn the result. Open this folder only after [`07-judgment/architecture-patterns.md`](../../07-judgment/architecture-patterns.md) names it. Prefer the simpler alternatives and platform features listed in applicability before inventing new infrastructure. Cloud-agnostic: Azure docs inspired the catalog; implementations use your pinned stack.

## Use when

- Exports, AI jobs, payments settlement
- Frontends need immediate acknowledgment
- Backend duration is unpredictable

## Avoid when

- Work finishes in tens of milliseconds
- Client can wait on a stream/WebSocket already in place
- Fire-and-forget with no need for a result

## File map

| File | Contents |
|------|----------|
| [`problem-solution.md`](problem-solution.md) | Problem, forces, naive fail, solution, analogy, Mermaid |
| [`applicability.md`](applicability.md) | Signals, anti-signals, simpler alternative, framework-native |
| [`implementation.md`](implementation.md) | Steps, pseudocode, sketches, tests, refactor paths |
| [`trade-offs.md`](trade-offs.md) | Pros, cons, costs, misuse, checklist |
| [`relations.md`](relations.md) | Confused-with, combines-with, alternatives |

## Sources

| Source | Checked |
|--------|---------|
| https://learn.microsoft.com/en-us/azure/architecture/patterns/asynchronous-request-reply | 2026-11-28 |
| Microsoft Learn — Cloud design patterns catalog | 2026-11-28 |
