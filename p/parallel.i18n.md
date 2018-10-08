## CN

Run an array of functions in parallel.

|参数名|类型|说明|
|-----|----|---|
|tasks|array   |Array of functions     |
|[cb] |function|Callback once completed|

```javascript
parallel([
    function(cb)
    {
        setTimeout(function () { cb(null, 'one') }, 200);
    },
    function(cb)
    {
        setTimeout(function () { cb(null, 'two') }, 100);
    }
], function (err, results)
{
    // results -> ['one', 'two']
});
```