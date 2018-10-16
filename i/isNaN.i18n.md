## CN

检测值是否是 NaN。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是 NaN，返回真|

跟全局 isNaN 不同的是，Undefined 不是 NaN。

```javascript
isNaN(0); // -> false
isNaN(NaN); // -> true
```