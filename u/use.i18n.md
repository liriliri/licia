## CN

Use modules that is created by define.

|参数名|类型|说明|
|-----|----|---|
|[requires]|array   |Dependencies        |
|method    |function|Codes to be executed|

```javascript
define('A', function () {
    return 'A';
});
use(['A'], function (A) {
    console.log(A + 'B'); // -> 'AB'
});
```