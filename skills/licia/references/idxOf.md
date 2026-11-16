## idxOf

Get the index at which the first occurrence of value.

<details>
<summary>Type Definition</summary>

```typescript
function idxOf(arr: any[], val: any, fromIdx?: number): number;
```

</details>

|Name     |Desc                |
|---------|--------------------|
|arr      |Array to search     |
|val      |Value to search for |
|fromIdx=0|Index to search from|
|return   |Value index         |

```javascript
idxOf([1, 2, 1, 2], 2, 2); // -> 3
```
