## isPrimitive

Check if value is string, number, boolean or null.

<details>
<summary>Type Definition</summary>

```typescript
function isPrimitive(val: any): boolean;
```

</details>

|Name  |Desc                        |
|------|----------------------------|
|val   |Value to check              |
|return|True if value is a primitive|

```javascript
isPrimitive(5); // -> true
isPrimitive('abc'); // -> true
isPrimitive(false); // -> true
```
