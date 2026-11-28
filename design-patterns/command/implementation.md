# Command — implementation

## Steps

1. Name the action and its arguments (export format, payment intent id, edit range).
2. Define `Command` with `execute` (add `undo` only if the product needs it).
3. Put side effects on a Receiver; keep the ConcreteCommand thin (bind + delegate).
4. Give Invokers one way to submit (button map, queue push, in-memory stack).
5. Test execute (and undo) with a fake receiver — assert calls, not slogans.

## Pseudocode

```
cmd = ExportPdfCommand(exportService, docId, options)
invoker.submit(cmd)   // UI or HTTP
worker.runNext()      // or sync invoker.execute(cmd)
cmd.execute() -> exportService.renderPdf(docId, options)
```

## TypeScript sketch (illustration)

```ts
interface Command { execute(): void; undo?(): void }

class ExportService {
  renderPdf(docId: string) { /* file export */ }
}

class ExportPdfCommand implements Command {
  constructor(private receiver: ExportService, private docId: string) {}
  execute() { this.receiver.renderPdf(this.docId); }
}

class Invoker {
  private queue: Command[] = [];
  submit(cmd: Command) { this.queue.push(cmd); }
  runNext() { this.queue.shift()?.execute(); }
}

const invoker = new Invoker();
invoker.submit(new ExportPdfCommand(new ExportService(), "doc-1"));
invoker.runNext();
```

## PHP sketch (illustration)

```php
interface Command { public function execute(): void; }

final class ExportService {
    public function renderPdf(string $docId): void { /* file export */ }
}

final class ExportPdfCommand implements Command {
    public function __construct(
        private ExportService $receiver,
        private string $docId,
    ) {}
    public function execute(): void { $this->receiver->renderPdf($this->docId); }
}

final class Invoker {
    /** @var list<Command> */
    private array $queue = [];
    public function submit(Command $cmd): void { $this->queue[] = $cmd; }
    public function runNext(): void {
        $cmd = array_shift($this->queue);
        $cmd?->execute();
    }
}
```

## Testing at the risk boundary

- Fake the receiver; assert `execute` issues the expected call with bound args.
- For undoable edits, assert `undo` restores prior document state (or pair with Memento).
- For queued paths, assert the job/message payload matches the command’s intent — do not retest the broker.

## Refactor toward / away

- **Toward:** duplicated call sites packing the same args; ad-hoc undo flags; untestable controllers doing work inline.
- **Away:** delete the Command types when only one sync call remains and jobs are unused; keep the Job if async is the real need.
