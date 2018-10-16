## CN

简单 jsonp 实现。

|参数名|类型|说明|
|-----|----|---|
|opts|object|jsonp 选项|

可用选项：

|参数名|类型|说明|
|-----|----|---|
|url|string|请求地址|
|data|object|请求数据|
|success|function|成功回调|
|param=callback|string|回调参数名|
|[name]|string|回调函数名|
|error|function|失败回调|
|complete|function|结束回调|
|timeout|number|请求超时|

```javascript
jsonp({
    url: 'http://example.com',
    data: {test: 'true'},
    success: function (data) {
        // ...
    }
});
```