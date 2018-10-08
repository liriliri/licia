## CN

Convert string to "pascalCase".

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to convert  |
|返回值|string|Pascal cased string|

```javascript
pascalCase('fooBar'); // -> FooBar
pascalCase('foo bar'); // -> FooBar
pascalCase('foo_bar'); // -> FooBar
pascalCase('foo.bar'); // -> FooBar
```