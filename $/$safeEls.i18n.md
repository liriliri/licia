## CN

将值转换为数组，如果值为字符串，使用 querySelector 获取元素集。

|参数名|类型|说明|
|-----|----|---|
|value |element array string|要转换的值|
|return|array|元素集|

```javascript
$safeEls('.test'); // -> Array of elements with test class
```