# Visitor — implementation

## Steps

1. Freeze the element taxonomy you will support (`Section`, `Table`, `Image`). List them in the Visitor interface.
2. Add `accept(visitor)` on each element; inside, call the matching `visit*` with `this`.
3. Implement one ConcreteVisitor for the first real operation (lint or metrics) — not a speculative base.
4. Drive traversal from the structure root (recursive `accept` on children, or an explicit walker).
5. Add further visitors as new operations appear; avoid editing element classes for those.
6. When a new element type is unavoidable, update the Visitor interface and **every** concrete visitor — treat that as a breaking change.
7. Test each visitor with a small fixture tree; assert per-node outcomes and exhaustiveness.

## Pseudocode

```
interface ExportVisitor:
  visitSection(SectionNode)
  visitTable(TableNode)
  visitImage(ImageNode)

interface ExportNode:
  accept(ExportVisitor)

class SectionNode:
  children
  method accept(v):
    v.visitSection(this)
    for c in children: c.accept(v)

class LintVisitor:
  issues = []
  method visitSection(n): ...
  method visitTable(n): ...
  method visitImage(n): ...

root.accept(new LintVisitor())
```

## TypeScript sketch (illustration)

```ts
interface ExportVisitor {
  visitSection(node: SectionNode): void;
  visitTable(node: TableNode): void;
  visitImage(node: ImageNode): void;
}

interface ExportNode {
  accept(visitor: ExportVisitor): void;
}

class SectionNode implements ExportNode {
  constructor(
    readonly title: string,
    readonly children: ExportNode[] = [],
  ) {}
  accept(visitor: ExportVisitor): void {
    visitor.visitSection(this);
    for (const child of this.children) child.accept(visitor);
  }
}

class TableNode implements ExportNode {
  constructor(readonly rows: number) {}
  accept(visitor: ExportVisitor): void {
    visitor.visitTable(this);
  }
}

class ImageNode implements ExportNode {
  constructor(readonly alt: string) {}
  accept(visitor: ExportVisitor): void {
    visitor.visitImage(this);
  }
}

class MetricsVisitor implements ExportVisitor {
  sections = 0;
  tables = 0;
  imagesMissingAlt = 0;

  visitSection(): void {
    this.sections += 1;
  }
  visitTable(): void {
    this.tables += 1;
  }
  visitImage(node: ImageNode): void {
    if (!node.alt.trim()) this.imagesMissingAlt += 1;
  }
}

function measure(root: ExportNode): MetricsVisitor {
  const visitor = new MetricsVisitor();
  root.accept(visitor);
  return visitor;
}
```

## PHP sketch (illustration)

```php
interface ExportVisitor
{
    public function visitSection(SectionNode $node): void;

    public function visitTable(TableNode $node): void;

    public function visitImage(ImageNode $node): void;
}

interface ExportNode
{
    public function accept(ExportVisitor $visitor): void;
}

final class SectionNode implements ExportNode
{
    /** @param list<ExportNode> $children */
    public function __construct(
        public readonly string $title,
        public readonly array $children = [],
    ) {}

    public function accept(ExportVisitor $visitor): void
    {
        $visitor->visitSection($this);
        foreach ($this->children as $child) {
            $child->accept($visitor);
        }
    }
}

final class TableNode implements ExportNode
{
    public function __construct(public readonly int $rows) {}

    public function accept(ExportVisitor $visitor): void
    {
        $visitor->visitTable($this);
    }
}

final class ImageNode implements ExportNode
{
    public function __construct(public readonly string $alt) {}

    public function accept(ExportVisitor $visitor): void
    {
        $visitor->visitImage($this);
    }
}

final class MetricsVisitor implements ExportVisitor
{
    public int $sections = 0;
    public int $tables = 0;
    public int $imagesMissingAlt = 0;

    public function visitSection(SectionNode $node): void
    {
        $this->sections++;
    }

    public function visitTable(TableNode $node): void
    {
        $this->tables++;
    }

    public function visitImage(ImageNode $node): void
    {
        if (trim($node->alt) === '') {
            $this->imagesMissingAlt++;
        }
    }
}
```

## Testing at the risk boundary

- Risk: missed `visit*` for a new element; visitors mutating shared tree unexpectedly; traversal skipping children.
- Build a fixture tree covering every element type; assert metrics/lint outputs.
- When adding an element type, fail compilation/tests until every visitor implements the new method.
- Keep PDF SDKs behind the SerializeVisitor — unit-test with a recording visitor first.

## Refactor toward / away

- **Toward:** element classes drowning in unrelated operations; repeated type switches; stable AST/export tree with growing tool passes.
- **Away:** collapse to methods on elements when only one operation remains; switch to discriminated unions + `match`/`never` when the set is small and closed; delete Visitor if a library already walks the format.
