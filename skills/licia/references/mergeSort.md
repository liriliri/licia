## mergeSort

Merge sort implementation.

<details>
<summary>Type Definition</summary>

```typescript
function mergeSort(arr: any[], cmp?: types.AnyFn): any[];
```

</details>

Note: It's not an "in-place" sort.

|Name  |Desc         |
|------|-------------|
|arr   |Array to sort|
|cmp   |Comparator   |
|return|Sorted array |

```javascript
mergeSort([2, 1]); // -> [1, 2]
```
