## isCyclic

Detect cyclic object reference.

<details>
<summary>Type Definition</summary>

```typescript
function isCyclic(val: any): boolean;
```

</details>

|Name  |Desc                   |
|------|-----------------------|
|val   |Value to detect        |
|return|True if value is cyclic|

```javascript
isCyclic({}); // -> false
const obj = { a: 1 };
obj.b = obj;
isCyclic(obj); // -> true
```
