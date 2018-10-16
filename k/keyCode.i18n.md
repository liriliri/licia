## CN

键码键名转换。

获取键码对应的键名。

|参数名|类型|说明|
|-----|----|---|
|code|number|键码|
|返回值|string|对应的键名|

获取键名对应的键码。

|参数名|类型|说明|
|-----|----|---|
|name|string|键名|
|返回值|number|对应的键码|

```javascript
keyCode(13); // -> 'enter'
keyCode('enter'); // -> 13
```