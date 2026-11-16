## dpr

Device pixel ratio helper.

<details>
<summary>Type Definition</summary>

```typescript
namespace dpr {
    interface IDpr extends Emitter {
        get(): number;
    }
}
const dpr: dpr.IDpr;
```

</details>

### on

Bind change event.

### off

Unbind change event.

### get

Get current device pixel ratio.

```javascript
dpr.on('change', function(dpr) {
    console.log(dpr); // -> 2
});
dpr.get(); // -> 1
```
