## CN

Convert value to a string.

|参数名|类型|说明|
|-----|----|---|
|val   |*     |Value to convert|
|返回值|string|Resulted string |

```javascript
toStr(null); // -> ''
toStr(1); // -> '1'
toStr(false); // -> 'false'
toStr([1, 2, 3]); // -> '1,2,3'
```