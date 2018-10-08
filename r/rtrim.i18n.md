## CN

Remove chars or white-spaces from end of string.

|参数名|类型|说明|
|-----|----|---|
|str   |string      |String to trim    |
|chars |string array|Characters to trim|
|返回值|string      |Trimmed string    |

```javascript
rtrim(' abc  '); // -> ' abc'
rtrim('_abc_', '_'); // -> '_abc'
rtrim('_abc_', ['c', '_']); // -> '_ab'
```