## escapeRegExp

Escape special chars to be used as literals in RegExp constructors.

<details>
<summary>Type Definition</summary>

```typescript
function escapeRegExp(str: string): string;
```

</details>

|Name  |Desc            |
|------|----------------|
|str   |String to escape|
|return|Escaped string  |

```javascript
escapeRegExp('[licia]'); // -> '\\[licia\\]'
```
