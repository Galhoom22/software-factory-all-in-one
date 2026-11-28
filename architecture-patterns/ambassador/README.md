# Ambassador

| | |
|--|--|
| **Family** | Integration / edge |
| **Intent** | Put network and cross-cutting client concerns in a helper beside the consumer. |
| **Also known as** | Client proxy / sidekick |
| **WAF pillars (source map)** | Reliability, Security |

## Summary

Put network and cross-cutting client concerns in a helper beside the consumer. Open this folder only after [`07-judgment/architecture-patterns.md`](../../07-judgment/architecture-patterns.md) names it. Prefer the simpler alternatives and platform features listed in applicability before inventing new infrastructure. Cloud-agnostic: Azure docs inspired the catalog; implementations use your pinned stack.

## Use when

- Many consumers share the same outbound policy
- You need one place to rotate credentials for egress
- Local language SDKs cannot express mesh policy

## Avoid when

- A single HTTP call with framework middleware is enough
- You need request routing for many backends — prefer Gateway Routing
- Sidecar already covers the same concerns in your mesh

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
| https://learn.microsoft.com/en-us/azure/architecture/patterns/ambassador | 2026-11-28 |
| Microsoft Learn — Cloud design patterns catalog | 2026-11-28 |
