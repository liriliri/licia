## CN

Turn a list of values into a single value.

|参数名|类型|说明|
|-----|----|---|
|obj                |object array|Collection to iterate over    |
|[iteratee=identity]|function    |Function invoked per iteration|
|[initial]          |*           |Initial value                 |
|[ctx]              |*           |Function context              |
|返回值             |*           |Accumulated value             |

```javascript
reduce([1, 2, 3], function (sum, n) { return sum + n }, 0); // -> 6
```