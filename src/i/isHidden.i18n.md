## CN

检查元素是否隐藏。

|参数名|类型|说明|
|-----|----|---|
|el|element|目标元素|
|options|object|检查选项|
|返回值|boolean|如果元素隐藏，返回真|

可用选项：

|参数名|类型|说明|
|-----|----|---|
|display=true|boolean|检查是否显示|
|visibility=false|boolean|检查 visibility css 属性|
|opacity=false|boolean|检查 opacity css 属性|
|size=false|boolean|检查宽高|
|viewport=false|boolean|检查是否在可视区域|
|overflow=false|boolean|检查是否因 overflow 隐藏|