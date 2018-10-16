## CN

同时执行多个函数。

|参数名|类型|说明|
|-----|----|---|
|tasks|array|函数数组|
|[cb]|function|结束回调|

```javascript
parallel([
    function(cb) {
        setTimeout(function () { cb(null, 'one') }, 200);
    },
    function(cb) {
        setTimeout(function () { cb(null, 'two') }, 100);
    }
], function (err, results) {
    // results -> ['one', 'two']
});
```