## toAsync

Use generator like async/await.

<details>
<summary>Type Definition</summary>

```typescript
function toAsync(fn: types.AnyFn): types.AnyFn;
```

</details>

|Name  |Desc              |
|------|------------------|
|fn    |Generator function|
|return|Result function   |

```javascript
const sleep = require('licia/sleep');

const fn = toAsync(function*() {
    yield sleep(200);
    return 'licia';
});

fn().then(str => {});
```
