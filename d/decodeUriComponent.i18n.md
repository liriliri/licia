## CN

Better decodeURIComponent that does not throw if input is invalid.

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to decode|
|返回值|string|Decoded string  |

```javascript
decodeUriComponent('%%25%'); // -> '%%%'
decodeUriComponent('%E0%A4%A'); // -> '\xE0\xA4%A'
```