## isArrBuffer

Check if value is an ArrayBuffer.

<details>
<summary>Type Definition</summary>

```typescript
function isArrBuffer(val: any): val is ArrayBuffer;
```

</details>

|Name  |Desc                           |
|------|-------------------------------|
|val   |Value to check                 |
|return|True if value is an ArrayBuffer|

```javascript
isArrBuffer(new ArrayBuffer(8)); // -> true
```
