# Mediator — implementation

## Steps

1. List colleagues and the events they must exchange (not their full APIs).
2. Define a narrow Mediator port (`notify(sender, event)` or typed methods).
3. Move peer-to-peer calls into the ConcreteMediator; colleagues call only the port.
4. Keep domain work inside colleagues — the hub routes, it does not become the domain model.
5. Test hub policy with fake colleagues; test colleagues with a fake mediator.

## Pseudocode

```
toolbar.onClick(Bold) -> mediator.notify(toolbar, SelectionStyleChanged)
mediator -> preview.refresh(style)
mediator -> autosave.markDirty()
```

## TypeScript sketch (illustration)

```ts
type Event = { type: "selectionChanged" } | { type: "exportRequested" };

interface Mediator {
  notify(sender: object, event: Event): void;
}

class EditorHub implements Mediator {
  constructor(
    private preview: { refresh(): void },
    private autosave: { markDirty(): void },
    private exporter: { enqueue(): void },
  ) {}
  notify(sender: object, event: Event) {
    if (event.type === "selectionChanged") {
      this.preview.refresh();
      this.autosave.markDirty();
    } else if (event.type === "exportRequested") {
      this.exporter.enqueue();
    }
  }
}

class Toolbar {
  constructor(private hub: Mediator) {}
  bold() { this.hub.notify(this, { type: "selectionChanged" }); }
}
```

## PHP sketch (illustration)

```php
interface Mediator {
    /** @param object $sender */
    public function notify(object $sender, string $event): void;
}

final class EditorHub implements Mediator {
    public function __construct(
        private PreviewPane $preview,
        private Autosave $autosave,
        private ExportQueue $exporter,
    ) {}
    public function notify(object $sender, string $event): void {
        if ($event === 'selectionChanged') {
            $this->preview->refresh();
            $this->autosave->markDirty();
        } elseif ($event === 'exportRequested') {
            $this->exporter->enqueue();
        }
    }
}

final class Toolbar {
    public function __construct(private Mediator $hub) {}
    public function bold(): void { $this->hub->notify($this, 'selectionChanged'); }
}
```

## Testing at the risk boundary

- Hub: given event X, assert colleagues Y and Z were called (fakes/spies).
- Colleague: assert it only calls `mediator.notify` with the expected event.
- Reject tests that require the full UI graph to prove routing.

## Refactor toward / away

- **Toward:** N-to-N imports among panes/services; duplicated “after payment notify everyone” scripts.
- **Away:** replace with a short orchestrator function or events when the hub shrinks to linear fan-out with no policy.
