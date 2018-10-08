## CN

Load image with given src.

|参数名|类型|说明|
|-----|----|---|
|src |string  |Image source   |
|[cb]|function|Onload callback|

```javascript
loadImg('http://eustia.liriliri.io/img.jpg', function (err, img)
{
    console.log(img.width, img.height);
});
```