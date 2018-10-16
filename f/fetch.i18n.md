## CN

将 XMLHttpRequest 转换为 promise 的形式。

注意：这并不是 fetch 的 pollyfill。

|参数名|类型|说明|
|-----|----|---|
|url|string|请求地址|
|options|object|请求选项|
|返回值|promise|请求 promise|

```javascript
fetch('test.json', {
    method: 'GET',
    timeout: 3000,
    headers: {},
    body: ''
}).then(function (res) {
    return res.json();
}).then(function (data) {
    console.log(data);
});
```