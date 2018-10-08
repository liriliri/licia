## CN

Check if a string is a valid data url.

|参数名|类型|说明|
|-----|----|---|
|str   |string |String to check             |
|返回值|boolean|True if string is a data url|

```javascript
isDataUrl('http://eustia.liriliri.io'); // -> false
isDataUrl('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D'); // -> true
```