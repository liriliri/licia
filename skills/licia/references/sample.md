## sample

Sample random values from a collection.

<details>
<summary>Type Definition</summary>

```typescript
function sample(obj: any, n: number): any[];
```

</details>

|Name  |Desc                  |
|------|----------------------|
|obj   |Collection to sample  |
|n     |Number of values      |
|return|Array of sample values|

```javascript
sample([2, 3, 1], 2); // -> [2, 3]
sample({ a: 1, b: 2, c: 3 }, 1); // -> [2]
```
