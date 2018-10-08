## CN

UCS-2 encoding and decoding.

### encode

Create a string using an array of code point values.

|参数名|类型|说明|
|-----|----|---|
|arr   |array |Array of code points|
|返回值|string|Encoded string      |

### decode

Create an array of code point values using a string.

|参数名|类型|说明|
|-----|----|---|
|str   |string|Input string        |
|返回值|array |Array of code points|

```javascript
ucs2.encode([0x61, 0x62, 0x63]); // -> 'abc'
ucs2.decode('abc'); // -> [0x61, 0x62, 0x63]
'𝌆'.length; // -> 2
ucs2.decode('𝌆').length; // -> 1
```