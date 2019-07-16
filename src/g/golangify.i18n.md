## CN

像 Go 一样处理错误。

|参数名|类型|说明|
|-----|----|---|
|fn|function|返回 Promise 的函数| 
|返回值|function|同上，但 Promise 的结果形式为 [result, error]|

|参数名|类型|说明|
|-----|----|---|
|p|Promise|要转换的 Promise|
|返回值|Promise|目标 Promise，结果形式为 [result, error]|