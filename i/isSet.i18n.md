## CN

Check if value is a Set object.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check        |
|返回值|boolean|True if value is a Set|

```javascript
isSet(new Set()); // -> true
isSet(new WeakSet()); // -> false
```