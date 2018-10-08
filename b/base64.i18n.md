## CN

base64 编解码。

### encode

将字节数组编码为 base64 字符串。

|参数名|类型|说明|
|-----|----|---|
|arr|array|字节数组|
|返回值|string|base64 编码的字符串|

```javascript
base64.encode([168, 174, 155, 255]); // -> 'qK6b/w=='
```

### decode

将 base64 字符串解码为字节数组。

|参数名|类型|说明|
|-----|----|---|
|str|string|base64 编码的字符串|
|返回值|array|字节数组|

```javascript
base64.decode('qK6b/w=='); // -> [168, 174, 155, 255]
```