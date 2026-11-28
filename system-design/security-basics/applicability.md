# Security basics for system design — applicability

## Signals

- Every public system
- Multi-tenant designs

## Anti-signals

- Security theater without threat model

## Simpler alternative first

1. Platform IdP + managed secrets

Adopt **Security basics for system design** only when those baselines fail the forces above.

## Framework-native hints

| Stack | Prefer first |
|-------|----------------|
| Laravel / PHP | Queues, cache, HTTP client, Sanctum/Socialite, health routes — see `technologies/laravel/` |
| Node / Next | Platform queues, Redis, edge/CDN, Auth.js — see `technologies/javascript/`, `technologies/nextjs/` |
| Cloud | Managed LB, CDN, DB multi-AZ, object storage before bespoke clusters |
