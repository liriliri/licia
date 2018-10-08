## CN

Check if value is an NaN.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check         |
|返回值|boolean|True if value is an NaN|

Undefined is not an NaN, different from global isNaN function.

```javascript
isNaN(0); // -> false
isNaN(NaN); // -> true
```