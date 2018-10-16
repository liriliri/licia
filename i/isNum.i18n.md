## CN

检测值是否是数字类型。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是数字，返回真|

```javascript
isNum(5); // -> true
isNum(5.1); // -> true
isNum({}); // -> false
```