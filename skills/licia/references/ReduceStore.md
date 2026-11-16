## ReduceStore

Simplified redux like state container.

<details>
<summary>Type Definition</summary>

```typescript
class ReduceStore {
    constructor(reducer: types.AnyFn, initialState: any);
    subscribe(listener: types.AnyFn): types.AnyFn;
    dispatch(action: any): any;
    getState(): any;
}
```

</details>

### constructor

|Name        |Desc                       |
|------------|---------------------------|
|reducer     |Function returns next state|
|initialState|Initial state              |

### subscribe

Add a change listener.

|Name    |Desc                                |
|--------|------------------------------------|
|listener|Callback to invoke on every dispatch|
|return  |Function to unsubscribe             |

### dispatch

Dispatch an action.

|Name  |Desc                       |
|------|---------------------------|
|action|Object representing changes|
|return|Same action object         |

### getState

Get the current state.

```javascript
const store = new ReduceStore(function(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}, 0);

store.subscribe(function() {
    console.log(store.getState());
});

store.dispatch({ type: 'INCREMENT' }); // 1
store.dispatch({ type: 'INCREMENT' }); // 2
store.dispatch({ type: 'DECREMENT' }); // 1
```
