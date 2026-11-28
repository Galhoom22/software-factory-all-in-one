# Bridge — implementation

## Steps

1. List the two variation axes; confirm both will grow.
2. Extract Implementor operations the abstraction truly needs (usually a narrow port).
3. Move transport code into ConcreteImplementors.
4. Keep refined abstractions focused on domain sequencing; inject Implementor via constructor.
5. Test abstractions with a fake Implementor; test each ConcreteImplementor in isolation.

## Pseudocode

```
alert = new AlertNotification(emailChannel)
alert.send(user, payload)
  -> envelope = alert.compose(user, payload)
  -> channel.dispatch(envelope)
```

## TypeScript sketch (illustration)

```ts
interface Channel {
  dispatch(envelope: { to: string; body: string }): void;
}
class EmailChannel implements Channel {
  dispatch(e: { to: string; body: string }) {
    /* SMTP send */
  }
}
abstract class Notification {
  constructor(protected channel: Channel) {}
  abstract compose(to: string, data: string): { to: string; body: string };
  send(to: string, data: string) {
    this.channel.dispatch(this.compose(to, data));
  }
}
class AlertNotification extends Notification {
  compose(to: string, data: string) {
    return { to, body: `ALERT: ${data}` };
  }
}
```

## PHP sketch (illustration)

```php
interface Channel {
    /** @param array{to: string, body: string} $envelope */
    public function dispatch(array $envelope): void;
}
final class EmailChannel implements Channel {
    public function dispatch(array $envelope): void { /* SMTP */ }
}
abstract class Notification {
    public function __construct(protected Channel $channel) {}
    /** @return array{to: string, body: string} */
    abstract protected function compose(string $to, string $data): array;
    public function send(string $to, string $data): void {
        $this->channel->dispatch($this->compose($to, $data));
    }
}
final class AlertNotification extends Notification {
    protected function compose(string $to, string $data): array {
        return ['to' => $to, 'body' => 'ALERT: '.$data];
    }
}
```

## Testing at the risk boundary

Fake `Channel` records envelopes. Assert `AlertNotification` prefixes the body and calls `dispatch` once. Separately assert `EmailChannel` builds the expected transport call — do not couple those tests.

## Refactor toward / away

- **Toward:** from an N×M subclass matrix or `switch (channel)` inside every kind.
- **Away:** collapse to one service + Strategy when the abstraction hierarchy stops growing.
