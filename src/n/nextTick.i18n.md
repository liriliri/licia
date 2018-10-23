## CN

能够同时运行在 node 和浏览器端的 next tick 实现。

|参数名|类型|说明|
|-----|----|---|
|cb|function|调用函数|

如果支持 process.nextTick，则调用它，否则使用 setImmediate 或 setTimeout 进行兼容。

