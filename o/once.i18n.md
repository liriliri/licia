## CN

Create a function that invokes once.

|参数名|类型|说明|
|-----|----|---|
|fn    |function|Function to restrict   |
|返回值|function|New restricted function|

```javascript
function init() {};
var initOnce = once(init);
initOnce();
initOnce(); // -> init is invoked once
```