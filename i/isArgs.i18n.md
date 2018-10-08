## CN

Check if value is classified as an arguments object.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check                      |
|返回值|boolean|True if value is an arguments object|

```javascript
(function () {
    isArgs(arguments); // -> true
})();
```