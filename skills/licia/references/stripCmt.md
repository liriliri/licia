## stripCmt

Strip comments from source code.

<details>
<summary>Type Definition</summary>

```typescript
function stripCmt(str: string): string;
```

</details>

|Name  |Desc                 |
|------|---------------------|
|str   |Source code          |
|return|Code without comments|

```javascript
stripCmt('// comment \n var a = 5; \/* comment2\n * comment3\n *\/'); // -> ' var a = 5; '
```
