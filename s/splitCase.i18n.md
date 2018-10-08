## CN

Split different string case to an array.

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to split|
|返回值|array |Result array   |

```javascript
splitCase('foo-bar'); // -> ['foo', 'bar']
splitCase('foo bar'); // -> ['foo', 'bar']
splitCase('foo_bar'); // -> ['foo', 'bar']
splitCase('foo.bar'); // -> ['foo', 'bar']
splitCase('fooBar'); // -> ['foo', 'bar']
splitCase('foo-Bar'); // -> ['foo', 'bar']
```