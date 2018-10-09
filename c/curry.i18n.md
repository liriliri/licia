## CN

函数柯里化。

|参数名|类型|说明|
|-----|----|---|
|fn|function|源函数|
|返回值|function|目标函数|

```javascript
var add = curry(function (a, b) { return a + b });
var add1 = add(1);
add1(2); // -> 3
```
