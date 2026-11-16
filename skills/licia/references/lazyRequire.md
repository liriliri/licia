## lazyRequire

Require modules lazily.

<details>
<summary>Type Definition</summary>

```typescript
function lazyRequire<T>(
    requireFn: (moduleId: string) => T
): (moduleId: string) => T;
```

</details>

```javascript
const r = lazyRequire(require);

const _ = r('underscore');

// underscore is required only when _ is called.
_().isNumber(5);
```
