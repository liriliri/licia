## every

Check if predicate return truthy for all elements.

<details>
<summary>Type Definition</summary>

```typescript
function every<T>(
    object: types.List<T>,
    iterator?: types.ListIterator<T, boolean>,
    context?: any
): boolean;
function every<T>(
    object: types.Dictionary<T>,
    iterator?: types.ObjectIterator<T, boolean>,
    context?: any
): boolean;
```

</details>

|Name    |Desc                                         |
|--------|---------------------------------------------|
|object  |Collection to iterate over                   |
|iterator|Function invoked per iteration               |
|context |Predicate context                            |
|return  |True if all elements pass the predicate check|

```javascript
every([2, 4], function(val) {
    return val % 2 === 0;
}); // -> true
```
