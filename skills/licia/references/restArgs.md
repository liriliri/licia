## restArgs

This accumulates the arguments passed into an array, after a given index.

<details>
<summary>Type Definition</summary>

```typescript
function restArgs(
    fn: types.AnyFn,
    startIndex?: number
): types.AnyFn;
```

</details>

|Name      |Desc                                   |
|----------|---------------------------------------|
|function  |Function that needs rest parameters    |
|startIndex|The start index to accumulates         |
|return    |Generated function with rest parameters|

```javascript
const paramArr = restArgs(function(rest) {
    return rest;
});
paramArr(1, 2, 3, 4); // -> [1, 2, 3, 4]
```
