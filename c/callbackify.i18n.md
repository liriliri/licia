## CN

Convert a function that returns a Promise to a function following the error-first callback style.

|参数名|类型|说明|
|-----|----|---|
|fn    |function|Function that returns a Promise                 |
|返回值|function|Function following the error-fist callback style|

```javascript
function fn() 
{
    return new Promise(function (resolve, reject) 
    {
        // ...
    });
}

var cbFn = callbackify(fn);

cbFn(function (err, value)
{
    // ...
});
```