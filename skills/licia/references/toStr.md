## toStr

Convert value to a string.

<details>
<summary>Type Definition</summary>

```typescript
function toStr(val: any): string;
```

</details>

|Name  |Desc            |
|------|----------------|
|val   |Value to convert|
|return|Result string   |

```javascript
toStr(null); // -> ''
toStr(1); // -> '1'
toStr(false); // -> 'false'
toStr([1, 2, 3]); // -> '1,2,3'
```
