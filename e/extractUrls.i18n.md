## CN

从文本中提取 url。

|参数名|类型|说明|
|-----|----|---|
|str|string|文本|
|返回值|array|url 列表|

```javascript
var str = '[Official site: http://eustia.liriliri.io](http://eustia.liriliri.io)';
extractUrl(str); // -> ['http://eustia.liriliri.io']
```