## CN

将函数运行在 worker 线程中。

|参数名|类型|说明|
|-----|----|---|
|fn|function|源函数|
|返回值|function|目标函数|

```javascript
var worker = workerize(function (a, b) {
    return a + b;
});
worker(1, 2).then(function (value) {
    console.log(value); // -> 3
});
```