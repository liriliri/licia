## CN

命令式 UI 组件基类，风格接近 Backbone.View。

继承自 Emitter 类。负责选项与声明式 DOM 事件，不接管渲染——由子类自行构建和更新 DOM。

在子类构造函数中调用 `setup()` 声明 `defaults`、`option`、`events`。`setHtml()` 更新 DOM 后会自动执行 `option` 处理函数。

### constructor

|参数名|说明|
|-----|---|
|container|挂载元素|

### setup

配置默认选项、选项处理函数与 DOM 事件，并应用传入选项。

|参数名|说明|
|-----|---|
|config|`defaults`、`option`、`events`|
|options|组件选项|
|返回值|this|

#### defaults

默认选项。也可以是返回对象的函数。

#### option

选项变更处理映射。键为选项名，值为函数 `(val, oldVal)`。

#### events

DOM 事件表：`'click .inc': this.inc`。处理函数按原样使用，需自行绑定 `this`（例如 class field 箭头函数）。

### setOption

设置选项。值变化时触发 `changeOption`，并执行 `option` 处理函数。

|参数名|说明|
|-----|---|
|name|选项名|
|val|选项值|

设置多个选项。

|参数名|说明|
|-----|---|
|options|键值对|

### getOption

|参数名|说明|
|-----|---|
|name|选项名|
|返回值|选项值|

### setHtml

设置容器 HTML。设置时会执行全部 `option` 处理函数。

|参数名|说明|
|-----|---|
|html|HTML 字符串|

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

通过 `setOption` 修改选项时触发。

#### destroy

组件销毁时触发。
