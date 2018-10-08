## CN

Detect browser info using ua.

|参数名|类型|说明|
|-----|----|---|
|[ua=navigator.userAgent]|string|Browser userAgent                 |
|返回值                  |object|Object containing name and version|

Browsers supported: ie, chrome, edge, firefox, opera, safari, ios(mobile safari), android(android browser)

```javascript
var browser = detectBrowser();
if (browser.name === 'ie' && browser.version < 9)
{
    // Do something about old IE...
}
```