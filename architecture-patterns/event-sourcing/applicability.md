# Event Sourcing — applicability

## Signals

- Strong audit/compliance history
- Multiple projections from one stream
- Complex domain with clear events

## Anti-signals

- Simple CRUD
- Team lacks event-versioning discipline
- Queries need ad-hoc joins across all history without projections

## Simpler alternative first

1. Audit log table + current state
2. CQRS without event store

Adopt **Event Sourcing** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | EventStoreDB / Postgres event tables; Laravel event sourcing packages carefully — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | EventStoreDB / Postgres event tables; Laravel event sourcing packages carefully — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
