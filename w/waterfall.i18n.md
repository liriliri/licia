## CN

按顺序执行函数序列。

|参数名|类型|说明|
|-----|----|---|
|tasks|array|函数序列|
|[cb]|function|结束回调|

```javascript
waterfall([
    function (cb) {
        cb(null, 'one');
    },
    function (arg1, cb) {
        // arg1 -> 'one'
        cb(null, 'done');
    }
], function (err, result) {
    // result -> 'done'
});
```