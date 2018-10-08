## CN

Checks if value is classified as a Integer.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check                       |
|返回值|boolean|True if value is correctly classified|

```javascript
isInt(5); // -> true
isInt(5.1); // -> false
isInt({}); // -> false
```