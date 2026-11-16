## indent

Indent each line in a string.

<details>
<summary>Type Definition</summary>

```typescript
function indent(
    str: string,
    char?: string,
    len?: number
): string;
```

</details>

|Name  |Desc                |
|------|--------------------|
|str   |String to indent    |
|char  |Character to prepend|
|len   |Indent length       |
|return|Indented string     |

```javascript
indent('foo\nbar', ' ', 4); // -> '    foo\n    bar'
```
