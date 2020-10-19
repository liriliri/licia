## CN

WebSocket 类的简单包装。

继续自 Emitter 类。

### constructor

|参数名|说明|
|-----|---|
|url|WebSocket 地址|
|options|连接选项|

可用选项：

|参数名|说明|
|-----|---|
|protocols|协议|
|reconnect=true|是否尝试重新连接|

### send

发送数据。

|参数名|说明|
|-----|---|
|message|要发送的数据|

### close

关闭 WebSocket 连接。

|参数名|说明|
|-----|---|
|code|状态码|
|reason|关闭原因|

### connect

连接 WebSocket，初始化时就会被调用。