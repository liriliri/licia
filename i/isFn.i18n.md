## CN

检查值是否是函数。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是函数，返回真|

Generator function is also classified as true.

```javascript
isFn(function() {}); // -> true
isFn(function*() {}); // -> true
```