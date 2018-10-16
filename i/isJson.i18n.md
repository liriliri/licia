## CN

检查值是否是有效的 JSON。

该模块使用 `JSON.parse()` 和 `try... catch` 进行检测。

|参数名|类型|说明|
|-----|----|---|
|val|string|JSON 字符串|
|返回值|boolean|如果是有效的 JSON，返回真|

```javascript
isJson('{"a": 5}'); // -> true
isJson("{'a': 5}"); // -> false
```