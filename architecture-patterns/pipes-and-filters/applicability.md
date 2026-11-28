# Pipes and Filters — applicability

## Signals

- ETL/export pipelines
- Reusable stages
- Different scale per stage

## Anti-signals

- Three-line transform
- Stages need huge shared transactional state

## Simpler alternative first

1. Function pipeline in-process
2. Middleware chain

Adopt **Pipes and Filters** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | Laravel pipelines; Node Transform streams; queue stage workers — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | Laravel pipelines; Node Transform streams; queue stage workers — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
