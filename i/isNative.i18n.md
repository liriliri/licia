## CN

Check if value is a native function.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check                    |
|返回值|boolean|True if value is a native function|

```javascript
isNative(function () {}); // -> false
isNative(Math.min); // -> true
```