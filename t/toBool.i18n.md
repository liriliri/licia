## CN

Convert value to a boolean.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to convert |
|返回值|boolean|Converted boolean|

```javascript
toBool(true); // -> true
toBool(null); // -> false
toBool(1); // -> true
toBool(0); // -> false
toBool('0'); // -> false
toBool('1'); // -> true
toBool('false'); // -> false
```