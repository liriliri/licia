## CN

将值转换为属性路径数组。

|参数名|类型|说明|
|-----|----|---|
|str|*|要转换的值|
|[obj]|object|目标对象|
|返回值|array|属性路径数组|

```javascript
castPath('a.b.c'); // -> ['a', 'b', 'c']
castPath(['a']); // -> ['a']
castPath('a[0].b'); // -> ['a', '0', 'b']
castPath('a.b.c', {'a.b.c': true}); // -> ['a.b.c']
```