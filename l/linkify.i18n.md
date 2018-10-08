## CN

Hyperlink urls in a string.

|参数名|类型|说明|
|-----|----|---|
|str        |string  |String to hyperlink      |
|[hyperlink]|function|Function to hyperlink url|
|返回值     |string  |Result string            |

```javascript
var str = 'Official site: http://eustia.liriliri.io'
linkify(str); // -> 'Official site: <a href="http://eustia.liriliri.io">http://eustia.liriliri.io</a>'
linkify(str, function (url)
{
    return '<a href="' + url + '" target="_blank">' + url + '</a>';
});
```