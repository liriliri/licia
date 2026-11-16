## find

Find the first value that passes a truth test in a collection.

<details>
<summary>Type Definition</summary>

```typescript
function find<T>(
    object: types.List<T>,
    iterator: types.ListIterator<T, boolean>,
    context?: any
): T | undefined;
function find<T>(
    object: types.Dictionary<T>,
    iterator: types.ObjectIterator<T, boolean>,
    context?: any
): T | undefined;
```

</details>

|Name    |Desc                             |
|--------|---------------------------------|
|object  |Collection to iterate over       |
|iterator|Function invoked per iteration   |
|context |Predicate context                |
|return  |First value that passes predicate|

```javascript
find(
    [
        {
            name: 'john',
            age: 24
        },
        {
            name: 'jane',
            age: 23
        }
    ],
    function(val) {
        return val.age === 23;
    }
); // -> {name: 'jane', age: 23}
```
