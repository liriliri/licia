## escapeJsStr

Escape string to be a valid JavaScript string literal between quotes.

<details>
<summary>Type Definition</summary>

```typescript
function escapeJsStr(str: string): string;
```

</details>

http://www.ecma-international.org/ecma-262/5.1/#sec-7.8.4

|Name  |Desc            |
|------|----------------|
|str   |String to escape|
|return|Escaped string  |

```javascript
escapeJsStr('"\n'); // -> '\\"\\\\n'
```
