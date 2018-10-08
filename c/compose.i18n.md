## CN

Compose a list of functions.

Each function consumes the return value of the function that follows.

|参数名|类型|说明|
|-----|----|---|
|...fn |function|Functions to compose|
|return|function|Composed function   |

```javascript
var welcome = compose(function (name) 
{
    return 'hi: ' + name;
}, function (name) 
{
    return name.toUpperCase() + '!';
});

welcome('licia'); // -> 'hi: LICIA!'
```