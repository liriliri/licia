## CN

使用 ua 检测浏览器信息。

|参数名|类型|说明|
|-----|----|---|
|ua=navigator.userAgent|string|浏览器用户代理|
|返回值|object|包含名称和版本的对象|

支持浏览器：ie，chrome，edge，firefox，opera，safari，ios（mobile safari），android（android browser）

```javascript
var browser = detectBrowser();
if (browser.name === 'ie' && browser.version < 9)
{
    // Do something about old IE...
}
```