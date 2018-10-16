## CN

往页面插入脚本链接。

|参数名|类型|说明|
|-----|----|---|
|src|string|脚本地址|
|cb|function|加载完回调|

```javascript
loadJs('main.js', function (isLoaded) {
    // Do something...
});
```