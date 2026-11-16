## fill

Fill elements of array with value.

<details>
<summary>Type Definition</summary>

```typescript
function fill(
    list: any[],
    val: any,
    start?: number,
    end?: number
): any[];
```

</details>

|Name          |Desc                    |
|--------------|------------------------|
|list          |Array to fill           |
|val           |Value to fill array with|
|start=0       |Start position          |
|end=arr.length|End position            |
|return        |Filled array            |

```javascript
fill([1, 2, 3], '*'); // -> ['*', '*', '*']
fill([1, 2, 3], '*', 1, 2); // -> [1, '*', 3]
```
