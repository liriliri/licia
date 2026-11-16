## isSymbol

Check if value is a symbol.

<details>
<summary>Type Definition</summary>

```typescript
function isSymbol(val: any): val is symbol;
```

</details>

|Name  |Desc                     |
|------|-------------------------|
|val   |Value to check           |
|return|True if value is a symbol|

```javascript
isSymbol(Symbol('test')); // -> true
```
