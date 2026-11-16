## stripColor

Strip ansi color codes from a string.

<details>
<summary>Type Definition</summary>

```typescript
function stripColor(str: string): string;
```

</details>

|Name  |Desc           |
|------|---------------|
|str   |String to strip|
|return|Result string  |

```javascript
stripColor('\u001b[31mred\u001b[39m'); // -> 'red'
```
