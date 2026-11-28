# Latency vs throughput — applicability

## Signals

- API SLOs
- Batch jobs vs interactive APIs

## Anti-signals

- One metric for both

## Simpler alternative first

1. Single sync path until measured need

Adopt **Latency vs throughput** only when those baselines fail the forces above.

## Framework-native hints

| Stack | Prefer first |
|-------|----------------|
| Laravel / PHP | Queues, cache, HTTP client, Sanctum/Socialite, health routes — see `technologies/laravel/` |
| Node / Next | Platform queues, Redis, edge/CDN, Auth.js — see `technologies/javascript/`, `technologies/nextjs/` |
| Cloud | Managed LB, CDN, DB multi-AZ, object storage before bespoke clusters |
