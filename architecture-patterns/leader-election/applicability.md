# Leader Election — applicability

## Signals

- Cluster-wide schedulers
- Partition owners
- Singleton processors in a fleet

## Anti-signals

- Stateless horizontally scaled workers
- Managed schedulers already elect

## Simpler alternative first

1. Managed singleton job
2. DB advisory lock

Adopt **Leader Election** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | k8s leader election; Redis locks; etcd/ZooKeeper carefully — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | k8s leader election; Redis locks; etcd/ZooKeeper carefully — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
