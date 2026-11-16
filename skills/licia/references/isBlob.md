## isBlob

Check if value is a Blob.

<details>
<summary>Type Definition</summary>

```typescript
function isBlob(val: any): boolean;
```

</details>

|Name  |Desc                   |
|------|-----------------------|
|val   |Value to check         |
|return|True if value is a Blob|

```javascript
isBlob(new Blob([])); // -> true;
isBlob([]); // -> false
```
