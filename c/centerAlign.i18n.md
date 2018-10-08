## CN

Center align text in a string.

|参数名|类型|说明|
|-----|----|---|
|str    |string array|String to align         |
|[width]|number      |Total width of each line|
|返回值 |string      |Center aligned string   |

```javascript
centerAlign('test', 8); // -> '  test'
centerAlign('test\nlines', 8); // -> '  test\n lines'
centerAlign(['test', 'lines'], 8); // -> '  test\n lines'
```