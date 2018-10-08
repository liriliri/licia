## CN

Object values validation.

### constructor

|参数名|类型|说明|
|-----|----|---|
|options|object|Validation configuration|

### validate

Validate object.

|参数名|类型|说明|
|-----|----|---|
|obj   |object|Object to validate              |
|返回值|*     |Validation result, true means ok|

### addPlugin

[static] Add plugin.

|参数名|类型|说明|
|-----|----|---|
|name  |string  |Plugin name       |
|plugin|function|Validation handler|

### Default Plugins

Required, number, boolean, string and regexp.

```javascript
Validator.addPlugin('custom', function (val, key, config)
{
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