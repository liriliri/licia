## isNum

Check if value is classified as a Number primitive or object.

<details>
<summary>Type Definition</summary>

```typescript
function isNum(val: any): val is number;
```

</details>

|Name  |Desc                                 |
|------|-------------------------------------|
|val   |Value to check                       |
|return|True if value is correctly classified|

```javascript
isNum(5); // -> true
isNum(5.1); // -> true
isNum({}); // -> false
```
