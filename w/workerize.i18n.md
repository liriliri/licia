## CN

Move a stand-alone function to a worker thread.

|参数名|类型|说明|
|-----|----|---|
|fn    |function|Function to turn   |
|返回值|function|Workerized Function|

```javascript
var worker = workerize(function (a, b) {
    return a + b;
});
worker(1, 2).then(function (value) {
    console.log(value); // -> 3
});
```