# Caching — applicability

## Signals

- Read-heavy APIs
- Expensive queries

## Anti-signals

- Caching money balances without fencing

## Simpler alternative first

1. DB indexes + query fix first

Adopt **Caching** only when those baselines fail the forces above.

## Framework-native hints

| Stack | Prefer first |
|-------|----------------|
| Laravel / PHP | Queues, cache, HTTP client, Sanctum/Socialite, health routes — see `technologies/laravel/` |
| Node / Next | Platform queues, Redis, edge/CDN, Auth.js — see `technologies/javascript/`, `technologies/nextjs/` |
| Cloud | Managed LB, CDN, DB multi-AZ, object storage before bespoke clusters |
