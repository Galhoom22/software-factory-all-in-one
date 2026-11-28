# Observer — implementation

## Steps

1. Name the **subject** and the state change that outsiders care about (document text, cache key, payment status).
2. Define a narrow `Observer` update hook — pass the subject or a small event payload, not the whole world.
3. Add attach/detach (or use the framework bus) on the subject. Notify only after the state write succeeds.
4. Move each side effect into its own observer/listener. Delete hard-coded calls from the mutator.
5. Register observers at the composition root (or via Laravel discovery / `EventEmitter.on`).
6. Add one test that attaches a recording observer and asserts notify after a change.

## Pseudocode

```
class DocumentBuffer:
  observers = []
  method attach(o): observers.add(o)
  method detach(o): observers.remove(o)
  method notify():
    for o in observers: o.update(this)
  method insert(text):
    this.text += text
    this.notify()

class CacheInvalidator:
  method update(buffer):
    cache.forget(keysFor(buffer))
```

## TypeScript sketch (illustration)

```ts
interface Observer {
  update(subject: DocumentBuffer): void;
}

class DocumentBuffer {
  private text = "";
  private observers: Observer[] = [];
  attach(o: Observer): void {
    this.observers.push(o);
  }
  insert(chunk: string): void {
    this.text += chunk;
    for (const o of this.observers) o.update(this);
  }
  getText(): string {
    return this.text;
  }
}

const cacheDrop: Observer = {
  update(buf) {
    console.info("invalidate", buf.getText().length);
  },
};
```

## PHP sketch (illustration)

```php
interface Observer
{
    public function update(DocumentBuffer $subject): void;
}

final class DocumentBuffer
{
    /** @var list<Observer> */
    private array $observers = [];
    private string $text = '';

    public function attach(Observer $o): void
    {
        $this->observers[] = $o;
    }

    public function insert(string $chunk): void
    {
        $this->text .= $chunk;
        foreach ($this->observers as $o) {
            $o->update($this);
        }
    }

    public function getText(): string
    {
        return $this->text;
    }
}
```

## Testing at the risk boundary

- Risk: silent miss (forgot notify) or duplicate notify on nested updates.
- Attach a recording fake; assert it ran once after `insert`.
- Prefer framework event fakes (`Event::fake`, spy on `EventEmitter`) when using platform buses.
- Do not assert on concrete observer class lists inside the subject — assert on observable outcomes.

## Refactor toward / away

- **Toward:** mutators that accumulate unrelated side effects; plugins that cannot hook changes without editing core.
- **Away:** collapse to a direct call when only one reaction remains; replace custom Subject with Laravel events or `EventEmitter` when the app already lives on that platform.
