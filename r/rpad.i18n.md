## CN

Pad string on the right side if it's shorter than length.

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to pad         |
|len   |number|Padding length        |
|chars |string|String used as padding|
|返回值|string|Resulted string       |

```javascript
rpad('a', 5); // -> 'a    '
rpad('a', 5, '-'); // -> 'a----'
rpad('abc', 3, '-'); // -> 'abc'
rpad('abc', 5, 'ab'); // -> 'abcab'
```