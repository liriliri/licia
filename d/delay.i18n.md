## CN

Invoke function after certain milliseconds.

|参数名|类型|说明|
|-----|----|---|
|fn       |function|Function to delay                         |
|wait     |number  |Number of milliseconds to delay invocation|
|[...args]|*       |Arguments to invoke fn with               |

```javascript
delay(function (text)
{
    console.log(text);
}, 1000, 'later');
// -> Logs 'later' after one second
```