## isBool

Check if value is a boolean primitive.

<details>
<summary>Type Definition</summary>

```typescript
function isBool(val: any): val is boolean;
```

</details>

|Name  |Desc                      |
|------|--------------------------|
|val   |Value to check            |
|return|True if value is a boolean|

```javascript
isBool(true); // -> true
isBool(false); // -> true
isBool(1); // -> false
```
