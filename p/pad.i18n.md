## CN

对字符串进行左右填充。

|参数名|类型|说明|
|-----|----|---|
|str|string|源字符串|
|len|number|填充长度|
|chars|string|填充字符串|
|返回值|string|目标字符串|

```javascript
pad('a', 5); // -> '  a  '
pad('a', 5, '-'); // -> '--a--'
pad('abc', 3, '-'); // -> 'abc'
pad('abc', 5, 'ab'); // -> 'babca'
pad('ab', 5, 'ab'); // -> 'ababa'
```