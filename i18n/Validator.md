## CN

对象属性值校验。

### constructor

|参数名|说明|
|-----|---|
|options|校验配置|

### validate

校验对象。

|参数名|说明|
|-----|---|
|obj|目标对象|
|返回值|校验结果，true 表示通过|

### addPlugin

【静态】添加插件。

|参数名|说明|
|-----|---|
|name|插件名|
|plugin|校验函数|

### 默认插件 

required，number，boolean，string 和 regexp。

