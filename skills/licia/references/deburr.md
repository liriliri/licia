## deburr

Convert Latin-1 Supplement and Latin Extended-A letters to basic Latin letters and remove combining diacritical marks.

<details>
<summary>Type Definition</summary>

```typescript
function deburr(str: string): string;
```

</details>

|Name  |Desc            |
|------|----------------|
|str   |String to deburr|
|return|Deburred string |

```javascript
deburr('déjà vu'); // -> 'deja vu'
```
