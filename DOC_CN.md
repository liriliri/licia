## $

类似 jQuery 的 dom 操作库。

### 支持方法列表 
 
offset, hide, show, first, last, get, eq, on, off, html, text, val, css, attr,
data, rmAttr, remove, addClass, rmClass, toggleClass, hasClass, append, prepend,
before, after

```javascript
var $btn = $('#btn');
$btn.html('eustia');
$btn.addClass('btn');
$btn.show();
$btn.on('click', function () {
    // Do something...
});
```

## $attr

操作元素属性。

获取元素集中第一个元素的指定属性值。

|参数名|类型|说明|
|-----|----|---|
|element|string array element|目标元素集|
|name|string|属性名|
|返回值|string|第一个元素的属性值|

设置元素集中一个或多个属性的值。

|参数名|类型|说明|
|-----|----|---|
|element|string array element|目标元素集|
|name|string|属性名|
|value|string|属性值|

|参数名|类型|说明|
|-----|----|---|
|element|string array element|目标元素集|
|attributes|object|包含多个要设置属性-值对的对象|

### remove

对元素集中的所有元素，移除指定的属性。

|参数名|类型|说明|
|-----|----|---|
|element|string array element|目标元素集|
|name|string|属性名|

```javascript
$attr('#test', 'attr1', 'test');
$attr('#test', 'attr1'); // -> test
$attr.remove('#test', 'attr1');
$attr('#test', {
    'attr1': 'test',
    'attr2': 'test'
});
```

## $class

操作元素 class。

### add

对元素集中的所有元素，添加指定的 class。

|参数名|类型|说明|
|-----|----|---|
|element|string array element|目标元素集|
|names|string array|添加的 class|

### has

判断元素集中是否有元素含有指定的 class。

|参数名|类型|说明|
|-----|----|---|
|element|string array element|目标元素集|
|name|string|class 值|
|返回值|boolean|如果有，返回真|

### toggle

对于元素集中的每个元素，如果含有指定的 class 就将其删除，反之则添加。

|参数名|类型|说明|
|-----|----|---|
|element|string array element|目标元素集|
|name|string|class 值|

### remove

对于元素集中的所有元素，移除指定的 class。


|参数名|类型|说明|
|-----|----|---|
|element|string array element|目标元素集|
|name|string|class 值|

```javascript
$class.add('#test', 'class1');
$class.add('#test', ['class1', 'class2']);
$class.has('#test', 'class1'); // -> true
$class.remove('#test', 'class1');
$class.has('#test', 'class1'); // -> false
$class.toggle('#test', 'class1');
$class.has('#test', 'class1'); // -> true
```

## $css

操作元素样式。

获取元素集中第一个元素的指定样式。

|参数名|类型|说明|
|-----|----|---|
|element|string array element|目标元素集|
|name|string|样式名|
|返回值|string|样式值|

设置元素集中一个或多个样式的值。

|参数名|类型|说明|
|-----|----|---|
|element|string array element|目标元素集|
|name|string|样式名|
|value|string|样式值|

|参数名|类型|说明|
|-----|----|---|
|element|string array element|目标元素集|
|properties|object|包含多个要设置样式-值对的对象|

```javascript
$css('#test', {
    color: '#fff',
    background: 'black'
});
$css('#test', 'display', 'block');
$css('#test', 'color'); // -> #fff
```

## $data

同 $attr，自动给属性名加 data- 前缀。

```javascript
$data('#test', 'attr1', 'eustia');
```

## $event

给指定 dom 元素绑定事件。

```javascript
function clickHandler() {
    // Do something...
}
$event.on('#test', 'click', clickHandler);
$event.off('#test', 'click', clickHandler);
```

## $insert

插入 html 到不同位置。

### before

插入 html 到元素前。

### after

插入 html 到元素后。

### prepend

插入 html 到元素内部前。

### append

插入 html 到元素内部后。

|参数名|类型|说明|
|-----|----|---|
|element|string array element|目标元素集|
|content|string|html 字符串|

```javascript
// <div id="test"><div class="mark"></div></div>
$insert.before('#test', '<div>licia</div>');
// -> <div>licia</div><div id="test"><div class="mark"></div></div>
$insert.after('#test', '<div>licia</div>');
// -> <div id="test"><div class="mark"></div></div><div>licia</div>
$insert.prepend('#test', '<div>licia</div>');
// -> <div id="test"><div>licia</div><div class="mark"></div></div>
$insert.append('#test', '<div>licia</div>');
// -> <div id="test"><div class="mark"></div><div>licia</div></div>
```

## $offset

获取元素在文档中的位置。

|参数名|类型|说明|
|-----|----|---|
|element|string array element|目标元素集|

```javascript
$offset('#test'); // -> {left: 0, top: 0, width: 0, height: 0}
```

## $property

设置或获取元素的 html， text，val 等值。

### html

设置或获取元素的 html 值。

### text

设置或获取元素的 text 值。

### val

设置或获取元素的 val 值。

```javascript
$property.html('#test', 'licia');
$property.html('#test'); // -> licia
```

## $remove

移除指定元素集。

|参数名|类型|说明|
|-----|----|---|
|element|string array element|目标元素集|

```javascript
$remove('#test');
```

## $safeEls

将值转换为数组，如果值为字符串，使用 querySelector 获取元素集。

|参数名|类型|说明|
|-----|----|---|
|value|element array string|要转换的值|
|返回值|array|元素集|

```javascript
$safeEls(document.querySelector('.test'));
$safeEls(document.querySelectorAll('.test'));
$safeEls('.test'); // -> Array of elements with test class
```

## $show

显示元素。

|参数名|类型|说明|
|-----|----|---|
|element|string array element|目标元素集|

```javascript
$show('#test');
```

## Blob

如果支持 Blob，直接返回 Blob，否则使用 BlobBuilder 进行兼容。

### constructor

|参数名|类型|说明|
|-----|----|---|
|parts|array|Blob 分片|
|[opts]|object|选项|

```javascript
var blob = new Blob([]);
```

## Class

创建 JavaScript 类。

|参数名|类型|说明|
|-----|----|---|
|methods|object|公有方法|
|[statics]|object|静态方法|
|返回值|function|用于创建实例的函数|

```javascript
var People = Class({
    initialize: function People(name, age) {
        this.name = name;
        this.age = age;
    },
    introduce: function () {
        return 'I am ' + this.name + ', ' + this.age + ' years old.';
    }
});

var Student = People.extend({
    initialize: function Student(name, age, school) {
        this.callSuper(People, 'initialize', arguments);

        this.school = school;
    },
    introduce: function () {
        return this.callSuper(People, 'introduce') + '\n I study at ' + this.school + '.';
    }
}, {
    is: function (obj) {
        return obj instanceof Student;
    }
});

var a = new Student('allen', 17, 'Hogwarts');
a.introduce(); // -> 'I am allen, 17 years old. \n I study at Hogwarts.'
Student.is(a); // -> true
```

## Color

颜色转换。

### constructor

|参数名|类型|说明|
|-----|----|---|
|color|string object|要转换的颜色|

### toRgb

获取颜色 rgb 格式。

### toHex

获取颜色十六进制格式。

### toHsl

获取颜色 hsl 格式。

### parse

【静态】将颜色字符串转换为含有值及颜色模型的对象。

|参数名|类型|说明|
|-----|----|---|
|color|string|颜色字符串|
|返回值|object|含有值及颜色模型的对象|

```javascript
Color.parse('rgb(170, 287, 204, 0.5)'); // -> {val: [170, 187, 204, 0.5], model: 'rgb'}
var color = new Color('#abc');
color.toRgb(); // -> 'rgb(170, 187, 204)'
color.toHsl(); // -> 'hsl(210, 25%, 73%)'
```

## Dispatcher

Flux 调度器。

