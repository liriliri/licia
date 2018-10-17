## CN

简单 url 操作库。

### constructor

|参数名|类型|说明|
|-----|----|---|
|url=location|string|url 地址|

### setQuery

设置 query 值。

|参数名|类型|说明|
|-----|----|---|
|name|string|query 名|
|value|string|query 值|
|返回值|Url|this|

|参数名|类型|说明|
|-----|----|---|
|names|object|query 对象|
|返回值|Url|this|

### rmQuery

移除 query 值。

|参数名|类型|说明|
|-----|----|---|
|name|string array|query 名|
|返回值|Url|this|

### parse

【静态】将 url 解析成对象。

|参数名|类型|说明|
|-----|----|---|
|url|string|url 地址|
|返回值|object|url 对象|

### stringify

【静态】将 url 对象转换为 url 地址。

|参数名|类型|说明|
|-----|----|---|
|url|object|url 对象|
|返回值|string|url 地址|

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

```javascript
var url = new Url('http://example.com:8080?eruda=true');
console.log(url.port); // -> '8080'
url.query.foo = 'bar';
url.rmQuery('eruda');
utl.toString(); // -> 'http://example.com:8080/?foo=bar'
```