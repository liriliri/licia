## CN

Indent each line in a string.

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to indent    |
|[char]|string|Character to prepend|
|[len] |number|Indent length       |
|返回值|string|Indented string     |

```javascript
indent('foo\nbar', ' ', 4); // -> 'foo\n    bar'
```