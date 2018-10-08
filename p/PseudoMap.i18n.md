## CN

Like es6 Map, without iterators.

It supports only string keys, and uses Map if exists.

```javascript
var map = new PseudoMap();
map.set('1', 1);
map.get('1'); // -> 1
```