## CN

移除集合中所有通过真值检测的元素，返回包含所有删除元素的数组。

与 filter 不同，该模块会改变原数组。

|参数名|类型|说明|
|-----|----|---|
|obj|array|要遍历的集合|
|predicate|function|真值检测函数|
|[ctx]|*|函数上下文|
|返回值|array|包含所有删除元素的数组|

```javascript
var arr = [1, 2, 3, 4, 5];
var evens = remove(arr, function (val) { return val % 2 === 0 });
console.log(arr); // -> [1, 3, 5]
console.log(evens); // -> [2, 4]
```