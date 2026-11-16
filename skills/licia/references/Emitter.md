## Emitter

Event emitter class which provides observer pattern.

<details>
<summary>Type Definition</summary>

```typescript
class Emitter {
    on(event: string, listener: types.AnyFn): Emitter;
    off(event: string, listener: types.AnyFn): Emitter;
    once(event: string, listener: types.AnyFn): Emitter;
    emit(event: string, ...args: any[]): Emitter;
    removeAllListeners(event?: string): Emitter;
    static mixin(obj: any): any;
}
```

</details>

### on

Bind event.

### off

Unbind event.

### once

Bind event that trigger once.

|Name    |Desc          |
|--------|--------------|
|event   |Event name    |
|listener|Event listener|

### emit

Emit event.

|Name   |Desc                        |
|-------|----------------------------|
|event  |Event name                  |
|...args|Arguments passed to listener|

### removeAllListeners

Remove all listeners.

|Name |Desc      |
|-----|----------|
|event|Event name|

### mixin

[static] Mixin object class methods.

|Name|Desc           |
|----|---------------|
|obj |Object to mixin|

```javascript
const event = new Emitter();
event.on('test', function(name) {
    console.log(name);
});
event.emit('test', 'licia'); // Logs out 'licia'.
Emitter.mixin({});
```
