## SingleEmitter

Event emitter with single event type.

<details>
<summary>Type Definition</summary>

```typescript
class SingleEmitter {
    addListener(listener: types.AnyFn): void;
    rmListener(listener: types.AnyFn): void;
    emit(...args: any[]): void;
    rmAllListeners(): void;
    static mixin(obj: any): void;
}
```

</details>

### addListener

Add listener.

### rmListener

Remove listener.

|Name    |Desc          |
|--------|--------------|
|listener|Event listener|

### rmAllListeners

Remove all listeners.

### emit

Call listeners.

|Name   |Desc                        |
|-------|----------------------------|
|...args|Arguments passed to listener|

### mixin

[static] Mixin object class methods.

|Name|Desc           |
|----|---------------|
|obj |Object to mixin|

```javascript
const event = new SingleEmitter();
event.addListener(function(name) {
    console.log(name);
});
event.emit('licia'); // Logs out 'licia'.
```
