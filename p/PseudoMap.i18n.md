## CN

类似 es6 的 Map，不支持遍历器。

只支持字符串键名，当 Map 存在时会直接使用 Map。

```javascript
var map = new PseudoMap();
map.set('1', 1);
map.get('1'); // -> 1
```