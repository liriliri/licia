## naturalSort

Sort values in natural order.

<details>
<summary>Type Definition</summary>

```typescript
namespace naturalSort {
    interface INaturalSort {
        <T extends any[]>(arr: T): T;
        comparator(a: any, b: any): number;
    }
}
const naturalSort: naturalSort.INaturalSort;
```

</details>

|Name  |Desc           |
|------|---------------|
|arr   |Array of values|
|return|Sorted array   |

```javascript
naturalSort(['img12', 'img11', '$img', '_img', '1', '2', '12']);
// -> ['1', '2', '12', '$img', 'img11', 'img12', '_img']
naturalSort([2, '1', 13]); // -> ['1', 2, 13]
```
