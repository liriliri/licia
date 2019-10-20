## CN

序列化对象，保留类型信息。

|参数名|类型|说明|
|-----|----|---|
|obj|*|目标对象|
|[options]|object|序列化选项|
|返回值|string|序列化后的字符串|

可用选项：

|参数名|类型|说明|
|-----|----|---|
|unenumerable=false|boolean|包含不可枚举值|
|symbol=false|boolean|包含 Symbol 键名|
|accessGetter=false|boolean|获取 getter 值|
|timeout=0|number|序列化超时时间|
|depth=0|number|遍历对象的最大深度|
|[ignore]|array|忽略的对象|

超时后，所有未序列化的值都会变成 “Timeout”。