## toArr

Convert value to an array.

<details>
<summary>Type Definition</summary>

```typescript
function toArr(val: null | undefined): any[];
function toArr(val: string): string[];
function toArr<T>(val: T[]): T[];
function toArr<T>(val: ArrayLike<T>): T[];
function toArr<T>(val: T): T[];
```

</details>

|Name  |Desc            |
|------|----------------|
|val   |Value to convert|
|return|Converted array |

```javascript
toArr({ a: 1, b: 2 }); // -> [{a: 1, b: 2}]
toArr('abc'); // -> ['abc']
toArr(1); // -> [1]
toArr(null); // -> []
```
