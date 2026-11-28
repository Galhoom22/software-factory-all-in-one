# Facade — implementation

## Steps

1. List the repeated orchestration steps and their collaborators.
2. Create a Facade with one method per coarse workflow.
3. Inject subsystems; do not hide newable singletons inside if tests need fakes.
4. Keep business decisions in domain services when possible; Facade sequences.
5. Test the Facade with fakes asserting call order and failure short-circuit.

## Pseudocode

```
facade.export(id, "csv")
  template = templates.get(id)
  rows = query.fetch(id)
  bytes = formatter.toCsv(template, rows)
  path = storage.put(bytes)
  notifier.done(id, path)
  return path
```

## TypeScript sketch (illustration)

```ts
class ExportFacade {
  constructor(
    private query: { fetch(id: string): string[] },
    private formatter: { toCsv(rows: string[]): string },
    private storage: { put(body: string): string },
  ) {}
  export(reportId: string): string {
    const rows = this.query.fetch(reportId);
    const body = this.formatter.toCsv(rows);
    return this.storage.put(body);
  }
}
```

## PHP sketch (illustration)

```php
final class ExportFacade {
    public function __construct(
        private ReportQuery $query,
        private Formatter $formatter,
        private ObjectStorage $storage,
    ) {}
    public function export(string $reportId): string {
        $rows = $this->query->fetch($reportId);
        $body = $this->formatter->toCsv($rows);
        return $this->storage->put($body);
    }
}
```

## Testing at the risk boundary

Fake query/formatter/storage. Assert `export` calls them in order and returns the storage path. Assert that when query throws, storage is never called.

## Refactor toward / away

- **Toward:** from duplicated sequences across entrypoints.
- **Away:** inline into one use-case when only a single caller remains, or split if the façade grows multiple unrelated workflows.
