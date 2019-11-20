## CN

优先队列实现。

### size

队列大小。

### constructor

|参数名|类型|说明|
|-----|----|---|
|[cmp]|function|比较函数|

### clear

清空队列。

### enqueue

元素入列。

|参数名|类型|说明|
|-----|----|---|
|item|*|入列元素|
|返回值|number|当前大小|

### dequeue

获取并删除队列中拥有最高优先级的元素。

### peek

同 dequeue，只是不删除。
