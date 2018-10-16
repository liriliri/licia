## CN

检查值是否是类 promise 对象。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是类 promise 对象，返回真|

```javascript
isPromise(new Promise(function () {})); // -> true
isPromise({}); // -> false
```