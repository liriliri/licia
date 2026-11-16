## freeze

Shortcut for Object.freeze.

<details>
<summary>Type Definition</summary>

```typescript
function freeze<T>(obj: T): T;
```

</details>

Use Object.defineProperties if Object.freeze is not supported.

|Name  |Desc            |
|------|----------------|
|obj   |Object to freeze|
|return|Object passed in|

```javascript
const a = { b: 1 };
freeze(a);
a.b = 2;
console.log(a); // -> {b: 1}
```
