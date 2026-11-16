## orientation

Screen orientation helper.

<details>
<summary>Type Definition</summary>

```typescript
namespace orientation {
    interface IOrientation extends Emitter {
        get(): string;
    }
}
const orientation: orientation.IOrientation;
```

</details>

### on

Bind change event.

### off

Unbind change event.

### get

Get current orientation(landscape or portrait).

```javascript
orientation.on('change', function(direction) {
    console.log(direction); // -> 'portrait'
});
orientation.get(); // -> 'landscape'
```
