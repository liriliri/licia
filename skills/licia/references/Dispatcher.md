## Dispatcher

Flux dispatcher.

<details>
<summary>Type Definition</summary>

```typescript
class Dispatcher {
    dispatch(payload: any);
    register(cb: types.AnyFn): void;
    waitFor(ids: string[]): void;
    unregister(id: string): void;
    isDispatching(): boolean;
}
```

</details>

[Related docs](https://facebook.github.io/flux/docs/dispatcher.html)

```javascript
const dispatcher = new Dispatcher();

dispatcher.register(function(payload) {
    switch (
        payload.actionType
        // Do something
    ) {
    }
});

dispatcher.dispatch({
    actionType: 'action'
});
```
