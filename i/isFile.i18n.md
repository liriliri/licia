## CN

检查值是否是 File 类型。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是 File 类型，返回真|

```javascript
isFile(new File(['test'], "test.txt", {type: "text/plain"})); // -> true
```