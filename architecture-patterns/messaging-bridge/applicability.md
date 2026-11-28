# Messaging Bridge — applicability

## Signals

- Cloud ↔ on-prem messaging
- Vendor bus migration
- Partner integrations

## Anti-signals

- Same bus technology already
- Simple HTTP callback is enough

## Simpler alternative first

1. Anti-Corruption Layer over HTTP
2. One shared bus

Adopt **Messaging Bridge** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | Kafka Connect-style bridges; queue workers that republish — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | Kafka Connect-style bridges; queue workers that republish — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
