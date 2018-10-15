## CN

Check if predicate return truthy for all elements.

|参数名|类型|说明|
|-----|----|---|
|obj      |array object|Collection to iterate over                   |
|predicate|function    |Function invoked per iteration               |
|ctx      |*           |Predicate context                            |
|返回值   |boolean     |True if all elements pass the predicate check|

```javascript
every([2, 4], function (val) {
    return val % 2 === 0;
}); // -> false
```