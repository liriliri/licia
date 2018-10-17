## CN

清除字符串中的 ansi 颜色控制码。

|参数名|类型|说明|
|-----|----|---|
|str|string|源字符串|
|返回值|string|目标字符串|

```javascript
stripColor('\u001b[31mred\u001b[39m'); // -> 'red'
```