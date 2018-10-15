## CN

Next tick for both node and browser.

|参数名|类型|说明|
|-----|----|---|
|cb  |function|Function to call|

Use process.nextTick if available.

Otherwise setImmediate or setTimeout is used as fallback.

```javascript
nextTick(function () {
    // Do something...
});
```