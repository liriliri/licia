## CN

Convert time string formats to milliseconds.

Turn time string into milliseconds.

|参数名|类型|说明|
|-----|----|---|
|str   |string|String format|
|返回值|number|Milliseconds |

Turn milliseconds into time string.

|参数名|类型|说明|
|-----|----|---|
|num   |number|Milliseconds |
|返回值|string|String format|

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