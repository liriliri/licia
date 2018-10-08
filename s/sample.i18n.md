## CN

Sample random values from a collection.

|参数名|类型|说明|
|-----|----|---|
|obj   |array object|Collection to sample  |
|n     |number      |Number of values      |
|返回值|array       |Array of sample values|

```javascript
sample([2, 3, 1], 2); // -> [2, 3]
sample({a: 1, b: 2, c: 3}, 1); // -> [2]
```