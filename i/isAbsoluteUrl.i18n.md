## CN

Check if an url is absolute.

|参数名|类型|说明|
|-----|----|---|
|url   |string |Url to check           |
|返回值|boolean|True if url is absolute|

```javascript
isAbsoluteUrl('http://www.surunzi.com'); // -> true
isAbsoluteUrl('//www.surunzi.com'); // -> false
isAbsoluteUrl('surunzi.com'); // -> false
```