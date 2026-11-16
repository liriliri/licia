## sortBy

Return an array of elements sorted in ascending order by results of running each element through iteratee.

<details>
<summary>Type Definition</summary>

```typescript
function sortBy<T>(
    arr: T[],
    iterator?: keyof T | ((item: T, index: number, list: T[]) => any),
    ctx?: any
): T[];
```

</details>

|Name             |Desc                      |
|-----------------|--------------------------|
|arr              |Collection to iterate over|
|iterator=identity|Iterator to sort by       |
|ctx              |Iterator context          |
|return           |New sorted array          |

```javascript
sortBy([1, 2, 3, 4, 5, 6], function(num) {
    return Math.sin(num);
}); // -> [5, 4, 6, 3, 1, 2]
```
