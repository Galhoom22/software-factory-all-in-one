# Distributed cache / query cache — applicability

## Signals

- Search result pages
- Heavy reads

## Anti-signals

- Cache as source of truth for money

## Simpler alternative first

1. Single-node cache until multi-node

Adopt **Distributed cache / query cache** only when those baselines fail the forces above.

## Framework-native hints

| Stack | Prefer first |
|-------|----------------|
| Laravel / PHP | Queues, cache, HTTP client, Sanctum/Socialite, health routes — see `technologies/laravel/` |
| Node / Next | Platform queues, Redis, edge/CDN, Auth.js — see `technologies/javascript/`, `technologies/nextjs/` |
| Cloud | Managed LB, CDN, DB multi-AZ, object storage before bespoke clusters |
