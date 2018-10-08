## CN

Check if value is a Node.js stream.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check                   |
|返回值|boolean|True if value is a Node.js stream|

```javascript
var stream = require('stream');

isStream(new stream.Stream()); // -> true
```