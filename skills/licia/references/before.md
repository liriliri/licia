## before

Create a function that invokes less than n times.

<details>
<summary>Type Definition</summary>

```typescript
function before<T extends types.AnyFn>(n: number, fn: T): T;
```

</details>

|Name  |Desc                                            |
|------|------------------------------------------------|
|n     |Number of calls at which fn is no longer invoked|
|fn    |Function to restrict                            |
|return|New restricted function                         |

Subsequent calls to the created function return the result of the last fn invocation.

```javascript
const fn = before(5, function() {});
fn(); // Allow function to be call 4 times at last.
```
