# Load balancer — applicability

## Signals

- Any multi-instance web/API
- Blue/green or canary

## Anti-signals

- LB as a substitute for fixing statefulness

## Simpler alternative first

1. Platform managed LB

Adopt **Load balancer** only when those baselines fail the forces above.

## Framework-native hints

| Stack | Prefer first |
|-------|----------------|
| Laravel / PHP | Queues, cache, HTTP client, Sanctum/Socialite, health routes — see `technologies/laravel/` |
| Node / Next | Platform queues, Redis, edge/CDN, Auth.js — see `technologies/javascript/`, `technologies/nextjs/` |
| Cloud | Managed LB, CDN, DB multi-AZ, object storage before bespoke clusters |
