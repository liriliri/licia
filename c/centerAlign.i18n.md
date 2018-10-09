## CN

字符串居中。

|参数名|类型|说明|
|-----|----|---|
|str|string array|源字符串|
|[width]|number|每行宽度|
|返回值|string|居中字符串|

```javascript
centerAlign('test', 8); // -> '  test'
centerAlign('test\nlines', 8); // -> '  test\n lines'
centerAlign(['test', 'lines'], 8); // -> '  test\n lines'
```