## delRequireCache

Delete node.js require cache.

<details>
<summary>Type Definition</summary>

```typescript
function delRequireCache(id: string): void;
```

</details>

|Name|Desc               |
|----|-------------------|
|id  |Module name or path|

```javascript
const licia = require('licia');
licia.a = 5;
delRequireCache('licia');
require('licia').a; // -> undefined
```
