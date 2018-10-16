## CN

将文本中的 url 地址转换为超链接。

|参数名|类型|说明|
|-----|----|---|
|str|string|源字符串|
|[hyperlink]|function|转换超链接函数|
|返回值|string|目标字符串|

```javascript
var str = 'Official site: http://eustia.liriliri.io'
linkify(str); // -> 'Official site: <a href="http://eustia.liriliri.io">http://eustia.liriliri.io</a>'
linkify(str, function (url) {
    return '<a href="' + url + '" target="_blank">' + url + '</a>';
});
```