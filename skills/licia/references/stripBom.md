## stripBom

Strip UTF-8 byte order mark.

<details>
<summary>Type Definition</summary>

```typescript
function stripBom(str: string): string;
```

</details>

|Name  |Desc           |
|------|---------------|
|str   |String to strip|
|return|Result string  |

```javascript
stripBom('\uFEFFlicia'); // -> 'licia'
```
