## CN

将不同命名式的字符串拆分成数组。

|参数名|类型|说明|
|-----|----|---|
|str|string|目标字符串|
|返回值|array|拆分成的数组|

```javascript
splitCase('foo-bar'); // -> ['foo', 'bar']
splitCase('foo bar'); // -> ['foo', 'bar']
splitCase('foo_bar'); // -> ['foo', 'bar']
splitCase('foo.bar'); // -> ['foo', 'bar']
splitCase('fooBar'); // -> ['foo', 'bar']
splitCase('foo-Bar'); // -> ['foo', 'bar']
```