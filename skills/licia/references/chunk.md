## chunk

Split array into groups the length of given size.

<details>
<summary>Type Definition</summary>

```typescript
function chunk(arr: any[], size?: number): Array<any[]>;
```

</details>

|Name  |Desc                |
|------|--------------------|
|arr   |Array to process    |
|size=1|Length of each chunk|
|return|Chunks of given size|

```javascript
chunk([1, 2, 3, 4], 2); // -> [[1, 2], [3, 4]]
chunk([1, 2, 3, 4], 3); // -> [[1, 2, 3], [4]]
chunk([1, 2, 3, 4]); // -> [[1], [2], [3], [4]]
```
