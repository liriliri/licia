## findLastIdx

Return the last index where the predicate truth test passes.

<details>
<summary>Type Definition</summary>

```typescript
function findLastIdx(arr: any[], predicate: types.AnyFn): number;
```

</details>

|Name     |Desc                          |
|---------|------------------------------|
|arr      |Array to search               |
|predicate|Function invoked per iteration|
|return   |Last index of matched element |

```javascript
findLastIdx(
    [
        {
            name: 'john',
            age: 24
        },
        {
            name: 'jane',
            age: 23
        },
        {
            name: 'kitty',
            age: 24
        }
    ],
    function(val) {
        return val.age === 24;
    }
); // -> 2
```
