## remove

Remove all elements from array that predicate returns truthy for and return an array of the removed elements.

<details>
<summary>Type Definition</summary>

```typescript
function remove<T>(
    list: types.List<T>,
    iterator: types.ListIterator<T, boolean>,
    context?: any
): T[];
```

</details>

Unlike filter, this method mutates array.

|Name    |Desc                                |
|--------|------------------------------------|
|list    |Collection to iterate over          |
|iterator|Function invoked per iteration      |
|context |Predicate context                   |
|return  |Array of all values that are removed|

```javascript
const arr = [1, 2, 3, 4, 5];
const evens = remove(arr, function(val) {
    return val % 2 === 0;
});
console.log(arr); // -> [1, 3, 5]
console.log(evens); // -> [2, 4]
```
