## deprecate

Node.js util.deprecate with browser support.

<details>
<summary>Type Definition</summary>

```typescript
function deprecate(fn: types.AnyFn, msg: string): types.AnyFn;
```

</details>

|Name  |Desc                     |
|------|-------------------------|
|fn    |Function to be deprecated|
|msg   |Warning message          |
|return|Deprecated function      |

```javascript
const fn = () => {};
const obsoleteFn = deprecate(fn, 'obsoleteFn is deprecated.');
obsoleteFn();
```
