## CN

Enum 类实现。

### constructor

|参数名|类型|说明|
|-----|----|---|
|arr|array|字符串数组|

|参数名|类型|说明|
|-----|----|---|
|obj|object|键值对|

```javascript
var importance = new Enum([
    'NONE', 'TRIVIAL', 'REGULAR', 'IMPORTANT', 'CRITICAL'
]);

if (val === importance.CRITICAL) {
    // Do something.
}
```