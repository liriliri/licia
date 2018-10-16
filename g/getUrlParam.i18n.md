## CN

获取 url 参数值。

|参数名|类型|说明|
|-----|----|---|
|name|string|参数名|
|url=location|string|目标 url|
|返回值|string|参数值|

```javascript
getUrlParam('test', 'http://example.com/?test=true'); // -> 'true'
```