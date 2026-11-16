## ms

Convert time string formats to milliseconds.

<details>
<summary>Type Definition</summary>

```typescript
function ms(str: string): number;
function ms(num: number): string;
```

</details>

Turn time string into milliseconds.

|Name  |Desc         |
|------|-------------|
|str   |String format|
|return|Milliseconds |

Turn milliseconds into time string.

|Name  |Desc         |
|------|-------------|
|num   |Milliseconds |
|return|String format|

```javascript
ms('1s'); // -> 1000
ms('1m'); // -> 60000
ms('1.5h'); // -> 5400000
ms('1d'); // -> 86400000
ms('1y'); // -> 31557600000
ms('1000'); // -> 1000
ms(1500); // -> '1.5s'
ms(60000); // -> '1m'
```
