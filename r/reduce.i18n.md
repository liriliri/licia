## CN

合并多个值成一个值。

|参数名|类型|说明|
|-----|----|---|
|obj|object array|目标集合|
|iteratee=identity|function|合并函数|
|[initial]|*|初始值|
|[ctx]|*|函数上下文|
|返回值|*|合并值|

```javascript
reduce([1, 2, 3], function (sum, n) { return sum + n }, 0); // -> 6
```