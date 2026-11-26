# Livewire 4.x — prefer these

Sources: [Quickstart](https://livewire.laravel.com/docs/4.x/quickstart), [Installation](https://livewire.laravel.com/docs/4.x/installation), [Upgrade](https://livewire.laravel.com/docs/4.x/upgrading).

## Install / boot

| Prefer | Instead of | Why |
|--------|------------|-----|
| `composer require livewire/livewire` (^4) | Hand-copying JS assets for normal apps | Auto-discovery |
| `php artisan livewire:layout` | Ad-hoc layouts missing assets | Official `@livewireStyles` / `@livewireScripts` |
| **One Alpine** (Livewire’s) | Separate Alpine CDN/npm on same page | Double init breaks |
| Explicit asset directives when layout is custom | Hoping auto-inject always wins | Predictable placement |

## Routing & components (4.x)

| Prefer | Notes |
|--------|-------|
| **`Route::livewire('/path', 'pages::…')`** | Recommended; required for view-based SFC/MFC full pages |
| `php artisan make:livewire pages::post.create` | Page organization via `pages::` |
| Single root element in the Blade view | Official hard rule |
| Typed public properties | `public string $title = ''` |
| `$this->validate([...])` then persist + `$this->redirect(...)` | Quickstart production shape |

## Directives

| Prefer | Notes |
|--------|-------|
| `wire:submit="save"` | Forms without full reload |
| `wire:model` (deferred) by default | Fewer requests |
| `wire:model.live` when realtime needed | Explicit cost |
| `@error('field')` | Show validation messages |

## Canonical quickstart form sketch

```blade
<form wire:submit="save">
    <input type="text" wire:model="title">
    @error('title') <span>{{ $message }}</span> @enderror
    <button type="submit">Save</button>
</form>
```

```php
Route::livewire('/post/create', 'pages::post.create');
```
