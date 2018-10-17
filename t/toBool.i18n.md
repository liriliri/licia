## CN

将任意值转换为布尔值。

|参数名|类型|说明|
|-----|----|---|
|val|*|要转换的值|
|返回值|boolean|转换后的布尔值|

```javascript
toBool(true); // -> true
toBool(null); // -> false
toBool(1); // -> true
toBool(0); // -> false
toBool('0'); // -> false
toBool('1'); // -> true
toBool('false'); // -> false
```