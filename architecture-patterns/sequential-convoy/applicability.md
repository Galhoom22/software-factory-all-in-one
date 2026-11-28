# Sequential Convoy — applicability

## Signals

- Per-aggregate command streams
- Session-based processors
- IoT device twin updates

## Anti-signals

- No ordering needs
- Single partition bottleneck

## Simpler alternative first

1. Single consumer for that key
2. DB constraints

Adopt **Sequential Convoy** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | Kafka keys; SQS FIFO message groups; Redis streams — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | Kafka keys; SQS FIFO message groups; Redis streams — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
