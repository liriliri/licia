## isBuffer

Check if value is a buffer.

<details>
<summary>Type Definition</summary>

```typescript
function isBuffer(val: any): boolean;
```

</details>

|Name  |Desc                     |
|------|-------------------------|
|val   |The value to check       |
|return|True if value is a buffer|

```javascript
isBuffer(Buffer.alloc(4)); // -> true
```
