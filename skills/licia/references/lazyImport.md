## lazyImport

Import modules lazily, Proxy is used.

<details>
<summary>Type Definition</summary>

```typescript
function lazyImport<T>(
    importFn: (moduleId: string) => T,
    dirname?: string
): (moduleId: string) => T;
```

</details>

|Name    |Desc                             |
|--------|---------------------------------|
|importFn|Actual function to require module|
|dirname |Current file folder              |
|return  |New function to require module   |

```javascript
const r = lazyImport(require);

const _ = r('underscore');

_.isNumber(5);
```
