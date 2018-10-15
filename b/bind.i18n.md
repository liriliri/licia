## CN

创建一个绑定到指定对象的函数。

|参数名|类型|说明|
|-----|----|---|
|fn|function|源函数|
|ctx|*|绑定对象|
|[...rest]|*|可选参数|
|返回值|function|输出函数|

```javascript
var fn = bind(function (msg) {
    console.log(this.name + ':' + msg);
}, {name: 'eustia'}, 'I am a utility library.');
fn(); // -> 'eustia: I am a utility library.'
```