# System design library

On-demand reference for **large-scale system design** craft: fundamentals, edge/data/compute building blocks, and worked exercises. Topic catalog inspired by [https://github.com/donnemartin/system-design-primer](https://github.com/donnemartin/system-design-primer) — prose here is **original**, **English only** (SF-21), and **forever-generic**.

## How to load

1. Open [`07-judgment/system-design.md`](../07-judgment/system-design.md) first (selector).
2. Pick **at most 1–3** folders.
3. Prefer modular monolith / platform baselines; ADR when consequential.
4. Never paste packs into products (SF-22).

Siblings: [`architecture-patterns/`](../architecture-patterns/README.md) (named cloud patterns) · [`design-patterns/`](../design-patterns/README.md) (GoF) · [`07-judgment/enterprise-system-design.md`](../07-judgment/enterprise-system-design.md).

## Index

| Pack | Title | Family | Kind | Intent |
|------|-------|--------|------|--------|
| [`design-method/`](design-method/README.md) | System design method | Method | concept | Approach large-system design with use cases, high-level sketch, core components, then scale — plus rough capacity math. |
| [`performance-vs-scalability/`](performance-vs-scalability/README.md) | Performance vs scalability | Fundamentals | concept | Separate making one unit fast from making the system handle more load by adding resources. |
| [`latency-vs-throughput/`](latency-vs-throughput/README.md) | Latency vs throughput | Fundamentals | concept | Distinguish response time of one unit of work from how many units complete per time. |
| [`cap-and-tradeoffs/`](cap-and-tradeoffs/README.md) | CAP and consistency trade-offs | Fundamentals | concept | Under partition, choose availability or consistency deliberately — and know what your store actually guarantees. |
| [`consistency-models/`](consistency-models/README.md) | Consistency models | Data | concept | Choose weak, eventual, or strong consistency based on user-visible correctness needs. |
| [`availability-patterns/`](availability-patterns/README.md) | Availability patterns | Reliability | concept | Use failover and replication (and know nines math) so planned/unplanned failure does not equal outage. |
| [`dns/`](dns/README.md) | DNS | Edge | concept | Use DNS as the first routing and discovery layer — with TTL and failure awareness. |
| [`cdn/`](cdn/README.md) | Content delivery network | Edge | concept | Serve static (and some dynamic) content from edge caches closer to users. |
| [`load-balancer/`](load-balancer/README.md) | Load balancer | Edge | concept | Spread traffic across instances; terminate TLS; health-check backends (L4/L7). |
| [`reverse-proxy/`](reverse-proxy/README.md) | Reverse proxy | Edge | concept | Terminate client connections at a proxy that forwards to backends — caching, compression, TLS, routing. |
| [`application-layer/`](application-layer/README.md) | Application layer | Compute | concept | Structure app services (including when microservices and service discovery earn their keep). |
| [`relational-and-nosql/`](relational-and-nosql/README.md) | Relational and NoSQL data stores | Data | concept | Pick SQL vs NoSQL (and hybrids) from query shape, transactions, and scale — not hype. |
| [`caching/`](caching/README.md) | Caching | Data | concept | Place caches (client, CDN, server, DB, app) to cut latency and origin load — with invalidation plans. |
| [`asynchronism/`](asynchronism/README.md) | Asynchronism | Messaging | concept | Decouple producers from consumers with queues/tasks so spikes and slow work do not block users. |
| [`communication/`](communication/README.md) | Service communication | Networking | concept | Choose request/response vs messaging, and TCP/HTTP/RPC trade-offs for service calls. |
| [`security-basics/`](security-basics/README.md) | Security basics for system design | Security | concept | Bake authn/z, transport security, secrets, and least privilege into the design sketch — not as afterthought. |
| [`url-shortener/`](url-shortener/README.md) | URL shortener | Exercise | exercise | Design a service that maps short codes to long URLs at high read QPS with unique code generation. |
| [`activity-feed/`](activity-feed/README.md) | Activity feed | Exercise | exercise | Design a personalized feed (timeline) with fan-out, ranking, and search considerations. |
| [`web-crawler/`](web-crawler/README.md) | Web crawler | Exercise | exercise | Design a polite, scalable crawler with URL frontier, fetchers, parsers, and storage. |
| [`account-insights/`](account-insights/README.md) | Account insights aggregator | Exercise | exercise | Design a system that ingests external account transactions and categorizes them for user insights. |
| [`social-graph/`](social-graph/README.md) | Social graph | Exercise | exercise | Design follow/friend relationships and common graph queries (followers, mutuals, BFS degrees). |
| [`distributed-cache/`](distributed-cache/README.md) | Distributed cache / query cache | Exercise | exercise | Design a shared cache tier for search or API queries with eviction, replication, and stampede control. |
| [`leaderboard-ranking/`](leaderboard-ranking/README.md) | Category leaderboard / sales rank | Exercise | exercise | Design ranked lists by category that update under write load without full table sorts. |
| [`multi-region-scale/`](multi-region-scale/README.md) | Scale to millions of users | Exercise | exercise | Compose edge, app, data, cache, and async tiers into a design that grows from one region toward multi-AZ/region. |

**Count:** 24 packs (16 concept · 8 exercise).

## Criticism

- Interview diagrams are **not** a license to microservices a modular monolith.
- **Chosen: none (baseline)** is often correct.
- Exercises use generic domains — do not import third-party brand solutions into products.

## Sources (library-level)

| Source | Checked |
|--------|---------|
| https://github.com/donnemartin/system-design-primer | 2026-11-28 |
| Azure Well-Architected pillars (lens) | 2026-11-28 |
