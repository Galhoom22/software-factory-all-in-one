# Judgment — system design (large-scale)

Absorb **system design judgment** for capacity, edge, data, and reliability sketches. Keep the on-demand library in [`system-design/`](../system-design/README.md) — open it **only through this selector**, never paste packs into products, never force interview topology on every feature (SF-22).

Upstream reading (human only): [https://github.com/donnemartin/system-design-primer](https://github.com/donnemartin/system-design-primer). Prefer the **behaviors** below; do not copy third-party sample brands into products ([`01-STEPS.md`](../01-STEPS.md) § Absorb outside references). Kit language: English only (SF-21).

Siblings: cloud pattern names → [`architecture-patterns.md`](architecture-patterns.md). GoF → [`design-patterns.md`](design-patterns.md). Boundaries → [`enterprise-system-design.md`](enterprise-system-design.md). ADR craft → [`sad-adr.md`](sad-adr.md).

## Adopt

| Idea | Lands in |
|------|----------|
| Use cases → constraints → high-level → core → scale | FEATURE design · ARCHITECTURE |
| Back-of-the-envelope before new tiers | ADR · capacity notes |
| Modular monolith baseline | Ponytail |
| Open at most **1–3** library folders | Day design |
| **Chosen: none (baseline)** is valid | Architecture Decision Record |

## Forbid

| Do not | Why |
|--------|-----|
| Microservices + multi-region on day one without load | Complexity without benefit |
| Paste primer/vendor solutions into products | Forever-generic; brands are teaching scaffolds |
| Open the whole `system-design/` tree | Selector first |
| Confuse with `architecture-patterns/` | Process/fundamentals vs named cloud patterns |
| Non-English instruction text | SF-21 |

## Selection procedure (mandatory)

1. **Problem** — one sentence.
2. **Forces** — latency, consistency, tenancy, cost, compliance, skill.
3. **Baseline** — modular monolith / one DB / managed LB — enough?
4. **Family** — method, fundamentals, edge, data, messaging, exercise.
5. **Candidates** — 1–3 rows.
6. **Open packs** — only those folders.
7. **Choose** — ADR before merging topology.

## Problem → pack table

| You need to … | Candidates | Do not confuse with |
|---------------|------------|---------------------|
| Approach large-system design with use cases, high-level sketch, core components, then scale — plus rough capacity math | System design method | Architecture pattern shopping (architecture-patterns/) |
| Separate making one unit fast from making the system handle more load by adding resources | Performance vs scalability | Latency vs throughput |
| Distinguish response time of one unit of work from how many units complete per time | Latency vs throughput | Performance vs scalability |
| Under partition, choose availability or consistency deliberately — and know what your store actually guarantees | CAP and consistency trade-offs | consistency-models (patterns of lag) |
| Choose weak, eventual, or strong consistency based on user-visible correctness needs | Consistency models | cap-and-tradeoffs |
| Use failover and replication (and know nines math) so planned/unplanned failure does not equal outage | Availability patterns | load-balancer (traffic spread) |
| Use DNS as the first routing and discovery layer — with TTL and failure awareness | DNS | load-balancer |
| Serve static (and some dynamic) content from edge caches closer to users | Content delivery network | caching (app/data cache) |
| Spread traffic across instances; terminate TLS; health-check backends (L4/L7) | Load balancer | reverse-proxy |
| Terminate client connections at a proxy that forwards to backends — caching, compression, TLS, routing | Reverse proxy | load-balancer |
| Structure app services (including when microservices and service discovery earn their keep) | Application layer | architecture-patterns gateway/BFF |
| Pick SQL vs NoSQL (and hybrids) from query shape, transactions, and scale — not hype | Relational and NoSQL data stores | caching |
| Place caches (client, CDN, server, DB, app) to cut latency and origin load — with invalidation plans | Caching | cdn |
| Decouple producers from consumers with queues/tasks so spikes and slow work do not block users | Asynchronism | communication (protocols) |
| Choose request/response vs messaging, and TCP/HTTP/RPC trade-offs for service calls | Service communication | asynchronism |
| Bake authn/z, transport security, secrets, and least privilege into the design sketch — not as afterthought | Security basics for system design | reverse-proxy (TLS feature only) |
| Design a service that maps short codes to long URLs at high read QPS with unique code generation | URL shortener | distributed-cache |
| Design a personalized feed (timeline) with fan-out, ranking, and search considerations | Activity feed | social-graph |
| Design a polite, scalable crawler with URL frontier, fetchers, parsers, and storage | Web crawler | asynchronism |
| Design a system that ingests external account transactions and categorizes them for user insights | Account insights aggregator | activity-feed |
| Design follow/friend relationships and common graph queries (followers, mutuals, BFS degrees) | Social graph | activity-feed |
| Design a shared cache tier for search or API queries with eviction, replication, and stampede control | Distributed cache / query cache | caching (concept) |
| Design ranked lists by category that update under write load without full table sorts | Category leaderboard / sales rank | relational-and-nosql |
| Compose edge, app, data, cache, and async tiers into a design that grows from one region toward multi-AZ/region | Scale to millions of users | architecture-patterns geode/deployment-stamps |

## Confusion pairs

| Pair | Ask |
|------|-----|
| Performance vs scalability | Is one unit slow, or can we not grow capacity? |
| Latency vs throughput | User wait time, or work completed per second? |
| CAP vs consistency models | Partition choice, or client-visible lag pattern? |
| Load balancer vs reverse proxy | Distribution/health, or request features (TLS/cache/path)? |
| Caching vs CDN | App/query data, or static edge assets? |
| System design vs architecture-patterns | Design method/building blocks, or a named cloud pattern? |
| Activity feed vs social graph | Timeline fan-out, or edge storage/queries? |

## Architecture Decision Record

```
Architecture decision (system design)
Problem:        <one sentence>
Forces:         <latency, consistency, tenancy, cost, …>
Numbers:        <QPS / storage / bandwidth or N/A>
Baseline:       <modular monolith / platform> — sufficient? yes/no
Candidates:     <A> — rejected … ; <B> — rejected …
Chosen:         <pack or none (baseline)>
Costs accepted: <ops, lag, dual-running, …>
Evidence:       <test / probe / load signal>
```

## Worked scenarios

### 1) None — modular monolith

```
Problem:        CRUD for one tenant's settings.
Numbers:        <100 QPS
Baseline:       sufficient? yes
Chosen:         none (baseline)
```

### 2) URL shortener reads

```
Problem:        Hot redirects melt the primary DB.
Numbers:        50k QPS reads, tiny writes
Baseline:       SQL only — fails
Chosen:         url-shortener + caching
```

### 3) Feed at scale

```
Problem:        Celebrity posts timeout fan-out.
Chosen:         activity-feed + asynchronism + consistency-models
```

## Day workflow hook

When the day introduces **consequential scale/topology**, complete the ADR above. Surprising misuse → learning-from-mistakes + [`06-LESSONS.md`](../06-LESSONS.md) when professionalism rises.
