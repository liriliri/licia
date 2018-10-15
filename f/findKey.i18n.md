## CN

Return the first key where the predicate truth test passes.

|参数名|类型|说明|
|-----|----|---|
|obj      |object  |Object to search              |
|predicate|function|Function invoked per iteration|
|[ctx]    |*       |Predicate context             |
|返回值   |string  |Key of matched element        |

```javascript
findKey({a: 1, b: 2}, function (val) {
    return val === 1;
}); // -> a
```