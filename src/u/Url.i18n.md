## CN

简单 url 操作库。

### constructor

|参数名|说明|
|-----|---|
|url=location|url 地址|

### setQuery

设置 query 值。

|参数名|说明|
|-----|---|
|name|query 名|
|value|query 值|
|返回值|this|

|参数名|说明|
|-----|---|
|query|query 对象|
|返回值|this|

### rmQuery

移除 query 值。

|参数名|说明|
|-----|---|
|name|query 名|
|返回值|this|

### parse

【静态】将 url 解析成对象。

|参数名|说明|
|-----|---|
|url|url 地址|
|返回值|url 对象|

### stringify

【静态】将 url 对象转换为 url 地址。

|参数名|说明|
|-----|---|
|url|url 对象|
|返回值|url 地址|

url 对象包含以下属性值：

|属性名|说明|
|-----|----|
|protocol|协议名，（如 http:）|
|slashes|协议名后是否有双斜杠|
|auth|身份验证（例如 用户名:密码）|
|hostname|Host 名，不带端口号|
|port|端口号|
|pathname|URL 路径|
|query|query 对象|
|hash|URL # 字符后边的部分，# 包含在内|

