## CN

JSON 序列化，支持循环引用和函数。

undefined 被当作 null 处理。

|参数名|类型|说明|
|-----|----|---|
|obj|object|目标对象|
|spaces|number|缩进|
|返回值|string|序列化后的字符串|

```javascript
stringify({a: function () {}}); // -> '{"a":"[Function function () {}]"}'
var obj = {a: 1};
obj.b = obj;
stringify(obj); // -> '{"a":1,"b":"[Circular ~]"}'
```