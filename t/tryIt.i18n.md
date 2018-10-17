## CN

在 try catch 块中运行函数。

|参数名|类型|说明|
|-----|----|---|
|fn|function|目标函数|
|[cb]|function|回调|

```javascript
tryIt(function () {
    // Do something that might cause an error.
}, function (err, result) {
    if (err) console.log(err);
});
```