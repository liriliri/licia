## CN

Return an array of elements sorted in ascending order by results of running each element through iteratee.

|参数名|类型|说明|
|-----|----|---|
|arr                |object array|Collection to iterate over|
|[iteratee=identity]|function    |Iteratee to sort by       |
|[ctx]              |*           |Iteratee context          |
|返回值             |array       |New sorted array          |

```javascript
sortBy([1, 2, 3, 4, 5, 6], function (num)
{
    return Math.sin(num);
}); // -> [5, 4, 6, 3, 1, 2]
```