## CN

类似 decodeURIComponent 函数，只是输入不合法时不抛出错误并尽可能地对其进行解码。

|参数名|类型|说明|
|-----|----|---|
|str|string|要解码的字符串|
|返回值|string|解码后的字符串|

```javascript
decodeUriComponent('%%25%'); // -> '%%%'
decodeUriComponent('%E0%A4%A'); // -> '\xE0\xA4%A'
```