## freezeDeep

Recursively use Object.freeze.

<details>
<summary>Type Definition</summary>

```typescript
function freezeDeep<T>(obj: T): T;
```

</details>

|Name  |Desc            |
|------|----------------|
|obj   |Object to freeze|
|return|Object passed in|

```javascript
const a = { b: { c: 1 } };
freezeDeep(a);
a.b.c = 2;
console.log(a); // -> {b: {c: 1}}
```
