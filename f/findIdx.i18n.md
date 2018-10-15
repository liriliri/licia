## CN

Return the first index where the predicate truth test passes.

|参数名|类型|说明|
|-----|----|---|
|arr      |array   |Array to search               |
|predicate|function|Function invoked per iteration|
|返回值   |number  |Index of matched element      |

```javascript
findIdx([{
    name: 'john',
    age: 24
}, {
    name: 'jane',
    age: 23
}], function (val) {
    return val.age === 23;
}); // -> 1
```