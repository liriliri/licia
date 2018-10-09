## CN

将字符串转换为驼峰式。

|参数名|类型|说明|
|-----|----|---|
|str|string|源字符串|
|返回值|string|驼峰式字符串|

```javascript
camelCase('foo-bar'); // -> fooBar
camelCase('foo bar'); // -> fooBar
camelCase('foo_bar'); // -> fooBar
camelCase('foo.bar'); // -> fooBar
```
