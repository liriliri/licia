## CN

将任意值转换为数组。

|参数名|类型|说明|
|-----|----|---|
|val|*|要转换的值|
|返回值|array|转换后的数组|

```javascript
toArr({a: 1, b: 2}); // -> [{a: 1, b: 2}]
toArr('abc'); // -> ['abc']
toArr(1); // -> [1]
toArr(null); // -> []
```