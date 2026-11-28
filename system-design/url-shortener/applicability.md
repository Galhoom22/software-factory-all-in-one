# URL shortener — applicability

## Signals

- Learning exercise
- Real short-link product

## Anti-signals

- Using as excuse for microservices for a toy

## Simpler alternative first

1. Single DB + cache

Adopt **URL shortener** only when those baselines fail the forces above.

## Framework-native hints

| Stack | Prefer first |
|-------|----------------|
| Laravel / PHP | Queues, cache, HTTP client, Sanctum/Socialite, health routes — see `technologies/laravel/` |
| Node / Next | Platform queues, Redis, edge/CDN, Auth.js — see `technologies/javascript/`, `technologies/nextjs/` |
| Cloud | Managed LB, CDN, DB multi-AZ, object storage before bespoke clusters |
