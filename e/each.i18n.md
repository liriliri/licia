## CN

遍历集合中的所有元素，用每个元素当做参数调用 iteratee 函数。

|参数名|类型|说明|
|-----|----|---|
|obj|object array|目标集合|
|iteratee|function|调用函数|
|[ctx]|*|函数上下文|

```javascript
each({'a': 1, 'b': 2}, function (val, key) {});
```