## CN

传入对象返回函数，如果传入参数中包含该对象则返回真。

|参数名|类型|说明|
|-----|----|---|
|attrs|object|要匹配的对象|
|返回值|function|真值检测函数|

```javascript
var objects = [
    {a: 1, b: 2, c: 3 },
    {a: 4, b: 5, c: 6 }
];
filter(objects, matcher({a: 4, c: 6 })); // -> [{a: 4, b: 5, c: 6 }]
```