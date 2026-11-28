# Architecture patterns library (cloud / distributed)

On-demand reference for **software architecture** patterns used in distributed and cloud-native systems. Catalog inspired by [Azure Architecture Center — Cloud design patterns](https://learn.microsoft.com/en-us/azure/architecture/patterns/) — prose here is original and **forever-generic** (any cloud, hybrid, or modular monolith).

## How to load

1. Open [`07-judgment/architecture-patterns.md`](../07-judgment/architecture-patterns.md) first (selector).
2. Pick **at most 1–3** candidate folders from the index.
3. Prefer simpler / platform-native options; record an Architecture Decision Record when consequential.
4. Never paste packs into product repos (SF-20).

Related: GoF object patterns live in [`design-patterns/`](../design-patterns/README.md) (different concern — in-process shape vs distributed topology).

## Index

| Pack | Pattern | Family | Intent |
|------|---------|--------|--------|
| [`ambassador/`](ambassador/README.md) | Ambassador | Integration / edge | Put network and cross-cutting client concerns in a helper beside the consumer. |
| [`anti-corruption-layer/`](anti-corruption-layer/README.md) | Anti-Corruption Layer | Integration / migration | Translate between a modern model and a legacy (or foreign) model so legacy shapes do not leak. |
| [`asynchronous-request-reply/`](asynchronous-request-reply/README.md) | Asynchronous Request-Reply | Messaging / UX | Accept work quickly, process asynchronously, and give the client a clear way to learn the result. |
| [`backends-for-frontends/`](backends-for-frontends/README.md) | Backends for Frontends | API / UX | Give each frontend (web, mobile, partner) its own backend shape instead of one crowded API. |
| [`bulkhead/`](bulkhead/README.md) | Bulkhead | Resilience | Isolate resource pools so failure or saturation in one compartment does not sink the rest. |
| [`cache-aside/`](cache-aside/README.md) | Cache-Aside | Data / performance | Load data into cache on miss; application owns read-through and invalidation. |
| [`choreography/`](choreography/README.md) | Choreography | Messaging / workflow | Let services react to events to complete a business flow without a central orchestrator. |
| [`circuit-breaker/`](circuit-breaker/README.md) | Circuit Breaker | Resilience | Stop calling a failing dependency for a cool-down so the system fails fast and recovers. |
| [`claim-check/`](claim-check/README.md) | Claim Check | Messaging | Send a small claim (token) on the bus and store the large payload elsewhere. |
| [`compensating-transaction/`](compensating-transaction/README.md) | Compensating Transaction | Consistency | Undo or neutralize prior steps when a multi-step distributed operation fails midway. |
| [`competing-consumers/`](competing-consumers/README.md) | Competing Consumers | Messaging / scale | Multiple workers pull the same queue so throughput scales with consumers. |
| [`compute-resource-consolidation/`](compute-resource-consolidation/README.md) | Compute Resource Consolidation | Cost / ops | Run multiple tasks in one compute unit when isolation cost exceeds the benefit. |
| [`cqrs/`](cqrs/README.md) | CQRS | Data | Separate read models from write models when their shapes and scale diverge. |
| [`deployment-stamps/`](deployment-stamps/README.md) | Deployment Stamps | Deployment / scale | Deploy independent copies of the stack (stamps) for scale, isolation, or regions. |
| [`event-sourcing/`](event-sourcing/README.md) | Event Sourcing | Data | Persist state as an append-only stream of domain events; rebuild views by replaying. |
| [`external-configuration-store/`](external-configuration-store/README.md) | External Configuration Store | Ops | Keep configuration outside the deploy package so settings change without rebuilds. |
| [`federated-identity/`](federated-identity/README.md) | Federated Identity | Security / identity | Delegate authentication to an external identity provider; app consumes claims. |
| [`gatekeeper/`](gatekeeper/README.md) | Gatekeeper | Security / edge | Validate and sanitize requests on a hardened host before they reach trusted internals. |
| [`gateway-aggregation/`](gateway-aggregation/README.md) | Gateway Aggregation | Gateway | Aggregate several backend calls into one client round-trip at the gateway. |
| [`gateway-offloading/`](gateway-offloading/README.md) | Gateway Offloading | Gateway | Move shared concerns (TLS, auth, logging, compression) into the gateway. |
| [`gateway-routing/`](gateway-routing/README.md) | Gateway Routing | Gateway | Expose one entry URL and route to the correct service by path, host, or headers. |
| [`geode/`](geode/README.md) | Geode | Deployment / geo | Deploy backend nodes across geographies where each can serve requests from any region. |
| [`health-endpoint-monitoring/`](health-endpoint-monitoring/README.md) | Health Endpoint Monitoring | Ops / reliability | Expose checks that probes can call to know if the instance should receive traffic. |
| [`idempotent-consumer/`](idempotent-consumer/README.md) | Idempotent Consumer | Messaging / reliability | Process the same message multiple times with the same effect as once. |
| [`index-table/`](index-table/README.md) | Index Table | Data | Maintain secondary indexes (tables) for query fields the primary store cannot filter efficiently. |
| [`leader-election/`](leader-election/README.md) | Leader Election | Coordination | Elect one instance to coordinate shared work so followers do not conflict. |
| [`materialized-view/`](materialized-view/README.md) | Materialized View | Data | Precompute a query-friendly view when raw storage shape is wrong for reads. |
| [`messaging-bridge/`](messaging-bridge/README.md) | Messaging Bridge | Integration | Connect incompatible messaging systems through an intermediary bridge. |
| [`pipes-and-filters/`](pipes-and-filters/README.md) | Pipes and Filters | Processing | Split processing into composable filters connected by pipes (channels). |
| [`priority-queue/`](priority-queue/README.md) | Priority Queue | Messaging | Process higher-priority messages before lower-priority ones. |
| [`publisher-subscriber/`](publisher-subscriber/README.md) | Publisher-Subscriber | Messaging | Publish events to many subscribers without the publisher knowing recipients. |
| [`quarantine/`](quarantine/README.md) | Quarantine | Security / supply | Hold external assets until they pass agreed quality/security checks. |
| [`queue-based-load-leveling/`](queue-based-load-leveling/README.md) | Queue-Based Load Leveling | Messaging / scale | Buffer work on a queue so consumers process at a steady rate under spikes. |
| [`rate-limiting/`](rate-limiting/README.md) | Rate Limiting | Resilience / abuse | Cap how fast a client or tenant can consume an API to protect the system. |
| [`retry/`](retry/README.md) | Retry | Resilience | Re-attempt operations that fail from transient faults, with backoff and limits. |
| [`saga/`](saga/README.md) | Saga | Consistency | Coordinate a sequence of local transactions across services with compensations on failure. |
| [`scheduler-agent-supervisor/`](scheduler-agent-supervisor/README.md) | Scheduler Agent Supervisor | Coordination | A scheduler kicks work, agents do it, a supervisor monitors and recovers. |
| [`sequential-convoy/`](sequential-convoy/README.md) | Sequential Convoy | Messaging | Process related messages in order for one group without blocking unrelated groups. |
| [`sharding/`](sharding/README.md) | Sharding | Data / scale | Split data into horizontal partitions (shards) by a key for scale and isolation. |
| [`sidecar/`](sidecar/README.md) | Sidecar | Deployment / edge | Attach a helper process beside the main app for cross-cutting duties. |
| [`static-content-hosting/`](static-content-hosting/README.md) | Static Content Hosting | Performance / cost | Serve static assets from object storage/CDN instead of app servers. |
| [`strangler-fig/`](strangler-fig/README.md) | Strangler Fig | Migration | Incrementally replace a legacy system by routing slices to new services until the old can die. |
| [`throttling/`](throttling/README.md) | Throttling | Resilience / capacity | Deliberately limit resource consumption so the system stays within safe capacity. |
| [`valet-key/`](valet-key/README.md) | Valet Key | Security / data access | Issue a restricted time-bound token so clients upload/download directly to a resource. |

**Count:** 44 packs.

## Criticism (why this library must not inflate systems)

- Patterns are **compensation for distributed fallacies**, not a badge of seniority.
- **Chosen: none (baseline)** is often correct inside a modular monolith.
- Combining patterns without an owner for the seam creates distributed monoliths.
- Azure-specific samples in upstream docs are illustrations — pin *your* stack in product DECISIONS.

## Sources (library-level)

| Source | Checked |
|--------|---------|
| https://learn.microsoft.com/en-us/azure/architecture/patterns/ | 2026-11-28 |
| Azure Well-Architected Framework pillars (mapped per pack) | 2026-11-28 |
