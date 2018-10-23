## CN

检查两个数字是否近似相等。

`abs(a-b) <= max(relTol * max(abs(a), abs(b)), absTol)`

|参数名|类型|说明|
|-----|----|---|
|a|number|要比较的数字|
|b|number|要比较的数字|
|relTol=1e-9|number|相对误差|
|absTol=0|number|绝对误差|
|返回值|boolean|如果近似相等，返回真|

