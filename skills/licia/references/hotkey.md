## hotkey

Capture keyboard input to trigger given events.

<details>
<summary>Type Definition</summary>

```typescript
namespace hotkey {
    interface IOptions {
        element?: HTMLElement;
    }
}
const hotkey: {
    on(key: string, options: hotkey.IOptions, listener: types.AnyFn): void;
    on(key: string, listener: types.AnyFn): void;
    off(key: string, options: hotkey.IOptions, listener: types.AnyFn): void;
    off(key: string, listener: types.AnyFn): void;
};
```

</details>

### on

Register keyboard listener.

|Name    |Desc          |
|--------|--------------|
|key     |Key string    |
|options |Hotkey options|
|listener|Key listener  |

Options:

|Name            |Desc          |
|----------------|--------------|
|element=document|Target element|

### off

Unregister keyboard listener.

```javascript
const container = document.getElementById('container');
hotkey.on(
    'k',
    {
        element: container
    },
    function() {
        console.log('k is pressed');
    }
);
function keyDown() {}
hotkey.on('shift+a, shift+b', keyDown);
hotkey.off('shift+a', keyDown);
```
