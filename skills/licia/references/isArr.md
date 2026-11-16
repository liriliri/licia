## isArr

Check if value is an `Array` object.

<details>
<summary>Type Definition</summary>

```typescript
function isArr(val: any): val is any[];
```

</details>

|Name  |Desc                              |
|------|----------------------------------|
|val   |Value to check                    |
|return|True if value is an `Array` object|

```javascript
isArr([]); // -> true
isArr({}); // -> false
```
