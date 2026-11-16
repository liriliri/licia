## intersect

Compute the list of values that are the intersection of all the arrays.

<details>
<summary>Type Definition</summary>

```typescript
function intersect(...arr: Array<any[]>): any[];
```

</details>

|Name  |Desc                          |
|------|------------------------------|
|...arr|Arrays to inspect             |
|return|New array of inspecting values|

```javascript
intersect([1, 2, 3, 4], [2, 1, 10], [2, 1]); // -> [1, 2]
```
