## Enum

Enum type implementation.

<details>
<summary>Type Definition</summary>

```typescript
class Enum {
    size: number;
    constructor(map: string[] | { [member: string]: any });
    [key: string]: any;
}
```

</details>

### constructor

|Name|Desc            |
|----|----------------|
|arr |Array of strings|

|Name|Desc                  |
|----|----------------------|
|obj |Pairs of key and value|

```javascript
const importance = new Enum([
    'NONE',
    'TRIVIAL',
    'REGULAR',
    'IMPORTANT',
    'CRITICAL'
]);
const val = 1;
if (val === importance.CRITICAL) {
    // Do something.
}
```
