## CN

UTF-8 encoding and decoding.

### encode

Turn any UTF-8 decoded string into UTF-8 encoded string.

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to encode|
|返回值|string|Encoded string  |

### decode

|参数名|类型|说明|
|-----|----|---|
|str         |string |String to decode      |
|[safe=false]|boolean|Suppress error if true|
|返回值      |string |Decoded string        |

Turn any UTF-8 encoded string into UTF-8 decoded string.

```javascript
utf8.encode('\uD800\uDC00'); // ->  '\xF0\x90\x80\x80'
utf8.decode('\xF0\x90\x80\x80'); // -> '\uD800\uDC00'
```