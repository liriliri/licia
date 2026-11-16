## ric

Shortcut for requestIdleCallback.

<details>
<summary>Type Definition</summary>

```typescript
namespace ric {
    function cancel(id: number): void;
}
function ric(cb: types.AnyFn): number;
```

</details>

Use setTimeout if requestIdleCallback is not supported.

```javascript
const id = ric(function() {
    // Called during a browser's idle periods
});
ric.cancel(id);
```
