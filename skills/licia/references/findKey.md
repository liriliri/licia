## findKey

Return the first key where the predicate truth test passes.

<details>
<summary>Type Definition</summary>

```typescript
function findKey(
    obj: any,
    predicate: types.AnyFn,
    ctx?: any
): string | undefined;
```

</details>

|Name     |Desc                          |
|---------|------------------------------|
|obj      |Object to search              |
|predicate|Function invoked per iteration|
|ctx      |Predicate context             |
|return   |Key of matched element        |

```javascript
findKey({ a: 1, b: 2 }, function(val) {
    return val === 1;
}); // -> a
```
