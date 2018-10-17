## CN

清除字符串中的 ansi 控制码。

|参数名|类型|说明|
|-----|----|---|
|str|string|源字符串|
|返回值|string|目标字符串|

```javascript
stripAnsi('\u001b[4mcake\u001b[0m'); // -> 'cake'
```