## CN

A simple jsonp implementation.

|参数名|类型|说明|
|-----|----|---|
|opts|object|Jsonp Options|

Available options:

|参数名|类型|说明|
|-----|----|---|
|url           |string  |Request url           |
|data          |object  |Request data          |
|success       |function|Success callback      |
|param=callback|string  |Callback param        |
|name          |string  |Callback name         |
|error         |function|Error callback        |
|complete      |function|Callback after request|
|timeout       |number  |Request timeout       |

```javascript
jsonp({
    url: 'http://example.com',
    data: {test: 'true'},
    success: function (data)
    {
        // ...
    }
});
```