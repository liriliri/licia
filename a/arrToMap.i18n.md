## CN

将字符串列表转换为映射。

|参数名|类型|说明|
|-----|----|---|
|arr|array|字符串列表|
|val=true|*|键值|
|返回值|object|映射|

```javascript
var needPx = arrToMap([
    'column-count', 'columns', 'font-weight', 'line-weight', 'opacity', 'z-index', 'zoom'
]);

if (needPx[key]) val += 'px';
```
