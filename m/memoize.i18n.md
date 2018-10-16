## CN

缓存函数计算结果。

|参数名|类型|说明|
|-----|----|---|
|fn|function|源函数|
|[hashFn]|function|计算缓存键名函数|
|返回值|function|目标函数|

```javascript
var fibonacci = memoize(function(n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
});
```