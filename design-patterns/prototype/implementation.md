# Prototype — implementation

## Steps

1. Decide **copy depth**: which nested objects are values (deep) vs shared flyweights (shallow intentionally).
2. Add `clone(): Self` (or copy constructor) on the prototype interface; implement `__clone` / structured copy accordingly.
3. Ensure clones break identity (new ids, cleared audit fields) where the domain requires it.
4. Optionally register named prototypes in a registry loaded at composition root.
5. Clients call `registry.spawn("meeting-notes")` or `template.clone()`, then mutate the copy.
6. Tests: mutate clone, assert prototype unchanged; assert nested independence for deep fields.

## Pseudocode

```
interface DocumentPrototype:
  clone() -> DocumentPrototype

class MeetingNotesTemplate implements DocumentPrototype:
  title, blocks[]
  method clone():
    copy = new MeetingNotesTemplate()
    copy.title = this.title
    copy.blocks = deepCopy(this.blocks)
    return copy

class TemplateRegistry:
  map name -> DocumentPrototype
  method spawn(name):
    return this.map[name].clone()

doc = registry.spawn("meeting-notes")
doc.title = "Kickoff"
```

## TypeScript sketch (illustration)

```ts
interface DocPrototype {
  clone(): DocPrototype;
  title: string;
}

class MeetingNotes implements DocPrototype {
  constructor(
    public title: string,
    public blocks: string[],
  ) {}
  clone(): MeetingNotes {
    return new MeetingNotes(this.title, [...this.blocks]);
  }
}

class TemplateRegistry {
  private readonly map = new Map<string, DocPrototype>();
  register(name: string, proto: DocPrototype): void {
    this.map.set(name, proto);
  }
  spawn(name: string): DocPrototype {
    const proto = this.map.get(name);
    if (!proto) throw new Error(`unknown ${name}`);
    return proto.clone();
  }
}
```

## PHP sketch (illustration)

```php
interface DocPrototype
{
    public function clone(): self;
}

final class MeetingNotes implements DocPrototype
{
    /** @param list<string> $blocks */
    public function __construct(
        public string $title,
        public array $blocks,
    ) {}

    public function clone(): self
    {
        return new self($this->title, $this->blocks);
    }
}

final class TemplateRegistry
{
    /** @var array<string, DocPrototype> */
    private array $map = [];

    public function register(string $name, DocPrototype $proto): void
    {
        $this->map[$name] = $proto;
    }

    public function spawn(string $name): DocPrototype
    {
        return ($this->map[$name] ?? throw new InvalidArgumentException($name))->clone();
    }
}
```

## Testing at the risk boundary

- Risk: accidental shared mutable nested state; registry returning the master instance.
- Assert `spawn` ≠ registered instance (object identity).
- Mutate `clone.blocks`; assert prototype blocks unchanged.
- Cover unknown template names (hard fail).
- Skip I/O: register in-memory prototypes in tests.

## Refactor toward / away

- **Toward:** repeated rebuild from disk/builder for near-identical documents; reference bugs from shared templates.
- **Away:** if templates shrink to a few fields, use a factory function or [Builder](../builder/) recipe; if copies are pure data, prefer language structured clone without a registry type.
