## CN

Strip ansi color codes from a string.

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to strip|
|返回值|string|Resulted string|

```javascript
stripColor('\u001b[31mred\u001b[39m'); // -> 'red'
```