## CN

Convert value to an array.

|参数名|类型|说明|
|-----|----|---|
|val   |*    |Value to convert|
|返回值|array|Converted array |

```javascript
toArr({a: 1, b: 2}); // -> [{a: 1, b: 2}]
toArr('abc'); // -> ['abc']
toArr(1); // -> [1]
toArr(null); // -> []
```