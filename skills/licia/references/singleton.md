## singleton

Ensure an async function is only called once before it resolves.

<details>
<summary>Type Definition</summary>

```typescript
function singleton<F extends types.Fn<Promise<any>>>(
    fn: F,
    hashFn?: types.AnyFn
): F;
```

</details>

|Name  |Desc                        |
|------|----------------------------|
|fn    |Function to restrict        |
|hashFn|Function to create cache key|
|return|New restricted function     |

```javascript
const fetch = singleton(async function fetch(id) {});
const f1 = fetch(1);
const f2 = fetch(1);
const f3 = fetch(2);
console.log(f1 === f2); // -> true
console.log(f1 === f3); // -> false

f1.then(() => {
    const f4 = fetch(1);
    console.log(f1 === f4); // -> false
});
```
