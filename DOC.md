# Eustia Documentation

## $ 

jQuery like style dom manipulator.

### Available methods

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

Element attribute manipulation.

Get the value of an attribute for the first element in the set of matched elements.

|Name   |Type                |Desc                            |
|-------|--------------------|--------------------------------|
|element|string array element|Elements to manipulate          |
|name   |string              |Attribute name                  |
|return |string              |Attribute value of first element|

Set one or more attributes for the set of matched elements.

|Name   |Type                |Desc                  |
|-------|--------------------|----------------------|
|element|string array element|Elements to manipulate|
|name   |string              |Attribute name        |
|value  |string              |Attribute value       |

|Name      |Type                |Desc                                  |
|----------|--------------------|--------------------------------------|
|element   |string array element|Elements to manipulate                |
|attributes|object              |Object of attribute-value pairs to set|

### remove

Remove an attribute from each element in the set of matched elements.

|Name   |Type                |Desc                  |
|-------|--------------------|----------------------|
|element|string array element|Elements to manipulate|
|name   |string              |Attribute name        |

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

Element class manipulations.

### add

Add the specified class(es) to each element in the set of matched elements.

|Name   |Type                |Desc                  |
|-------|--------------------|----------------------|
|element|string array element|Elements to manipulate|
|names  |string array        |Classes to add        |

### has

Determine whether any of the matched elements are assigned the given class.

|Name   |Type                |Desc                                 |
|-------|--------------------|-------------------------------------|
|element|string array element|Elements to manipulate               |
|name   |string              |Class name                           |
|return |boolean             |True if elements has given class name|

### toggle

Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the state argument.

|Name   |Type                |Desc                  |
|-------|--------------------|----------------------|
|element|string array element|Elements to manipulate|
|name   |string              |Class name to toggle  |

### remove

Remove a single class, multiple classes, or all classes from each element in the set of matched elements.

|Name   |Type                |Desc                  |
|-------|--------------------|----------------------|
|element|string array element|Elements to manipulate|
|names  |string              |Class names to remove |

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

Element css manipulation.

Get the computed style properties for the first element in the set of matched elements.

|Name   |Type                |Desc                      |
|-------|--------------------|--------------------------|
|element|string array element|Elements to manipulate    |
|name   |string              |Property name             |
|return |string              |Css value of first element|

Set one or more CSS properties for the set of matched elements.

|Name   |Type                |Desc                  |
|-------|--------------------|----------------------|
|element|string array element|Elements to manipulate|
|name   |string              |Property name         |
|value  |string              |Css value             |

|Name      |Type                |Desc                            |
|----------|--------------------|--------------------------------|
|element   |string array element|Elements to manipulate          |
|properties|object              |Object of css-value pairs to set|

```javascript
$css('#test', {
    'color': '#fff',
    'background': 'black'
});
$css('#test', 'display', 'block');
$css('#test', 'color'); // -> #fff
```

## $data 

Wrapper of $attr, adds data- prefix to keys.

```javascript
$data('#test', 'attr1', 'eustia');
```

## $event 

bind events to certain dom elements.

```javascript
function clickHandler() {
    // Do something...
}
$event.on('#test', 'click', clickHandler);
$event.off('#test', 'click', clickHandler);
```

## $insert 

Insert html on different position.

### before

Insert content before elements.

### after

Insert content after elements.

### prepend

Insert content to the beginning of elements.

### append

Insert content to the end of elements.

|Name   |Type                |Desc                  |
|-------|--------------------|----------------------|
|element|string array element|Elements to manipulate|
|content|string              |Html strings          |

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

Get the position of the element in document.

|Name   |Type                |Desc                  |
|-------|--------------------|----------------------|
|element|string array element|Elements to get offset|

```javascript
$offset('#test'); // -> {left: 0, top: 0, width: 0, height: 0}
```

## $property 

Element property html, text, val getter and setter.

### html

Get the HTML contents of the first element in the set of matched elements or
set the HTML contents of every matched element.

### text

Get the combined text contents of each element in the set of matched
elements, including their descendants, or set the text contents of the
matched elements.

### val

Get the current value of the first element in the set of matched elements or
set the value of every matched element.

```javascript
$property.html('#test', 'licia');
$property.html('#test'); // -> licia
```

## $remove 

Remove the set of matched elements from the DOM.

|Name   |Type                |Desc              |
|-------|--------------------|------------------|
|element|string array element|Elements to delete|

```javascript
$remove('#test');
```

## $safeEls 

Convert value into an array, if it's a string, do querySelector.

|Name  |Type                |Desc             |
|------|--------------------|-----------------|
|value |element array string|Value to convert |
|return|array               |Array of elements|

```javascript
$safeEls('.test'); // -> Array of elements with test class
```

## $show 

Show elements.

|Name   |Type                |Desc            |
|-------|--------------------|----------------|
|element|string array element|Elements to show|

```javascript
$show('#test');
```

## Blob 

Use Blob when available, otherwise BlobBuilder.

### constructor

|Name  |Type  |Desc      |
|------|------|----------|
|parts |array |Blob parts|
|[opts]|object|Options   |

```javascript
var blob = new Blob([]);
```

## Class 

Create JavaScript class.

|Name     |Type    |Desc                             |
|---------|--------|---------------------------------|
|methods  |object  |Public methods                   |
|[statics]|object  |Static methods                   |
|return   |function|Function used to create instances|

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

Color converter.

### constructor

|Name |Type         |Desc            |
|-----|-------------|----------------|
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
|return|object|Object containing value and model|

```javascript
Color.parse('rgb(170, 287, 204, 0.5)'); // -> {val: [170, 187, 204, 0.5], model: 'rgb'}
var color = new Color('#abc');
color.toRgb(); // -> 'rgb(170, 187, 204)'
color.toHsl(); // -> 'hsl(210, 25%, 73%)'
```

## Dispatcher 

Flux dispatcher.

