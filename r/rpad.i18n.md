## CN

对字符串进行右填充。

|参数名|类型|说明|
|-----|----|---|
|str|string|源字符串|
|len|number|填充长度|
|chars|string|填充字符|
|返回值|string|目标字条串|

```javascript
rpad('a', 5); // -> 'a    '
rpad('a', 5, '-'); // -> 'a----'
rpad('abc', 3, '-'); // -> 'abc'
rpad('abc', 5, 'ab'); // -> 'abcab'
```