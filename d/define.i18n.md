## CN

Define a module, should be used along with use.

|参数名|类型|说明|
|-----|----|---|
|name      |string  |Module name |
|[requires]|array   |Dependencies|
|method    |function|Module body |

The module won't be executed until it's used by use function.

```javascript
define('A', function ()
{
    return 'A';
});
define('B', ['A'], function (A)
{
    return 'B' + A;
});
```