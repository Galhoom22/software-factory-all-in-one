# Builder — implementation

## Steps

1. Define the **product** shape and what “complete” means (required header, ≥1 section, etc.).
2. Design builder steps that match real domain verbs — not one setter per field unless fields are independent.
3. Implement `build()` to validate invariants and return a finished product; reset or discard the builder afterward.
4. Add a director only when two or more call sites share the same recipe.
5. If multiple representations exist, give each a concrete builder sharing the director.
6. Test: valid recipes produce products; missing required steps fail at `build()`; directors call the expected step sequence on a fake builder.

## Pseudocode

```
interface ExportBuilder:
  withHeader(title)
  addSection(name, body)
  attach(path)
  build() -> ExportPackage

class JsonExportBuilder implements ExportBuilder:
  // accumulate; build() -> ExportPackage as JSON document

class WeeklyReportDirector:
  method compose(builder):
    builder.withHeader("Weekly")
    builder.addSection("summary", ...)
    builder.addSection("metrics", ...)
    return builder.build()

product = WeeklyReportDirector().compose(JsonExportBuilder())
```

## TypeScript sketch (illustration)

```ts
type ExportPackage = { header: string; sections: string[] };

class ExportBuilder {
  private header?: string;
  private sections: string[] = [];

  withHeader(title: string): this {
    this.header = title;
    return this;
  }
  addSection(body: string): this {
    this.sections.push(body);
    return this;
  }
  build(): ExportPackage {
    if (!this.header) throw new Error("header required");
    return { header: this.header, sections: [...this.sections] };
  }
}

function weeklyReport(b: ExportBuilder): ExportPackage {
  return b.withHeader("Weekly").addSection("summary").build();
}
```

## PHP sketch (illustration)

```php
final class ExportPackage
{
    /** @param list<string> $sections */
    public function __construct(
        public readonly string $header,
        public readonly array $sections,
    ) {}
}

final class ExportBuilder
{
    private ?string $header = null;
    /** @var list<string> */
    private array $sections = [];

    public function withHeader(string $title): self
    {
        $this->header = $title;
        return $this;
    }

    public function addSection(string $body): self
    {
        $this->sections[] = $body;
        return $this;
    }

    public function build(): ExportPackage
    {
        if ($this->header === null) {
            throw new InvalidArgumentException('header required');
        }
        return new ExportPackage($this->header, $this->sections);
    }
}
```

## Testing at the risk boundary

- Risk: invalid packages escape; required steps skipped; mutable builder reused after `build()` corrupting later products.
- Assert `build()` throws without header; assert weekly director yields expected section count.
- Use a recording builder to verify director step order when order is load-bearing.
- Do not hit the real filesystem in unit tests — attach paths can be faked.

## Refactor toward / away

- **Toward:** telescoping constructors; duplicated assembly blocks; format-specific copy-paste of the same steps.
- **Away:** collapse to a static factory or options object when steps stabilize to one recipe and one representation; switch to [Prototype](../prototype/) when new instances are mostly clones of a filled template.
