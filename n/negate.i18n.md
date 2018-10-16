## CN

创建一个将原函数结果取反的函数。

|参数名|类型|说明|
|-----|----|---|
|predicate|function|源函数|
|返回值|function|目标函数|

```javascript
function even(n) { return n % 2 === 0 }
filter([1, 2, 3, 4, 5, 6], negate(even)); // -> [1, 3, 5]
```