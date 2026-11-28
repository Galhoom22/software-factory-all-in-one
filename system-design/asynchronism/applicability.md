# Asynchronism — applicability

## Signals

- Uploads, emails, reports, webhooks

## Anti-signals

- Queue for every DB write

## Simpler alternative first

1. Sync until p95 forces otherwise

Adopt **Asynchronism** only when those baselines fail the forces above.

## Framework-native hints

| Stack | Prefer first |
|-------|----------------|
| Laravel / PHP | Queues, cache, HTTP client, Sanctum/Socialite, health routes — see `technologies/laravel/` |
| Node / Next | Platform queues, Redis, edge/CDN, Auth.js — see `technologies/javascript/`, `technologies/nextjs/` |
| Cloud | Managed LB, CDN, DB multi-AZ, object storage before bespoke clusters |
