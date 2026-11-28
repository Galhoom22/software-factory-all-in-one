# Choreography — applicability

## Signals

- Loosely coupled services own their reactions
- Flows change often at the edges
- You accept eventual consistency

## Anti-signals

- Compliance needs a single auditable state machine
- Saga orchestration is clearer for compensations
- Team cannot observe the distributed flow

## Simpler alternative first

1. In-process method calls in a modular monolith
2. Orchestrated Saga / workflow engine

Adopt **Choreography** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | Laravel events; message bus; domain events outbox — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | Laravel events; message bus; domain events outbox — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
