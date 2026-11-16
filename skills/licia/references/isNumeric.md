## isNumeric

Check if value is numeric.

<details>
<summary>Type Definition</summary>

```typescript
function isNumeric(val: any): boolean;
```

</details>

|Name  |Desc                    |
|------|------------------------|
|val   |Value to check          |
|return|True if value is numeric|

```javascript
isNumeric(1); // -> true
isNumeric('1'); // -> true
isNumeric(Number.MAX_VALUE); // -> true
isNumeric(0xff); // -> true
isNumeric(''); // -> false
isNumeric('1.1.1'); // -> false
isNumeric(NaN); // -> false
```
