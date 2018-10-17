## CN

将函数转换为源码。

|参数名|类型|说明|
|-----|----|---|
|fn|function|目标函数|
|返回值|string|源码|

```javascript
toSrc(Math.min); // -> 'function min() { [native code] }'
toSrc(function () {}) // -> 'function () { }'
```