# Composite — applicability

## Signals

- Domain data is a recursive tree; clients need the same operation at every level.
- Walkers duplicate `instanceof` / type-tag switches for container vs leaf.
- Nesting depth is not bounded to one parent/child level.

## Anti-signals

- A flat list (or pagination) is enough; nesting is only a UI indent.
- You already have ORM nested relations / nested set columns and would reinvent them as objects in memory.
- The "tree" is really a pipeline of wrappers with one child each ([Decorator](../decorator/README.md)).
- Framework collections or streams already fold/map what you need.

## Simpler alternative first

1. Flat array + `parentId` and one recursive pure function.
2. JSON/tree library fold without a Component interface.
3. For persistence trees: Eloquent `children()` / adjacency list — do **not** invent Composite on top unless the in-memory domain truly needs uniform ops.

## Framework-native equivalents

- **Laravel / Eloquent:** recursive relationships and collection `map`/`sum` often replace a DIY Composite for persisted trees. Invent Composite only for a rich in-memory document graph. See [`technologies/laravel/`](../../technologies/laravel/README.md).
- **PHP:** `RecursiveIterator` / generators can walk structures without a full GoF Composite. See [`technologies/php/`](../../technologies/php/README.md).
- **Node:** nested plain objects + recursive functions; streams compose pipelines (not trees of domain nodes). See [`technologies/javascript/`](../../technologies/javascript/README.md).
