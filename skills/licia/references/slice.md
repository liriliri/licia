## slice

Create slice of source array or array-like object.

<details>
<summary>Type Definition</summary>

```typescript
function slice(
    array: any[],
    start?: number,
    end?: number
): any[];
```

</details>

|Name            |Desc                      |
|----------------|--------------------------|
|array           |Array to slice            |
|start=0         |Start position            |
|end=array.length|End position, not included|

```javascript
slice([1, 2, 3, 4], 1, 2); // -> [2]
```
