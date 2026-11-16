## matcher

Return a predicate function that checks if attrs are contained in an object.

<details>
<summary>Type Definition</summary>

```typescript
function matcher(attrs: any): types.AnyFn;
```

</details>

|Name  |Desc                              |
|------|----------------------------------|
|attrs |Object of property values to match|
|return|New predicate function            |

```javascript
const filter = require('licia/filter');

const objects = [
    { a: 1, b: 2, c: 3 },
    { a: 4, b: 5, c: 6 }
];
filter(objects, matcher({ a: 4, c: 6 })); // -> [{a: 4, b: 5, c: 6}]
```
