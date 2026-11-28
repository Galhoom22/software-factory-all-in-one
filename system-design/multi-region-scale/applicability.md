# Scale to millions of users — applicability

## Signals

- Capstone design reviews
- Capacity planning

## Anti-signals

- Copying a cloud vendor's marketing diagram as your ADR

## Simpler alternative first

1. Single region multi-AZ

Adopt **Scale to millions of users** only when those baselines fail the forces above.

## Framework-native hints

| Stack | Prefer first |
|-------|----------------|
| Laravel / PHP | Queues, cache, HTTP client, Sanctum/Socialite, health routes — see `technologies/laravel/` |
| Node / Next | Platform queues, Redis, edge/CDN, Auth.js — see `technologies/javascript/`, `technologies/nextjs/` |
| Cloud | Managed LB, CDN, DB multi-AZ, object storage before bespoke clusters |
