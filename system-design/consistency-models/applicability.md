# Consistency models — applicability

## Signals

- Choosing DB / replication mode
- CQRS lag budgets

## Anti-signals

- Hiding lag from product language

## Simpler alternative first

1. Single primary + sync replica for reads that must be fresh

Adopt **Consistency models** only when those baselines fail the forces above.

## Framework-native hints

| Stack | Prefer first |
|-------|----------------|
| Laravel / PHP | Queues, cache, HTTP client, Sanctum/Socialite, health routes — see `technologies/laravel/` |
| Node / Next | Platform queues, Redis, edge/CDN, Auth.js — see `technologies/javascript/`, `technologies/nextjs/` |
| Cloud | Managed LB, CDN, DB multi-AZ, object storage before bespoke clusters |
