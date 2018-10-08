## CN

Key codes and key names conversion.

Get key code's name.

|参数名|类型|说明|
|-----|----|---|
|code  |number|Key code              |
|返回值|string|Corresponding key name|

Get key name's code.

|参数名|类型|说明|
|-----|----|---|
|name  |string|Key name              |
|返回值|number|Corresponding key code|

```javascript
keyCode(13); // -> 'enter'
keyCode('enter'); // -> 13
```