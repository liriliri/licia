## CN

Enum type implementation.

### constructor

|参数名|类型|说明|
|-----|----|---|
|arr |array|Array of strings|

|参数名|类型|说明|
|-----|----|---|
|obj |object|Pairs of key and value|

```javascript
var importance = new Enum([
    'NONE', 'TRIVIAL', 'REGULAR', 'IMPORTANT', 'CRITICAL'
]);

if (val === importance.CRITICAL) {
    // Do something.
}
```