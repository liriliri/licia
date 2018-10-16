## CN

模块懒加载。

```javascript
var r = lazyRequire(require);

var _ = r('underscore');

// underscore is required only when _ is called.
_().isNumber(5);
```