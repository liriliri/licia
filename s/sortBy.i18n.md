## CN

遍历集合中的元素，将其作为参数调用函数，并以得到的结果为依据对数组进行排序。

|参数名|类型|说明|
|-----|----|---|
|arr|object array|源集合|
|[iteratee=identity]|function|排序依据生成函数|
|[ctx]|*|函数上下文|
|返回值|array|排序后的数组|

```javascript
sortBy([1, 2, 3, 4, 5, 6], function (num) {
    return Math.sin(num);
}); // -> [5, 4, 6, 3, 1, 2]
```