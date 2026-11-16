## Validator

Object values validation.

<details>
<summary>Type Definition</summary>

```typescript
class Validator {
    constructor(options: types.PlainObj<any>);
    validate(object: any): string | boolean;
    static plugins: any;
    static addPlugin(name: string, plugin: types.AnyFn): void;
}
```

</details>

### constructor

|Name   |Desc                    |
|-------|------------------------|
|options|Validation configuration|

### validate

Validate object.

|Name  |Desc                            |
|------|--------------------------------|
|obj   |Object to validate              |
|return|Validation result, true means ok|

### addPlugin

[static] Add plugin.

|Name  |Desc              |
|------|------------------|
|name  |Plugin name       |
|plugin|Validation handler|

### Default Plugins

Required, number, boolean, string and regexp.

```javascript
Validator.addPlugin('custom', function(val, key, config) {
    if (typeof val === 'string' && val.length === 5) return true;

    return key + ' should be a string with length 5';
});
const validator = new Validator({
    test: {
        required: true,
        custom: true
    }
});
validator.validate({}); // -> 'test is required'
validator.validate({ test: 1 }); // -> 'test should be a string with length 5';
validator.validate({ test: 'licia' }); // -> true
```
