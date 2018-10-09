## CN

深复制。

|参数名|类型|说明|
|-----|----|---|
|val|*|要克隆的值|
|返回值|*|克隆值|

```javascript
var obj = [{a: 1}, {a: 2}];
var obj2 = cloneDeep(obj);
console.log(obj[0] === obj2[1]); // -> false
```
