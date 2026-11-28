# Account insights aggregator — applicability

## Signals

- Fintech-style learning exercise
- Personal finance features

## Anti-signals

- Skipping compliance/threat model

## Simpler alternative first

1. Manual CSV upload first

Adopt **Account insights aggregator** only when those baselines fail the forces above.

## Framework-native hints

| Stack | Prefer first |
|-------|----------------|
| Laravel / PHP | Queues, cache, HTTP client, Sanctum/Socialite, health routes — see `technologies/laravel/` |
| Node / Next | Platform queues, Redis, edge/CDN, Auth.js — see `technologies/javascript/`, `technologies/nextjs/` |
| Cloud | Managed LB, CDN, DB multi-AZ, object storage before bespoke clusters |
