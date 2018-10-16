## CN

检查值是否是数字，包括数字字符串。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是数字，返回真|

```javascript
isNumeric(1); // -> true
isNumeric('1'); // -> true
isNumeric(Number.MAX_VALUE); // -> true
isNumeric(0144); // -> true
isNumeric(0xFF); // -> true
isNumeric(''); // -> false
isNumeric('1.1.1'); // -> false
isNumeric(NaN); // -> false
```