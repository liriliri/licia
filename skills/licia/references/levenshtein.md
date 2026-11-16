## levenshtein

Levenshtein distance implementation.

<details>
<summary>Type Definition</summary>

```typescript
function levenshtein(a: string, b: string): number;
```

</details>

|Name  |Desc                                |
|------|------------------------------------|
|a     |First string                        |
|b     |Second string                       |
|return|Levenshtein distance between a and b|

```javascript
levenshtein('cat', 'cake'); // -> 2
```
