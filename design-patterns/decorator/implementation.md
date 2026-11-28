# Decorator — implementation

## Steps

1. Freeze the Component interface.
2. Implement the concrete core with no optional concerns.
3. Add one Decorator class per concern; forward every method.
4. Assemble the chain at the composition root (order matters).
5. Test each Decorator with a recording fake inner Component.

## Pseudocode

```
store = Audit(Gzip(Memory()))
store.set(key, value)
  -> Audit logs
  -> Gzip compresses
  -> Memory writes
```

## TypeScript sketch (illustration)

```ts
interface Store {
  get(key: string): string | undefined;
  set(key: string, value: string): void;
}
class MemoryStore implements Store {
  private data = new Map<string, string>();
  get(k: string) { return this.data.get(k); }
  set(k: string, v: string) { this.data.set(k, v); }
}
class AuditStore implements Store {
  constructor(private inner: Store, private log: (m: string) => void) {}
  get(k: string) { this.log(`get ${k}`); return this.inner.get(k); }
  set(k: string, v: string) { this.log(`set ${k}`); this.inner.set(k, v); }
}
```

## PHP sketch (illustration)

```php
interface Store {
    public function get(string $key): ?string;
    public function set(string $key, string $value): void;
}
final class MemoryStore implements Store {
    /** @var array<string, string> */
    private array $data = [];
    public function get(string $key): ?string { return $this->data[$key] ?? null; }
    public function set(string $key, string $value): void { $this->data[$key] = $value; }
}
final class AuditStore implements Store {
    /** @param callable(string): void $log */
    public function __construct(private Store $inner, private $log) {}
    public function get(string $key): ?string {
        ($this->log)("get $key");
        return $this->inner->get($key);
    }
    public function set(string $key, string $value): void {
        ($this->log)("set $key");
        $this->inner->set($key, $value);
    }
}
```

## Testing at the risk boundary

Fake inner Store records calls. Assert `AuditStore.set` logs then forwards once with the same key/value. Do not test the whole production chain in that unit.

## Refactor toward / away

- **Toward:** from flag-ridden cores or combinatorial subclasses.
- **Away:** unwrap when a concern moves into framework middleware or disappears.
