## CN

对象委托。

### constructor

|参数名|类型|说明|
|-----|----|---|
|host|object|宿主对象|
|target|string object|委托目标|

### method

允许在宿主对象上访问目标方法。

|参数名|类型|说明|
|-----|----|---|
|name|string|宿主方法名|
|target=name|string|目标方法名|

### getter

创建 getter。

### setter

创建 setter。

### access

创建 accessor，效果等于同时调用 setter 和 getter。