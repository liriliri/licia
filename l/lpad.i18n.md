## CN

Pad string on the left side if it's shorter than length.

|参数名|类型|说明|
|-----|----|---|
|str    |string|String to pad         |
|len    |number|Padding length        |
|[chars]|string|String used as padding|
|返回值 |string|Resulted string       |

```javascript
lpad('a', 5); // -> '    a'
lpad('a', 5, '-'); // -> '----a'
lpad('abc', 3, '-'); // -> 'abc'
lpad('abc', 5, 'ab'); // -> 'ababc'
```