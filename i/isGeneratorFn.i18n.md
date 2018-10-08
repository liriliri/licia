## CN

Check if value is a generator function.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check                       |
|返回值|boolean|True if value is a generator function|

```javascript
isGeneratorFn(function * () {}); // -> true;
isGeneratorFn(function () {}); // -> false;
```