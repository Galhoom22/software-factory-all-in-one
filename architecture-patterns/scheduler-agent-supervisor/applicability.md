# Scheduler Agent Supervisor — applicability

## Signals

- Long distributed tasks
- Need explicit recovery
- Agents may crash mid-work

## Anti-signals

- Simple queue consumers with retries enough
- Overbuilt for one cron

## Simpler alternative first

1. Queue + Retry + alerts
2. Saga orchestrator

Adopt **Scheduler Agent Supervisor** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | Job schedulers + workers + monitoring; k8s CronJobs carefully — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | Job schedulers + workers + monitoring; k8s CronJobs carefully — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
