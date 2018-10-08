## CN

Extract urls from plain text.

|参数名|类型|说明|
|-----|----|---|
|str   |string|Text to extract|
|返回值|array |Url list       |

```javascript
var str = '[Official site: http://eustia.liriliri.io](http://eustia.liriliri.io)';
extractUrl(str); // -> ['http://eustia.liriliri.io']
```