## CN

Check if value is a typed array.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check                |
|返回值|boolean|True if value is a typed array|

```javascript
isTypedArr([]); // -> false
isTypedArr(new Unit8Array); // -> true
```