## CN

Return a predicate function that checks if attrs are contained in an object.

|参数名|类型|说明|
|-----|----|---|
|attrs |object  |Object of property values to match|
|返回值|function|New predicate function            |

```javascript
var objects = [
    {a: 1, b: 2, c: 3 },
    {a: 4, b: 5, c: 6 }
];
filter(objects, matcher({a: 4, c: 6 })); // -> [{a: 4, b: 5, c: 6 }]
```