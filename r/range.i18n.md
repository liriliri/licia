## CN

Create flexibly-numbered lists of integers.

|参数名|类型|说明|
|-----|----|---|
|[start]|number|Start of the range                |
|end    |number|End of the range                  |
|step=1 |number|Value to increment or decrement by|

```javascript
range(5); // -> [0, 1, 2, 3, 4]
range(0, 5, 2) // -> [0, 2, 4]
```