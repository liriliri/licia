## CN

Create an array of values by running each element in collection through iteratee.

|参数名|类型|说明|
|-----|----|---|
|obj|array object|Collection to iterate over|
|iteratee|function|Function invoked per iteration|
|[ctx]|*|Function context|
|返回值|array|New mapped array|

```javascript
map([4, 8], function (n) { return n * n; }); // -> [16, 64]
```