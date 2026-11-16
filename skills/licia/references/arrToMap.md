## arrToMap

Make an object map using array of strings.

<details>
<summary>Type Definition</summary>

```typescript
function arrToMap<T>(
    arr: string[],
    val?: T
): { [key: string]: T };
```

</details>

|Name    |Desc            |
|--------|----------------|
|arr     |Array of strings|
|val=true|Key value       |
|return  |Object map      |

```javascript
const needPx = arrToMap([
    'column-count',
    'columns',
    'font-weight',
    'line-weight',
    'opacity',
    'z-index',
    'zoom'
]);
const key = 'column-count';
let val = '5';
if (needPx[key]) val += 'px';
console.log(val); // -> '5px'
```
