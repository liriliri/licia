## unique

Create duplicate-free version of an array.

<details>
<summary>Type Definition</summary>

```typescript
function unique(
    arr: any[],
    cmp?: (a: any, b: any) => boolean | number
): any[];
```

</details>

|Name  |Desc                         |
|------|-----------------------------|
|arr   |Array to inspect             |
|cmp   |Function for comparing values|
|return|New duplicate free array     |

```javascript
unique([1, 2, 3, 1]); // -> [1, 2, 3]
```
