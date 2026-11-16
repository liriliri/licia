## rtrim

Remove chars or white-spaces from end of string.

<details>
<summary>Type Definition</summary>

```typescript
function rtrim(str: string, chars?: string | string[]): string;
```

</details>

|Name  |Desc              |
|------|------------------|
|str   |String to trim    |
|chars |Characters to trim|
|return|Trimmed string    |

```javascript
rtrim(' abc  '); // -> ' abc'
rtrim('_abc_', '_'); // -> '_abc'
rtrim('_abc_', ['c', '_']); // -> '_ab'
```
