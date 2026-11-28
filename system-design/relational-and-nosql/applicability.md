# Relational and NoSQL data stores — applicability

## Signals

- Schema design
- Polyglot persistence ADRs

## Anti-signals

- Two databases for ego

## Simpler alternative first

1. One primary SQL + cache

Adopt **Relational and NoSQL data stores** only when those baselines fail the forces above.

## Framework-native hints

| Stack | Prefer first |
|-------|----------------|
| Laravel / PHP | Queues, cache, HTTP client, Sanctum/Socialite, health routes — see `technologies/laravel/` |
| Node / Next | Platform queues, Redis, edge/CDN, Auth.js — see `technologies/javascript/`, `technologies/nextjs/` |
| Cloud | Managed LB, CDN, DB multi-AZ, object storage before bespoke clusters |
