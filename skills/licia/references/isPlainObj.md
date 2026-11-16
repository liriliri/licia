## isPlainObj

Check if value is an object created by Object constructor.

<details>
<summary>Type Definition</summary>

```typescript
function isPlainObj(val: any): boolean;
```

</details>

|Name  |Desc                           |
|------|-------------------------------|
|val   |Value to check                 |
|return|True if value is a plain object|

```javascript
isPlainObj({}); // -> true
isPlainObj([]); // -> false
isPlainObj(function() {}); // -> false
```
