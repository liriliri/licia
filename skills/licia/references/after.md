## after

Create a function that invokes once it's called n or more times.

<details>
<summary>Type Definition</summary>

```typescript
function after<T extends types.AnyFn>(n: number, fn: T): T;
```

</details>

|Name  |Desc                          |
|------|------------------------------|
|n     |Number of calls before invoked|
|fn    |Function to restrict          |
|return|New restricted function       |

```javascript
const fn = after(5, function() {
    // -> Only invoke after fn is called 5 times.
});
```
