## randomId

A tiny id generator, similar to nanoid.

<details>
<summary>Type Definition</summary>

```typescript
function randomId(size?: number, symbols?: string): string;
```

</details>

|Name   |Desc                                                |
|-------|----------------------------------------------------|
|size=21|Id size                                             |
|symbols|Symbols used to generate ids, a-zA-Z0-9_- by default|

```javascript
randomId(); // -> 'oKpy4HwU8E6IvU5I03gyQ'
randomId(5); // -> 'sM6E9'
randomId(5, 'abc'); // -> 'cbbcb'
```
