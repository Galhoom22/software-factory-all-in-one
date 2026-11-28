# Compensating Transaction — applicability

## Signals

- Saga steps across services
- Money movement with reversible holds
- Eventually consistent workflows

## Anti-signals

- Single-database transaction is enough
- Steps are not safely reversible — redesign
- Compensation is more dangerous than accepting the partial state with alerts

## Simpler alternative first

1. One DB transaction
2. Outbox + retry until success without undo

Adopt **Compensating Transaction** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | Saga libraries; explicit compensate methods; Laravel job chains with failure handlers — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | Saga libraries; explicit compensate methods; Laravel job chains with failure handlers — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
