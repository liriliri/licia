## CN

Create a function that negates the result of the predicate function.

|参数名|类型|说明|
|-----|----|---|
|predicate|function|Predicate to negate|
|返回值   |function|New function       |

```javascript
function even(n) { return n % 2 === 0 }
filter([1, 2, 3, 4, 5, 6], negate(even)); // -> [1, 3, 5]
```