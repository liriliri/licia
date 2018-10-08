## CN

Copy all of the properties in the source objects over to the destination object.

|参数名|类型|说明|
|-----|----|---|
|obj   |object|Destination object|
|...src|object|Sources objects   |
|返回值|object|Destination object|

```javascript
extend({name: 'RedHood'}, {age: 24}); // -> {name: 'RedHood', age: 24}
```