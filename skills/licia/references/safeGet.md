## safeGet

Get object property, don't throw undefined error.

<details>
<summary>Type Definition</summary>

```typescript
function safeGet(obj: any, path: string | string[]): any;
```

</details>

|Name  |Desc                     |
|------|-------------------------|
|obj   |Object to query          |
|path  |Path of property to get  |
|return|Target value or undefined|

```javascript
const obj = { a: { aa: { aaa: 1 } } };
safeGet(obj, 'a.aa.aaa'); // -> 1
safeGet(obj, ['a', 'aa']); // -> {aaa: 1}
safeGet(obj, 'a.b'); // -> undefined
```