[相关文档](https://facebook.github.io/flux/docs/dispatcher.html)

```javascript
var dispatcher = new Dispatcher();

dispatcher.register(function (payload) {
   switch (payload.actionType) {
       // Do something
   }
});

dispatcher.dispatch({
    actionType: 'action'
});
```

## Emitter

提供观察者模式的 Event emitter 类。

### on

绑定事件。

### off

解绑事件。

### once

绑定只触发一次的事件。

|参数名|类型|说明|
|-----|----|---|
|event|string|事件名称|
|listener|function|事件监听器|

### emit

触发事件。

|参数名|类型|说明|
|-----|----|---|
|event|string|事件名称|
|...args|*|传递给监听器的参数|

### mixin

【静态】 将 Emitter 类的方法绑定到指定对象上去。

|参数名|类型|说明|
|-----|----|---|
|obj |object|目标对象|

```javascript
var event = new Emitter();
event.on('test', function () { console.log('test') });
event.emit('test'); // Logs out 'test'.
Emitter.mixin({});
```

## Enum

Enum 类实现。

### constructor

|参数名|类型|说明|
|-----|----|---|
|arr|array|字符串数组|

|参数名|类型|说明|
|-----|----|---|
|obj|object|键值对|

```javascript
var importance = new Enum([
    'NONE', 'TRIVIAL', 'REGULAR', 'IMPORTANT', 'CRITICAL'
]);
const val = 1;
if (val === importance.CRITICAL) {
    // Do something.
}
```

## JsonTransformer

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

## LinkedList

双向链表实现。

### size

链表大小。

### head

链表首结点。

### tail

链表尾结点。

### push

向链表尾部添加值。

|参数名|类型|说明|
|-----|----|---|
|val|*|要添加的值|
|返回值|number|链表大小|

### pop

获取链表尾部值。

### unshift

向链表头部添加值。

### shift

获取链表头部值。

### rmNode

删除节点。

### forEach

遍历链表。

### toArr

将链表转换成 JavaScript 数组。

```javascript
var linkedList = new LinkedList();
linkedList.push(5);
linkedList.pop(); // -> 5
```

## LocalStore

LocalStorage 存储。

继承自 Store 类。

### constructor

|参数名|类型|说明|
|-----|----|---|
|name|string|LocalStorage 存储名|
|data|object|默认数据|

```javascript
var store = new LocalStore('licia');
store.set('name', 'licia');
```

## Logger

带日志级别的简单日志库。

### constructor

|参数名|类型|说明|
|-----|----|---|
|name|string|日志名称|
|level=DEBUG|number|日志级别|

### setLevel

设置日志级别。

|参数名|类型|说明|
|-----|----|---|
|level|number string|日志级别|

### getLevel

获取当前日志级别。

### trace，debug，info，warn，error

打日志方法。

### 日志级别 

TRACE，DEBUG，INFO，WARN，ERROR 和 SILENT。

```javascript
var logger = new Logger('licia', Logger.level.ERROR);
logger.trace('test');

// Format output.
logger.formatter = function (type, argList) {
    argList.push(new Date().getTime());

    return argList;
};

logger.on('all', function (type, argList) {
    // It's not affected by log level.
});

logger.on('debug', function (argList) {
    // Affected by log level.
});
```

## Lru

简单 LRU 缓存。

### constructor

|参数名|类型|说明|
|-----|----|---|
|max|number|最大缓存数|

### has

检查是否有缓存。

|参数名|类型|说明|
|-----|----|---|
|key|string|缓存键名|

### remove

删除缓存。

|参数名|类型|说明|
|-----|----|---|
|key|string|缓存键名|

### get

获取缓存。

|参数名|类型|说明|
|-----|----|---|
|key|string|缓存键名|
|return|*|缓存值|

### set

设置缓存。

|参数名|类型|说明|
|-----|----|---|
|key|string|缓存键名|
|val|*|缓存值|

### clear

清除所有缓存。

```javascript
const cache = new Lru(50);
cache.set('test', 'licia');
cache.get('test'); // -> 'licia'
```

## MutationObserver

MutationObserver 安全版本，如果不支持，则什么也不做。

```javascript
var observer = new MutationObserver(function (mutations) {
    // Do something.
});
observer.observe(document.documentElement);
observer.disconnect();
```

## Promise

轻量 Promise 实现。

[Promises 标准](https://github.com/promises-aplus/promises-spec)

```javascript
function get(url) {
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', url);
        req.onload = function () {
            req.status == 200 ? resolve(req.response) : reject(Error(req.statusText));
        };
        req.onerror = function () { reject(Error('Network Error')) };
        req.send();
    });
}

get('test.json').then(function (result) {
    // Do something...
});
```

## PseudoMap

类似 es6 的 Map，不支持遍历器。

只支持字符串键名，当 Map 存在时会直接使用 Map。

```javascript
var map = new PseudoMap();
map.set('1', 1);
map.get('1'); // -> 1
```

## Queue

队列数据结构。

### clear

清空队列。

### enqueue

元素入列。

|参数名|类型|说明|
|-----|----|---|
|item|*|入列元素|
|返回值|number|当前大小|

### dequeue

元素出列。

### peek

获取第一个元素但不移除它。

### forEach

遍历队列。

|参数名|类型|说明|
|-----|----|---|
|iterator|function|调用函数|
|[ctx]|*|函数上下文|

### toArr

将队列转换为 JavaScript 数组。

```javascript
var queue = new Queue();

console.log(queue.size); // -> 0
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue(); // -> 2
console.log(queue.size); // -> 1
queue.peek(); // -> 3
console.log(queue.size); // -> 1
```

## QuickLru

不使用链表的 LRU 实现。

参考 [hashlru 算法](https://github.com/dominictarr/hashlru#algorithm)，空间占用相比使用链表更多。

API 与 Lru 模块保持一致。

```javascript
const cache = new QuickLru(50);
cache.set('test', 'licia');
cache.get('test'); // -> 'licia'
```

## ReduceStore

简单类 redux 状态管理。

### constructor

|参数名|类型|说明|
|-----|----|---|
|reducer|function|生成下一个状态的函数|
|initialState|*|初始状态|

### subscribe

订阅状态改变事件。

|参数名|类型|说明|
|-----|----|---|
|listener|function|回调函数|
|返回值|function|取消订阅函数|

### dispatch

发出动作。

|参数名|类型|说明|
|-----|----|---|
|action|object|描述改变内容的对象|
|返回值|object|传入对象|

### getState

获取当前状态。

```javascript
var store = new ReduceStore(function (state, action) {
    switch (action.type) {
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        default: return state;
    }
}, 0);

store.subscribe(function () {
    console.log(store.getState());
});

store.dispatch({type: 'INCREMENT'}); // 1
store.dispatch({type: 'INCREMENT'}); // 2
store.dispatch({type: 'DECREMENT'}); // 1
```

## Select

querySelectorAll 的简单包装类。

### constructor

|参数名|类型|说明|
|-----|----|---|
|selector|string|选择器|

### find

查找子元素。

|参数名|类型|说明|
|-----|----|---|
|selector|string|选择器|

### each

遍历匹配的元素。

|参数名|类型|说明|
|-----|----|---|
|fn|function|调用函数|

```javascript
var $test = new Select('#test');
$test.find('.test').each(function (idx, element) {
    // Manipulate dom nodes
});
```

## SessionStore

SessionStorage 存储。

继承自 Store 类。

### constructor

|参数名|类型|说明|
|-----|----|---|
|name|string|SessionStorage 存储名|
|data|object|默认数据|

```javascript
var store = new SessionStore('licia');
store.set('name', 'licia');
```

## Stack

栈数据结构。

### clear

清空栈。

### push

元素入栈。

|参数名|类型|说明|
|-----|----|---|
|item|*|入栈元素|
|返回值|number|当前大小|

### pop

元素出栈。

### peek

获取最后一个元素但不移除它。

### forEach

遍历栈。

|参数名|类型|说明|
|-----|----|---|
|iterator|function|调用函数|
|[ctx]|*|函数上下文|

### toArr

将栈转换为 JavaScript 数组。

```javascript
var stack = new Stack();

stack.push(2); // -> 1
stack.push(3); // -> 2
stack.pop(); // -> 3
```

## State

简单状态机。

继承自 Emitter 类。

### constructor

|参数名|类型|说明|
|-----|----|---|
|initial|string|初始状态|
|events|object|改变状态的事件|

### is

检查当前状态是否是指定状态。

|参数名|类型|说明|
|-----|----|---|
|value|string|要检查的状态|
|返回值|boolean|如果是，返回真|

```javascript
var state = new State('empty', {
    load: {from: 'empty', to: 'pause'},
    play: {from: 'pause', to: 'play'},
    pause: {from: ['play', 'empty'], to: 'pause'},
    unload: {from: ['play', 'pause'], to: 'empty'}
});

state.is('empty'); // -> true
state.load();
state.is('pause'); // -> true
state.on('play', function (src) {
    console.log(src); // -> 'eustia'
});
state.on('error', function (err, event) {
    // Error handler
});
state.play('eustia');
```

## Store

内存存储。

继承自 Emitter 类。

### constructor

|参数名|类型|说明|
|-----|----|---|
|data|object|初始数据|

### set

设置值。

|参数名|类型|说明|
|-----|----|---|
|key|string|键名|
|val|*|键值|

设置多个值。

|参数名|类型|说明|
|-----|----|---|
|vals|object|包含多个键值对的对象|

该方法被调用时发触发 change 事件。

### get

获取值。

|参数名|类型|说明|
|-----|----|---|
|key|string|键名|
|返回值|*|键值|

获取多个值。

|参数名|类型|说明|
|-----|----|---|
|keys|array|键名列表|
|返回值|object|包含多个键值对的对象|

### remove

移除值。

|参数名|类型|说明|
|-----|----|---|
|key|string array|键名|

### clear

清空数据。

### each

遍历数据。

|参数名|类型|说明|
|-----|----|---|
|fn|function|遍历函数|

```javascript
var store = new Store('test');
store.set('user', {name: 'licia'});
store.get('user').name; // -> 'licia'
store.clear();
store.each(function (val, key) {
    // Do something.
});
store.on('change', function (key, newVal, oldVal) {
    // It triggers whenever set is called.
});
```

## Tween

JavaScript 补间动画库。

继承自 Emitter 类。

### constructor

|参数名|类型|说明|
|-----|----|---|
|obj|object|要补间的对象|

### to

|参数名|类型|说明|
|-----|----|---|
|destination|obj|目标属性值|
|duration|number|补间时长|
|ease|string function|缓动函数|

### play

开始播放。

### pause

暂停动画。

### paused

检查动画是否暂停。

### progress

设置或获取动画进度。

|参数名|类型|说明|
|-----|----|---|
|[progress]|number|介于 0 到 1 之间的数字|

```javascript
var pos = {x: 0, y: 0};

var tween = new Tween(pos);
tween.on('update', function (target) {
    console.log(target.x, target.y);
}).on('end', function (target) {
    console.log(target.x, target.y); // -> 100, 100
});
tween.to({x: 100, y: 100}, 1000, 'inElastic').play();
```

## Url

简单 url 操作库。

### constructor

|参数名|类型|说明|
|-----|----|---|
|url=location|string|url 地址|

### setQuery

设置 query 值。

|参数名|类型|说明|
|-----|----|---|
|name|string|query 名|
|value|string|query 值|
|返回值|Url|this|

|参数名|类型|说明|
|-----|----|---|
|query|object|query 对象|
|返回值|Url|this|

### rmQuery

移除 query 值。

|参数名|类型|说明|
|-----|----|---|
|name|string array|query 名|
|返回值|Url|this|

### parse

【静态】将 url 解析成对象。

|参数名|类型|说明|
|-----|----|---|
|url|string|url 地址|
|返回值|object|url 对象|

### stringify

【静态】将 url 对象转换为 url 地址。

|参数名|类型|说明|
|-----|----|---|
|url|object|url 对象|
|返回值|string|url 地址|

url 对象包含以下属性值：

|属性名|说明|
|-----|----|
|protocol|协议名，（如 http:）|
|slashes|协议名后是否有双斜杠|
|auth|身份验证（例如 用户名:密码）|
|hostname|Host 名，不带端口号|
|port|端口号|
|pathname|URL 路径|
|query|query 对象|
|hash|URL # 字符后边的部分，# 包含在内|

```javascript
var url = new Url('http://example.com:8080?eruda=true');
console.log(url.port); // -> '8080'
url.query.foo = 'bar';
url.rmQuery('eruda');
url.toString(); // -> 'http://example.com:8080/?foo=bar'
```

## Validator

对象属性值校验。

### constructor

|参数名|类型|说明|
|-----|----|---|
|options|object|校验配置|

### validate

校验对象。

|参数名|类型|说明|
|-----|----|---|
|obj|object|目标对象|
|返回值|*|校验结果，true 表示通过|

### addPlugin

【静态】添加插件。

|参数名|类型|说明|
|-----|----|---|
|name|string|插件名|
|plugin|function|校验函数|

### 默认插件 

required，number，boolean，string 和 regexp。

```javascript
Validator.addPlugin('custom', function (val, key, config) {
    if (typeof val === 'string' && val.length === 5) return true;

    return key + ' should be a string with length 5';
});
var validator = new Validator({
    'test': {
        required: true,
        custom: true
    }
});
validator.validate({}); // -> 'test is required'
validator.validate({test: 1}); // -> 'test should be a string with length 5';
validator.validate({test: 'licia'}); // -> true
```

## abbrev

计算字符串集的缩写集合。

|参数名|类型|说明|
|-----|----|---|
|...arr|string|字符串集|
|返回值|object|缩写集合|

```javascript
abbrev('lina', 'luna');
// -> {li: 'lina', lin: 'lina', lina: 'lina', lu: 'luna', lun: 'luna', luna: 'luna'}
```

## after

创建一个函数，只有在调用 n 次后才会调用一次。

|参数名|类型|说明|
|-----|----|---|
|n|number|调用次数|
|fn|function|源函数|
|返回值|function|输出函数|

```javascript
var fn = after(5, function() {
    // -> Only invoke after fn is called 5 times.
});
```

## ajax

执行异步 HTTP 请求。

|参数名|类型|说明|
|-----|----|---|
|options|object|Ajax 选项|

可用选项：

|参数名|类型|说明|
|-----|----|---|
|type|string|请求类型|
|url|string|请求地址|
|data|string object|请求数据|
|dataType=json|string|响应类型（json，xml）|
|contentType=application/x-www-form-urlencoded|string|请求内容类型|
|success|function|成功回调|
|error|function|失败回调|
|complete|function|结束回调|
|timeout|number|请求超时|

### get

type = GET 的快捷方式。

### post

type = POST 的快捷方式。

|参数名|类型|说明|
|-----|----|---|
|url|string|请求地址|
|[data]|string object|请求数据|
|success|function|成功回调|
|dataType|function|响应类型|

```javascript
ajax({
    url: 'http://example.com',
    data: {test: 'true'},
    error() {},
    success(data) {
        // ...
    },
    dataType: 'json'
});

ajax.get('http://example.com', {}, function (data) {
    // ...
});
```

## allKeys

获取对象的所有键名，包括自身的及继承的。

|参数名|类型|说明|
|-----|----|---|
|obj|object|目标对象|
|返回值|array|包含所有键名的数组|

Object 对象原型上的方法不会被获取到。

```javascript
var obj = Object.create({zero: 0});
obj.one = 1;
allKeys(obj) // -> ['zero', 'one']
```

## ansiColor

控制台颜色。

### 支持颜色

black, red, green, yellow, blue, magenta, cyan, white, gray, grey

bgBlack, bgRed, bgGreen, bgYellow, bgBlue, bgMagenta, bgCyan, bgWhite,

blackBright, redBright, greenBright, yellowBright, blueBright, magentaBright, cyanBright, whiteBright

bgBlackBright, bgRedBright, bgGreenBright, bgYellowBright, bgBlueBright, bgMagentaBright, bgCyanBright, bgWhiteBright

```javascript
ansiColor.red('Warning');
```

## arrToMap

将字符串列表转换为映射。

|参数名|类型|说明|
|-----|----|---|
|arr|array|字符串列表|
|val=true|*|键值|
|返回值|object|映射|

```javascript
const needPx = arrToMap([
    'column-count', 'columns', 'font-weight', 'line-weight', 'opacity', 'z-index', 'zoom'
]);
const key = 'column-count';
let val = '5';
if (needPx[key]) val += 'px';
console.log(val); // -> '5px'
```

## atob

window.atob，运行在 node 环境时使用 Buffer 进行模拟。

```javascript
atob('SGVsbG8gV29ybGQ='); // -> 'Hello World'
```

## average

获取数字的平均值。

|参数名|类型|说明|
|-----|----|---|
|...num|number|要计算的数字|
|返回值|number|平均值|

```javascript
average(5, 3, 1); // -> 3
```

## base64

base64 编解码。

### encode

将字节数组编码为 base64 字符串。

|参数名|类型|说明|
|-----|----|---|
|arr|array|字节数组|
|返回值|string|base64 编码的字符串|

### decode

将 base64 字符串解码为字节数组。

|参数名|类型|说明|
|-----|----|---|
|str|string|base64 编码的字符串|
|返回值|array|字节数组|

```javascript
base64.encode([168, 174, 155, 255]); // -> 'qK6b/w=='
base64.decode('qK6b/w=='); // -> [168, 174, 155, 255]
```

## before

创建一个函数，只能调用少于 n 次。

|参数名|类型|说明|
|-----|----|---|
|n|number|调用次数|
|fn|function|源函数|
|返回值|function|输出函数|

超过 n 次后再次调用函数将直接返回最后一次函数的调用结果。

```javascript
const fn = before(5, function() {});
fn(); // Allow function to be call 4 times at last.
```

## binarySearch

二分查找实现。

|参数名|类型|说明|
|-----|----|---|
|array|array|目标数组|
|value|*|要查找的值|
|[comparator]|function|比较器|
|返回值|number|第一次出现的位置，如果没有，返回 -1|

```javascript
binarySearch([1, 2, 3], 2); // -> 1
binarySearch([1, 2], 3); // -> -1
binarySearch(
    [
        {
            key: 1
        },
        {
            key: 2
        }
    ],
    { key: 1 },
    (a, b) => {
        if (a.key === b.key) return 0;
        return a.key < b.key ? -1 : 1;
    }
); // -> 0
```

## bind

创建一个绑定到指定对象的函数。

|参数名|类型|说明|
|-----|----|---|
|fn|function|源函数|
|ctx|*|绑定对象|
|...rest|*|可选参数|
|返回值|function|输出函数|

```javascript
var fn = bind(function (msg) {
    console.log(this.name + ':' + msg);
}, {name: 'eustia'}, 'I am a utility library.');
fn(); // -> 'eustia: I am a utility library.'
```

## btoa

window.btoa，运行在 node 环境时使用 Buffer 进行模拟。

```javascript
btoa('Hello World'); // -> 'SGVsbG8gV29ybGQ='
```

## bubbleSort

冒泡排序实现。

|参数名|类型|说明|
|-----|----|---|
|arr|array|要排序的数组|
|[cmp]|function|比较器|
|返回值|array|有序数组|

```javascript
bubbleSort([2, 1]); // -> [1, 2]
```

## bytesToStr

将字节数组转换为字符串。

|参数名|类型|说明|
|-----|----|---|
|str|array|字节数组|
|返回值|string|目标字符串|

```javascript
bytesToStr([108, 105, 99, 105, 97]); // -> 'licia'
```

## callbackify

将返回 Promise 的函数转换为使用回调的函数。

|参数名|类型|说明|
|-----|----|---|
|fn|function|返回 Promise 的函数|
|返回值|function|使用回调的函数|

```javascript
function fn() {
    return new Promise(function (resolve, reject) {
        // ...
    });
}

var cbFn = callbackify(fn);

cbFn(function (err, value) {
    // ...
});
```

## camelCase

将字符串转换为驼峰式。

|参数名|类型|说明|
|-----|----|---|
|str|string|源字符串|
|返回值|string|驼峰式字符串|

```javascript
camelCase('foo-bar'); // -> fooBar
camelCase('foo bar'); // -> fooBar
camelCase('foo_bar'); // -> fooBar
camelCase('foo.bar'); // -> fooBar
```

## capitalize

将字符串的第一个字符转换为大写，其余字符转换为小写。

|参数名|类型|说明|
|-----|----|---|
|str|string|源字符串|
|返回值|string|目标字符串|

```javascript
capitalize('rED'); // -> Red
```

## castPath

将值转换为属性路径数组。

|参数名|类型|说明|
|-----|----|---|
|path|string array|要转换的值|
|[obj]|object|目标对象|
|返回值|array|属性路径数组|

```javascript
castPath('a.b.c'); // -> ['a', 'b', 'c']
castPath(['a']); // -> ['a']
castPath('a[0].b'); // -> ['a', '0', 'b']
castPath('a.b.c', {'a.b.c': true}); // -> ['a.b.c']
```

## centerAlign

字符串居中。

|参数名|类型|说明|
|-----|----|---|
|str|string array|源字符串|
|[width]|number|每行宽度|
|返回值|string|居中字符串|

```javascript
centerAlign('test', 8); // -> '  test'
centerAlign('test\nlines', 8); // -> '  test\n lines'
centerAlign(['test', 'lines'], 8); // -> '  test\n lines'
```

## char

根据指定的整数返回 unicode 编码为该整数的字符。

|参数名|类型|说明|
|-----|----|---|
|num|number|要转换的整数|
|返回值|string|对应字符|

```javascript
char(65); // -> 'A'
char(97); // -> 'a'
```

## chunk

将数组拆分为指定长度的子数组。

|参数名|类型|说明|
|-----|----|---|
|arr|array|源数组|
|size=1|number|子数组的长度|
|返回值|array|目标数组|

```javascript
chunk([1, 2, 3, 4], 2); // -> [[1, 2], [3, 4]]
chunk([1, 2, 3, 4], 3); // -> [[1, 2, 3], [4]]
chunk([1, 2, 3, 4]); // -> [[1], [2], [3], [4]]
```

## clamp

将数字限定于指定区间。

|参数名|类型|说明|
|-----|----|---|
|n|number|要处理的数字|
|[lower]|number|下限|
|upper|number|上限|
|返回值|number|限定后的数字|

```javascript
clamp(-10, -5, 5); // -> -5
clamp(10, -5, 5); // -> 5
clamp(2, -5, 5); // -> 2
clamp(10, 5); // -> 5
clamp(2, 5); // -> 2
```

## className

合并 class。

|参数名|类型|说明|
|-----|----|---|
|...class|string object array|要合并的 class|
|返回值|string|合并后的 class 字符串|

```javascript
className('a', 'b', 'c'); // -> 'a b c'
className('a', false, 'b', 0, 1, 'c'); // -> 'a b 1 c'
className('a', ['b', 'c']); // -> 'a b c'
className('a', {b: false, c: true}); // -> 'a c'
className('a', ['b', 'c', {d: true, e: false}]); // -> 'a b c d';
```

## clone

对指定对象进行浅复制。

任何嵌套的对象或数组只会拷贝其引用。

|参数名|类型|说明|
|-----|----|---|
|val|*|要克隆的值|
|返回值|*|克隆值|

```javascript
clone({name: 'eustia'}); // -> {name: 'eustia'}
```

## cloneDeep

深复制。

|参数名|类型|说明|
|-----|----|---|
|val|*|要克隆的值|
|返回值|*|克隆值|

```javascript
var obj = [{a: 1}, {a: 2}];
var obj2 = cloneDeep(obj);
console.log(obj[0] === obj2[1]); // -> false
```

## cmpVersion

比较版本号。

|参数名|类型|说明|
|-----|----|---|
|v1|string|版本号|
|v2|string|版本号|
|返回值|number|比较结果|

```javascript
cmpVersion('1.1.8', '1.0.4'); // -> 1
cmpVersion('1.0.2', '1.0.2'); // -> 0
cmpVersion('2.0', '2.0.0'); // -> 0
cmpVersion('3.0.1', '3.0.0.2'); // -> 1
cmpVersion('1.1.1', '1.2.3'); // -> -1
```

## combine

创建一个数组，用一个数组的值作为其键名，另一个数组的值作为其值。

|参数名|类型|说明|
|-----|----|---|
|keys|array|键名数组|
|values|array|键值数组|
|返回值|object|目标对象|

```javascript
combine(['a', 'b', 'c'], [1, 2, 3]); // -> {a: 1, b: 2, c: 3}
```

## compact

返回数组的拷贝并移除其中的虚值。

虚值包括 false，null，0，空字符串，undefined 和 NaN。

|参数名|类型|说明|
|-----|----|---|
|arr|array|源数组|
|返回值|array|目标数组|

```javascript
compact([0, 1, false, 2, '', 3]); // -> [1, 2, 3]
```

## compose

将多个函数组合成一个函数。

每个函数使用下一个函数的返回值作为参数。

|参数名|类型|说明|
|-----|----|---|
|...fn|function|要组合的函数|
|返回值|function|目标函数|

```javascript
var welcome = compose(function (name) {
    return 'hi: ' + name;
}, function (name) {
    return name.toUpperCase() + '!';
});

welcome('licia'); // -> 'hi: LICIA!'
```

## compressImg

使用 canvas 对图像进行压缩。

|参数名|类型|说明|
|-----|----|---|
|file|File Blob|图片文件|
|[opts]|object|选项|
|[cb]|function|回调|

可用选项：

|参数名|类型|说明|
|-----|----|---|
|maxWidth|number|最大宽度|
|maxHeight|number|最大高度|
|width|number|输出图片宽度|
|height|number|输出图片高度|
|mimeType|string|Mine 类型|
|quality=0.8|number|图片质量，从 0 到 1|

为了保持图片比例，当宽度设置时高度将被忽略。

如果设置了宽高，最大宽度跟最大高度将被忽略。

```javascript
const file = new Blob([]);
compressImg(file, {
    maxWidth: 200
}, function (err, file) {
    // ...
});
```

## concat

将多个数组合并成一个数组。

|参数名|类型|说明|
|-----|----|---|
|...arr|array|要合并的数组|
|返回值|array|合并后的数组|

```javascript
concat([1, 2], [3], [4, 5]); // -> [1, 2, 3, 4, 5]
```

## contain

检查数组中是否有指定值。

|参数名|类型|说明|
|-----|----|---|
|target|array object|目标对象|
|value|*|要检查的值|
|返回值|boolean|如果有，返回真|

```javascript
contain([1, 2, 3], 1); // -> true
contain({a: 1, b: 2}, 1); // -> true
```

## convertBase

对数字进行进制转换。

|参数名|类型|说明|
|-----|----|---|
|num|number string|要转换的数字|
|from|number|源进制|
|to|number|目标进制|
|返回值|string|转换后的数字|

```javascript
convertBase('10', 2, 10); // -> '2'
convertBase('ff', 16, 2); // -> '11111111'
```

## cookie

浏览器 cookie 操作库。

### get

获取 cookie 值。

|参数名|类型|说明|
|-----|----|---|
|key|string|Cookie 键名|
|返回值|string|对应的 cookie 值|

### set

设置 cookie 值。

|参数名|类型|说明|
|-----|----|---|
|key|string|cookie 键名|
|val|string|cookie 值|
|[options]|object|cookie 选项|
|返回值|exports|cookie 模块|

### remove

移除 cookie 值。

|参数名|类型|说明|
|-----|----|---|
|key|string|Cookie 键名|
|[options]|object|Cookie 选项|
|返回值|exports|cookie 模块|

```javascript
cookie.set('a', '1', {path: '/'});
cookie.get('a'); // -> '1'
cookie.remove('a');
```

## copy

使用 document.execCommand 将文本拷贝到剪贴板。

|参数名|类型|说明|
|-----|----|---|
|text|string|要拷贝的文本|
|[cb]|function|可选回调|

```javascript
copy('text', function (err) {
    // Handle errors.
});
```

## createAssigner

用于创建 extend，extendOwn 和 defaults 等模块。

|参数名|类型|说明|
|-----|----|---|
|keysFn|function|获取对象键名的函数|
|defaults|boolean|设置为真时不对值进行覆盖|
|返回值|function|目标函数|

## createUrl

CreateObjectURL 的包裹函数。

|参数名|类型|说明|
|-----|----|---|
|data|File Blob string array|数据| 
|[opts]|object|当数据不是 File 或者 Blob 对象时使用|
|返回值|string|Blob 地址|

```javascript
createUrl('test', {type: 'text/plain'}); // -> Blob url
createUrl(['test', 'test']);
createUrl(new Blob([]));
createUrl(new File(['test'], 'test.txt'));
```

## cssSupports

检查浏览器是否支持某项 CSS 特性。

|参数名|类型|说明|
|-----|----|---|
|name|string|Css 属性名|
|[val]|string|Css 属性值|
|返回值|boolean|如果支持，返回真|

```javascript
cssSupports('display', 'flex'); // -> true
cssSupports('display', 'invalid'); // -> false
cssSupports('text-decoration-line', 'underline'); // -> true
cssSupports('grid'); // -> true
cssSupports('invalid'); // -> false
```

## curry

函数柯里化。

|参数名|类型|说明|
|-----|----|---|
|fn|function|源函数|
|返回值|function|目标函数|

```javascript
var add = curry(function (a, b) { return a + b });
var add1 = add(1);
add1(2); // -> 3
```

## dateFormat

简单日期格式化。

|参数名|类型|说明|
|-----|----|---|
|date=new Date|Date|要格式化的日期对象|
|mask|string|日期格式|
|utc=false|boolean|是否是 UTC|
|gmt=false|boolean|是否是 GMT|

|掩码|说明|
|----|----|
|d|月份天数，不补零|
|dd|月份天数，不足两位补零|
|ddd|星期几，简称|
|dddd|星期几，全称|
|m|月份，数字，不补零|
|mm|月份，数字，不足两位补零|
|mmm|月份，简称|
|mmmm|月份，全称|
|yy|年份，只显示后两位数字，不足两位补零|
|yyyy|年份，显示四位数字|
|h|小时，不补零 (12 小时制)|
|hh|小时，不足两位补零（12 小时制）|
|H|小时，不补零（24 小时制）|
|HH|小时，不足两位补零（24 小时制）|
|M|分钟，不补零|
|MM|分钟，不足两位补零|
|s|秒数，不补零|
|ss|秒数，不足两位补零|
|l L|毫秒，l 显示 3 位， L 显示 2 位|
|t|小写显示上午下午，a 或 p|
|tt|小写显示上午下午，am 或 pm|
|T|大写显示上午下午，A 或 P|
|TT|大写显示上午下午，AM 或 PM|
|Z|美国时区缩写，比如 EST 或 MDT|
|o|GMT/UTC 时区时差，比如 -0500 或 +0230|
|S|月份天数序数后缀 （st，nd，rd，或 th）|
|UTC:|是否是 UTC，必须写在最前面|

```javascript
dateFormat('isoDate'); // -> 2016-11-19
dateFormat('yyyy-mm-dd HH:MM:ss'); // -> 2016-11-19 19:00:04
dateFormat(new Date(), 'yyyy-mm-dd'); // -> 2016-11-19
```

## debounce

返回函数的防反跳版本。

|参数名|类型|说明|
|-----|----|---|
|fn|function|源函数|
|wait|number|延迟毫秒数|
|返回值|function|目标函数|

```javascript
const calLayout = debounce(function () {}, 300);
// $(window).resize(calLayout);
```

## debug

简单的 JavaScript 输出 debug 日志函数。

|参数名|类型|说明|
|-----|----|---|
|name|string|名称|
|返回值|function|打印格式化日志的函数|

```javascript
var d = debug('test');
d('doing lots of uninteresting work');
d.enabled = false;
```

## decodeUriComponent

类似 decodeURIComponent 函数，只是输入不合法时不抛出错误并尽可能地对其进行解码。

|参数名|类型|说明|
|-----|----|---|
|str|string|要解码的字符串|
|返回值|string|解码后的字符串|

```javascript
decodeUriComponent('%%25%'); // -> '%%%'
decodeUriComponent('%E0%A4%A'); // -> '\xE0\xA4%A'
```

## defaults

填充对象的默认值。

|参数名|类型|说明|
|-----|----|---|
|obj|object|目标对象|
|...src|object|提供默认值对象|
|返回值|object|目标对象|

```javascript
defaults({name: 'RedHood'}, {name: 'Unknown', age: 24}); // -> {name: 'RedHood', age: 24}
```

## define

定义一个模块，需要跟 use 模块配合使用。

|参数名|类型|说明|
|-----|----|---|
|name|string|模块名|
|[requires]|array|依赖|
|method|function|模块主体函数|

模块主体函数只有被 use 模块使用时才会被执行。

```javascript
define('A', function () {
    return 'A';
});
define('B', ['A'], function (A) {
    return 'B' + A;
});
```

## defineProp

Object.defineProperty(defineProperties) 的快捷方式。

|参数名|类型|说明|
|-----|----|---|
|obj|object|要定义的对象|
|prop|string|属性路径|
|descriptor|object|属性描述|
|返回值|object|传入对象|

|参数名|类型|说明|
|-----|----|---|
|obj|object|要定义的对象|
|prop|object|属性描述|
|返回值|object|传入对象|

```javascript
const obj = {b: {c: 3}, d: 4, e: 5};
defineProp(obj, 'a', {
    get: function () {
        return this.e * 2;
    }
});
// obj.a is equal to 10
defineProp(obj, 'b.c', {
    set: (function (val) {
        // this is pointed to obj.b
        this.e = val;
    }).bind(obj)
});
obj.b.c = 2;
// obj.a is equal to 4

const obj2 = {a: 1, b: 2, c: 3};
defineProp(obj2, {
    a: {
        get: function () {
            return this.c;
        }
    },
    b: {
        set: function (val) {
            this.c = val / 2;
        }
    }
});
// obj2.a is equal to 3
obj2.b = 4;
// obj2.a is equal to 2
```

## delay

在指定时长后执行函数。

|参数名|类型|说明|
|-----|----|---|
|fn|function|源函数|
|wait|number|延迟的毫秒数|
|[...args]|*|绑定参数|

```javascript
delay(function (text) {
    console.log(text);
}, 1000, 'later');
// -> Logs 'later' after one second
```

## delegate

事件委托。

### add

添加事件委托。

|参数名|类型|说明|
|-----|----|---|
|el|element|父元素|
|type|string|事件类型|
|selector|string|匹配选择器|
|cb|function|事件回调|

### remove

移除事件委托。

```javascript
var container = document.getElementById('container');
function clickHandler() {
    // Do something...
}
delegate.add(container, 'click', '.children', clickHandler);
delegate.remove(container, 'click', '.children', clickHandler);
```

## detectBrowser

使用 ua 检测浏览器信息。

|参数名|类型|说明|
|-----|----|---|
|ua=navigator.userAgent|string|浏览器用户代理|
|返回值|object|包含名称和版本的对象|

支持浏览器：ie，chrome，edge，firefox，opera，safari，ios（mobile safari），android（android browser）

```javascript
var browser = detectBrowser();
if (browser.name === 'ie' && browser.version < 9) {
    // Do something about old IE...
}
```

## detectMocha

检测是否有 mocha 测试框架在运行。

```javascript
detectMocha(); // -> True if mocha is running.
```

## detectOs

使用 ua 检测操作系统。

|参数名|类型|说明|
|-----|----|---|
|ua=navigator.userAgent|string|浏览器用户代理|
|返回值|string|操作系统名称|

支持操作系统: windows, os x, linux, ios, android, windows phone

```javascript
if (detectOs() === 'ios') {
    // Do something about ios...
}
```

## difference

创建一个数组，该数组的元素不存在于给定的其它数组中。

|参数名|类型|说明|
|-----|----|---|
|arr|array|源数组|
|[...rest]|array|要排除的元素|
|返回值|array|目标数组|

```javascript
difference([3, 2, 1], [4, 2]); // -> [3, 1]
```

## dotCase

将字符串转换为点式。

|参数名|类型|说明|
|-----|----|---|
|str|string|源字符串|
|返回值|string|点式字符串|

```javascript
dotCase('fooBar'); // -> foo.bar
dotCase('foo bar'); // -> foo.bar
```

## download

在浏览器端触发文件下载。

|参数名|类型|说明|
|-----|----|---|
|data|Blob File string array|下载的数据|
|name|string|文件名|
|type=text/plain|string|数据类型|

```javascript
download('test', 'test.txt');
```

## each

遍历集合中的所有元素，用每个元素当做参数调用迭代器。

|参数名|类型|说明|
|-----|----|---|
|obj|object array|目标集合|
|iterator|function|迭代器|
|[ctx]|*|函数上下文|

```javascript
each({'a': 1, 'b': 2}, function (val, key) {});
```

## easing

缓动函数，参考 http://jqueryui.com/ 。

|参数名|类型|说明|
|-----|----|---|
|percent|number|位于 0 到 1 之前的数字|
|返回值|number|计算结果|

```javascript
easing.linear(0.5); // -> 0.5
easing.inElastic(0.5, 500); // -> 0.03125
```

## endWith

检查字符串是否以指定字符串结尾。

|参数名|类型|说明|
|-----|----|---|
|str|string|目标字符串|
|suffix|string|字符串后缀|
|返回值|boolean|如果是后缀，返回真|

```javascript
endWith('ab', 'b'); // -> true
```

## escape

转义 HTML 字符串，替换 &，<，>，"，`，和 ' 字符。


|参数名|类型|说明|
|-----|----|---|
|str|string|源字符串|
|返回值|string|目标字符串|

```javascript
escape('You & Me'); // -> 'You &amp; Me'
```

## escapeJsStr

转义字符串为合法的 JavaScript 字符串字面量。

http://www.ecma-international.org/ecma-262/5.1/#sec-7.8.4

|参数名|类型|说明|
|-----|----|---|
|str|string|源字符串|
|返回值|string|目标字符串|

```javascript
escapeJsStr('\"\n'); // -> '\\"\\\\n'
```

## escapeRegExp

转义特殊字符用于 RegExp 构造函数。

|参数名|类型|说明|
|-----|----|---|
|str|string|源字符串|
|返回值|string|目标字符串|

```javascript
escapeRegExp('[licia]'); // -> '\\[licia\\]'
```

## evalCss

加载 css 到页面中。

|参数名|类型|说明|
|-----|----|---|
|css|string|css 代码|

```javascript
evalCss('body{background:#08c}');
```

## evalJs

在指定的上下文执行 js 代码。

|参数名|类型|说明|
|-----|----|---|
|js|string|JavaScript 代码|
|ctx=global|object|上下文|

```javascript
evalJs('5+2'); // -> 7
evalJs('this.a', {a: 2}); // -> 2
```

## every

检查是否集合中的所有元素都能通过真值检测。

|参数名|类型|说明|
|-----|----|---|
|object|array object|目标集合|
|[iterator]|function|真值检测函数|
|[context]|*|函数上下文|
|返回值|boolean|如果都能通过，返回真|

```javascript
every([2, 4], function (val) {
    return val % 2 === 0;
}); // -> false
```

## extend

复制多个对象中的所有属性到目标对象上。

|参数名|类型|说明|
|-----|----|---|
|destination|object|目标对象|
|...sources|object|源对象|
|返回值|object|目标对象|

```javascript
extend({name: 'RedHood'}, {age: 24}); // -> {name: 'RedHood', age: 24}
```

## extendDeep

类似 extend，但会递归进行扩展。

|参数名|类型|说明|
|-----|----|---|
|destination|object|目标对象|
|...sources|object|源对象|
|返回值|object|目标对象|

```javascript
extendDeep({
    name: 'RedHood',
    family: {
        mother: 'Jane',
        father: 'Jack'
    }
}, {
    family: {
        brother: 'Bruce'
    }
});
// -> {name: 'RedHood', family: {mother: 'Jane', father: 'Jack', brother: 'Bruce'}}
```

## extendOwn

类似 extend，但只复制自己的属性，不包括原型链上的属性。

|参数名|类型|说明|
|-----|----|---|
|obj|object|目标对象|
|*src|object|源对象|
|返回值|object|目标对象|

```javascript
extendOwn({name: 'RedHood'}, {age: 24}); // -> {name: 'RedHood', age: 24}
```

## extractBlockCmts

从源码中提取块注释。

|参数名|类型|说明|
|-----|----|---|
|str|string|源码|
|返回值|array|块注释|

```javascript
extractBlockCmts('\/*licia*\/'); // -> ['licia']
```

## extractUrls

从文本中提取 url。

|参数名|类型|说明|
|-----|----|---|
|str|string|文本|
|返回值|array|url 列表|

```javascript
var str = '[Official site: http://eustia.liriliri.io](http://eustia.liriliri.io)';
extractUrls(str); // -> ['http://eustia.liriliri.io']
```

## fetch

将 XMLHttpRequest 转换为 promise 的形式。

注意：这并不是 fetch 的 pollyfill。

|参数名|类型|说明|
|-----|----|---|
|url|string|请求地址|
|[options]|object|请求选项|
|返回值|Promise|请求 promise|

```javascript
fetch('test.json', {
    method: 'GET',
    timeout: 3000,
    headers: {},
    body: ''
}).then(function (res) {
    return res.json();
}).then(function (data) {
    console.log(data);
});
```

## fibonacci

计算斐波那契数列中某位数字。

|参数名|类型|说明|
|-----|----|---|
|n|number|序号 n|
|返回值|number|斐波那契数列 n 位的数字|

```javascript
fibonacci(1); // -> 1
fibonacci(3); // -> 2
```

## fileSize

将字节数转换为易于阅读的形式。

|参数名|类型|说明|
|-----|----|---|
|bytes|number|文件字节大小|
|返回值|string|易于阅读的文件大小|

```javascript
fileSize(5); // -> '5'
fileSize(1500); // -> '1.46K'
fileSize(1500000); // -> '1.43M'
fileSize(1500000000); // -> '1.4G'
fileSize(1500000000000); // -> '1.36T'
```

## fill

在数组指定位置填充指定值。

|参数名|类型|说明|
|-----|----|---|
|list|array|源数组|
|value|*|填充数组的值|
|start=0|number|起始位置|
|end=arr.length|number|结束位置，不包括|
|返回值|array|目标数组|

```javascript
fill([1, 2, 3], '*'); // -> ['*', '*', '*']
fill([1, 2, 3], '*', 1, 2); // -> [1, '*', 3]
```

## filter

遍历集合中的每个元素，返回所有通过真值检测的元素组成的数组。

|参数名|类型|说明|
|-----|----|---|
|obj|array|要遍历的集合|
|predicate|function|真值检测函数|
|[ctx]|*|函数上下文|
|返回值|array|包含所有通过真值检测元素的数组|

```javascript
filter([1, 2, 3, 4, 5], function (val) {
    return val % 2 === 0;
}); // -> [2, 4]
```

## find

找到集合中第一个通过真值检测的元素。

|参数名|类型|说明|
|-----|----|---|
|object|array object|目标集合|
|iterator|function|真值检测函数|
|[context]|*|函数上下文|
|返回值|*|第一个通过的元素|

```javascript
find([{
    name: 'john',
    age: 24
}, {
    name: 'jane',
    age: 23
}], function (val) {
    return val.age === 23;
}); // -> {name: 'jane', age: 23}
```

## findIdx

返回第一个通过真值检测元素在数组中的位置。

|参数名|类型|说明|
|-----|----|---|
|arr|array|目标集合|
|predicate|function|真值检测函数|
|返回值|number|第一个符合条件元素的位置|

```javascript
findIdx([{
    name: 'john',
    age: 24
}, {
    name: 'jane',
    age: 23
}], function (val) {
    return val.age === 23;
}); // -> 1
```

## findKey

返回对象中第一个通过真值检测的属性键名。

|参数名|类型|说明|
|-----|----|---|
|obj|object|目标对象|
|predicate|function|真值检测函数|
|[ctx]|*|函数上下文|
|返回值|string|符合条件的键名|

```javascript
findKey({a: 1, b: 2}, function (val) {
    return val === 1;
}); // -> a
```

## findLastIdx

同 findIdx，只是查找顺序改为从后往前。

|参数名|类型|说明|
|-----|----|---|
|arr|array|目标集合|
|predicate|function|真值检测函数|
|返回值|number|从后往前，第一个符合条件元素的位置|

```javascript
findLastIdx([{
    name: 'john',
    age: 24
}, {
    name: 'jane',
    age: 23
}, {
    name: 'kitty',
    age: 24
}], function (val) {
    return val.age === 24;
}); // -> 2
```

## flatten

递归拍平数组。

|参数名|类型|说明|
|-----|----|---|
|arr|array|源数组|
|返回值|array|目标数组|

```javascript
flatten(['a', ['b', ['c']], 'd', ['e']]); // -> ['a', 'b', 'c', 'd', 'e']
```

## fnParams

获取函数的参数名列表。

|参数名|类型|说明|
|-----|----|---|
|fn|function string|目标函数|
|返回值|array|参数名|

```javascript
fnParams(function (a, b) {}); // -> ['a', 'b']
```

## format

使用类似于 printf 的方式来格式化字符串。

|参数名|类型|说明|
|-----|----|---|
|str|string|源字符串|
|...values|*|替换占位符的值|
|返回值|string|目标字符串|

### 格式占位符 

|占位符|说明|
|-----|----|
|%s|字符串|
|%d, %i|整数|
|%f|浮点数|
|%o|对象|

```javascript
format('%s_%s', 'foo', 'bar'); // -> 'foo bar'
```

## fraction

转换数字为分数形式。

|参数名|类型|说明|
|-----|----|---|
|num|number|数字|
|返回值|string|对应的分数|

```javascript
fraction(1.2); // -> '6/5'
```

## freeze

Object.freeze 的快捷方式。

如果不支持 Object.freeze，使用 Object.defineProperties 进行模拟。

|参数名|类型|说明|
|-----|----|---|
|obj|object|目标对象|
|返回值|object|目标对象|

```javascript
var a = {b: 1};
freeze(a);
a.b = 2;
console.log(a); // -> {b: 1}
```

## freezeDeep

递归进行 Object.freeze。

|参数名|类型|说明|
|-----|----|---|
|obj|object|目标对象|
|返回值|object|目标对象|

```javascript
var a = {b: {c: 1}};
freezeDeep(a);
a.b.c = 2;
console.log(a); // -> {b: {c: 1}}
```

## fs

node.js fs 模块的 promise 版本。

```javascript
fs.readFile('test.js').then(function (data) {
    // Do something
}).catch(function (err) {
    // Handle errors
});
```

## fullscreen

全屏接口封装。

### request

进入全屏。

|参数名|类型|说明|
|-----|----|---|
|[el]|Element|全屏元素|

### exit

退出全屏。

### toggle

切换全屏。

|参数名|类型|说明|
|-----|----|---|
|[el]|Element|全屏元素|

### isActive

是否全屏。

### getEl

获取全屏元素。

### isEnabled

是否可以进入全屏。

```javascript
fullscreen.request();
fullscreen.isActive(); // -> false, not a synchronous api
fullscreen.on('error', () => {});
fullscreen.on('change', () => {});
```

## fuzzySearch

模糊搜索。

|参数名|类型|说明|
|-----|----|---|
|needle|string|搜索字符串|
|haystacks|array|搜索集合|
|options|object|搜索选项|

可用选项：

|参数名|类型|说明|
|-----|----|---|
|caseSensitive=false|boolean|是否大小写敏感|
|[key]|string array|搜索项是对象时的字符串路径|

```javascript
fuzzySearch('lic', ['licia', 'll', 'lic']); // -> ['lic', 'licia']
fuzzySearch('alpha-test', [{
    name: 'alpha-test-1'
}, {
    name: 'beta-test'
}], {
    key: 'name'
}); // -> [{ name: 'alpha-test-1' }]
```

## gcd

使用欧几里德算法求最大公约数。

|参数名|类型|说明|
|-----|----|---|
|a|number|要计算的数字|
|b|number|要计算的数字|
|返回值|number|最大公约数|

```javascript
gcd(121, 44); // -> 11
```

## getPort

获取有效的 TCP 端口。

|参数名|类型|说明|
|-----|----|---|
|[port]|number array|首选端口|
|返回值|Promise|有效端口|

如果首选端口无法使用，将会返回一个有效的随机端口。

```javascript
getPort([3000, 3001]).then(port => {
    console.log(port);
});
```

## getUrlParam

获取 url 参数值。

|参数名|类型|说明|
|-----|----|---|
|name|string|参数名|
|url=location|string|目标 url|
|返回值|string|参数值|

```javascript
getUrlParam('test', 'http://example.com/?test=true'); // -> 'true'
```

## has

检查属性是否是对象自身的属性（原型链上的不算）。

|参数名|类型|说明|
|-----|----|---|
|obj|object|目标对象|
|key|string|键名|
|返回值|boolean|如果是自身的属性，返回真|

```javascript
has({one: 1}, 'one'); // -> true
```

## hotkey

监听键盘触发对应的事件。

### on

注册键盘按键监听器。

|参数名|类型|说明|
|-----|----|---|
|key|string|按键|
|listener|function|监听器|

### off

注销监听器。

```javascript
hotkey.on('k', function () {
    console.log('k is pressed');
});
function keyDown() {}
hotkey.on('shift+a, shift+b', keyDown);
hotkey.off('shift+a', keyDown);
```

## hslToRgb

将 hsl 格式的颜色值转换为 rgb 格式。

|参数名|类型|说明|
|-----|----|---|
|hsl|array|hsl 值|
|返回值|array|rgb 值|

```javascript
hslToRgb([165, 59, 50, 0.8]); // -> [52, 203, 165, 0.8]
```

## identity

返回传入的第一个参数。

|参数名|类型|说明|
|-----|----|---|
|val|*|任何值|
|返回值|*|第一个参数|

```javascript
identity('a'); // -> 'a'
```

## idxOf

返回指定值第一次在数组中出现的位置。

|参数名|类型|说明|
|-----|----|---|
|arr|array|目标数组|
|val|*|要查找的值|
|fromIdx=0|number|查找起始位置|
|返回值|number|第一次出现的位置，如果没有，返回 -1|

```javascript
idxOf([1, 2, 1, 2], 2, 2); // -> 3
```

## indent

对文本的每一行进行缩进处理。

|参数名|类型|说明|
|-----|----|---|
|str|string|源字符串|
|[char]|string|缩进字符|
|[len]|number|缩进长度|
|返回值|string|目标字符串|

```javascript
indent('foo\nbar', ' ', 4); // -> 'foo\n    bar'
```

## inherits

使构造函数继承另一个构造函数原型链上的方法。

|参数名|类型|说明|
|-----|----|---|
|Class|function|子类|
|SuperClass|function|父类|

```javascript
function People(name) {
    this._name = name;
}
People.prototype = {
    getName: function () {
        return this._name;
    }
};
function Student(name) {
    this._name = name;
}
inherits(Student, People);
var s = new Student('RedHood');
s.getName(); // -> 'RedHood'
```

## insertionSort

插入排序实现。

|参数名|类型|说明|
|-----|----|---|
|arr|array|要排序的数组|
|[cmp]|function|比较器|
|返回值|array|有序数组|

```javascript
insertionSort([2, 1]); // -> [1, 2]
```

## intersect

计算所有数组的交集。

|参数名|类型|说明|
|-----|----|---|
|...arr|array|源数组|
|返回值|array|交集|

```javascript
intersect([1, 2, 3, 4], [2, 1, 10], [2, 1]); // -> [1, 2]
```

## intersectRange

计算两个区间的交集。

|参数名|类型|说明|
|-----|----|---|
|a|object|区间 a|
|b|object|区间 b|
|返回值|object|如果存在区间交集，返回它|

```javascript
intersectRange({start: 0, end: 12}, {start: 11, end: 13});
// -> {start: 11, end: 12}
intersectRange({start: 0, end: 5}, {start: 6, end: 7});
// -> undefined
```

## invert

生成一个新对象，该对象的键名和键值进行调换。

|参数名|类型|说明|
|-----|----|---|
|obj|object|源对象|
|返回值|object|目标对象|

如果对象存在重复的键值，后面的值会覆盖前面的值。

```javascript
invert({a: 'b', c: 'd', e: 'f'}); // -> {b: 'a', d: 'c', f: 'e'}
```

## isAbsoluteUrl

检查 url 是否是绝对地址。

|参数名|类型|说明|
|-----|----|---|
|url|string|目标 url|
|返回值|boolean|如果是绝对地址，返回真|

```javascript
isAbsoluteUrl('http://www.surunzi.com'); // -> true
isAbsoluteUrl('//www.surunzi.com'); // -> false
isAbsoluteUrl('surunzi.com'); // -> false
```

## isArgs

检查值是否是参数类型。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是参数类型，返回真|

```javascript
(function () {
    isArgs(arguments); // -> true
})();
```

## isArr

检查值是否是数组类型。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是数组类型，返回真|

```javascript
isArr([]); // -> true
isArr({}); // -> false
```

## isArrBuffer

检查值是否是 ArrayBuffer 类型。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是 ArrayBuffer 类型，返回真|

```javascript
isArrBuffer(new ArrayBuffer(8)); // -> true
```

## isArrLike

检查值是否是类数组对象。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是类数组对象，返回真|

对于函数，返回假。

```javascript
isArrLike('test'); // -> true
isArrLike(document.body.children); // -> true;
isArrLike([1, 2, 3]); // -> true
```

## isBlob

检查值是否是 Blob 类型。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是 Blob 类型，返回真|

```javascript
isBlob(new Blob([])); // -> true;
isBlob([]); // -> false
```

## isBool

检查值是否是布尔类型。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是布尔类型，返回真|

```javascript
isBool(true); // -> true
isBool(false); // -> true
isBool(1); // -> false
```

## isBrowser

检测是否运行于浏览器环境。

```javascript
console.log(isBrowser); // -> true if running in a browser
```

## isBuffer

检查值是否是 Buffer 类型。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是 Buffer 类型，返回真|

```javascript
isBuffer(new Buffer(4)); // -> true
```

## isClose

检查两个数字是否近似相等。

`abs(a-b) <= max(relTol * max(abs(a), abs(b)), absTol)`

|参数名|类型|说明|
|-----|----|---|
|a|number|要比较的数字|
|b|number|要比较的数字|
|relTol=1e-9|number|相对误差|
|absTol=0|number|绝对误差|
|返回值|boolean|如果近似相等，返回真|

```javascript
isClose(1, 1.0000000001); // -> true
isClose(1, 2); // -> false
isClose(1, 1.2, 0.3); // -> true
isClose(1, 1.2, 0.1, 0.3); // -> true
```

## isDataUrl

检查字符串是否是有效的 Data Url。

|参数名|类型|说明|
|-----|----|---|
|str|string|要检查的字符串|
|返回值|boolean|如果是有效的 Data Url，返回真|

```javascript
isDataUrl('http://eustia.liriliri.io'); // -> false
isDataUrl('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D'); // -> true
```

## isDate

检查值是否是 Date 类型。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是 Date 类型，返回真|

```javascript
isDate(new Date()); // -> true
```

## isEl

检查值是否是 DOM 元素。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是 DOM 元素，返回真|

```javascript
isEl(document.body); // -> true
```

## isEmail

简单检查值是否是合法的邮件地址。

|参数名|类型|说明|
|-----|----|---|
|val|string|要检查的值|
|返回值|boolean|如果是合法的邮件地址，返回真|

```javascript
isEmail('surunzi@foxmail.com'); // -> true
```

## isEmpty

检查值是否是空对象或空数组。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果为空，返回真|

```javascript
isEmpty([]); // -> true
isEmpty({}); // -> true
isEmpty(''); // -> true
```

## isEqual

对两个对象进行深度比较，如果相等，返回真。

|参数名|类型|说明|
|-----|----|---|
|val|*|要比较的对象|
|other|*|要比较的对象|
|返回值|boolean|如果相等，返回真|

```javascript
isEqual([1, 2, 3], [1, 2, 3]); // -> true
```

## isErr

检查值是否是 Error 类型。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是 Error 类型，返回真|

```javascript
isErr(new Error()); // -> true
```

## isEven

检查数字是否是偶数。

|参数名|类型|说明|
|-----|----|---|
|num|number|要检查的数字|
|返回值|boolean|如果是偶数，返回真|

```javascript
isEven(0); // -> true
isEven(1); // -> false
isEven(2); // -> true
```

## isFile

检查值是否是 File 类型。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是 File 类型，返回真|

```javascript
isFile(new File(['test'], "test.txt", {type: "text/plain"})); // -> true
```

## isFinite

检查值是否是有限数字。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是有限数字，返回真|

```javascript
isFinite(3); // -> true
isFinite(Infinity); // -> false
```

## isFn

检查值是否是函数。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是函数，返回真|

Generator 函数返回真。

```javascript
isFn(function() {}); // -> true
isFn(function*() {}); // -> true
```

## isGeneratorFn

检查值是否是 Generator 函数。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是 Generator 函数，返回真|

```javascript
isGeneratorFn(function * () {}); // -> true;
isGeneratorFn(function () {}); // -> false;
```

## isInt

检查值是否是整数。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是整数，返回真|

```javascript
isInt(5); // -> true
isInt(5.1); // -> false
isInt({}); // -> false
```

## isJson

检查值是否是有效的 JSON。

该模块使用 `JSON.parse()` 和 `try... catch` 进行检测。

|参数名|类型|说明|
|-----|----|---|
|val|string|JSON 字符串|
|返回值|boolean|如果是有效的 JSON，返回真|

```javascript
isJson('{"a": 5}'); // -> true
isJson("{'a': 5}"); // -> false
```

## isLeapYear

检查年份是否是闰年。

|参数名|类型|说明|
|-----|----|---|
|year|number|要检查的年份|
|返回值|boolean|如果是闰年，返回真|

```javascript
isLeapYear(2000); // -> true
isLeapYear(2002); // -> false
```

## isMap

检查值是否是 Map 对象。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是 Map 类型，返回真|

```javascript
isMap(new Map()); // -> true
isMap(new WeakMap()); // -> false
```

## isMatch

检查对象所有键名和键值是否在指定的对象中。

|参数名|类型|说明|
|-----|----|---|
|obj|object|目标对象|
|src|object|进行匹配的对象|
|返回值|boolean|如果匹配，返回真|

```javascript
isMatch({a: 1, b: 2}, {a: 1}); // -> true
```

## isMiniProgram

检测是否运行于微信小程序环境中。

```javascript
console.log(isMiniProgram); // -> true if running in mini program.
```

## isMobile

使用 ua 检测是否运行于移动端浏览器。

|参数名|类型|说明|
|-----|----|---|
|ua=navigator.userAgent|string|浏览器用户代理|
|返回值|boolean|如果是移动端浏览器，返回真|

```javascript
isMobile(navigator.userAgent);
```

## isNaN

检测值是否是 NaN。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是 NaN，返回真|

跟全局 isNaN 不同的是，Undefined 不是 NaN。

```javascript
isNaN(0); // -> false
isNaN(NaN); // -> true
```

## isNative

检查值是否是原生函数。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是原生函数，返回真|

```javascript
isNative(function () {}); // -> false
isNative(Math.min); // -> true
```

## isNil

检查值是否是 null 或 undefined，等价于 value == null。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是 null 或 undefined，返回真|

```javascript
isNil(null); // -> true
isNil(void 0); // -> true
isNil(undefined); // -> true
isNil(false); // -> false
isNil(0); // -> false
isNil([]); // -> false
```

## isNode

检测是否运行于 node 环境中。

```javascript
console.log(isNode); // -> true if running in node
```

## isNull

检查值是否是 Null 类型。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是 Null 类型，返回真|

```javascript
isNull(null); // -> true
```

## isNum

检测值是否是数字类型。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是数字，返回真|

```javascript
isNum(5); // -> true
isNum(5.1); // -> true
isNum({}); // -> false
```

## isNumeric

检查值是否是数字，包括数字字符串。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是数字，返回真|

```javascript
isNumeric(1); // -> true
isNumeric('1'); // -> true
isNumeric(Number.MAX_VALUE); // -> true
isNumeric(0xFF); // -> true
isNumeric(''); // -> false
isNumeric('1.1.1'); // -> false
isNumeric(NaN); // -> false
```

## isObj

检查值是否是对象。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是对象，返回真|

[标准定义](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)

```javascript
isObj({}); // -> true
isObj([]); // -> true
```

## isOdd

检查数字是否是奇数。

|参数名|类型|说明|
|-----|----|---|
|num|number|要检查的数字|
|返回值|boolean|如果是奇数，返回真|

```javascript
isOdd(0); // -> false
isOdd(1); // -> true
isOdd(2); // -> false
```

## isPlainObj

检查值是否是用 Object 构造函数创建的对象。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是 plain object，返回真|

```javascript
isPlainObj({}); // -> true
isPlainObj([]); // -> false
isPlainObj(function () {}); // -> false
```

## isPrime

检查整数是否是质数。

|参数名|类型|说明|
|-----|----|---|
|num|number|要检查的数字|
|返回值|boolean|如果是质数，返回真|

```javascript
isPrime(11); // -> true
isPrime(8); // -> false
```

## isPrimitive

检测值是否是字符串，数字，布尔值或 null。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是原始类型，返回真|

```javascript
isPrimitive(5); // -> true
isPrimitive('abc'); // -> true
isPrimitive(false); // -> true
```

## isPromise

检查值是否是类 promise 对象。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是类 promise 对象，返回真|

```javascript
isPromise(new Promise(function () {})); // -> true
isPromise({}); // -> false
```

## isRegExp

检查值是否是正则类型。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是正则类型，返回真|

```javascript
isRegExp(/a/); // -> true
```

## isRelative

检查路径是否是相对路径。

|参数名|类型|说明|
|-----|----|---|
|path|string|要检查的路径|
|返回值|boolean|如果是相对路径，返回真|

```javascript
isRelative('README.md'); // -> true
```

## isRetina

判断是否运行在 retina 屏幕的设备上。

```javascript
console.log(isRetina); // -> true if high DPR
```

## isSet

检查值是否是 Set 类型。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是 Set 类型，返回真|

```javascript
isSet(new Set()); // -> true
isSet(new WeakSet()); // -> false
```

## isSorted

检查数组是否有序。

|参数名|类型|说明|
|-----|----|---|
|arr|array|目标数组|
|[cmp]|function|比较器|
|返回值|boolean|如果数组有序，返回真|

```javascript
isSorted([1, 2, 3]); // -> true
isSorted([3, 2, 1]); // -> false
```

## isStr

检查值是否是字符串。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是字符串，返回真|

```javascript
isStr('licia'); // -> true
```

## isStream

检查值是否是 Node.js Stream 类型。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是 Node.js Stream 类型，返回真|

```javascript
var stream = require('stream');

isStream(new stream.Stream()); // -> true
```

## isTypedArr

检查值是否 TypedArray 类型。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果值是 TypedArray 类型，返回真|

```javascript
isTypedArr([]); // -> false
isTypedArr(new Uint8Array(8)); // -> true
```

## isUndef

检查值是否是 undefined。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是 undefined，返回真|

```javascript
isUndef(void 0); // -> true
isUndef(null); // -> false
```

## isUrl

简单检查值是否是有效的 url 地址。

|参数名|类型|说明|
|-----|----|---|
|val|string|要检查的值|
|返回值|boolean|如果是有效的 url 地址，返回真|

```javascript
isUrl('http://www.example.com?foo=bar&param=test'); // -> true
```

## isWeakMap

检查值是否是 WeakMap 类型。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是 WeakMap 类型，返回真|

```javascript
isWeakMap(new Map()); // -> false
isWeakMap(new WeakMap()); // -> true
```

## isWeakSet

检查值是否是 WeakSet 类型。

|参数名|类型|说明|
|-----|----|---|
|val|*|要检查的值|
|返回值|boolean|如果是 WeakSet 类型，返回真|

```javascript
isWeakSet(new Set()); // -> false
isWeakSet(new WeakSet()); // -> true
```

## isWindows

检测是否运行在 windows 操作系统上。

```javascript
console.log(isWindows); // -> true if running on windows
```

## jsonp

简单 jsonp 实现。

|参数名|类型|说明|
|-----|----|---|
|opts|object|jsonp 选项|

可用选项：

|参数名|类型|说明|
|-----|----|---|
|url|string|请求地址|
|data|object|请求数据|
|success|function|成功回调|
|param=callback|string|回调参数名|
|[name]|string|回调函数名|
|error|function|失败回调|
|complete|function|结束回调|
|timeout|number|请求超时|

```javascript
jsonp({
    url: 'http://example.com',
    data: {test: 'true'},
    success: function (data) {
        // ...
    }
});
```

## kebabCase

将字符串转换为短横线式。

|参数名|类型|说明|
|-----|----|---|
|str|string|源字符串|
|返回值|string|短横线式字符串|

```javascript
kebabCase('fooBar'); // -> foo-bar
kebabCase('foo bar'); // -> foo-bar
kebabCase('foo_bar'); // -> foo-bar
kebabCase('foo.bar'); // -> foo-bar
```

## keyCode

键码键名转换。

获取键码对应的键名。

|参数名|类型|说明|
|-----|----|---|
|code|number|键码|
|返回值|string|对应的键名|

获取键名对应的键码。

|参数名|类型|说明|
|-----|----|---|
|name|string|键名|
|返回值|number|对应的键码|

```javascript
keyCode(13); // -> 'enter'
keyCode('enter'); // -> 13
```

## keys

返回包含对象自身可遍历所有键名的数组。

|参数名|类型|说明|
|-----|----|---|
|obj|object|目标对象|
|返回值|array|所有键名|

```javascript
keys({a: 1}); // -> ['a']
```

## kill

杀死进程。

|参数名|类型|说明|
|-----|----|---|
|pid|number|进程 ID|

```javascript
kill(9420);
```

## last

获取数组的最后一个元素。

|参数名|类型|说明|
|-----|----|---|
|arr|array|目标数组|
|返回值|*|数组的最后一个元素|

```javascript
last([1, 2]); // -> 2
```

## lazyRequire

模块懒加载。

```javascript
var r = lazyRequire(require);

var _ = r('underscore');

// underscore is required only when _ is called.
_().isNumber(5);
```

## levenshtein

计算字符串编辑距离，使用 levenshtein 算法。

|参数名|类型|说明|
|-----|----|---|
|a|string|字符串 a|
|b|string|字符串 b|
|返回值|number|a 和 b 的字符串编辑距离|

```javascript
levenshtein('cat', 'cake'); // -> 2
```

## linkify

将文本中的 url 地址转换为超链接。

|参数名|类型|说明|
|-----|----|---|
|str|string|源字符串|
|[hyperlink]|function|转换超链接函数|
|返回值|string|目标字符串|

```javascript
var str = 'Official site: http://eustia.liriliri.io'
linkify(str); // -> 'Official site: <a href="http://eustia.liriliri.io">http://eustia.liriliri.io</a>'
linkify(str, function (url) {
    return '<a href="' + url + '" target="_blank">' + url + '</a>';
});
```

## loadCss

往页面插入样式链接。

|参数名|类型|说明|
|-----|----|---|
|src|string|样式文件地址|
|[cb]|function|加载完回调|

```javascript
loadCss('style.css', function (isLoaded) {
    // Do something...
});
```

## loadImg

加载指定地址的图片。

|参数名|类型|说明|
|-----|----|---|
|src|string|图片地址|
|[cb]|function|加载完回调|

```javascript
loadImg('http://eustia.liriliri.io/img.jpg', function (err, img) {
    console.log(img.width, img.height);
});
```

## loadJs

往页面插入脚本链接。

|参数名|类型|说明|
|-----|----|---|
|src|string|脚本地址|
|cb|function|加载完回调|

```javascript
loadJs('main.js', function (isLoaded) {
    // Do something...
});
```

## longest

获取数组中最长的一项。

|参数名|类型|说明|
|-----|----|---|
|arr|array|目标数组|
|返回值|*|最长的一项|

```javascript
longest(['a', 'abcde', 'abc']); // -> 'abcde'
```

## lowerCase

转换字符串为小写。

|参数名|类型|说明|
|-----|----|---|
|str|string|源字符串|
|返回值|string|目标字符串|

```javascript
lowerCase('TEST'); // -> 'test'
```

## lpad

对字符串进行左填充。

|参数名|类型|说明|
|-----|----|---|
|str|string|源字符串|
|len|number|填充长度|
|[chars]|string|填充字符串|
|返回值 |string|目标字符串|

```javascript
lpad('a', 5); // -> '    a'
lpad('a', 5, '-'); // -> '----a'
lpad('abc', 3, '-'); // -> 'abc'
lpad('abc', 5, 'ab'); // -> 'ababc'
```

## ltrim

删除字符串头部指定字符或空格。

|参数名|类型|说明|
|-----|----|---|
|str|string|源字符串|
|chars|string array|删除字符|
|返回值|string|目标字符串|

```javascript
ltrim(' abc  '); // -> 'abc  '
ltrim('_abc_', '_'); // -> 'abc_'
ltrim('_abc_', ['a', '_']); // -> 'bc_'
```

## map

对集合的每个元素调用转换函数生成与之对应的数组。

|参数名|类型|说明|
|-----|----|---|
|object|array object|源集合|
|iterator|function|转换函数|
|[context]|*|函数上下文|
|返回值|array|目标集合|

```javascript
map([4, 8], function (n) { return n * n; }); // -> [16, 64]
```

## mapObj

类似 map，但针对对象，生成一个新对象。

|参数名|类型|说明|
|-----|----|---|
|object|object|源对象|
|iterator|function|转换函数|
|[context]|*|函数上下文|
|返回值|object|目标对象|

```javascript
mapObj({a: 1, b: 2}, function (val, key) { return val + 1 }); // -> {a: 2, b: 3}
```

## matcher

传入对象返回函数，如果传入参数中包含该对象则返回真。

|参数名|类型|说明|
|-----|----|---|
|attrs|object|要匹配的对象|
|返回值|function|真值检测函数|

```javascript
const objects = [
    {a: 1, b: 2, c: 3 },
    {a: 4, b: 5, c: 6 }
];
// filter(objects, matcher({a: 4, c: 6 }));
```

## max

获取数字中的最大值。

|参数名|类型|说明|
|-----|----|---|
|...num|number|要计算的数字|
|返回值|number|最大值|

```javascript
max(2.3, 1, 4.5, 2); // 4.5
```

## md5

MD5 算法实现。

|参数名|类型|说明|
|-----|----|---|
|msg|string|密文|
|返回值|string|MD5 摘要|

```javascript
md5('licia'); // -> 'e59f337d85e9a467f1783fab282a41d0'
```

## memStorage

Web Storage 接口的纯内存实现。

当 localStorage 或者 sessionStorage 无法使用时可以使用其作为替代。

```javascript
var localStorage = window.localStorage || memStorage;
localStorage.setItem('test', 'licia');
```

## memoize

缓存函数计算结果。

|参数名|类型|说明|
|-----|----|---|
|fn|function|源函数|
|[hashFn]|function|计算缓存键名函数|
|返回值|function|目标函数|

```javascript
var fibonacci = memoize(function(n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
});
```

## mergeSort

归并排序实现。

注意：它不改变原数组。

|参数名|类型|说明|
|-----|----|---|
|arr|array|要排序的数组|
|[cmp]|function|比较器|
|返回值|array|有序数组|

```javascript
mergeSort([2, 1]); // -> [1, 2]
```

## meta

meta 操作库，将 name 和 content 属性值转换为键值对。

获取指定 meta 值。如果忽略 meta 名，所有的 meta 键值对都被返回。

|参数名|类型|说明|
|-----|----|---|
|[name]|string array|meta 名|
|返回值|string|meta 值|

设置 meta 值。

|参数名|类型|说明|
|-----|----|---|
|name|string|meta 名|
|content|string|meta 值|

|参数名|类型|说明|
|-----|----|---|
|metas|object|包含所有 meta 键值对的对象|

### remove

移除指定 meta。

|参数名|类型|说明|
|-----|----|---|
|name|string array|meta 名|

```javascript
// <meta name="a" content="1"/> <meta name="b" content="2"/> <meta name="c" content="3"/>
meta(); // -> {a: '1', b: '2', c: '3'}
meta('a'); // -> '1'
meta(['a', 'c']); // -> {a: '1', c: '3'}
meta('d', '4');
meta({
    d: '5',
    e: '6',
    f: '7'
});
meta.remove('d');
meta.remove(['e', 'f']);
```

## methods

获取对象中所有方法名。

|参数名|类型|说明|
|-----|----|---|
|obj|object|目标对象|
|返回值|array|方法名列表|

```javascript
methods(console); // -> ['Console', 'assert', 'dir', ...]
```

## mime

常用 mime 类型。

|参数名|类型|说明|
|-----|----|---|
|name|string|扩展名|
|返回值|string|mime 类型|

|参数名|类型|说明|
|-----|----|---|
|name|string|mime 类型|
|返回值|string|扩展名|

该模块只包含常用的文件类型。

```javascript
mime('jpg'); // -> 'image/jpeg'
mime('bmp'); // -> 'image/bmp'
mime('video/mp4'); // -> 'mp4'
```

## min

获取数字中的最小值。

|参数名|类型|说明|
|-----|----|---|
|...num|number|要计算的数字|
|返回值|number|最小值|

```javascript
min(2.3, 1, 4.5, 2); // 1
```

## mkdir

递归地创建文件夹。

|参数名|类型|说明|
|-----|----|---|
|dir|string|文件夹路径|
|mode=0777|number|文件夹模式|
|[callback]|function|回调|

```javascript
mkdir('/tmp/foo/bar/baz', function (err) {
    if (err) console.log(err);
    else console.log('Done');
});
```

## moment

简单的类 moment.js 实现。

它只支持一小部分的 moment.js api。

### 可用方法 

format，isValid，isLeapYear，isSame，isBefore，isAfter，year，
month，date，hour，minute，second，millisecond，unix，clone，
toDate，toArray，toJSON，toISOString，toObject，toString，set，
startOf，endOf，add，subtract，diff

### 不支持特性

时区以及 quarter 和 week 单位。

注意：格式化功能使用 dateFormat 模块，所以掩码格式并不完全与 moment.js 一致。

```javascript
moment('20180501').format('yyyy-mm-dd'); // -> '2018-05-01'
```

## ms

时长字符串与毫秒转换库。

转换时长字符串为毫秒。

|参数名|类型|说明|
|-----|----|---|
|str|string|字符串格式|
|返回值|number|毫秒|

转换毫秒为时长字符串。

|参数名|类型|说明|
|-----|----|---|
|num|number|毫秒|
|返回值|string|字符串格式|

```javascript
ms('1s'); // -> 1000
ms('1m'); // -> 60000
ms('1.5h'); // -> 5400000
ms('1d'); // -> 86400000
ms('1y'); // -> 31557600000
ms('1000'); // -> 1000
ms(1500); // -> '1.5s'
ms(60000); // -> '1m'
```

## negate

创建一个将原函数结果取反的函数。

|参数名|类型|说明|
|-----|----|---|
|predicate|function|源函数|
|返回值|function|目标函数|

```javascript
function even(n) { return n % 2 === 0 }
// filter([1, 2, 3, 4, 5, 6], negate(even)); -> [1, 3, 5]
```

## nextTick

能够同时运行在 node 和浏览器端的 next tick 实现。

|参数名|类型|说明|
|-----|----|---|
|cb|function|调用函数|

如果支持 process.nextTick，则调用它，否则使用 setImmediate 或 setTimeout 进行兼容。

```javascript
nextTick(function () {
    // Do something...
});
```

## noop

一个什么也不做的空函数。

```javascript
noop(); // Does nothing
```

## normalizeHeader

标准化 HTTP 头部名。

|参数名|类型|说明|
|-----|----|---|
|header|string|源头部名|
|返回值|string|目标头部名|

```javascript
normalizeHeader('content-type'); // -> 'Content-Type'
normalizeHeader('etag'); // -> 'ETag'
```

## normalizePath

标准化文件路径中的斜杠。

|参数名|类型|说明|
|-----|----|---|
|path|string|源路径|
|返回值|string|目标路径|

```javascript
normalizePath('\\foo\\bar\\'); // -> '/foo/bar/'
normalizePath('./foo//bar'); // -> './foo/bar'
```

## now

获取当前时间戳。

```javascript
now(); // -> 1468826678701
```

## objToStr

Object.prototype.toString 的别名。

|参数名|类型|说明|
|-----|----|---|
|val|*|目标值|
|返回值|string|字符串表示|

```javascript
objToStr(5); // -> '[object Number]'
```

## omit

类似 pick，但结果相反。

|参数名|类型|说明|
|-----|----|---|
|obj|object|源对象|
|filter|string array function|对象过滤器|
|返回值|object|目标对象|

```javascript
omit({a: 1, b: 2}, 'a'); // -> {b: 2}
omit({a: 1, b: 2, c: 3}, ['b', 'c']) // -> {a: 1}
omit({a: 1, b: 2, c: 3, d: 4}, function (val, key) {
    return val % 2;
}); // -> {b: 2, d: 4}
```

## once

创建只能调用一次的函数。

|参数名|类型|说明|
|-----|----|---|
|fn|function|源函数|
|返回值|function|目标函数|

```javascript
function init() {};
var initOnce = once(init);
initOnce();
initOnce(); // -> init is invoked once
```

## open

打开 url 地址或文件。

|参数名|类型|说明|
|-----|----|---|
|target|string|要打开的目标|
|返回值|ChildProcess|子进程对象|

```javascript
open('https://eustia.liriliri.io/');
```

## openFile

在浏览器中打开文件选择框。

|参数名|类型|说明|
|-----|----|---|
|options|object|选项|
|返回值|Promise|文件列表|

可用选项：

|参数名|类型|说明|
|-----|----|---|
|accept|string|文件类型|
|multiple=false|boolean|是否支持多选|

```javascript
openFile({multiple: true}).then(fileList => {
    console.log(fileList)
});
```

## optimizeCb

用于高效的函数上下文绑定。

## orientation

屏幕方向工具库。

### on

绑定 change 事件。

### off

解绑 change 事件。

### get

获取当前屏幕方向（横屏 landscape 或 竖屏 portrait）。

```javascript
orientation.on('change', function (direction) {
    console.log(direction); // -> 'portrait'
});
orientation.get(); // -> 'landscape'
```

## pad

对字符串进行左右填充。

|参数名|类型|说明|
|-----|----|---|
|str|string|源字符串|
|len|number|填充长度|
|chars|string|填充字符串|
|返回值|string|目标字符串|

```javascript
pad('a', 5); // -> '  a  '
pad('a', 5, '-'); // -> '--a--'
pad('abc', 3, '-'); // -> 'abc'
pad('abc', 5, 'ab'); // -> 'babca'
pad('ab', 5, 'ab'); // -> 'ababa'
```

## pairs

将对象转换为包含【键名，键值】对的数组。

|参数名|类型|说明|
|-----|----|---|
|obj|object|目标对象|
|返回值|array|键值对数组|

```javascript
pairs({a: 1, b: 2}); // -> [['a', 1], ['b', 2]]
```

## parallel

同时执行多个函数。

|参数名|类型|说明|
|-----|----|---|
|tasks|array|函数数组|
|[cb]|function|结束回调|

```javascript
parallel([
    function(cb) {
        setTimeout(function () { cb(null, 'one') }, 200);
    },
    function(cb) {
        setTimeout(function () { cb(null, 'two') }, 100);
    }
], function (err, results) {
    // results -> ['one', 'two']
});
```

## parseArgs

命令行参数简单解析。

|参数名|类型|说明|
|-----|----|---|
|args|array|参数数组|
|opts|object|解析选项|
|返回值|object|解析结果|

### options

|参数名|类型|说明|
|-----|----|---|
|names|object|选项名及类型|
|shorthands|object|选项名缩写|

```javascript
parseArgs(['eustia', '--output', 'util.js', '-w'], {
    names: {
        output: 'string',
        watch: 'boolean'
    },
    shorthands: {
        output: 'o',
        watch: 'w'
    }
});
// -> {remain: ['eustia'], output: 'util.js', watch: true}
```

## partial

返回局部填充参数的函数，与 bind 模块相似。

|参数名|类型|说明|
|-----|----|---|
|fn|function|源函数|
|...partials|*|局部填充参数|
|返回值|function|目标函数|

```javascript
var sub5 = partial(function (a, b) { return b - a }, 5);
sub5(20); // -> 15
```

## pascalCase

将字符串转换为帕斯卡式。

|参数名|类型|说明|
|-----|----|---|
|str|string|源字符串|
|返回值|string|帕斯卡式字符串|

```javascript
pascalCase('fooBar'); // -> FooBar
pascalCase('foo bar'); // -> FooBar
pascalCase('foo_bar'); // -> FooBar
pascalCase('foo.bar'); // -> FooBar
```

## perfNow

高精度时间戳。

```javascript
var start = perfNow();

// Do something.

console.log(perfNow() - start);
```

## pick

过滤对象。

|参数名|类型|说明|
|-----|----|---|
|object|object|源对象|
|filter|string array function|对象过滤器|
|返回值|object|目标对象|

```javascript
pick({a: 1, b: 2}, 'a'); // -> {a: 1}
pick({a: 1, b: 2, c: 3}, ['b', 'c']) // -> {b: 2, c: 3}
pick({a: 1, b: 2, c: 3, d: 4}, function (val, key) {
    return val % 2;
}); // -> {a: 1, c: 3}
```

## pluck

提取数组对象中指定属性值，返回一个数组。

|参数名|类型|说明|
|-----|----|---|
|obj|object array|目标集合|
|key|string array|属性路径|
|返回值|array|指定属性值列表|

```javascript
var stooges = [
    {name: 'moe', age: 40},
    {name: 'larry', age: 50},
    {name: 'curly', age: 60}
];
pluck(stooges, 'name'); // -> ['moe', 'larry', 'curly']
```

## precision

获取数字的精度。

|参数名|类型|说明|
|-----|----|---|
|num|number|要检查的数字|
|返回值|number|精度|

```javascript
precision(1.234); // -> 3;
```

## prefetch

预获取指定的 url。

|参数名|类型|说明|
|-----|----|---|
|url|string|目标 url|
|返回值|Promise|Promise|

如果支持，它将使用`<link rel=prefetch>`进行预加载。

```javascript
prefetch('https://eustia.liriliri.io/');
```

## prefix

给 css 属性名增加浏览器前缀。

|参数名|类型|说明|
|-----|----|---|
|name|string|源属性名|
|返回值|string|目标属性名|

### dash

同上，但返回短横线命名方式的版本。

```javascript
prefix('text-emphasis'); // -> 'WebkitTextEmphasis'
prefix.dash('text-emphasis'); // -> '-webkit-text-emphasis'
prefix('color'); // -> 'color'
```

## promisify

转换使用回调的异步函数，使其返回 Promise。

|参数名|类型|说明|
|-----|----|---|
|fn|function|源函数|
|multiArgs=false|boolean|回调是否有多个结果|
|返回值|function|目标函数|

如果 multiArgs 设为真，返回的 Promise 会将回调的结果合并成一个数组。

```javascript
var fs = require('fs');

var readFile = promisify(fs.readFile);
readFile('test.js', 'utf-8').then(function (data) {
    // Do something with file content.
});
```

## property

返回一个函数，该函数返回任何传入对象的指定属性。

|参数名|类型|说明|
|-----|----|---|
|path|string array|属性路径|
|返回值|function|目标函数|

```javascript
var obj = {a: {b: 1}};
property('a')(obj); // -> {b: 1}
property(['a', 'b'])(obj); // -> 1
```

## query

解析序列化 url 的 query 部分。

### parse

将 query 字符串解析成对象。

|参数名|类型|说明|
|-----|----|---|
|str|string|query 字符串|
|返回值|object|query 对象|

### stringify

将对象序列化成 query 字符串。

|参数名|类型|说明|
|-----|----|---|
|obj|object|query 对象|
|返回值|string|query 字符串|

```javascript
query.parse('foo=bar&eruda=true'); // -> {foo: 'bar', eruda: 'true'}
query.stringify({foo: 'bar', eruda: 'true'}); // -> 'foo=bar&eruda=true'
query.parse('name=eruda&name=eustia'); // -> {name: ['eruda', 'eustia']}
```

## quickSort

快排实现。

|参数名|类型|说明|
|-----|----|---|
|arr|array|要排序的数组|
|[cmp]|function|比较器|
|返回值|array|有序数组|

```javascript
quickSort([2, 1]); // -> [1, 2]
```

## raf

requestAnimationFrame 快捷方式。

如果原生 requestAnimationFrame 不支持，使用 setTimeout 进行兼容。

```javascript
var id = raf(function tick() {
    // Animation stuff
    raf(tick);
});
raf.cancel(id);
```

## random

在给定区间内生成随机数。

|参数名|类型|说明|
|-----|----|---|
|min|number|最小值|
|max|number|最大值|
|floating=false|boolean|是否允许浮点数|
|返回值|number|随机数|

```javascript
random(1, 5); // -> an integer between 0 and 5
random(5); // -> an integer between 0 and 5
random(1.2, 5.2, true); /// -> a floating-point number between 1.2 and 5.2
```

## randomBytes

随机字节序列生成器。

如果支持，使用 node 的 crypto 模块或浏览器的 crypto 对象。

|参数名|类型|说明|
|-----|----|---|
|size  |number|Number of bytes to generate |
|返回值|object|Random bytes of given length|

```javascript
randomBytes(5); // -> [55, 49, 153, 30, 122]
```

## randomId

简单 id 生成器，类似于 nanoid。

|参数名|类型|说明|
|-----|----|---|
|size=21|number|id 长度|
|symbols|string|生成 id 字符，默认为 a-zA-Z0-9_-|

```javascript
randomId(); // -> 'oKpy4HwU8E6IvU5I03gyQ'
randomId(5); // -> 'sM6E9'
randomId(5, 'abc'); // -> 'cbbcb'
```

## randomItem

随机获取数组中的某项。

|参数名|类型|说明|
|-----|----|---|
|arr|array|目标数组|
|返回值|*|随机项|

```javascript
randomItem([1, 2, 3]); // -> 2
```

## range

创建整数数组。

|参数名|类型|说明|
|-----|----|---|
|[start]|number|起始值|
|end|number|结束值|
|step=1|number|相邻差|
|返回值|array|整数数组|

```javascript
range(5); // -> [0, 1, 2, 3, 4]
range(0, 5, 2) // -> [0, 2, 4]
```

## rc4

RC4 对称加密算法实现。

### encrypt

RC4 加密，结果表示为 base64 字符串。

### decrypt

RC4 解密，传入 base64 字符串。

|参数名|类型|说明|
|-----|----|---|
|key|string|密钥|
|str|string|源字符串|
|返回值|string|目标字符串|

```javascript
rc4.encrypt('licia', 'Hello world'); // -> 'j9y2VpSfR3AdNN8='
rc4.decrypt('licia', 'j9y2VpSfR3AdNN8='); // -> 'Hello world'
```

## ready

dom 准备好时调用回调函数，类似于 jQuery 的 ready 方法。

|参数名|类型|说明|
|-----|----|---|
|fn|function|回调函数|

```javascript
ready(function () {
    // It's safe to manipulate dom here.
});
```

## reduce

合并多个值成一个值。

|参数名|类型|说明|
|-----|----|---|
|obj|object array|目标集合|
|iteratee=identity|function|合并函数|
|[initial]|*|初始值|
|[ctx]|*|函数上下文|
|返回值|*|合并值|

```javascript
reduce([1, 2, 3], function (sum, n) { return sum + n }, 0); // -> 6
```

## reduceRight

类似于 reduce，只是从后往前合并。

```javascript
reduceRight([[1], [2], [3]], function (a, b) { return a.concat(b) }, []); // -> [3, 2, 1]
```

## reject

类似 filter，但结果相反。

|参数名|类型|说明|
|-----|----|---|
|obj|array|要遍历的集合|
|predicate|function|真值检测函数|
|[ctx]|*|函数上下文|
|返回值|array|包含所有未通过真值检测元素的数组|

```javascript
reject([1, 2, 3, 4, 5], function (val) {
    return val % 2 === 0;
}); // -> [1, 3, 5]
```

## remove

移除集合中所有通过真值检测的元素，返回包含所有删除元素的数组。

与 filter 不同，该模块会改变原数组。

|参数名|类型|说明|
|-----|----|---|
|list|array|要遍历的集合|
|iterator|function|真值检测函数|
|[context]|*|函数上下文|
|返回值|array|包含所有删除元素的数组|

```javascript
var arr = [1, 2, 3, 4, 5];
var evens = remove(arr, function (val) { return val % 2 === 0 });
console.log(arr); // -> [1, 3, 5]
console.log(evens); // -> [2, 4]
```

## repeat

重复字符串指定次数。

|参数名|类型|说明|
|-----|----|---|
|str|string|源字符串|
|n|number|重复次数|
|返回值|string|目标字符串|

```javascript
repeat('a', 3); // -> 'aaa'
repeat('ab', 2); // -> 'abab'
repeat('*', 0); // -> ''
```

## restArgs

将给定序号后的参数合并成一个数组。

|参数名|类型|说明|
|-----|----|---|
|function|function|源函数|
|[startIndex]|number|合并参数起始位置|
|返回值|function|目标函数|

```javascript
var paramArr = restArgs(function (rest) { return rest });
paramArr(1, 2, 3, 4); // -> [1, 2, 3, 4]
```

## rgbToHsl

将 rgb 格式的颜色值转换为 hsl 格式。

|参数名|类型|说明|
|-----|----|---|
|rgb|array|rgb 值|
|返回值|array|hsl 值|

```javascript
rgbToHsl([52, 203, 165, 0.8]); // -> [165, 59, 50, 0.8]
```

## ric

requestIdleCallback 的快捷方式。

如果原生 requestIdleCallback 不支持，使用 setTimeout 进行兼容。

```javascript
const id = ric(function () {
    // Called during a browser's idle periods
});
ric.cancel(id);
```

## rmCookie

遍历所有可能的路径和域名将 cookie 删除。

|参数名|类型|说明|
|-----|----|---|
|key|string|cookie 名|

```javascript
rmCookie('test');
```

## rmdir

递归地删除文件夹。

|参数名|类型|说明|
|-----|----|---|
|dir|string|文件夹路径|
|callback|function|回调|

```javascript
rmdir('/tmp/foo/bar/baz', function (err) {
    if (err) console.log (err);
    else console.log('Done');
});
```

## root

根对象引用，对于 nodeJs，取 `global` 对象，对于浏览器，取 `window` 对象。

## rpad

对字符串进行右填充。

|参数名|类型|说明|
|-----|----|---|
|str|string|源字符串|
|len|number|填充长度|
|chars|string|填充字符|
|返回值|string|目标字符串|

```javascript
rpad('a', 5); // -> 'a    '
rpad('a', 5, '-'); // -> 'a----'
rpad('abc', 3, '-'); // -> 'abc'
rpad('abc', 5, 'ab'); // -> 'abcab'
```

## rtrim

删除字符串尾部指定字符或空格。

|参数名|类型|说明|
|-----|----|---|
|str|string|源字符串|
|[chars]|string array|删除字符|
|返回值|string|目标字符串|

```javascript
rtrim(' abc  '); // -> ' abc'
rtrim('_abc_', '_'); // -> '_abc'
rtrim('_abc_', ['c', '_']); // -> '_ab'
```

## safeCb

创建回调函数，内部模块使用。

## safeDel

删除对象属性。

|参数名|类型|说明|
|-----|----|---|
|obj|object|目标对象|
|path|array string|属性路径|
|返回值|*|删除值或 undefined|

```javascript
var obj = {a: {aa: {aaa: 1}}};
safeDel(obj, 'a.aa.aaa'); // -> 1
safeDel(obj, ['a', 'aa']); // -> {}
safeDel(obj, 'a.b'); // -> undefined
```

## safeGet

获取对象属性值，路径不存在时不报错。

|参数名|类型|说明|
|-----|----|---|
|obj|object|目标对象|
|path|array string|属性路径|
|返回值|*|属性值或 undefined|

```javascript
var obj = {a: {aa: {aaa: 1}}};
safeGet(obj, 'a.aa.aaa'); // -> 1
safeGet(obj, ['a', 'aa']); // -> {aaa: 1}
safeGet(obj, 'a.b'); // -> undefined
```

## safeSet

设置对象属性值。

如果路径的某一层不存在，将会创建一个空对象。

|参数名|类型|说明|
|-----|----|---|
|obj|object|目标对象|
|path|array string|属性路径|
|val|*|要设置的值|

```javascript
var obj = {};
safeSet(obj, 'a.aa.aaa', 1); // obj = {a: {aa: {aaa: 1}}}
safeSet(obj, ['a', 'aa'], 2); // obj = {a: {aa: 2}}
safeSet(obj, 'a.b', 3); // obj = {a: {aa: 2, b: 3}}
```

## safeStorage

安全地使用 storage，使其在旧浏览器及 safari 无痕模式下能正常运行。

|参数名|类型|说明|
|-----|----|---|
|type='local'|string|模式，local 或 session|
|返回值|object|指定 storage|

```javascript
var localStorage = safeStorage('local');
localStorage.setItem('licia', 'util');
```

## sample

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

## scrollTo

以动画的形式滚动到指定目标。

|参数名|类型|说明|
|-----|----|---|
|target|element string number|滚动目标|
|options|object|滚动选项|

### 选项 

|选项名|类型|默认值|说明|
|-----|----|-----|----|
|tolerance|number|0|偏移|
|duration|number|800|时长|
|easing|string function|outQuart|缓动函数|
|callback|function|noop|结束回调|

```javascript
scrollTo('body', {
    tolerance: 0,
    duration: 800,
    easing: 'outQuart',
    callback: function () {}
});
```

## selectionSort

选择排序实现。

|参数名|类型|说明|
|-----|----|---|
|arr|array|要排序的数组|
|[cmp]|function|比较器|
|返回值|array|有序数组|

```javascript
selectionSort([2, 1]); // -> [1, 2]
```

## shuffle

将数组中元素的顺序打乱。

|参数名|类型|说明|
|-----|----|---|
|arr|array|源数组|
|返回值|array|目标数组|

```javascript
shuffle([1, 2, 3]); // -> [3, 1, 2]
```

## size

获取对象的大小或类数组元素的长度。

|参数名|类型|说明|
|-----|----|---|
|obj|array object|目标集合|
|返回值|number|集合大小|

```javascript
size({a: 1, b: 2}); // -> 2
size([1, 2, 3]); // -> 3
```

## sleep

使用 Promise 模拟暂停方法。

|参数名|类型|说明|
|-----|----|---|
|timeout|number|暂时时长|

```javascript
;(async function () {
    await sleep(2000);
})();
```

## slice

截取数组的一部分生成新数组。

|参数名|类型|说明|
|-----|----|---|
|array|array|目标数组|
|[start=0]|number|起始位置|
|[end=array.length]|number|结束位置，不包含|

```javascript
slice([1, 2, 3, 4], 1, 2); // -> [2]
```

## snakeCase

转换字符串为下划线式。

|参数名|类型|说明|
|-----|----|---|
|str|string|源字符串|
|返回值|string|下划线式字符串|

```javascript
snakeCase('fooBar'); // -> foo_bar
snakeCase('foo bar'); // -> foo_bar
snakeCase('foo.bar'); // -> foo_bar
```

## some

检查集合中是否有元素通过真值检测。

|参数名|类型|说明|
|-----|----|---|
|obj|array object|目标集合|
|predicate|function|真值检测函数|
|ctx|*|函数上下文|
|返回值|boolean|如果有元素通过真值检测，返回真|

```javascript
some([2, 5], function (val) {
    return val % 2 === 0;
}); // -> true
```

## sortBy

遍历集合中的元素，将其作为参数调用函数，并以得到的结果为依据对数组进行排序。

|参数名|类型|说明|
|-----|----|---|
|arr|object array|源集合|
|[iteratee=identity]|function|排序依据生成函数|
|[ctx]|*|函数上下文|
|返回值|array|排序后的数组|

```javascript
sortBy([1, 2, 3, 4, 5, 6], function (num) {
    return Math.sin(num);
}); // -> [5, 4, 6, 3, 1, 2]
```

## spaceCase

将字符串转换为空格式。

|参数名|类型|说明|
|-----|----|---|
|str|string|源字符串|
|返回值|string|空格式字符串|

```javascript
spaceCase('fooBar'); // -> foo bar
spaceCase('foo.bar'); // -> foo bar
spaceCase('foo.bar'); // -> foo bar
```

## splitCase

将不同命名式的字符串拆分成数组。

|参数名|类型|说明|
|-----|----|---|
|str|string|目标字符串|
|返回值|array|拆分成的数组|

```javascript
splitCase('foo-bar'); // -> ['foo', 'bar']
splitCase('foo bar'); // -> ['foo', 'bar']
splitCase('foo_bar'); // -> ['foo', 'bar']
splitCase('foo.bar'); // -> ['foo', 'bar']
splitCase('fooBar'); // -> ['foo', 'bar']
splitCase('foo-Bar'); // -> ['foo', 'bar']
```

## splitPath

将路径拆分为文件夹路径，文件名和扩展名。

|参数名|类型|说明|
|-----|----|---|
|path|string|目标路径|
|返回值|object|包含文件夹路径，文件名和扩展名的对象|

```javascript
splitPath('f:/foo/bar.txt'); // -> {dir: 'f:/foo/', name: 'bar.txt', ext: '.txt'}
splitPath('/home/foo/bar.txt'); // -> {dir: '/home/foo/', name: 'bar.txt', ext: '.txt'}
```

## startWith

检查字符串是否以指定字符串开头。

|参数名|类型|说明|
|-----|----|---|
|str|string|目标字符串|
|prefix|string|字符串前缀|
|返回值|boolean|如果是前缀，返回真|

```javascript
startWith('ab', 'a'); // -> true
```

## strHash

使用 djb2 算法进行字符串哈希。

|参数名|类型|说明|
|-----|----|---|
|str|string|目标字符串|
|返回值|number|哈希结果|

```javascript
strHash('test'); // -> 2090770981
```

## strToBytes

将字符串转换为字节数组。

|参数名|类型|说明|
|-----|----|---|
|str|string|目标字符串|
|返回值|array|字节数组|

```javascript
strToBytes('licia'); // -> [108, 105, 99, 105, 97]
```

## stringify

JSON 序列化，支持循环引用和函数。

undefined 被当作 null 处理。

|参数名|类型|说明|
|-----|----|---|
|obj|object|目标对象|
|spaces|number|缩进|
|返回值|string|序列化后的字符串|

```javascript
stringify({a: function () {}}); // -> '{"a":"[Function function () {}]"}'
var obj = {a: 1, b: {}};
obj.b = obj;
stringify(obj); // -> '{"a":1,"b":"[Circular ~]"}'
```

## stripAnsi

清除字符串中的 ansi 控制码。

|参数名|类型|说明|
|-----|----|---|
|str|string|源字符串|
|返回值|string|目标字符串|

```javascript
stripAnsi('\u001b[4mcake\u001b[0m'); // -> 'cake'
```

## stripCmt

清除源码中的注释。

|参数名|类型|说明|
|-----|----|---|
|str|string|源码|
|返回值|string|无注释代码|

```javascript
stripCmt('// comment \n var a = 5; /* comment2\n * comment3\n *\/'); // -> ' var a = 5; '
```

## stripColor

清除字符串中的 ansi 颜色控制码。

|参数名|类型|说明|
|-----|----|---|
|str|string|源字符串|
|返回值|string|目标字符串|

```javascript
stripColor('\u001b[31mred\u001b[39m'); // -> 'red'
```

## stripHtmlTag

清除字符串中的 html 标签。

|参数名|类型|说明|
|-----|----|---|
|str|string|源字符串|
|返回值|string|目标字符串|

```javascript
stripHtmlTag('<p>Hello</p>'); // -> 'Hello'
```

## sum

计算数字和。

|参数名|类型|说明|
|-----|----|---|
|...num|number|要计算的数字|
|返回值|number|数字和|

```javascript
sum(1, 2, 5); // -> 8
```

## swap

交换数组中的两项。

|参数名|类型|说明|
|-----|----|---|
|arr|array|目标数组|
|a|number|序号一|
|b|number|序号二|
|返回值|array|数组本身|

```javascript
var arr = [1, 2];
swap(arr, 0, 1); // -> [2, 1]
```

## template

将模板字符串编译成函数用于渲染。

|参数名|类型|说明|
|-----|----|---|
|str|string|模板字符串|
|[util]|object|模板函数|
|返回值|function|编译后的模板函数|

```javascript
template('Hello <%= name %>!')({name: 'licia'}); // -> 'Hello licia!'
template('<p><%- name %></p>')({name: '<licia>'}); // -> '<p>&lt;licia&gt;</p>'
template('<%if (echo) {%>Hello licia!<%}%>')({echo: true}); // -> 'Hello licia!'
template('<p><%= util["upperCase"](name) %></p>', {
    upperCase: function (str) {
        return str.toLocaleUpperCase();
    }
})({ name: 'licia' }); // -> '<p>LICIA</p>'
```

## throttle

返回函数的节流阀版本。

|参数名|类型|说明|
|-----|----|---|
|fn|function|源函数|
|wait|number|延迟毫秒数|
|返回值|function|目标函数|

```javascript
const updatePos = throttle(function () {}, 100);
// $(window).scroll(updatePos);
```

## through

stream Transform 类的简单包装。

|参数名|类型|说明|
|-----|----|---|
|opts={}|Object|初始化流选项|
|transform|function|Transform 实现|
|[flush]|function|Flush 实现|

### obj

设置 objectMode 为真的快捷方式。

### ctor

返回继承 Transform 的类。

```javascript
const fs = require('fs');
fs.createReadStream('in.txt')
    .pipe(through(function (chunk, enc, cb) {
        // Do something to chunk
        this.push(chunk);
        cb();
    })).pipe(fs.createWriteStream('out.txt'));
```

## timeAgo

将时间格式化成多久之前的形式。

|参数名|类型|说明|
|-----|----|---|
|date|Date|目标日期|
|[now=new Date]|Date|当时日期|
|返回值|string|格式化时间表示|

```javascript
var now = new Date().getTime();
timeAgo(now - 1000 * 6); // -> right now
timeAgo(now + 1000 * 15); // -> in 15 minutes
timeAgo(now - 1000 * 60 * 60 * 5, now); // -> 5 hours ago
```

## timeTaken

获取函数的执行时间。

|参数名|类型|说明|
|-----|----|---|
|fn|function|要计算执行时间的函数|
|返回值|number|执行时间，单位毫秒|

```javascript
timeTaken(function () {
    // Do something.
}); // -> Time taken to execute given function.
```

## times

调用目标函数 n 次。

|参数名|类型|说明|
|-----|----|---|
|n|number|调用次数|
|fn|function|目标函数|
|[ctx]|*|函数上下文|
|返回值|array|结果数组|

```javascript
times(3, String); // -> ['0', '1', '2']
```

## toArr

将任意值转换为数组。

|参数名|类型|说明|
|-----|----|---|
|val|*|要转换的值|
|返回值|array|转换后的数组|

```javascript
toArr({a: 1, b: 2}); // -> [{a: 1, b: 2}]
toArr('abc'); // -> ['abc']
toArr(1); // -> [1]
toArr(null); // -> []
```

## toBool

将任意值转换为布尔值。

|参数名|类型|说明|
|-----|----|---|
|val|*|要转换的值|
|返回值|boolean|转换后的布尔值|

```javascript
toBool(true); // -> true
toBool(null); // -> false
toBool(1); // -> true
toBool(0); // -> false
toBool('0'); // -> false
toBool('1'); // -> true
toBool('false'); // -> false
```

## toDate

将任意值转换为日期类型。

|参数名|类型|说明|
|-----|----|---|
|val|*|要转换的值|
|返回值|Date|转换后的日期值|

```javascript
toDate('20180501');
toDate('2018-05-01');
toDate(1525107450849);
```

## toEl

将 html 字符串转换为 dom 元素。

必须只有一个根元素。

|参数名|类型|说明|
|-----|----|---|
|str|string|html 字符串|
|返回值|element|html 元素|

```javascript
toEl('<div>test</div>');
```

## toInt

将任意值转换为整数。

|参数名|类型|说明|
|-----|----|---|
|val|*|要转换的值|
|返回值|number|转换后的整数|

```javascript
toInt(1.1); // -> 1
toInt(undefined); // -> 0
```

## toNum

将任意值转换为数字。

|参数名|类型|说明|
|-----|----|---|
|val|*|要转换的值|
|返回值|number|转换后的数字|

```javascript
toNum('5'); // -> 5
```

## toSrc

将函数转换为源码。

|参数名|类型|说明|
|-----|----|---|
|fn|function|目标函数|
|返回值|string|源码|

```javascript
toSrc(Math.min); // -> 'function min() { [native code] }'
toSrc(function () {}) // -> 'function () { }'
```

## toStr

将任意值转换为字符串。

|参数名|类型|说明|
|-----|----|---|
|val|*|要转换的值|
|返回值|string|转换后的字符串|

```javascript
toStr(null); // -> ''
toStr(1); // -> '1'
toStr(false); // -> 'false'
toStr([1, 2, 3]); // -> '1,2,3'
```

## topoSort

拓扑排序实现。

|参数名|类型|说明|
|-----|----|---|
|edges|array|依赖关系|
|返回值|array|排序后的数组|

```javascript
topoSort([[1, 2], [1, 3], [3, 2]]); // -> [1, 3, 2]
```

## trigger

触发浏览器事件。

|参数名|类型|说明|
|-----|----|---|
|[el=document]|element|目标元素|
|type|string|事件类型|
|options|object|选项|

```javascript
trigger(document.getElementById('#test'), 'mouseup');
trigger('keydown', {keyCode: 65});
```

## trim

删除字符串两边指定字符或空格。

|参数名|类型|说明|
|-----|----|---|
|str|string|源字符串|
|chars|string array|删除字符|
|返回值|string|目标字符串|

```javascript
trim(' abc  '); // -> 'abc'
trim('_abc_', '_'); // -> 'abc'
trim('_abc_', ['a', 'c', '_']); // -> 'b'
```

## tryIt

在 try catch 块中运行函数。

|参数名|类型|说明|
|-----|----|---|
|fn|function|目标函数|
|[cb]|function|回调|

```javascript
tryIt(function () {
    // Do something that might cause an error.
}, function (err, result) {
    if (err) console.log(err);
});
```

## type

获取 JavaScript 对象的内部类型。

|参数名|类型|说明|
|-----|----|---|
|val|*|目标对象|
|返回值|string|对象类型，小写|

```javascript
type(5); // -> 'number'
type({}); // -> 'object'
type(function () {}); // -> 'function'
type([]); // -> 'array'
```

## types

仅用于生成 ts 定义文件。

## ucs2

UCS-2 编解码。

### encode

通过码点序列创建字符串。

|参数名|类型|说明|
|-----|----|---|
|arr|array|码点序列|
|返回值|string|编码后的字符串|

### decode

通过字符串创建码点序列。

|参数名|类型|说明|
|-----|----|---|
|str|string|字符串|
|返回值|array|码点序列|

```javascript
ucs2.encode([0x61, 0x62, 0x63]); // -> 'abc'
ucs2.decode('abc'); // -> [0x61, 0x62, 0x63]
'𝌆'.length; // -> 2
ucs2.decode('𝌆').length; // -> 1
```

## uncaught

全局错误监听。

### start

开始监听错误。

### stop

停止监听错误。

### addListener

添加监听器。

|参数名|类型|说明|
|-----|----|---|
|fn|function|错误监听器|

### rmListener

移除监听器。

### rmAllListeners

移除所有监听器。

```javascript
uncaught.start();
uncaught.addListener(err => {
    // Do something.
});
```

## unescape

和 escape 相反，转义 HTML 实体回去。

|参数名|类型|说明|
|-----|----|---|
|str|string|源字符串|
|返回值|string|目标字符串|

```javascript
unescape('You &amp; Me'); // -> 'You & Me'
```

## union

返回传入所有数组的并集。

|参数名|类型|说明|
|-----|----|---|
|...arr|array|要合并的数组|
|返回值|array|数组并集|

```javascript
union([2, 1], [4, 2], [1, 2]); // -> [2, 1, 4]
```

## uniqId

生成全局唯一 id。

|参数名|类型|说明|
|-----|----|---|
|[prefix]|string|id 前缀|
|返回值|string|全局唯一 id|

```javascript
uniqId('eusita_'); // -> 'eustia_xxx'
```

## unique

返回数组去重后的副本。

|参数名|类型|说明|
|-----|----|---|
|arr|array|源数组|
|[compare]|function|比较函数|
|返回值|array|目标数组|

```javascript
unique([1, 2, 3, 1]); // -> [1, 2, 3]
```

## unzip

与 zip 相反。 

|参数名|类型|说明|
|-----|----|---|
|arr|array|源数组|
|返回值|array|目标数组|

```javascript
unzip([['a', 1, true], ['b', 2, false]]); // -> [['a', 'b'], [1, 2], [true, false]]
```

## upperCase

转换字符串为大写。

|参数名|类型|说明|
|-----|----|---|
|str|string|源字符串|
|返回值|string|目标字符串|

```javascript
upperCase('test'); // -> 'TEST'
```

## upperFirst

将字符串的第一个字符转换为大写。

|参数名|类型|说明|
|-----|----|---|
|str|string|源字符串|
|返回值|string|目标字符串|

```javascript
upperFirst('red'); // -> Red
```

## use

使用 define 创建的模块。

|参数名|类型|说明|
|-----|----|---|
|[requires]|array|依赖|
|method|function|要执行的代码|

```javascript
// define('A', () => 'A');
use(['A'], function (A) {
    console.log(A + 'B'); // -> 'AB'
});
```

## utf8

UTF-8 编解码。

### encode

UTF-8 编码。

|参数名|类型|说明|
|-----|----|---|
|str|string|源字符串|
|返回值|string|目标字符串|

### decode

UTF-8 解码。

|参数名|类型|说明|
|-----|----|---|
|str|string|源字符串|
|safe=false|boolean|如果设为真，不抛错误|
|返回值|string|目标字符串|

```javascript
utf8.encode('\uD800\uDC00'); // ->  '\xF0\x90\x80\x80'
utf8.decode('\xF0\x90\x80\x80'); // -> '\uD800\uDC00'
```

## uuid

生成符合 RFC4112 版本 4 协议的 uuid。

相关标准 [RFC4122 4.4](http://www.ietf.org/rfc/rfc4122.txt)。

```javascript
uuid(); // -> '53ce0497-6554-49e9-8d79-347406d2a88b'
```

## values

返回对象所有的属性值。

|参数名|类型|说明|
|-----|----|---|
|obj|object|目标对象|
|返回值|array|所有属性值|

```javascript
values({one: 1, two: 2}); // -> [1, 2]
```

## viewportScale

获取窗口缩放比。

```javascript
viewportScale(); // -> 3
```

## vlq

vlq 编解码。

### encode

将数字编码为 vlq 字符串。

|参数名|类型|说明|
|-----|----|---|
|number|number array|源数字|
|return|string|目标字符串|

### decode

将 vlq 字符串解码为数字。

|参数名|类型|说明|
|-----|----|---|
|string|string|源字符串|
|return|array|目标数字|

```javascript
vlq.encode(123); // -> '2H'
vlq.encode([123, 456, 789]); // -> '2HwcqxB'
vlq.decode('2H'); // -> [123]
vlq.decode('2HwcqxB'); // -> [123, 456, 789]
```

## waitUntil

等待直到条件函数返回真值。

|参数名|类型|说明|
|-----|----|---|
|condition|function|条件函数|
|[timeout=0]|number|超时|
|[interval=250]|number|等待间隔|

```javascript
let a = 5;
setTimeout(() => a = 10, 500);
waitUntil(() => a === 10).then(() => {
    console.log(a); // -> 10
});
```

## waterfall

按顺序执行函数序列。

|参数名|类型|说明|
|-----|----|---|
|tasks|array|函数序列|
|[cb]|function|结束回调|

```javascript
waterfall([
    function (cb) {
        cb(null, 'one');
    },
    function (arg1, cb) {
        // arg1 -> 'one'
        cb(null, 'done');
    }
], function (err, result) {
    // result -> 'done'
});
```

## workerize

将函数运行在 worker 线程中。

|参数名|类型|说明|
|-----|----|---|
|fn|function|源函数|
|返回值|function|目标函数|

```javascript
var worker = workerize(function (a, b) {
    return a + b;
});
worker(1, 2).then(function (value) {
    console.log(value); // -> 3
});
```

## wrap

将函数封装到包裹函数里面, 并把它作为第一个参数传给包裹函数。

|参数名|类型|说明|
|-----|----|---|
|fn|function|要包裹的函数|
|wrapper|function|包裹函数|
|返回值 |function|目标函数|

```javascript
var p = wrap(escape, function(fn, text) {
    return '<p>' + fn(text) + '</p>';
});
p('You & Me'); // -> '<p>You &amp; Me</p>'
```

## wx

小程序 wx 对象的 promise 版本。

```javascript
wx.getStorage('test').then(res => {
    console.log(res.data);
});
```

## zip

将每个数组中相应位置的值合并在一起。

|参数名|类型|说明|
|-----|----|---|
|...arr|array|源数组|
|返回值|array|目标数组|

```javascript
zip(['a', 'b'], [1, 2], [true, false]); // -> [['a', 1, true], ['b', 2, false]]
```