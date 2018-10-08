## CN

Cast value into a property path array.

|参数名|类型|说明|
|-----|----|---|
|str   |*     |Value to inspect   |
|[obj] |object|Object to query    |
|返回值|array |Property path array|

```javascript
castPath('a.b.c'); // -> ['a', 'b', 'c']
castPath(['a']); // -> ['a']
castPath('a[0].b'); // -> ['a', '0', 'b']
castPath('a.b.c', {'a.b.c': true}); // -> ['a.b.c']
```