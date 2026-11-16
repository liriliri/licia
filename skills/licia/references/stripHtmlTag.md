## stripHtmlTag

Strip html tags from a string.

<details>
<summary>Type Definition</summary>

```typescript
function stripHtmlTag(str: string): string;
```

</details>

|Name  |Desc           |
|------|---------------|
|str   |String to strip|
|return|Result string  |

```javascript
stripHtmlTag('<p>Hello</p>'); // -> 'Hello'
```
