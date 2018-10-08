## CN

Check if value is classified as a Number primitive or object.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check                       |
|返回值|boolean|True if value is correctly classified|

```javascript
isNum(5); // -> true
isNum(5.1); // -> true
isNum({}); // -> false
```