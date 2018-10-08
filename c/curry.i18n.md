## CN

Function currying.

|参数名|类型|说明|
|-----|----|---|
|fn    |function|Function to curry   |
|返回值|function|New curried function|

```javascript
var add = curry(function (a, b) { return a + b });
var add1 = add(1);
add1(2); // -> 3
```
