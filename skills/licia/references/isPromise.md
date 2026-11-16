## isPromise

Check if value looks like a promise.

<details>
<summary>Type Definition</summary>

```typescript
function isPromise(val: any): boolean;
```

</details>

|Name  |Desc                              |
|------|----------------------------------|
|val   |Value to check                    |
|return|True if value looks like a promise|

```javascript
isPromise(new Promise(function() {})); // -> true
isPromise({}); // -> false
```
