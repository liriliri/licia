## filter

Iterates over elements of collection, returning an array of all the values that pass a truth test.

<details>
<summary>Type Definition</summary>

```typescript
function filter<T>(
    list: types.List<T>,
    iterator: types.ListIterator<T, boolean>,
    context?: any
): T[];
function filter<T>(
    object: types.Dictionary<T>,
    iterator: types.ObjectIterator<T, boolean>,
    context?: any
): T[];
```

</details>

|Name     |Desc                                   |
|---------|---------------------------------------|
|obj      |Collection to iterate over             |
|predicate|Function invoked per iteration         |
|ctx      |Predicate context                      |
|return   |Array of all values that pass predicate|

```javascript
filter([1, 2, 3, 4, 5], function(val) {
    return val % 2 === 0;
}); // -> [2, 4]
```
