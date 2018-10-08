## CN

Fill in undefined properties in object with the first value present in the following list of defaults objects.

|参数名|类型|说明|
|-----|----|---|
|obj   |object|Destination object|
|*src  |object|Sources objects   |
|返回值|object|Destination object|

```javascript
defaults({name: 'RedHood'}, {name: 'Unknown', age: 24}); // -> {name: 'RedHood', age: 24}
```