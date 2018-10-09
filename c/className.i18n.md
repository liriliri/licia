## CN

合并 class。

|参数名|类型|说明|
|-----|----|---|
|...class|string object array|要合并的 class|
|返回值|string|合并后的 class 字符串|

```javascript
className('a', 'b', 'c'); // -> 'a b c'
className('a', false, 'b', 0, 1, 'c'); // -> 'a b 1 c'
className('a', ['b', 'c']); // -> 'a b c'
className('a', {b: false, c: true}); // -> 'a c'
className('a', ['b', 'c', {d: true, e: false}]); // -> 'a b c d';
```
