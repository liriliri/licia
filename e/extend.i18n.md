## CN

复制多个对象中的所有属性到目标对象上。

|参数名|类型|说明|
|-----|----|---|
|obj|object|目标对象|
|...src|object|源对象|
|返回值|object|目标对象|

```javascript
extend({name: 'RedHood'}, {age: 24}); // -> {name: 'RedHood', age: 24}
```