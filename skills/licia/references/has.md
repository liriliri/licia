## has

Checks if key is a direct property.

<details>
<summary>Type Definition</summary>

```typescript
function has(obj: {}, key: string): boolean;
```

</details>

|Name  |Desc                            |
|------|--------------------------------|
|obj   |Object to query                 |
|key   |Path to check                   |
|return|True if key is a direct property|

```javascript
has({ one: 1 }, 'one'); // -> true
```
