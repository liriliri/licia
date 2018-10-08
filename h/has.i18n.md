## CN

Checks if key is a direct property.

|参数名|类型|说明|
|-----|----|---|
|obj   |object |Object to query                 |
|key   |string |Path to check                   |
|返回值|boolean|True if key is a direct property|

```javascript
has({one: 1}, 'one'); // -> true
```