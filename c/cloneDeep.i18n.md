## CN

Recursively clone value.

|参数名|类型|说明|
|-----|----|---|
|val   |*   |Value to clone   |
|返回值|*   |Deep cloned Value|

```javascript
var obj = [{a: 1}, {a: 2}];
var obj2 = cloneDeep(obj);
console.log(obj[0] === obj2[1]); // -> false
```
