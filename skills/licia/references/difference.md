## difference

Create an array of unique array values not included in the other given array.

<details>
<summary>Type Definition</summary>

```typescript
function difference(arr: any[], ...args: any[]): any[];
```

</details>

|Name   |Desc                        |
|-------|----------------------------|
|arr    |Array to inspect            |
|...args|Values to exclude           |
|return |New array of filtered values|

```javascript
difference([3, 2, 1], [4, 2]); // -> [3, 1]
```
