## CN

序列化对象，保留类型信息。

|参数名|说明|
|-----|---|
|obj|源对象|
|options|序列化选项|
|返回值|序列化后的字符串|

可用选项：

|参数名|说明|
|-----|---|
|unenumerable=false|包含不可枚举值|
|symbol=false|包含 Symbol 键名|
|accessGetter=false|获取 getter 值|
|timeout=0|序列化超时时间|
|depth=0|遍历对象的最大深度|
|ignore|忽略的对象|

超时后，所有未序列化的值都会变成 “Timeout”。

### parse

将字符串反序列化回对象。

|参数名|说明|
|-----|---|
|obj|序列化后的字符串|
|返回值|目标对象|