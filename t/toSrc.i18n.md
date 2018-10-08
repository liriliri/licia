## CN

Convert function to its source code.

|参数名|类型|说明|
|-----|----|---|
|fn    |function|Function to convert|
|返回值|string  |Source code        |

```javascript
toSrc(Math.min); // -> 'function min() { [native code] }'
toSrc(function () {}) // -> 'function () { }'
```