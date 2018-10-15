## CN

Run function in a try catch.

|参数名|类型|说明|
|-----|----|---|
|fn  |function|Function to try catch|
|[cb]|function|Callback             |

```javascript
tryIt(function () {
    // Do something that might cause an error.
}, function (err, result) {
    if (err) console.log(err);
});
```