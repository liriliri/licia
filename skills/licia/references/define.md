## define

Define a module, should be used along with use.

<details>
<summary>Type Definition</summary>

```typescript
function define(
    name: string,
    requires: string[],
    method: types.AnyFn
): void;
function define(name: string, method: types.AnyFn): void;
```

</details>

|Name    |Desc        |
|--------|------------|
|name    |Module name |
|requires|Dependencies|
|method  |Module body |

The module won't be executed until it's used by use function.

```javascript
define('A', function() {
    return 'A';
});
define('B', ['A'], function(A) {
    return 'B' + A;
});
```
