## once

Create a function that invokes once.

<details>
<summary>Type Definition</summary>

```typescript
function once(fn: types.AnyFn): types.AnyFn;
```

</details>

|Name  |Desc                   |
|------|-----------------------|
|fn    |Function to restrict   |
|return|New restricted function|

```javascript
function init() {}
const initOnce = once(init);
initOnce();
initOnce(); // -> init is invoked once
```
