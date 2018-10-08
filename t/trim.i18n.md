## CN

Remove chars or white-spaces from beginning end of string.

|参数名|类型|说明|
|-----|----|---|
|str   |string      |String to trim    |
|chars |string array|Characters to trim|
|返回值|string      |Trimmed string    |

```javascript
trim(' abc  '); // -> 'abc'
trim('_abc_', '_'); // -> 'abc'
trim('_abc_', ['a', 'c', '_']); // -> 'b'
```