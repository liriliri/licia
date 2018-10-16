## CN

检查是否集合中的所有元素都能通过 predicate 的真值检测。

|参数名|类型|说明|
|-----|----|---|
|obj|array object|目标集合|
|predicate|function|真值检测函数|
|ctx|*|函数上下文|
|返回值|boolean|如果都能通过，返回真|

```javascript
every([2, 4], function (val) {
    return val % 2 === 0;
}); // -> false
```