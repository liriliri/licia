## reduce

Turn a list of values into a single value.

<details>
<summary>Type Definition</summary>

```typescript
function reduce<T, TResult>(
    list: types.List<T>,
    iterator: types.MemoIterator<T, TResult>,
    memo?: TResult,
    context?: any
): TResult;
function reduce<T, TResult>(
    list: types.Dictionary<T>,
    iterator: types.MemoObjectIterator<T, TResult>,
    memo?: TResult,
    context?: any
): TResult;
```

</details>

|Name             |Desc                          |
|-----------------|------------------------------|
|obj              |Collection to iterate over    |
|iterator=identity|Function invoked per iteration|
|initial          |Initial value                 |
|ctx              |Function context              |
|return           |Accumulated value             |

```javascript
reduce(
    [1, 2, 3],
    function(sum, n) {
        return sum + n;
    },
    0
); // -> 6
```
