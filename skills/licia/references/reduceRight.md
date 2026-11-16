## reduceRight

Right-associative version of reduce.

<details>
<summary>Type Definition</summary>

```typescript
function reduceRight<T, TResult>(
    list: types.Collection<T>,
    iterator: types.MemoIterator<T, TResult>,
    memo?: TResult,
    context?: any
): TResult;
```

</details>

```javascript
reduceRight(
    [[1], [2], [3]],
    function(a, b) {
        return a.concat(b);
    },
    []
); // -> [3, 2, 1]
```
