## CN

Check if value looks like a promise.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check                    |
|返回值|boolean|True if value looks like a promise|

```javascript
isPromise(new Promise(function () {})); // -> true
isPromise({}); // -> false
```