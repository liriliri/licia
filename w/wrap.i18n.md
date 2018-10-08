## CN

Wrap the function inside a wrapper function, passing it as the first argument.

|参数名|类型|说明|
|-----|----|---|
|fn     |*       |Function to wrap|
|wrapper|function|Wrapper function|
|返回值 |function|New function    |

```javascript
var p = wrap(escape, function(fn, text)
{
    return '<p>' + fn(text) + '</p>';
});
p('You & Me'); // -> '<p>You &amp; Me</p>'
```