## CN

Partially apply a function by filling in given arguments.

|参数名|类型|说明|
|-----|----|---|
|fn         |function|Function to partially apply arguments to|
|...partials|*       |Arguments to be partially applied       |
|返回值     |function|New partially applied function          |

```javascript
var sub5 = partial(function (a, b) { return b - a }, 5);
sub(20); // -> 15
```