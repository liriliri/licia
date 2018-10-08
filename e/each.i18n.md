## CN

Iterate over elements of collection and invokes iteratee for each element.

|参数名|类型|说明|
|-----|----|---|
|obj     |object array|Collection to iterate over    |
|iteratee|function    |Function invoked per iteration|
|[ctx]   |*           |Function context              |

```javascript
each({'a': 1, 'b': 2}, function (val, key) {});
```