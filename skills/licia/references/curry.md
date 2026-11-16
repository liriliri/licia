## curry

Function currying.

<details>
<summary>Type Definition</summary>

```typescript
function curry(fn: types.AnyFn): types.AnyFn;
```

</details>

|Name  |Desc                |
|------|--------------------|
|fn    |Function to curry   |
|return|New curried function|

```javascript
const add = curry(function(a, b) {
    return a + b;
});
const add1 = add(1);
add1(2); // -> 3
```
