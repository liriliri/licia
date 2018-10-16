## CN

检查值是否是 Node.js Stream 类型。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是 Node.js Stream 类型，返回真|

```javascript
var stream = require('stream');

isStream(new stream.Stream()); // -> true
```