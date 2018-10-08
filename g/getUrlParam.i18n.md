## CN

Get url param.

|参数名|类型|说明|
|-----|----|---|
|name        |string|Param name      |
|url=location|string|Url to get param|
|返回值      |string|Param value     |

```javascript
getUrlParam('test', 'http://example.com/?test=true'); // -> 'true'
```