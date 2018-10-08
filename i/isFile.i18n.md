## CN

Check if value is a file.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check         |
|返回值|boolean|True if value is a file|

```javascript
isFile(new File(['test'], "test.txt", {type: "text/plain"})); // -> true
```