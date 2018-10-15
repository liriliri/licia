## CN

Turn XMLHttpRequest into promise like.

Note: This is not a complete fetch pollyfill.

|参数名|类型|说明|
|-----|----|---|
|url    |string |Request url    |
|options|object |Request options|
|返回值 |promise|Request promise|

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