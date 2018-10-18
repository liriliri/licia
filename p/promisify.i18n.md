## CN

转换使用回调的异步函数，使其返回 Promise。

|参数名|类型|说明|
|-----|----|---|
|fn|function|源函数|
|multiArgs=false|boolean|回调是否有多个结果|
|返回值|boolean|目标函数|

如果 multiArgs 设为真，返回的 Promise 会将回调的结果合并成一个数组。

