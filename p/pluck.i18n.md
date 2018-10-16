## CN

提取数组对象中指定属性值，返回一个数组。

|参数名|类型|说明|
|-----|----|---|
|obj|object array|目标集合|
|key|string array|属性路径|
|返回值|array|指定属性值列表|

```javascript
var stooges = [
    {name: 'moe', age: 40},
    {name: 'larry', age: 50},
    {name: 'curly', age: 60}
];
pluck(stooges, 'name'); // -> ['moe', 'larry', 'curly']
```