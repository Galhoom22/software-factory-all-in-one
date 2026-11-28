# Singleton — implementation

## Steps

1. **Stop.** Ask whether the container or composition root can bind one instance. If yes, skip classical Singleton.
2. If documenting or removing legacy: locate all `getInstance()` call sites; introduce an interface; inject it.
3. Bind the implementation once at bootstrap (`singleton` in Laravel, manual `let instance` in Node bootstrap).
4. Replace call sites with constructor/property injection.
5. Delete static `$instance` / `getInstance()`; add a test that boots two clients with different fakes.
6. Only if a true external constraint remains: isolate classical Singleton behind an adapter that *you* inject — do not spread `getInstance()`.

## Pseudocode

Preferred:

```
# composition root / provider
container.singleton(CacheStore, InMemoryCache)

class ReportWorker:
  ctor(cache: CacheStore)
  method run():
    cache.get("report")

worker = container.get(ReportWorker)
```

Classical (avoid — literacy / removal target only):

```
class ClassicalCache:
  static instance = null
  private ctor()
  static getInstance():
    if instance == null: instance = new ClassicalCache()
    return instance
```

## TypeScript sketch (illustration)

```ts
// Preferred: inject a shared instance created once at bootstrap.
export interface CacheStore {
  get(key: string): string | undefined;
  set(key: string, value: string): void;
}

export class InMemoryCache implements CacheStore {
  private readonly data = new Map<string, string>();
  get(key: string) {
    return this.data.get(key);
  }
  set(key: string, value: string) {
    this.data.set(key, value);
  }
}

export class ReportWorker {
  constructor(private readonly cache: CacheStore) {}
  warm(key: string, value: string) {
    this.cache.set(key, value);
  }
  read(key: string): string | undefined {
    return this.cache.get(key);
  }
}

// bootstrap.ts — one instance, no getInstance()
const cache = new InMemoryCache();
export const worker = new ReportWorker(cache);

// tests: new ReportWorker(new FakeCache()) — no static reset required
```

## PHP sketch (illustration)

```php
interface CacheStore
{
    public function get(string $key): ?string;

    public function set(string $key, string $value): void;
}

final class InMemoryCache implements CacheStore
{
    /** @var array<string, string> */
    private array $data = [];

    public function get(string $key): ?string
    {
        return $this->data[$key] ?? null;
    }

    public function set(string $key, string $value): void
    {
        $this->data[$key] = $value;
    }
}

// In a Laravel provider (preferred):
// $this->app->singleton(CacheStore::class, InMemoryCache::class);

final class ReportWorker
{
    public function __construct(private CacheStore $cache) {}

    public function warm(string $key, string $value): void
    {
        $this->cache->set($key, $value);
    }

    public function read(string $key): ?string
    {
        return $this->cache->get($key);
    }
}

/*
 * Classical form — do not add to new code. Removal target only:
 *
 * final class ClassicalCache {
 *     private static ?self $instance = null;
 *     private function __construct() {}
 *     public static function getInstance(): self {
 *         return self::$instance ??= new self();
 *     }
 * }
 */
```

## Testing at the risk boundary

- Risk: hidden global state leaking across tests; double-initialization in workers; request data stuck in a process Singleton.
- Prefer tests that bind a fresh fake `CacheStore` per test via the container.
- If classical Singleton remains temporarily, require a `resetForTests()` and treat it as debt — assert it is unused in new code.
- Never rely on test order.
- Assert two workers with different injected caches do not share state.

## Refactor toward / away

- **Toward (classical):** almost never for new code. Only when wrapping an immovable external single-instance driver.
- **Away (always preferred):** static `getInstance()` → interface → container singleton binding → constructor injection. Delete the static path when call sites are gone.
