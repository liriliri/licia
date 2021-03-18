## CN

与 Event emitter 类似，但仅有一种事件类型。

### addListener

添加监听器。

### rmListener

移除监听器。

|参数名|说明|
|-----|---|
|listener|事件监听器|

### rmAllListeners

移除所有监听器。

### emit

触发监听器。

|参数名|说明|
|-----|---|
|...args|传递给监听器的参数|

### mixin

【静态】将 SingleEmitter 类的方法绑定到指定对象上去。

|参数名|说明|
|-----|---|
|obj|目标对象|
