## isInt

Checks if value is classified as a Integer.

<details>
<summary>Type Definition</summary>

```typescript
function isInt(val: any): boolean;
```

</details>

|Name  |Desc                                 |
|------|-------------------------------------|
|val   |Value to check                       |
|return|True if value is correctly classified|

```javascript
isInt(5); // -> true
isInt(5.1); // -> false
isInt({}); // -> false
```
