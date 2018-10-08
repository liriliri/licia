## CN

Check if browser supports a given CSS feature.

|参数名|类型|说明|
|-----|----|---|
|name  |string |Css property name |
|[val] |string |Css property value|
|return|boolean|True if supports  |

```javascript
cssSupports('display', 'flex'); // -> true
cssSupports('display', 'invalid'); // -> false
cssSupports('text-decoration-line', 'underline'); // -> true
cssSupports('grid'); // -> true
cssSupports('invalid'); // -> false
```