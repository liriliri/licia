## each

Iterate over elements of collection and invokes iterator for each element.

<details>
<summary>Type Definition</summary>

```typescript
function each<T>(
    list: types.List<T>,
    iterator: types.ListIterator<T, void>,
    ctx?: any
): types.List<T>;
function each<T>(
    object: types.Dictionary<T>,
    iterator: types.ObjectIterator<T, void>,
    ctx?: any
): types.Collection<T>;
```

</details>

|Name    |Desc                          |
|--------|------------------------------|
|obj     |Collection to iterate over    |
|iterator|Function invoked per iteration|
|ctx     |Function context              |

```javascript
each({ a: 1, b: 2 }, function(val, key) {});
```
