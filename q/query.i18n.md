## CN

Parse and stringify url query strings.

### parse

Parse a query string into an object.

|参数名|类型|说明|
|-----|----|---|
|str   |string|Query string|
|返回值|object|Query object|

### stringify

Stringify an object into a query string.

|参数名|类型|说明|
|-----|----|---|
|obj   |object|Query object|
|返回值|string|Query string|

```javascript
query.parse('foo=bar&eruda=true'); // -> {foo: 'bar', eruda: 'true'}
query.stringify({foo: 'bar', eruda: 'true'}); // -> 'foo=bar&eruda=true'
query.parse('name=eruda&name=eustia'); // -> {name: ['eruda', 'eustia']}
```