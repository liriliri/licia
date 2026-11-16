## isErr

Check if value is an error.

<details>
<summary>Type Definition</summary>

```typescript
function isErr(val: any): val is Error;
```

</details>

|Name  |Desc                     |
|------|-------------------------|
|val   |Value to check           |
|return|True if value is an error|

```javascript
isErr(new Error()); // -> true
```
