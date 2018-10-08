## CN

Convert string to "camelCase".

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to convert |
|return|string|Camel cased string|

```javascript
camelCase('foo-bar'); // -> fooBar
camelCase('foo bar'); // -> fooBar
camelCase('foo_bar'); // -> fooBar
camelCase('foo.bar'); // -> fooBar
```
