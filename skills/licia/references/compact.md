## compact

Return a copy of the array with all falsy values removed.

<details>
<summary>Type Definition</summary>

```typescript
function compact(arr: any[]): any[];
```

</details>

The values false, null, 0, "", undefined, and NaN are falsey.

|Name  |Desc                        |
|------|----------------------------|
|arr   |Array to compact            |
|return|New array of filtered values|

```javascript
compact([0, 1, false, 2, '', 3]); // -> [1, 2, 3]
```
