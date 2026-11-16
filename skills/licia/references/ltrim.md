## ltrim

Remove chars or white-spaces from beginning of string.

<details>
<summary>Type Definition</summary>

```typescript
function ltrim(str: string, chars?: string | string[]): string;
```

</details>

|Name  |Desc              |
|------|------------------|
|str   |String to trim    |
|chars |Characters to trim|
|return|Trimmed string    |

```javascript
ltrim(' abc  '); // -> 'abc  '
ltrim('_abc_', '_'); // -> 'abc_'
ltrim('_abc_', ['a', '_']); // -> 'bc_'
```
