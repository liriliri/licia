## CN

将给定序号后的参数合并成一个数组。

|参数名|类型|说明|
|-----|----|---|
|function|function|源函数|
|[startIndex]|number|合并参数起始位置|
|返回值|function|目标函数|

```javascript
var paramArr = restArgs(function (rest) { return rest });
paramArr(1, 2, 3, 4); // -> [1, 2, 3, 4]
```