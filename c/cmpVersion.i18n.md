## CN

Compare version strings.

|参数名|类型|说明|
|-----|----|---|
|v1    |string|Version to compare|
|v2    |string|Version to compare|
|return|number|Comparison result |

```javascript
cmpVersion('1.1.8', '1.0.4'); // -> 1
cmpVersion('1.0.2', '1.0.2'); // -> 0
cmpVersion('2.0', '2.0.0'); // -> 0
cmpVersion('3.0.1', '3.0.0.2'); // -> 1
cmpVersion('1.1.1', '1.2.3'); // -> -1
```