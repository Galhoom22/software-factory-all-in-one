# Judgment — Context7 / current library docs

Absorb **up-to-date library and framework documentation** as **judgment only**. Default MCP: [Context7](https://context7.com/) (`resolve-library-id` → `query-docs`). Map it onto the day pipeline, `technologies/` packs, and the human code-review modern-syntax axis — never invent a second docs product, never trust training memory for “latest API,” and never bump a product SRS pin from a Context7 hit alone.

**When this applies:** every implementation day that writes or changes code against a **library, framework, or language API** (Laravel, Next.js, PHP, Tailwind, Stripe SDK, Eloquent, etc.). Doc-only / pure product-copy / no-stack days: mark **N/A**.

## Problem this prevents

Agents ship **stale idioms**: deprecated APIs, wrong major-version docs, copy-paste from outdated tutorials, or “I remember how Laravel did it.” Context7 (and official vendor pages) exist so AI agents pull **today’s** docs for the **pinned** line — not last year’s training cut.

**Target:** every non-trivial stack call in the day’s diff matches the **product-pinned** version line as documented **this session**.

## When to call Context7 (hard triggers)

| Trigger | Action |
|---------|--------|
| Non-trivial code in a stack with a `technologies/<slug>/` pack | Open the pack **and** Context7 (or official page) for the **pinned** line before coding |
| Unsure about an API, option, middleware, config key, or upgrade path | `resolve-library-id` → `query-docs` (one concept per query) |
| Owner names a stack / pastes official docs URL | Freshness path in [`technologies/README.md`](../technologies/README.md) (D-79) — Context7 + official compare → update pack if stale |
| Human code-review “modern syntax” axis | Evidence = pack `use-these` **plus** a this-session docs/Context7 check when the change is non-trivial |

**Skip / N/A:** renaming locals, copy edits, markdown-only planning, pure CSS token tweaks with no framework API, or re-applying an API already verified earlier **in the same session** for the same version.

## How to use Context7 (agent protocol)

1. **Resolve** — `resolve-library-id` with the library name + a short query. Prefer **official** IDs (high source reputation / docs repos) over forks.
2. **Pin the version** — if the product SRS (or pack slice) pins a line (e.g. Laravel **13.x**, Next **16**), pick the matching Context7 version/branch when listed. Do **not** silently code against a newer major than the pin.
3. **Query** — `query-docs` with `libraryId` + one focused concept. Split multi-topic asks into separate queries.
4. **Apply** — write code from the returned docs + pack `quality.md` / `use-these`. Cite the library/version when the day summary notes the check.
5. **Fallback** — if Context7 MCP is missing, rate-limited, or has no library: use the **official vendor URL** from the pack’s `official-refs.md` or SRS §2 the same session. Memory is still not evidence.

## How this relates to packs / SRS / human review

| Layer | Role |
|-------|------|
| **Product SRS pin** | What version the **product** ships (change only via ADR) |
| **`technologies/` pack** | Distilled craft for that line (quality, use/stop, mistakes) |
| **Context7 / official docs (this file)** | This-session proof the advice is still current |
| **Human code-review bar** | Rejects outdated syntax even if tests pass ([`human-code-review.md`](human-code-review.md)) |

None replaces another. A green pack file dated last month is not enough without a freshness check when the API surface is non-trivial (D-66).

## Day workflow hook

1. **Day start / before coding** — name the stack(s) in must-finish; open matching packs; run Context7 (or official) for pinned lines you will touch.
2. **While coding** — on any unfamiliar or version-sensitive API, query again (one concept). Prefer pack `use-these` over memory.
3. **Before Done / human review** — confirm modern syntax against this-session docs evidence ([`human-code-review.md`](human-code-review.md)).
4. **Day summary** — note **Context7 / current-docs** (library IDs or official URLs checked) or **N/A — no library API**.

## Professional bar (checklist)

- [ ] Non-trivial library/framework work was checked against Context7 **or** official vendor docs **this session**
- [ ] Version matched the **product pin** / pack slice (no silent major bump)
- [ ] Pack opened when one exists (`best-practices` + `quality` + version slice)
- [ ] Stale pack updated same session when owner named the stack or docs proved drift (D-79 + D-110)
- [ ] Day summary records the check or honest N/A

## Anti-patterns

| Do not | Why |
|--------|-----|
| Trust training memory for “latest Laravel / Next / PHP” | Drift; wrong majors |
| Query Context7 then ignore the product SRS pin | Breaks the shipping line |
| Dump entire Context7 responses into chat / Pareto | Context hygiene (D-86); distill into code + short evidence |
| Require Context7 for every one-line rename | Gate theater; use N/A |
| Treat Context7 as a substitute for SECURITY/COMPLIANCE | Docs ≠ red lines |

## Related homes

- [`technologies/README.md`](../technologies/README.md) · pack `official-refs.md` / `quality.md`
- [`human-code-review.md`](human-code-review.md) · [`agent-skills.md`](agent-skills.md) · [`stack-selection.md`](stack-selection.md)
- Method: [`08-IMPLEMENTATION-DAY.md`](../08-IMPLEMENTATION-DAY.md) · Product: Context7 MCP / [context7.com](https://context7.com/)
