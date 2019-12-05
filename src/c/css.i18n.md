## CN

CSS 解析器。

注释会被移除掉。

### parse

将 CSS 字符串转换为 js 对象。

|参数名|类型|说明|
|-----|----|---|
|css|string|CSS 字符串|
|返回值|object|js 对象|

### stringify

将 js 对象序列化成 CSS 字符串。

|参数名|类型|说明|
|-----|----|---|
|stylesheet|object|要序列化的对象|
|[options]|object|序列化选项|
|返回值|string|CSS 字符串|

选项：

|参数名|类型|说明|
|-----|----|---|
|indent='  '|string|缩进|