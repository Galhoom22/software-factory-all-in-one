# Service communication — applicability

## Signals

- Service APIs
- Event-driven designs

## Anti-signals

- Exposing internal RPC to the public internet

## Simpler alternative first

1. In-process calls in a modular monolith

Adopt **Service communication** only when those baselines fail the forces above.

## Framework-native hints

| Stack | Prefer first |
|-------|----------------|
| Laravel / PHP | Queues, cache, HTTP client, Sanctum/Socialite, health routes — see `technologies/laravel/` |
| Node / Next | Platform queues, Redis, edge/CDN, Auth.js — see `technologies/javascript/`, `technologies/nextjs/` |
| Cloud | Managed LB, CDN, DB multi-AZ, object storage before bespoke clusters |
