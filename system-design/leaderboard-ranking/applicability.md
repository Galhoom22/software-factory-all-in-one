# Category leaderboard / sales rank — applicability

## Signals

- Leaderboards
- Best-sellers

## Anti-signals

- Exact global rank for every user every time

## Simpler alternative first

1. Periodic batch rank job

Adopt **Category leaderboard / sales rank** only when those baselines fail the forces above.

## Framework-native hints

| Stack | Prefer first |
|-------|----------------|
| Laravel / PHP | Queues, cache, HTTP client, Sanctum/Socialite, health routes — see `technologies/laravel/` |
| Node / Next | Platform queues, Redis, edge/CDN, Auth.js — see `technologies/javascript/`, `technologies/nextjs/` |
| Cloud | Managed LB, CDN, DB multi-AZ, object storage before bespoke clusters |
