# Flyweight — implementation

## Steps

1. List every field on the repeated object. Mark each as **intrinsic** (same across many uses, immutable) or **extrinsic** (varies per use).
2. Extract intrinsic fields into a flyweight type. Freeze them (readonly / `Object.freeze` / no setters).
3. Build a factory or pool keyed by a stable intrinsic key (font+weight+size, template id, badge id).
4. Move extrinsic fields to context objects or method parameters (`x`, `y`, `selected`).
5. Replace `new Style(...)` in hot loops with `factory.shared(key)`.
6. Add a test that two contexts with the same key receive the same instance and that drawing with different extrinsic args does not mutate shared state.
7. Bound the pool if keys can grow without limit (LRU or explicit clear on document close).

## Pseudocode

```
factory = StyleFactory()

for glyph in page.glyphs:
  style = factory.shared(glyph.styleKey)   // intrinsic reuse
  style.draw(glyph.x, glyph.y, glyph.ch, glyph.selected)  // extrinsic in

// factory.shared(key):
//   if pool missing key: pool[key] = Style.fromKey(key)  // immutable
//   return pool[key]
```

## TypeScript sketch (illustration)

```ts
type StyleKey = string;

/** Intrinsic only — never stores x/y/selection. */
class StyleFlyweight {
  constructor(
    private readonly font: string,
    private readonly weight: number,
  ) {
    Object.freeze(this);
  }

  draw(x: number, y: number, ch: string, selected: boolean): string {
    const mark = selected ? "*" : "";
    return `${this.font}:${this.weight}${mark}@${x},${y}:${ch}`;
  }
}

class StyleFactory {
  private readonly pool = new Map<StyleKey, StyleFlyweight>();

  shared(key: StyleKey): StyleFlyweight {
    let style = this.pool.get(key);
    if (!style) {
      const [font, weightRaw] = key.split("@");
      style = new StyleFlyweight(font, Number(weightRaw));
      this.pool.set(key, style);
    }
    return style;
  }

  get size(): number {
    return this.pool.size;
  }
}

interface GlyphContext {
  styleKey: StyleKey;
  x: number;
  y: number;
  ch: string;
  selected: boolean;
}

function paintPage(factory: StyleFactory, glyphs: GlyphContext[]): string[] {
  return glyphs.map((g) =>
    factory.shared(g.styleKey).draw(g.x, g.y, g.ch, g.selected),
  );
}
```

## PHP sketch (illustration)

```php
final class StyleFlyweight
{
    public function __construct(
        private readonly string $font,
        private readonly int $weight,
    ) {}

    public function draw(int $x, int $y, string $ch, bool $selected): string
    {
        $mark = $selected ? '*' : '';

        return "{$this->font}:{$this->weight}{$mark}@{$x},{$y}:{$ch}";
    }
}

final class StyleFactory
{
    /** @var array<string, StyleFlyweight> */
    private array $pool = [];

    public function shared(string $key): StyleFlyweight
    {
        if (! isset($this->pool[$key])) {
            [$font, $weight] = explode('@', $key, 2);
            $this->pool[$key] = new StyleFlyweight($font, (int) $weight);
        }

        return $this->pool[$key];
    }

    public function size(): int
    {
        return count($this->pool);
    }
}

/** @param list<array{styleKey: string, x: int, y: int, ch: string, selected: bool}> $glyphs */
function paintPage(StyleFactory $factory, array $glyphs): array
{
    $out = [];
    foreach ($glyphs as $g) {
        $out[] = $factory->shared($g['styleKey'])->draw(
            $g['x'],
            $g['y'],
            $g['ch'],
            $g['selected'],
        );
    }

    return $out;
}
```

## Testing at the risk boundary

- Risk: accidental mutation of shared intrinsic state; pool unbounded growth; wrong key → false sharing.
- Assert `factory.shared("body@400") === factory.shared("body@400")` (same reference).
- Assert two draw calls with different `(x,y)` leave the flyweight unchanged (no stored extrinsic).
- Assert distinct keys yield distinct instances.
- Cap or clear the pool in a test that inserts many unique keys and expects eviction/clear behavior if you added one.

## Refactor toward / away

- **Toward:** profiler proves duplicate immutable payloads; loop allocates the same style thousands of times; memory budget fails under large documents.
- **Away:** when document sizes shrink or styles diversify so every key is unique (pool helps nothing); collapse to plain immutable values or a simple `Map` without naming Flyweight; delete the factory if a single style covers the product.
