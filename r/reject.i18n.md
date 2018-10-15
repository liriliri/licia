## CN

Opposite of filter.

|参数名|类型|说明|
|-----|----|---|
|obj      |array   |Collection to iterate over             |
|predicate|function|Function invoked per iteration         |
|[ctx]    |*       |Predicate context                      |
|返回值   |array   |Array of all values that pass predicate|

```javascript
reject([1, 2, 3, 4, 5], function (val) {
    return val % 2 === 0;
}); // -> [1, 3, 5]
```