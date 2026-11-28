# Factory Method — implementation

## Steps

1. Name the **product** interface the workflow already needs (`Notifier`, `ExportWriter`). List operations the workflow calls — nothing else.
2. Extract the stable workflow into a creator type (or keep it as a function that receives a `createProduct` hook). Remove all `new ConcreteProduct` from that body.
3. Add `createProduct()` (or the hook) as the only place that returns a product. Start with one concrete creator.
4. Add further concrete creators only when a second product is real — not speculative.
5. Wire creators at the composition root (container, module bootstrap). Clients call `run`, never `createProduct` directly, unless they *are* the composition root.
6. Add one test that substitutes a fake product through the factory hook and asserts workflow outcomes.

## Pseudocode

```
abstract class NotificationDispatch:
  method run(message):
    notifier = this.createNotifier()   // factory method
    notifier.send(message)
    this.audit(message)

  abstract method createNotifier() -> Notifier

class EmailDispatch extends NotificationDispatch:
  method createNotifier() -> EmailNotifier

class SmsDispatch extends NotificationDispatch:
  method createNotifier() -> SmsNotifier

// composition root
dispatch = pickDispatchFor(tenant)
dispatch.run(message)
```

Functional form (often smaller):

```
function run(message, createNotifier):
  createNotifier().send(message)
  audit(message)
```

## TypeScript sketch (illustration)

```ts
interface Notifier {
  send(body: string): void;
}

abstract class NotificationDispatch {
  run(body: string): void {
    this.createNotifier().send(body);
  }
  protected abstract createNotifier(): Notifier;
}

class EmailDispatch extends NotificationDispatch {
  protected createNotifier(): Notifier {
    return { send: (body) => console.info("email", body) };
  }
}

// test seam without subclassing:
function runWith(
  body: string,
  createNotifier: () => Notifier,
): void {
  createNotifier().send(body);
}
```

## PHP sketch (illustration)

```php
interface Notifier
{
    public function send(string $body): void;
}

abstract class NotificationDispatch
{
    public function run(string $body): void
    {
        $this->createNotifier()->send($body);
    }

    abstract protected function createNotifier(): Notifier;
}

final class EmailDispatch extends NotificationDispatch
{
    protected function createNotifier(): Notifier
    {
        return new class implements Notifier {
            public function send(string $body): void
            {
                // deliver via mailer adapter
            }
        };
    }
}
```

## Testing at the risk boundary

- Risk: wrong product constructed, or workflow skips send when construction fails.
- Inject a recording fake via a concrete test creator or a `createNotifier` callback.
- Assert `send` was called once with the expected body; do not assert on concrete class names unless the contract requires them.
- Keep infrastructure (SMTP, SMS API) behind the product interface — never in the factory-method unit test.

## Refactor toward / away

- **Toward:** duplicated construction switches inside several workflows; shared steps with diverging products; painful fakes because `new` is buried.
- **Away:** collapse to constructor injection when only one product remains; replace Creator subclasses with a container binding or a one-line factory function when there is no shared algorithm worth inheriting.
