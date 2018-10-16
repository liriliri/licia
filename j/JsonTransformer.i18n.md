## CN

JSON 转换器。

### constructor

|参数名|类型|说明|
|-----|----|---|
|[data={}]|object|目标 JSON 对象|

### set

设置属性值。

|参数名|类型|说明|
|-----|----|---|
|[key]|string|属性路径|
|val|*|值|

如果属性路径为空，整个对象将被值替换。

### get

获取属性值。

|参数名|类型|说明|
|-----|----|---|
|[key]|string|属性路径|
|返回值|*|指定值或整个对象|

### remove

移除属性值。

|参数名|类型|说明|
|-----|----|---|
|key|array string|属性路径|

### map

数组 map 的快捷方式。

|参数名|类型|说明|
|-----|----|---|
|from|string|源对象路径|
|to|string|目标对象路径|
|fn|function|真值检测函数|

### filter

数组 filter 的快捷方式。

### compute

从多个属性值计算新值。

|参数名|类型|说明|
|-----|----|---|
|from|array string|源属性路径|
|to|string|目标属性路径|
|fn|function|计算函数|

```javascript
var data = new JsonTransformer({
    books: [{
        title: 'Book 1',
        price: 5
    }, {
        title: 'Book 2',
        price: 10
    }],
    author: {
        lastname: 'Su',
        firstname: 'RedHood'
    }
});
data.filter('books', function (book) { return book.price > 5 });
data.compute('author', function (author) { return author.firstname + author.lastname });
data.set('count', data.get('books').length);
data.get(); // -> {books: [{title: 'Book 2', price: 10}], author: 'RedHoodSu', count: 1}
```