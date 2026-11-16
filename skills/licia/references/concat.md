## concat

Concat multiple arrays into a single array.

<details>
<summary>Type Definition</summary>

```typescript
function concat(...args: Array<any[]>): any[];
```

</details>

|Name  |Desc              |
|------|------------------|
|...arr|Arrays to concat  |
|return|Concatenated array|

```javascript
concat([1, 2], [3], [4, 5]); // -> [1, 2, 3, 4, 5]
```
