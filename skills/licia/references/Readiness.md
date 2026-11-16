## Readiness

Readiness manager.

<details>
<summary>Type Definition</summary>

```typescript
class Readiness {
    signal(tasks: string | string[]): void;
    isReady(tasks: string | string[]): boolean;
    ready(tasks: string | string[], fn?: types.AnyFn): Promise<void>;
}
```

</details>

### signal

Signal task is ready.

|Name |Desc       |
|-----|-----------|
|tasks|Ready tasks|

### ready

Register ready callback.

|Name  |Desc                                    |
|------|----------------------------------------|
|tasks |Tasks to listen                         |
|fn    |Callback to trigger if tasks are ready  |
|return|Promise that will be resolved when ready|

### isReady

Check if tasks are ready.

|Name  |Desc                       |
|------|---------------------------|
|tasks |Tasks to check             |
|return|True if all tasks are ready|

```javascript
const readiness = new Readiness();
readiness.ready('serverCreated', function() {
    // Do something.
});
readiness.signal('serverCreated');
readiness.isReady('serverCreated'); // -> true
```
