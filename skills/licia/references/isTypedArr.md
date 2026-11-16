## isTypedArr

Check if value is a typed array.

<details>
<summary>Type Definition</summary>

```typescript
function isTypedArr(val: any): boolean;
```

</details>

|Name  |Desc                          |
|------|------------------------------|
|val   |Value to check                |
|return|True if value is a typed array|

```javascript
isTypedArr([]); // -> false
isTypedArr(new Uint8Array(8)); // -> true
```
