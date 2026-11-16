## topoSort

Topological sorting algorithm.

<details>
<summary>Type Definition</summary>

```typescript
function topoSort(edges: any[]): any[];
```

</details>

|Name  |Desc        |
|------|------------|
|edges |Dependencies|
|return|Sorted order|

```javascript
topoSort([
    [1, 2],
    [1, 3],
    [3, 2]
]); // -> [1, 3, 2]
```
