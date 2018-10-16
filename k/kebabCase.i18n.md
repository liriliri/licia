## CN

将字符串转换为短横线式。

|参数名|类型|说明|
|-----|----|---|
|str|string|源字符串|
|返回值|string|短横线式字符串|

```javascript
kebabCase('fooBar'); // -> foo-bar
kebabCase('foo bar'); // -> foo-bar
kebabCase('foo_bar'); // -> foo-bar
kebabCase('foo.bar'); // -> foo-bar
```