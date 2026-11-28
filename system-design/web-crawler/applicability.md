# Web crawler — applicability

## Signals

- Search indexing
- Link previews with care

## Anti-signals

- Aggressive crawl of private apps

## Simpler alternative first

1. Targeted allowlist crawler

Adopt **Web crawler** only when those baselines fail the forces above.

## Framework-native hints

| Stack | Prefer first |
|-------|----------------|
| Laravel / PHP | Queues, cache, HTTP client, Sanctum/Socialite, health routes — see `technologies/laravel/` |
| Node / Next | Platform queues, Redis, edge/CDN, Auth.js — see `technologies/javascript/`, `technologies/nextjs/` |
| Cloud | Managed LB, CDN, DB multi-AZ, object storage before bespoke clusters |
