## CN

Convert string to "snakeCase".

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to convert |
|返回值|string|Snake cased string|

```javascript
snakeCase('fooBar'); // -> foo_bar
snakeCase('foo bar'); // -> foo_bar
snakeCase('foo.bar'); // -> foo_bar
```