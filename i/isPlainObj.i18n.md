## CN

Check if value is an object created by Object constructor.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check                 |
|返回值|boolean|True if value is a plain object|

```javascript
isPlainObj({}); // -> true
isPlainObj([]); // -> false
isPlainObj(function () {}); // -> false
```