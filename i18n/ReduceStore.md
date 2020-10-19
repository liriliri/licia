## CN

简单类 redux 状态管理。

### constructor

|参数名|说明|
|-----|---|
|reducer|生成下一个状态的函数|
|initialState|初始状态|

### subscribe

订阅状态改变事件。

|参数名|说明|
|-----|---|
|listener|回调函数|
|返回值|取消订阅函数|

### dispatch

发出动作。

|参数名|说明|
|-----|---|
|action|描述改变内容的对象|
|返回值|传入对象|

### getState

获取当前状态。

