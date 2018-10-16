## CN

遍历集合中的每个元素，返回所有通过真值检测的元素组成的数组。

|参数名|类型|说明|
|-----|----|---|
|obj|array|要遍历的集合|
|predicate|function|真值检测函数|
|[ctx]|*|函数上下文|
|返回值|array|包含所有通过真值检测元素的数组|

```javascript
filter([1, 2, 3, 4, 5], function (val) {
    return val % 2 === 0;
}); // -> [2, 4]
```