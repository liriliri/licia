## CN

类似 filter，但结果相反。

|参数名|类型|说明|
|-----|----|---|
|obj|array|要遍历的集合|
|predicate|function|真值检测函数|
|[ctx]|*|函数上下文|
|返回值|array|包含所有未通过真值检测元素的数组|

```javascript
reject([1, 2, 3, 4, 5], function (val) {
    return val % 2 === 0;
}); // -> [1, 3, 5]
```