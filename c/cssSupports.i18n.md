## CN

检查浏览器是否支持某项 CSS 特性。

|参数名|类型|说明|
|-----|----|---|
|name|string|Css 属性名|
|[val]|string|Css 属性值|
|返回值|boolean|如果支持，返回真|

```javascript
cssSupports('display', 'flex'); // -> true
cssSupports('display', 'invalid'); // -> false
cssSupports('text-decoration-line', 'underline'); // -> true
cssSupports('grid'); // -> true
cssSupports('invalid'); // -> false
```