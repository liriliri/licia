## CN

命令式 UI 组件基类，风格接近 Backbone.View。

继承自 Emitter 类。负责选项与声明式 DOM 事件，不接管渲染——由子类自行构建和更新 DOM。

在子类原型上声明 `defaults`、`option`、`events`。`html()` 更新 DOM 后会自动执行 `option` 处理函数。

### constructor

|参数名|说明|
|-----|---|
|container|挂载元素|
|options|组件选项|

### defaults

原型上的默认选项。也可以是返回对象的函数。

### option

原型上的选项变更处理映射。键为选项名，值为方法名或函数 `(val, oldVal)`。

### events

原型上的 DOM 事件表，Backbone 风格：`'click .inc': 'inc'`。

### set

设置选项。值变化时触发 `changeOption`，并执行 `option` 处理函数。

|参数名|说明|
|-----|---|
|name|选项名|
|val|选项值|

设置多个选项。

|参数名|说明|
|-----|---|
|options|键值对|

### get

|参数名|说明|
|-----|---|
|name|选项名|
|返回值|选项值|

### html

获取或设置容器 HTML。设置时会执行全部 `option` 处理函数。

|参数名|说明|
|-----|---|
|html|HTML 字符串|
|返回值|this 或当前 HTML|

### find

在容器内查找元素。

|参数名|说明|
|-----|---|
|selector|选择器|
|返回值|包装后的结果|

### listen

在组件容器上绑定 DOM 事件，`destroy` 时自动解绑。

|参数名|说明|
|-----|---|
|type|事件类型|
|selector|委托选择器|
|handler|事件处理函数|

### destroy

解绑事件、清空容器、触发 `destroy` 并移除所有 Emitter 监听。

### 事件

#### changeOption

通过 `set` 修改选项时触发。

#### destroy

组件销毁时触发。
