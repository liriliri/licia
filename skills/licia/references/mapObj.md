## mapObj

Map for objects.

<details>
<summary>Type Definition</summary>

```typescript
function mapObj<T, TResult>(
    object: types.Dictionary<T>,
    iterator: types.ObjectIterator<T, TResult>,
    context?: any
): types.Dictionary<TResult>;
```

</details>

|Name    |Desc                          |
|--------|------------------------------|
|object  |Object to iterate over        |
|iterator|Function invoked per iteration|
|context |Function context              |
|return  |New mapped object             |

```javascript
mapObj({ a: 1, b: 2 }, function(val, key) {
    return val + 1;
}); // -> {a: 2, b: 3}
```
