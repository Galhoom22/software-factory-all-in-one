# Content delivery network — applicability

## Signals

- Images, JS/CSS, downloads
- Global marketing sites

## Anti-signals

- Personalized private HTML on shared CDN without care

## Simpler alternative first

1. Object storage + CDN
2. architecture-patterns static-content-hosting

Adopt **Content delivery network** only when those baselines fail the forces above.

## Framework-native hints

| Stack | Prefer first |
|-------|----------------|
| Laravel / PHP | Queues, cache, HTTP client, Sanctum/Socialite, health routes — see `technologies/laravel/` |
| Node / Next | Platform queues, Redis, edge/CDN, Auth.js — see `technologies/javascript/`, `technologies/nextjs/` |
| Cloud | Managed LB, CDN, DB multi-AZ, object storage before bespoke clusters |
