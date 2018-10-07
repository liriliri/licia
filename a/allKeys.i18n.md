## CN

获取对象的所有键名，包括自身的及继承的。

|参数名|类型|说明|
|-----|----|---|
|obj|object|目标对象|
|返回值|array|包含所有键名的数组|

> Object 对象原型上的方法不会被获取到。 

```javascript
var obj = Object.create({zero: 0});
obj.one = 1;
allKeys(obj) // -> ['zero', 'one']
```