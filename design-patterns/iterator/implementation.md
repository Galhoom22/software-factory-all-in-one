# Iterator — implementation

## Steps

1. Identify the item type clients need (export row, cache key, document block).
2. Prefer the language iterable protocol; add an explicit Iterator interface only if clients cannot use it.
3. Keep position and structure knowledge inside the ConcreteIterator / generator.
4. Expose `createIterator` / `getIterator` on the collection — never leak internal arrays.
5. Test that clients receive items in the promised order without touching private fields.

## Pseudocode

```
source = ExportSource(query)
for item in source.createIterator():
  writer.write(item)
```

## TypeScript sketch (illustration)

```ts
interface Row { id: string; payload: string }

class ExportSource {
  constructor(private pages: Row[][]) {}
  *[Symbol.iterator](): Iterator<Row> {
    for (const page of this.pages) {
      for (const row of page) yield row;
    }
  }
}

function writeExport(source: ExportSource, write: (r: Row) => void) {
  for (const row of source) write(row);
}
```

## PHP sketch (illustration)

```php
/** @implements \IteratorAggregate<int, array{id:string,payload:string}> */
final class ExportSource implements \IteratorAggregate {
    /** @param list<list<array{id:string,payload:string}>> $pages */
    public function __construct(private array $pages) {}

    public function getIterator(): \Traversable {
        foreach ($this->pages as $page) {
            foreach ($page as $row) {
                yield $row;
            }
        }
    }
}

function writeExport(ExportSource $source, callable $write): void {
    foreach ($source as $row) {
        $write($row);
    }
}
```

## Testing at the risk boundary

- Assert order and completeness for a multi-page fixture.
- Assert clients never receive the internal `pages` structure (type/API surface).
- For streams, assert backpressure / chunking behavior if that is the risk.

## Refactor toward / away

- **Toward:** consumers indexing into private trees; duplicated recursive walkers; `->all()` before export.
- **Away:** delete custom Iterator types when a generator or native `foreach` is enough.