[Related docs](https://facebook.github.io/flux/docs/dispatcher.html)

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

Event emitter class which provides observer pattern.

### on

Bind event.

### off

Unbind event.

### once

Bind event that trigger once.

|Name    |Type    |Desc          |
|--------|--------|--------------|
|event   |string  |Event name    |
|listener|function|Event listener|

### emit

Emit event.

|Name   |Type  |Desc                        |
|-------|------|----------------------------|
|event  |string|Event name                  |
|...args|*     |Arguments passed to listener|

### mixin

[static] Mixin object class methods.

|Name|Type  |Desc           |
|----|------|---------------|
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

|Name|Type |Desc            |
|----|-----|----------------|
|arr |array|Array of strings|

|Name|Type  |Desc                  |
|----|------|----------------------|
|obj |object|Pairs of key and value|

```javascript
var importance = new Enum([
    'NONE', 'TRIVIAL', 'REGULAR', 'IMPORTANT', 'CRITICAL'
]);

if (val === importance.CRITICAL) {
    // Do something.
}
```

## JsonTransformer 

Json to json transformer.

### constructor

|Name     |Type  |Desc                     |
|---------|------|-------------------------|
|[data={}]|object|Json object to manipulate|

### set

Set object value.

|Name |Type  |Desc        |
|-----|------|------------|
|[key]|string|Object key  |
|val  |*     |Value to set|

If key is not given, the whole source object is replaced by val.

### get

Get object value.

|Name  |Type  |Desc                           |
|------|------|-------------------------------|
|[key] |string|Object key                     |
|return|*     |Specified value or whole object|

### remove

Remove object value.

|Name|Type        |Desc                 |
|----|------------|---------------------|
|key |array string|Object keys to remove|

### map

Shortcut for array map.

|Name|Type    |Desc                          |
|----|--------|------------------------------|
|from|string  |From object path              |
|to  |string  |Target object path            |
|fn  |function|Function invoked per iteration|

### filter

Shortcut for array filter.

### compute

Compute value from several object values.

|Name|Type        |Desc                            |
|----|------------|--------------------------------|
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

|Name  |Type  |Desc         |
|------|------|-------------|
|val   |*     |Value to push|
|return|number|Current size |

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

|Name|Type  |Desc                  |
|----|------|----------------------|
|name|string|LocalStorage item name|
|data|object|Default data          |

```javascript
var store = new LocalStore('licia');
store.set('name', 'licia');
```

## Logger 

Simple logger with level filter.

### constructor

|Name       |Type  |Desc        |
|-----------|------|------------|
|name       |string|Logger name |
|level=DEBUG|number|Logger level|

### setLevel

Set level.

|Name |Type         |Desc        |
|-----|-------------|------------|
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

## MutationObserver 

Safe MutationObserver, does nothing if MutationObserver is not supported.

```javascript
var observer = new MutationObserver(function (mutations) {
    // Do something.
});
observer.observe(document.htmlElement);
observer.disconnect();
```

## Promise 

Lightweight Promise implementation.

[Promises spec](https://github.com/promises-aplus/promises-spec)

```javascript
function get(url) {
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', url);
        req.onload = function () {
            req.status == 200 ? resolve(req.reponse) : reject(Error(req.statusText));
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

|Name  |Type  |Desc           |
|------|------|---------------|
|item  |*     |Item to enqueue|
|return|number|Current size   |

### dequeue

Remove the first item of the queue.

### peek

Get the first item without removing it.

### forEach

Iterate over the queue.

|Name    |Type    |Desc                      |
|--------|--------|--------------------------|
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

|Name        |Type    |Desc                       |
|------------|--------|---------------------------|
|reducer     |function|Function returns next state|
|initialState|*       |Initial state              |

### subscribe

Add a change listener.

|Name    |Type    |Desc                                |
|--------|--------|------------------------------------|
|listener|function|Callback to invoke on every dispatch|
|return  |function|Function to unscribe                |

### dispatch

Dispatch an action.

|Name  |Type  |Desc                       |
|------|------|---------------------------|
|action|object|Object representing changes|
|return|object|Same action object         |

### getState

Get the current state.

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

Simple wrapper of querySelectorAll to make dom selection easier.

### constructor

|Name    |Type  |Desc               |
|--------|------|-------------------|
|selector|string|Dom selector string|

### find

Get desdendants of current matched elements.

|Name    |Type  |Desc               |
|--------|------|-------------------|
|selector|string|Dom selector string|

### each

Iterate over matched elements.

|Name|Type    |Desc                                |
|----|--------|------------------------------------|
|fn  |function|Function to execute for each element|

```javascript
var $test = new Select('#test');
$test.find('.test').each(function (idx, element) {
    // Manipulate dom nodes
});
```

## SessionStore 

SessionStorage wrapper.

Extend from Store.

### constructor

|Name|Type  |Desc                    |
|----|------|------------------------|
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

|Name  |Type  |Desc        |
|------|------|------------|
|item  |*     |Item to add |
|return|number|Current size|

### pop

Get the last item of the stack.

### peek

Get the last item without removing it.

### forEach

Iterate over the stack.

|Name    |Type    |Desc                      |
|--------|--------|--------------------------|
|iteratee|function|Function invoked iteration|
|[ctx]   |*       |Function context          |

### toArr

Convert the stack to a JavaScript array.

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

|Name   |Type  |Desc                  |
|-------|------|----------------------|
|initial|string|Initial state         |
|events |string|Events to change state|

### is

Check current state.

|Name  |Type   |Desc                                    |
|------|-------|----------------------------------------|
|value |string |State to check                          |
|return|boolean|True if current state equals given value|

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

Memory storage.

Extend from Emitter.

### constructor

|Name|Type  |Desc        |
|----|------|------------|
|data|object|Initial data|

### set

Set value.

|Name|Type  |Desc        |
|----|------|------------|
|key |string|Value key   |
|val |*     |Value to set|

Set values.

|Name|Type  |Desc           |
|----|------|---------------|
|vals|object|Key value pairs|

This emit a change event whenever is called.

### get

Get value.

|Name  |Type  |Desc              |
|------|------|------------------|
|key   |string|Value key         |
|return|*     |Value of given key|

Get values.

|Name  |Type  |Desc           |
|------|------|---------------|
|keys  |array |Array of keys  |
|return|object|Key value pairs|

### remove

Remove value.

|Name|Type        |Desc         |
|----|------------|-------------|
|key |string array|Key to remove|

### clear

Clear all data.

### each

Iterate over values.

|Name|Type    |Desc                           |
|----|--------|-------------------------------|
|fn  |function|Function invoked per interation|

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

Tween engine for JavaScript animations.

Extend from Emitter.

### constructor

|Name|Type  |Desc           |
|----|------|---------------|
|obj |object|Values to tween|

### to

|Name       |Type           |Desc            |
|-----------|---------------|----------------|
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

|Name      |Type  |Desc                  |
|----------|------|----------------------|
|[progress]|number|Number between 0 and 1|

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

Simple url manipulator.

### constructor

|Name        |Type  |Desc      |
|------------|------|----------|
|url=location|string|Url string|

### setQuery

Set query value.

|Name  |Type  |Desc       |
|------|------|-----------|
|name  |string|Query name |
|value |string|Query value|
|return|Url   |this       |

|Name  |Type  |Desc        |
|------|------|------------|
|names |object|query object|
|return|Url   |this        |

### rmQuery

Remove query value.

|Name  |Type        |Desc      |
|------|------------|----------|
|name  |string array|Query name|
|return|Url         |this      |

### parse

[static] Parse url into an object.

|Name  |Type  |Desc      |
|------|------|----------|
|url   |string|Url string|
|return|object|Url object|

### stringify

[static] Stringify url object into a string.

|Name  |Type  |Desc      |
|------|------|----------|
|url   |object|Url object|
|return|string|Url string|

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

|Name   |Type  |Desc                    |
|-------|------|------------------------|
|options|object|Validation configuration|

### validate

Validate object.

|Name  |Type  |Desc                            |
|------|------|--------------------------------|
|obj   |object|Object to validate              |
|return|*     |Validation result, true means ok|

### addPlugin

[static] Add plugin.

|Name  |Type    |Desc              |
|------|--------|------------------|
|name  |string  |Plugin name       |
|plugin|function|Validation handler|

### Default Plugins

Required, number, boolean, string and regexp.

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

Calculate the set of unique abbreviations for a given set of strings.

|Name  |Type  |Desc            |
|------|------|----------------|
|...arr|string|List of names   |
|return|object|Abbreviation map|

```javascript
abbrev('lina', 'luna');
// -> {li: 'lina', lin: 'lina', lina: 'lina', lu: 'luna', lun: 'luna', luna: 'luna'}
```

## after 

Create a function that invokes once it's called n or more times.

|Name  |Type    |Desc                          |
|------|--------|------------------------------|
|n     |number  |Number of calls before invoked|
|fn    |function|Function to restrict          |
|return|function|New restricted function       |

```javascript
var fn = after(5, function() {
    // -> Only invoke after fn is called 5 times.
});
```

## ajax 

Perform an asynchronous HTTP request.

|Name   |Type  |Desc        |
|-------|------|------------|
|options|object|Ajax options|

Available options:

|Name                                         |Type         |Desc                       |
|---------------------------------------------|-------------|---------------------------|
|url                                          |string       |Request url                |
|data                                         |string object|Request data               |
|dataType=json                                |string       |Response type(json, xml)   |
|contentType=application/x-www-form-urlencoded|string       |Request header Content-Type|
|success                                      |function     |Success callback           |
|error                                        |function     |Error callback             |
|complete                                     |function     |Callback after request     |
|timeout                                      |number       |Request timeout            |

### get

Shortcut for type = GET;

### post

Shortcut for type = POST;

|Name    |Type         |Desc            |
|--------|-------------|----------------|
|url     |string       |Request url     |
|[data]  |string object|Request data    |
|success |function     |Success callback|
|dataType|function     |Response type   |

```javascript
ajax({
    url: 'http://example.com',
    data: {test: 'true'},
    error: function () {},
    success: function (data) {
        // ...
    },
    dataType: 'json'
});

ajax.get('http://example.com', {}, function (data) {
    // ...
});
```

## allKeys 

Retrieve all the names of object's own and inherited properties.

|Name  |Type  |Desc                       |
|------|------|---------------------------|
|obj   |object|Object to query            |
|return|array |Array of all property names|

Members of Object's prototype won't be retrieved.

```javascript
var obj = Object.create({zero: 0});
obj.one = 1;
allKeys(obj) // -> ['zero', 'one']
```

## arrToMap 

Make an object map using array of strings.

|Name    |Type  |Desc            |
|--------|------|----------------|
|arr     |array |Array of strings|
|val=true|*     |Key value       |
|return  |object|Object map      |

```javascript
var needPx = arrToMap([
    'column-count', 'columns', 'font-weight', 'line-weight', 'opacity', 'z-index', 'zoom'
]);

if (needPx[key]) val += 'px';
```

## atob 

Use Buffer to emulate atob when running in node.

```javascript
atob('SGVsbG8gV29ybGQ='); // -> 'Hello World'
```

## average 

Get average value of given numbers.

|Name  |Type  |Desc                |
|------|------|--------------------|
|...num|number|Numbers to calculate|
|return|number|Average value       |

```javascript
average(5, 3, 1); // -> 3
```

## base64 

Basic base64 encoding and decoding.

### encode

Turn a byte array into a base64 string.

|Name  |Type  |Desc         |
|------|------|-------------|
|arr   |array |Byte array   |
|return|string|Base64 string|

### decode

Turn a base64 string into a byte array.

|Name  |Type  |Desc         |
|------|------|-------------|
|str   |string|Base64 string|
|return|array |Byte array   |

```javascript
base64.encode([168, 174, 155, 255]); // -> 'qK6b/w=='
base64.decode('qK6b/w=='); // -> [168, 174, 155, 255]
```

## before 

Create a function that invokes less than n times.

|Name  |Type    |Desc                                            |
|------|--------|------------------------------------------------|
|n     |number  |Number of calls at which fn is no longer invoked|
|fn    |function|Function to restrict                            |
|return|function|New restricted function                         |

Subsequent calls to the created function return the result of the last fn invocation.

```javascript
$(element).on('click', before(5, function() {}));
// -> allow function to be call 4 times at last.
```

## bind 

Create a function bound to a given object.

|Name     |Type    |Desc                    |
|---------|--------|------------------------|
|fn       |function|Function to bind        |
|ctx      |*       |This binding of given fn|
|[...rest]|*       |Optional arguments      |
|return   |function|New bound function      |

```javascript
var fn = bind(function (msg) {
    console.log(this.name + ':' + msg);
}, {name: 'eustia'}, 'I am a utility library.');
fn(); // -> 'eustia: I am a utility library.'
```

## btoa 

Use Buffer to emulate btoa when running in node.

```javascript
btoa('Hello World'); // -> 'SGVsbG8gV29ybGQ='
```

## bubbleSort 

Bubble sort implementation.

|Name |Type    |Desc         |
|-----|--------|-------------|
|arr  |array   |Array to sort|
|[cmp]|function|Comparator   |

```javascript
bubbleSort([2, 1]); // -> [1, 2]
```

## bytesToStr 

Convert bytes to string.

|Name  |Type  |Desc         |
|------|------|-------------|
|str   |array |Bytes array  |
|return|string|Result string|

```javascript
bytesToStr([108, 105, 99, 105, 97]); // -> 'licia'
```

## callbackify 

Convert a function that returns a Promise to a function following the error-first callback style.

|Name  |Type    |Desc                                            |
|------|--------|------------------------------------------------|
|fn    |function|Function that returns a Promise                 |
|return|function|Function following the error-fist callback style|

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

Convert string to "camelCase".

|Name  |Type  |Desc              |
|------|------|------------------|
|str   |string|String to convert |
|return|string|Camel cased string|

```javascript
camelCase('foo-bar'); // -> fooBar
camelCase('foo bar'); // -> fooBar
camelCase('foo_bar'); // -> fooBar
camelCase('foo.bar'); // -> fooBar
```

## capitalize 

Convert the first character to upper case and the remaining to lower case.

|Name  |Type  |Desc                |
|------|------|--------------------|
|str   |string|String to capitalize|
|return|string|Capitalized string  |

```javascript
capitalize('rED'); // -> Red
```

## castPath 

Cast value into a property path array.

|Name  |Type  |Desc               |
|------|------|-------------------|
|str   |*     |Value to inspect   |
|[obj] |object|Object to query    |
|return|array |Property path array|

```javascript
castPath('a.b.c'); // -> ['a', 'b', 'c']
castPath(['a']); // -> ['a']
castPath('a[0].b'); // -> ['a', '0', 'b']
castPath('a.b.c', {'a.b.c': true}); // -> ['a.b.c']
```

## centerAlign 

Center align text in a string.

|Name   |Type        |Desc                    |
|-------|------------|------------------------|
|str    |string array|String to align         |
|[width]|number      |Total width of each line|
|return |string      |Center aligned string   |

```javascript
centerAlign('test', 8); // -> '  test'
centerAlign('test\nlines', 8); // -> '  test\n lines'
centerAlign(['test', 'lines'], 8); // -> '  test\n lines'
```

## char 

Return string representing a character whose Unicode code point is the given integer.

|Name  |Type  |Desc                                  |
|------|------|--------------------------------------|
|num   |number|Integer to convert                    |
|return|string|String representing corresponding char|

```javascript
char(65); // -> 'A'
char(97); // -> 'a'
```

## chunk 

Split array into groups the length of given size.

|Name  |Type  |Desc                |
|------|------|--------------------|
|arr   |array |Array to process    |
|size=1|number|Length of each chunk|

```javascript
chunk([1, 2, 3, 4], 2); // -> [[1, 2], [3, 4]]
chunk([1, 2, 3, 4], 3); // -> [[1, 2, 3], [4]]
chunk([1, 2, 3, 4]); // -> [[1], [2], [3], [4]]
```

## clamp 

Clamp number within the inclusive lower and upper bounds.

|Name   |Type  |Desc           |
|-------|------|---------------|
|n      |number|Number to clamp|
|[lower]|number|Lower bound    |
|upper  |number|Upper bound    |
|return |number|Clamped number |

```javascript
clamp(-10, -5, 5); // -> -5
clamp(10, -5, 5); // -> 5
clamp(2, -5, 5); // -> 2
clamp(10, 5); // -> 5
clamp(2, 5); // -> 2
```

## className 

Utility for conditionally joining class names.

|Name    |Type               |Desc              |
|--------|-------------------|------------------|
|...class|string object array|Class names       |
|return  |string             |Joined class names|

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

|Name  |Type|Desc          |
|------|----|--------------|
|val   |*   |Value to clone|
|return|*   |Cloned value  |

```javascript
clone({name: 'eustia'}); // -> {name: 'eustia'}
```

## cloneDeep 

Recursively clone value.

|Name  |Type|Desc             |
|------|----|-----------------|
|val   |*   |Value to clone   |
|return|*   |Deep cloned Value|

```javascript
var obj = [{a: 1}, {a: 2}];
var obj2 = cloneDeep(obj);
console.log(obj[0] === obj2[1]); // -> false
```

## cmpVersion 

Compare version strings.

|Name  |Type  |Desc              |
|------|------|------------------|
|v1    |string|Version to compare|
|v2    |string|Version to compare|
|return|number|Comparison result |

```javascript
cmpVersion('1.1.8', '1.0.4'); // -> 1
cmpVersion('1.0.2', '1.0.2'); // -> 0
cmpVersion('2.0', '2.0.0'); // -> 0
cmpVersion('3.0.1', '3.0.0.2'); // -> 1
cmpVersion('1.1.1', '1.2.3'); // -> -1
```

## combine 

Create an array by using one array for keys and another for its values.

|Name  |Type  |Desc             |
|------|------|-----------------|
|keys  |array |Keys to be used  |
|values|array |Values to be used|
|return|object|Created object   |

```javascript
combine(['a', 'b', 'c'], [1, 2, 3]); -> {a: 1, b: 2, c: 3}
```

## compact 

Return a copy of the array with all falsy values removed.

The values false, null, 0, "", undefined, and NaN are falsey.

|Name  |Type |Desc                        |
|------|-----|----------------------------|
|arr   |array|Array to compact            |
|return|array|New array of filtered values|

```javascript
compact([0, 1, false, 2, '', 3]); // -> [1, 2, 3]
```

## compose 

Compose a list of functions.

Each function consumes the return value of the function that follows.

|Name  |Type    |Desc                |
|------|--------|--------------------|
|...fn |function|Functions to compose|
|return|function|Composed function   |

```javascript
var welcome = compose(function (name) {
    return 'hi: ' + name;
}, function (name) {
    return name.toUpperCase() + '!';
});

welcome('licia'); // -> 'hi: LICIA!'
```

## compressImg 

Compress image using canvas.

|Name|Type     |Desc      |
|----|---------|----------|
|file|File Blob|Image file|
|opts|object   |Options   |
|cb  |function |Callback  |

Available options:

|Name       |Type  |Desc                            |
|-----------|------|--------------------------------|
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
}, function (err, file) {
    // ...
});
```

## concat 

Concat multiple arrays into a single array.

|Name  |Type |Desc              |
|------|-----|------------------|
|...arr|array|Arrays to concat  |
|return|array|Concatenated array|

```javascript
concat([1, 2], [3], [4, 5]); // -> [1, 2, 3, 4, 5]
```

## contain 

Check if the value is present in the list.

|Name  |Type        |Desc                                |
|------|------------|------------------------------------|
|array |array object|Target list                         |
|value |*           |Value to check                      |
|return|boolean     |True if value is present in the list|

```javascript
contain([1, 2, 3], 1); // -> true
contain({a: 1, b: 2}, 1); // -> true
```

## convertBase 

Convert base of a number.

|Name  |Type         |Desc             |
|------|-------------|-----------------|
|num   |number string|Number to convert|
|from  |number       |Base from        |
|to    |number       |Base to          |
|return|string       |Converted number |

```javascript
convertBase('10', 2, 10); // -> '2'
convertBase('ff', 16, 2); // -> '11111111'
```

## cookie 

Simple api for handling browser cookies.

### get

Get cookie value.

|Name  |Type  |Desc                      |
|------|------|--------------------------|
|key   |string|Cookie key                |
|return|string|Corresponding cookie value|

### set

Set cookie value.

|Name     |Type   |Desc          |
|---------|-------|--------------|
|key      |string |Cookie key    |
|val      |string |Cookie value  |
|[options]|object |Cookie options|
|return   |exports|Module cookie |

### remove

Remove cookie value.

|Name     |Type   |Desc          |
|---------|-------|--------------|
|key      |string |Cookie key    |
|[options]|object |Cookie options|
|return   |exports|Module cookie |

```javascript
cookie.set('a', '1', {path: '/'});
cookie.get('a'); // -> '1'
cookie.remove('a');
```

## copy 

Copy text to clipboard using document.execCommand.

|Name|Type    |Desc             |
|----|--------|-----------------|
|text|string  |Text to copy     |
|[cb]|function|Optional callback|

```javascript
copy('text', function (err) {
    // Handle errors.
});
```

## createAssigner 

Used to create extend, extendOwn and defaults.

|Name    |Type    |Desc                          |
|--------|--------|------------------------------|
|keysFn  |function|Function to get object keys   |
|defaults|boolean |No override when set to true  |
|return  |function|Result function, extend...    |

## createUrl 

CreateObjectURL wrapper.

|Name   |Type                  |Desc                                |
|-------|----------------------|------------------------------------|
|data   |File Blob string array|Url data                            |
|[opts] |object                |Used when data is not a File or Blob|
|return |string                |Blob url                            |

```javascript
createUrl('test', {type: 'text/plain'}); // -> Blob url
createUrl(['test', 'test']);
createUrl(new Blob([]));
createUrl(new File(['test'], 'test.txt'));
```

## cssSupports 

Check if browser supports a given CSS feature.

|Name  |Type   |Desc              |
|------|-------|------------------|
|name  |string |Css property name |
|[val] |string |Css property value|
|return|boolean|True if supports  |

```javascript
cssSupports('display', 'flex'); // -> true
cssSupports('display', 'invalid'); // -> false
cssSupports('text-decoration-line', 'underline'); // -> true
cssSupports('grid'); // -> true
cssSupports('invalid'); // -> false
```

## curry 

Function currying.

|Name  |Type    |Desc                |
|------|--------|--------------------|
|fn    |function|Function to curry   |
|return|function|New curried function|

```javascript
var add = curry(function (a, b) { return a + b });
var add1 = add(1);
add1(2); // -> 3
```

## dateFormat 

Simple but extremely useful date format function.

|Name         |Type   |Desc                 |
|-------------|-------|---------------------|
|date=new Date|Date   |Date object to format|
|mask         |string |Format mask          |
|utc=false    |boolean|UTC or not           |
|gmt=false    |boolean|GMT or not           |

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

|Name  |Type    |Desc                           |
|------|--------|-------------------------------|
|fn    |function|Function to debounce           |
|wait  |number  |Number of milliseconds to delay|
|return|function|New debounced function         |

```javascript
$(window).resize(debounce(calLayout, 300));
```

## debug 

A tiny JavaScript debugging utility.

|Name  |Type    |Desc                           |
|------|--------|-------------------------------|
|name  |string  |Namespace                      |
|return|function|Function to print decorated log|

```javascript
var d = debug('test');
d('doing lots of uninteresting work');
d.enabled = false;
```

## decodeUriComponent 

Better decodeURIComponent that does not throw if input is invalid.

|Name  |Type  |Desc            |
|------|------|----------------|
|str   |string|String to decode|
|return|string|Decoded string  |

```javascript
decodeUriComponent('%%25%'); // -> '%%%'
decodeUriComponent('%E0%A4%A'); // -> '\xE0\xA4%A'
```

## defaults 

Fill in undefined properties in object with the first value present in the following list of defaults objects.

|Name  |Type  |Desc              |
|------|------|------------------|
|obj   |object|Destination object|
|*src  |object|Sources objects   |
|return|object|Destination object|

```javascript
defaults({name: 'RedHood'}, {name: 'Unknown', age: 24}); // -> {name: 'RedHood', age: 24}
```

## define 

Define a module, should be used along with use.

|Name      |Type    |Desc        |
|----------|--------|------------|
|name      |string  |Module name |
|[requires]|array   |Dependencies|
|method    |function|Module body |

The module won't be executed until it's used by use function.

```javascript
define('A', function () {
    return 'A';
});
define('B', ['A'], function (A) {
    return 'B' + A;
});
```

## defineProp 

Shortcut for Object.defineProperty(defineProperties).

|Name      |Type  |Desc               |
|----------|------|-------------------|
|obj       |object|Object to define   |
|prop      |string|Property path      |
|descriptor|object|Property descriptor|
|return    |object|Object itself      |

|Name  |Type  |Desc                |
|------|------|--------------------|
|obj   |object|Object to define    |
|prop  |object|Property descriptors|
|return|object|Object itself       |

```javascript
var obj = {b: {c: 3}, d: 4, e: 5};
defineProp(obj, 'a', {
    get: function () {
        return this.e * 2;
    }
});
console.log(obj.a); // -> 10
defineProp(obj, 'b.c', {
    set: (function (val) {
        // this is pointed to obj.b
        this.e = val;
    }).bind(obj)
});
obj.b.c = 2;
console.log(obj.a); // -> 4;

obj = {a: 1, b: 2, c: 3};
defineProp(obj, {
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
console.log(obj.a); // -> 3
obj.b = 4;
console.log(obj.a); // -> 2
```

## delay 

Invoke function after certain milliseconds.

|Name     |Type    |Desc                                      |
|---------|--------|------------------------------------------|
|fn       |function|Function to delay                         |
|wait     |number  |Number of milliseconds to delay invocation|
|[...args]|*       |Arguments to invoke fn with               |

```javascript
delay(function (text) {
    console.log(text);
}, 1000, 'later');
// -> Logs 'later' after one second
```

## delegate 

Event delegation.

### add

Add event delegation.

|Name    |Type    |Desc          |
|--------|--------|--------------|
|el      |element |Parent element|
|type    |string  |Event type    |
|selector|string  |Match selector|
|cb      |function|Event callback|

### remove

Remove event delegation.

```javascript
var container = document.getElementById('container');
function clickHandler() {
    // Do something...
}
delegate.add(container, 'click', '.children', clickHandler);
delegate.remove(container, 'click', '.children', clickHandler);
```

## detectBrowser 

Detect browser info using ua.

|Name                  |Type  |Desc                              |
|----------------------|------|----------------------------------|
|ua=navigator.userAgent|string|Browser userAgent                 |
|return                |object|Object containing name and version|

Browsers supported: ie, chrome, edge, firefox, opera, safari, ios(mobile safari), android(android browser)

```javascript
var browser = detectBrowser();
if (browser.name === 'ie' && browser.version < 9) {
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

|Name                  |Type  |Desc                 |
|----------------------|------|---------------------|
|ua=navigator.userAgent|string|Browser userAgent    |
|return                |string|Operating system name|

Supported os: windows, os x, linux, ios, android, windows phone

```javascript
if (detectOs() === 'ios') {
    // Do something about ios...
}
```

## difference 

Create an array of unique array values not included in the other given array.

|Name     |Type |Desc                        |
|---------|-----|----------------------------|
|arr      |array|Array to inspect            |
|[...rest]|array|Values to exclude           |
|return   |array|New array of filtered values|

```javascript
difference([3, 2, 1], [4, 2]); // -> [3, 1]
```

## dotCase 

Convert string to "dotCase".

|Name  |Type  |Desc             |
|------|------|-----------------|
|str   |string|String to convert|
|return|string|Dot cased string |

```javascript
dotCase('fooBar'); // -> foo.bar
dotCase('foo bar'); // -> foo.bar
```

## download 

Trigger a file download on client side.

|Name           |Type                  |Desc            |
|---------------|----------------------|----------------|
|data           |Blob File string array|Data to download|
|name           |string                |File name       |
|type=text/plain|string                |Data type       |

```javascript
download('test', 'test.txt');
```

## each 

Iterate over elements of collection and invokes iteratee for each element.

|Name    |Type        |Desc                          |
|--------|------------|------------------------------|
|obj     |object array|Collection to iterate over    |
|iteratee|function    |Function invoked per iteration|
|[ctx]   |*           |Function context              |

```javascript
each({'a': 1, 'b': 2}, function (val, key) {});
```

## easing 

Easing functions adapted from http://jqueryui.com/ .

|Name   |Type  |Desc                  |
|-------|------|----------------------|
|percent|number|Number between 0 and 1|
|return |number|Calculated number     |

```javascript
easing.linear(0.5); // -> 0.5
easing.inElastic(0.5, 500); // -> 0.03125
```

## endWith 

Check if string ends with the given target string.

|Name  |Type   |Desc                           |
|------|-------|-------------------------------|
|str   |string |The string to search           |
|suffix|string |String suffix                  |
|return|boolean|True if string ends with target|

```javascript
endWith('ab', 'b'); // -> true
```

## escape 

Escapes a string for insertion into HTML, replacing &, <, >, ", `, and ' characters.

|Name  |Type  |Desc            |
|------|------|----------------|
|str   |string|String to escape|
|return|string|Escaped string  |

```javascript
escape('You & Me'); -> // -> 'You &amp; Me'
```

## escapeJsStr 

Escape string to be a valid JavaScript string literal between quotes.

http://www.ecma-international.org/ecma-262/5.1/#sec-7.8.4

|Name  |Type  |Desc            |
|------|------|----------------|
|str   |string|String to escape|
|return|string|Escaped string  |

```javascript
escapeJsStr('\"\n'); // -> '\\"\\\\n'
```

## escapeRegExp 

Escape special chars to be used as literals in RegExp constructors.

|Name  |Type  |Desc            |
|------|------|----------------|
|str   |string|String to escape|
|return|string|Escaped string  |

```javascript
escapeRegExp('[licia]'); // -> '\\[licia\\]'
```

## evalCss 

Load css into page.

|Name|Type  |Desc    |
|----|------|--------|
|css |string|Css code|

```javascript
evalCss('body{background:#08c}');
```

## evalJs 

Execute js in given context.

|Name      |Type  |Desc           |
|----------|------|---------------|
|js        |string|JavaScript code|
|ctx=global|object|Context        |

```javascript
evalJs('5+2'); // -> 7
evalJs('this.a', {a: 2}); // -> 2
```

## every 

Check if predicate return truthy for all elements.

|Name     |Type        |Desc                                         |
|---------|------------|---------------------------------------------|
|obj      |array object|Collection to iterate over                   |
|predicate|function    |Function invoked per iteration               |
|ctx      |*           |Predicate context                            |
|return   |boolean     |True if all elements pass the predicate check|

```javascript
every([2, 4], function (val) {
    return val % 2 === 0;
}); // -> false
```

## extend 

Copy all of the properties in the source objects over to the destination object.

|Name  |Type  |Desc              |
|------|------|------------------|
|obj   |object|Destination object|
|...src|object|Sources objects   |
|return|object|Destination object|

```javascript
extend({name: 'RedHood'}, {age: 24}); // -> {name: 'RedHood', age: 24}
```

## extendDeep 

Recursive object extending.

|Name  |Type  |Desc              |
|------|------|------------------|
|obj   |object|Destination object|
|...src|object|Sources objects   |
|return|object|Destination object|

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

|Name  |Type  |Desc              |
|------|------|------------------|
|obj   |object|Destination object|
|*src  |object|Sources objects   |
|return|object|Destination object|

```javascript
extendOwn({name: 'RedHood'}, {age: 24}); // -> {name: 'RedHood', age: 24}
```

## extractBlockCmts 

Extract block comments from source code.

|Name  |Type  |Desc             |
|------|------|-----------------|
|str   |string|String to extract|
|return|array |Block comments   |

```javascript
extractBlockCmts('\/*licia*\/'); // -> ['licia']
```

## extractUrls 

Extract urls from plain text.

|Name  |Type  |Desc           |
|------|------|---------------|
|str   |string|Text to extract|
|return|array |Url list       |

```javascript
var str = '[Official site: http://eustia.liriliri.io](http://eustia.liriliri.io)';
extractUrl(str); // -> ['http://eustia.liriliri.io']
```

## fetch 

Turn XMLHttpRequest into promise like.

Note: This is not a complete fetch pollyfill.

|Name   |Type   |Desc           |
|-------|-------|---------------|
|url    |string |Request url    |
|options|object |Request options|
|return |promise|Request promise|

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

Calculate fibonacci number.

|Name  |Type  |Desc                       |
|------|------|---------------------------|
|n     |number|Index of fibonacci sequence|
|return|number|Expected fibonacci number  |

```javascript
fibonacci(1); // -> 1
fibonacci(3); // -> 2
```

## fileSize 

Turn bytes into human readable file size.

|Name  |Type  |Desc              |
|------|------|------------------|
|bytes |number|File bytes        |
|return|string|Readable file size|

```javascript
fileSize(5); // -> '5'
fileSize(1500); // -> '1.46K'
fileSize(1500000); // -> '1.43M'
fileSize(1500000000); // -> '1.4G'
fileSize(1500000000000); // -> '1.36T'
```

## fill 

Fill elements of array with value.

|Name          |Type  |Desc                    |
|--------------|------|------------------------|
|arr           |array |Array to fill           |
|val           |*     |Value to fill array with|
|start=0       |number|Start position          |
|end=arr.length|number|End position            |
|return        |array |Filled array            |

```javascript
fill([1, 2, 3], '*'); // -> ['*', '*', '*']
fill([1, 2, 3], '*', 1, 2); // -> [1, '*', 3]
```

## filter 

Iterates over elements of collection, returning an array of all the values that pass a truth test.

|Name     |Type    |Desc                                   |
|---------|--------|---------------------------------------|
|obj      |array   |Collection to iterate over             |
|predicate|function|Function invoked per iteration         |
|[ctx]    |*       |Predicate context                      |
|return   |array   |Array of all values that pass predicate|

```javascript
filter([1, 2, 3, 4, 5], function (val) {
    return val % 2 === 0;
}); // -> [2, 4]
```

## find 

Find the first value that passes a truth test in a collection.

|Name     |Type        |Desc                             |
|---------|------------|---------------------------------|
|obj      |array object|Collection to iterate over       |
|predicate|function    |Function invoked per iteration   |
|[ctx]    |*           |Predicate context                |
|return   |*           |First value that passes predicate|

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

Return the first index where the predicate truth test passes.

|Name     |Type    |Desc                          |
|---------|--------|------------------------------|
|arr      |array   |Array to search               |
|predicate|function|Function invoked per iteration|
|return   |number  |Index of matched element      |

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

Return the first key where the predicate truth test passes.

|Name     |Type    |Desc                          |
|---------|--------|------------------------------|
|obj      |object  |Object to search              |
|predicate|function|Function invoked per iteration|
|[ctx]    |*       |Predicate context             |
|return   |string  |Key of matched element        |

```javascript
findKey({a: 1, b: 2}, function (val) {
    return val === 1;
}); // -> a
```

## findLastIdx 

Return the last index where the predicate truth test passes.

|Name     |Type    |Desc                          |
|---------|--------|------------------------------|
|arr      |array   |Array to search               |
|predicate|function|Function invoked per iteration|
|return   |number  |Last index of matched element |

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

Recursively flatten an array.

|Name  |Type |Desc               |
|------|-----|-------------------|
|arr   |array|Array to flatten   |
|return|array|New flattened array|

```javascript
flatten(['a', ['b', ['c']], 'd', ['e']]); // -> ['a', 'b', 'c', 'd', 'e']
```

## fnParams 

Get a function parameter's names.

|Name  |Type    |Desc                      |
|------|--------|--------------------------|
|fn    |function|Function to get parameters|
|return|array   |Names                     |

```javascript
fnParams(function (a, b) {}); // -> ['a', 'b']
```

## format 

Format string in a printf-like format.

|Name     |Type  |Desc                               |
|---------|------|-----------------------------------|
|str      |string|String to format                   |
|...values|*     |Values to replace format specifiers|
|return   |string|Formatted string                   |

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

|Name  |Type  |Desc                  |
|------|------|----------------------|
|num   |number|Number to convert     |
|return|string|Corresponding fraction|

```javascript
fraction(1.2); // -> '6/5'
```

## freeze 

Shortcut for Object.freeze.

Use Object.defineProperties if Object.freeze is not supported.

|Name  |Type  |Desc            |
|------|------|----------------|
|obj   |object|Object to freeze|
|return|object|Object passed in|

```javascript
var a = {b: 1};
freeze(a);
a.b = 2;
console.log(a); // -> {b: 1}
```

## freezeDeep 

Recursively use Object.freeze.

|Name  |Type  |Desc            |
|------|------|----------------|
|obj   |object|Object to freeze|
|return|object|Object passed in|

```javascript
var a = {b: {c: 1}};
freezeDeep(a);
a.b.c = 2;
console.log(a); // -> {b: {c: 1}}
```

## fs 

Promised version of node.js fs module.

```javascript
fs.readFile('test.js').then(function (data) {
    // Do something
}).catch(function (err) {
    // Handle errors
});
```

## gcd 

Compute the greatest common divisor using Euclid's algorithm.

|Name  |Type  |Desc                   |
|------|------|-----------------------|
|a     |number|Number to calculate    |
|b     |number|Number to calculate    |
|return|number|Greatest common divisor|

```javascript
gcd(121, 44); // -> 11
```

## getPort 

Get an available TCP port.

|Name  |Type        |Desc           |
|------|------------|---------------|
|[port]|number array|Preferred ports|
|return|promise     |Available port |

If preferred ports are not available, a random port will be returned.

```javascript
getPort([3000, 3001]).then(port => {
    console.log(port);
});
```

## getUrlParam 

Get url param.

|Name        |Type  |Desc            |
|------------|------|----------------|
|name        |string|Param name      |
|url=location|string|Url to get param|
|return      |string|Param value     |

```javascript
getUrlParam('test', 'http://example.com/?test=true'); // -> 'true'
```

## has 

Checks if key is a direct property.

|Name  |Type   |Desc                            |
|------|-------|--------------------------------|
|obj   |object |Object to query                 |
|key   |string |Path to check                   |
|return|boolean|True if key is a direct property|

```javascript
has({one: 1}, 'one'); // -> true
```

## hotkey 

Capture keyboard input to trigger given events.

### on

Register keyboard listener.

|Name    |Type    |Desc        |
|--------|--------|------------|
|key     |string  |Key string  |
|listener|function|Key listener|

### off

Unregister keyboard listener.

```javascript
hotkey.on('k', function () {
    console.log('k is pressed');
});
function keyDown() {}
hotkey.on('shift+a, shift+b', keyDown);
hotkey.off('shift+a', keyDown);
```

## hslToRgb 

Convert hsl to rgb.

|Name  |Type |Desc      |
|------|-----|----------|
|hsl   |array|Hsl values|
|return|array|Rgb values|

```javascript
hslToRgb([165, 59, 50, 0.8]); // -> [52, 203, 165, 0.8]
```

## identity 

Return the first argument given.

|Name  |Type|Desc       |
|------|----|-----------|
|val   |*   |Any value  |
|return|*   |Given value|

```javascript
identity('a'); // -> 'a'
```

## idxOf 

Get the index at which the first occurrence of value.

|Name     |Type  |Desc                |
|---------|------|--------------------|
|arr      |array |Array to search     |
|val      |*     |Value to search for |
|fromIdx=0|number|Index to search from|
|return   |number|Value index         |

```javascript
idxOf([1, 2, 1, 2], 2, 2); // -> 3
```

## indent 

Indent each line in a string.

|Name  |Type  |Desc                |
|------|------|--------------------|
|str   |string|String to indent    |
|[char]|string|Character to prepend|
|[len] |number|Indent length       |
|return|string|Indented string     |

```javascript
indent('foo\nbar', ' ', 4); // -> 'foo\n    bar'
```

## inherits 

Inherit the prototype methods from one constructor into another.

|Name      |Type    |Desc       |
|----------|--------|-----------|
|Class     |function|Child Class|
|SuperClass|function|Super Class|

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

Insertion sort implementation.

|Name |Type    |Desc         |
|-----|--------|-------------|
|arr  |array   |Array to sort|
|[cmp]|function|Comparator   |

```javascript
insertionSort([2, 1]); // -> [1, 2]
```

## intersect 

Compute the list of values that are the intersection of all the arrays.

|Name  |Type |Desc                          |
|------|-----|------------------------------|
|...arr|array|Arrays to inspect             |
|return|array|New array of inspecting values|

```javascript
intersect([1, 2, 3, 4], [2, 1, 10], [2, 1]); // -> [1, 2]
```

## intersectRange 

Intersect two ranges.

|Name  |Type  |Desc                 |
|------|------|---------------------|
|a     |object|Range a              |
|b     |object|Range b              |
|return|object|Intersection if exist|

```javascript
intersectRange({start: 0, end: 12}, {start: 11, end: 13});
// -> {start: 11, end: 12}
intersectRange({start: 0, end: 5}, {start: 6, end: 7});
// -> undefined
```

## invert 

Create an object composed of the inverted keys and values of object.

|Name  |Type  |Desc               |
|------|------|-------------------|
|obj   |object|Object to invert   |
|return|object|New inverted object|

If object contains duplicate values, subsequent values overwrite property assignments of previous values.

```javascript
invert({a: 'b', c: 'd', e: 'f'}); // -> {b: 'a', d: 'c', f: 'e'}
```

## isAbsoluteUrl 

Check if an url is absolute.

|Name  |Type   |Desc                   |
|------|-------|-----------------------|
|url   |string |Url to check           |
|return|boolean|True if url is absolute|

```javascript
isAbsoluteUrl('http://www.surunzi.com'); // -> true
isAbsoluteUrl('//www.surunzi.com'); // -> false
isAbsoluteUrl('surunzi.com'); // -> false
```

## isArgs 

Check if value is classified as an arguments object.

|Name  |Type   |Desc                                |
|------|-------|------------------------------------|
|val   |*      |Value to check                      |
|return|boolean|True if value is an arguments object|

```javascript
(function () {
    isArgs(arguments); // -> true
})();
```

## isArr 

Check if value is an `Array` object.

|Name  |Type   |Desc                              |
|------|-------|----------------------------------|
|val   |*      |Value to check                    |
|return|boolean|True if value is an `Array` object|

```javascript
isArr([]); // -> true
isArr({}); // -> false
```

## isArrBuffer 

Check if value is an ArrayBuffer.

|Name  |Type   |Desc                           |
|------|-------|-------------------------------|
|val   |*      |Value to check                 |
|return|boolean|True if value is an ArrayBuffer|

```javascript
isArrBuffer(new ArrayBuffer(8)); // -> true
```

## isArrLike 

Check if value is array-like.

|Name  |Type   |Desc                       |
|------|-------|---------------------------|
|val   |*      |Value to check             |
|return|boolean|True if value is array like|

Function returns false.

```javascript
isArrLike('test'); // -> true
isArrLike(document.body.children); // -> true;
isArrLike([1, 2, 3]); // -> true
```

## isBlob 

Check if value is a Blob.

|Name  |Type   |Desc                   |
|------|-------|-----------------------|
|val   |*      |Value to check         |
|return|boolean|True if value is a Blob|

```javascript
isBlob(new Blob([])); // -> true;
isBlob([]); // -> false
```

## isBool 

Check if value is a boolean primitive.

|Name  |Type   |Desc                      |
|------|-------|--------------------------|
|val   |*      |Value to check            |
|return|boolean|True if value is a boolean|

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

|Name  |Type   |Desc                     |
|------|-------|-------------------------|
|val   |*      |The value to check       |
|return|boolean|True if value is a buffer|

```javascript
isBuffer(new Buffer(4)); // -> true
```

## isClose 

Check if values are close(almost equal) to each other.

`abs(a-b) <= max(relTol * max(abs(a), abs(b)), absTol)`

|Name       |Type   |Desc                    |
|-----------|-------|------------------------|
|a          |number |Number to compare       |
|b          |number |Number to compare       |
|relTol=1e-9|number |Relative tolerance      |
|absTol=0   |number |Absolute tolerance      |
|return     |boolean|True if values are close|

```javascript
isClose(1, 1.0000000001); // -> true
isClose(1, 2); // -> false
isClose(1, 1.2, 0.3); // -> true
isClose(1, 1.2, 0.1, 0.3); // -> true
```

## isDataUrl 

Check if a string is a valid data url.

|Name  |Type   |Desc                        |
|------|-------|----------------------------|
|str   |string |String to check             |
|return|boolean|True if string is a data url|

```javascript
isDataUrl('http://eustia.liriliri.io'); // -> false
isDataUrl('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D'); // -> true
```

## isDate 

Check if value is classified as a Date object.

|Name  |Type   |Desc                          |
|------|-------|------------------------------|
|val   |*      |value to check                |
|return|boolean|True if value is a Date object|

```javascript
isDate(new Date()); // -> true
```

## isEl 

Check if value is a DOM element.

|Name  |Type   |Desc                          |
|------|-------|------------------------------|
|val   |*      |Value to check                |
|return|boolean|True if value is a DOM element|

```javascript
isEl(document.body); // -> true
```

## isEmail 

Loosely validate an email address.

|Name  |Type   |Desc                                 |
|------|-------|-------------------------------------|
|val   |string |Value to check                       |
|return|boolean|True if value is an email like string|

```javascript
isEmail('surunzi@foxmail.com'); // -> true
```

## isEmpty 

Check if value is an empty object or array.

|Name  |Type   |Desc                  |
|------|-------|----------------------|
|val   |*      |Value to check        |
|return|boolean|True if value is empty|

```javascript
isEmpty([]); // -> true
isEmpty({}); // -> true
isEmpty(''); // -> true
```

## isEqual 

Performs an optimized deep comparison between the two objects, to determine if they should be considered equal.

|Name  |Type   |Desc                         |
|------|-------|-----------------------------|
|val   |*      |Value to compare             |
|other |*      |Other value to compare       |
|return|boolean|True if values are equivalent|

```javascript
isEqual([1, 2, 3], [1, 2, 3]); // -> true
```

## isErr 

Check if value is an error.

|Name  |Type   |Desc                     |
|------|-------|-------------------------|
|val   |*      |Value to check           |
|return|boolean|True if value is an error|

```javascript
isErr(new Error()); // -> true
```

## isEven 

Check if number is even.

|Name  |Type   |Desc                  |
|------|-------|----------------------|
|num   |number |Number to check       |
|return|boolean|True if number is even|

```javascript
isOdd(0); // -> true
isOdd(1); // -> false
isOdd(2); // -> true
```

## isFile 

Check if value is a file.

|Name  |Type   |Desc                   |
|------|-------|-----------------------|
|val   |*      |Value to check         |
|return|boolean|True if value is a file|

```javascript
isFile(new File(['test'], "test.txt", {type: "text/plain"})); // -> true
```

## isFinite 

Check if value is a finite primitive number.

|Name  |Type   |Desc                            |
|------|-------|--------------------------------|
|val   |*      |Value to check                  |
|return|boolean|True if value is a finite number|

```javascript
isFinite(3); // -> true
isFinite(Infinity); // -> false
```

## isFn 

Check if value is a function.

|Name  |Type   |Desc                       |
|------|-------|---------------------------|
|val   |*      |Value to check             |
|return|boolean|True if value is a function|

Generator function is also classified as true.

```javascript
isFn(function() {}); // -> true
isFn(function*() {}); // -> true
```

## isGeneratorFn 

Check if value is a generator function.

|Name  |Type   |Desc                                 |
|------|-------|-------------------------------------|
|val   |*      |Value to check                       |
|return|boolean|True if value is a generator function|

```javascript
isGeneratorFn(function * () {}); // -> true;
isGeneratorFn(function () {}); // -> false;
```

## isInt 

Checks if value is classified as a Integer.

|Name  |Type   |Desc                                 |
|------|-------|-------------------------------------|
|val   |*      |Value to check                       |
|return|boolean|True if value is correctly classified|

```javascript
isInt(5); // -> true
isInt(5.1); // -> false
isInt({}); // -> false
```

## isJson 

Check if value is a valid JSON.

It uses `JSON.parse()` and a `try... catch` block.

|Name  |Type   |Desc                         |
|------|-------|-----------------------------|
|val   |string |JSON string                  |
|return|boolean|True if value is a valid JSON|

```javascript
isJson('{"a": 5}'); // -> true
isJson("{'a': 5}"); // -> false
```

## isLeapYear 

Check if a year is a leap year.

|Name  |Type   |Desc                       |
|------|-------|---------------------------|
|year  |number |Year to check              |
|return|boolean|True if year is a leap year|

```javascript
isLeapYear(2000); // -> true
isLeapYear(2002); // -> false
```

## isMap 

Check if value is a Map object.

|Name  |Type   |Desc                  |
|------|-------|----------------------|
|val   |*      |Value to check        |
|return|boolean|True if value is a Map|

```javascript
isMap(new Map()); // -> true
isMap(new WeakMap()); // -> false
```

## isMatch 

Check if keys and values in src are contained in obj.

|Name  |Type   |Desc                              |
|------|-------|----------------------------------|
|obj   |object |Object to inspect                 |
|src   |object |Object of property values to match|
|return|boolean|True if object is match           |

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

|Name                  |Type   |Desc                                 |
|----------------------|-------|-------------------------------------|
|ua=navigator.userAgent|string |User agent                           |
|return                |boolean|True if ua belongs to mobile browsers|

```javascript
isMobile(navigator.userAgent);
```

## isNaN 

Check if value is an NaN.

|Name  |Type   |Desc                   |
|------|-------|-----------------------|
|val   |*      |Value to check         |
|return|boolean|True if value is an NaN|

Undefined is not an NaN, different from global isNaN function.

```javascript
isNaN(0); // -> false
isNaN(NaN); // -> true
```

## isNative 

Check if value is a native function.

|Name  |Type   |Desc                              |
|------|-------|----------------------------------|
|val   |*      |Value to check                    |
|return|boolean|True if value is a native function|

```javascript
isNative(function () {}); // -> false
isNative(Math.min); // -> true
```

## isNil 

Check if value is null or undefined, the same as value == null.

|Name  |Type   |Desc                              |
|------|-------|----------------------------------|
|val   |*      |Value to check                    |
|return|boolean|True if value is null or undefined|

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

|Name  |Type   |Desc                    |
|------|-------|------------------------|
|val   |*      |Value to check          |
|return|boolean|True if value is an Null|

```javascript
isNull(null); // -> true
```

## isNum 

Check if value is classified as a Number primitive or object.

|Name  |Type   |Desc                                 |
|------|-------|-------------------------------------|
|val   |*      |Value to check                       |
|return|boolean|True if value is correctly classified|

```javascript
isNum(5); // -> true
isNum(5.1); // -> true
isNum({}); // -> false
```

## isNumeric 

Check if value is numeric.

|Name  |Type   |Desc                    |
|------|-------|------------------------|
|val   |*      |Value to check          |
|return|boolean|True if value is numeric|

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

|Name  |Type   |Desc                      |
|------|-------|--------------------------|
|val   |*      |Value to check            |
|return|boolean|True if value is an object|

[Language Spec](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)

```javascript
isObj({}); // -> true
isObj([]); // -> true
```

## isOdd 

Check if number is odd.

|Name  |Type   |Desc                 |
|------|-------|---------------------|
|num   |number |Number to check      |
|return|boolean|True if number is odd|

```javascript
isOdd(0); // -> false
isOdd(1); // -> true
isOdd(2); // -> false
```

## isPlainObj 

Check if value is an object created by Object constructor.

|Name  |Type   |Desc                           |
|------|-------|-------------------------------|
|val   |*      |Value to check                 |
|return|boolean|True if value is a plain object|

```javascript
isPlainObj({}); // -> true
isPlainObj([]); // -> false
isPlainObj(function () {}); // -> false
```

## isPrime 

Check if the provided integer is a prime number.

|Name  |Type   |Desc                            |
|------|-------|--------------------------------|
|num   |number |Number to check                 |
|return|boolean|True if number is a prime number|

```javascript
isPrime(11); // -> true
isPrime(8); // -> false
```

## isPrimitive 

Check if value is string, number, boolean or null.

|Name  |Type   |Desc                        |
|------|-------|----------------------------|
|val   |*      |Value to check              |
|return|boolean|True if value is a primitive|

```javascript
isPrimitive(5); // -> true
isPrimitive('abc'); // -> true
isPrimitive(false); // -> true
```

## isPromise 

Check if value looks like a promise.

|Name  |Type   |Desc                              |
|------|-------|----------------------------------|
|val   |*      |Value to check                    |
|return|boolean|True if value looks like a promise|

```javascript
isPromise(new Promise(function () {})); // -> true
isPromise({}); // -> false
```

## isRegExp 

Check if value is a regular expression.

|Name  |Type   |Desc                                 |
|------|-------|-------------------------------------|
|val   |*      |Value to check                       |
|return|boolean|True if value is a regular expression|

```javascript
isRegExp(/a/); // -> true
```

## isRelative 

Check if path appears to be relative.

|Name  |Type   |Desc                               |
|------|-------|-----------------------------------|
|path  |string |Path to check                      |
|return|boolean|True if path appears to be relative|

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

|Name  |Type   |Desc                  |
|------|-------|----------------------|
|val   |*      |Value to check        |
|return|boolean|True if value is a Set|

```javascript
isSet(new Set()); // -> true
isSet(new WeakSet()); // -> false
```

## isSorted 

Check if an array is sorted.

|Name |Type    |Desc          |
|-----|--------|--------------|
|arr  |array   |Array to check|
|[cmp]|function|Comparator    |

```javascript
isSorted([1, 2, 3]); // -> true
isSorted([3, 2, 1]); // -> false
```

## isStr 

Check if value is a string primitive.

|Name  |Type   |Desc                               |
|------|-------|-----------------------------------|
|val   |*      |Value to check                     |
|return|boolean|True if value is a string primitive|

```javascript
isStr('licia'); // -> true
```

## isStream 

Check if value is a Node.js stream.

|Name  |Type   |Desc                             |
|------|-------|---------------------------------|
|val   |*      |Value to check                   |
|return|boolean|True if value is a Node.js stream|

```javascript
var stream = require('stream');

isStream(new stream.Stream()); // -> true
```

## isTypedArr 

Check if value is a typed array.

|Name  |Type   |Desc                          |
|------|-------|------------------------------|
|val   |*      |Value to check                |
|return|boolean|True if value is a typed array|

```javascript
isTypedArr([]); // -> false
isTypedArr(new Unit8Array); // -> true
```

## isUndef 

Check if value is undefined.

|Name  |Type   |Desc                      |
|------|-------|--------------------------|
|val   |*      |Value to check            |
|return|boolean|True if value is undefined|

```javascript
isUndef(void 0); // -> true
isUndef(null); // -> false
```

## isUrl 

Loosely validate an url.

|Name  |Type   |Desc                               |
|------|-------|-----------------------------------|
|val   |string |Value to check                     |
|return|boolean|True if value is an url like string|

```javascript
isUrl('http://www.example.com?foo=bar&param=test'); // -> true
```

## isWeakMap 

Check if value is a WeakMap object.

|Name  |Type   |Desc                      |
|------|-------|--------------------------|
|val   |*      |Value to check            |
|return|boolean|True if value is a WeakMap|

```javascript
isWeakMap(new Map()); // -> false
isWeakMap(new WeakMap()); // -> true
```

## isWeakSet 

Check if value is a WeakSet object.

|Name  |Type   |Desc                      |
|------|-------|--------------------------|
|val   |*      |Value to check            |
|return|boolean|True if value is a WeakSet|

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

|Name|Type  |Desc         |
|----|------|-------------|
|opts|object|Jsonp Options|

Available options:

|Name          |Type    |Desc                  |
|--------------|--------|----------------------|
|url           |string  |Request url           |
|data          |object  |Request data          |
|success       |function|Success callback      |
|param=callback|string  |Callback param        |
|[name]        |string  |Callback name         |
|error         |function|Error callback        |
|complete      |function|Callback after request|
|timeout       |number  |Request timeout       |

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

Convert string to "kebabCase".

|Name  |Type  |Desc              |
|------|------|------------------|
|str   |string|String to convert |
|return|string|Kebab cased string|

```javascript
kebabCase('fooBar'); // -> foo-bar
kebabCase('foo bar'); // -> foo-bar
kebabCase('foo_bar'); // -> foo-bar
kebabCase('foo.bar'); // -> foo-bar
```

## keyCode 

Key codes and key names conversion.

Get key code's name.

|Name  |Type  |Desc                  |
|------|------|----------------------|
|code  |number|Key code              |
|return|string|Corresponding key name|

Get key name's code.

|Name  |Type  |Desc                  |
|------|------|----------------------|
|name  |string|Key name              |
|return|number|Corresponding key code|

```javascript
keyCode(13); // -> 'enter'
keyCode('enter'); // -> 13
```

## keys 

Create an array of the own enumerable property names of object.

|Name  |Type  |Desc                   |
|------|------|-----------------------|
|obj   |object|Object to query        |
|return|array |Array of property names|

```javascript
keys({a: 1}); // -> ['a']
```

## last 

Get the last element of array.

|Name  |Type |Desc                     |
|------|-----|-------------------------|
|arr   |array|The array to query       |
|return|*    |The last element of array|

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

|Name       |Type    |Desc                     |
|-----------|--------|-------------------------|
|str        |string  |String to hyperlink      |
|[hyperlink]|function|Function to hyperlink url|
|return     |string  |Result string            |

```javascript
var str = 'Official site: http://eustia.liriliri.io'
linkify(str); // -> 'Official site: <a href="http://eustia.liriliri.io">http://eustia.liriliri.io</a>'
linkify(str, function (url) {
    return '<a href="' + url + '" target="_blank">' + url + '</a>';
});
```

## loadCss 

Inject link tag into page with given href value.

|Name|Type    |Desc           |
|----|--------|---------------|
|src |string  |Style source   |
|cb  |function|Onload callback|

```javascript
loadCss('style.css', function (isLoaded) {
    // Do something...
});
```

## loadImg 

Load image with given src.

|Name|Type    |Desc           |
|----|--------|---------------|
|src |string  |Image source   |
|[cb]|function|Onload callback|

```javascript
loadImg('http://eustia.liriliri.io/img.jpg', function (err, img) {
    console.log(img.width, img.height);
});
```

## loadJs 

Inject script tag into page with given src value.

|Name|Type    |Desc           |
|----|--------|---------------|
|src |string  |Script source  |
|cb  |function|Onload callback|

```javascript
loadJs('main.js', function (isLoaded) {
    // Do something...
});
```

## longest 

Get the longest item in an array.

|Name  |Type |Desc            |
|------|-----|----------------|
|arr   |array|Array to inspect|
|return|*    |Longest item    |

```javascript
longest(['a', 'abcde', 'abc']); // -> 'abcde'
```

## lowerCase 

Convert string to lower case.

|Name  |Type  |Desc              |
|------|------|------------------|
|str   |string|String to convert |
|return|string|Lower cased string|

```javascript
lowerCase('TEST'); // -> 'test'
```

## lpad 

Pad string on the left side if it's shorter than length.

|Name   |Type  |Desc                  |
|-------|------|----------------------|
|str    |string|String to pad         |
|len    |number|Padding length        |
|[chars]|string|String used as padding|
|return |string|Resulted string       |

```javascript
lpad('a', 5); // -> '    a'
lpad('a', 5, '-'); // -> '----a'
lpad('abc', 3, '-'); // -> 'abc'
lpad('abc', 5, 'ab'); // -> 'ababc'
```

## ltrim 

Remove chars or white-spaces from beginning of string.

|Name  |Type        |Desc              |
|------|------------|------------------|
|str   |string      |String to trim    |
|chars |string array|Characters to trim|
|return|string      |Trimmed string    |

```javascript
ltrim(' abc  '); // -> 'abc  '
ltrim('_abc_', '_'); // -> 'abc_'
ltrim('_abc_', ['a', '_']); // -> 'bc_'
```

## map 

Create an array of values by running each element in collection through iteratee.

|Name    |Type        |Desc                          |
|--------|------------|------------------------------|
|obj     |array object|Collection to iterate over    |
|iteratee|function    |Function invoked per iteration|
|[ctx]   |*           |Function context              |
|return  |array       |New mapped array              |

```javascript
map([4, 8], function (n) { return n * n; }); // -> [16, 64]
```

## mapObj 

Map for objects.

|Name    |Type    |Desc                          |
|--------|--------|------------------------------|
|obj     |object  |Object to iterate over        |
|iteratee|function|Function invoked per iteration|
|[ctx]   |*       |Function context              |
|return  |object  |New mapped object             |

```javascript
mapObj({a: 1, b: 2}, function (val, key) { return val + 1 }); // -> {a: 2, b: 3}
```

## matcher 

Return a predicate function that checks if attrs are contained in an object.

|Name  |Type    |Desc                              |
|------|--------|----------------------------------|
|attrs |object  |Object of property values to match|
|return|function|New predicate function            |

```javascript
var objects = [
    {a: 1, b: 2, c: 3 },
    {a: 4, b: 5, c: 6 }
];
filter(objects, matcher({a: 4, c: 6 })); // -> [{a: 4, b: 5, c: 6 }]
```

## max 

Get maximum value of given numbers.

|Name  |Type  |Desc                |
|------|------|--------------------|
|...num|number|Numbers to calculate|
|return|number|Maximum value       |

```javascript
max(2.3, 1, 4.5, 2); // 4.5
```

## md5 

MD5 implementation.

|Name   |Type  |Desc              |
|-------|------|------------------|
|msg    |string|Message to encrypt|
|return |string|MD5 hash          |

```javascript
md5('licia'); // -> 'e59f337d85e9a467f1783fab282a41d0'
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

|Name    |Type    |Desc                                |
|--------|--------|------------------------------------|
|fn      |function|Function to have its output memoized|
|[hashFn]|function|Function to create cache key        |
|return  |function|New memoized function               |

```javascript
var fibonacci = memoize(function(n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
});
```

## mergeSort 

Merge sort implementation.

Note: It's not an "in-place" sort.

|Name |Type    |Desc         |
|-----|--------|-------------|
|arr  |array   |Array to sort|
|[cmp]|function|Comparator   |

```javascript
mergeSort([2, 1]); // -> [1, 2]
```

## meta 

Document meta manipulation, turn name and content into key value pairs.

Get meta content with given name. If name is omitted, all pairs will be return.

|Name  |Type        |Desc        |
|------|------------|------------|
|[name]|string array|Meta name   |
|return|string      |Meta content|

Set meta content.

|Name   |Type  |Desc        |
|-------|------|------------|
|name   |string|Meta name   |
|content|string|Meta content|

|Name |Type  |Desc                        |
|-----|------|----------------------------|
|metas|object|Object of name content pairs|

### remove

Remove metas.

|Name|Type        |Desc     |
|----|------------|---------|
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

|Name  |Type  |Desc                    |
|------|------|------------------------|
|obj   |object|Object to check         |
|return|array |Function names in object|

```javascript
methods(console); // -> ['Console', 'assert', 'dir', ...]
```

## min 

Get minimum value of given numbers.

|Name  |Type  |Desc                |
|------|------|--------------------|
|...num|number|Numbers to calculate|
|return|number|Minimum value       |

```javascript
min(2.3, 1, 4.5, 2); // 1
```

## mkdir 

Recursively create directories.

|Name      |Type    |Desc               |
|----------|--------|-------------------|
|dir       |string  |Directory to create|
|mode=0777 |number  |Directory mode     |
|[callback]|function|Callback           |

```javascript
mkdir('/tmp/foo/bar/baz', function (err) {
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

|Name  |Type  |Desc         |
|------|------|-------------|
|str   |string|String format|
|return|number|Milliseconds |

Turn milliseconds into time string.

|Name  |Type  |Desc         |
|------|------|-------------|
|num   |number|Milliseconds |
|return|string|String format|

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

|Name     |Type    |Desc               |
|---------|--------|-------------------|
|predicate|function|Predicate to negate|
|return   |function|New function       |

```javascript
function even(n) { return n % 2 === 0 }
filter([1, 2, 3, 4, 5, 6], negate(even)); // -> [1, 3, 5]
```

## nextTick 

Next tick for both node and browser.

|Name|Type    |Desc            |
|----|--------|----------------|
|cb  |function|Function to call|

Use process.nextTick if available.

Otherwise setImmediate or setTimeout is used as fallback.

```javascript
nextTick(function () {
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

|Name  |Type  |Desc             |
|------|------|-----------------|
|path  |string|Path to normalize|
|return|string|Normalized path  |

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

|Name  |Type  |Desc                                |
|------|------|------------------------------------|
|val   |*     |Source value                        |
|return|string|String representation of given value|

```javascript
objToStr(5); // -> '[object Number]'
```

## omit 

Opposite of pick.

|Name  |Type                 |Desc           |
|------|---------------------|---------------|
|obj   |object               |Source object  |
|filter|string array function|Object filter  |
|return|object               |Filtered object|

```javascript
omit({a: 1, b: 2}, 'a'); // -> {b: 2}
omit({a: 1, b: 2, c: 3}, ['b', 'c']) // -> {a: 1}
omit({a: 1, b: 2, c: 3, d: 4}, function (val, key) {
    return val % 2;
}); // -> {b: 2, d: 4}
```

## once 

Create a function that invokes once.

|Name  |Type    |Desc                   |
|------|--------|-----------------------|
|fn    |function|Function to restrict   |
|return|function|New restricted function|

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
orientation.on('change', function (direction) {
    console.log(direction); // -> 'portrait'
});
orientation.get(); // -> 'landscape'
```

## pad 

Pad string on the left and right sides if it's shorter than length.

|Name  |Type  |Desc                  |
|------|------|----------------------|
|str   |string|String to pad         |
|len   |number|Padding length        |
|chars |string|String used as padding|
|return|string|Resulted string       |

```javascript
pad('a', 5); // -> '  a  '
pad('a', 5, '-'); // -> '--a--'
pad('abc', 3, '-'); // -> 'abc'
pad('abc', 5, 'ab'); // -> 'babca'
pad('ab', 5, 'ab'); // -> 'ababa'
```

## pairs 

Convert an object into a list of [key, value] pairs.

|Name  |Type  |Desc                      |
|------|------|--------------------------|
|obj   |object|Object to convert         |
|return|array |List of [key, value] pairs|

```javascript
pairs({a: 1, b: 2}); // -> [['a', 1], ['b', 2]]
```

## parallel 

Run an array of functions in parallel.

|Name |Type    |Desc                   |
|-----|--------|-----------------------|
|tasks|array   |Array of functions     |
|[cb] |function|Callback once completed|

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

Parse command line argument options, the same as minimist.

|Name  |Type  |Desc           |
|------|------|---------------|
|args  |array |Argument array |
|opts  |object|Parse options  |
|return|object|Parsed result  |

### options

|Name      |Type  |Desc             |
|----------|------|-----------------|
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

|Name       |Type    |Desc                                    |
|-----------|--------|----------------------------------------|
|fn         |function|Function to partially apply arguments to|
|...partials|*       |Arguments to be partially applied       |
|return     |function|New partially applied function          |

```javascript
var sub5 = partial(function (a, b) { return b - a }, 5);
sub(20); // -> 15
```

## pascalCase 

Convert string to "pascalCase".

|Name  |Type  |Desc               |
|------|------|-------------------|
|str   |string|String to convert  |
|return|string|Pascal cased string|

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

|Name  |Type                 |Desc           |
|------|---------------------|---------------|
|obj   |object               |Source object  |
|filter|string array function|Object filter  |
|return|object               |Filtered object|

```javascript
pick({a: 1, b: 2}, 'a'); // -> {a: 1}
pick({a: 1, b: 2, c: 3}, ['b', 'c']) // -> {b: 2, c: 3}
pick({a: 1, b: 2, c: 3, d: 4}, function (val, key) {
    return val % 2;
}); // -> {a: 1, c: 3}
```

## pluck 

Extract a list of property values.

|Name  |Type        |Desc                           |
|------|------------|-------------------------------|
|obj   |object array|Collection to iterate over     |
|key   |string array|Property path                  |
|return|array       |New array of specified property|

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

|Name  |Type  |Desc           |
|------|------|---------------|
|num   |number|Number to check|
|return|number|Precision      |

```javascript
precision(1.234); // -> 3;
```

## prefix 

Add vendor prefixes to a CSS attribute.

|Name  |Type  |Desc                  |
|------|------|----------------------|
|name  |string|Property name         |
|return|string|Prefixed property name|

### dash

Create a dasherize version.

```javascript
prefix('text-emphasis'); // -> 'WebkitTextEmphasis'
prefix.dash('text-emphasis'); // -> '-webkit-text-emphasis'
prefix('color'); // -> 'color'
```

## promisify 

Convert callback based functions into Promises.

|Name           |Type    |Desc                                  |
|---------------|--------|--------------------------------------|
|fn             |function|Callback based function               |
|multiArgs=false|boolean |If callback has multiple success value|
|return         |boolean |Result function                       |

If multiArgs is set to true, the resulting promise will always fulfill with an array of the callback's success values.

```javascript
var fs = require('fs');

var readFile = promisify(fs.readFile);
readFile('test.js', 'utf-8').then(function (data) {
    // Do something with file content.
});
```

## property 

Return a function that will itself return the key property of any passed-in object.

|Name  |Type        |Desc                       |
|------|------------|---------------------------|
|path  |string array|Path of the property to get|
|return|function    |New accessor function      |

```javascript
var obj = {a: {b: 1}};
property('a')(obj); // -> {b: 1}
property(['a', 'b'])(obj); // -> 1
```

## query 

Parse and stringify url query strings.

### parse

Parse a query string into an object.

|Name  |Type  |Desc        |
|------|------|------------|
|str   |string|Query string|
|return|object|Query object|

### stringify

Stringify an object into a query string.

|Name  |Type  |Desc        |
|------|------|------------|
|obj   |object|Query object|
|return|string|Query string|

```javascript
query.parse('foo=bar&eruda=true'); // -> {foo: 'bar', eruda: 'true'}
query.stringify({foo: 'bar', eruda: 'true'}); // -> 'foo=bar&eruda=true'
query.parse('name=eruda&name=eustia'); // -> {name: ['eruda', 'eustia']}
```

## quickSort 

Quick sort implementation.

|Name |Type    |Desc         |
|-----|--------|-------------|
|arr  |array   |Array to sort|
|[cmp]|function|Comparator   |

```javascript
quickSort([2, 1]); // -> [1, 2]
```

## raf 

Shortcut for requestAnimationFrame.

Use setTimeout if native requestAnimationFrame is not supported.

```javascript
var id = raf(function tick() {
    // Animation stuff
    raf(tick);
});
raf.cancel(id);
```

## random 

Produces a random number between min and max(inclusive).

|Name          |Type   |Desc                  |
|--------------|-------|----------------------|
|min           |number |Minimum possible value|
|max           |number |Maximum possible value|
|floating=false|boolean|Float or not          |
|return        |number |Random number         |

```javascript
random(1, 5); // -> an integer between 0 and 5
random(5); // -> an integer between 0 and 5
random(1.2, 5.2, true); /// -> a floating-point number between 1.2 and 5.2
```

## randomBytes 

Random bytes generator.

Use crypto module in node or crypto object in browser if possible.

|Name  |Type  |Desc                        |
|------|------|----------------------------|
|size  |number|Number of bytes to generate |
|return|object|Random bytes of given length|

```javascript
randomBytes(5); // -> [55, 49, 153, 30, 122]
```

## randomItem 

Get a random item from an array.

|Name  |Type |Desc                |
|------|-----|--------------------|
|arr   |array|Array to get        |
|return|*    |Randomly picked item|

```javascript
randomItem([1, 2, 3]); // -> 2
```

## range 

Create flexibly-numbered lists of integers.

|Name   |Type  |Desc                              |
|-------|------|----------------------------------|
|[start]|number|Start of the range                |
|end    |number|End of the range                  |
|step=1 |number|Value to increment or decrement by|

```javascript
range(5); // -> [0, 1, 2, 3, 4]
range(0, 5, 2) // -> [0, 2, 4]
```

## rc4 

RC4 symmetric encryption implementation.

### encrypt

RC4 encryption, result as base64 string.

### decrypt

RC4 decryption, pass base64 string as input.

|Name  |Type  |Desc                            |
|------|------|--------------------------------|
|key   |string|Secret key                      |
|str   |string|String to be encrypted/decrypted|
|return|string|Encrypted/decrypted string      |

```javascript
rc4.encrypt('licia', 'Hello world'); // -> 'j9y2VpSfR3AdNN8='
rc4.decrypt('licia', 'j9y2VpSfR3AdNN8='); // -> 'Hello world'
```

## ready 

Invoke callback when dom is ready, similar to jQuery ready.

|Name|Type    |Desc             |
|----|--------|-----------------|
|fn  |function|Callback function|

```javascript
ready(function () {
    // It's safe to manipulate dom here.
});
```

## reduce 

Turn a list of values into a single value.

|Name             |Type        |Desc                          |
|-----------------|------------|------------------------------|
|obj              |object array|Collection to iterate over    |
|iteratee=identity|function    |Function invoked per iteration|
|[initial]        |*           |Initial value                 |
|[ctx]            |*           |Function context              |
|return           |*           |Accumulated value             |

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

|Name     |Type    |Desc                                          |
|---------|--------|----------------------------------------------|
|obj      |array   |Collection to iterate over                    |
|predicate|function|Function invoked per iteration                |
|[ctx]    |*       |Predicate context                             |
|return   |array   |Array of all values that didn't pass predicate|

```javascript
reject([1, 2, 3, 4, 5], function (val) {
    return val % 2 === 0;
}); // -> [1, 3, 5]
```

## remove 

Remove all elements from array that predicate returns truthy for and return an array of the removed elements.

Unlike filter, this method mutates array.

|Name     |Type    |Desc                                |
|---------|--------|------------------------------------|
|obj      |array   |Collection to iterate over          |
|predicate|function|Function invoked per iteration      |
|[ctx]    |*       |Predicate context                   |
|return   |array   |Array of all values that are removed|

```javascript
var arr = [1, 2, 3, 4, 5];
var evens = remove(arr, function (val) { return val % 2 === 0 });
console.log(arr); // -> [1, 3, 5]
console.log(evens); // -> [2, 4]
```

## repeat 

Repeat string n-times.

|Name  |Type  |Desc            |
|------|------|----------------|
|str   |string|String to repeat|
|n     |number|Repeat times    |
|return|string|Repeated string |

```javascript
repeat('a', 3); // -> 'aaa'
repeat('ab', 2); // -> 'abab'
repeat('*', 0); // -> ''
```

## restArgs 

This accumulates the arguments passed into an array, after a given index.

|Name        |Type    |Desc                                   |
|------------|--------|---------------------------------------|
|function    |function|Function that needs rest parameters    |
|[startIndex]|number  |The start index to accumulates         |
|return      |function|Generated function with rest parameters|

```javascript
var paramArr = restArgs(function (rest) { return rest });
paramArr(1, 2, 3, 4); // -> [1, 2, 3, 4]
```

## rgbToHsl 

Convert rgb to hsl.

|Name  |Type |Desc      |
|------|-----|----------|
|rgb   |array|Rgb values|
|return|array|Hsl values|

```javascript
rgbToHsl([52, 203, 165, 0.8]); // -> [165, 59, 50, 0.8]
```

## rmCookie 

Loop through all possible path and domain to remove cookie.

|Name|Type  |Desc      |
|----|------|----------|
|key |string|Cookie key|

```javascript
rmCookie('test');
```

## rmdir 

Recursively remove directories.

|Name    |Type    |Desc               |
|--------|--------|-------------------|
|dir     |string  |Directory to remove|
|callback|function|Callback           |

```javascript
rmdir('/tmp/foo/bar/baz', function (err) {
    if (err) console.log (err);
    else console.log('Done');
});
```

## root 

Root object reference, `global` in nodeJs, `window` in browser.

## rpad 

Pad string on the right side if it's shorter than length.

|Name  |Type  |Desc                  |
|------|------|----------------------|
|str   |string|String to pad         |
|len   |number|Padding length        |
|chars |string|String used as padding|
|return|string|Resulted string       |

```javascript
rpad('a', 5); // -> 'a    '
rpad('a', 5, '-'); // -> 'a----'
rpad('abc', 3, '-'); // -> 'abc'
rpad('abc', 5, 'ab'); // -> 'abcab'
```

## rtrim 

Remove chars or white-spaces from end of string.

|Name  |Type        |Desc              |
|------|------------|------------------|
|str   |string      |String to trim    |
|chars |string array|Characters to trim|
|return|string      |Trimmed string    |

```javascript
rtrim(' abc  '); // -> ' abc'
rtrim('_abc_', '_'); // -> '_abc'
rtrim('_abc_', ['c', '_']); // -> '_ab'
```

## safeCb 

Create callback based on input value.

## safeDel 

Delete object property.

|Name  |Type        |Desc                      |
|------|------------|--------------------------|
|obj   |object      |Object to query           |
|path  |array string|Path of property to delete|
|return|*           |Deleted value or undefined|

```javascript
var obj = {a: {aa: {aaa: 1}}};
safeDel(obj, 'a.aa.aaa'); // -> 1
safeDel(obj, ['a', 'aa']); // -> {}
safeDel(obj, 'a.b'); // -> undefined
```

## safeGet 

Get object property, don't throw undefined error.

|Name  |Type        |Desc                     |
|------|------------|-------------------------|
|obj   |object      |Object to query          |
|path  |array string|Path of property to get  |
|return|*           |Target value or undefined|

```javascript
var obj = {a: {aa: {aaa: 1}}};
safeGet(obj, 'a.aa.aaa'); // -> 1
safeGet(obj, ['a', 'aa']); // -> {aaa: 1}
safeGet(obj, 'a.b'); // -> undefined
```

## safeSet 

Set value at path of object.

If a portion of path doesn't exist, it's created.

|Name|Type        |Desc                   |
|----|------------|-----------------------|
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

|Name        |Type  |Desc             |
|------------|------|-----------------|
|type='local'|string|local or session |
|return      |object|Specified storage|

```javascript
var localStorage = safeStorage('local');
localStorage.setItem('licia', 'util');
```

## sample 

Sample random values from a collection.

|Name  |Type        |Desc                  |
|------|------------|----------------------|
|obj   |array object|Collection to sample  |
|n     |number      |Number of values      |
|return|array       |Array of sample values|

```javascript
sample([2, 3, 1], 2); // -> [2, 3]
sample({a: 1, b: 2, c: 3}, 1); // -> [2]
```

## scrollTo 

Scroll to a target with animation.

|Name   |Type                 |Desc          |
|-------|---------------------|--------------|
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

|Name |Type    |Desc         |
|-----|--------|-------------|
|arr  |array   |Array to sort|
|[cmp]|function|Comparator   |

```javascript
selectionSort([2, 1]); // -> [1, 2]
```

## shuffle 

Randomize the order of the elements in a given array.

|Name  |Type |Desc              |
|------|-----|------------------|
|arr   |array|Array to randomize|
|return|array|Randomized Array  |

```javascript
shuffle([1, 2, 3]); // -> [3, 1, 2]
```

## size 

Get size of object or length of array like object.

|Name  |Type        |Desc                 |
|------|------------|---------------------|
|obj   |array object|Collection to inspect|
|return|number      |Collection size      |

```javascript
size({a: 1, b: 2}); // -> 2
size([1, 2, 3]); // -> 3
```

## slice 

Create slice of source array or array-like object.

|Name              |Type  |Desc                      |
|------------------|------|--------------------------|
|array             |array |Array to slice            |
|[start=0]         |number|Start position            |
|[end=array.length]|number|End position, not included|

```javascript
slice([1, 2, 3, 4], 1, 2); // -> [2]
```

## snakeCase 

Convert string to "snakeCase".

|Name  |Type  |Desc              |
|------|------|------------------|
|str   |string|String to convert |
|return|string|Snake cased string|

```javascript
snakeCase('fooBar'); // -> foo_bar
snakeCase('foo bar'); // -> foo_bar
snakeCase('foo.bar'); // -> foo_bar
```

## some 

Check if predicate return truthy for any element.

|Name     |Type        |Desc                                          |
|---------|------------|----------------------------------------------|
|obj      |array object|Collection to iterate over                    |
|predicate|function    |Function to invoked per iteration             |
|ctx      |*           |Predicate context                             |
|return   |boolean     |True if any element passes the predicate check|

```javascript
some([2, 5], function (val) {
    return val % 2 === 0;
}); // -> true
```

## sortBy 

Return an array of elements sorted in ascending order by results of running each element through iteratee.

|Name               |Type        |Desc                      |
|-------------------|------------|--------------------------|
|arr                |object array|Collection to iterate over|
|[iteratee=identity]|function    |Iteratee to sort by       |
|[ctx]              |*           |Iteratee context          |
|return             |array       |New sorted array          |

```javascript
sortBy([1, 2, 3, 4, 5, 6], function (num) {
    return Math.sin(num);
}); // -> [5, 4, 6, 3, 1, 2]
```

## spaceCase 

Convert string to "spaceCase".

|Name  |Type  |Desc              |
|------|------|------------------|
|str   |string|String to convert |
|return|string|Space cased string|

```javascript
spaceCase('fooBar'); // -> foo bar
spaceCase('foo.bar'); // -> foo bar
spaceCase('foo.bar'); // -> foo bar
```

## splitCase 

Split different string case to an array.

|Name  |Type  |Desc           |
|------|------|---------------|
|str   |string|String to split|
|return|array |Result array   |

```javascript
splitCase('foo-bar'); // -> ['foo', 'bar']
splitCase('foo bar'); // -> ['foo', 'bar']
splitCase('foo_bar'); // -> ['foo', 'bar']
splitCase('foo.bar'); // -> ['foo', 'bar']
splitCase('fooBar'); // -> ['foo', 'bar']
splitCase('foo-Bar'); // -> ['foo', 'bar']
```

## splitPath 

Split path into dir, name and ext.

|Name  |Type  |Desc                               |
|------|------|-----------------------------------|
|path  |string|Path to split                      |
|return|object|Object containing dir, name and ext|

```javascript
splitPath('f:/foo/bar.txt'); // -> {dir: 'f:/foo/', name: 'bar.txt', ext: '.txt'}
splitPath('/home/foo/bar.txt'); // -> {dir: '/home/foo/', name: 'bar.txt', ext: '.txt'}
```

## startWith 

Check if string starts with the given target string.

|Name  |Type   |Desc                             |
|------|-------|---------------------------------|
|str   |string |String to search                 |
|prefix|string |String prefix                    |
|return|boolean|True if string starts with prefix|

```javascript
startWith('ab', 'a'); // -> true
```

## strHash 

String hash function using djb2.

|Name  |Type  |Desc          |
|------|------|--------------|
|str   |string|String to hash|
|return|number|Hash result   |

```javascript
strHash('test'); // -> 2090770981
```

## strToBytes 

Convert string into bytes.

|Name  |Type  |Desc             |
|------|------|-----------------|
|str   |string|String to convert|
|return|array |Bytes array      |

```javascript
strToBytes('licia'); // -> [108, 105, 99, 105, 97]
```

## stringify 

JSON stringify with support for circular object, function etc.

Undefined is treated as null value.

|Name  |Type  |Desc               |
|------|------|-------------------|
|obj   |object|Object to stringify|
|spaces|number|Indent spaces      |
|return|string|Stringified object |

```javascript
stringify({a: function () {}}); // -> '{"a":"[Function function () {}]"}'
var obj = {a: 1};
obj.b = obj;
stringify(obj); // -> '{"a":1,"b":"[Circular ~]"}'
```

## stripAnsi 

Strip ansi codes from a string.

|Name  |Type  |Desc           |
|------|------|---------------|
|str   |string|String to strip|
|return|string|Resulted string|

```javascript
stripAnsi('\u001b[4mcake\u001b[0m'); // -> 'cake'
```

## stripCmt 

Strip comments from source code.

|Name  |Type  |Desc                 |
|------|------|---------------------|
|str   |string|Source code          |
|return|string|Code without comments|

```javascript
stripCmts('// comment \n var a = 5; /* comment2\n * comment3\n *\/'); // -> ' var a = 5; '
```

## stripColor 

Strip ansi color codes from a string.

|Name  |Type  |Desc           |
|------|------|---------------|
|str   |string|String to strip|
|return|string|Resulted string|

```javascript
stripColor('\u001b[31mred\u001b[39m'); // -> 'red'
```

## stripHtmlTag 

Strip html tags from a string.

|Name  |Type  |Desc           |
|------|------|---------------|
|str   |string|String to strip|
|return|string|Resulted string|

```javascript
stripHtmlTag('<p>Hello</p>'); // -> 'Hello'
```

## sum 

Compute sum of given numbers.

|Name  |Type  |Desc                |
|------|------|--------------------|
|...num|number|Numbers to calculate|
|return|number|Sum of numbers      |

```javascript
sum(1, 2, 5); // -> 8
```

## swap 

Swap two items in an array.

|Name  |Type  |Desc         |
|------|------|-------------|
|arr   |array |Array to swap|
|a     |number|First index  |
|b     |number|Second index |
|return|array |Array given  |

```javascript
var arr = [1, 2];
swap(arr, 0, 1); // -> [2, 1]
```

## template 

Compile JavaScript template into function that can be evaluated for rendering.

|Name  |Type    |Desc                      |
|------|--------|--------------------------|
|str   |string  |Template string           |
|return|function|Compiled template function|

```javascript
template('Hello <%= name %>!')({name: 'licia'}); // -> 'Hello licia!'
template('<p><%- name %></p>')({name: '<licia>'}); // -> '<p>&lt;licia&gt;</p>'
template('<%if (echo) {%>Hello licia!<%}%>')({echo: true}); // -> 'Hello licia!'
```

## throttle 

Return a new throttled version of the passed function.

|Name  |Type    |Desc                           |
|------|--------|-------------------------------|
|fn    |function|Function to throttle           |
|wait  |number  |Number of milliseconds to delay|
|return|function|New throttled function         |

```javascript
$(window).scroll(throttle(updatePos, 100));
```

## through 

Tiny wrapper of stream Transform.

|Name     |Type    |Desc                        |
|---------|--------|----------------------------|
|opts={}  |Object  |Options to initialize stream|
|transform|function|Transform implementation    |
|[flush]  |function|Flush implementation        |

### obj

Shortcut for setting objectMode to true.

### ctor

Return a class that extends stream Transform.

```javascript
fs.createReadStream('in.txt')
  .pipe(through(function (chunk, enc, cb) {
      // Do something to chunk
      this.push(chunk);
      cb();
  })).pipe(fs.createWriteStream('out.txt'));
```

## timeAgo 

Format datetime with *** time ago statement.

|Name          |Type  |Desc                     |
|--------------|------|-------------------------|
|date          |Date  |Date to calculate        |
|[now=new Date]|Date  |Current date             |
|return        |string|Formatted time ago string|

```javascript
var now = new Date().getTime();
timeAgo(now - 1000 * 6); // -> right now
timeAgo(now + 1000 * 15); // -> in 15 minutes
timeAgo(now - 1000 * 60 * 60 * 5, now); // -> 5 hours ago
```

## timeTaken 

Get execution time of a function.

|Name  |Type    |Desc                    |
|------|--------|------------------------|
|fn    |function|Function to measure time|
|return|number  |Execution time, ms      |

```javascript
timeTaken(function () {
    // Do something.
}); // -> Time taken to execute given function.
```

## toArr 

Convert value to an array.

|Name  |Type |Desc            |
|------|-----|----------------|
|val   |*    |Value to convert|
|return|array|Converted array |

```javascript
toArr({a: 1, b: 2}); // -> [{a: 1, b: 2}]
toArr('abc'); // -> ['abc']
toArr(1); // -> [1]
toArr(null); // -> []
```

## toBool 

Convert value to a boolean.

|Name  |Type   |Desc             |
|------|-------|-----------------|
|val   |*      |Value to convert |
|return|boolean|Converted boolean|

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

|Name  |Type|Desc            |
|------|----|----------------|
|val   |*   |Value to convert|
|return|Date|Converted Date  |

```javascript
toDate('20180501');
toDate('2018-05-01');
toDate(1525107450849);
```

## toEl 

Convert html string to dom elements.

There should be only one root element.

|Name  |Type   |Desc        |
|------|-------|------------|
|str   |string |Html string |
|return|element|Html element|

```javascript
toEl('<div>test</div>');
```

## toInt 

Convert value to an integer.

|Name  |Type  |Desc             |
|------|------|-----------------|
|val   |*     |Value to convert |
|return|number|Converted integer|

```javascript
toInt(1.1); // -> 1
toInt(undefined); // -> 0
```

## toNum 

Convert value to a number.

|Name  |Type  |Desc            |
|------|------|----------------|
|val   |*     |Value to process|
|return|number|Resulted number |

```javascript
toNum('5'); // -> 5
```

## toSrc 

Convert function to its source code.

|Name  |Type    |Desc               |
|------|--------|-------------------|
|fn    |function|Function to convert|
|return|string  |Source code        |

```javascript
toSrc(Math.min); // -> 'function min() { [native code] }'
toSrc(function () {}) // -> 'function () { }'
```

## toStr 

Convert value to a string.

|Name  |Type  |Desc            |
|------|------|----------------|
|val   |*     |Value to convert|
|return|string|Resulted string |

```javascript
toStr(null); // -> ''
toStr(1); // -> '1'
toStr(false); // -> 'false'
toStr([1, 2, 3]); // -> '1,2,3'
```

## topoSort 

Topological sorting algorithm.

|Name  |Type |Desc        |
|------|-----|------------|
|edges |array|Dependencies|
|return|array|Sorted order|

```javascript
topoSort([[1, 2], [1, 3], [3, 2]]); // -> [1, 3, 2]
```

## trigger 

Trigger browser events.

|Name         |Type   |Desc              |
|-------------|-------|------------------|
|[el=document]|element|Element to trigger|
|type         |string |Event type        |
|opts         |object |Options           |

```javascript
trigger(el, 'mouseup');
trigger('keydown', {keyCode: 65});
```

## trim 

Remove chars or white-spaces from beginning end of string.

|Name  |Type        |Desc              |
|------|------------|------------------|
|str   |string      |String to trim    |
|chars |string array|Characters to trim|
|return|string      |Trimmed string    |

```javascript
trim(' abc  '); // -> 'abc'
trim('_abc_', '_'); // -> 'abc'
trim('_abc_', ['a', 'c', '_']); // -> 'b'
```

## tryIt 

Run function in a try catch.

|Name|Type    |Desc                 |
|----|--------|---------------------|
|fn  |function|Function to try catch|
|[cb]|function|Callback             |

```javascript
tryIt(function () {
    // Do something that might cause an error.
}, function (err, result) {
    if (err) console.log(err);
});
```

## type 

Determine the internal JavaScript [[Class]] of an object.

|Name  |Type  |Desc                      |
|------|------|--------------------------|
|val   |*     |Value to get type         |
|return|string|Type of object, lowercased|

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

|Name  |Type  |Desc                |
|------|------|--------------------|
|arr   |array |Array of code points|
|return|string|Encoded string      |

### decode

Create an array of code point values using a string.

|Name  |Type  |Desc                |
|------|------|--------------------|
|str   |string|Input string        |
|return|array |Array of code points|

```javascript
ucs2.encode([0x61, 0x62, 0x63]); // -> 'abc'
ucs2.decode('abc'); // -> [0x61, 0x62, 0x63]
'𝌆'.length; // -> 2
ucs2.decode('𝌆').length; // -> 1
```

## unescape 

Convert HTML entities back, the inverse of escape.

|Name  |Type  |Desc              |
|------|------|------------------|
|str   |string|String to unescape|
|return|string|unescaped string  |

```javascript
unescape('You &amp; Me'); -> // -> 'You & Me'
```

## union 

Create an array of unique values, in order, from all given arrays.

|Name  |Type |Desc                        |
|------|-----|----------------------------|
|...arr|array|Arrays to inspect           |
|return|array|New array of combined values|

```javascript
union([2, 1], [4, 2], [1, 2]); // -> [2, 1, 4]
```

## uniqId 

Generate a globally-unique id.

|Name    |Type  |Desc              |
|--------|------|------------------|
|[prefix]|string|Id prefix         |
|return  |string|Globally-unique id|

```javascript
uniqId('eusita_'); // -> 'eustia_xxx'
```

## unique 

Create duplicate-free version of an array.

|Name     |Type    |Desc                         |
|---------|--------|-----------------------------|
|arr      |array   |Array to inspect             |
|[compare]|function|Function for comparing values|
|return   |array   |New duplicate free array     |

```javascript
unique([1, 2, 3, 1]); // -> [1, 2, 3]
```

## unzip 

Opposite of zip.

|Name  |Type |Desc                                |
|------|-----|------------------------------------|
|arr   |array|Array of grouped elements to process|
|return|array|New array of regrouped elements     |

```javascript
unzip([['a', 1, true], ['b', 2, false]]); // -> [['a', 'b'], [1, 2], [true, false]]
```

## upperCase 

Convert string to upper case.

|Name  |Type  |Desc             |
|------|------|-----------------|
|str   |string|String to convert|
|return|string|Uppercased string|

```javascript
upperCase('test'); // -> 'TEST'
```

## upperFirst 

Convert the first character of string to upper case.

|Name  |Type  |Desc             |
|------|------|-----------------|
|str   |string|String to convert|
|return|string|Converted string |

```javascript
upperFirst('red'); // -> Red
```

## use 

Use modules that is created by define.

|Name      |Type    |Desc                |
|----------|--------|--------------------|
|[requires]|array   |Dependencies        |
|method    |function|Codes to be executed|

```javascript
define('A', function () {
    return 'A';
});
use(['A'], function (A) {
    console.log(A + 'B'); // -> 'AB'
});
```

## utf8 

UTF-8 encoding and decoding.

### encode

Turn any UTF-8 decoded string into UTF-8 encoded string.

|Name  |Type  |Desc            |
|------|------|----------------|
|str   |string|String to encode|
|return|string|Encoded string  |

### decode

Turn any UTF-8 encoded string into UTF-8 decoded string.

|Name      |Type   |Desc                  |
|----------|-------|----------------------|
|str       |string |String to decode      |
|safe=false|boolean|Suppress error if true|
|return    |string |Decoded string        |

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

|Name  |Type  |Desc                    |
|------|------|------------------------|
|obj   |object|Object to query         |
|return|array |Array of property values|

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

|Name |Type    |Desc                   |
|-----|--------|-----------------------|
|tasks|array   |Array of functions     |
|[cb] |function|Callback once completed|

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

Move a stand-alone function to a worker thread.

|Name  |Type    |Desc               |
|------|--------|-------------------|
|fn    |function|Function to turn   |
|return|function|Workerized Function|

```javascript
var worker = workerize(function (a, b) {
    return a + b;
});
worker(1, 2).then(function (value) {
    console.log(value); // -> 3
});
```

## wrap 

Wrap the function inside a wrapper function, passing it as the first argument.

|Name   |Type    |Desc            |
|-------|--------|----------------|
|fn     |*       |Function to wrap|
|wrapper|function|Wrapper function|
|return |function|New function    |

```javascript
var p = wrap(escape, function(fn, text) {
    return '<p>' + fn(text) + '</p>';
});
p('You & Me'); // -> '<p>You &amp; Me</p>'
```

## zip 

Merge together the values of each of the arrays with the values at the corresponding position.

|Name  |Type |Desc                         |
|------|-----|-----------------------------|
|*arr  |array|Arrays to process            |
|return|array|New array of grouped elements|

```javascript
zip(['a', 'b'], [1, 2], [true, false]); // -> [['a', 1, true], ['b', 2, false]]
```
