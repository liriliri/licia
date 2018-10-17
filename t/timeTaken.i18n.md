## CN

获取函数的执行时间。

|参数名|类型|说明|
|-----|----|---|
|fn|function|要计算执行时间的函数|
|返回值|number|执行时间，单位毫秒|

```javascript
timeTaken(function () {
    // Do something.
}); // -> Time taken to execute given function.
```