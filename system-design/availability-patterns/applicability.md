# Availability patterns — applicability

## Signals

- Production SLAs
- Multi-AZ design

## Anti-signals

- Fake HA without drills

## Simpler alternative first

1. Managed DB with multi-AZ

Adopt **Availability patterns** only when those baselines fail the forces above.

## Framework-native hints

| Stack | Prefer first |
|-------|----------------|
| Laravel / PHP | Queues, cache, HTTP client, Sanctum/Socialite, health routes — see `technologies/laravel/` |
| Node / Next | Platform queues, Redis, edge/CDN, Auth.js — see `technologies/javascript/`, `technologies/nextjs/` |
| Cloud | Managed LB, CDN, DB multi-AZ, object storage before bespoke clusters |
