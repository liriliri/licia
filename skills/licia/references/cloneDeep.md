## cloneDeep

Recursively clone value.

<details>
<summary>Type Definition</summary>

```typescript
function cloneDeep<T>(val: T): T;
```

</details>

|Name  |Desc             |
|------|-----------------|
|val   |Value to clone   |
|return|Deep cloned Value|

```javascript
const obj = [{ a: 1 }, { a: 2 }];
const obj2 = cloneDeep(obj);
console.log(obj[0] === obj2[1]); // -> false
```
