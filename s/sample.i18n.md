## CN

从集合中随机抽取部分样本。

|参数名|类型|说明|
|-----|----|---|
|obj|array object|目标集合|
|n|number|样本数量|
|返回值|array|样本|

```javascript
sample([2, 3, 1], 2); // -> [2, 3]
sample({a: 1, b: 2, c: 3}, 1); // -> [2]
```