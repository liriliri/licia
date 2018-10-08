## CN

Check if value is a function.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check             |
|返回值|boolean|True if value is a function|

Generator function is also classified as true.

```javascript
isFn(function() {}); // -> true
isFn(function*() {}); // -> true
```