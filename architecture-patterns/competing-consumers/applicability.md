# Competing Consumers — applicability

## Signals

- Embarrassingly parallel jobs
- Need elastic throughput
- Queue already buffers producers

## Anti-signals

- Strict global ordering required without partitioning
- Work is not idempotent
- One consumer with vertical scale is enough

## Simpler alternative first

1. One worker + faster code
2. Partitioned queues per key

Adopt **Competing Consumers** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | Laravel queue workers; SQS + autoscaling; Redis queues — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | Laravel queue workers; SQS + autoscaling; Redis queues — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
