# DSA & algorithmic performance (judgment only)

Absorb interview-style **data structures & algorithms** discipline into product engineering — without installing a LeetCode curriculum into the planning or implementation repositories.

Upstream study path (human reading): owner’s Pareto DSA set (Brute → Optimized → Optimal, Big O + edges). **Do not** copy problem lists, C++ solutions, or pattern encyclopedias into product repos.

## Adopt

| Practice | Where it lands |
|----------|----------------|
| Name **`n`** (or `V`/`E` / rows×cols / page size) **before** coding a hot path | Design note · day Pareto · feature Performance module |
| State **Time O(…)** and **Space O(…)** for non-trivial loops, searches, sorts, aggregates, graph/tree walks | Same |
| Prefer **Brute → better** thinking: do not ship the first nested-loop idea when constraints imply it will choke | Implementation review · CodeRabbit performance axis |
| Pick the **right structure** (hash set/map, two pointers / window, heap, indexed query, queue) over micro-optimizing a bad approach | Design · FEATURE_SDLC Performance module |
| Name **2–3 edge cases** (empty, single, max-`n`, all-equal, duplicates) before Done on that path | Verification · tests |
| Treat **ORM N+1**, unbounded `SELECT *`, loading whole tables into memory, missing indexes, and O(n²) in-request work as the **same class** of failure as interview TLE | BE/FE TESTING · day proof |
| Record **time↔space trade-offs** when you add memory to buy linear scans | DECISIONS or feature design note when consequential |

## Forbid

| Anti-pattern | Why |
|--------------|-----|
| Dumping a 49-problem (or larger) catalog / solution tree into planning or product docs | Second curriculum; forever-generic playbook forbids study dumps |
| Mandating LeetCode practice as a merge gate | Product delivery ≠ interview grind |
| Premature micro-opts or exotic structures on tiny bounded `n` | YAGNI; readability first when constraints are tiny |
| Claiming “O(1) hash” without **average** / amortization honesty | Misleading evidence |
| Shipping happy-path-only loops that explode at real catalog sizes | Same as edge-blind interview fails |
| Using “Performance module” as theater with no `n` / Big O / evidence | Same as filled-template ≠ Done |

## Day / PR check (30–60 seconds when earned)

Run this when the change touches a **hot path**: loops over user/job/resume/list data, search/match/rank, export/batch jobs, recursive walks, or new queries that can grow with data.

1. What is `n` (and growth bound)?
2. Current approach class: O(1) / O(log n) / O(n) / O(n log n) / O(n²+) / O(V+E) / O(pages×pageSize)?
3. Is there an obvious better structure or query shape (hash, index, window, heap, single-pass, batch)?
4. Edges: empty · single · max-`n` / large page · duplicates?
5. Evidence: test, explain plan / assert, or short comment `why this class is enough`?

If `n` can reach production scale and the approach is still nested O(n²+) in the request path **without** a documented bound or batch strategy → **block Done**; upgrade or redesign.

Skip the ritual for trivial getters, pure config, copy edits, and clearly bounded tiny inputs.

## Map to product layers

| Layer | Typical DSA smell |
|-------|-------------------|
| API / Actions | Nested loops over collections; building maps repeatedly; recursive depth without limit |
| DB | N+1 queries; unindexed filters/sorts; loading unbounded rows |
| Queue / jobs | Per-item full-table scans; unbounded fan-out |
| FE lists | Client-side O(n²) filters on large mocks; re-sorting every render without need |
| AI / matching | Pairwise all-vs-all when ANN / inverted index / prefilter exists |

## Sources (do not vendor)

- Owner Pareto DSA study repo (Big O + edges + Brute→Optimal habit) — judgment only
- Product SECURITY / TESTING for trust boundaries and risk-matched tests
