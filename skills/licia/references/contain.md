## contain

Check if the value is present in the list.

<details>
<summary>Type Definition</summary>

```typescript
function contain(
    arr: readonly any[] | {} | string,
    val: any
): boolean;
```

</details>

|Name  |Desc                                |
|------|------------------------------------|
|target|Target object                       |
|val   |Value to check                      |
|return|True if value is present in the list|

```javascript
contain([1, 2, 3], 1); // -> true
contain({ a: 1, b: 2 }, 1); // -> true
contain('abc', 'a'); // -> true
```
