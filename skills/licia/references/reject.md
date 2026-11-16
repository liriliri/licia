## reject

Opposite of filter.

<details>
<summary>Type Definition</summary>

```typescript
function reject<T>(
    list: types.List<T>,
    iterator: types.ListIterator<T, boolean>,
    context?: any
): T[];
function reject<T>(
    object: types.Dictionary<T>,
    iterator: types.ObjectIterator<T, boolean>,
    context?: any
): T[];
```

</details>

|Name     |Desc                                          |
|---------|----------------------------------------------|
|obj      |Collection to iterate over                    |
|predicate|Function invoked per iteration                |
|ctx      |Predicate context                             |
|return   |Array of all values that didn't pass predicate|

```javascript
reject([1, 2, 3, 4, 5], function(val) {
    return val % 2 === 0;
}); // -> [1, 3, 5]
```
