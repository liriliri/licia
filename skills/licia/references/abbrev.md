## abbrev

Calculate the set of unique abbreviations for a given set of strings.

<details>
<summary>Type Definition</summary>

```typescript
function abbrev(...names: string[]): types.PlainObj<string>;
```

</details>

|Name  |Desc            |
|------|----------------|
|names |List of names   |
|return|Abbreviation map|

```javascript
abbrev('lina', 'luna');
// -> {li: 'lina', lin: 'lina', lina: 'lina', lu: 'luna', lun: 'luna', luna: 'luna'}
```
