## toBool

Convert value to a boolean.

<details>
<summary>Type Definition</summary>

```typescript
function toBool(val: any): boolean;
```

</details>

|Name  |Desc             |
|------|-----------------|
|val   |Value to convert |
|return|Converted boolean|

```javascript
toBool(true); // -> true
toBool(null); // -> false
toBool(1); // -> true
toBool(0); // -> false
toBool('0'); // -> false
toBool('1'); // -> true
toBool('false'); // -> false
```
