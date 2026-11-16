## convertBase

Convert base of a number.

<details>
<summary>Type Definition</summary>

```typescript
function convertBase(
    num: number | string,
    from: number,
    to: number
): string;
```

</details>

|Name  |Desc             |
|------|-----------------|
|num   |Number to convert|
|from  |Base from        |
|to    |Base to          |
|return|Converted number |

```javascript
convertBase('10', 2, 10); // -> '2'
convertBase('ff', 16, 2); // -> '11111111'
```
