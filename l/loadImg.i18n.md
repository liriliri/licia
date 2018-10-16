## CN

加载指定地址的图片。

|参数名|类型|说明|
|-----|----|---|
|src|string|图片地址|
|[cb]|function|加载完回调|

```javascript
loadImg('http://eustia.liriliri.io/img.jpg', function (err, img) {
    console.log(img.width, img.height);
});
```