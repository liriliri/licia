## isAsyncFn

Check if value is an async function.

<details>
<summary>Type Definition</summary>

```typescript
function isAsyncFn(val: any): boolean;
```

</details>

|Name  |Desc                              |
|------|----------------------------------|
|val   |Value to check                    |
|return|True if value is an async function|

```javascript
isAsyncFn(function*() {}); // -> false
isAsyncFn(function() {}); // -> false
isAsyncFn(async function() {}); // -> true
```
