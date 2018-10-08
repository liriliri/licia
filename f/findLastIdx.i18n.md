## CN

Return the last index where the predicate truth test passes.

|参数名|类型|说明|
|-----|----|---|
|arr      |array   |Array to search               |
|predicate|function|Function invoked per iteration|
|返回值   |number  |Last index of matched element |

```javascript
findLastIdx([{
    name: 'john',
    age: 24
}, {
    name: 'jane',
    age: 23
}, {
    name: 'kitty',
    age: 24
}], function (val)
{
    return val.age === 24;
}); // -> 2
```