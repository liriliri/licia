## CN

Find the first value that passes a truth test in a collection.

|参数名|类型|说明|
|-----|----|---|
|obj      |array object|Collection to iterate over       |
|predicate|function    |Function invoked per iteration   |
|[ctx]    |*           |Predicate context                |
|返回值   |*           |First value that passes predicate|

```javascript
find([{
    name: 'john',
    age: 24
}, {
    name: 'jane',
    age: 23
}], function (val)
{
    return val.age === 23;
}); // -> {name: 'jane', age: 23}
```