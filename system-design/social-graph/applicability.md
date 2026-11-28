# Social graph — applicability

## Signals

- Follow graphs
- Recommendations seeds

## Anti-signals

- Graph DB for a 100-user app

## Simpler alternative first

1. SQL edges + indexes

Adopt **Social graph** only when those baselines fail the forces above.

## Framework-native hints

| Stack | Prefer first |
|-------|----------------|
| Laravel / PHP | Queues, cache, HTTP client, Sanctum/Socialite, health routes — see `technologies/laravel/` |
| Node / Next | Platform queues, Redis, edge/CDN, Auth.js — see `technologies/javascript/`, `technologies/nextjs/` |
| Cloud | Managed LB, CDN, DB multi-AZ, object storage before bespoke clusters |
