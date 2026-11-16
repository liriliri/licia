## union

Create an array of unique values, in order, from all given arrays.

<details>
<summary>Type Definition</summary>

```typescript
function union(...arr: Array<any[]>): any[];
```

</details>

|Name  |Desc                        |
|------|----------------------------|
|...arr|Arrays to inspect           |
|return|New array of combined values|

```javascript
union([2, 1], [4, 2], [1, 2]); // -> [2, 1, 4]
```
