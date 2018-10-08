## CN

Convert string to "kebabCase".

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to convert |
|返回值|string|Kebab cased string|

```javascript
kebabCase('fooBar'); // -> foo-bar
kebabCase('foo bar'); // -> foo-bar
kebabCase('foo_bar'); // -> foo-bar
kebabCase('foo.bar'); // -> foo-bar
```