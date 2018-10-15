## CN

Memoize a given function by caching the computed result.

|参数名|类型|说明|
|-----|----|---|
|fn      |function|Function to have its output memoized|
|[hashFn]|function|Function to create cache key        |
|返回值  |function|New memoized function               |

```javascript
var fibonacci = memoize(function(n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
});
```