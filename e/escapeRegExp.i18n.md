## CN

Escape special chars to be used as literals in RegExp constructors.

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to escape|
|返回值|string|Escaped string  |

```javascript
escapeRegExp('[licia]'); // -> '\\[licia\\]'
```