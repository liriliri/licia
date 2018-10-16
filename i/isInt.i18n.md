## CN

检查值是否是整数。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是整数，返回真|

```javascript
isInt(5); // -> true
isInt(5.1); // -> false
isInt({}); // -> false
```