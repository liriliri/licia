## CN

A tiny JavaScript debugging utility.

|参数名|类型|说明|
|-----|----|---|
|name  |string  |Namespace                      |
|返回值|function|Function to print decorated log|

```javascript
var d = debug('test');
d('doing lots of uninteresting work');
d.enabled = false;
```