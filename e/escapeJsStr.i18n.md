## CN

Escape string to be a valid JavaScript string literal between quotes.

http://www.ecma-international.org/ecma-262/5.1/#sec-7.8.4

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to escape|
|返回值|string|Escaped string  |

```javascript
escapeJsStr('\"\n'); // -> '\\"\\\\n'
```