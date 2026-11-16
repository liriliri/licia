## extractBlockCmts

Extract block comments from source code.

<details>
<summary>Type Definition</summary>

```typescript
function extractBlockCmts(str: string): string[];
```

</details>

|Name  |Desc             |
|------|-----------------|
|str   |String to extract|
|return|Block comments   |

```javascript
extractBlockCmts('\/*licia*\/'); // -> ['licia']
```
