## CN

Check if predicate return truthy for any element.

|参数名|类型|说明|
|-----|----|---|
|obj      |array object|Collection to iterate over                    |
|predicate|function    |Function to invoked per iteration             |
|ctx      |*           |Predicate context                             |
|返回值   |boolean     |True if any element passes the predicate check|

```javascript
some([2, 5], function (val)
{
    return val % 2 === 0;
}); // -> true
```