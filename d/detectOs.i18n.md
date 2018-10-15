## CN

使用 ua 检测操作系统。

|参数名|类型|说明|
|-----|----|---|
|ua=navigator.userAgent|string|浏览器用户代理|
|返回值|string|操作系统名称|

支持操作系统: windows, os x, linux, ios, android, windows phone

```javascript
if (detectOs() === 'ios')
{
    // Do something about ios...
}
```