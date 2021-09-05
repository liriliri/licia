## CN

JavaScript 基准测试。

### constructor

|参数名|说明|
|-----|---|
|fn|要测试的代码|
|options|测试选项|

可用选项：

|参数名|说明|
|-----|---|
|minTime=50|用于减少误差的时间|
|maxTime=5000|测试运行最大时间|
|minSamples=5|最小样本数量|
|delay=5|测试周期间隔|
|name|测试名称|

### run

运行基准测试，返回 promise。

### all

[static] 运行多个基准测试。