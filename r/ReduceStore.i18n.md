## CN

简单类 redux 状态管理。

### constructor

|参数名|类型|说明|
|-----|----|---|
|reducer|function|生成下一个状态的函数|
|initialState|*|初始状态|

### subscribe

订阅状态改变事件。

|参数名|类型|说明|
|-----|----|---|
|listener|function|回调函数|
|返回值|function|取消订阅函数|

### dispatch

发出动作。

|参数名|类型|说明|
|-----|----|---|
|action|object|描述改变内容的对象|
|返回值|object|传入对象|

### getState

获取当前状态。

