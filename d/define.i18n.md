## CN

定义一个模块，需要跟 use 模块配合使用。

|参数名|类型|说明|
|-----|----|---|
|name|string|模块名|
|[requires]|array|依赖|
|method|function|模块主体函数|

模块主体函数只有被 use 模块使用时才会被执行。

```javascript
define('A', function () {
    return 'A';
});
define('B', ['A'], function (A) {
    return 'B' + A;
});
```