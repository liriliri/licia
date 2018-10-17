## CN

删除字符串两边指定字符或空格。

|参数名|类型|说明|
|-----|----|---|
|str|string|源字符串|
|chars|string array|删除字符|
|返回值|string|目标字符串|

```javascript
trim(' abc  '); // -> 'abc'
trim('_abc_', '_'); // -> 'abc'
trim('_abc_', ['a', 'c', '_']); // -> 'b'
```