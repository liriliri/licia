## isEmpty

Check if value is an empty object or array.

<details>
<summary>Type Definition</summary>

```typescript
function isEmpty(val: any): boolean;
```

</details>

|Name  |Desc                  |
|------|----------------------|
|val   |Value to check        |
|return|True if value is empty|

```javascript
isEmpty([]); // -> true
isEmpty({}); // -> true
isEmpty(''); // -> true
```
