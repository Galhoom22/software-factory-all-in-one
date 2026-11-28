# Index Table — applicability

## Signals

- Key-value / document stores without rich secondary indexes
- Known query patterns

## Anti-signals

- Relational DB already indexes the columns
- Unbounded fan-out indexes

## Simpler alternative first

1. Native DB indexes
2. Search engine for text

Adopt **Index Table** only when those baselines fail the forces above.

## Framework-native equivalents

| Platform | Prefer this first |
|----------|-------------------|
| Laravel / PHP | Elastic/OpenSearch; DynamoDB GSIs conceptually; Postgres indexes first — see `technologies/laravel/`, `technologies/php/` |
| Node / JavaScript | Elastic/OpenSearch; DynamoDB GSIs conceptually; Postgres indexes first — see `technologies/javascript/`, `technologies/nextjs/` when SSR/BFF |
| Cloud / edge | Managed queues, gateways, identity, and health probes before bespoke clusters |

Verified claim (conceptual): platform primitives often *are* this pattern — name the pattern in an Architecture Decision Record only when the abstraction is consequential.
