# Composite — implementation

## Steps

1. Name the Component operations every node must support.
2. Implement Leaves with no child APIs (or throw if you keep a uniform `add` — prefer skinny leaf interfaces when possible).
3. Implement Composite with child storage and aggregation.
4. Keep clients unaware of concrete leaf vs section types.
5. Test aggregation on a small fixed tree (section → paragraphs).

## Pseudocode

```
section.add(paragraphA)
section.add(paragraphB)
total = section.wordCount()
  -> sum(child.wordCount() for child in children)
```

## TypeScript sketch (illustration)

```ts
interface DocNode {
  wordCount(): number;
}
class Paragraph implements DocNode {
  constructor(private text: string) {}
  wordCount() {
    return this.text.trim() ? this.text.trim().split(/\s+/).length : 0;
  }
}
class Section implements DocNode {
  private children: DocNode[] = [];
  add(child: DocNode) {
    this.children.push(child);
  }
  wordCount() {
    return this.children.reduce((n, c) => n + c.wordCount(), 0);
  }
}
```

## PHP sketch (illustration)

```php
interface DocNode {
    public function wordCount(): int;
}
final class Paragraph implements DocNode {
    public function __construct(private string $text) {}
    public function wordCount(): int {
        $t = trim($this->text);
        return $t === '' ? 0 : count(preg_split('/\s+/', $t) ?: []);
    }
}
final class Section implements DocNode {
    /** @var list<DocNode> */
    private array $children = [];
    public function add(DocNode $child): void { $this->children[] = $child; }
    public function wordCount(): int {
        $n = 0;
        foreach ($this->children as $c) { $n += $c->wordCount(); }
        return $n;
    }
}
```

## Testing at the risk boundary

Build `Section(Paragraph("one two"), Paragraph("three"))` and assert `wordCount() === 3`. Assert an empty section returns 0. That locks the aggregation contract.

## Refactor toward / away

- **Toward:** from type switches and duplicated recursion in exporters.
- **Away:** flatten to an array + one helper when nesting disappears from the product.
