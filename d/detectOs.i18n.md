## CN

Detect operating system using ua.

|参数名|类型|说明|
|-----|----|---|
|ua=navigator.userAgent|string|Browser userAgent    |
|返回值                  |string|Operating system name|

Supported os: windows, os x, linux, ios, android, windows phone

```javascript
if (detectOs() === 'ios')
{
    // Do something about ios...
}
```