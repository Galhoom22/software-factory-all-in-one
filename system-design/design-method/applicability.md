# System design method — applicability

## Signals

- New product topology
- Capacity or reliability redesign
- Design reviews / interviews

## Anti-signals

- Trivial CRUD with one DB
- Already-decided stack with no new forces

## Simpler alternative first

1. Modular monolith + one primary DB
2. Managed platform defaults

Adopt **System design method** only when those baselines fail the forces above.

## Framework-native hints

| Stack | Prefer first |
|-------|----------------|
| Laravel / PHP | Queues, cache, HTTP client, Sanctum/Socialite, health routes — see `technologies/laravel/` |
| Node / Next | Platform queues, Redis, edge/CDN, Auth.js — see `technologies/javascript/`, `technologies/nextjs/` |
| Cloud | Managed LB, CDN, DB multi-AZ, object storage before bespoke clusters |
