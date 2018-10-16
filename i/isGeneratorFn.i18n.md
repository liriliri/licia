## CN

检查值是否是 Generator 函数。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是 Generator 函数，返回真|

```javascript
isGeneratorFn(function * () {}); // -> true;
isGeneratorFn(function () {}); // -> false;
```