## CN

对象属性值校验。

### constructor

|参数名|类型|说明|
|-----|----|---|
|options|object|校验配置|

### validate

校验对象。

|参数名|类型|说明|
|-----|----|---|
|obj|object|目标对象|
|返回值|*|校验结果，true 表示通过|

### addPlugin

【静态】添加插件。

|参数名|类型|说明|
|-----|----|---|
|name|string|插件名|
|plugin|function|校验函数|

### 默认插件 

required，number，boolean，string 和 regexp。

```javascript
Validator.addPlugin('custom', function (val, key, config) {
    if (typeof val === 'string' && val.length === 5) return true;

    return key + ' should be a string with length 5';
});
var validator = new Validator({
    'test': {
        required: true,
        custom: true
    }
});
validator.validate({}); // -> 'test is required'
validator.validate({test: 1}); // -> 'test should be a string with length 5';
validator.validate({test: 'licia'}); // -> true
```