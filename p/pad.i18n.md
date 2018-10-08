## CN

Pad string on the left and right sides if it's shorter than length.

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to pad         |
|len   |number|Padding length        |
|chars |string|String used as padding|
|返回值|string|Resulted string       |

```javascript
pad('a', 5); // -> '  a  '
pad('a', 5, '-'); // -> '--a--'
pad('abc', 3, '-'); // -> 'abc'
pad('abc', 5, 'ab'); // -> 'babca'
pad('ab', 5, 'ab'); // -> 'ababa'
```