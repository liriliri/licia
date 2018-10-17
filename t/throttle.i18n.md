## CN

返回函数的节流阀版本。

|参数名|类型|说明|
|-----|----|---|
|fn|function|源函数|
|wait|number|延迟毫秒数|
|返回值|function|目标函数|

```javascript
$(window).scroll(throttle(updatePos, 100));
```