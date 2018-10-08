## CN

Execute js in given context.

|参数名|类型|说明|
|-----|----|---|
|js          |string|JavaScript code|
|[ctx=global]|object|Context        |

```javascript
evalJs('5+2'); // -> 7
evalJs('this.a', {a: 2}); // -> 2
```