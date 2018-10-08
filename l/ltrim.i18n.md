## CN

Remove chars or white-spaces from beginning of string.

|参数名|类型|说明|
|-----|----|---|
|str   |string      |String to trim    |
|chars |string array|Characters to trim|
|返回值|string      |Trimmed string    |

```javascript
ltrim(' abc  '); // -> 'abc  '
ltrim('_abc_', '_'); // -> 'abc_'
ltrim('_abc_', ['a', '_']); // -> 'bc_'
```