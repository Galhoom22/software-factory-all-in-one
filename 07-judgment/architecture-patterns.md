# Judgment — software architecture patterns (distributed / cloud)

Absorb **distributed and cloud architecture pattern judgment** for consequential topology, messaging, data, and edge design. Keep the on-demand library in [`architecture-patterns/`](../architecture-patterns/README.md) — open it **only through this selector**, never paste packs into products, never force a named pattern on every feature (SF-20).

Upstream reading (human only): [Azure Architecture Center — Cloud design patterns](https://learn.microsoft.com/en-us/azure/architecture/patterns/) (technology-agnostic catalog). Prefer the **behaviors** below; do not copy vendor sample domains into products ([`01-STEPS.md`](../01-STEPS.md) § Absorb outside references).

Sibling large-scale method/fundamentals → [`system-design.md`](system-design.md) (SF-22).

Sibling: in-process GoF shapes → [`design-patterns.md`](design-patterns.md). Boundary craft → [`enterprise-system-design.md`](enterprise-system-design.md). Integrations → [`integration-engineering.md`](integration-engineering.md).

## Adopt

| Idea | Lands in |
|------|----------|
| Match **problem → pattern**, not technology fashion | FEATURE design · ADR |
| Distributed fallacies are real — patterns compensate, they do not delete physics | ARCHITECTURE · reliability notes |
| Platform primitives often *are* the pattern (queues, gateways, health probes, IdP) | Ponytail / technologies packs |
| Compose patterns deliberately (Retry+Breaker, Queue+Consumers, Gateway trio) | relations.md in packs |
| **Chosen: none (baseline)** is valid — especially modular monoliths | Architecture Decision Record |
| Open at most **1–3** library folders after this selector | Day design |

## Forbid

| Do not | Why |
|--------|-----|
| Microservices + every catalog pattern “for scale” without load | Complexity without benefit |
| Copy Azure portal samples as product architecture | Forever-generic; product pins its cloud |
| Skip simpler queue/gateway/IdP features | Ponytail |
| Open the whole `architecture-patterns/` tree | Selector first |
| Paste packs into product repos | SF-20 |
| Confuse with GoF `design-patterns/` | Different concern |

## Selection procedure (mandatory)

1. **Problem** — one sentence (what breaks or costs too much today)?
2. **Forces** — latency, consistency, tenancy, cost, compliance, team skill.
3. **Baseline** — modular monolith call, single DB transaction, framework queue, managed gateway — enough?
4. **Family** — resilience, data, messaging, gateway, deployment, identity/edge, integration.
5. **Candidates** — 1–3 rows from the table.
6. **Open packs** — only those folders.
7. **Choose** — Architecture Decision Record before merging topology.

## Problem → pattern table

| You need to … | Candidates | Do not confuse with |
|---------------|------------|---------------------|
| Put network and cross-cutting client concerns in a helper beside the consumer | Ambassador | Sidecar (colocated companion with broader duties) |
| Translate between a modern model and a legacy (or foreign) model so legacy shapes do not leak | Anti-Corruption Layer | Adapter (GoF — one interface wrap) |
| Accept work quickly, process asynchronously, and give the client a clear way to learn the result | Asynchronous Request-Reply | Publisher-Subscriber (broadcast) |
| Give each frontend (web, mobile, partner) its own backend shape instead of one crowded API | Backends for Frontends | API Gateway (routing) |
| Isolate resource pools so failure or saturation in one compartment does not sink the rest | Bulkhead | Circuit Breaker (fail fast to a dependency) |
| Load data into cache on miss; application owns read-through and invalidation | Cache-Aside | Materialized View (precomputed query) |
| Let services react to events to complete a business flow without a central orchestrator | Choreography | Publisher-Subscriber (transport) |
| Stop calling a failing dependency for a cool-down so the system fails fast and recovers | Circuit Breaker | Retry (keep trying) |
| Send a small claim (token) on the bus and store the large payload elsewhere | Claim Check | Valet Key (client direct access) |
| Undo or neutralize prior steps when a multi-step distributed operation fails midway | Compensating Transaction | Retry (forward) |
| Multiple workers pull the same queue so throughput scales with consumers | Competing Consumers | Publisher-Subscriber (fan-out copy) |
| Run multiple tasks in one compute unit when isolation cost exceeds the benefit | Compute Resource Consolidation | Sidecar (companion process) |
| Separate read models from write models when their shapes and scale diverge | CQRS | Event Sourcing (how writes are stored) |
| Deploy independent copies of the stack (stamps) for scale, isolation, or regions | Deployment Stamps | Geode (any node serves any region traffic) |
| Persist state as an append-only stream of domain events; rebuild views by replaying | Event Sourcing | CQRS (often paired) |
| Keep configuration outside the deploy package so settings change without rebuilds | External Configuration Store | Feature flag products |
| Delegate authentication to an external identity provider; app consumes claims | Federated Identity | Gatekeeper (request sanitize) |
| Validate and sanitize requests on a hardened host before they reach trusted internals | Gatekeeper | Gateway Offloading (features to gateway) |
| Aggregate several backend calls into one client round-trip at the gateway | Gateway Aggregation | Gateway Routing |
| Move shared concerns (TLS, auth, logging, compression) into the gateway | Gateway Offloading | Gatekeeper (trust boundary emphasis) |
| Expose one entry URL and route to the correct service by path, host, or headers | Gateway Routing | Strangler Fig (migration routing) |
| Deploy backend nodes across geographies where each can serve requests from any region | Geode | Deployment Stamps (isolated copies) |
| Expose checks that probes can call to know if the instance should receive traffic | Health Endpoint Monitoring | Quarantine (asset quality) |
| Process the same message multiple times with the same effect as once | Idempotent Consumer | Retry (producer/client) |
| Maintain secondary indexes (tables) for query fields the primary store cannot filter efficiently | Index Table | Materialized View |
| Elect one instance to coordinate shared work so followers do not conflict | Leader Election | Scheduler Agent Supervisor |
| Precompute a query-friendly view when raw storage shape is wrong for reads | Materialized View | Cache-Aside |
| Connect incompatible messaging systems through an intermediary bridge | Messaging Bridge | Anti-Corruption Layer |
| Split processing into composable filters connected by pipes (channels) | Pipes and Filters | Choreography |
| Process higher-priority messages before lower-priority ones | Priority Queue | Rate Limiting |
| Publish events to many subscribers without the publisher knowing recipients | Publisher-Subscriber | Observer (in-process) |
| Hold external assets until they pass agreed quality/security checks | Quarantine | Gatekeeper |
| Buffer work on a queue so consumers process at a steady rate under spikes | Queue-Based Load Leveling | Throttling |
| Cap how fast a client or tenant can consume an API to protect the system | Rate Limiting | Throttling (often server-side shedding) |
| Re-attempt operations that fail from transient faults, with backoff and limits | Retry | Circuit Breaker |
| Coordinate a sequence of local transactions across services with compensations on failure | Saga | Choreography (style) |
| A scheduler kicks work, agents do it, a supervisor monitors and recovers | Scheduler Agent Supervisor | Leader Election |
| Process related messages in order for one group without blocking unrelated groups | Sequential Convoy | Competing Consumers |
| Split data into horizontal partitions (shards) by a key for scale and isolation | Sharding | Deployment Stamps |
| Attach a helper process beside the main app for cross-cutting duties | Sidecar | Ambassador |
| Serve static assets from object storage/CDN instead of app servers | Static Content Hosting | Cache-Aside |
| Incrementally replace a legacy system by routing slices to new services until the old can die | Strangler Fig | Anti-Corruption Layer |
| Deliberately limit resource consumption so the system stays within safe capacity | Throttling | Rate Limiting |
| Issue a restricted time-bound token so clients upload/download directly to a resource | Valet Key | Federated Identity |

All 44 catalog packs appear above.

## Confusion pairs (deciding questions)

| Pair | Ask |
|------|-----|
| Circuit Breaker vs Retry | Should we **stop calling** for a cool-down, or **try again** with backoff? |
| Choreography vs Saga orchestration | Do peers **react to events**, or does a **supervisor** drive steps? |
| Competing Consumers vs Pub/Sub | Is it **one work item / one winner**, or **fan-out copies**? |
| BFF vs Gateway Aggregation | Per-client backend module, or one gateway composing many calls? |
| ACL vs Adapter (GoF) | Legacy/modern **model translation** at a boundary, or one interface wrap in-process? |
| Strangler vs Gateway Routing | Migration **slice replacement**, or stable **edge routing** alone? |
| Cache-Aside vs Materialized View | On-demand cache fill, or **maintained projection**? |
| Rate Limiting vs Throttling | Protect by **client budget**, or **shed load** to save the system? |
| Deployment Stamps vs Geode vs Sharding | Full stack copies, any-node geo serve, or **data partitions**? |
| Ambassador vs Sidecar | Outbound helper focus, or general colocated companion? |

## Architecture Decision Record

```
Architecture decision
Problem:        <one sentence>
Forces:         <latency, consistency, tenancy, cost, …>
Baseline:       <no new topology / platform feature> — sufficient? yes/no
Candidates:     <A> — rejected because … ; <B> — rejected because …
Chosen:         <pattern or none (baseline)>
Platform-native: <queue, gateway, IdP, probe, …>
Costs accepted: <ops, lag, dual-running, …>
Exit path:      <how to remove>
Evidence:       <test / probe / load signal at risk boundary>
```

## Worked scenarios

### 1) None — modular monolith export

```
Problem:        Export a CSV of orders for one tenant.
Forces:         Simple, rare, same DB.
Baseline:       Sync Artisan/HTTP job reading Eloquent — sufficient? yes.
Chosen:         none (baseline)
```

### 2) Queue-Based Load Leveling + Competing Consumers

```
Problem:        Image uploads spike and time out the API.
Forces:         Accept upload fast; process steadily; scale workers.
Baseline:       Inline image processing — fails under spike.
Chosen:         Queue-Based Load Leveling + Competing Consumers
Platform-native: Laravel queue + horizontal workers
Evidence:       Upload returns 202; workers drain lag; duplicate-safe jobs
```

### 3) Strangler Fig + Anti-Corruption Layer

```
Problem:        Replace billing legacy without big-bang.
Forces:         Dual-run; protect new domain language.
Chosen:         Strangler Fig (route slices) + Anti-Corruption Layer (translate)
Evidence:       Feature flag routes; legacy DTO never imported in domain
```

## Professional bar

1. Problem named?
2. Baseline rejected or accepted?
3. At most 1–3 packs opened?
4. Failure mode tested?
5. No pattern-for-show?
6. Cross-link GoF only when in-process?

## Day workflow hook

When the day introduces **consequential distributed topology** (new queue topology, gateway, multi-region, saga, strangler slice): complete the Architecture Decision Record. Surprising misuse → `docs/learning-from-mistakes/` + generic lesson in [`06-LESSONS.md`](../06-LESSONS.md) when professionalism rises.
