## isFullWidth

Check if character is full width.

<details>
<summary>Type Definition</summary>

```typescript
function isFullWidth(codePoint: number): boolean;
```

</details>

|Name     |Desc                           |
|---------|-------------------------------|
|codePoint|Unicode code point             |
|return   |True if character is full width|

```javascript
isFullWidth('a'.codePointAt(0)); // -> false
isFullWidth(','.codePointAt(0)); // -> false
isFullWidth('我'.codePointAt(0)); // -> true
isFullWidth('，'.codePointAt(0)); // -> true
```
