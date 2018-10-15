## CN

Iterates over elements of collection, returning an array of all the values that pass a truth test.

|参数名|类型|说明|
|-----|----|---|
|obj      |array   |Collection to iterate over             |
|predicate|function|Function invoked per iteration         |
|[ctx]    |*       |Predicate context                      |
|返回值   |array   |Array of all values that pass predicate|

```javascript
filter([1, 2, 3, 4, 5], function (val) {
    return val % 2 === 0;
}); // -> [2, 4]
```