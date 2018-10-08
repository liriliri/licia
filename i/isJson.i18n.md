## CN

Check if value is a valid JSON.

It uses `JSON.parse()` and a `try... catch` block.

|参数名|类型|说明|
|-----|----|---|
|val   |string |JSON string                  |
|返回值|boolean|True if value is a valid JSON|

```javascript
isJson('{"a": 5}'); // -> true
isJson("{'a': 5}"); // -> false
```