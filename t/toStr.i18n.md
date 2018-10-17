## CN

将任意值转换为字符串。

|参数名|类型|说明|
|-----|----|---|
|val|*|要转换的值|
|返回值|string|转换后的字符串|

```javascript
toStr(null); // -> ''
toStr(1); // -> '1'
toStr(false); // -> 'false'
toStr([1, 2, 3]); // -> '1,2,3'
```