## CN

Extract a list of property values.

|参数名|类型|说明|
|-----|----|---|
|obj   |object array|Collection to iterate over     |
|key   |string array|Property path                  |
|返回值|array       |New array of specified property|

```javascript
var stooges = [
    {name: 'moe', age: 40},
    {name: 'larry', age: 50},
    {name: 'curly', age: 60}
];
pluck(stooges, 'name'); // -> ['moe', 'larry', 'curly']
```