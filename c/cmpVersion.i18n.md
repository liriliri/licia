## CN

比较版本号。

|参数名|类型|说明|
|-----|----|---|
|v1|string|版本号|
|v2|string|版本号|
|返回值|number|比较结果|

```javascript
cmpVersion('1.1.8', '1.0.4'); // -> 1
cmpVersion('1.0.2', '1.0.2'); // -> 0
cmpVersion('2.0', '2.0.0'); // -> 0
cmpVersion('3.0.1', '3.0.0.2'); // -> 1
cmpVersion('1.1.1', '1.2.3'); // -> -1
```