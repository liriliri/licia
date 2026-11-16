## unescape

Convert HTML entities back, the inverse of escape.

<details>
<summary>Type Definition</summary>

```typescript
function unescape(str: string): string;
```

</details>

|Name  |Desc              |
|------|------------------|
|str   |String to unescape|
|return|Unescaped string  |

```javascript
unescape('You &amp; Me'); // -> 'You & Me'
```
