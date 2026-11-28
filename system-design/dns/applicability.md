# DNS — applicability

## Signals

- Public entry
- Service discovery at org edge

## Anti-signals

- DNS as only load balancer for sticky app state

## Simpler alternative first

1. Platform DNS + one load balancer

Adopt **DNS** only when those baselines fail the forces above.

## Framework-native hints

| Stack | Prefer first |
|-------|----------------|
| Laravel / PHP | Queues, cache, HTTP client, Sanctum/Socialite, health routes — see `technologies/laravel/` |
| Node / Next | Platform queues, Redis, edge/CDN, Auth.js — see `technologies/javascript/`, `technologies/nextjs/` |
| Cloud | Managed LB, CDN, DB multi-AZ, object storage before bespoke clusters |
