## mergeArr

Merge the contents of arrays together into the first array.

<details>
<summary>Type Definition</summary>

```typescript
function mergeArr<T, U>(
    first: ArrayLike<T>,
    ...arrays: ArrayLike<U>[]
): ArrayLike<T | U>;
```

</details>

|Name  |Desc                                |
|------|------------------------------------|
|first |Array to merge                      |
|arrays|Arrays to merge into the first array|
|return|First array                         |

```javascript
const a = [1, 2];
mergeArr(a, [3, 4], [5, 6]);
console.log(a); // -> [1, 2, 3, 4, 5, 6]
```
