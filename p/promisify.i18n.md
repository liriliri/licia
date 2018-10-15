## CN

Convert callback based functions into Promises.

|参数名|类型|说明|
|-----|----|---|
|fn               |function|Callback based function               |
|[multiArgs=false]|boolean |If callback has multiple success value|
|返回值           |boolean |Result function                       |

If multiArgs is set to true, the resulting promise will always fulfill with an array of the callback's success values.

```javascript
var fs = require('fs');

var readFile = promisify(fs.readFile);
readFile('test.js', 'utf-8').then(function (data) {
    // Do something with file content.
});
```