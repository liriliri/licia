## safeDel

Delete object property.

<details>
<summary>Type Definition</summary>

```typescript
function safeDel(obj: any, path: string | string[]): any;
```

</details>

|Name  |Desc                      |
|------|--------------------------|
|obj   |Object to query           |
|path  |Path of property to delete|
|return|Deleted value or undefined|

```javascript
const obj = { a: { aa: { aaa: 1 } } };
safeDel(obj, 'a.aa.aaa'); // -> 1
safeDel(obj, ['a', 'aa']); // -> {}
safeDel(obj, 'a.b'); // -> undefined
```
