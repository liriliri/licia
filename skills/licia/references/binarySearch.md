## binarySearch

Binary search implementation.

<details>
<summary>Type Definition</summary>

```typescript
function binarySearch(
    array: any[],
    val: any,
    cmp?: types.AnyFn
): number;
```

</details>

|Name  |Desc         |
|------|-------------|
|array |Sorted array |
|val   |Value to seek|
|cmp   |Comparator   |
|return|Value index  |

```javascript
binarySearch([1, 2, 3], 2); // -> 1
binarySearch([1, 2], 3); // -> -1
binarySearch(
    [
        {
            key: 1
        },
        {
            key: 2
        }
    ],
    { key: 1 },
    (a, b) => {
        if (a.key === b.key) return 0;
        return a.key < b.key ? -1 : 1;
    }
); // -> 0
```
