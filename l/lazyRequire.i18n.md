## CN

Require modules lazily.

```javascript
var r = lazyRequire(require);

var _ = r('underscore');

// underscore is required only when _ is called.
_().isNumber(5);
```