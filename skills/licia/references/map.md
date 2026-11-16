## map

Create an array of values by running each element in collection through iteratee.

<details>
<summary>Type Definition</summary>

```typescript
function map<T, TResult>(
    list: types.List<T>,
    iterator: types.ListIterator<T, TResult>,
    context?: any
): TResult[];
function map<T, TResult>(
    object: types.Dictionary<T>,
    iterator: types.ObjectIterator<T, TResult>,
    context?: any
): TResult[];
```

</details>

|Name    |Desc                          |
|--------|------------------------------|
|object  |Collection to iterate over    |
|iterator|Function invoked per iteration|
|context |Function context              |
|return  |New mapped array              |

```javascript
map([4, 8], function(n) {
    return n * n;
}); // -> [16, 64]
```
