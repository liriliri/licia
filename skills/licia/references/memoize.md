## memoize

Memoize a given function by caching the computed result.

<details>
<summary>Type Definition</summary>

```typescript
function memoize(
    fn: types.AnyFn,
    hashFn?: types.AnyFn
): types.AnyFn;
```

</details>

|Name  |Desc                                |
|------|------------------------------------|
|fn    |Function to have its output memoized|
|hashFn|Function to create cache key        |
|return|New memoized function               |

```javascript
const fibonacci = memoize(function(n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
});
```
