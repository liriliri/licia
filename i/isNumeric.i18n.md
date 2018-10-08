## CN

Check if value is numeric.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check          |
|返回值|boolean|True if value is numeric|

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