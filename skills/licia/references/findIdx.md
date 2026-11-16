## findIdx

Return the first index where the predicate truth test passes.

<details>
<summary>Type Definition</summary>

```typescript
function findIdx<T>(
    arr: T[],
    predicate: (val: T, idx: number, arr: T[]) => boolean
): number;
```

</details>

|Name     |Desc                          |
|---------|------------------------------|
|arr      |Array to search               |
|predicate|Function invoked per iteration|
|return   |Index of matched element      |

```javascript
findIdx(
    [
        {
            name: 'john',
            age: 24
        },
        {
            name: 'jane',
            age: 23
        }
    ],
    function(val) {
        return val.age === 23;
    }
); // -> 1
```
