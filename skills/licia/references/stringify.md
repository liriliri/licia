## stringify

JSON stringify with support for circular object, function etc.

<details>
<summary>Type Definition</summary>

```typescript
function stringify(obj: any, spaces?: number): string;
```

</details>

Undefined is treated as null value.

|Name  |Desc               |
|------|-------------------|
|obj   |Object to stringify|
|spaces|Indent spaces      |
|return|Stringified object |

```javascript
stringify({ a: function() {} }); // -> '{"a":"[Function function () {}]"}'
const obj = { a: 1, b: {} };
obj.b = obj;
stringify(obj); // -> '{"a":1,"b":"[Circular ~]"}'
```
