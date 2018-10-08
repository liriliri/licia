## CN

Strip ansi codes from a string.

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to strip|
|返回值|string|Resulted string|

```javascript
stripAnsi('\u001b[4mcake\u001b[0m'); // -> 'cake'
```