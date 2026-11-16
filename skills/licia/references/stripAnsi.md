## stripAnsi

Strip ansi codes from a string.

<details>
<summary>Type Definition</summary>

```typescript
function stripAnsi(str: string): string;
```

</details>

|Name  |Desc           |
|------|---------------|
|str   |String to strip|
|return|Result string  |

```javascript
stripAnsi('\u001b[4mcake\u001b[0m'); // -> 'cake'
```
