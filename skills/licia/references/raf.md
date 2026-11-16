## raf

Shortcut for requestAnimationFrame.

<details>
<summary>Type Definition</summary>

```typescript
namespace raf {
    function cancel(id: number): void;
}
function raf(cb: types.AnyFn): number;
```

</details>

Use setTimeout if native requestAnimationFrame is not supported.

```javascript
const id = raf(function tick() {
    // Animation stuff
    raf(tick);
});
raf.cancel(id);
```
