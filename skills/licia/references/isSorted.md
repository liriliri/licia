## isSorted

Check if an array is sorted.

<details>
<summary>Type Definition</summary>

```typescript
function isSorted(arr: any[], cmp?: types.AnyFn): boolean;
```

</details>

|Name  |Desc                   |
|------|-----------------------|
|arr   |Array to check         |
|cmp   |Comparator             |
|return|True if array is sorted|

```javascript
isSorted([1, 2, 3]); // -> true
isSorted([3, 2, 1]); // -> false
```
