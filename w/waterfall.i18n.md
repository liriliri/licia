## CN

Run an array of functions in series.

|参数名|类型|说明|
|-----|----|---|
|tasks|array   |Array of functions     |
|[cb] |function|Callback once completed|

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