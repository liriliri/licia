## CN

Clamp number within the inclusive lower and upper bounds.

|参数名|类型|说明|
|-----|----|---|
|n      |number|Number to clamp|
|[lower]|number|Lower bound    |
|upper  |number|Upper bound    |
|返回值 |number|Clamped number |

```javascript
clamp(-10, -5, 5); // -> -5
clamp(10, -5, 5); // -> 5
clamp(2, -5, 5); // -> 2
clamp(10, 5); // -> 5
clamp(2, 5); // -> 2
```