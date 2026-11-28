# Strategy — implementation

## Steps

1. Extract the varying algorithm into a named contract (method signatures only).
2. Move each existing branch into a concrete strategy or plain function.
3. Give the context a field/parameter for the strategy; delete the switch.
4. Wire selection at the composition root (config key → strategy).
5. Keep strategy objects free of unrelated orchestration.
6. Test the context with a recording fake strategy; test each real strategy in isolation.

## Pseudocode

```
interface ExportFormat:
  method write(rows) -> bytes

class ExportJob:
  format: ExportFormat
  method run(rows):
    validate(rows)
    bytes = format.write(rows)
    store(bytes)

// composition
job.format = formats[config.export]
job.run(rows)
```

## TypeScript sketch (illustration)

```ts
type ExportFormat = { write(rows: string[]): Uint8Array };

const csv: ExportFormat = {
  write(rows) {
    return new TextEncoder().encode(rows.join("\n"));
  },
};

class ExportJob {
  constructor(private format: ExportFormat) {}
  run(rows: string[]): Uint8Array {
    return this.format.write(rows);
  }
}

// simpler alternative — function map, no classes:
const formats: Record<string, ExportFormat> = { csv };
```

## PHP sketch (illustration)

```php
interface ExportFormat
{
    /** @param list<string> $rows */
    public function write(array $rows): string;
}

final class CsvFormat implements ExportFormat
{
    public function write(array $rows): string
    {
        return implode("\n", $rows);
    }
}

final class ExportJob
{
    public function __construct(private ExportFormat $format) {}

    /** @param list<string> $rows */
    public function run(array $rows): string
    {
        return $this->format->write($rows);
    }
}
```

## Testing at the risk boundary

- Risk: wrong strategy selected, or context ignores the injected strategy.
- Inject a fake that records calls; assert `run` delegates once.
- Selection tests belong at the composition root (config → instance), not inside every strategy.
- Do not hit real payment providers or disk in strategy unit tests — use the payment-provider adapter seam.

## Refactor toward / away

- **Toward:** growing format/provider switches; duplicated algorithm setup; hard-to-fake branches.
- **Away:** collapse to one function when variants die; prefer a function map when ConcreteStrategy classes stay one-liners.
