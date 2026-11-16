## isRegExp

Check if value is a regular expression.

<details>
<summary>Type Definition</summary>

```typescript
function isRegExp(val: any): val is RegExp;
```

</details>

|Name  |Desc                                 |
|------|-------------------------------------|
|val   |Value to check                       |
|return|True if value is a regular expression|

```javascript
isRegExp(/a/); // -> true
```
