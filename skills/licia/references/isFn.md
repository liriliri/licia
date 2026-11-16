## isFn

Check if value is a function.

<details>
<summary>Type Definition</summary>

```typescript
function isFn(val: any): val is Function;
```

</details>

|Name  |Desc                       |
|------|---------------------------|
|val   |Value to check             |
|return|True if value is a function|

Generator function is also classified as true.

```javascript
isFn(function() {}); // -> true
isFn(function*() {}); // -> true
isFn(async function() {}); // -> true
```
