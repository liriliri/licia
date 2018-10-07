## CN

创建一个函数，只能调用少于 n 次。

|参数名|类型|说明|
|-----|----|---|
|n|number|调用次数|
|fn|function|源函数|
|返回值|function|输出函数|

超过 n 次后再次调用函数将直接返回最后一次函数的调用结果。

```javascript
$(element).on('click', before(5, function() {}));
// -> allow function to be call 4 times at last.
```