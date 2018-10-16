## CN

找到集合中第一个通过真值检测的元素。

|参数名|类型|说明|
|-----|----|---|
|obj|array object|目标集合|
|predicate|function|真值检测函数|
|[ctx]|*|函数上下文|
|返回值|*|第一个通过的元素|

```javascript
find([{
    name: 'john',
    age: 24
}, {
    name: 'jane',
    age: 23
}], function (val) {
    return val.age === 23;
}); // -> {name: 'jane', age: 23}
```