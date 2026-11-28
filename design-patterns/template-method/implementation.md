# Template Method — implementation

## Steps

1. Write the shared ritual once. Mark it non-overridable if the language allows (`final`).
2. Identify steps that truly vary; make those abstract or overridable hooks.
3. Keep invariant steps private/final on the base (validate, audit).
4. Implement only hooks in concrete classes.
5. Prefer hook injection (`build`, `write` callables) if inheritance is not earning its keep.
6. Test the skeleton with a test subclass/hooks that record call order.

## Pseudocode

```
abstract class ExportRecipe:
  final method export(input):
    this.validate(input)
    artifact = this.build(input)   // hook
    this.write(artifact)           // hook
    this.audit(input)

  abstract method build(input)
  abstract method write(artifact)

class CsvExport extends ExportRecipe:
  method build...
  method write...
```

## TypeScript sketch (illustration)

```ts
abstract class ExportRecipe {
  export(rows: string[]): void {
    this.validate(rows);
    const artifact = this.build(rows);
    this.write(artifact);
    this.audit();
  }
  protected validate(rows: string[]): void {
    if (!rows.length) throw new Error("empty");
  }
  protected abstract build(rows: string[]): string;
  protected abstract write(artifact: string): void;
  protected audit(): void {
    /* metrics */
  }
}

class CsvExport extends ExportRecipe {
  protected build(rows: string[]): string {
    return rows.join("\n");
  }
  protected write(artifact: string): void {
    console.info(artifact);
  }
}
```

## PHP sketch (illustration)

```php
abstract class ExportRecipe
{
    final public function export(array $rows): void
    {
        $this->validate($rows);
        $this->write($this->build($rows));
        $this->audit();
    }

    private function validate(array $rows): void
    {
        if ($rows === []) {
            throw new InvalidArgumentException('empty');
        }
    }

    abstract protected function build(array $rows): string;

    abstract protected function write(string $artifact): void;

    private function audit(): void {}
}
```

## Testing at the risk boundary

- Risk: subclass skips audit/validate by overriding `export`, or hook order breaks.
- Prefer `final` on the template method; test call order via recording hooks.
- Do not retest invariant steps in every concrete class — test them once against the base with a stub subclass.

## Refactor toward / away

- **Toward:** duplicated rituals; compliance steps skipped in some copies; fragile flag parameters.
- **Away:** replace inheritance with `runExport({ build, write })` when the hierarchy is shallow; use Strategy when the whole middle section is one replaceable policy.
