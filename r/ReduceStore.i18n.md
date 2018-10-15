## CN

Simplified redux like state container.

### constructor

|参数名|类型|说明|
|-----|----|---|
|reducer     |function|Function returns next state|
|initialState|*       |Initial state              |

### subscribe

Add a change listener.

|参数名|类型|说明|
|-----|----|---|
|listener|function|Callback to invoke on every dispatch|
|返回值  |function|Function to unscribe                |

### dispatch

Dispatch an action.

|参数名|类型|说明|
|-----|----|---|
|action|object|Object representing changes|
|返回值|object|Same action object         |

### getState

Get the current state.

```javascript
var store = new ReduceStore(function (state, action) {
    switch (action.type) {
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        default: return state;
    }
}, 0);

store.subscribe(function () {
    console.log(store.getState());
});

store.dispatch({type: 'INCREMENT'}); // 1
store.dispatch({type: 'INCREMENT'}); // 2
store.dispatch({type: 'DECREMENT'}); // 1
```