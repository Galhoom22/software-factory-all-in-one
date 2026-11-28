# Flyweight — applicability

## Signals

- Heap snapshots show thousands of identical immutable blobs (font descriptors, icon bitmaps, style tokens).
- A renderer or exporter constructs the same value object on every loop iteration.
- Profiling attributes memory growth to object *count*, not to unique content diversity.
- Multiple contexts need the same intrinsic payload with different coordinates or overlays.

## Anti-signals

- Item counts stay in the low hundreds and memory is not a measured concern.
- Style or token objects must change per user session — sharing would corrupt neighbors.
- A string interner, immutable DTO cache, or CDN/edge asset cache already removes the duplicate payload.
- The proposed “factory” would key on the full extrinsic state, defeating sharing.
- Call sites already pass plain value objects by value with negligible cost.

## Simpler alternative first

1. **Immutable value + map cache**: `Map<key, Style>` filled once; no class hierarchy.
2. **Platform cache store**: Redis/APCu/Laravel cache for *serialized* shared templates when the cost is I/O, not in-process object headers.
3. **Intern primitives**: language string interning / const tables for repeated tokens.
4. **Columnar / SoA layout**: store arrays of `x[]`, `y[]`, `styleKey[]` instead of object-per-glyph when the hot path is a tight loop.

Adopt Flyweight only when object-header duplication is real and extrinsic/intrinsic split is clean.

## Framework-native equivalents

| Platform | Prefer this first | Why it often replaces Flyweight |
|----------|-------------------|----------------------------------|
| Laravel | Cache store for shared templates; collections of value objects; avoid inventing pools inside HTTP middleware | Middleware varies the *request pipeline*, not glyph memory. Bind a style registry once in a provider if needed ([`technologies/laravel/`](../../technologies/laravel/)). |
| PHP | `spl_object_id` awareness; prefer arrays of scalars for huge canvases; APCu for cross-request immutable payloads | PHP object headers are relatively heavy — sometimes a plain array of keys beats a Flyweight class graph ([`technologies/php/`](../../technologies/php/)). |
| Node / JavaScript | Module-level `Map` of frozen objects; `Object.freeze`; avoid global mutable caches | A frozen object in a `Map` is the usual Flyweight. HTTP middleware should not own glyph pools. Prefer EventEmitter for fan-out, not for memory sharing ([`technologies/javascript/`](../../technologies/javascript/)). |

Verified claim (conceptual): Flyweight pays off when intrinsic payload size × duplicate count dominates; for tiny keys, a `Map` of strings is enough without naming the pattern.
