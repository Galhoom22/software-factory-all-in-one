# Application layer — applicability

## Signals

- Scaling teams/deploy cadence
- Independent failure domains

## Anti-signals

- Service per table

## Simpler alternative first

1. Modular monolith

Adopt **Application layer** only when those baselines fail the forces above.

## Framework-native hints

| Stack | Prefer first |
|-------|----------------|
| Laravel / PHP | Queues, cache, HTTP client, Sanctum/Socialite, health routes — see `technologies/laravel/` |
| Node / Next | Platform queues, Redis, edge/CDN, Auth.js — see `technologies/javascript/`, `technologies/nextjs/` |
| Cloud | Managed LB, CDN, DB multi-AZ, object storage before bespoke clusters |
