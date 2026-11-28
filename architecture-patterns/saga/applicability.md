# Saga — applicability

## Signals

- Orders across inventory/payment/shipping
- Multi-service workflows
- Need partial undo

## Anti-signals

- Single DB transaction enough
- Compensations undefined

## Simpler alternative first

1. Modular monolith transaction
2. Outbox + eventual sync without multi-step undo

Adopt **Saga** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | Temporal/Cadence-style; custom orchestrator; Laravel workflow packages carefully — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | Temporal/Cadence-style; custom orchestrator; Laravel workflow packages carefully — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
