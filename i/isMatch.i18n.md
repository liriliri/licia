## CN

Check if keys and values in src are contained in obj.

|参数名|类型|说明|
|-----|----|---|
|obj   |object |Object to inspect                 |
|src   |object |Object of property values to match|
|返回值|boolean|True if object is match           |

```javascript
isMatch({a: 1, b: 2}, {a: 1}); // -> true
```