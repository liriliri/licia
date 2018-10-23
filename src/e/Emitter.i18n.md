## CN

提供观察者模式的 Event emitter 类。

### on

绑定事件。

### off

解绑事件。

### once

绑定只触发一次的事件。

|参数名|类型|说明|
|-----|----|---|
|event|string|事件名称|
|listener|function|事件监听器|

### emit

触发事件。

|参数名|类型|说明|
|-----|----|---|
|event|string|事件名称|
|...args|*|传递给监听器的参数|

### mixin

【静态】 将 Emitter 类的方法绑定到指定对象上去。

|参数名|类型|说明|
|-----|----|---|
|obj |object|目标对象|

