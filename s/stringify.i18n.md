## CN

JSON stringify with support for circular object, function etc.

Undefined is treated as null value.

|参数名|类型|说明|
|-----|----|---|
|obj   |object|Object to stringify|
|spaces|number|Indent spaces      |
|返回值|string|Stringified object |

```javascript
stringify({a: function () {}}); // -> '{"a":"[Function function () {}]"}'
var obj = {a: 1};
obj.b = obj;
stringify(obj); // -> '{"a":1,"b":"[Circular ~]"}'
```