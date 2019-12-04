## CN

CSS 选择器解析器。

### parse

将 CSS 选择器转换为 js 对象。

|参数名|类型|说明|
|-----|----|---|
|selector|string|CSS 选择器|
|返回值|array|js 对象|

### stringify

将 js 对象序列化成 CSS 选择器。

|参数名|类型|说明|
|-----|----|---|
|groups|array|要序列化的对象|
|返回值|string|CSS 选择器|