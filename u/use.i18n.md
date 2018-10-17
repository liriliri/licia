## CN

使用 define 创建的模块。

|参数名|类型|说明|
|-----|----|---|
|[requires]|array|依赖|
|method|function|要执行的代码|

```javascript
define('A', function () {
    return 'A';
});
use(['A'], function (A) {
    console.log(A + 'B'); // -> 'AB'
});
```