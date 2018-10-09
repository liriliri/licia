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
$btn.on('click', function ()
{
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
|element|string array element|目标元素集|
|name|string|class 值|

### remove

对于元素集中的所有元素，移除指定的 class。


|参数名|类型|说明|
|-----|----|---|
|element|string array element|目标元素集|
|names|string|class 值|

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
    'color': '#fff',
    'background': 'black'
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

bind events to certain dom elements.

```javascript
function clickHandler()
{
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
|value |element array string|要转换的值|
|返回值|array|元素集|

```javascript
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

Create JavaScript class.

|参数名|类型|说明|
|-----|----|---|
|methods  |object  |Public methods                   |
|[statics]|object  |Static methods                   |
|返回值   |function|Function used to create instances|

```javascript
var People = Class({
    initialize: function People(name, age)
    {
        this.name = name;
        this.age = age;
    },
    introduce: function ()
    {
        return 'I am ' + this.name + ', ' + this.age + ' years old.';
    }
});

var Student = People.extend({
    initialize: function Student(name, age, school)
    {
        this.callSuper(People, 'initialize', arguments);

        this.school = school;
    },
    introduce: function ()
    {
        return this.callSuper(People, 'introduce') + '\n I study at ' + this.school + '.';
    }
}, {
    is: function (obj)
    {
        return obj instanceof Student;
    }
});

var a = new Student('allen', 17, 'Hogwarts');
a.introduce(); // -> 'I am allen, 17 years old. \n I study at Hogwarts.'
Student.is(a); // -> true
```

## Color

Color converter.

### constructor

|参数名|类型|说明|
|-----|----|---|
|color|string object|Color to convert|

### toRgb

Get color rgb string format.

### toHex

Get color hex string format.

### toHsl

Get color hsl string format.

### parse

[static] Parse color string into object containing value and model.

|Name  |Type  |Desc                             |
|------|------|---------------------------------|
|color |string|Color string                     |
|返回值|object|Object containing value and model|

```javascript
Color.parse('rgb(170, 287, 204, 0.5)'); // -> {val: [170, 187, 204, 0.5], model: 'rgb'}
var color = new Color('#abc');
color.toRgb(); // -> 'rgb(170, 187, 204)'
color.toHsl(); // -> 'hsl(210, 25%, 73%)'
```

## Dispatcher

Flux dispatcher.

[Related docs](https://facebook.github.io/flux/docs/dispatcher.html).

```javascript
var dispatcher = new Dispatcher();

dispatcher.register(function (payload)
{
   switch (payload.actionType)
   {
       // Do something
   }
});

dispatcher.dispatch({
    actionType: 'action'
});
```

## Emitter

Event emitter class which provides observer pattern.

### on

Bind event.

### off

Unbind event.

### once

Bind event that trigger once.

|参数名|类型|说明|
|-----|----|---|
|event   |string  |Event name    |
|listener|function|Event listener|

### emit

Emit event.

|参数名|类型|说明|
|-----|----|---|
|event  |string|Event name                  |
|...args|*     |Arguments passed to listener|

### mixin

[static] Mixin object class methods.

|参数名|类型|说明|
|-----|----|---|
|obj |object|Object to mixin|

```javascript
var event = new Emitter();
event.on('test', function () { console.log('test') });
event.emit('test'); // Logs out 'test'.
Emitter.mixin({});
```

## Enum

Enum type implementation.

### constructor

|参数名|类型|说明|
|-----|----|---|
|arr |array|Array of strings|

|参数名|类型|说明|
|-----|----|---|
|obj |object|Pairs of key and value|

```javascript
var importance = new Enum([
    'NONE', 'TRIVIAL', 'REGULAR', 'IMPORTANT', 'CRITICAL'
]);

if (val === importance.CRITICAL)
{
    // Do something.
}
```

## JsonTransformer

Json to json transformer.

### constructor

|参数名|类型|说明|
|-----|----|---|
|[data={}]|object|Json object to manipulate|

### set

Set object value.

|参数名|类型|说明|
|-----|----|---|
|[key]|string|Object key  |
|val  |*     |Value to set|

If key is not given, the whole source object is replaced by val.

### get

Get object value.

|参数名|类型|说明|
|-----|----|---|
|[key] |string|Object key                     |
|返回值|*     |Specified value or whole object|

### remove

|参数名|类型|说明|
|-----|----|---|
|key |array string|Object keys to remove|

### map

Shortcut for array map.

|参数名|类型|说明|
|-----|----|---|
|from|string  |From object path              |
|to  |string  |Target object path            |
|fn  |function|Function invoked per iteration|

### filter

Shortcut for array filter.

### compute

Compute value from several object values.

|参数名|类型|说明|
|-----|----|---|
|from|array string|Source values                   |
|to  |string      |Target object path              |
|fn  |function    |Function to compute target value|

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

Doubly-linked list implementation.

### push

Add an value to the end of the list.

|参数名|类型|说明|
|-----|----|---|
|val   |*     |Value to push|
|返回值|number|Current size |

### pop

Get the last value of the list.

### unshift

Add an value to the head of the list.

### shift

Get the first value of the list.

### forEach

Iterate over the list.

### toArr

Convert the list to a JavaScript array.

```javascript
var linkedList = new LinkedList();
linkedList.push(5);
linkedList.pop(); // -> 5
```

## LocalStore

LocalStorage wrapper.

Extend from Store.

### constructor

|参数名|类型|说明|
|-----|----|---|
|name|string|LocalStorage item name|
|data|object|Default data          |

```javascript
var store = new LocalStore('licia');
store.set('name', 'licia');
```

## Logger

Simple logger with level filter.

### constructor

|参数名|类型|说明|
|-----|----|---|
|name         |string|Logger name |
|[level=DEBUG]|number|Logger level|

### setLevel

|参数名|类型|说明|
|-----|----|---|
|level|number string|Logger level|

### getLevel

Get current level.

### trace, debug, info, warn, error

Logging methods.

### Log Levels

TRACE, DEBUG, INFO, WARN, ERROR and SILENT.

```javascript
var logger = new Logger('licia', Logger.level.ERROR);
logger.trace('test');

// Format output.
logger.formatter = function (type, argList)
{
    argList.push(new Date().getTime());

    return argList;
};

logger.on('all', function (type, argList)
{
    // It's not affected by log level.
});

logger.on('debug', function (argList)
{
    // Affected by log level.
});
```

## MutationObserver

Safe MutationObserver, does nothing if MutationObserver is not supported.

```javascript
var observer = new MutationObserver(function (mutations)
{
    // Do something.
});
observer.observe(document.htmlElement);
observer.disconnect();
```

## Promise

Lightweight Promise implementation.

[Promises spec](https://github.com/promises-aplus/promises-spec)

```javascript
function get(url)
{
    return new Promise(function (resolve, reject)
    {
        var req = new XMLHttpRequest();
        req.open('GET', url);
        req.onload = function ()
        {
            req.status == 200 ? resolve(req.reponse) : reject(Error(req.statusText));
        };
        req.onerror = function () { reject(Error('Network Error')) };
        req.send();
    });
}

get('test.json').then(function (result)
{
    // Do something...
});
```

## PseudoMap

Like es6 Map, without iterators.

It supports only string keys, and uses Map if exists.

```javascript
var map = new PseudoMap();
map.set('1', 1);
map.get('1'); // -> 1
```

## Queue

Queue data structure.

### clear

Clear the queue.

### enqueue

Add an item to the queue.

|参数名|类型|说明|
|-----|----|---|
|item  |*     |Item to enqueue|
|返回值|number|Current size   |

### dequeue

Remove the first item of the queue.

### peek

Get the first item without removing it.

### forEach

Iterate over the queue.

|参数名|类型|说明|
|-----|----|---|
|iteratee|function|Function invoked iteration|
|[ctx]   |*       |Function context          |

### toArr

Convert queue to a JavaScript array.

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

## ReduceStore

Simplified redux like state container.

### constructor

|参数名|类型|说明|
|-----|----|---|
|reducer     |function|Function returns next state|
|initialState|*       |Initial state              |

### subscribe

Add a change listener.

|参数名|类型|说明|
|-----|----|---|
|listener|function|Callback to invoke on every dispatch|
|返回值  |function|Function to unscribe                |

### dispatch

Dispatch an action.

|参数名|类型|说明|
|-----|----|---|
|action|object|Object representing changes|
|返回值|object|Same action object         |

### getState

Get the current state.

```javascript
var store = new ReduceStore(function (state, action)
{
    switch (action.type)
    {
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        default: return state;
    }
}, 0);

store.subscribe(function ()
{
    console.log(store.getState());
});

store.dispatch({type: 'INCREMENT'}); // 1
store.dispatch({type: 'INCREMENT'}); // 2
store.dispatch({type: 'DECREMENT'}); // 1
```

## Select

Simple wrapper of querySelectorAll to make dom selection easier.

### constructor

|参数名|类型|说明|
|-----|----|---|
|selector|string|Dom selector string|

### find

Get desdendants of current matched elements.

|参数名|类型|说明|
|-----|----|---|
|selector|string|Dom selector string|

### each

Iterate over matched elements.

|参数名|类型|说明|
|-----|----|---|
|fn  |function|Function to execute for each element|

```javascript
var $test = new Select('#test');
$test.find('.test').each(function (idx, element)
{
    // Manipulate dom nodes
});
```

## SessionStore

SessionStorage wrapper.

Extend from Store.

### constructor

|参数名|类型|说明|
|-----|----|---|
|name|string|SessionStorage item name|
|data|object|Default data            |

```javascript
var store = new SessionStore('licia');
store.set('name', 'licia');
```

## Stack

Stack data structure.

### clear

Clear the stack.

### push

Add an item to the stack.

|参数名|类型|说明|
|-----|----|---|
|item  |*     |Item to add |
|返回值|number|Current size|

### pop

Get the last item of the stack.

### peek

Get the last item without removing it.

### forEach

Iterate over the stack.

|参数名|类型|说明|
|-----|----|---|
|iteratee|function|Function invoked iteration|
|[ctx]   |*       |Function context          |

### toArr

Convert the stack to a JavaScript stack.

```javascript
var stack = new Stack();

stack.push(2); // -> 1
stack.push(3); // -> 2
stack.pop(); // -> 3
```

## State

Simple state machine.

Extend from Emitter.

### constructor

|参数名|类型|说明|
|-----|----|---|
|initial|string|Initial state         |
|events |string|Events to change state|

### is

Check current state.

|参数名|类型|说明|
|-----|----|---|
|value |string |State to check                          |
|返回值|boolean|True if current state equals given value|

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
state.on('play', function (src)
{
    console.log(src); // -> 'eustia'
});
state.on('error', function (err, event)
{
    // Error handler
});
state.play('eustia');
```

## Store

Memory storage.

Extend from Emitter.

### constructor

|参数名|类型|说明|
|-----|----|---|
|data|object|Initial data|

### set

Set value.

|参数名|类型|说明|
|-----|----|---|
|key |string|Value key   |
|val |*     |Value to set|

Set values.

|参数名|类型|说明|
|-----|----|---|
|vals|object|Key value pairs|

This emit a change event whenever is called.

### get

Get value.

|参数名|类型|说明|
|-----|----|---|
|key   |string|Value key         |
|返回值|*     |Value of given key|

Get values.

|参数名|类型|说明|
|-----|----|---|
|keys  |array |Array of keys  |
|返回值|object|Key value pairs|

### remove

Remove value.

|参数名|类型|说明|
|-----|----|---|
|key |string array|Key to remove|

### clear

Clear all data.

### each

Iterate over values.

|参数名|类型|说明|
|-----|----|---|
|fn  |function|Function invoked per interation|

```javascript
var store = new Store('test');
store.set('user', {name: 'licia'});
store.get('user').name; // -> 'licia'
store.clear();
store.each(function (val, key)
{
    // Do something.
});
store.on('change', function (key, newVal, oldVal)
{
    // It triggers whenever set is called.
});
```

## Tween

Tween engine for JavaScript animations.

Extend from Emitter.

### constructor

|参数名|类型|说明|
|-----|----|---|
|obj |object|Values to tween|

### to

|参数名|类型|说明|
|-----|----|---|
|destination|obj            |Final properties|
|duration   |number         |Tween duration  |
|ease       |string function|Easing function |

### play

Begin playing forward.

### pause

Pause the animation.

### paused

Get animation paused state.

### progress

Update or get animation progress.

|参数名|类型|说明|
|-----|----|---|
|[progress]|number|Number between 0 and 1|

```javascript
var pos = {x: 0, y: 0};

var tween = new Tween(pos);
tween.on('update', function (target)
{
    console.log(target.x, target.y);
}).on('end', function (target)
{
    console.log(target.x, target.y); // -> 100, 100
});
tween.to({x: 100, y: 100}, 1000, 'inElastic').play();
```

## Url

Simple url manipulator.

### constructor

|参数名|类型|说明|
|-----|----|---|
|url=location|string|Url string|

### setQuery

Set query value.

|参数名|类型|说明|
|-----|----|---|
|name  |string|Query name |
|value |string|Query value|
|返回值|Url   |this       |

|参数名|类型|说明|
|-----|----|---|
|names |object|query object|
|返回值|Url   |this        |

### rmQuery

Remove query value.

|Name  |Type        |Desc      |
|------|------------|----------|
|name  |string array|Query name|
|返回值|Url         |this      |

### parse

[static] Parse url into an object.

|Name  |Type  |Desc      |
|------|------|----------|
|url   |string|Url string|
|返回值|object|Url object|

### stringify

[static] Stringify url object into a string.

|Name  |Type  |Desc      |
|------|------|----------|
|url   |object|Url object|
|返回值|string|Url string|

An url object contains the following properties:

|Name    |Desc                                                                                  |
|--------|--------------------------------------------------------------------------------------|
|protocol|The protocol scheme of the URL (e.g. http:)                                           |
|slashes |A boolean which indicates whether the protocol is followed by two forward slashes (//)|
|auth    |Authentication information portion (e.g. username:password)                           |
|hostname|Host name without port number                                                         |
|port    |Optional port number                                                                  |
|pathname|URL path                                                                              |
|query   |Parsed object containing query string                                                 |
|hash    |The "fragment" portion of the URL including the pound-sign (#)                        |

```javascript
var url = new Url('http://example.com:8080?eruda=true');
console.log(url.port); // -> '8080'
url.query.foo = 'bar';
url.rmQuery('eruda');
utl.toString(); // -> 'http://example.com:8080/?foo=bar'
```

## Validator

Object values validation.

### constructor

|参数名|类型|说明|
|-----|----|---|
|options|object|Validation configuration|

### validate

Validate object.

|参数名|类型|说明|
|-----|----|---|
|obj   |object|Object to validate              |
|返回值|*     |Validation result, true means ok|

### addPlugin

[static] Add plugin.

|参数名|类型|说明|
|-----|----|---|
|name  |string  |Plugin name       |
|plugin|function|Validation handler|

### Default Plugins

Required, number, boolean, string and regexp.

```javascript
Validator.addPlugin('custom', function (val, key, config)
{
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
var fn = after(5, function()
{
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
    error: function () {},
    success: function (data)
    {
        // ...
    },
    dataType: 'json'
});

ajax.get('http://example.com', {}, function (data)
{
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

## arrToMap

将字符串列表转换为映射。

|参数名|类型|说明|
|-----|----|---|
|arr|array|字符串列表|
|val=true|*|键值|
|返回值|object|映射|

```javascript
var needPx = arrToMap([
    'column-count', 'columns', 'font-weight', 'line-weight', 'opacity', 'z-index', 'zoom'
]);

if (needPx[key]) val += 'px';
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

```javascript
base64.encode([168, 174, 155, 255]); // -> 'qK6b/w=='
```

### decode

将 base64 字符串解码为字节数组。

|参数名|类型|说明|
|-----|----|---|
|str|string|base64 编码的字符串|
|返回值|array|字节数组|

```javascript
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
$(element).on('click', before(5, function() {}));
// -> allow function to be call 4 times at last.
```

## bind

创建一个绑定到指定对象的函数。

|参数名|类型|说明|
|-----|----|---|
|fn|function|源函数|
|ctx|*|绑定对象|
|[...rest]|*|可选参数|
|返回值|function|输出函数|

```javascript
var fn = bind(function (msg)
{
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

```javascript
bubbleSort([2, 1]); // -> [1, 2]
```

## callbackify

Convert a function that returns a Promise to a function following the error-first callback style.

|参数名|类型|说明|
|-----|----|---|
|fn    |function|Function that returns a Promise                 |
|返回值|function|Function following the error-fist callback style|

```javascript
function fn() 
{
    return new Promise(function (resolve, reject) 
    {
        // ...
    });
}

var cbFn = callbackify(fn);

cbFn(function (err, value)
{
    // ...
});
```

## camelCase

Convert string to "camelCase".

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to convert |
|返回值|string|Camel cased string|

```javascript
camelCase('foo-bar'); // -> fooBar
camelCase('foo bar'); // -> fooBar
camelCase('foo_bar'); // -> fooBar
camelCase('foo.bar'); // -> fooBar
```

## capitalize

Convert the first character to upper case and the remaining to lower case.

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to capitalize|
|返回值|string|Capitalized string  |

```javascript
capitalize('rED'); // -> Red
```

## castPath

Cast value into a property path array.

|参数名|类型|说明|
|-----|----|---|
|str   |*     |Value to inspect   |
|[obj] |object|Object to query    |
|返回值|array |Property path array|

```javascript
castPath('a.b.c'); // -> ['a', 'b', 'c']
castPath(['a']); // -> ['a']
castPath('a[0].b'); // -> ['a', '0', 'b']
castPath('a.b.c', {'a.b.c': true}); // -> ['a.b.c']
```

## centerAlign

Center align text in a string.

|参数名|类型|说明|
|-----|----|---|
|str    |string array|String to align         |
|[width]|number      |Total width of each line|
|返回值 |string      |Center aligned string   |

```javascript
centerAlign('test', 8); // -> '  test'
centerAlign('test\nlines', 8); // -> '  test\n lines'
centerAlign(['test', 'lines'], 8); // -> '  test\n lines'
```

## char

Return string representing a character whose Unicode code point is the given integer.

|参数名|类型|说明|
|-----|----|---|
|num   |number|Integer to convert                    |
|返回值|string|String representing corresponding char|

```javascript
char(65); // -> 'A'
char(97); // -> 'a'
```

## chunk

Split array into groups the length of given size.

|参数名|类型|说明|
|-----|----|---|
|arr   |array |Array to process    |
|size=1|number|Length of each chunk|

```javascript
chunk([1, 2, 3, 4], 2); // -> [[1, 2], [3, 4]]
chunk([1, 2, 3, 4], 3); // -> [[1, 2, 3], [4]]
chunk([1, 2, 3, 4]); // -> [[1], [2], [3], [4]]
```

## clamp

Clamp number within the inclusive lower and upper bounds.

|参数名|类型|说明|
|-----|----|---|
|n      |number|Number to clamp|
|[lower]|number|Lower bound    |
|upper  |number|Upper bound    |
|返回值 |number|Clamped number |

```javascript
clamp(-10, -5, 5); // -> -5
clamp(10, -5, 5); // -> 5
clamp(2, -5, 5); // -> 2
clamp(10, 5); // -> 5
clamp(2, 5); // -> 2
```

## className

Utility for conditionally joining class names.

|参数名|类型|说明|
|-----|----|---|
|...class|string object array|Class names       |
|返回值  |string             |Joined class names|

```javascript
className('a', 'b', 'c'); // -> 'a b c'
className('a', false, 'b', 0, 1, 'c'); // -> 'a b 1 c'
className('a', ['b', 'c']); // -> 'a b c'
className('a', {b: false, c: true}); // -> 'a c'
className('a', ['b', 'c', {d: true, e: false}]); // -> 'a b c d';
```

## clone

Create a shallow-copied clone of the provided plain object.

Any nested objects or arrays will be copied by reference, not duplicated.

|参数名|类型|说明|
|-----|----|---|
|val   |*   |Value to clone|
|返回值|*   |Cloned value  |

```javascript
clone({name: 'eustia'}); // -> {name: 'eustia'}
```

## cloneDeep

Recursively clone value.

|参数名|类型|说明|
|-----|----|---|
|val   |*   |Value to clone   |
|返回值|*   |Deep cloned Value|

```javascript
var obj = [{a: 1}, {a: 2}];
var obj2 = cloneDeep(obj);
console.log(obj[0] === obj2[1]); // -> false
```

## cmpVersion

Compare version strings.

|参数名|类型|说明|
|-----|----|---|
|v1    |string|Version to compare|
|v2    |string|Version to compare|
|返回值|number|Comparison result |

```javascript
cmpVersion('1.1.8', '1.0.4'); // -> 1
cmpVersion('1.0.2', '1.0.2'); // -> 0
cmpVersion('2.0', '2.0.0'); // -> 0
cmpVersion('3.0.1', '3.0.0.2'); // -> 1
cmpVersion('1.1.1', '1.2.3'); // -> -1
```

## compact

Return a copy of the array with all falsy values removed.

The values false, null, 0, "", undefined, and NaN are falsey.

|参数名|类型|说明|
|-----|----|---|
|arr   |array|Array to compact            |
|返回值|array|New array of filtered values|

```javascript
compact([0, 1, false, 2, '', 3]); // -> [1, 2, 3]
```

## compose

Compose a list of functions.

Each function consumes the return value of the function that follows.

|参数名|类型|说明|
|-----|----|---|
|...fn |function|Functions to compose|
|返回值|function|Composed function   |

```javascript
var welcome = compose(function (name) 
{
    return 'hi: ' + name;
}, function (name) 
{
    return name.toUpperCase() + '!';
});

welcome('licia'); // -> 'hi: LICIA!'
```

## compressImg

Compress image using canvas.

|参数名|类型|说明|
|-----|----|---|
|file|File Blob|Image file|
|opts|object   |Options   |
|cb  |function |Callback  |

Available options:

|参数名|类型|说明|
|-----|----|---|
|maxWidth   |number|Max width                       |
|maxHeight  |number|Max height                      |
|width      |number|Output image width              |
|height     |number|Output image height             |
|mineType   |string|Mine type                       |
|quality=0.8|number|Image quality, range from 0 to 1|

In order to keep image ratio, height will be ignored when width is set.

And maxWith, maxHeight will be ignored if width or height is set.

```javascript
compressImg(file, {
    maxWidth: 200
}, function (err, file) 
{
    // ...
});
```

## concat

Concat multiple arrays into a single array.

|参数名|类型|说明|
|-----|----|---|
|...arr|array|Arrays to concat  |
|返回值|array|Concatenated array|

```javascript
concat([1, 2], [3], [4, 5]); // -> [1, 2, 3, 4, 5]
```

## contain

Check if the value is present in the list.

|参数名|类型|说明|
|-----|----|---|
|array |array object|Target list                         |
|value |*           |Value to check                      |
|返回值|boolean     |True if value is present in the list|

```javascript
contain([1, 2, 3], 1); // -> true
contain({a: 1, b: 2}, 1); // -> true
```

## convertBase

Convert base of a number.

|参数名|类型|说明|
|-----|----|---|
|num   |number string|Number to convert|
|from  |number       |Base from        |
|to    |number       |Base to          |
|返回值|string       |Converted number |

```javascript
convertBase('10', 2, 10); // -> '2'
convertBase('ff', 16, 2); // -> '11111111'
```

## cookie

Simple api for handling browser cookies.

### get

Get cookie value.

|参数名|类型|说明|
|-----|----|---|
|key   |string|Cookie key                |
|返回值|string|Corresponding cookie value|

### set

Set cookie value.

|参数名|类型|说明|
|-----|----|---|
|key      |string |Cookie key    |
|val      |string |Cookie value  |
|[options]|object |Cookie options|
|返回值   |exports|Module cookie |

### remove

Remove cookie value.

|参数名|类型|说明|
|-----|----|---|
|key      |string |Cookie key    |
|[options]|object |Cookie options|
|返回值   |exports|Module cookie |

```javascript
cookie.set('a', '1', {path: '/'});
cookie.get('a'); // -> '1'
cookie.remove('a');
```

## copy

Copy text to clipboard using document.execCommand.

|参数名|类型|说明|
|-----|----|---|
|text|string  |Text to copy     |
|[cb]|function|Optional callback|

```javascript
copy('text', function (err) 
{
    // Handle errors.
});
```

## createAssigner

Used to create extend, extendOwn and defaults.

|参数名|类型|说明|
|-----|----|---|
|keysFn  |function|Function to get object keys   |
|defaults|boolean |No override when set to true  |
|返回值  |function|Result function, extend...    |

## createUrl

CreateObjectURL wrapper.

|参数名|类型|说明|
|-----|----|---|
|data   |File Blob string array|Url data                            | 
|[opts] |object                |Used when data is not a File or Blob|
|返回值 |string                |Blob url                            |

```javascript
createUrl('test', {type: 'text/plain'}); // -> Blob url
createUrl(['test', 'test']);
createUrl(new Blob([]));
createUrl(new File(['test'], 'test.txt'));
```

## cssSupports

Check if browser supports a given CSS feature.

|参数名|类型|说明|
|-----|----|---|
|name  |string |Css property name |
|[val] |string |Css property value|
|返回值|boolean|True if supports  |

```javascript
cssSupports('display', 'flex'); // -> true
cssSupports('display', 'invalid'); // -> false
cssSupports('text-decoration-line', 'underline'); // -> true
cssSupports('grid'); // -> true
cssSupports('invalid'); // -> false
```

## curry

Function currying.

|参数名|类型|说明|
|-----|----|---|
|fn    |function|Function to curry   |
|返回值|function|New curried function|

```javascript
var add = curry(function (a, b) { return a + b });
var add1 = add(1);
add1(2); // -> 3
```

## dateFormat

Simple but extremely useful date format function.

|参数名|类型|说明|
|-----|----|---|
|[date=new Date]|Date   |Date object to format|
|mask           |string |Format mask          |
|[utc=false]    |boolean|UTC or not           |
|[gmt=false]    |boolean|GMT or not           |

|Mask|Description                                                      |
|----|-----------------------------------------------------------------|
|d   |Day of the month as digits; no leading zero for single-digit days|
|dd  |Day of the month as digits; leading zero for single-digit days   |
|ddd |Day of the week as a three-letter abbreviation                   |
|dddd|Day of the week as its full name                                 |
|m   |Month as digits; no leading zero for single-digit months         |
|mm  |Month as digits; leading zero for single-digit months            |
|mmm |Month as a three-letter abbreviation                             |
|mmmm|Month as its full name                                           |
|yy  |Year as last two digits; leading zero for years less than 10     |
|yyyy|Year represented by four digits                                  |
|h   |Hours; no leading zero for single-digit hours (12-hour clock)    |
|hh  |Hours; leading zero for single-digit hours (12-hour clock)       |
|H   |Hours; no leading zero for single-digit hours (24-hour clock)    |
|HH  |Hours; leading zero for single-digit hours (24-hour clock)       |
|M   |Minutes; no leading zero for single-digit minutes                |
|MM  |Minutes; leading zero for single-digit minutes                   |
|s   |Seconds; no leading zero for single-digit seconds                |
|ss  |Seconds; leading zero for single-digit seconds                   |
|l L |Milliseconds. l gives 3 digits. L gives 2 digits                 |
|t   |Lowercase, single-character time marker string: a or p           |
|tt  |Lowercase, two-character time marker string: am or pm            |
|T   |Uppercase, single-character time marker string: A or P           |
|TT  |Uppercase, two-character time marker string: AM or PM            |
|Z   |US timezone abbreviation, e.g. EST or MDT                        |
|o   |GMT/UTC timezone offset, e.g. -0500 or +0230                     |
|S   |The date's ordinal suffix (st, nd, rd, or th)                    |
|UTC:|Must be the first four characters of the mask                    |

```javascript
dateFormat('isoDate'); // -> 2016-11-19
dateFormat('yyyy-mm-dd HH:MM:ss'); // -> 2016-11-19 19:00:04
dateFormat(new Date(), 'yyyy-mm-dd'); // -> 2016-11-19
```

## debounce

Return a new debounced version of the passed function.

|参数名|类型|说明|
|-----|----|---|
|fn    |function|Function to debounce           |
|wait  |number  |Number of milliseconds to delay|
|返回值|function|New debounced function         |

```javascript
$(window).resize(debounce(calLayout, 300));
```

## debug

A tiny JavaScript debugging utility.

|参数名|类型|说明|
|-----|----|---|
|name  |string  |Namespace                      |
|返回值|function|Function to print decorated log|

```javascript
var d = debug('test');
d('doing lots of uninteresting work');
d.enabled = false;
```

## decodeUriComponent

Better decodeURIComponent that does not throw if input is invalid.

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to decode|
|返回值|string|Decoded string  |

```javascript
decodeUriComponent('%%25%'); // -> '%%%'
decodeUriComponent('%E0%A4%A'); // -> '\xE0\xA4%A'
```

## defaults

Fill in undefined properties in object with the first value present in the following list of defaults objects.

|参数名|类型|说明|
|-----|----|---|
|obj   |object|Destination object|
|*src  |object|Sources objects   |
|返回值|object|Destination object|

```javascript
defaults({name: 'RedHood'}, {name: 'Unknown', age: 24}); // -> {name: 'RedHood', age: 24}
```

## define

Define a module, should be used along with use.

|参数名|类型|说明|
|-----|----|---|
|name      |string  |Module name |
|[requires]|array   |Dependencies|
|method    |function|Module body |

The module won't be executed until it's used by use function.

```javascript
define('A', function ()
{
    return 'A';
});
define('B', ['A'], function (A)
{
    return 'B' + A;
});
```

## defineProp

Shortcut for Object.defineProperty(defineProperties).

|参数名|类型|说明|
|-----|----|---|
|obj       |object|Object to define   |
|prop      |string|Property path      |
|descriptor|object|Property descriptor|
|返回值    |object|Object itself      |

|参数名|类型|说明|
|-----|----|---|
|obj   |object|Object to define    |
|prop  |object|Property descriptors|
|返回值|object|Object itself       |

```javascript
var obj = {b: {c: 3}, d: 4, e: 5};
defineProp(obj, 'a', {
    get: function ()
    {
        return this.e * 2;
    }
});
console.log(obj.a); // -> 10
defineProp(obj, 'b.c', {
    set: (function (val)
    {
        // this is pointed to obj.b
        this.e = val;
    }).bind(obj)
});
obj.b.c = 2;
console.log(obj.a); // -> 4;

obj = {a: 1, b: 2, c: 3};
defineProp(obj, {
    a: {
        get: function ()
        {
            return this.c;
        }
    },
    b: {
        set: function (val)
        {
            this.c = val / 2;
        }
    }
});
console.log(obj.a); // -> 3
obj.b = 4;
console.log(obj.a); // -> 2
```

## delay

Invoke function after certain milliseconds.

|参数名|类型|说明|
|-----|----|---|
|fn       |function|Function to delay                         |
|wait     |number  |Number of milliseconds to delay invocation|
|[...args]|*       |Arguments to invoke fn with               |

```javascript
delay(function (text)
{
    console.log(text);
}, 1000, 'later');
// -> Logs 'later' after one second
```

## delegate

Event delegation.

### add

Add event delegation.

|参数名|类型|说明|
|-----|----|---|
|el      |element |Parent element|
|type    |string  |Event type    |
|selector|string  |Match selector|
|cb      |function|Event callback|

### remove

Remove event delegation.

```javascript
var container = document.getElementById('container');
function clickHandler()
{
    // Do something...
}
delegate.add(container, 'click', '.children', clickHandler);
delegate.remove(container, 'click', '.children', clickHandler);
```

## detectBrowser

Detect browser info using ua.

|参数名|类型|说明|
|-----|----|---|
|[ua=navigator.userAgent]|string|Browser userAgent                 |
|返回值                  |object|Object containing name and version|

Browsers supported: ie, chrome, edge, firefox, opera, safari, ios(mobile safari), android(android browser)

```javascript
var browser = detectBrowser();
if (browser.name === 'ie' && browser.version < 9)
{
    // Do something about old IE...
}
```

## detectMocha

Detect if mocha is running.

```javascript
detectMocha(); // -> True if mocha is running.
```

## detectOs

Detect operating system using ua.

|参数名|类型|说明|
|-----|----|---|
|ua=navigator.userAgent|string|Browser userAgent    |
|返回值                  |string|Operating system name|

Supported os: windows, os x, linux, ios, android, windows phone

```javascript
if (detectOs() === 'ios')
{
    // Do something about ios...
}
```

## difference

Create an array of unique array values not included in the other given array.

|参数名|类型|说明|
|-----|----|---|
|arr      |array|Array to inspect            |
|[...rest]|array|Values to exclude           |
|返回值   |array|New array of filtered values|

```javascript
difference([3, 2, 1], [4, 2]); // -> [3, 1]
```

## dotCase

Convert string to "dotCase".

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to convert|
|返回值|string|Dot cased string |

```javascript
dotCase('fooBar'); // -> foo.bar
dotCase('foo bar'); // -> foo.bar
```

## download

Trigger a file download on client side.

|参数名|类型|说明|
|-----|----|---|
|data           |Blob File string array|Data to download|
|name           |string                |File name       |
|type=text/plain|string                |Data type       |

```javascript
download('test', 'test.txt');
```

## each

Iterate over elements of collection and invokes iteratee for each element.

|参数名|类型|说明|
|-----|----|---|
|obj     |object array|Collection to iterate over    |
|iteratee|function    |Function invoked per iteration|
|[ctx]   |*           |Function context              |

```javascript
each({'a': 1, 'b': 2}, function (val, key) {});
```

## easing

Easing functions adapted from http://jqueryui.com/

|参数名|类型|说明|
|-----|----|---|
|percent|number|Number between 0 and 1|
|返回值 |number|Calculated number     |

```javascript
easing.linear(0.5); // -> 0.5
easing.inElastic(0.5, 500); // -> 0.03125
```

## endWith

Check if string ends with the given target string.

|参数名|类型|说明|
|-----|----|---|
|str   |string |The string to search           |
|suffix|string |String suffix                  |
|返回值|boolean|True if string ends with target|

```javascript
endWith('ab', 'b'); // -> true
```

## escape

Escapes a string for insertion into HTML, replacing &, <, >, ", `, and ' characters.

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to escape|
|返回值|string|Escaped string  |

```javascript
escape('You & Me'); -> // -> 'You &amp; Me'
```

## escapeJsStr

Escape string to be a valid JavaScript string literal between quotes.

http://www.ecma-international.org/ecma-262/5.1/#sec-7.8.4

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to escape|
|返回值|string|Escaped string  |

```javascript
escapeJsStr('\"\n'); // -> '\\"\\\\n'
```

## escapeRegExp

Escape special chars to be used as literals in RegExp constructors.

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to escape|
|返回值|string|Escaped string  |

```javascript
escapeRegExp('[licia]'); // -> '\\[licia\\]'
```

## evalCss

Load css into page.

|参数名|类型|说明|
|-----|----|---|
|css |string|Css code|

```javascript
evalCss('body{background:#08c}');
```

## evalJs

Execute js in given context.

|参数名|类型|说明|
|-----|----|---|
|js          |string|JavaScript code|
|[ctx=global]|object|Context        |

```javascript
evalJs('5+2'); // -> 7
evalJs('this.a', {a: 2}); // -> 2
```

## every

Check if predicate return truthy for all elements.

|参数名|类型|说明|
|-----|----|---|
|obj      |array object|Collection to iterate over                   |
|predicate|function    |Function invoked per iteration               |
|ctx      |*           |Predicate context                            |
|返回值   |boolean     |True if all elements pass the predicate check|

```javascript
every([2, 4], function (val)
{
    return val % 2 === 0;
}); // -> false
```

## extend

Copy all of the properties in the source objects over to the destination object.

|参数名|类型|说明|
|-----|----|---|
|obj   |object|Destination object|
|...src|object|Sources objects   |
|返回值|object|Destination object|

```javascript
extend({name: 'RedHood'}, {age: 24}); // -> {name: 'RedHood', age: 24}
```

## extendDeep

Recursive object extending.

|参数名|类型|说明|
|-----|----|---|
|obj   |object|Destination object|
|...src|object|Sources objects   |
|返回值|object|Destination object|

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

Like extend, but only copies own properties over to the destination object.

|参数名|类型|说明|
|-----|----|---|
|obj   |object|Destination object|
|*src  |object|Sources objects   |
|返回值|object|Destination object|

```javascript
extendOwn({name: 'RedHood'}, {age: 24}); // -> {name: 'RedHood', age: 24}
```

## extractBlockCmts

Extract block comments from source code.

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to extract|
|返回值|array |Block comments   |

```javascript
extractBlockCmts('\/*licia*\/'); // -> ['licia']
```

## extractUrls

Extract urls from plain text.

|参数名|类型|说明|
|-----|----|---|
|str   |string|Text to extract|
|返回值|array |Url list       |

```javascript
var str = '[Official site: http://eustia.liriliri.io](http://eustia.liriliri.io)';
extractUrl(str); // -> ['http://eustia.liriliri.io']
```

## fetch

Turn XMLHttpRequest into promise like.

Note: This is not a complete fetch pollyfill.

|参数名|类型|说明|
|-----|----|---|
|url    |string |Request url    |
|options|object |Request options|
|返回值 |promise|Request promise|

```javascript
fetch('test.json', {
    method: 'GET',
    timeout: 3000,
    headers: {},
    body: ''
}).then(function (res)
{
    return res.json();
}).then(function (data)
{
    console.log(data);
});
```

## fibonacci

Calculate fibonacci number.

|参数名|类型|说明|
|-----|----|---|
|n     |number|Index of fibonacci sequence|
|返回值|number|Expected fibonacci number  |

```javascript
fibonacci(1); // -> 1
fibonacci(3); // -> 2
```

## fileSize

Turn bytes into human readable file size.

|参数名|类型|说明|
|-----|----|---|
|bytes |number|File bytes        |
|返回值|string|Readable file size|

```javascript
fileSize(5); // -> '5'
fileSize(1500); // -> '1.46K'
fileSize(1500000); // -> '1.43M'
fileSize(1500000000); // -> '1.4G'
fileSize(1500000000000); // -> '1.36T'
```

## fill

Fill elements of array with value.

|参数名|类型|说明|
|-----|----|---|
|arr           |array |Array to fill           |
|val           |*     |Value to fill array with|
|start=0       |number|Start position          |
|end=arr.length|number|End position            |
|返回值        |array |Filled array            |

```javascript
fill([1, 2, 3], '*'); // -> ['*', '*', '*']
fill([1, 2, 3], '*', 1, 2); // -> [1, '*', 3]
```

## filter

Iterates over elements of collection, returning an array of all the values that pass a truth test.

|参数名|类型|说明|
|-----|----|---|
|obj      |array   |Collection to iterate over             |
|predicate|function|Function invoked per iteration         |
|[ctx]    |*       |Predicate context                      |
|返回值   |array   |Array of all values that pass predicate|

```javascript
filter([1, 2, 3, 4, 5], function (val)
{
    return val % 2 === 0;
}); // -> [2, 4]
```

## find

Find the first value that passes a truth test in a collection.

|参数名|类型|说明|
|-----|----|---|
|obj      |array object|Collection to iterate over       |
|predicate|function    |Function invoked per iteration   |
|[ctx]    |*           |Predicate context                |
|返回值   |*           |First value that passes predicate|

```javascript
find([{
    name: 'john',
    age: 24
}, {
    name: 'jane',
    age: 23
}], function (val)
{
    return val.age === 23;
}); // -> {name: 'jane', age: 23}
```

## findIdx

Return the first index where the predicate truth test passes.

|参数名|类型|说明|
|-----|----|---|
|arr      |array   |Array to search               |
|predicate|function|Function invoked per iteration|
|返回值   |number  |Index of matched element      |

```javascript
findIdx([{
    name: 'john',
    age: 24
}, {
    name: 'jane',
    age: 23
}], function (val)
{
    return val.age === 23;
}); // -> 1
```

## findKey

Return the first key where the predicate truth test passes.

|参数名|类型|说明|
|-----|----|---|
|obj      |object  |Object to search              |
|predicate|function|Function invoked per iteration|
|[ctx]    |*       |Predicate context             |
|返回值   |string  |Key of matched element        |

```javascript
findKey({a: 1, b: 2}, function (val)
{
    return val === 1;
}); // -> a
```

## findLastIdx

Return the last index where the predicate truth test passes.

|参数名|类型|说明|
|-----|----|---|
|arr      |array   |Array to search               |
|predicate|function|Function invoked per iteration|
|返回值   |number  |Last index of matched element |

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
}], function (val)
{
    return val.age === 24;
}); // -> 2
```

## flatten

Recursively flatten an array.

|参数名|类型|说明|
|-----|----|---|
|arr   |array|Array to flatten   |
|返回值|array|New flattened array|

```javascript
flatten(['a', ['b', ['c']], 'd', ['e']]); // -> ['a', 'b', 'c', 'd', 'e']
```

## fnParams

Get a function parameter's names.

|参数名|类型|说明|
|-----|----|---|
|fn    |function|Function to get parameters|
|返回值|array   |Names                     |

```javascript
fnParams(function (a, b) {}); // -> ['a', 'b']
```

## format

Format string in a printf-like format.

|参数名|类型|说明|
|-----|----|---|
|str      |string|String to format                   |
|...values|*     |Values to replace format specifiers|
|返回值   |string|Formatted string                   |

### Format Specifiers

|Specifier|Desc                |
|---------|--------------------|
|%s       |String              |
|%d, %i   |Integer             |
|%f       |Floating point value|
|%o       |Object              |

```javascript
format('%s_%s', 'foo', 'bar'); // -> 'foo bar'
```

## fraction

Convert number to fraction.

|参数名|类型|说明|
|-----|----|---|
|num   |number|Number to convert     |
|返回值|string|Corresponding fraction|

```javascript
fraction(1.2); // -> '6/5'
```

## freeze

Shortcut for Object.freeze.

Use Object.defineProperties if Object.freeze is not supported.

|参数名|类型|说明|
|-----|----|---|
|obj   |object|Object to freeze|
|返回值|object|Object passed in|

```javascript
var a = {b: 1};
freeze(a);
a.b = 2;
console.log(a); // -> {b: 1}
```

## freezeDeep

Recursively use Object.freeze.

|参数名|类型|说明|
|-----|----|---|
|obj   |object|Object to freeze|
|返回值|object|Object passed in|

```javascript
var a = {b: {c: 1}};
freezeDeep(a);
a.b.c = 2;
console.log(a); // -> {b: {c: 1}}
```

## fs

Promised version of node.js fs module.

```javascript
fs.readFile('test.js').then(function (data)
{
    // Do something
}).catch(function (err)
{
    // Handle errors
});
```

## gcd

Compute the greatest common divisor using Euclid's algorithm.

|参数名|类型|说明|
|-----|----|---|
|a     |number|Number to calculate    |
|b     |number|Number to calculate    |
|返回值|number|Greatest common divisor|

```javascript
gcd(121, 44); // -> 11
```

## getUrlParam

Get url param.

|参数名|类型|说明|
|-----|----|---|
|name        |string|Param name      |
|url=location|string|Url to get param|
|返回值      |string|Param value     |

```javascript
getUrlParam('test', 'http://example.com/?test=true'); // -> 'true'
```

## has

Checks if key is a direct property.

|参数名|类型|说明|
|-----|----|---|
|obj   |object |Object to query                 |
|key   |string |Path to check                   |
|返回值|boolean|True if key is a direct property|

```javascript
has({one: 1}, 'one'); // -> true
```

## hotkey

Capture keyboard input to trigger given events.

### on

Register keyboard listener.

|参数名|类型|说明|
|-----|----|---|
|key     |string  |Key string  |
|listener|function|Key listener|

### off

Unregister keyboard listener.

```javascript
hotkey.on('k', function ()
{
    console.log('k is pressed');
});
function keyDown() {}
hotkey.on('shift+a, shift+b', keyDown);
hotkey.off('shift+a', keyDown);
```

## hslToRgb

Convert hsl to rgb.

|参数名|类型|说明|
|-----|----|---|
|hsl   |array|Hsl values|
|返回值|array|Rgb values|

```javascript
hslToRgb([165, 59, 50, 0.8]); // -> [52, 203, 165, 0.8]
```

## identity

Return the first argument given.

|参数名|类型|说明|
|-----|----|---|
|val   |*   |Any value  |
|返回值|*   |Given value|

```javascript
identity('a'); // -> 'a'
```

## idxOf

Get the index at which the first occurrence of value.

|参数名|类型|说明|
|-----|----|---|
|arr      |array |Array to search     |
|val      |*     |Value to search for |
|fromIdx=0|number|Index to search from|

```javascript
idxOf([1, 2, 1, 2], 2, 2); // -> 3
```

## indent

Indent each line in a string.

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to indent    |
|[char]|string|Character to prepend|
|[len] |number|Indent length       |
|返回值|string|Indented string     |

```javascript
indent('foo\nbar', ' ', 4); // -> 'foo\n    bar'
```

## inherits

Inherit the prototype methods from one constructor into another.

|参数名|类型|说明|
|-----|----|---|
|Class     |function|Child Class|
|SuperClass|function|Super Class|

```javascript
function People(name)
{
    this._name = name;
}
People.prototype = {
    getName: function ()
    {
        return this._name;
    }
};
function Student(name)
{
    this._name = name;
}
inherits(Student, People);
var s = new Student('RedHood');
s.getName(); // -> 'RedHood'
```

## insertionSort

Insertion sort implementation.

|参数名|类型|说明|
|-----|----|---|
|arr  |array   |Array to sort|
|[cmp]|function|Comparator   |

```javascript
insertionSort([2, 1]); // -> [1, 2]
```

## intersect

Compute the list of values that are the intersection of all the arrays.

|参数名|类型|说明|
|-----|----|---|
|...arr|array|Arrays to inspect             |
|返回值|array|New array of inspecting values|

```javascript
intersect([1, 2, 3, 4], [2, 1, 10], [2, 1]); // -> [1, 2]
```

## intersectRange

Intersect two ranges.

|参数名|类型|说明|
|-----|----|---|
|a     |object|Range a              |
|b     |object|Range b              |
|返回值|object|Intersection if exist|

```javascript
intersectRange({start: 0, end: 12}, {start: 11, end: 13});
// -> {start: 11, end: 12}
intersectRange({start: 0, end: 5}, {start: 6, end: 7});
// -> undefined
```

## invert

Create an object composed of the inverted keys and values of object.

|参数名|类型|说明|
|-----|----|---|
|obj   |object|Object to invert   |
|返回值|object|New inverted object|

If object contains duplicate values, subsequent values overwrite property
assignments of previous values unless multiValue is true.

```javascript
invert({a: 'b', c: 'd', e: 'f'}); // -> {b: 'a', d: 'c', f: 'e'}
```

## isAbsoluteUrl

Check if an url is absolute.

|参数名|类型|说明|
|-----|----|---|
|url   |string |Url to check           |
|返回值|boolean|True if url is absolute|

```javascript
isAbsoluteUrl('http://www.surunzi.com'); // -> true
isAbsoluteUrl('//www.surunzi.com'); // -> false
isAbsoluteUrl('surunzi.com'); // -> false
```

## isArgs

Check if value is classified as an arguments object.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check                      |
|返回值|boolean|True if value is an arguments object|

```javascript
(function () {
    isArgs(arguments); // -> true
})();
```

## isArr

Check if value is an `Array` object.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check                    |
|返回值|boolean|True if value is an `Array` object|

```javascript
isArr([]); // -> true
isArr({}); // -> false
```

## isArrBuffer

Check if value is an ArrayBuffer.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check                 |
|返回值|boolean|True if value is an ArrayBuffer|

```javascript
isArrBuffer(new ArrayBuffer(8)); // -> true
```

## isArrLike

Check if value is array-like.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check             |
|返回值|boolean|True if value is array like|

> Function returns false.

```javascript
isArrLike('test'); // -> true
isArrLike(document.body.children); // -> true;
isArrLike([1, 2, 3]); // -> true
```

## isBlob

Check if value is a Blob.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check         |
|返回值|boolean|True if value is a Blob|

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

Check if running in a browser.

```javascript
console.log(isBrowser); // -> true if running in a browser
```

## isBuffer

Check if value is a buffer.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |The value to check       |
|返回值|boolean|True if value is a buffer|

```javascript
isBuffer(new Buffer(4)); // -> true
```

## isClose

Check if values are close(almost equal) to each other.

`abs(a-b) <= max(relTol * max(abs(a), abs(b)), absTol)`

|参数名|类型|说明|
|-----|----|---|
|a          |number |Number to compare       |
|b          |number |Number to compare       |
|relTol=1e-9|number |Relative tolerance      |
|absTol=0   |number |Absolute tolerance      |
|返回值     |boolean|True if values are close|

```javascript
isClose(1, 1.0000000001); // -> true
isClose(1, 2); // -> false
isClose(1, 1.2, 0.3); // -> true
isClose(1, 1.2, 0.1, 0.3); // -> true
```

## isDataUrl

Check if a string is a valid data url.

|参数名|类型|说明|
|-----|----|---|
|str   |string |String to check             |
|返回值|boolean|True if string is a data url|

```javascript
isDataUrl('http://eustia.liriliri.io'); // -> false
isDataUrl('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D'); // -> true
```

## isDate

Check if value is classified as a Date object.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |value to check                |
|返回值|boolean|True if value is a Date object|

```javascript
isDate(new Date()); // -> true
```

## isEl

Check if value is a DOM element.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check                |
|返回值|boolean|True if value is a DOM element|

```javascript
isEl(document.body); // -> true
```

## isEmail

Loosely validate an email address.

|参数名|类型|说明|
|-----|----|---|
|val   |string |Value to check                       |
|返回值|boolean|True if value is an email like string|

```javascript
isEmail('surunzi@foxmail.com'); // -> true
```

## isEmpty

Check if value is an empty object or array.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check        |
|返回值|boolean|True if value is empty|

```javascript
isEmpty([]); // -> true
isEmpty({}); // -> true
isEmpty(''); // -> true
```

## isEqual

Performs an optimized deep comparison between the two objects, to determine if they should be considered equal.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to compare             |
|other |*      |Other value to compare       |
|返回值|boolean|True if values are equivalent|

```javascript
isEqual([1, 2, 3], [1, 2, 3]); // -> true
```

## isErr

Check if value is an error.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check           |
|返回值|boolean|True if value is an error|

```javascript
isErr(new Error()); // -> true
```

## isEven

Check if number is even.

|参数名|类型|说明|
|-----|----|---|
|num   |number |Number to check       |
|返回值|boolean|True if number is even|

```javascript
isOdd(0); // -> true
isOdd(1); // -> false
isOdd(2); // -> true
```

## isFile

Check if value is a file.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check         |
|返回值|boolean|True if value is a file|

```javascript
isFile(new File(['test'], "test.txt", {type: "text/plain"})); // -> true
```

## isFinite

Check if value is a finite primitive number.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check                  |
|返回值|boolean|True if value is a finite number|

```javascript
isFinite(3); // -> true
isFinite(Infinity); // -> false
```

## isFn

Check if value is a function.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check             |
|返回值|boolean|True if value is a function|

Generator function is also classified as true.

```javascript
isFn(function() {}); // -> true
isFn(function*() {}); // -> true
```

## isGeneratorFn

Check if value is a generator function.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check                       |
|返回值|boolean|True if value is a generator function|

```javascript
isGeneratorFn(function * () {}); // -> true;
isGeneratorFn(function () {}); // -> false;
```

## isInt

Checks if value is classified as a Integer.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check                       |
|返回值|boolean|True if value is correctly classified|

```javascript
isInt(5); // -> true
isInt(5.1); // -> false
isInt({}); // -> false
```

## isJson

Check if value is a valid JSON.

It uses `JSON.parse()` and a `try... catch` block.

|参数名|类型|说明|
|-----|----|---|
|val   |string |JSON string                  |
|返回值|boolean|True if value is a valid JSON|

```javascript
isJson('{"a": 5}'); // -> true
isJson("{'a': 5}"); // -> false
```

## isLeapYear

Check if a year is a leap year.

|参数名|类型|说明|
|-----|----|---|
|year  |number |Year to check              |
|返回值|boolean|True if year is a leap year|

```javascript
isLeapYear(2000); // -> true
isLeapYear(2002); // -> false
```

## isMap

Check if value is a Map object.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check        |
|返回值|boolean|True if value is a Map|

```javascript
isMap(new Map()); // -> true
isMap(new WeakMap()); // -> false
```

## isMatch

Check if keys and values in src are contained in obj.

|参数名|类型|说明|
|-----|----|---|
|obj   |object |Object to inspect                 |
|src   |object |Object of property values to match|
|返回值|boolean|True if object is match           |

```javascript
isMatch({a: 1, b: 2}, {a: 1}); // -> true
```

## isMiniProgram

Check if running in wechat mini program.

```javascript
console.log(isMiniProgram); // -> true if running in mini program.
```

## isMobile

Check whether client is using a mobile browser using ua.

|参数名|类型|说明|
|-----|----|---|
|ua=navigator.userAgent|string |User agent                           |
|返回值                  |boolean|True if ua belongs to mobile browsers|

```javascript
isMobile(navigator.userAgent);
```

## isNaN

Check if value is an NaN.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check         |
|返回值|boolean|True if value is an NaN|

Undefined is not an NaN, different from global isNaN function.

```javascript
isNaN(0); // -> false
isNaN(NaN); // -> true
```

## isNative

Check if value is a native function.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check                    |
|返回值|boolean|True if value is a native function|

```javascript
isNative(function () {}); // -> false
isNative(Math.min); // -> true
```

## isNil

Check if value is null or undefined, the same as value == null.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check                    |
|返回值|boolean|True if value is null or undefined|

```javascript
isNil(null); // -> true
isNil(void 0); // -> true
isNil(undefined); // -> true
isNil(false); // -> false
isNil(0); // -> false
isNil([]); // -> false
```

## isNode

Check if running in node.

```javascript
console.log(isNode); // -> true if running in node
```

## isNull

Check if value is an Null.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check          |
|返回值|boolean|True if value is an Null|

```javascript
isNull(null); // -> true
```

## isNum

Check if value is classified as a Number primitive or object.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check                       |
|返回值|boolean|True if value is correctly classified|

```javascript
isNum(5); // -> true
isNum(5.1); // -> true
isNum({}); // -> false
```

## isNumeric

Check if value is numeric.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check          |
|返回值|boolean|True if value is numeric|

```javascript
isNumeric(1); // -> true
isNumeric('1'); // -> true
isNumeric(Number.MAX_VALUE); // -> true
isNumeric(0144); // -> true
isNumeric(0xFF); // -> true
isNumeric(''); // -> false
isNumeric('1.1.1'); // -> false
isNumeric(NaN); // -> false
```

## isObj

Check if value is the language type of Object.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check            |
|返回值|boolean|True if value is an object|

[Language Spec](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)

```javascript
isObj({}); // -> true
isObj([]); // -> true
```

## isOdd

Check if number is odd.

|参数名|类型|说明|
|-----|----|---|
|num   |number |Number to check      |
|返回值|boolean|True if number is odd|

```javascript
isOdd(0); // -> false
isOdd(1); // -> true
isOdd(2); // -> false
```

## isPlainObj

Check if value is an object created by Object constructor.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check                 |
|返回值|boolean|True if value is a plain object|

```javascript
isPlainObj({}); // -> true
isPlainObj([]); // -> false
isPlainObj(function () {}); // -> false
```

## isPrimitive

Check if value is string, number, boolean or null.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check              |
|返回值|boolean|True if value is a primitive|

```javascript
isPrimitive(5); // -> true
isPrimitive('abc'); // -> true
isPrimitive(false); // -> true
```

## isPromise

Check if value looks like a promise.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check                    |
|返回值|boolean|True if value looks like a promise|

```javascript
isPromise(new Promise(function () {})); // -> true
isPromise({}); // -> false
```

## isRegExp

Check if value is a regular expression.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check                       |
|返回值|boolean|True if value is a regular expression|

```javascript
isRegExp(/a/); // -> true
```

## isRelative

Check if path appears to be relative.

|参数名|类型|说明|
|-----|----|---|
|path  |string |Path to check                      |
|返回值|boolean|True if path appears to be relative|

```javascript
isRelative('README.md'); // -> true
```

## isRetina

Determine if running on a high DPR device or not.

```javascript
console.log(isRetina); // -> true if high DPR
```

## isSet

Check if value is a Set object.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check        |
|返回值|boolean|True if value is a Set|

```javascript
isSet(new Set()); // -> true
isSet(new WeakSet()); // -> false
```

## isSorted

Check if an array is sorted.

|参数名|类型|说明|
|-----|----|---|
|arr  |array   |Array to check|
|[cmp]|function|Comparator    |

```javascript
isSorted([1, 2, 3]); // -> true
isSorted([3, 2, 1]); // -> false
```

## isStr

Check if value is a string primitive.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check                     |
|返回值|boolean|True if value is a string primitive|

```javascript
isStr('licia'); // -> true
```

## isStream

Check if value is a Node.js stream.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check                   |
|返回值|boolean|True if value is a Node.js stream|

```javascript
var stream = require('stream');

isStream(new stream.Stream()); // -> true
```

## isTypedArr

Check if value is a typed array.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check                |
|返回值|boolean|True if value is a typed array|

```javascript
isTypedArr([]); // -> false
isTypedArr(new Unit8Array); // -> true
```

## isUndef

Check if value is undefined.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check            |
|返回值|boolean|True if value is undefined|

```javascript
isUndef(void 0); // -> true
isUndef(null); // -> false
```

## isUrl

Loosely validate an url.

|参数名|类型|说明|
|-----|----|---|
|val   |string |Value to check                     |
|返回值|boolean|True if value is an url like string|

```javascript
isUrl('http://www.example.com?foo=bar&param=test'); // -> true
```

## isWeakMap

Check if value is a WeakMap object.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check            |
|返回值|boolean|True if value is a WeakMap|

```javascript
isWeakMap(new Map()); // -> false
isWeakMap(new WeakMap()); // -> true
```

## isWeakSet

Check if value is a WeakSet object.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to check            |
|返回值|boolean|True if value is a WeakSet|

```javascript
isWeakSet(new Set()); // -> false
isWeakSet(new WeakSet()); // -> true
```

## isWindows

Check if platform is windows.

```javascript
console.log(isWindows); // -> true if running on windows
```

## jsonp

A simple jsonp implementation.

|参数名|类型|说明|
|-----|----|---|
|opts|object|Jsonp Options|

Available options:

|参数名|类型|说明|
|-----|----|---|
|url           |string  |Request url           |
|data          |object  |Request data          |
|success       |function|Success callback      |
|param=callback|string  |Callback param        |
|name          |string  |Callback name         |
|error         |function|Error callback        |
|complete      |function|Callback after request|
|timeout       |number  |Request timeout       |

```javascript
jsonp({
    url: 'http://example.com',
    data: {test: 'true'},
    success: function (data)
    {
        // ...
    }
});
```

## kebabCase

Convert string to "kebabCase".

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to convert |
|返回值|string|Kebab cased string|

```javascript
kebabCase('fooBar'); // -> foo-bar
kebabCase('foo bar'); // -> foo-bar
kebabCase('foo_bar'); // -> foo-bar
kebabCase('foo.bar'); // -> foo-bar
```

## keyCode

Key codes and key names conversion.

Get key code's name.

|参数名|类型|说明|
|-----|----|---|
|code  |number|Key code              |
|返回值|string|Corresponding key name|

Get key name's code.

|参数名|类型|说明|
|-----|----|---|
|name  |string|Key name              |
|返回值|number|Corresponding key code|

```javascript
keyCode(13); // -> 'enter'
keyCode('enter'); // -> 13
```

## keys

Create an array of the own enumerable property names of object.

|参数名|类型|说明|
|-----|----|---|
|obj   |object|Object to query        |
|返回值|array |Array of property names|

```javascript
keys({a: 1}); // -> ['a']
```

## last

Get the last element of array.

|参数名|类型|说明|
|-----|----|---|
|arr   |array|The array to query       |
|返回值|*    |The last element of array|

```javascript
last([1, 2]); // -> 2
```

## lazyRequire

Require modules lazily.

```javascript
var r = lazyRequire(require);

var _ = r('underscore');

// underscore is required only when _ is called.
_().isNumber(5);
```

## linkify

Hyperlink urls in a string.

|参数名|类型|说明|
|-----|----|---|
|str        |string  |String to hyperlink      |
|[hyperlink]|function|Function to hyperlink url|
|返回值     |string  |Result string            |

```javascript
var str = 'Official site: http://eustia.liriliri.io'
linkify(str); // -> 'Official site: <a href="http://eustia.liriliri.io">http://eustia.liriliri.io</a>'
linkify(str, function (url)
{
    return '<a href="' + url + '" target="_blank">' + url + '</a>';
});
```

## loadCss

Inject link tag into page with given href value.

|参数名|类型|说明|
|-----|----|---|
|src |string  |Style source   |
|cb  |function|Onload callback|

```javascript
loadCss('style.css', function (isLoaded)
{
    // Do something...
});
```

## loadImg

Load image with given src.

|参数名|类型|说明|
|-----|----|---|
|src |string  |Image source   |
|[cb]|function|Onload callback|

```javascript
loadImg('http://eustia.liriliri.io/img.jpg', function (err, img)
{
    console.log(img.width, img.height);
});
```

## loadJs

Inject script tag into page with given src value.

|参数名|类型|说明|
|-----|----|---|
|src |string  |Script source  |
|cb  |function|Onload callback|

```javascript
loadJs('main.js', function (isLoaded)
{
    // Do something...
});
```

## longest

Get the longest item in an array.

|参数名|类型|说明|
|-----|----|---|
|arr   |array|Array to inspect|
|返回值|*    |Longest item    |

```javascript
longest(['a', 'abcde', 'abc']); // -> 'abcde'
```

## lowerCase

Convert string to lower case.

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to convert |
|返回值|string|Lower cased string|

```javascript
lowerCase('TEST'); // -> 'test'
```

## lpad

Pad string on the left side if it's shorter than length.

|参数名|类型|说明|
|-----|----|---|
|str    |string|String to pad         |
|len    |number|Padding length        |
|[chars]|string|String used as padding|
|返回值 |string|Resulted string       |

```javascript
lpad('a', 5); // -> '    a'
lpad('a', 5, '-'); // -> '----a'
lpad('abc', 3, '-'); // -> 'abc'
lpad('abc', 5, 'ab'); // -> 'ababc'
```

## ltrim

Remove chars or white-spaces from beginning of string.

|参数名|类型|说明|
|-----|----|---|
|str   |string      |String to trim    |
|chars |string array|Characters to trim|
|返回值|string      |Trimmed string    |

```javascript
ltrim(' abc  '); // -> 'abc  '
ltrim('_abc_', '_'); // -> 'abc_'
ltrim('_abc_', ['a', '_']); // -> 'bc_'
```

## map

Create an array of values by running each element in collection through iteratee.

|参数名|类型|说明|
|-----|----|---|
|obj     |array object|Collection to iterate over    |
|iteratee|function    |Function invoked per iteration|
|[ctx]   |*           |Function context              |
|返回值  |array       |New mapped array              |

```javascript
map([4, 8], function (n) { return n * n; }); // -> [16, 64]
```

## mapObj

Map for objects.

|参数名|类型|说明|
|-----|----|---|
|obj     |object  |Object to iterate over        |
|iteratee|function|Function invoked per iteration|
|[ctx]   |*       |Function context              |
|返回值  |object  |New mapped object             |

```javascript
mapObj({a: 1, b: 2}, function (val, key) { return val + 1 }); // -> {a: 2, b: 3}
```

## matcher

Return a predicate function that checks if attrs are contained in an object.

|参数名|类型|说明|
|-----|----|---|
|attrs |object  |Object of property values to match|
|返回值|function|New predicate function            |

```javascript
var objects = [
    {a: 1, b: 2, c: 3 },
    {a: 4, b: 5, c: 6 }
];
filter(objects, matcher({a: 4, c: 6 })); // -> [{a: 4, b: 5, c: 6 }]
```

## max

Get maximum value of given numbers.

|参数名|类型|说明|
|-----|----|---|
|...num|number|Numbers to calculate|
|返回值|number|Maximum value       |

```javascript
max(2.3, 1, 4.5, 2); // 4.5
```

## memStorage

Memory-backed implementation of the Web Storage API.

A replacement for environments where localStorage or sessionStorage is not available.

```javascript
var localStorage = window.localStorage || memStorage;
localStorage.setItem('test', 'licia');
```

## memoize

Memoize a given function by caching the computed result.

|参数名|类型|说明|
|-----|----|---|
|fn      |function|Function to have its output memoized|
|[hashFn]|function|Function to create cache key        |
|返回值  |function|New memoized function               |

```javascript
var fibonacci = memoize(function(n)
{
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
});
```

## mergeSort

Merge sort implementation.

Note: It's not an "in-place" sort.

|参数名|类型|说明|
|-----|----|---|
|arr  |array   |Array to sort|
|[cmp]|function|Comparator   |

```javascript
mergeSort([2, 1]); // -> [1, 2]
```

## meta

Document meta manipulation, turn name and content into key value pairs.

Get meta content with given name. If name is omitted, all pairs will be return.

|参数名|类型|说明|
|-----|----|---|
|[name]|string array|Meta name   |
|返回值|string      |Meta content|

Set meta content.

|参数名|类型|说明|
|-----|----|---|
|name   |string|Meta name   |
|content|string|Meta content|

|参数名|类型|说明|
|-----|----|---|
|metas|object|Object of name content pairs|

### remove

Remove metas.

|参数名|类型|说明|
|-----|----|---|
|name|string array|Meta name|

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

Return a sorted list of the names of every method in an object.

|参数名|类型|说明|
|-----|----|---|
|obj   |object|Object to check         |
|返回值|array |Function names in object|

```javascript
methods(console); // -> ['Console', 'assert', 'dir', ...]
```

## min

Get minimum value of given numbers.

|参数名|类型|说明|
|-----|----|---|
|...num|number|Numbers to calculate|
|返回值|number|Minimum value       |

```javascript
min(2.3, 1, 4.5, 2); // 1
```

## mkdir

Recursively create directories.

|参数名|类型|说明|
|-----|----|---|
|dir        |string  |Directory to create|
|mode=0777|number  |Directory mode     |
|[callback] |function|Callback           |

```javascript
mkdir('/tmp/foo/bar/baz', function (err)
{
    if (err) console.log(err);
    else console.log('Done');
});
```

## moment

Tiny moment.js like implementation.

It only supports a subset of moment.js api.

### Available methods

format, isValid, isLeapYear, isSame, isBefore, isAfter, year,
month, date, hour, minute, second, millisecond, unix, clone,
toDate, toArray, toJSON, toISOString, toObject, toString, set,
startOf, endOf, add, subtract, diff

### Not supported

locale and units like quarter and week.

Note: Format uses dateFormat module, so the mask is not quite the same as moment.js.

```javascript
moment('20180501').format('yyyy-mm-dd'); // -> '2018-05-01'
```

## ms

Convert time string formats to milliseconds.

Turn time string into milliseconds.

|参数名|类型|说明|
|-----|----|---|
|str   |string|String format|
|返回值|number|Milliseconds |

Turn milliseconds into time string.

|参数名|类型|说明|
|-----|----|---|
|num   |number|Milliseconds |
|返回值|string|String format|

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

Create a function that negates the result of the predicate function.

|参数名|类型|说明|
|-----|----|---|
|predicate|function|Predicate to negate|
|返回值   |function|New function       |

```javascript
function even(n) { return n % 2 === 0 }
filter([1, 2, 3, 4, 5, 6], negate(even)); // -> [1, 3, 5]
```

## nextTick

Next tick for both node and browser.

|参数名|类型|说明|
|-----|----|---|
|cb  |function|Function to call|

Use process.nextTick if available.

Otherwise setImmediate or setTimeout is used as fallback.

```javascript
nextTick(function ()
{
    // Do something...
});
```

## noop

A no-operation function.

```javascript
noop(); // Does nothing
```

## normalizePath

Normalize file path slashes.

|参数名|类型|说明|
|-----|----|---|
|path  |string|Path to normalize|
|返回值|string|Normalized path  |

```javascript
normalizePath('\\foo\\bar\\'); // -> '/foo/bar/'
normalizePath('./foo//bar'); // -> './foo/bar'
```

## now

Gets the number of milliseconds that have elapsed since the Unix epoch.

```javascript
now(); // -> 1468826678701
```

## objToStr

Alias of Object.prototype.toString.

|参数名|类型|说明|
|-----|----|---|
|value |*     |Source value                        |
|返回值|string|String representation of given value|

```javascript
objToStr(5); // -> '[object Number]'
```

## omit

Opposite of pick.

|参数名|类型|说明|
|-----|----|---|
|obj   |object               |Source object  |
|filter|string array function|Object filter  |
|返回值|object               |Filtered object|

```javascript
omit({a: 1, b: 2}, 'a'); // -> {b: 2}
omit({a: 1, b: 2, c: 3}, ['b', 'c']) // -> {a: 1}
omit({a: 1, b: 2, c: 3, d: 4}, function (val, key)
{
    return val % 2;
}); // -> {b: 2, d: 4}

## once

Create a function that invokes once.

|参数名|类型|说明|
|-----|----|---|
|fn    |function|Function to restrict   |
|返回值|function|New restricted function|

```javascript
function init() {};
var initOnce = once(init);
initOnce();
initOnce(); // -> init is invoked once
```

## optimizeCb

Used for function context binding.

## orientation

Screen orientation helper.

### on

Bind change event.

### off

Unbind change event.

### get

Get current orientation(landscape or portrait).

```javascript
orientation.on('change', function (direction)
{
    console.log(direction); // -> 'portrait'
});
orientation.get(); // -> 'landscape'
```

## pad

Pad string on the left and right sides if it's shorter than length.

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to pad         |
|len   |number|Padding length        |
|chars |string|String used as padding|
|返回值|string|Resulted string       |

```javascript
pad('a', 5); // -> '  a  '
pad('a', 5, '-'); // -> '--a--'
pad('abc', 3, '-'); // -> 'abc'
pad('abc', 5, 'ab'); // -> 'babca'
pad('ab', 5, 'ab'); // -> 'ababa'
```

## pairs

Convert an object into a list of [key, value] pairs.

|参数名|类型|说明|
|-----|----|---|
|obj   |object|Object to convert         |
|返回值|array |List of [key, value] pairs|

```javascript
pairs({a: 1, b: 2}); // -> [['a', 1], ['b', 2]]
```

## parallel

Run an array of functions in parallel.

|参数名|类型|说明|
|-----|----|---|
|tasks|array   |Array of functions     |
|[cb] |function|Callback once completed|

```javascript
parallel([
    function(cb)
    {
        setTimeout(function () { cb(null, 'one') }, 200);
    },
    function(cb)
    {
        setTimeout(function () { cb(null, 'two') }, 100);
    }
], function (err, results)
{
    // results -> ['one', 'two']
});
```

## parseArgs

Parse command line argument options, the same as minimist.

|参数名|类型|说明|
|-----|----|---|
|args  |array |Argument array |
|opts  |object|Parse options  |
|返回值|object|Parsed result  |

### options

|参数名|类型|说明|
|-----|----|---|
|names     |object|option names     |
|shorthands|object|option shorthands|

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

Partially apply a function by filling in given arguments.

|参数名|类型|说明|
|-----|----|---|
|fn         |function|Function to partially apply arguments to|
|...partials|*       |Arguments to be partially applied       |
|返回值     |function|New partially applied function          |

```javascript
var sub5 = partial(function (a, b) { return b - a }, 5);
sub(20); // -> 15
```

## pascalCase

Convert string to "pascalCase".

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to convert  |
|返回值|string|Pascal cased string|

```javascript
pascalCase('fooBar'); // -> FooBar
pascalCase('foo bar'); // -> FooBar
pascalCase('foo_bar'); // -> FooBar
pascalCase('foo.bar'); // -> FooBar
```

## perfNow

High resolution time up to microsecond precision.

```javascript
var start = perfNow();

// Do something.

console.log(perfNow() - start);
```

## pick

Return a filtered copy of an object.

|参数名|类型|说明|
|-----|----|---|
|obj   |object               |Source object  |
|filter|string array function|Object filter  |
|返回值|object               |Filtered object|

```javascript
pick({a: 1, b: 2}, 'a'); // -> {a: 1}
pick({a: 1, b: 2, c: 3}, ['b', 'c']) // -> {b: 2, c: 3}
pick({a: 1, b: 2, c: 3, d: 4}, function (val, key)
{
    return val % 2;
}); // -> {a: 1, c: 3}
```

## pluck

Extract a list of property values.

|参数名|类型|说明|
|-----|----|---|
|obj   |object array|Collection to iterate over     |
|key   |string array|Property path                  |
|返回值|array       |New array of specified property|

```javascript
var stooges = [
    {name: 'moe', age: 40},
    {name: 'larry', age: 50},
    {name: 'curly', age: 60}
];
pluck(stooges, 'name'); // -> ['moe', 'larry', 'curly']
```

## precision

Find decimal precision of a given number.

|参数名|类型|说明|
|-----|----|---|
|num   |number|Number to check|
|返回值|number|Precision      |

```javascript
precision(1.234); // -> 3;
```

## prefix

Add vendor prefixes to a CSS attribute.

|参数名|类型|说明|
|-----|----|---|
|name  |string|Property name         |
|返回值|string|Prefixed property name|

### dash

Create a dasherize version.

```javascript
prefix('text-emphasis'); // -> 'WebkitTextEmphasis'
prefix.dash('text-emphasis'); // -> '-webkit-text-emphasis'
prefix('color'); // -> 'color'
```

## promisify

Convert callback based functions into Promises.

|参数名|类型|说明|
|-----|----|---|
|fn               |function|Callback based function               |
|[multiArgs=false]|boolean |If callback has multiple success value|
|返回值           |boolean |Result function                       |

If multiArgs is set to true, the resulting promise will always fulfill with an array of the callback's success values.

```javascript
var fs = require('fs');

var readFile = promisify(fs.readFile);
readFile('test.js', 'utf-8').then(function (data)
{
    // Do something with file content.
});
```

## property

Return a function that will itself return the key property of any passed-in object.

|参数名|类型|说明|
|-----|----|---|
|path  |string array|Path of the property to get|
|返回值|function    |New accessor function      |

```javascript
var obj = {a: {b: 1}};
property('a')(obj); // -> {b: 1}
property(['a', 'b'])(obj); // -> 1
```

## query

Parse and stringify url query strings.

### parse

Parse a query string into an object.

|参数名|类型|说明|
|-----|----|---|
|str   |string|Query string|
|返回值|object|Query object|

### stringify

Stringify an object into a query string.

|参数名|类型|说明|
|-----|----|---|
|obj   |object|Query object|
|返回值|string|Query string|

```javascript
query.parse('foo=bar&eruda=true'); // -> {foo: 'bar', eruda: 'true'}
query.stringify({foo: 'bar', eruda: 'true'}); // -> 'foo=bar&eruda=true'
query.parse('name=eruda&name=eustia'); // -> {name: ['eruda', 'eustia']}
```

## quickSort

Quick sort implementation.

|参数名|类型|说明|
|-----|----|---|
|arr  |array   |Array to sort|
|[cmp]|function|Comparator   |

```javascript
quickSort([2, 1]); // -> [1, 2]
```

## raf

Shortcut for requestAnimationFrame.

Use setTimeout if native requestAnimationFrame is not supported.

```javascript
var id = raf(function tick()
{
    // Animation stuff
    raf(tick);
});
raf.cancel(id);
```

## random

Produces a random number between min and max(inclusive).

|参数名|类型|说明|
|-----|----|---|
|min             |number |Minimum possible value|
|max             |number |Maximum possible value|
|[floating=false]|boolean|Float or not          |
|返回值          |number |Random number         |

```javascript
random(1, 5); // -> an integer between 0 and 5
random(5); // -> an integer between 0 and 5
random(1.2, 5.2, true); /// -> a floating-point number between 1.2 and 5.2
```

## randomBytes

Random bytes generator.

Use crypto module in node or crypto object in browser if possible.

|参数名|类型|说明|
|-----|----|---|
|size  |number|Number of bytes to generate |
|返回值|object|Random bytes of given length|

```javascript
randomBytes(5); // -> [55, 49, 153, 30, 122]
```

## randomItem

Get a random item from an array.

|参数名|类型|说明|
|-----|----|---|
|arr   |array|Array to get        |
|返回值|*    |Randomly picked item|

```javascript
randomItem([1, 2, 3]); // -> 2
```

## range

Create flexibly-numbered lists of integers.

|参数名|类型|说明|
|-----|----|---|
|[start]|number|Start of the range                |
|end    |number|End of the range                  |
|step=1 |number|Value to increment or decrement by|

```javascript
range(5); // -> [0, 1, 2, 3, 4]
range(0, 5, 2) // -> [0, 2, 4]
```

## ready

Invoke callback when dom is ready, similar to jQuery ready.

|参数名|类型|说明|
|-----|----|---|
|fn  |function|Callback function|

```javascript
ready(function ()
{
    // It's safe to manipulate dom here.
});
```

## reduce

Turn a list of values into a single value.

|参数名|类型|说明|
|-----|----|---|
|obj                |object array|Collection to iterate over    |
|[iteratee=identity]|function    |Function invoked per iteration|
|[initial]          |*           |Initial value                 |
|[ctx]              |*           |Function context              |
|返回值             |*           |Accumulated value             |

```javascript
reduce([1, 2, 3], function (sum, n) { return sum + n }, 0); // -> 6
```

## reduceRight

Right-associative version of reduce.

```javascript
reduceRight([[1], [2], [3]], function (a, b) { return a.concat(b) }, []); // -> [3, 2, 1]
```

## reject

Opposite of filter.

|参数名|类型|说明|
|-----|----|---|
|obj      |array   |Collection to iterate over             |
|predicate|function|Function invoked per iteration         |
|[ctx]    |*       |Predicate context                      |
|返回值   |array   |Array of all values that pass predicate|

```javascript
reject([1, 2, 3, 4, 5], function (val)
{
    return val % 2 === 0;
}); // -> [1, 3, 5]
```

## remove

Remove all elements from array that predicate returns truthy for and return an array of the removed elements.

Unlike filter, this method mutates array.

|参数名|类型|说明|
|-----|----|---|
|obj      |array   |Collection to iterate over          |
|predicate|function|Function invoked per iteration      |
|[ctx]    |*       |Predicate context                   |
|返回值   |array   |Array of all values that are removed|

```javascript
var arr = [1, 2, 3, 4, 5];
var evens = remove(arr, function (val) { return val % 2 === 0 });
console.log(arr); // -> [1, 3, 5]
console.log(evens); // -> [2, 4]
```

## repeat

Repeat string n-times.

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to repeat|
|n     |number|Repeat times    |
|返回值|string|Repeated string |

```javascript
repeat('a', 3); // -> 'aaa'
repeat('ab', 2); // -> 'abab'
repeat('*', 0); // -> ''
```

## restArgs

This accumulates the arguments passed into an array, after a given index.

|参数名|类型|说明|
|-----|----|---|
|function  |function|Function that needs rest parameters    |
|startIndex|number  |The start index to accumulates         |
|返回值    |function|Generated function with rest parameters|

```javascript
var paramArr = restArgs(function (rest) { return rest });
paramArr(1, 2, 3, 4); // -> [1, 2, 3, 4]
```

## rgbToHsl

Convert rgb to hsl.

|参数名|类型|说明|
|-----|----|---|
|rgb   |array|Rgb values|
|返回值|array|Hsl values|

```javascript
rgbToHsl([52, 203, 165, 0.8]); // -> [165, 59, 50, 0.8]
```

## rmCookie

Loop through all possible path and domain to remove cookie.

|参数名|类型|说明|
|-----|----|---|
|key |string|Cookie key|

```javascript
rmCookie('test');
```

## rmdir

Recursively remove directories.

|参数名|类型|说明|
|-----|----|---|
|dir     |string  |Directory to remove|
|callback|function|Callback           |

```javascript
rmdir('/tmp/foo/bar/baz', function (err)
{
    if (err) console.log (err);
    else console.log('Done');
});
```

## root

Root object reference, `global` in nodeJs, `window` in browser.

## rpad

Pad string on the right side if it's shorter than length.

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to pad         |
|len   |number|Padding length        |
|chars |string|String used as padding|
|返回值|string|Resulted string       |

```javascript
rpad('a', 5); // -> 'a    '
rpad('a', 5, '-'); // -> 'a----'
rpad('abc', 3, '-'); // -> 'abc'
rpad('abc', 5, 'ab'); // -> 'abcab'
```

## rtrim

Remove chars or white-spaces from end of string.

|参数名|类型|说明|
|-----|----|---|
|str   |string      |String to trim    |
|chars |string array|Characters to trim|
|返回值|string      |Trimmed string    |

```javascript
rtrim(' abc  '); // -> ' abc'
rtrim('_abc_', '_'); // -> '_abc'
rtrim('_abc_', ['c', '_']); // -> '_ab'
```

## safeCb

Create callback based on input value.

## safeDel

Delete object property.

|参数名|类型|说明|
|-----|----|---|
|obj   |object      |Object to query           |
|path  |array string|Path of property to delete|
|返回值|*           |Deleted value or undefined|

```javascript
var obj = {a: {aa: {aaa: 1}}};
safeDel(obj, 'a.aa.aaa'); // -> 1
safeDel(obj, ['a', 'aa']); // -> {}
safeDel(obj, 'a.b'); // -> undefined
```

## safeGet

Get object property, don't throw undefined error.

|参数名|类型|说明|
|-----|----|---|
|obj   |object      |Object to query          |
|path  |array string|Path of property to get  |
|返回值|*           |Target value or undefined|

```javascript
var obj = {a: {aa: {aaa: 1}}};
safeGet(obj, 'a.aa.aaa'); // -> 1
safeGet(obj, ['a', 'aa']); // -> {aaa: 1}
safeGet(obj, 'a.b'); // -> undefined
```

## safeSet

Set value at path of object.

If a portion of path doesn't exist, it's created.

|参数名|类型|说明|
|-----|----|---|
|obj |object      |Object to modify       |
|path|array string|Path of property to set|
|val |*           |Value to set           |

```javascript
var obj = {};
safeSet(obj, 'a.aa.aaa', 1); // obj = {a: {aa: {aaa: 1}}}
safeSet(obj, ['a', 'aa'], 2); // obj = {a: {aa: 2}}
safeSet(obj, 'a.b', 3); // obj = {a: {aa: 2, b: 3}}
```

## safeStorage

Use storage safely in safari private browsing and older browsers.

|参数名|类型|说明|
|-----|----|---|
|[type='local']|string|local or session |
|返回值        |object|Specified storage|

```javascript
var localStorage = safeStorage('local');
localStorage.setItem('licia', 'util');
```

## sample

Sample random values from a collection.

|参数名|类型|说明|
|-----|----|---|
|obj   |array object|Collection to sample  |
|n     |number      |Number of values      |
|返回值|array       |Array of sample values|

```javascript
sample([2, 3, 1], 2); // -> [2, 3]
sample({a: 1, b: 2, c: 3}, 1); // -> [2]
```

## scrollTo

Scroll to a target with animation.

|参数名|类型|说明|
|-----|----|---|
|target |element string number|Scroll target |
|options|object               |Scroll options|

### Options

|Name     |Type           |Default |Desc                                   |
|---------|---------------|--------|---------------------------------------|
|tolerance|number         |0       |Tolerance of target to scroll          |
|duration |number         |800     |Scroll duration                        |
|easing   |string function|outQuart|Easing function                        |
|callback |function       |noop    |Function to run once scrolling complete|

```javascript
scrollTo('body', {
    tolerance: 0,
    duration: 800,
    easing: 'outQuart',
    callback: function () {}
});
```

## selectionSort

Selection sort implementation.

|参数名|类型|说明|
|-----|----|---|
|arr  |array   |Array to sort|
|[cmp]|function|Comparator   |

```javascript
selectionSort([2, 1]); // -> [1, 2]
```

## shuffle

Randomize the order of the elements in a given array.

|参数名|类型|说明|
|-----|----|---|
|arr   |array|Array to randomize|
|返回值|array|Randomized Array  |

```javascript
shuffle([1, 2, 3]); // -> [3, 1, 2]
```

## size

Get size of object, length of array like object or the number of keys.

|参数名|类型|说明|
|-----|----|---|
|obj   |array object|Collection to inspect|
|返回值|number      |Collection size      |

```javascript
size({a: 1, b: 2}); // -> 2
size([1, 2, 3]); // -> 3
```

## slice

Create slice of source array or array-like object.

|参数名|类型|说明|
|-----|----|---|
|array             |array |Array to slice            |
|[start=0]         |number|Start position            |
|[end=array.length]|number|End position, not included|

```javascript
slice([1, 2, 3, 4], 1, 2); // -> [2]
```

## snakeCase

Convert string to "snakeCase".

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to convert |
|返回值|string|Snake cased string|

```javascript
snakeCase('fooBar'); // -> foo_bar
snakeCase('foo bar'); // -> foo_bar
snakeCase('foo.bar'); // -> foo_bar
```

## some

Check if predicate return truthy for any element.

|参数名|类型|说明|
|-----|----|---|
|obj      |array object|Collection to iterate over                    |
|predicate|function    |Function to invoked per iteration             |
|ctx      |*           |Predicate context                             |
|返回值   |boolean     |True if any element passes the predicate check|

```javascript
some([2, 5], function (val)
{
    return val % 2 === 0;
}); // -> true
```

## sortBy

Return an array of elements sorted in ascending order by results of running each element through iteratee.

|参数名|类型|说明|
|-----|----|---|
|arr                |object array|Collection to iterate over|
|[iteratee=identity]|function    |Iteratee to sort by       |
|[ctx]              |*           |Iteratee context          |
|返回值             |array       |New sorted array          |

```javascript
sortBy([1, 2, 3, 4, 5, 6], function (num)
{
    return Math.sin(num);
}); // -> [5, 4, 6, 3, 1, 2]
```

## spaceCase

Convert string to "spaceCase".

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to convert |
|返回值|string|Space cased string|

```javascript
spaceCase('fooBar'); // -> foo bar
spaceCase('foo.bar'); // -> foo bar
spaceCase('foo.bar'); // -> foo bar
```

## splitCase

Split different string case to an array.

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to split|
|返回值|array |Result array   |

```javascript
splitCase('foo-bar'); // -> ['foo', 'bar']
splitCase('foo bar'); // -> ['foo', 'bar']
splitCase('foo_bar'); // -> ['foo', 'bar']
splitCase('foo.bar'); // -> ['foo', 'bar']
splitCase('fooBar'); // -> ['foo', 'bar']
splitCase('foo-Bar'); // -> ['foo', 'bar']
```

## splitPath

Split path into device, dir, name and ext.

|参数名|类型|说明|
|-----|----|---|
|path  |string|Path to split                      |
|返回值|object|Object containing dir, name and ext|

```javascript
splitPath('f:/foo/bar.txt'); // -> {dir: 'f:/foo/', name: 'bar.txt', ext: '.txt'}
splitPath('/home/foo/bar.txt'); // -> {dir: '/home/foo/', name: 'bar.txt', ext: '.txt'}
```

## startWith

Check if string starts with the given target string.

|参数名|类型|说明|
|-----|----|---|
|str   |string |String to search                 |
|prefix|string |String prefix                    |
|返回值|boolean|True if string starts with prefix|

```javascript
startWith('ab', 'a'); // -> true
```

## strHash

String hash function using djb2.

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to hash|
|返回值|number|Hash result   |

```javascript
strHash('test'); // -> 2090770981
```

## stringify

JSON stringify with support for circular object, function etc.

Undefined is treated as null value.

|参数名|类型|说明|
|-----|----|---|
|obj   |object|Object to stringify|
|spaces|number|Indent spaces      |
|返回值|string|Stringified object |

```javascript
stringify({a: function () {}}); // -> '{"a":"[Function function () {}]"}'
var obj = {a: 1};
obj.b = obj;
stringify(obj); // -> '{"a":1,"b":"[Circular ~]"}'
```

## stripAnsi

Strip ansi codes from a string.

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to strip|
|返回值|string|Resulted string|

```javascript
stripAnsi('\u001b[4mcake\u001b[0m'); // -> 'cake'
```

## stripCmt

Strip comments from source code.

|参数名|类型|说明|
|-----|----|---|
|str   |string|Source code          |
|返回值|string|Code without comments|

```javascript
stripCmts('// comment \n var a = 5; /* comment2\n * comment3\n *\/'); // -> ' var a = 5; '
```

## stripColor

Strip ansi color codes from a string.

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to strip|
|返回值|string|Resulted string|

```javascript
stripColor('\u001b[31mred\u001b[39m'); // -> 'red'
```

## stripHtmlTag

Strip html tags from a string.

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to strip|
|返回值|string|Resulted string|

```javascript
stripHtmlTag('<p>Hello</p>'); // -> 'Hello'
```

## sum

Compute sum of given numbers.

|参数名|类型|说明|
|-----|----|---|
|...num|number|Numbers to calculate|
|返回值|number|Sum of numbers      |

```javascript
sum(1, 2, 5); // -> 8
```

## swap

Swap two items in an array.

|参数名|类型|说明|
|-----|----|---|
|arr   |array |Array to swap|
|a     |number|First index  |
|b     |number|Second index |
|返回值|array |Array given  |

```javascript
var arr = [1, 2];
swap(arr, 0, 1); // -> [2, 1]
```

## template

Compile JavaScript template into function that can be evaluated for rendering.

|参数名|类型|说明|
|-----|----|---|
|str   |string  |Template string           |
|返回值|function|Compiled template function|

```javascript
template('Hello <%= name %>!')({name: 'licia'}); // -> 'Hello licia!'
template('<p><%- name %></p>')({name: '<licia>'}); // -> '<p>&lt;licia&gt;</p>'
template('<%if (echo) {%>Hello licia!<%}%>')({echo: true}); // -> 'Hello licia!'
```

## throttle

Return a new throttled version of the passed function.

|参数名|类型|说明|
|-----|----|---|
|fn    |function|Function to throttle           |
|wait  |number  |Number of milliseconds to delay|
|返回值|function|New throttled function         |

```javascript
$(window).scroll(throttle(updatePos, 100));
```

## through

Tiny wrapper of stream Transform.

|参数名|类型|说明|
|-----|----|---|
|opts={}|Object  |Options to initialize stream|
|transform|function|Transform implementation    |
|[flush]  |function|Flush implementation        |

### obj

Shortcut for setting objectMode to true.

### ctor

Return a class that extends stream Transform.

```javascript
fs.createReadStream('in.txt')
  .pipe(through(function (chunk, enc, cb)
  {
      // Do something to chunk
      this.push(chunk);
      cb();
  })).pipe(fs.createWriteStream('out.txt'));
```

## timeAgo

Format datetime with *** time ago statement.

|参数名|类型|说明|
|-----|----|---|
|date          |Date  |Date to calculate        |
|[now=new Date]|Date  |Current date             |
|返回值        |string|Formatted time ago string|

```javascript
var now = new Date().getTime();
timeAgo(now - 1000 * 6); // -> right now
timeAgo(now + 1000 * 15); // -> in 15 minutes
timeAgo(now - 1000 * 60 * 60 * 5, now); // -> 5 hours ago
```

## timeTaken

Get execution time of a function.

|参数名|类型|说明|
|-----|----|---|
|fn    |function|Function to measure time|
|返回值|number  |Execution time, ms      |

```javascript
timeTaken(function ()
{
    // Do something.
}); // -> Time taken to execute given function.
```

## toArr

Convert value to an array.

|参数名|类型|说明|
|-----|----|---|
|val   |*    |Value to convert|
|返回值|array|Converted array |

```javascript
toArr({a: 1, b: 2}); // -> [{a: 1, b: 2}]
toArr('abc'); // -> ['abc']
toArr(1); // -> [1]
toArr(null); // -> []
```

## toBool

Convert value to a boolean.

|参数名|类型|说明|
|-----|----|---|
|val   |*      |Value to convert |
|返回值|boolean|Converted boolean|

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

Convert value to a Date.

|参数名|类型|说明|
|-----|----|---|
|val   |*   |Value to convert|
|返回值|Date|Converted Date  |

```javascript
toDate('20180501');
toDate('2018-05-01');
toDate(1525107450849);
```

## toEl

Convert html string to dom elements.

There should be only one root element.

|参数名|类型|说明|
|-----|----|---|
|str   |string |Html string |
|返回值|element|Html element|

```javascript
toEl('<div>test</div>');
```

## toInt

Convert value to an integer.

|参数名|类型|说明|
|-----|----|---|
|val   |*     |Value to convert |
|返回值|number|Converted integer|

```javascript
toInt(1.1); // -> 1
toInt(undefined); // -> 0
```

## toNum

Convert value to a number.

|参数名|类型|说明|
|-----|----|---|
|val   |*     |Value to process|
|返回值|number|Resulted number |

```javascript
toNum('5'); // -> 5
```

## toSrc

Convert function to its source code.

|参数名|类型|说明|
|-----|----|---|
|fn    |function|Function to convert|
|返回值|string  |Source code        |

```javascript
toSrc(Math.min); // -> 'function min() { [native code] }'
toSrc(function () {}) // -> 'function () { }'
```

## toStr

Convert value to a string.

|参数名|类型|说明|
|-----|----|---|
|val   |*     |Value to convert|
|返回值|string|Resulted string |

```javascript
toStr(null); // -> ''
toStr(1); // -> '1'
toStr(false); // -> 'false'
toStr([1, 2, 3]); // -> '1,2,3'
```

## topoSort

Topological sorting algorithm.

|参数名|类型|说明|
|-----|----|---|
|edges |array|Dependencies|
|返回值|array|Sorted order|

```javascript
topoSort([[1, 2], [1, 3], [3, 2]]); // -> [1, 3, 2]
```

## trigger

Trigger browser events.

|参数名|类型|说明|
|-----|----|---|
|[el=document]|element|Element to trigger|
|type         |string |Event type        |
|opts         |object |Options           |

```javascript
trigger(el, 'mouseup');
trigger('keydown', {keyCode: 65});
```

## trim

Remove chars or white-spaces from beginning end of string.

|参数名|类型|说明|
|-----|----|---|
|str   |string      |String to trim    |
|chars |string array|Characters to trim|
|返回值|string      |Trimmed string    |

```javascript
trim(' abc  '); // -> 'abc'
trim('_abc_', '_'); // -> 'abc'
trim('_abc_', ['a', 'c', '_']); // -> 'b'
```

## tryIt

Run function in a try catch.

|参数名|类型|说明|
|-----|----|---|
|fn  |function|Function to try catch|
|[cb]|function|Callback             |

```javascript
tryIt(function ()
{
    // Do something that might cause an error.
}, function (err, result)
{
    if (err) console.log(err);
});
```

## type

Determine the internal JavaScript [[Class]] of an object.

|参数名|类型|说明|
|-----|----|---|
|val   |*     |Value to get type         |
|返回值|string|Type of object, lowercased|

```javascript
type(5); // -> 'number'
type({}); // -> 'object'
type(function () {}); // -> 'function'
type([]); // -> 'array'
```

## ucs2

UCS-2 encoding and decoding.

### encode

Create a string using an array of code point values.

|参数名|类型|说明|
|-----|----|---|
|arr   |array |Array of code points|
|返回值|string|Encoded string      |

### decode

Create an array of code point values using a string.

|参数名|类型|说明|
|-----|----|---|
|str   |string|Input string        |
|返回值|array |Array of code points|

```javascript
ucs2.encode([0x61, 0x62, 0x63]); // -> 'abc'
ucs2.decode('abc'); // -> [0x61, 0x62, 0x63]
'𝌆'.length; // -> 2
ucs2.decode('𝌆').length; // -> 1
```

## unescape

Convert HTML entities back, the inverse of escape.

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to unescape|
|返回值|string|unescaped string  |

```javascript
unescape('You &amp; Me'); -> // -> 'You & Me'
```

## union

Create an array of unique values, in order, from all given arrays.

|参数名|类型|说明|
|-----|----|---|
|...arr|array|Arrays to inspect           |
|返回值|array|New array of combined values|

```javascript
union([2, 1], [4, 2], [1, 2]); // -> [2, 1, 4]
```

## uniqId

Generate a globally-unique id.

|参数名|类型|说明|
|-----|----|---|
|[prefix]|string|Id prefix         |
|返回值  |string|Globally-unique id|

```javascript
uniqId('eusita_'); // -> 'eustia_xxx'
```

## unique

Create duplicate-free version of an array.

|参数名|类型|说明|
|-----|----|---|
|arr      |array   |Array to inspect             |
|[compare]|function|Function for comparing values|
|返回值   |array   |New duplicate free array     |

```javascript
unique([1, 2, 3, 1]); // -> [1, 2, 3]
```

## unzip

Opposite of zip.

|参数名|类型|说明|
|-----|----|---|
|arr   |array|Array of grouped elements to process|
|返回值|array|New array of regrouped elements     |

```javascript
unzip([['a', 1, true], ['b', 2, false]]); // -> [['a', 'b'], [1, 2], [true, false]]
```

## upperCase

Convert string to upper case.

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to convert|
|返回值|string|Uppercased string|

```javascript
upperCase('test'); // -> 'TEST'
```

## upperFirst

Convert the first character of string to upper case.

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to convert|
|返回值|string|Converted string |

```javascript
upperFirst('red'); // -> Red
```

## use

Use modules that is created by define.

|参数名|类型|说明|
|-----|----|---|
|[requires]|array   |Dependencies        |
|method    |function|Codes to be executed|

```javascript
define('A', function ()
{
    return 'A';
});
use(['A'], function (A)
{
    console.log(A + 'B'); // -> 'AB'
});
```

## utf8

UTF-8 encoding and decoding.

### encode

Turn any UTF-8 decoded string into UTF-8 encoded string.

|参数名|类型|说明|
|-----|----|---|
|str   |string|String to encode|
|返回值|string|Encoded string  |

### decode

|参数名|类型|说明|
|-----|----|---|
|str         |string |String to decode      |
|[safe=false]|boolean|Suppress error if true|
|返回值      |string |Decoded string        |

Turn any UTF-8 encoded string into UTF-8 decoded string.

```javascript
utf8.encode('\uD800\uDC00'); // ->  '\xF0\x90\x80\x80'
utf8.decode('\xF0\x90\x80\x80'); // -> '\uD800\uDC00'
```

## uuid

RFC4122 version 4 compliant uuid generator.

Check [RFC4122 4.4](http://www.ietf.org/rfc/rfc4122.txt) for reference.

```javascript
uuid(); // -> '53ce0497-6554-49e9-8d79-347406d2a88b'
```

## values

Create an array of the own enumerable property values of object.

|参数名|类型|说明|
|-----|----|---|
|obj   |object|Object to query         |
|返回值|array |Array of property values|

```javascript
values({one: 1, two: 2}); // -> [1, 2]
```

## viewportScale

Get viewport scale.

```javascript
viewportScale(); // -> 3
```

## waterfall

Run an array of functions in series.

|参数名|类型|说明|
|-----|----|---|
|tasks|array   |Array of functions     |
|[cb] |function|Callback once completed|

```javascript
waterfall([
    function (cb)
    {
        cb(null, 'one');
    },
    function (arg1, cb)
    {
        // arg1 -> 'one'
        cb(null, 'done');
    }
], function (err, result)
{
    // result -> 'done'
});
```

## workerize

Move a stand-alone function to a worker thread.

|参数名|类型|说明|
|-----|----|---|
|fn    |function|Function to turn   |
|返回值|function|Workerized Function|

```javascript
var worker = workerize(function (a, b)
{
    return a + b;
});
worker(1, 2).then(function (value)
{
    console.log(value); // -> 3
});
```

## wrap

Wrap the function inside a wrapper function, passing it as the first argument.

|参数名|类型|说明|
|-----|----|---|
|fn     |*       |Function to wrap|
|wrapper|function|Wrapper function|
|返回值 |function|New function    |

```javascript
var p = wrap(escape, function(fn, text)
{
    return '<p>' + fn(text) + '</p>';
});
p('You & Me'); // -> '<p>You &amp; Me</p>'
```

## zip

Merge together the values of each of the arrays with the values at the corresponding position.

|参数名|类型|说明|
|-----|----|---|
|*arr  |array|Arrays to process            |
|返回值|array|New array of grouped elements|

```javascript
zip(['a', 'b'], [1, 2], [true, false]); // -> [['a', 1, true], ['b', 2, false]]
```