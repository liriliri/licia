## CN

Format string in a printf-like format.

|参数名|类型|说明|
|-----|----|---|
|str      |string|String to format                   |
|...values|*     |Values to replace format specifiers|
|返回值   |string|Formatted string                   |

### Format Specifiers

|Specifier|Desc                |
|---------|--------------------|
|%s       |String              |
|%d, %i   |Integer             |
|%f       |Floating point value|
|%o       |Object              |

```javascript
format('%s_%s', 'foo', 'bar'); // -> 'foo bar'
```