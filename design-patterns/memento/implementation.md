# Memento — implementation

## Steps

1. Identify the **originator** whose private state must round-trip (`CheckoutDraft`, `ExportJob`).
2. Define a **memento** type with no useful public getters (or nest it so only the originator can read fields).
3. Add `save(): Memento` and `restore(Memento): void` on the originator only.
4. Give the **caretaker** a bounded stack (max depth). Push after successful edits; pop on undo.
5. Ensure caretakers never branch on memento internals — only store/return tokens.
6. Test: edit → save → edit → restore returns private fields to the saved values; caretaker code cannot read those fields.
7. Decide serialization: in-memory only vs sealed encrypted blob for durable jobs.

## Pseudocode

```
class CheckoutDraft:
  private taxRules, fraudHints, address
  method editAddress(a): address = a
  method save() -> Memento:
    return Memento(taxRules, fraudHints, address)
  method restore(m: Memento):
    (taxRules, fraudHints, address) = m.unpackFor(this)

class WizardCaretaker:
  history = []  // max 20
  method checkpoint(draft):
    history.push(draft.save())
    trim()
  method undo(draft):
    if history empty: return
    draft.restore(history.pop())

// UI never opens Memento
```

## TypeScript sketch (illustration)

```ts
/** Opaque to caretakers — fields are module-private. */
class CheckoutMemento {
  constructor(
    readonly taxRules: string,
    readonly fraudHints: string,
    readonly address: string,
  ) {}
}

class CheckoutDraft {
  #taxRules = "default";
  #fraudHints = "";
  #address = "";

  editAddress(address: string): void {
    this.#address = address;
  }

  /** Illustration only — production code would not expose secrets. */
  debugFraudHints(): string {
    return this.#fraudHints;
  }

  setFraudHintsForDemo(value: string): void {
    this.#fraudHints = value;
  }

  save(): CheckoutMemento {
    return new CheckoutMemento(this.#taxRules, this.#fraudHints, this.#address);
  }

  restore(memento: CheckoutMemento): void {
    this.#taxRules = memento.taxRules;
    this.#fraudHints = memento.fraudHints;
    this.#address = memento.address;
  }
}

class WizardCaretaker {
  private readonly history: CheckoutMemento[] = [];
  constructor(private readonly maxDepth: number) {}

  checkpoint(draft: CheckoutDraft): void {
    this.history.push(draft.save());
    while (this.history.length > this.maxDepth) this.history.shift();
  }

  undo(draft: CheckoutDraft): boolean {
    const m = this.history.pop();
    if (!m) return false;
    draft.restore(m);
    return true;
  }
}
```

## PHP sketch (illustration)

```php
final class CheckoutMemento
{
    public function __construct(
        private readonly string $taxRules,
        private readonly string $fraudHints,
        private readonly string $address,
    ) {}

    /** @return array{0: string, 1: string, 2: string} */
    public function unpackFor(CheckoutDraft $draft): array
    {
        // shortcut: trust boundary is same package; widen encapsulation with friends if language allows
        unset($draft);

        return [$this->taxRules, $this->fraudHints, $this->address];
    }
}

final class CheckoutDraft
{
    private string $taxRules = 'default';
    private string $fraudHints = '';
    private string $address = '';

    public function editAddress(string $address): void
    {
        $this->address = $address;
    }

    public function save(): CheckoutMemento
    {
        return new CheckoutMemento($this->taxRules, $this->fraudHints, $this->address);
    }

    public function restore(CheckoutMemento $memento): void
    {
        [$this->taxRules, $this->fraudHints, $this->address] = $memento->unpackFor($this);
    }
}

final class WizardCaretaker
{
    /** @var list<CheckoutMemento> */
    private array $history = [];

    public function __construct(private readonly int $maxDepth) {}

    public function checkpoint(CheckoutDraft $draft): void
    {
        $this->history[] = $draft->save();
        while (count($this->history) > $this->maxDepth) {
            array_shift($this->history);
        }
    }

    public function undo(CheckoutDraft $draft): bool
    {
        $memento = array_pop($this->history);
        if ($memento === null) {
            return false;
        }
        $draft->restore($memento);

        return true;
    }
}
```

## Testing at the risk boundary

- Risk: caretaker peeking; unbounded history; restore from foreign/corrupt tokens; leaking PII in serialized mementos.
- Assert undo restores private fields after intervening edits.
- Assert caretaker types do not call getters on memento contents (static review / package visibility).
- Assert depth cap drops oldest entries.
- If durable: assert serialization is sealed and restore rejects tampered payloads.

## Refactor toward / away

- **Toward:** UI or job runner started depending on private fields to implement back/undo; checkpoints need opacity; clones of public DTOs lose internal cursors.
- **Away:** switch to command inverses when each edit is reversible; collapse to public snapshot DTOs when encapsulation is no longer required; use event sourcing when audit is the product requirement.
