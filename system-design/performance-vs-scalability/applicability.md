# Performance vs scalability — applicability

## Signals

- Hot path is slow at low QPS
- Latency fine but timeouts under load

## Anti-signals

- Premature sharding
- Ignoring Big-O on hot paths

## Simpler alternative first

1. Profile first
2. DSA judgment on hot paths

Adopt **Performance vs scalability** only when those baselines fail the forces above.

## Framework-native hints

| Stack | Prefer first |
|-------|----------------|
| Laravel / PHP | Queues, cache, HTTP client, Sanctum/Socialite, health routes — see `technologies/laravel/` |
| Node / Next | Platform queues, Redis, edge/CDN, Auth.js — see `technologies/javascript/`, `technologies/nextjs/` |
| Cloud | Managed LB, CDN, DB multi-AZ, object storage before bespoke clusters |
