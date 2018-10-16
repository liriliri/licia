## CN

轻量 Promise 实现。

[Promises 标准](https://github.com/promises-aplus/promises-spec)

```javascript
function get(url) {
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', url);
        req.onload = function () {
            req.status == 200 ? resolve(req.reponse) : reject(Error(req.statusText));
        };
        req.onerror = function () { reject(Error('Network Error')) };
        req.send();
    });
}

get('test.json').then(function (result) {
    // Do something...
});
```