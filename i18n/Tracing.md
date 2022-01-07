## CN

创建 chrome trace 格式数据。

### constructor

|参数名|说明|
|-----|---|
|options|录制选项|

可用选项：

|参数名|说明|
|-----|---|
|pid|进程 id|
|tid|线程 id|
|processName|进程名称|
|threadName|线程名称|

### start

开始录制。

|参数名|说明|
|-----|---|
|cat|开启类别|

### stop

停止录制并获取事件列表。

### begin

记录开始事件。

|参数名|说明|
|-----|---|
|cat|事件类别|
|name|事件名称|
|args|参数|

### end

记录结束事件。

### asyncBegin 

记录异步开始事件。

### asyncEnd

记录异步结束事件。

### instant

记录 instant 事件。

### id

获取一个唯一 id。