## CN

Like extend, but only copies own properties over to the destination object.

|参数名|类型|说明|
|-----|----|---|
|obj   |object|Destination object|
|*src  |object|Sources objects   |
|返回值|object|Destination object|

```javascript
extendOwn({name: 'RedHood'}, {age: 24}); // -> {name: 'RedHood', age: 24}
```