## CN

检查字符串是否是有效的 Data Url。

|参数名|类型|说明|
|-----|----|---|
|str|string|要检查的字符串|
|返回值|boolean|如果是有效的 Data Url，返回真|

```javascript
isDataUrl('http://eustia.liriliri.io'); // -> false
isDataUrl('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D'); // -> true
```