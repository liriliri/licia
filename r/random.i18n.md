## CN

在给定区间内生成随机数。

|参数名|类型|说明|
|-----|----|---|
|min|number|最小值|
|max|number|最大值|
|floating=false|boolean|是否允许浮点数|
|返回值|number|随机数|

```javascript
random(1, 5); // -> an integer between 0 and 5
random(5); // -> an integer between 0 and 5
random(1.2, 5.2, true); /// -> a floating-point number between 1.2 and 5.2
```