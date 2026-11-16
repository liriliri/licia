# Licia Reference: v

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

## values

Create an array of the own enumerable property values of object.

<details>
<summary>Type Definition</summary>

```typescript
function values(obj: any): any[];
```

</details>

|Name  |Desc                    |
|------|------------------------|
|obj   |Object to query         |
|return|Array of property values|

```javascript
values({ one: 1, two: 2 }); // -> [1, 2]
```

## viewportScale

Get viewport scale.

<details>
<summary>Type Definition</summary>

```typescript
function viewportScale(): number;
```

</details>

```javascript
viewportScale(); // -> 3
```

## vlq

Variable-length quantity encoding and decoding.

<details>
<summary>Type Definition</summary>

```typescript
const vlq: {
    encode(number: number | number[]): string;
    decode(string: string): number[];
};
```

</details>

### encode

Encode numbers into vlq string.

|Name  |Desc            |
|------|----------------|
|number|Number to encode|
|return|Encoded string  |

### decode

Decode vlq string into numbers.

|Name  |Desc            |
|------|----------------|
|string|String to decode|
|return|Decoded numbers |

```javascript
vlq.encode(123); // -> '2H'
vlq.encode([123, 456, 789]); // -> '2HwcqxB'
vlq.decode('2H'); // -> [123]
vlq.decode('2HwcqxB'); // -> [123, 456, 789]
```
