## CN

ini 文件解析器。

### parse

将 ini 文件转换为 js 对象。

|参数名|类型|说明|
|-----|----|---|
|ini|string|ini 文件|
|返回值|object|js 对象|

### stringify

将 js 对象序列化成 ini 文件格式。

|参数名|类型|说明|
|-----|----|---|
|obj|*|要序列化的对象|
|[options]|object|序列化选项|
|返回值|string|ini 文件|

选项：

|参数名|类型|说明|
|-----|----|---|
|[section]|string|顶部名称|
|whitespace=false|boolean|是否在 = 周围添加空格|