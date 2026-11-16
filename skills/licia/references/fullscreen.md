## fullscreen

Fullscreen api wrapper.

<details>
<summary>Type Definition</summary>

```typescript
namespace fullscreen {
    interface IFullscreen extends Emitter {
        request(el?: Element): void;
        exit(): void;
        toggle(el?: Element): void;
        isActive(): boolean;
        getEl(): Element | null;
        isEnabled(): boolean;
    }
}
const fullscreen: fullscreen.IFullscreen;
```

</details>

### request

Request fullscreen.

|Name  |Desc              |
|------|------------------|
|el    |Fullscreen element|

### exit

Exit fullscreen.

### toggle

Toggle fullscreen.

|Name  |Desc              |
|------|------------------|
|el    |Fullscreen element|

### isActive

Check Whether fullscreen is active.

### getEl

Return Fullscreen element if exists.

### isEnabled

Whether you are allowed to enter fullscreen.

```javascript
fullscreen.request();
fullscreen.isActive(); // -> false, not a synchronous api
fullscreen.on('error', () => {});
fullscreen.on('change', () => {});
```
