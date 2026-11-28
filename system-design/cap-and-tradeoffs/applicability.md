# CAP and consistency trade-offs — applicability

## Signals

- Multi-region
- Multi-master
- Cross-datacenter reads

## Anti-signals

- Single-AZ monolith with no partition story

## Simpler alternative first

1. One primary region + async DR

Adopt **CAP and consistency trade-offs** only when those baselines fail the forces above.

## Framework-native hints

| Stack | Prefer first |
|-------|----------------|
| Laravel / PHP | Queues, cache, HTTP client, Sanctum/Socialite, health routes — see `technologies/laravel/` |
| Node / Next | Platform queues, Redis, edge/CDN, Auth.js — see `technologies/javascript/`, `technologies/nextjs/` |
| Cloud | Managed LB, CDN, DB multi-AZ, object storage before bespoke clusters |
