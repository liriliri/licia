## sortKeys

Sort keys of an object.

<details>
<summary>Type Definition</summary>

```typescript
function sortKeys(
    obj: object,
    options?: {
        deep?: boolean;
        comparator?: types.AnyFn;
    }
): object;
```

</details>

|Name   |Desc                   |
|-------|-----------------------|
|obj    |Object to sort         |
|options|Sort options           |
|return |Object with sorted keys|

Available options:

|Name      |Desc                 |
|----------|---------------------|
|deep=false|Sort keys recursively|
|comparator|Comparator           |

```javascript
sortKeys(
    { b: { d: 2, c: 1 }, a: 0 },
    {
        deep: true
    }
); // -> {a: 0, b: {c: 1, d: 2}}
```
