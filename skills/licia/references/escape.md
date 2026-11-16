## escape

Escapes a string for insertion into HTML, replacing &, <, >, ", `, and ' characters.

<details>
<summary>Type Definition</summary>

```typescript
function escape(str: string): string;
```

</details>

|Name  |Desc            |
|------|----------------|
|str   |String to escape|
|return|Escaped string  |

```javascript
escape('You & Me'); // -> 'You &amp; Me'
```
