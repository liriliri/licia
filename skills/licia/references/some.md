## some

Check if predicate return truthy for any element.

<details>
<summary>Type Definition</summary>

```typescript
function some<T>(
    list: types.List<T>,
    iterator?: types.ListIterator<T, boolean>,
    context?: any
): boolean;
function some<T>(
    object: types.Dictionary<T>,
    iterator?: types.ObjectIterator<T, boolean>,
    context?: any
): boolean;
```

</details>

|Name     |Desc                                          |
|---------|----------------------------------------------|
|obj      |Collection to iterate over                    |
|predicate|Function to invoked per iteration             |
|ctx      |Predicate context                             |
|return   |True if any element passes the predicate check|

```javascript
some([2, 5], function(val) {
    return val % 2 === 0;
}); // -> true
```
