## CN

Utility for conditionally joining class names.

|参数名|类型|说明|
|-----|----|---|
|...class|string object array|Class names       |
|返回值  |string             |Joined class names|

```javascript
className('a', 'b', 'c'); // -> 'a b c'
className('a', false, 'b', 0, 1, 'c'); // -> 'a b 1 c'
className('a', ['b', 'c']); // -> 'a b c'
className('a', {b: false, c: true}); // -> 'a c'
className('a', ['b', 'c', {d: true, e: false}]); // -> 'a b c d';
```
