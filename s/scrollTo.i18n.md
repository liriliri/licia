## CN

以动画的形式滚动到指定目标。

|参数名|类型|说明|
|-----|----|---|
|target|element string number|滚动目标|
|options|object|滚动选项|

### 选项 

|选项名|类型|默认值|说明|
|-----|----|-----|----|
|tolerance|number|0|偏移|
|duration|number|800|时长|
|easing|string function|outQuart|缓动函数|
|callback|function|noop|结束回调|

```javascript
scrollTo('body', {
    tolerance: 0,
    duration: 800,
    easing: 'outQuart',
    callback: function () {}
});
```