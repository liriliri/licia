## CN

执行异步 HTTP 请求。

|参数名|类型|说明|
|-----|----|---|
|options|object|Ajax 选项|

可用选项：

|参数名|类型|说明|
|-----|----|---|
|type|string|请求类型|
|url|string|请求地址|
|data|string object|请求数据|
|dataType=json|string|响应类型（json，xml）|
|contentType=application/x-www-form-urlencoded|string|请求内容类型|
|success|function|成功回调|
|error|function|失败回调|
|complete|function|结束回调|
|timeout|number|请求超时|

### get

type = GET 的快捷方式。

### post

type = POST 的快捷方式。

|参数名|类型|说明|
|-----|----|---|
|url|string|请求地址|
|[data]|string object|请求数据|
|success|function|成功回调|
|dataType|function|响应类型|

