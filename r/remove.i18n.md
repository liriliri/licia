## CN

Remove all elements from array that predicate returns truthy for and return an array of the removed elements.

Unlike filter, this method mutates array.

|参数名|类型|说明|
|-----|----|---|
|obj      |array   |Collection to iterate over          |
|predicate|function|Function invoked per iteration      |
|[ctx]    |*       |Predicate context                   |
|返回值   |array   |Array of all values that are removed|

```javascript
var arr = [1, 2, 3, 4, 5];
var evens = remove(arr, function (val) { return val % 2 === 0 });
console.log(arr); // -> [1, 3, 5]
console.log(evens); // -> [2, 4]
```