## stripIndent

Strip indentation from multi-line strings.

<details>
<summary>Type Definition</summary>

```typescript
function stripIndent(str: string): string;
function stripIndent(
    literals: TemplateStringsArray,
    ...placeholders: any[]
): string;
```

</details>

|Name  |Desc           |
|------|---------------|
|str   |String to strip|
|return|Result string  |

It can be used as function or template tag.

```javascript
stripIndent`
    Test string
        * item one
        * item two
`; // -> 'Test string\n    * item one\n    * item two'
```
