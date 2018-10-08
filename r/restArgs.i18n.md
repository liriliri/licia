## CN

This accumulates the arguments passed into an array, after a given index.

|参数名|类型|说明|
|-----|----|---|
|function  |function|Function that needs rest parameters    |
|startIndex|number  |The start index to accumulates         |
|返回值    |function|Generated function with rest parameters|

```javascript
var paramArr = restArgs(function (rest) { return rest });
paramArr(1, 2, 3, 4); // -> [1, 2, 3, 4]
```