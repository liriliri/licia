## CN

Simple url manipulator.

### constructor

|参数名|类型|说明|
|-----|----|---|
|url=location|string|Url string|

### setQuery

Set query value.

|参数名|类型|说明|
|-----|----|---|
|name  |string|Query name |
|value |string|Query value|
|返回值|Url   |this       |

|参数名|类型|说明|
|-----|----|---|
|names |object|query object|
|返回值|Url   |this        |

### rmQuery

Remove query value.

|Name  |Type        |Desc      |
|------|------------|----------|
|name  |string array|Query name|
|返回值|Url         |this      |

### parse

[static] Parse url into an object.

|Name  |Type  |Desc      |
|------|------|----------|
|url   |string|Url string|
|返回值|object|Url object|

### stringify

[static] Stringify url object into a string.

|Name  |Type  |Desc      |
|------|------|----------|
|url   |object|Url object|
|返回值|string|Url string|

An url object contains the following properties:

|Name    |Desc                                                                                  |
|--------|--------------------------------------------------------------------------------------|
|protocol|The protocol scheme of the URL (e.g. http:)                                           |
|slashes |A boolean which indicates whether the protocol is followed by two forward slashes (//)|
|auth    |Authentication information portion (e.g. username:password)                           |
|hostname|Host name without port number                                                         |
|port    |Optional port number                                                                  |
|pathname|URL path                                                                              |
|query   |Parsed object containing query string                                                 |
|hash    |The "fragment" portion of the URL including the pound-sign (#)                        |

```javascript
var url = new Url('http://example.com:8080?eruda=true');
console.log(url.port); // -> '8080'
url.query.foo = 'bar';
url.rmQuery('eruda');
utl.toString(); // -> 'http://example.com:8080/?foo=bar'
```