# Licia Documentation

## $ 

jQuery like style dom manipulator.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">namespace $ {
    class $ extends Select {
        find(selector: string): $;
        each(fn: types.AnyFn): $;
        offset(): $offset.IOffset;
        hide(): $;
        show(): $;
        first(): $;
        last(): $;
        get(index: number): Element;
        eq(index: number): $;
        on(event: string, selector: string, handler: types.AnyFn): $;
        on(event: string, handler: types.AnyFn): $;
        off(event: string, selector: string, handler: types.AnyFn): $;
        off(event: string, handler: types.AnyFn): $;
        html(): string;
        html(value: string): $;
        text(): string;
        text(value: string): $;
        val(): string;
        val(value: string): $;
        css(name: string): string;
        css(name: string, value: string): $;
        css(properties: types.PlainObj&lt;string | number&gt;): $;
        attr(name: string): string;
        attr(name: string, value: string): $;
        attr(attributes: types.PlainObj&lt;string&gt;): $;
        data(name: string): string;
        data(name: string, value: string): $;
        data(attributes: types.PlainObj&lt;string&gt;): $;
        rmAttr(name: string): $;
        remove(): $;
        addClass(name: string | string[]): $;
        rmClass(name: string): $;
        toggleClass(name: string): $;
        hasClass(name: string): boolean;
        parent(): $;
        append(content: string | Element): $;
        prepend(content: string | Element): $;
        before(content: string | Element): $;
        after(content: string | Element): $;
    }
}
declare function $(selector: string | Element | Document): $.$;</code>
</pre>
</details>

### Available methods

offset, hide, show, first, last, get, eq, on, off, html, text, val, css, attr,
data, rmAttr, remove, addClass, rmClass, toggleClass, hasClass, append, prepend,
before, after

```javascript
const $btn = $('#btn');
$btn.html('eustia');
$btn.addClass('btn');
$btn.show();
$btn.on('click', function() {
    // Do something...
});
```

## $attr 

Element attribute manipulation.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">namespace $attr {
    function remove(element: $safeEls.El, name: string): void;
}
function $attr(
    element: $safeEls.El,
    name: string,
    value: string
): void;
function $attr(
    element: $safeEls.El,
    attributes: types.PlainObj&lt;string&gt;
): void;
function $attr(element: $safeEls.El, name: string): string;</code>
</pre>
</details>

Get the value of an attribute for the first element in the set of matched elements.

|Name   |Desc                            |
|-------|--------------------------------|
|element|Elements to manipulate          |
|name   |Attribute name                  |
|return |Attribute value of first element|

Set one or more attributes for the set of matched elements.

|Name   |Desc                  |
|-------|----------------------|
|element|Elements to manipulate|
|name   |Attribute name        |
|val    |Attribute value       |

|Name      |Desc                                  |
|----------|--------------------------------------|
|element   |Elements to manipulate                |
|attributes|Object of attribute-value pairs to set|

### remove

Remove an attribute from each element in the set of matched elements.

|Name   |Desc                  |
|-------|----------------------|
|element|Elements to manipulate|
|name   |Attribute name        |

```javascript
$attr('#test', 'attr1', 'test');
$attr('#test', 'attr1'); // -> test
$attr.remove('#test', 'attr1');
$attr('#test', {
    attr1: 'test',
    attr2: 'test'
});
```

## $class 

Element class manipulations.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">const $class: {
    add(element: $safeEls.El, name: string | string[]): void;
    has(element: $safeEls.El, name: string): boolean;
    toggle(element: $safeEls.El, name: string): void;
    remove(element: $safeEls.El, name: string): void;
};</code>
</pre>
</details>

### add

Add the specified class(es) to each element in the set of matched elements.

|Name   |Desc                  |
|-------|----------------------|
|element|Elements to manipulate|
|names  |Classes to add        |

### has

Determine whether any of the matched elements are assigned the given class.

|Name   |Desc                                 |
|-------|-------------------------------------|
|element|Elements to manipulate               |
|name   |Class name                           |
|return |True if elements has given class name|

### toggle

Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the state argument.

|Name   |Desc                  |
|-------|----------------------|
|element|Elements to manipulate|
|name   |Class name to toggle  |

### remove

Remove a single class, multiple classes, or all classes from each element in the set of matched elements.

|Name   |Desc                  |
|-------|----------------------|
|element|Elements to manipulate|
|name   |Class names to remove |

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

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function $css(element: $safeEls.El, name: string): string;
function $css(
    element: $safeEls.El,
    name: string,
    val: string
): void;
function $css(
    element: $safeEls.El,
    properties: types.PlainObj&lt;string | number&gt;
): void;</code>
</pre>
</details>

Get the computed style properties for the first element in the set of matched elements.

|Name   |Desc                      |
|-------|--------------------------|
|element|Elements to manipulate    |
|name   |Property name             |
|return |Css value of first element|

Set one or more CSS properties for the set of matched elements.

|Name   |Desc                  |
|-------|----------------------|
|element|Elements to manipulate|
|name   |Property name         |
|val    |Css value             |

|Name      |Desc                            |
|----------|--------------------------------|
|element   |Elements to manipulate          |
|properties|Object of css-value pairs to set|

```javascript
$css('#test', {
    color: '#fff',
    background: 'black',
    opacity: 0.5
});
$css('#test', 'display', 'block');
$css('#test', 'color'); // -> #fff
```

## $data 

Wrapper of $attr, adds data- prefix to keys.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function $data(
    element: $safeEls.El,
    name: string,
    value: string
): void;
function $data(
    element: $safeEls.El,
    attributes: types.PlainObj&lt;string&gt;
): void;
function $data(element: $safeEls.El, name: string): string;</code>
</pre>
</details>

```javascript
$data('#test', 'attr1', 'eustia');
```

## $event 

bind events to certain dom elements.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">const $event: {
    on(
        element: $safeEls.El,
        event: string,
        selector: string,
        handler: types.AnyFn
    ): void;
    on(element: $safeEls.El, event: string, handler: types.AnyFn): void;
    off(
        element: $safeEls.El,
        event: string,
        selector: string,
        handler: types.AnyFn
    ): void;
    off(element: $safeEls.El, event: string, handler: types.AnyFn): void;
};</code>
</pre>
</details>

```javascript
function clickHandler() {
    // Do something...
}
$event.on('#test', 'click', clickHandler);
$event.off('#test', 'click', clickHandler);
```

## $insert 

Insert html on different position.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">namespace $insert {
    type IInsert = (element: $safeEls.El, content: string | Element) =&gt; void;
}
const $insert: {
    before: $insert.IInsert;
    after: $insert.IInsert;
    append: $insert.IInsert;
    prepend: $insert.IInsert;
};</code>
</pre>
</details>

### before

Insert content before elements.

### after

Insert content after elements.

### prepend

Insert content to the beginning of elements.

### append

Insert content to the end of elements.

|Name   |Desc                   |
|-------|-----------------------|
|element|Elements to manipulate |
|content|Html strings or element|

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

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">namespace $offset {
    interface IOffset {
        left: number;
        top: number;
        width: number;
        height: number;
    }
}
function $offset(element: $safeEls.El): $offset.IOffset;</code>
</pre>
</details>

|Name   |Desc                  |
|-------|----------------------|
|element|Elements to get offset|
|return |Element position      |

```javascript
$offset('#test'); // -> {left: 0, top: 0, width: 0, height: 0}
```

## $property 

Element property html, text, val getter and setter.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">namespace $property {
    interface IProperty {
        (element: $safeEls.El, value: string): void;
        (element: $safeEls.El): string;
    }
}
const $property: {
    html: $property.IProperty;
    val: $property.IProperty;
    text: $property.IProperty;
};</code>
</pre>
</details>

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

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function $remove(element: $safeEls.El);</code>
</pre>
</details>

|Name   |Desc              |
|-------|------------------|
|element|Elements to delete|

```javascript
$remove('#test');
```

## $safeEls 

Convert value into an array, if it's a string, do querySelector.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">namespace $safeEls {
    type El = Element | Element[] | NodeListOf&lt;Element&gt; | string;
}
function $safeEls(val: $safeEls.El): Element[];</code>
</pre>
</details>

|Name  |Desc             |
|------|-----------------|
|val   |Value to convert |
|return|Array of elements|

```javascript
$safeEls(document.querySelector('.test'));
$safeEls(document.querySelectorAll('.test'));
$safeEls('.test'); // -> Array of elements with test class
```

## $show 

Show elements.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function $show(element: $safeEls.El): void;</code>
</pre>
</details>

|Name   |Desc            |
|-------|----------------|
|element|Elements to show|

```javascript
$show('#test');
```

## Benchmark 

JavaScript Benchmark.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">namespace Benchmark {
    interface IOptions {
        minTime?: number;
        maxTime?: number;
        minSamples?: number;
        delay?: number;
        name?: string;
    }
    interface IResult {
        name: string;
        mean: number;
        variance: number;
        deviation: number;
        sem: number;
        moe: number;
        rme: number;
        hz: number;
        sample: number[];
    }
}
class Benchmark {
    constructor(fn: types.AnyFn, options?: Benchmark.IOptions);
    run(): Promise&lt;Benchmark.IResult&gt;;
    static all(
        benches: Array&lt;types.AnyFn | Benchmark&gt;,
        options?: Benchmark.IOptions
    ): Promise&lt;Benchmark.IResult[]&gt;;
}</code>
</pre>
</details>

### constructor

|Name   |Desc                  |
|-------|----------------------|
|fn     |Code for speed testing|
|options|Benchmark options     |

Available options:

|Name        |Desc                              |
|------------|----------------------------------|
|minTime=50  |Time needed to reduce uncertainty |
|maxTime=5000|Maximum time for running benchmark|
|minSamples=5|Minimum sample size               |
|delay=5     |Delay between test cycles         |
|name        |Benchmark name                    |

### run

Run benchmark, returns a promise.

### all

[static] Run some benchmarks.

```javascript
const benchmark = new Benchmark(
    function test() {
        !!'Hello World!'.match(/o/);
    },
    {
        maxTime: 1500
    }
);
benchmark.run().then(result => {
    console.log(String(result));
});
Benchmark.all([
    function regExp() {
        /o/.test('Hello World!');
    },
    function indexOf() {
        'Hello World!'.indexOf('o') > -1;
    },
    function match() {
        !!'Hello World!'.match(/o/);
    }
]).then(results => {
    console.log(String(results));
});
```

## Blob 

Use Blob when available, otherwise BlobBuilder.

### constructor

|Name   |Desc      |
|-------|----------|
|parts  |Blob parts|
|options|Options   |

```javascript
const blob = new Blob([]);
```

## BloomFilter 

Bloom filter implementation.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">class BloomFilter {
    constructor(size?: number, k?: number);
    add(val: string): void;
    test(val: string): boolean;
}</code>
</pre>
</details>

### constructor

|Name     |Desc                    |
|---------|------------------------|
|size=1024|Number of buckets       |
|k=3      |Number of Hash functions|

### add

Add an element to the filter.

|Name|Desc        |
|----|------------|
|val |Value to add|

### test

Test if an element is in the filter.

|Name  |Desc                                     |
|------|-----------------------------------------|
|val   |Value to test                            |
|return|True if probably, false if definitely not|

```javascript
const bloom = new BloomFilter(256, 3);
bloom.add('Bruce Wayne');
bloom.add('Clark Kent');
bloom.test('Clark Kent'); // -> true
bloom.test('Bruce Wayne'); // -> true
bloom.test('Tony Stark'); // -> false
```

## Caseless 

Modify object props without caring about letter case.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">class Caseless {
    constructor(obj: any);
    getKey(key: string): string | void;
    set(key: string, val: any): void;
    get(key: string): any;
    remove(key: string): void;
    has(key: string): boolean;
}</code>
</pre>
</details>

### constructor

|Name|Desc         |
|----|-------------|
|obj |Target object|

### getKey

Get key with preserved casing.

|Name  |Desc        |
|------|------------|
|key   |Caseless key|
|return|Object key  |

### set

Set value.

|Name|Desc        |
|----|------------|
|key |Caseless key|
|val |Value to set|

### get

Get value.

|Name  |Desc              |
|------|------------------|
|key   |Caseless key      |
|return|Value of given key|

### remove

Remove value.

|Name|Desc        |
|----|------------|
|key |Caseless key|

### has

Determine whether target object has given key.

|Name  |Desc                 |
|------|---------------------|
|key   |Caseless key         |
|return|True if has given key|

```javascript
const headers = { 'Content-Type': 'text/javascript' };
const c = new Caseless(headers);
c.set('content-type', 'text/css');
console.log(headers); // -> { 'Content-Type': 'text/css' }
c.getKey('content-type'); // -> 'Content-Type'
c.remove('content-type');
c.has('content-type'); // -> false
```

## Class 

Create JavaScript class.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">namespace Class {
    class Base {
        toString(): string;
    }
    class IConstructor extends Base {
        constructor(...args: any[]);
        static extend(methods: any, statics: any): IConstructor;
        static inherits(Class: types.AnyFn): void;
        static methods(methods: any): IConstructor;
        static statics(statics: any): IConstructor;
        [method: string]: any;
    }
}
function Class(methods: any, statics?: any): Class.IConstructor;</code>
</pre>
</details>

|Name   |Desc                             |
|-------|---------------------------------|
|methods|Public methods                   |
[statics|Static methods                   |
|return |Function used to create instances|

```javascript
const People = Class({
    initialize: function People(name, age) {
        this.name = name;
        this.age = age;
    },
    introduce: function() {
        return 'I am ' + this.name + ', ' + this.age + ' years old.';
    }
});

const Student = People.extend(
    {
        initialize: function Student(name, age, school) {
            this.callSuper(People, 'initialize', arguments);

            this.school = school;
        },
        introduce: function() {
            return (
                this.callSuper(People, 'introduce') +
                '\n I study at ' +
                this.school +
                '.'
            );
        }
    },
    {
        is: function(obj) {
            return obj instanceof Student;
        }
    }
);

const a = new Student('allen', 17, 'Hogwarts');
a.introduce(); // -> 'I am allen, 17 years old. \n I study at Hogwarts.'
Student.is(a); // -> true
```

## Color 

Color converter.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">namespace Color {
    interface IColor {
        val: number[];
        model: string;
    }
}
class Color {
    constructor(color: string | Color.IColor);
    toRgb(): string;
    toHex(): string;
    toHsl(): string;
    static parse(colorStr: string): Color.IColor;
}</code>
</pre>
</details>

### constructor

|Name |Desc            |
|-----|----------------|
|color|Color to convert|

### toRgb

Get color rgb string format.

### toHex

Get color hex string format.

### toHsl

Get color hsl string format.

### parse

[static] Parse color string into object containing value and model.

|Name  |Desc                             |
|------|---------------------------------|
|color |Color string                     |
|return|Object containing value and model|

```javascript
Color.parse('rgb(170, 287, 204, 0.5)'); // -> {val: [170, 187, 204, 0.5], model: 'rgb'}
const color = new Color('#abc');
color.toRgb(); // -> 'rgb(170, 187, 204)'
color.toHsl(); // -> 'hsl(210, 25%, 73%)'
```

## Delegator 

Object delegation.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">class Delegator {
    constructor(host: object, target: object | string);
    method(name: string, target?: string): Delegator;
    getter(name: string, target?: string): Delegator;
    setter(name: string, target?: string): Delegator;
    access(name: string, target?: string): Delegator;
}</code>
</pre>
</details>

### constructor

|Name  |Desc             |
|------|-----------------|
|host  |Host object      |
|target|Delegation target|

### method

Allow method to be accessed on the host object.

|Name       |Desc              |
|-----------|------------------|
|name       |Host method name  |
|target=name|Target method name|

### getter

Create a getter.

### setter

Create a setter.

### access

Create a accessor, same as calling both setter and getter.

```javascript
const host = {
    target: {
        a() {
            return 'a';
        },
        b: 'b',
        c: 'c',
        d: 'd',
        e() {
            return 'e';
        }
    }
};
const delegator = new Delegator(host, 'target');
delegator
    .method('a')
    .getter('b')
    .setter('c')
    .access('d');
host.a(); // -> 'a'
host.b; // -> 'b'
host.c = 5;
host.target.c; // -> 5
host.d; // -> 'd'
host.d = 5;
host.d; // -> 5
```

## Dispatcher 

Flux dispatcher.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">class Dispatcher {
    dispatch(payload: any);
    register(cb: types.AnyFn): void;
    waitFor(ids: string[]): void;
    unregister(id: string): void;
    isDispatching(): boolean;
}</code>
</pre>
</details>

[Related docs](https://facebook.github.io/flux/docs/dispatcher.html)

```javascript
const dispatcher = new Dispatcher();

dispatcher.register(function(payload) {
    switch (
        payload.actionType
        // Do something
    ) {
    }
});

dispatcher.dispatch({
    actionType: 'action'
});
```

## Emitter 

Event emitter class which provides observer pattern.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">class Emitter {
    on(event: string, listener: types.AnyFn): Emitter;
    off(event: string, listener: types.AnyFn): Emitter;
    once(event: string, listener: types.AnyFn): Emitter;
    emit(event: string, ...args: any[]): Emitter;
    removeAllListeners(event?: string): Emitter;
    static mixin(obj: any): any;
}</code>
</pre>
</details>

### on

Bind event.

### off

Unbind event.

### once

Bind event that trigger once.

|Name    |Desc          |
|--------|--------------|
|event   |Event name    |
|listener|Event listener|

### emit

Emit event.

|Name   |Desc                        |
|-------|----------------------------|
|event  |Event name                  |
|...args|Arguments passed to listener|

### removeAllListeners

Remove all listeners.

|Name |Desc      |
|-----|----------|
|event|Event name|

### mixin

[static] Mixin object class methods.

|Name|Desc           |
|----|---------------|
|obj |Object to mixin|

```javascript
const event = new Emitter();
event.on('test', function(name) {
    console.log(name);
});
event.emit('test', 'licia'); // Logs out 'licia'.
Emitter.mixin({});
```

## Enum 

Enum type implementation.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">class Enum {
    size: number;
    constructor(map: string[] | { [member: string]: any });
    [key: string]: any;
}</code>
</pre>
</details>

### constructor

|Name|Desc            |
|----|----------------|
|arr |Array of strings|

|Name|Desc                  |
|----|----------------------|
|obj |Pairs of key and value|

```javascript
const importance = new Enum([
    'NONE',
    'TRIVIAL',
    'REGULAR',
    'IMPORTANT',
    'CRITICAL'
]);
const val = 1;
if (val === importance.CRITICAL) {
    // Do something.
}
```

## FileBlobStore 

Binary file storage.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">class FileBlobStore extends Emitter {
    constructor(path: string, data?: types.PlainObj&lt;Buffer&gt;);
    set(key: string, buf: Buffer): void;
    set(values: types.PlainObj&lt;Buffer&gt;): void;
    get(key: string): Buffer | void;
    get(keys: string[]): types.PlainObj&lt;Buffer&gt;;
    remove(key: string): void;
    remove(keys: string[]): void;
    clear(): void;
    each(fn: (val: Buffer, key: string) =&gt; void): void;
    save(): void;
}</code>
</pre>
</details>

Most api is the same as Store module, except only buffer is accepted.

### save

Save data to disk.

```javascript
const store = new FileBlobStore('path/to/file');
store.set('name', Buffer.from('licia'));
process.on('exit', () => store.save());
```

## FileStore 

File storage.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">class FileStore extends Store {
    constructor(path: string, data?: any);
}</code>
</pre>
</details>

### constructor

|Name|Desc              |
|----|------------------|
|path|File path to store|
|data|Default data      |

```javascript
const store = new FileStore('path/to/file');
store.set('name', 'licia');
```

## HashTable 

Hash table implementation.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">class HashTable {
    constructor(size?: number);
    set(key: string, val: any): void;
    get(key: string): any;
    has(key: string): boolean;
    delete(key: string): void;
}</code>
</pre>
</details>

### constructor

|Name   |Desc       |
|-------|-----------|
|size=32|Bucket size|

### set

Set value.

|Name|Desc        |
|----|------------|
|key |Value key   |
|val |Value to set|

### get

Get value.

|Name  |Desc              |
|------|------------------|
|key   |Value key         |
|return|Value of given key|

### has

Check if has value.

|Name  |Desc                |
|------|--------------------|
|key   |Value key           |
|return|True if value exists|

### delete

Delete value.

```javascript
const hashTable = new HashTable(128);
hashTable.set('name', 'redhoodsu');
hashTable.get('name'); // -> 'redhoodsu'
hashTable.has('name'); // -> true
hashTable.delete('name');
hashTable.has('name'); // -> false
```

## Heap 

Heap implementation.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">class Heap {
    size: number;
    constructor(cmp?: types.AnyFn);
    clear(): void;
    add(item: any): number;
    poll(): any;
    peek(): any;
}</code>
</pre>
</details>

### size

Heap size.

### constructor

|Name|Desc      |
|----|----------|
|cmp |Comparator|

### clear

Clear the heap.

### add

Add an item to the heap.

|Name  |Desc        |
|------|------------|
|item  |Item to add |
|return|Current size|

### poll

Retrieve and remove the root item of the heap.

### peek

Same as poll, but does not remove the item.

```javascript
const heap = new Heap(function(a, b) {
    return b - a;
});
heap.add(2);
heap.add(1);
heap.add(4);
heap.add(5);
heap.poll(); // -> 5
console.log(heap.size); // -> 4
```

## HeapSnapshot 

V8 heap snapshot manipulator.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">class HeapSnapshot {
    nodes: LinkedList;
    edges: LinkedList;
    constructor(profile: any);
}</code>
</pre>
</details>

### constructor

|Name   |Desc            |
|-------|----------------|
|profile|Profile to parse|

### nodes

Parsed nodes.

### edges

Parsed edges.

```javascript
const fs = require('fs');
const data = fs.readFileSync('path/to/heapsnapshot', 'utf8');
const heapSnapshot = new HeapSnapshot(data);
let totalSize = 0;
heapSnapshot.nodes.forEach(node => (totalSize += node.selfSize));
console.log(totalSize);
```

## I18n 

Simple internationalization library.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">class I18n {
    constructor(locale: string, langs: types.PlainObj&lt;any&gt;);
    set(locale: string, lang: types.PlainObj&lt;any&gt;): void;
    t(path: string | string[], data?: types.PlainObj&lt;any&gt;): string;
    locale(locale: string): void;
}</code>
</pre>
</details>

### constructor

|Name  |Desc         |
|------|-------------|
|locale|Locale code  |
|langs |Language data|

### set

Add language or append extra keys to existing language.

|Name  |Desc         |
|------|-------------|
|locale|Locale code  |
|lang  |Language data|

### locale

Set default locale.

|Name  |Desc       |
|------|-----------|
|locale|Locale code|

### t

Get translation text.

|Name  |Desc                      |
|------|--------------------------|
|path  |Path of translation to get|
|data  |Data to pass in           |
|return|Translation text          |

```javascript
const i18n = new I18n('en', {
    en: {
        welcome: 'Hello, {{name}}!',
        curTime(data) {
            return 'Current time is ' + data.time;
        }
    },
    cn: {
        welcome: '你好，{{name}}！'
    }
});
i18n.set('cn', {
    curTime(data) {
        return '当前时间是 ' + data.time;
    }
});
i18n.t('welcome', { name: 'licia' }); // -> 'Hello, licia!'
i18n.locale('cn');
i18n.t('curTime', { time: '5:47 pm' }); // -> '当前时间是 5:47 pm'
```

## JsonTransformer 

Json to json transformer.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">class JsonTransformer {
    constructor(data: any);
    set(key: string, val: any): JsonTransformer;
    get(key?: string): any;
    map(from: string, to: string, fn: types.AnyFn): JsonTransformer;
    map(from: string, fn: types.AnyFn): JsonTransformer;
    filter(from: string, to: string, fn: types.AnyFn): JsonTransformer;
    filter(from: string, fn: types.AnyFn): JsonTransformer;
    remove(keys: string | string[]): JsonTransformer;
    compute(
        from: string | string[],
        to: string,
        fn: types.AnyFn
    ): JsonTransformer;
    compute(from: string, fn: types.AnyFn): JsonTransformer;
    toString(): string;
}</code>
</pre>
</details>

### constructor

|Name   |Desc                     |
|-------|-------------------------|
|data={}|Json object to manipulate|

### set

Set object value.

|Name|Desc        |
|----|------------|
|key |Object key  |
|val |Value to set|

If key is not given, the whole source object is replaced by val.

### get

Get object value.

|Name  |Desc                           |
|------|-------------------------------|
|key   |Object key                     |
|return|Specified value or whole object|

### remove

Remove object value.

|Name|Desc                 |
|----|---------------------|
|key |Object keys to remove|

### map

Shortcut for array map.

|Name|Desc                          |
|----|------------------------------|
|from|From object path              |
|to  |Target object path            |
|fn  |Function invoked per iteration|

### filter

Shortcut for array filter.

### compute

Compute value from several object values.

|Name|Desc                            |
|----|--------------------------------|
|from|Source values                   |
|to  |Target object path              |
|fn  |Function to compute target value|

```javascript
const data = new JsonTransformer({
    books: [
        {
            title: 'Book 1',
            price: 5
        },
        {
            title: 'Book 2',
            price: 10
        }
    ],
    author: {
        lastname: 'Su',
        firstname: 'RedHood'
    }
});
data.filter('books', function(book) {
    return book.price > 5;
});
data.compute('author', function(author) {
    return author.firstname + author.lastname;
});
data.set('count', data.get('books').length);
data.get(); // -> {books: [{title: 'Book 2', price: 10}], author: 'RedHoodSu', count: 1}
```

## LinkedList 

Doubly-linked list implementation.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">namespace LinkedList {
    class Node {
        value: any;
        prev: Node | null;
        next: Node | null;
    }
}
class LinkedList {
    size: number;
    head: LinkedList.Node;
    tail: LinkedList.Node;
    push(val: any): number;
    pop(): any;
    unshift(val: any): number;
    shift(): any;
    find(fn: types.AnyFn): LinkedList.Node | void;
    delNode(node: LinkedList.Node): void;
    forEach(iterator: types.AnyFn, ctx?: any);
    toArr(): any[];
}</code>
</pre>
</details>

### size

List size.

### head.

First node.

### tail

Last node.

### push

Add an value to the end of the list.

|Name  |Desc         |
|------|-------------|
|val   |Value to push|
|return|Current size |

### pop

Get the last value of the list.

### unshift

Add an value to the head of the list.

### shift

Get the first value of the list.

### rmNode

Remove node.

### find

Find node.

|Name  |Desc                             |
|------|---------------------------------|
|fn    |Function invoked per iteration   |
|return|First value that passes predicate|

### forEach

Iterate over the list.

### toArr

Convert the list to a JavaScript array.

```javascript
const linkedList = new LinkedList();
linkedList.push(5);
linkedList.pop(); // -> 5
```

## LocalStore 

LocalStorage wrapper.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">class LocalStore extends Store {
    constructor(name: string, data?: {});
}</code>
</pre>
</details>

Extend from Store.

### constructor

|Name|Desc                  |
|----|----------------------|
|name|LocalStorage item name|
|data|Default data          |

```javascript
const store = new LocalStore('licia');
store.set('name', 'licia');
```

## Logger 

Simple logger with level filter.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">class Logger extends Emitter {
    name: string;
    formatter(type: string, argList: any[]): any[];
    constructor(name: string, level?: string | number);
    setLevel(level: string | number): Logger;
    getLevel(): number;
    trace(...args: any[]): Logger;
    debug(...args: any[]): Logger;
    info(...args: any[]): Logger;
    warn(...args: any[]): Logger;
    error(...args: any[]): Logger;
    static level: Enum;
}</code>
</pre>
</details>

### constructor

|Name       |Desc        |
|-----------|------------|
|name       |Logger name |
|level=DEBUG|Logger level|

### setLevel

Set level.

|Name |Desc        |
|-----|------------|
|level|Logger level|

### getLevel

Get current level.

### trace, debug, info, warn, error

Logging methods.

### Log Levels

TRACE, DEBUG, INFO, WARN, ERROR and SILENT.

```javascript
const logger = new Logger('licia', Logger.level.ERROR);
logger.trace('test');

// Format output.
logger.formatter = function(type, argList) {
    argList.push(new Date().getTime());

    return argList;
};

logger.on('all', function(type, argList) {
    // It's not affected by log level.
});

logger.on('debug', function(argList) {
    // Affected by log level.
});
```

## Lru 

Simple LRU cache.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">class Lru {
    constructor(max: number);
    has(key: string): boolean;
    remove(key: string): void;
    get(key: string): any;
    set(key: string, val: any): void;
    clear(): void;
}</code>
</pre>
</details>

### constructor

|Name|Desc              |
|----|------------------|
|max |Max items in cache|

### has

Check if has cache.

|Name  |Desc                |
|------|--------------------|
|key   |Cache key           |
|return|True if value exists|

### remove

Remove cache.

|Name  |Desc     |
|------|---------|
|key   |Cache key|

### get

Get cache value.

|Name  |Desc       |
|------|-----------|
|key   |Cache key  |
|return|Cache value|

### set

Set cache.

|Name  |Desc       |
|------|-----------|
|key   |Cache key  |
|val   |Cache value|

### clear

Clear cache.

```javascript
const cache = new Lru(50);
cache.set('test', 'licia');
cache.get('test'); // -> 'licia'
```

## MediaQuery 

CSS media query listener.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">class MediaQuery extends Emitter {
    constructor(query: string);
    isMatch(): boolean;
}</code>
</pre>
</details>

Extend from Emitter.

### constructor

|Name |Desc       |
|-----|-----------|
|query|Media query|

### isMatch

Return true if given media query matches.

### Events

#### match

Triggered when a media query matches.

#### unmatch

Opposite of match.

```javascript
const mediaQuery = new MediaQuery('screen and (max-width:1000px)');
mediaQuery.isMatch(); // -> false
mediaQuery.on('match', () => {
    // Do something...
});
```

## MutationObserver 

Safe MutationObserver, does nothing if MutationObserver is not supported.

```javascript
const observer = new MutationObserver(function(mutations) {
    // Do something.
});
observer.observe(document.documentElement);
observer.disconnect();
```

## PriorityQueue 

Priority queue implementation.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">class PriorityQueue {
    size: number;
    constructor(cmp?: types.AnyFn);
    clear(): void;
    enqueue(item: any): number;
    dequeue(): any;
    peek(): any;
}</code>
</pre>
</details>

### size

Queue size.

### constructor

|Name |Desc      |
|-----|----------|
|cmp  |Comparator|

### clear

Clear the queue.

### enqueue

Add an item to the queue.

|Name  |Desc        |
|------|------------|
|item  |Item to add |
|return|Current size|

### dequeue

Retrieve and remove the highest priority item of the queue.

### peek

Same as dequeue, but does not remove the item.

```javascript
const queue = new PriorityQueue(function(a, b) {
    if (a.priority > b.priority) return 1;
    if (a.priority === b.priority) return -1;
    return 0;
});
queue.enqueue({
    priority: 1000,
    value: 'apple'
});
queue.enqueue({
    priority: 500,
    value: 'orange'
});
queue.dequeue(); // -> { priority: 1000, value: 'apple' }
```

## Promise 

Lightweight Promise implementation.

[Promises spec](https://github.com/promises-aplus/promises-spec)

```javascript
function get(url) {
    return new Promise(function(resolve, reject) {
        const req = new XMLHttpRequest();
        req.open('GET', url);
        req.onload = function() {
            req.status == 200
                ? resolve(req.response)
                : reject(Error(req.statusText));
        };
        req.onerror = function() {
            reject(Error('Network Error'));
        };
        req.send();
    });
}

get('test.json').then(function(result) {
    // Do something...
});
```

## PseudoMap 

Like es6 Map, without iterators.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">const PseudoMap: typeof Map;</code>
</pre>
</details>

It supports only string keys, and uses Map if exists.

```javascript
const map = new PseudoMap();
map.set('1', 1);
map.get('1'); // -> 1
```

## Queue 

Queue data structure.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">class Queue {
    size: number;
    clear(): void;
    enqueue(item: any): number;
    dequeue(): any;
    peek(): any;
    forEach(iterator: types.AnyFn, context?: any): void;
    toArr(): any[];
}</code>
</pre>
</details>

### size

Queue size.

### clear

Clear the queue.

### enqueue

Add an item to the queue.

|Name  |Desc           |
|------|---------------|
|item  |Item to enqueue|
|return|Current size   |

### dequeue

Remove the first item of the queue.

### peek

Get the first item without removing it.

### forEach

Iterate over the queue.

|Name    |Desc                      |
|--------|--------------------------|
|iterator|Function invoked iteration|
|ctx     |Function context          |

### toArr

Convert queue to a JavaScript array.

```javascript
const queue = new Queue();

console.log(queue.size); // -> 0
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue(); // -> 2
console.log(queue.size); // -> 1
queue.peek(); // -> 3
console.log(queue.size); // -> 1
```

## QuickLru 

LRU implementation without linked list.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">class QuickLru {
    constructor(max: number);
    has(key: string): boolean;
    remove(key: string): void;
    get(key: string): any;
    set(key: string, val: any): void;
    clear(): void;
}</code>
</pre>
</details>

Inspired by the [hashlru algorithm](https://github.com/dominictarr/hashlru#algorithm).

The api is the same as Lru module.

```javascript
const cache = new QuickLru(50);
cache.set('test', 'licia');
cache.get('test'); // -> 'licia'
```

## ReduceStore 

Simplified redux like state container.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">class ReduceStore {
    constructor(reducer: types.AnyFn, initialState: any);
    subscribe(listener: types.AnyFn): types.AnyFn;
    dispatch(action: any): any;
    getState(): any;
}</code>
</pre>
</details>

### constructor

|Name        |Desc                       |
|------------|---------------------------|
|reducer     |Function returns next state|
|initialState|Initial state              |

### subscribe

Add a change listener.

|Name    |Desc                                |
|--------|------------------------------------|
|listener|Callback to invoke on every dispatch|
|return  |Function to unsubscribe             |

### dispatch

Dispatch an action.

|Name  |Desc                       |
|------|---------------------------|
|action|Object representing changes|
|return|Same action object         |

### getState

Get the current state.

```javascript
const store = new ReduceStore(function(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}, 0);

store.subscribe(function() {
    console.log(store.getState());
});

store.dispatch({ type: 'INCREMENT' }); // 1
store.dispatch({ type: 'INCREMENT' }); // 2
store.dispatch({ type: 'DECREMENT' }); // 1
```

## ResizeSensor 

Detect if element's size has changed.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">class ResizeSensor extends SingleEmitter {
    constructor(el: HTMLElement);
    destroy(): void;
}</code>
</pre>
</details>

### constructor

|Name   |Desc                   |
|-------|-----------------------|
|element|Element to monitor size|

### destroy

Stop monitoring resize event.

```javascript
const target = document.getElementById('test');
const sensor = new ResizeSensor(target);
sensor.addListener(function() {
    // Trigger if element's size changed.
});
```

## Select 

Simple wrapper of querySelectorAll to make dom selection easier.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">class Select {
    constructor(selector: string | Element | Document);
    find(selector: string): Select;
    each(fn: types.AnyFn): Select;
}</code>
</pre>
</details>

### constructor

|Name    |Desc               |
|--------|-------------------|
|selector|Dom selector string|

### find

Get desdendants of current matched elements.

|Name    |Desc               |
|--------|-------------------|
|selector|Dom selector string|

### each

Iterate over matched elements.

|Name|Desc                                |
|----|------------------------------------|
|fn  |Function to execute for each element|

```javascript
const $test = new Select('#test');
$test.find('.test').each(function(idx, element) {
    // Manipulate dom nodes
});
```

## Semaphore 

Limit simultaneous access to a resource.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">class Semaphore {
    constructor(counter?: number);
    wait(fn: () =&gt; void): void;
    signal(): void;
}</code>
</pre>
</details>

### constructor

|Name     |Desc           |
|---------|---------------|
|counter=1|Initial counter|

### wait

Wait to execute until counter is bigger than 0.

|Name|Desc               |
|----|-------------------|
|fn  |Function to execute|

### signal

Wake up one waiter if any.

```javascript
const sem = new Semaphore(10);
require('http')
    .createServer((req, res) => {
        sem.wait(function() {
            res.end('.');
            setTimeout(() => sem.signal(), 500);
        });
    })
    .listen(3000);
```

## SessionStore 

SessionStorage wrapper.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">class SessionStore extends Store {
    constructor(name: string, data?: any);
}</code>
</pre>
</details>

Extend from Store.

### constructor

|Name|Desc                    |
|----|------------------------|
|name|SessionStorage item name|
|data|Default data            |

```javascript
const store = new SessionStore('licia');
store.set('name', 'licia');
```

## SingleEmitter 

Event emitter with single event type.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">class SingleEmitter {
    addListener(listener: types.AnyFn): void;
    rmListener(listener: types.AnyFn): void;
    emit(...args: any[]): void;
    rmAllListeners(): void;
    static mixin(obj: any): void;
}</code>
</pre>
</details>

### addListener

Add listener.

### rmListener

Remove listener.

|Name    |Desc          |
|--------|--------------|
|listener|Event listener|

### rmAllListeners

Remove all listeners.

### emit

Call listeners.

|Name   |Desc                        |
|-------|----------------------------|
|...args|Arguments passed to listener|

### mixin

[static] Mixin object class methods.

|Name|Desc           |
|----|---------------|
|obj |Object to mixin|

```javascript
const event = new SingleEmitter();
event.addListener(function() {
    console.log(name);
});
event.emit('licia'); // Logs out 'licia'.
```

## Socket 

Tiny WebSocket wrapper.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">class Socket extends Emitter {
    constructor(
        url: string,
        options?: {
            protocols?: string | string[];
            reconnect?: boolean;
        }
    );
    send(message: any): void;
    close(code?: number, reason?: string): void;
    connect(): void;
}</code>
</pre>
</details>

Extend from Emitter.

### constructor

|Name   |Desc           |
|-------|---------------|
|url    |Url to connect |
|options|Connect options|

Available options:

|Name          |Desc                        |
|--------------|----------------------------|
|protocols     |Protocol string             |
|reconnect=true|Try to reconnect if possible|

### send

Send message.

|Name   |Desc           |
|-------|---------------|
|message|Message to send|

### close

Close WebSocket.

|Name  |Desc             |
|------|-----------------|
|code  |Status code      |
|reason|Reason of closing|

### connect

Connect WebSocket, called when initialized.

```javascript
const ws = new Socket('ws://localhost:8001');
ws.on('open', e => ws.send('Hello'));
```

## Stack 

Stack data structure.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">class Stack {
    size: number;
    clear(): void;
    push(item: any): number;
    pop(): any;
    peek(): any;
    forEach(iterator: types.AnyFn, context?: any): void;
    toArr(): any[];
}</code>
</pre>
</details>

### size

Stack size.

### clear

Clear the stack.

### push

Add an item to the stack.

|Name  |Desc        |
|------|------------|
|item  |Item to add |
|return|Current size|

### pop

Get the last item of the stack.

### peek

Get the last item without removing it.

### forEach

Iterate over the stack.

|Name    |Desc                      |
|--------|--------------------------|
|iterator|Function invoked iteration|
|ctx     |Function context          |

### toArr

Convert the stack to a JavaScript array.

```javascript
const stack = new Stack();

stack.push(2); // -> 1
stack.push(3); // -> 2
stack.pop(); // -> 3
```

## State 

Simple state machine.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">class State extends Emitter {
    constructor(initial: string, events: any);
    is(state: string): boolean;
    [event: string]: any;
}</code>
</pre>
</details>

Extend from Emitter.

### constructor

|Name   |Desc                  |
|-------|----------------------|
|initial|Initial state         |
|events |Events to change state|

### is

Check current state.

|Name  |Desc                                    |
|------|----------------------------------------|
|state |State to check                          |
|return|True if current state equals given value|

```javascript
const state = new State('empty', {
    load: { from: 'empty', to: 'pause' },
    play: { from: 'pause', to: 'play' },
    pause: { from: ['play', 'empty'], to: 'pause' },
    unload: { from: ['play', 'pause'], to: 'empty' }
});

state.is('empty'); // -> true
state.load();
state.is('pause'); // -> true
state.on('play', function(src) {
    console.log(src); // -> 'eustia'
});
state.on('error', function(err, event) {
    // Error handler
});
state.play('eustia');
```

## Store 

Memory storage.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">class Store extends Emitter {
    constructor(data?: {});
    set(key: string, val: any): void;
    set(values: {}): void;
    get(key: string): any;
    get(keys: string[]): {};
    remove(key: string): void;
    remove(keys: string[]): void;
    clear(): void;
    each(fn: (...args: any[]) =&gt; void): void;
}</code>
</pre>
</details>

Extend from Emitter.

### constructor

|Name|Desc        |
|----|------------|
|data|Initial data|

### set

Set value.

|Name|Desc        |
|----|------------|
|key |Value key   |
|val |Value to set|

Set values.

|Name  |Desc           |
|------|---------------|
|values|Key value pairs|

This emit a change event whenever is called.

### get

Get value.

|Name  |Desc              |
|------|------------------|
|key   |Value key         |
|return|Value of given key|

Get values.

|Name  |Desc           |
|------|---------------|
|keys  |Array of keys  |
|return|Key value pairs|

### remove

Remove value.

|Name|Desc         |
|----|-------------|
|key |Key to remove|

### clear

Clear all data.

### each

Iterate over values.

|Name|Desc                          |
|----|------------------------------|
|fn  |Function invoked per iteration|

```javascript
const store = new Store('test');
store.set('user', { name: 'licia' });
store.get('user').name; // -> 'licia'
store.clear();
store.each(function(val, key) {
    // Do something.
});
store.on('change', function(key, newVal, oldVal) {
    // It triggers whenever set is called.
});
```

## Trie 

Trie data structure.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">class Trie {
    add(word: string): void;
    remove(word: string): void;
    has(word: string): boolean;
    words(prefix: string): string[];
    clear(): void;
}</code>
</pre>
</details>

### add

Add a word to trie.

|Name|Desc       |
|----|-----------|
|word|Word to add|

### remove

Remove a word from trie.

### has

Check if word exists.

### words

Get all words with given Prefix.

|Name  |Desc                   |
|------|-----------------------|
|prefix|Word prefix            |
|return|Words with given Prefix|

### clear

Clear all words from trie.

```javascript
const trie = new Trie();
trie.add('carpet');
trie.add('car');
trie.add('cat');
trie.add('cart');
trie.has('cat'); // -> true
trie.remove('carpet');
trie.has('carpet'); // -> false
trie.words('car'); // -> ['car', 'cart']
trie.clear();
```

## Tween 

Tween engine for JavaScript animations.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">class Tween extends Emitter {
    constructor(target: any);
    to(props: any, duration?: number, ease?: string | Function): Tween;
    progress(): number;
    progress(progress: number): Tween;
    play(): Tween;
    pause(): Tween;
    paused(): boolean;
}</code>
</pre>
</details>

Extend from Emitter.

### constructor

|Name|Desc           |
|----|---------------|
|obj |Values to tween|

### to

|Name       |Desc            |
|-----------|----------------|
|destination|Final properties|
|duration   |Tween duration  |
|ease       |Easing function |

### play

Begin playing forward.

### pause

Pause the animation.

### paused

Get animation paused state.

### progress

Update or get animation progress.

|Name    |Desc                  |
|--------|----------------------|
|progress|Number between 0 and 1|

```javascript
const pos = { x: 0, y: 0 };

const tween = new Tween(pos);
tween
    .on('update', function(target) {
        console.log(target.x, target.y);
    })
    .on('end', function(target) {
        console.log(target.x, target.y); // -> 100, 100
    });
tween.to({ x: 100, y: 100 }, 1000, 'inElastic').play();
```

## Url 

Simple url manipulator.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">namespace Url {
    interface IUrl {
        protocol: string;
        auth: string;
        hostname: string;
        hash: string;
        query: any;
        port: string;
        pathname: string;
        slashes: boolean;
    }
}
class Url {
    protocol: string;
    auth: string;
    hostname: string;
    hash: string;
    query: any;
    port: string;
    pathname: string;
    slashes: boolean;
    constructor(url?: string);
    setQuery(name: string, val: string | number): Url;
    setQuery(query: types.PlainObj&lt;string | number&gt;): Url;
    rmQuery(name: string | string[]): Url;
    toString(): string;
    static parse(url: string): Url.IUrl;
    static stringify(object: Url.IUrl): string;
}</code>
</pre>
</details>

### constructor

|Name        |Desc      |
|------------|----------|
|url=location|Url string|

### setQuery

Set query value.

|Name  |Desc       |
|------|-----------|
|name  |Query name |
|val   |Query value|
|return|this       |

|Name  |Desc        |
|------|------------|
|query |query object|
|return|this        |

### rmQuery

Remove query value.

|Name  |Desc      |
|------|----------|
|name  |Query name|
|return|this      |

### parse

[static] Parse url into an object.

|Name  |Desc      |
|------|----------|
|url   |Url string|
|return|Url object|

### stringify

[static] Stringify url object into a string.

|Name  |Desc      |
|------|----------|
|url   |Url object|
|return|Url string|

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
const url = new Url('http://example.com:8080?eruda=true');
console.log(url.port); // -> '8080'
url.query.foo = 'bar';
url.rmQuery('eruda');
url.toString(); // -> 'http://example.com:8080/?foo=bar'
```

## Validator 

Object values validation.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">class Validator {
    constructor(options: types.PlainObj&lt;any&gt;);
    validate(object: any): string | boolean;
    static plugins: any;
    static addPlugin(name: string, plugin: types.AnyFn): void;
}</code>
</pre>
</details>

### constructor

|Name   |Desc                    |
|-------|------------------------|
|options|Validation configuration|

### validate

Validate object.

|Name  |Desc                            |
|------|--------------------------------|
|obj   |Object to validate              |
|return|Validation result, true means ok|

### addPlugin

[static] Add plugin.

|Name  |Desc              |
|------|------------------|
|name  |Plugin name       |
|plugin|Validation handler|

### Default Plugins

Required, number, boolean, string and regexp.

```javascript
Validator.addPlugin('custom', function(val, key, config) {
    if (typeof val === 'string' && val.length === 5) return true;

    return key + ' should be a string with length 5';
});
const validator = new Validator({
    test: {
        required: true,
        custom: true
    }
});
validator.validate({}); // -> 'test is required'
validator.validate({ test: 1 }); // -> 'test should be a string with length 5';
validator.validate({ test: 'licia' }); // -> true
```

## Wrr 

Weighted Round Robin implementation.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">class Wrr {
    size: number;
    set(val: any, weight: number): void;
    get(val: any): number | void;
    remove(val: any): void;
    clear(): void;
    next(): any;
}</code>
</pre>
</details>

### size

Pool size.

### set

Set a value to the pool. Weight is updated if value already exists.

|Name  |Desc               |
|------|-------------------|
|val   |Value to set       |
|weight|Weight of the value|

### get

Get weight of given value.

|Name  |Desc               |
|------|-------------------|
|val   |Value to get       |
|return|Weight of the value|

### remove

Remove given value.

|Name|Desc           |
|----|---------------|
|val |Value to remove|

### next

Get next value from pool.

### clear

Clear all values.

```javascript
const pool = new Wrr();
pool.set('A', 4);
pool.set('B', 8);
pool.set('C', 2);
pool.next();
pool.remove('A');
console.log(pool.size); // -> 2
```

## abbrev 

Calculate the set of unique abbreviations for a given set of strings.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function abbrev(...names: string[]): types.PlainObj&lt;string&gt;;</code>
</pre>
</details>

|Name  |Desc            |
|------|----------------|
|names |List of names   |
|return|Abbreviation map|

```javascript
abbrev('lina', 'luna');
// -> {li: 'lina', lin: 'lina', lina: 'lina', lu: 'luna', lun: 'luna', luna: 'luna'}
```

## after 

Create a function that invokes once it's called n or more times.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function after&lt;T extends types.AnyFn&gt;(n: number, fn: T): T;</code>
</pre>
</details>

|Name  |Desc                          |
|------|------------------------------|
|n     |Number of calls before invoked|
|fn    |Function to restrict          |
|return|New restricted function       |

```javascript
const fn = after(5, function() {
    // -> Only invoke after fn is called 5 times.
});
```

## ajax 

Perform an asynchronous HTTP request.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">namespace ajax {
    function get(
        url: string,
        data: string | {},
        success: types.AnyFn,
        dataType?: string
    ): XMLHttpRequest;
    function get(
        url: string,
        success: types.AnyFn,
        dataType?: string
    ): XMLHttpRequest;
    function post(
        url: string,
        data: string | {},
        success: types.AnyFn,
        dataType?: string
    ): XMLHttpRequest;
    function post(
        url: string,
        success: types.AnyFn,
        dataType?: string
    ): XMLHttpRequest;
}
function ajax(options: {
    type?: string;
    url: string;
    data?: string | {};
    dataType?: string;
    contentType?: string;
    success?: types.AnyFn;
    error?: types.AnyFn;
    complete?: types.AnyFn;
    timeout?: number;
}): XMLHttpRequest;</code>
</pre>
</details>

|Name   |Desc        |
|-------|------------|
|options|Ajax options|

Available options:

|Name                                         |Desc                       |
|---------------------------------------------|---------------------------|
|type=get                                     |Request type               |
|url                                          |Request url                |
|data                                         |Request data               |
|dataType=json                                |Response type(json, xml)   |
|contentType=application/x-www-form-urlencoded|Request header Content-Type|
|success                                      |Success callback           |
|error                                        |Error callback             |
|complete                                     |Callback after request     |
|timeout                                      |Request timeout            |

### get

Shortcut for type = GET;

### post

Shortcut for type = POST;

|Name    |Desc            |
|--------|----------------|
|url     |Request url     |
|data    |Request data    |
|success |Success callback|
|dataType|Response type   |

```javascript
ajax({
    url: 'http://example.com',
    data: { test: 'true' },
    error() {},
    success(data) {
        // ...
    },
    dataType: 'json'
});

ajax.get('http://example.com', {}, function(data) {
    // ...
});
```

## allKeys 

Retrieve all the names of object's own and inherited properties.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">namespace allKeys {
    interface IOptions {
        prototype?: boolean;
        unenumerable?: boolean;
    }
}
function allKeys(
    obj: any,
    options: { symbol: true } &amp; allKeys.IOptions
): Array&lt;string | Symbol&gt;;
function allKeys(
    obj: any,
    options?: ({ symbol: false } &amp; allKeys.IOptions) | allKeys.IOptions
): string[];</code>
</pre>
</details>

|Name   |Desc                       |
|-------|---------------------------|
|obj    |Object to query            |
|options|Options                    |
|return |Array of all property names|

Available options:

|Name              |Desc                     |
|------------------|-------------------------|
|prototype=true    |Include prototype keys   |
|unenumerable=false|Include unenumerable keys|
|symbol=false      |Include symbol keys      |

Members of Object's prototype won't be retrieved.

```javascript
const obj = Object.create({ zero: 0 });
obj.one = 1;
allKeys(obj); // -> ['zero', 'one']
```

## ansiColor 

Ansi colors.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">namespace ansiColor {
    type IFn = (str: string) =&gt; string;
}
const ansiColor: {
    black: ansiColor.IFn;
    red: ansiColor.IFn;
    green: ansiColor.IFn;
    yellow: ansiColor.IFn;
    blue: ansiColor.IFn;
    magenta: ansiColor.IFn;
    cyan: ansiColor.IFn;
    white: ansiColor.IFn;
    gray: ansiColor.IFn;
    grey: ansiColor.IFn;
    bgBlack: ansiColor.IFn;
    bgRed: ansiColor.IFn;
    bgGreen: ansiColor.IFn;
    bgYellow: ansiColor.IFn;
    bgBlue: ansiColor.IFn;
    bgMagenta: ansiColor.IFn;
    bgCyan: ansiColor.IFn;
    bgWhite: ansiColor.IFn;
    blackBright: ansiColor.IFn;
    redBright: ansiColor.IFn;
    greenBright: ansiColor.IFn;
    yellowBright: ansiColor.IFn;
    blueBright: ansiColor.IFn;
    magentaBright: ansiColor.IFn;
    cyanBright: ansiColor.IFn;
    whiteBright: ansiColor.IFn;
    bgBlackBright: ansiColor.IFn;
    bgRedBright: ansiColor.IFn;
    bgGreenBright: ansiColor.IFn;
    bgYellowBright: ansiColor.IFn;
    bgBlueBright: ansiColor.IFn;
    bgMagentaBright: ansiColor.IFn;
    bgCyanBright: ansiColor.IFn;
    bgWhiteBright: ansiColor.IFn;
};</code>
</pre>
</details>

### Available colors

black, red, green, yellow, blue, magenta, cyan, white, gray, grey

bgBlack, bgRed, bgGreen, bgYellow, bgBlue, bgMagenta, bgCyan, bgWhite,

blackBright, redBright, greenBright, yellowBright, blueBright, magentaBright, cyanBright, whiteBright

bgBlackBright, bgRedBright, bgGreenBright, bgYellowBright, bgBlueBright, bgMagentaBright, bgCyanBright, bgWhiteBright

```javascript
ansiColor.red('Warning');
```

## arrToMap 

Make an object map using array of strings.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function arrToMap&lt;T&gt;(
    arr: string[],
    val?: T
): { [key: string]: T };</code>
</pre>
</details>

|Name    |Desc            |
|--------|----------------|
|arr     |Array of strings|
|val=true|Key value       |
|return  |Object map      |

```javascript
const needPx = arrToMap([
    'column-count',
    'columns',
    'font-weight',
    'line-weight',
    'opacity',
    'z-index',
    'zoom'
]);
const key = 'column-count';
let val = '5';
if (needPx[key]) val += 'px';
console.log(val); // -> '5px'
```

## atob 

Use Buffer to emulate atob when running in node.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function atob(str: string): string;</code>
</pre>
</details>

```javascript
atob('SGVsbG8gV29ybGQ='); // -> 'Hello World'
```

## average 

Get average value of given numbers.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function average(...numbers: number[]): number;</code>
</pre>
</details>

|Name   |Desc                |
|-------|--------------------|
|numbers|Numbers to calculate|
|return |Average value       |

```javascript
average(5, 3, 1); // -> 3
```

## base64 

Basic base64 encoding and decoding.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">const base64: {
    encode(bytes: number[]): string;
    decode(str: string): number[];
};</code>
</pre>
</details>

### encode

Turn a byte array into a base64 string.

|Name  |Desc         |
|------|-------------|
|bytes |Byte array   |
|return|Base64 string|

### decode

Turn a base64 string into a byte array.

|Name  |Desc         |
|------|-------------|
|str   |Base64 string|
|return|Byte array   |

```javascript
base64.encode([168, 174, 155, 255]); // -> 'qK6b/w=='
base64.decode('qK6b/w=='); // -> [168, 174, 155, 255]
```

## before 

Create a function that invokes less than n times.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function before&lt;T extends types.AnyFn&gt;(n: number, fn: T): T;</code>
</pre>
</details>

|Name  |Desc                                            |
|------|------------------------------------------------|
|n     |Number of calls at which fn is no longer invoked|
|fn    |Function to restrict                            |
|return|New restricted function                         |

Subsequent calls to the created function return the result of the last fn invocation.

```javascript
const fn = before(5, function() {});
fn(); // Allow function to be call 4 times at last.
```

## binarySearch 

Binary search implementation.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function binarySearch(
    array: any[],
    val: any,
    cmp?: types.AnyFn
): number;</code>
</pre>
</details>

|Name  |Desc         |
|------|-------------|
|array |Sorted array |
|val   |Value to seek|
|cmp   |Comparator   |
|return|Value index  |

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

Create a function bound to a given object.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function bind(
    fn: types.AnyFn,
    ctx: any,
    ...args: any[]
): types.AnyFn;</code>
</pre>
</details>

|Name  |Desc                    |
|------|------------------------|
|fn    |Function to bind        |
|ctx   |This binding of given fn|
|args  |Optional arguments      |
|return|New bound function      |

```javascript
const fn = bind(
    function(msg) {
        console.log(this.name + ':' + msg);
    },
    { name: 'eustia' },
    'I am a utility library.'
);
fn(); // -> 'eustia: I am a utility library.'
```

## btoa 

Use Buffer to emulate btoa when running in node.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function btoa(str: string): string;</code>
</pre>
</details>

```javascript
btoa('Hello World'); // -> 'SGVsbG8gV29ybGQ='
```

## bubbleSort 

Bubble sort implementation.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function bubbleSort(arr: any[], cmp?: types.AnyFn): any[];</code>
</pre>
</details>

|Name  |Desc         |
|------|-------------|
|arr   |Array to sort|
|cmp   |Comparator   |
|return|Sorted array |

```javascript
bubbleSort([2, 1]); // -> [1, 2]
```

## bytesToStr 

Convert bytes to string.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function bytesToStr(bytes: number[], encoding?: string): string;</code>
</pre>
</details>

|Name         |Desc              |
|-------------|------------------|
|bytes        |Bytes array       |
|encoding=utf8|Encoding of string|
|return       |Result string     |

```javascript
bytesToStr([108, 105, 99, 105, 97]); // -> 'licia'
```

## bytesToWords 

Convert bytes to 32-bit words.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function bytesToWords(bytes: number[]): number[];</code>
</pre>
</details>

Useful when using CryptoJS.

|Name  |Desc      |
|------|----------|
|bytes |Byte array|
|return|Word array|

```javascript
bytesToWords([0x12, 0x34, 0x56, 0x78]); // -> [0x12345678]
```

## cacheRequire 

Cache everything in module require to speed up app load.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function cacheRequire(options?: {
    dir?: string;
    requirePath?: boolean;
    code?: boolean;
    compileCache?: boolean;
}): void;</code>
</pre>
</details>

|Name   |Desc         |
|-------|-------------|
|options|Cache options|

Available options:

|Name             |Desc                                 |
|-----------------|-------------------------------------|
|dir              |Cache dir                            |
|requirePath=true |Whether require path should be cached|
|code=false       |Whether js code should be cached     |
|compileCache=true|Whether compile cache should be used |

```javascript
cacheRequire({
    dir: 'path/to/cache/dir'
});
```

## callbackify 

Convert a function that returns a Promise to a function following the error-first callback style.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function callbackify(fn: types.AnyFn): types.AnyFn;</code>
</pre>
</details>

|Name  |Desc                                            |
|------|------------------------------------------------|
|fn    |Function that returns a Promise                 |
|return|Function following the error-fist callback style|

```javascript
function fn() {
    return new Promise(function(resolve, reject) {
        // ...
    });
}

const cbFn = callbackify(fn);

cbFn(function(err, value) {
    // ...
});
```

## camelCase 

Convert string to "camelCase".

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function camelCase(str: string): string;</code>
</pre>
</details>

|Name  |Desc              |
|------|------------------|
|str   |String to convert |
|return|Camel cased string|

```javascript
camelCase('foo-bar'); // -> fooBar
camelCase('foo bar'); // -> fooBar
camelCase('foo_bar'); // -> fooBar
camelCase('foo.bar'); // -> fooBar
```

## capitalize 

Convert the first character to upper case and the remaining to lower case.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function capitalize(str: string): string;</code>
</pre>
</details>

|Name  |Desc                |
|------|--------------------|
|str   |String to capitalize|
|return|Capitalized string  |

```javascript
capitalize('rED'); // -> Red
```

## castPath 

Cast value into a property path array.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function castPath(path: string | string[], obj?: any): string[];</code>
</pre>
</details>

|Name  |Desc               |
|------|-------------------|
|path  |Value to inspect   |
|obj   |Object to query    |
|return|Property path array|

```javascript
castPath('a.b.c'); // -> ['a', 'b', 'c']
castPath(['a']); // -> ['a']
castPath('a[0].b'); // -> ['a', '0', 'b']
castPath('a.b.c', { 'a.b.c': true }); // -> ['a.b.c']
```

## centerAlign 

Center align text in a string.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function centerAlign(
    str: string | string[],
    width?: number
): string;</code>
</pre>
</details>

|Name  |Desc                    |
|------|------------------------|
|str   |String to align         |
|width |Total width of each line|
|return|Center aligned string   |

```javascript
centerAlign('test', 8); // -> '  test'
centerAlign('test\nlines', 8); // -> '  test\n lines'
centerAlign(['test', 'lines'], 8); // -> '  test\n lines'
```

## char 

Return string representing a character whose Unicode code point is the given integer.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function char(num: number): string;</code>
</pre>
</details>

|Name  |Desc                                  |
|------|--------------------------------------|
|num   |Integer to convert                    |
|return|String representing corresponding char|

```javascript
char(65); // -> 'A'
char(97); // -> 'a'
```

## chunk 

Split array into groups the length of given size.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function chunk(arr: any[], size?: number): Array&lt;any[]&gt;;</code>
</pre>
</details>

|Name  |Desc                |
|------|--------------------|
|arr   |Array to process    |
|size=1|Length of each chunk|
|return|Chunks of given size|

```javascript
chunk([1, 2, 3, 4], 2); // -> [[1, 2], [3, 4]]
chunk([1, 2, 3, 4], 3); // -> [[1, 2, 3], [4]]
chunk([1, 2, 3, 4]); // -> [[1], [2], [3], [4]]
```

## clamp 

Clamp number within the inclusive lower and upper bounds.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function clamp(n: number, lower: number, upper: number): number;
function clamp(n: number, upper: number): number;</code>
</pre>
</details>

|Name  |Desc           |
|------|---------------|
|n     |Number to clamp|
|lower |Lower bound    |
|upper |Upper bound    |
|return|Clamped number |

```javascript
clamp(-10, -5, 5); // -> -5
clamp(10, -5, 5); // -> 5
clamp(2, -5, 5); // -> 2
clamp(10, 5); // -> 5
clamp(2, 5); // -> 2
```

## className 

Utility for conditionally joining class names.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function className(...names: any[]): string;</code>
</pre>
</details>

|Name  |Desc              |
|------|------------------|
|names |Class names       |
|return|Joined class names|

```javascript
className('a', 'b', 'c'); // -> 'a b c'
className('a', false, 'b', 0, 1, 'c'); // -> 'a b 1 c'
className('a', ['b', 'c']); // -> 'a b c'
className('a', { b: false, c: true }); // -> 'a c'
className('a', ['b', 'c', { d: true, e: false }]); // -> 'a b c d';
```

## cliHelp 

Output cli help.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">namespace cliHelp {
    interface IOption {
        name: string;
        shorthand?: string;
        desc: string;
    }
    interface ICommand {
        name: string;
        desc: string;
        usage: string | string[];
        options?: IOption[];
    }
    interface IData {
        name: string;
        usage: string | string[];
        commands: ICommand[];
    }
}
function cliHelp(data: cliHelp.IData | cliHelp.ICommand): string;</code>
</pre>
</details>

|Name  |Desc     |
|------|---------|
|data  |Help data|
|return|Cli help |

```javascript
const test = {
    name: 'test',
    desc: 'Generate test files',
    usage: ['<module-name> [options]', 'lpad --browser'],
    options: [
        {
            name: 'browser',
            shorthand: 'b',
            desc: 'True if test should run in a browser'
        }
    ]
};
const data = {
    name: 'licia',
    usage: '<command> [options]',
    commands: [test]
};

cliHelp(data);
cliHelp(test);
```

## clone 

Create a shallow-copied clone of the provided plain object.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function clone&lt;T&gt;(val: T): T;</code>
</pre>
</details>

Any nested objects or arrays will be copied by reference, not duplicated.

|Name  |Desc          |
|------|--------------|
|val   |Value to clone|
|return|Cloned value  |

```javascript
clone({ name: 'eustia' }); // -> {name: 'eustia'}
```

## cloneDeep 

Recursively clone value.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function cloneDeep&lt;T&gt;(val: T): T;</code>
</pre>
</details>

|Name  |Desc             |
|------|-----------------|
|val   |Value to clone   |
|return|Deep cloned Value|

```javascript
const obj = [{ a: 1 }, { a: 2 }];
const obj2 = cloneDeep(obj);
console.log(obj[0] === obj2[1]); // -> false
```

## cmpVersion 

Compare version strings.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function cmpVersion(v1: string, v2: string): number;</code>
</pre>
</details>

|Name  |Desc              |
|------|------------------|
|v1    |Version to compare|
|v2    |Version to compare|
|return|Comparison result |

```javascript
cmpVersion('1.1.8', '1.0.4'); // -> 1
cmpVersion('1.0.2', '1.0.2'); // -> 0
cmpVersion('2.0', '2.0.0'); // -> 0
cmpVersion('3.0.1', '3.0.0.2'); // -> 1
cmpVersion('1.1.1', '1.2.3'); // -> -1
```

## combine 

Create an array by using one array for keys and another for its values.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function combine(keys: string[], values: any[]): any;</code>
</pre>
</details>

|Name  |Desc             |
|------|-----------------|
|keys  |Keys to be used  |
|values|Values to be used|
|return|Created object   |

```javascript
combine(['a', 'b', 'c'], [1, 2, 3]); // -> {a: 1, b: 2, c: 3}
```

## compact 

Return a copy of the array with all falsy values removed.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function compact(arr: any[]): any[];</code>
</pre>
</details>

The values false, null, 0, "", undefined, and NaN are falsey.

|Name  |Desc                        |
|------|----------------------------|
|arr   |Array to compact            |
|return|New array of filtered values|

```javascript
compact([0, 1, false, 2, '', 3]); // -> [1, 2, 3]
```

## compose 

Compose a list of functions.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function compose(...fn: types.AnyFn[]): types.AnyFn;</code>
</pre>
</details>

Each function consumes the return value of the function that follows.

|Name  |Desc                |
|------|--------------------|
|...fn |Functions to compose|
|return|Composed function   |

```javascript
const welcome = compose(
    function(name) {
        return 'hi: ' + name;
    },
    function(name) {
        return name.toUpperCase() + '!';
    }
);

welcome('licia'); // -> 'hi: LICIA!'
```

## compressImg 

Compress image using canvas.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function compressImg(
    file: File | Blob | string,
    cb: types.AnyFn
): void;
function compressImg(
    file: File | Blob | string,
    options?: {
        maxWidth?: number;
        maxHeight?: number;
        width?: number;
        height?: number;
        mimeType?: string;
        quality?: number;
    },
    cb?: types.AnyFn
): void;</code>
</pre>
</details>

|Name   |Desc             |
|-------|-----------------|
|file   |Image file or url|
|options|Options          |
|cb     |Callback         |

Available options:

|Name       |Desc                            |
|-----------|--------------------------------|
|maxWidth   |Max width                       |
|maxHeight  |Max height                      |
|width      |Output image width              |
|height     |Output image height             |
|mimeType   |Mime type                       |
|quality=0.8|Image quality, range from 0 to 1|

In order to keep image ratio, height will be ignored when width is set.

And maxWith, maxHeight will be ignored if width or height is set.

```javascript
const file = new Blob([]);
compressImg(
    file,
    {
        maxWidth: 200
    },
    function(err, file) {
        // ...
    }
);
```

## concat 

Concat multiple arrays into a single array.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function concat(...args: Array&lt;any[]&gt;): any[];</code>
</pre>
</details>

|Name  |Desc              |
|------|------------------|
|...arr|Arrays to concat  |
|return|Concatenated array|

```javascript
concat([1, 2], [3], [4, 5]); // -> [1, 2, 3, 4, 5]
```

## contain 

Check if the value is present in the list.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function contain(arr: any[] | {} | string, val: any): boolean;</code>
</pre>
</details>

|Name  |Desc                                |
|------|------------------------------------|
|target|Target object                       |
|val   |Value to check                      |
|return|True if value is present in the list|

```javascript
contain([1, 2, 3], 1); // -> true
contain({ a: 1, b: 2 }, 1); // -> true
contain('abc', 'a'); // -> true
```

## convertBase 

Convert base of a number.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function convertBase(
    num: number | string,
    from: number,
    to: number
): string;</code>
</pre>
</details>

|Name  |Desc             |
|------|-----------------|
|num   |Number to convert|
|from  |Base from        |
|to    |Base to          |
|return|Converted number |

```javascript
convertBase('10', 2, 10); // -> '2'
convertBase('ff', 16, 2); // -> '11111111'
```

## convertBin 

Convert binary data type.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">namespace convertBin {
    function blobToArrBuffer(blob: any): Promise&lt;ArrayBuffer&gt;;
}
function convertBin(bin: any, type: string): any;</code>
</pre>
</details>

|Name  |Desc                  |
|------|----------------------|
|bin   |Binary data to convert|
|type  |Binary type           |
|return|Target binary         |

### Supported binary type

base64, ArrayBuffer, Array, Uint8Array, Blob(browser), Buffer(node)

You can not convert Blob to other types directly since it's an asynchronous process.

### blobToArrBuffer

Convert Blob to ArrayBuffer.

|Name  |Desc               |
|------|-------------------|
|blob  |Blob to convert    |
|return|ArrayBuffer promise|

```javascript
convertBin('qK6b/w==', 'Uint8Array'); // -> [168, 174, 155, 255]
convertBin.blobToArrBuffer(new Blob([])).then(arrBuffer => {
    // Do something...
});
```

## cookie 

Simple api for handling browser cookies.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">namespace cookie {
    interface IOptions {
        path?: string;
        expires?: number;
        domain?: string;
        secure?: boolean;
    }
    interface ICookie {
        get(key: string, options?: cookie.IOptions): string;
        set(key: string, val: string, options?: cookie.IOptions): ICookie;
        remove(key: string, options?: cookie.IOptions): ICookie;
    }
}
const cookie: cookie.ICookie;</code>
</pre>
</details>

### get

Get cookie value.

|Name  |Desc                      |
|------|--------------------------|
|key   |Cookie key                |
|return|Corresponding cookie value|

### set

Set cookie value.

|Name   |Desc          |
|-------|--------------|
|key    |Cookie key    |
|val    |Cookie value  |
|options|Cookie options|
|return |Module cookie |

### remove

Remove cookie value.

|Name   |Desc          |
|-------|--------------|
|key    |Cookie key    |
|options|Cookie options|
|return |Module cookie |

```javascript
cookie.set('a', '1', { path: '/' });
cookie.get('a'); // -> '1'
cookie.remove('a');
```

## copy 

Copy text to clipboard using document.execCommand.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function copy(text: string, cb?: types.AnyFn): void;</code>
</pre>
</details>

|Name|Desc             |
|----|-----------------|
|text|Text to copy     |
|cb  |Optional callback|

```javascript
copy('text', function(err) {
    // Handle errors.
});
```

## crc1 

CRC1 implementation.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function crc1(
    input: string | number[],
    previous?: number
): number;</code>
</pre>
</details>

|Name    |Desc                |
|--------|--------------------|
|input   |Data to calculate   |
|previous|Previous CRC1 result|
|return  |CRC1 result         |

```javascript
crc1('1234567890').toString(16); // -> 'd'
```

## crc16 

CRC16 implementation.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function crc16(
    input: string | number[],
    previous?: number
): number;</code>
</pre>
</details>

|Name    |Desc                 |
|--------|---------------------|
|input   |Data to calculate    |
|previous|Previous CRC16 result|
|return  |CRC16 result         |

```javascript
crc16('1234567890').toString(16); // -> 'c57a'
```

## crc32 

CRC32 implementation.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function crc32(
    input: string | number[],
    previous?: number
): number;</code>
</pre>
</details>

|Name    |Desc                 |
|--------|---------------------|
|input   |Data to calculate    |
|previous|Previous CRC32 result|
|return  |CRC16 result         |

```javascript
crc32('1234567890').toString(16); // -> '261daee5'
```

## crc8 

CRC8 implementation.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function crc8(
    input: string | number[],
    previous?: number
): number;</code>
</pre>
</details>

|Name    |Desc                |
|--------|--------------------|
|input   |Data to calculate   |
|previous|Previous CRC8 result|
|return  |CRC8 result         |

```javascript
crc8('1234567890').toString(16); // -> '52'
```

## create 

Create new object using given object as prototype.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function create(proto?: object): any;</code>
</pre>
</details>

|Name  |Desc                   |
|------|-----------------------|
|proto |Prototype of new object|
|return|Created object         |

```javascript
const obj = create({ a: 1 });
console.log(obj.a); // -> 1
```

## createAssigner 

Used to create extend, extendOwn and defaults.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function createAssigner(
    keysFn: types.AnyFn,
    defaults: boolean
): types.AnyFn;</code>
</pre>
</details>

|Name    |Desc                          |
|--------|------------------------------|
|keysFn  |Function to get object keys   |
|defaults|No override when set to true  |
|return  |Result function, extend...    |

## createUrl 

CreateObjectURL wrapper.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function createUrl(
    data: any,
    options?: { type?: string }
): string;</code>
</pre>
</details>

|Name   |Desc                                |
|-------|------------------------------------|
|data   |Url data                            |
|options|Used when data is not a File or Blob|
|return |Blob url                            |

```javascript
createUrl('test', { type: 'text/plain' }); // -> Blob url
createUrl(['test', 'test']);
createUrl(new Blob([]));
createUrl(new File(['test'], 'test.txt'));
```

## css 

Css parser and serializer.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">const css: {
    parse(css: string): object;
    stringify(stylesheet: object, options?: { indent?: string }): string;
};</code>
</pre>
</details>

Comments will be stripped.

### parse

Parse css into js object.

|Name  |Desc            |
|------|----------------|
|css   |Css string      |
|return|Parsed js object|

### stringify

Stringify object into css.

|Name      |Desc               |
|----------|-------------------|
|stylesheet|Object to stringify|
|options   |Stringify options  |
|return    |Css string         |

Options:

|Name       |Desc                 |
|-----------|---------------------|
|indent='  '|String used to indent|

```javascript
const stylesheet = css.parse('.name { background: #000; color: red; }');
// {type: 'stylesheet', rules: [{type: 'rule', selector: '.name', declarations: [...]}]}
css.stringify(stylesheet);
```

## cssPriority 

Calculate and compare priority of css selector/rule.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">namespace cssPriority {
    function compare(p1: number[], p2: number[]): number;
}
function cssPriority(
    selector: string,
    options?: {
        important?: boolean;
        inlineStyle?: boolean;
        position?: number;
    }
): number[];</code>
</pre>
</details>

|Name    |Type           |
|--------|---------------|
|selector|CSS selector   |
|options |Rule extra info|
|return  |Priority array |

Priority array contains five number values.

1. Important mark
2. Inline style
3. ID selector
4. Class selectors
5. Type selectors
6. Rule position

### compare

Compare priorities.

|Name  |Desc               |
|------|-------------------|
|p1    |Priority to compare|
|p2    |Priority to compare|
|return|Comparison result  |

```javascript
cssPriority('a.button > i.icon:before', {
    important: true,
    inlineStyle: false,
    position: 100
}); // -> [1, 0, 0, 2, 3, 100]
```

## cssSupports 

Check if browser supports a given CSS feature.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function cssSupports(name: string, val?: string): boolean;</code>
</pre>
</details>

|Name  |Desc              |
|------|------------------|
|name  |Css property name |
|val   |Css property value|
|return|True if supports  |

```javascript
cssSupports('display', 'flex'); // -> true
cssSupports('display', 'invalid'); // -> false
cssSupports('text-decoration-line', 'underline'); // -> true
cssSupports('grid'); // -> true
cssSupports('invalid'); // -> false
```

## curry 

Function currying.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function curry(fn: types.AnyFn): types.AnyFn;</code>
</pre>
</details>

|Name  |Desc                |
|------|--------------------|
|fn    |Function to curry   |
|return|New curried function|

```javascript
const add = curry(function(a, b) {
    return a + b;
});
const add1 = add(1);
add1(2); // -> 3
```

## dateFormat 

Simple but extremely useful date format function.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function dateFormat(
    date: Date,
    mask: string,
    utc?: boolean,
    gmt?: boolean
): string;
function dateFormat(
    mask: string,
    utc?: boolean,
    gmt?: boolean
): string;</code>
</pre>
</details>

|Name         |Desc                 |
|-------------|---------------------|
|date=new Date|Date object to format|
|mask         |Format mask          |
|utc=false    |UTC or not           |
|gmt=false    |GMT or not           |
|return       |Formatted duration   |

|Mask|Desc                                                             |
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

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function debounce&lt;T extends types.AnyFn&gt;(fn: T, wait: number): T;</code>
</pre>
</details>

|Name  |Desc                           |
|------|-------------------------------|
|fn    |Function to debounce           |
|wait  |Number of milliseconds to delay|
|return|New debounced function         |

```javascript
const calLayout = debounce(function() {}, 300);
// $(window).resize(calLayout);
```

## debug 

A tiny JavaScript debugging utility.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function debug(name: string): any;</code>
</pre>
</details>

|Name  |Desc                           |
|------|-------------------------------|
|name  |Namespace                      |
|return|Function to print decorated log|

```javascript
const d = debug('test');
d('doing lots of uninteresting work');
d.enabled = false;
```

## deburr 

Convert Latin-1 Supplement and Latin Extended-A letters to basic Latin letters and remove combining diacritical marks.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function deburr(str: string): string;</code>
</pre>
</details>

|Name  |Desc            |
|------|----------------|
|str   |String to deburr|
|return|Deburred string |

```javascript
deburr('déjà vu'); // -> 'deja vu'
```

## decodeUriComponent 

Better decodeURIComponent that does not throw if input is invalid.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function decodeUriComponent(str: string): string;</code>
</pre>
</details>

|Name  |Desc            |
|------|----------------|
|str   |String to decode|
|return|Decoded string  |

```javascript
decodeUriComponent('%%25%'); // -> '%%%'
decodeUriComponent('%E0%A4%A'); // -> '\xE0\xA4%A'
```

## defaults 

Fill in undefined properties in object with the first value present in the following list of defaults objects.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function defaults(obj: any, ...src: any[]): any;</code>
</pre>
</details>

|Name  |Desc              |
|------|------------------|
|obj   |Destination object|
|...src|Sources objects   |
|return|Destination object|

```javascript
defaults({ name: 'RedHood' }, { name: 'Unknown', age: 24 }); // -> {name: 'RedHood', age: 24}
```

## define 

Define a module, should be used along with use.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function define(
    name: string,
    requires: string[],
    method: types.AnyFn
): void;
function define(name: string, method: types.AnyFn): void;</code>
</pre>
</details>

|Name    |Desc        |
|--------|------------|
|name    |Module name |
|requires|Dependencies|
|method  |Module body |

The module won't be executed until it's used by use function.

```javascript
define('A', function() {
    return 'A';
});
define('B', ['A'], function(A) {
    return 'B' + A;
});
```

## defineProp 

Shortcut for Object.defineProperty(defineProperties).

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function defineProp&lt;T&gt;(
    obj: T,
    prop: string,
    descriptor: PropertyDescriptor
): T;
function defineProp&lt;T&gt;(
    obj: T,
    descriptor: PropertyDescriptorMap
): T;</code>
</pre>
</details>

|Name      |Desc               |
|----------|-------------------|
|obj       |Object to define   |
|prop      |Property path      |
|descriptor|Property descriptor|
|return    |Object itself      |

|Name  |Desc                |
|------|--------------------|
|obj   |Object to define    |
|prop  |Property descriptors|
|return|Object itself       |

```javascript
const obj = { b: { c: 3 }, d: 4, e: 5 };
defineProp(obj, 'a', {
    get: function() {
        return this.e * 2;
    }
});
// obj.a is equal to 10
defineProp(obj, 'b.c', {
    set: function(val) {
        // this is pointed to obj.b
        this.e = val;
    }.bind(obj)
});
obj.b.c = 2;
// obj.a is equal to 4

const obj2 = { a: 1, b: 2, c: 3 };
defineProp(obj2, {
    a: {
        get: function() {
            return this.c;
        }
    },
    b: {
        set: function(val) {
            this.c = val / 2;
        }
    }
});
// obj2.a is equal to 3
obj2.b = 4;
// obj2.a is equal to 2
```

## defined 

Return the first argument that is not undefined.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function defined(...args: any[]): any;</code>
</pre>
</details>

|Name   |Desc                  |
|-------|----------------------|
|...args|Arguments to check    |
|return |First defined argument|

```javascript
defined(false, 2, void 0, 100); // -> false
```

## delRequireCache 

Delete node.js require cache.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function delRequireCache(id: string): void;</code>
</pre>
</details>

|Name|Desc               |
|----|-------------------|
|id  |Module name or path|

```javascript
const licia = require('licia');
licia.a = 5;
delRequireCache('licia');
require('licia').a; // -> undefined
```

## delay 

Invoke function after certain milliseconds.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function delay(
    fn: types.AnyFn,
    wait: number,
    ...args: any[]
): void;</code>
</pre>
</details>

|Name   |Desc                                      |
|-------|------------------------------------------|
|fn     |Function to delay                         |
|wait   |Number of milliseconds to delay invocation|
|...args|Arguments to invoke fn with               |

```javascript
delay(
    function(text) {
        console.log(text);
    },
    1000,
    'later'
);
// -> Logs 'later' after one second
```

## delegate 

Event delegation.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">const delegate: {
    add(el: Element, type: string, selector: string, cb: types.AnyFn): void;
    remove(el: Element, type: string, selector: string, cb: types.AnyFn): void;
};</code>
</pre>
</details>

### add

Add event delegation.

|Name    |Desc          |
|--------|--------------|
|el      |Parent element|
|type    |Event type    |
|selector|Match selector|
|cb      |Event callback|

### remove

Remove event delegation.

```javascript
const container = document.getElementById('container');
function clickHandler() {
    // Do something...
}
delegate.add(container, 'click', '.children', clickHandler);
delegate.remove(container, 'click', '.children', clickHandler);
```

## deprecate 

Node.js util.deprecate with browser support.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function deprecate(fn: types.AnyFn, msg: string): types.AnyFn;</code>
</pre>
</details>

|Name  |Desc                     |
|------|-------------------------|
|fn    |Function to be deprecated|
|msg   |Warning message          |
|return|Deprecated function      |

```javascript
const fn = () => {};
const obsoleteFn = deprecate(fn, 'obsoleteFn is deprecated.');
obsoleteFn();
```

## detectBrowser 

Detect browser info using ua.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function detectBrowser(
    ua?: string
): {
    name: string;
    version: number;
};</code>
</pre>
</details>

|Name                  |Desc                              |
|----------------------|----------------------------------|
|ua=navigator.userAgent|Browser userAgent                 |
|return                |Object containing name and version|

Browsers supported: ie, chrome, edge, firefox, opera, safari, ios(mobile safari), android(android browser)

```javascript
const browser = detectBrowser();
if (browser.name === 'ie' && browser.version < 9) {
    // Do something about old IE...
}
```

## detectMocha 

Detect if mocha is running.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function detectMocha(): boolean;</code>
</pre>
</details>

```javascript
detectMocha(); // -> True if mocha is running.
```

## detectOs 

Detect operating system using ua.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function detectOs(ua?: string): string;</code>
</pre>
</details>

|Name                  |Desc                 |
|----------------------|---------------------|
|ua=navigator.userAgent|Browser userAgent    |
|return                |Operating system name|

Supported os: windows, os x, linux, ios, android, windows phone

```javascript
if (detectOs() === 'ios') {
    // Do something about ios...
}
```

## difference 

Create an array of unique array values not included in the other given array.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function difference(arr: any[], ...args: any[]): any[];</code>
</pre>
</details>

|Name   |Desc                        |
|-------|----------------------------|
|arr    |Array to inspect            |
|...args|Values to exclude           |
|return |New array of filtered values|

```javascript
difference([3, 2, 1], [4, 2]); // -> [3, 1]
```

## dotCase 

Convert string to "dotCase".

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function dotCase(str: string): string;</code>
</pre>
</details>

|Name  |Desc             |
|------|-----------------|
|str   |String to convert|
|return|Dot cased string |

```javascript
dotCase('fooBar'); // -> foo.bar
dotCase('foo bar'); // -> foo.bar
```

## download 

Trigger a file download on client side.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function download(
    data: Blob | File | string | any[],
    name: string,
    type?: string
): void;</code>
</pre>
</details>

|Name           |Desc            |
|---------------|----------------|
|data           |Data to download|
|name           |File name       |
|type=text/plain|Data type       |

```javascript
download('test', 'test.txt');
```

## durationFormat 

Simple duration format function.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function durationFormat(duration: number, mask?: string): string;</code>
</pre>
</details>

|Name           |Desc                           |
|---------------|-------------------------------|
|duration       |Duration to format, millisecond|
|mask='hh:mm:ss'|Format mask                    |
|return         |Formatted duration             |

|Mask|Desc        |
|----|------------|
|d   |Days        |
|h   |Hours       |
|m   |Minutes     |
|s   |Seconds     |
|l   |Milliseconds|

```javascript
durationFormat(12345678); // -> '03:25:45'
durationFormat(12345678, 'h:m:s:l'); // -> '3:25:45:678'
```

## each 

Iterate over elements of collection and invokes iterator for each element.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function each&lt;T&gt;(
    list: types.List&lt;T&gt;,
    iterator: types.ListIterator&lt;T, void&gt;,
    ctx?: any
): types.List&lt;T&gt;;
function each&lt;T&gt;(
    object: types.Dictionary&lt;T&gt;,
    iterator: types.ObjectIterator&lt;T, void&gt;,
    ctx?: any
): types.Collection&lt;T&gt;;</code>
</pre>
</details>

|Name    |Desc                          |
|--------|------------------------------|
|obj     |Collection to iterate over    |
|iterator|Function invoked per iteration|
|ctx     |Function context              |

```javascript
each({ a: 1, b: 2 }, function(val, key) {});
```

## easing 

Easing functions adapted from http://jqueryui.com/ .

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">const easing: {
    linear(percent: number): number;
    inQuad(percent: number): number;
    outQuad(percent: number): number;
    inOutQuad(percent: number): number;
    outInQuad(percent: number): number;
    inCubic(percent: number): number;
    outCubic(percent: number): number;
    inQuart(percent: number): number;
    outQuart(percent: number): number;
    inQuint(percent: number): number;
    outQuint(percent: number): number;
    inExpo(percent: number): number;
    outExpo(percent: number): number;
    inSine(percent: number): number;
    outSine(percent: number): number;
    inCirc(percent: number): number;
    outCirc(percent: number): number;
    inElastic(percent: number, elasticity?: number): number;
    outElastic(percent: number, elasticity?: number): number;
    inBack(percent: number): number;
    outBack(percent: number): number;
    inOutBack(percent: number): number;
    outInBack(percent: number): number;
    inBounce(percent: number): number;
    outBounce(percent: number): number;
};</code>
</pre>
</details>

|Name   |Desc                  |
|-------|----------------------|
|percent|Number between 0 and 1|
|return |Calculated number     |

```javascript
easing.linear(0.5); // -> 0.5
easing.inElastic(0.5, 500); // -> 0.03125
```

## emulateTouch 

Emulate touch events on desktop browsers.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function emulateTouch(el: Element): void;</code>
</pre>
</details>

|Name|Desc          |
|----|--------------|
|el  |Target element|

```javascript
const el = document.querySelector('#test');
emulateTouch(el);
el.addEventListener('touchstart', () => {}, false);
```

## endWith 

Check if string ends with the given target string.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function endWith(str: string, suffix: string): boolean;</code>
</pre>
</details>

|Name  |Desc                           |
|------|-------------------------------|
|str   |The string to search           |
|suffix|String suffix                  |
|return|True if string ends with target|

```javascript
endWith('ab', 'b'); // -> true
```

## escape 

Escapes a string for insertion into HTML, replacing &, <, >, ", `, and ' characters.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function escape(str: string): string;</code>
</pre>
</details>

|Name  |Desc            |
|------|----------------|
|str   |String to escape|
|return|Escaped string  |

```javascript
escape('You & Me'); // -> 'You &amp; Me'
```

## escapeJsStr 

Escape string to be a valid JavaScript string literal between quotes.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function escapeJsStr(str: string): string;</code>
</pre>
</details>

http://www.ecma-international.org/ecma-262/5.1/#sec-7.8.4

|Name  |Desc            |
|------|----------------|
|str   |String to escape|
|return|Escaped string  |

```javascript
escapeJsStr('"\n'); // -> '\\"\\\\n'
```

## escapeRegExp 

Escape special chars to be used as literals in RegExp constructors.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function escapeRegExp(str: string): string;</code>
</pre>
</details>

|Name  |Desc            |
|------|----------------|
|str   |String to escape|
|return|Escaped string  |

```javascript
escapeRegExp('[licia]'); // -> '\\[licia\\]'
```

## evalCss 

Load css into page.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function evalCss(css: string): HTMLStyleElement;</code>
</pre>
</details>

|Name  |Desc         |
|------|-------------|
|css   |Css code     |
|return|Style element|

```javascript
evalCss('body{background:#08c}');
```

## evalJs 

Execute js in given context.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function evalJs(js: string, ctx?: any): void;</code>
</pre>
</details>

|Name      |Desc           |
|----------|---------------|
|js        |JavaScript code|
|ctx=global|Context        |

```javascript
evalJs('5+2'); // -> 7
evalJs('this.a', { a: 2 }); // -> 2
```

## every 

Check if predicate return truthy for all elements.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function every&lt;T&gt;(
    object: types.List&lt;T&gt;,
    iterator?: types.ListIterator&lt;T, boolean&gt;,
    context?: any
): boolean;
function every&lt;T&gt;(
    object: types.Dictionary&lt;T&gt;,
    iterator?: types.ObjectIterator&lt;T, boolean&gt;,
    context?: any
): boolean;</code>
</pre>
</details>

|Name    |Desc                                         |
|--------|---------------------------------------------|
|object  |Collection to iterate over                   |
|iterator|Function invoked per iteration               |
|context |Predicate context                            |
|return  |True if all elements pass the predicate check|

```javascript
every([2, 4], function(val) {
    return val % 2 === 0;
}); // -> true
```

## extend 

Copy all of the properties in the source objects over to the destination object.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function extend(destination: any, ...sources: any[]): any;</code>
</pre>
</details>

|Name       |Desc              |
|-----------|------------------|
|destination|Destination object|
|...sources |Sources objects   |
|return     |Destination object|

```javascript
extend({ name: 'RedHood' }, { age: 24 }); // -> {name: 'RedHood', age: 24}
```

## extendDeep 

Recursive object extending.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function extendDeep(destination: any, ...sources: any[]): any;</code>
</pre>
</details>

|Name       |Desc              |
|-----------|------------------|
|destination|Destination object|
|...sources |Sources objects   |
|return     |Destination object|

```javascript
extendDeep(
    {
        name: 'RedHood',
        family: {
            mother: 'Jane',
            father: 'Jack'
        }
    },
    {
        family: {
            brother: 'Bruce'
        }
    }
);
// -> {name: 'RedHood', family: {mother: 'Jane', father: 'Jack', brother: 'Bruce'}}
```

## extendOwn 

Like extend, but only copies own properties over to the destination object.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function extendOwn(destination: any, ...sources: any[]): any;</code>
</pre>
</details>

|Name       |Desc              |
|-----------|------------------|
|destination|Destination object|
|...sources |Sources objects   |
|return     |Destination object|

```javascript
extendOwn({ name: 'RedHood' }, { age: 24 }); // -> {name: 'RedHood', age: 24}
```

## extractBlockCmts 

Extract block comments from source code.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function extractBlockCmts(str: string): string[];</code>
</pre>
</details>

|Name  |Desc             |
|------|-----------------|
|str   |String to extract|
|return|Block comments   |

```javascript
extractBlockCmts('\/*licia*\/'); // -> ['licia']
```

## extractUrls 

Extract urls from plain text.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function extractUrls(str: string): string[];</code>
</pre>
</details>

|Name  |Desc           |
|------|---------------|
|str   |Text to extract|
|return|Url list       |

```javascript
const str =
    '[Official site: http://eustia.liriliri.io](http://eustia.liriliri.io)';
extractUrls(str); // -> ['http://eustia.liriliri.io']
```

## fetch 

Turn XMLHttpRequest into promise like.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">namespace fetch {
    interface IResult {
        ok: boolean;
        status: number;
        statusText: string;
        url: string;
        clone(): IResult;
        text(): Promise&lt;string&gt;;
        json(): Promise&lt;any&gt;;
        xml(): Promise&lt;Document | null&gt;;
        blob(): Promise&lt;Blob&gt;;
        headers: {
            keys(): string[];
            entries(): Array&lt;string[]&gt;;
            get(name: string): string;
            has(name: string): boolean;
        };
    }
}
function fetch(
    url: string,
    options?: {
        method?: string;
        timeout?: number;
        headers?: types.PlainObj&lt;string&gt;;
        body?: any;
    }
): Promise&lt;fetch.IResult&gt;;</code>
</pre>
</details>

Note: This is not a complete fetch pollyfill.

|Name   |Desc           |
|-------|---------------|
|url    |Request url    |
|options|Request options|
|return |Request promise|

```javascript
fetch('test.json', {
    method: 'GET',
    timeout: 3000,
    headers: {},
    body: ''
})
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data);
    });
```

## fibonacci 

Calculate fibonacci number.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function fibonacci(n: number): number;</code>
</pre>
</details>

|Name  |Desc                       |
|------|---------------------------|
|n     |Index of fibonacci sequence|
|return|Expected fibonacci number  |

```javascript
fibonacci(1); // -> 1
fibonacci(3); // -> 2
```

## fileSize 

Turn bytes into human readable file size.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function fileSize(bytes: number): string;</code>
</pre>
</details>

|Name  |Desc              |
|------|------------------|
|bytes |File bytes        |
|return|Readable file size|

```javascript
fileSize(5); // -> '5'
fileSize(1500); // -> '1.46K'
fileSize(1500000); // -> '1.43M'
fileSize(1500000000); // -> '1.4G'
fileSize(1500000000000); // -> '1.36T'
```

## fileType 

Detect file type using magic number.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function fileType(
    input: Buffer | ArrayBuffer | Uint8Array
):
    | {
          ext: string;
          mime: string;
      }
    | undefined;</code>
</pre>
</details>

|Name  |Desc                          |
|------|------------------------------|
|input |File input                    |
|return|Object containing ext and mime|

### Supported file types

jpg, png, gif, webp, bmp, gz, zip, rar, pdf, exe

```javascript
const fs = require('fs');
const file = fs.readFileSync('path/to/file');
console.log(fileType(file)); // -> { ext: 'jpg', mime: 'image/jpeg' }
```

## fill 

Fill elements of array with value.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function fill(
    list: any[],
    val: any,
    start?: number,
    end?: number
): any[];</code>
</pre>
</details>

|Name          |Desc                    |
|--------------|------------------------|
|list          |Array to fill           |
|val           |Value to fill array with|
|start=0       |Start position          |
|end=arr.length|End position            |
|return        |Filled array            |

```javascript
fill([1, 2, 3], '*'); // -> ['*', '*', '*']
fill([1, 2, 3], '*', 1, 2); // -> [1, '*', 3]
```

## filter 

Iterates over elements of collection, returning an array of all the values that pass a truth test.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function filter&lt;T&gt;(
    list: types.List&lt;T&gt;,
    iterator: types.ListIterator&lt;T, boolean&gt;,
    context?: any
): T[];
function filter&lt;T&gt;(
    object: types.Dictionary&lt;T&gt;,
    iterator: types.ObjectIterator&lt;T, boolean&gt;,
    context?: any
): T[];</code>
</pre>
</details>

|Name     |Desc                                   |
|---------|---------------------------------------|
|obj      |Collection to iterate over             |
|predicate|Function invoked per iteration         |
|ctx      |Predicate context                      |
|return   |Array of all values that pass predicate|

```javascript
filter([1, 2, 3, 4, 5], function(val) {
    return val % 2 === 0;
}); // -> [2, 4]
```

## find 

Find the first value that passes a truth test in a collection.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function find&lt;T&gt;(
    object: types.List&lt;T&gt;,
    iterator: types.ListIterator&lt;T, boolean&gt;,
    context?: any
): T | undefined;
function find&lt;T&gt;(
    object: types.Dictionary&lt;T&gt;,
    iterator: types.ObjectIterator&lt;T, boolean&gt;,
    context?: any
): T | undefined;</code>
</pre>
</details>

|Name    |Desc                             |
|--------|---------------------------------|
|object  |Collection to iterate over       |
|iterator|Function invoked per iteration   |
|context |Predicate context                |
|return  |First value that passes predicate|

```javascript
find(
    [
        {
            name: 'john',
            age: 24
        },
        {
            name: 'jane',
            age: 23
        }
    ],
    function(val) {
        return val.age === 23;
    }
); // -> {name: 'jane', age: 23}
```

## findIdx 

Return the first index where the predicate truth test passes.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function findIdx(arr: any[], predicate: types.AnyFn): number;</code>
</pre>
</details>

|Name     |Desc                          |
|---------|------------------------------|
|arr      |Array to search               |
|predicate|Function invoked per iteration|
|return   |Index of matched element      |

```javascript
findIdx(
    [
        {
            name: 'john',
            age: 24
        },
        {
            name: 'jane',
            age: 23
        }
    ],
    function(val) {
        return val.age === 23;
    }
); // -> 1
```

## findKey 

Return the first key where the predicate truth test passes.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function findKey(
    obj: any,
    predicate: types.AnyFn,
    ctx?: any
): string | void;</code>
</pre>
</details>

|Name     |Desc                          |
|---------|------------------------------|
|obj      |Object to search              |
|predicate|Function invoked per iteration|
|ctx      |Predicate context             |
|return   |Key of matched element        |

```javascript
findKey({ a: 1, b: 2 }, function(val) {
    return val === 1;
}); // -> a
```

## findLastIdx 

Return the last index where the predicate truth test passes.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function findLastIdx(arr: any[], predicate: types.AnyFn): number;</code>
</pre>
</details>

|Name     |Desc                          |
|---------|------------------------------|
|arr      |Array to search               |
|predicate|Function invoked per iteration|
|return   |Last index of matched element |

```javascript
findLastIdx(
    [
        {
            name: 'john',
            age: 24
        },
        {
            name: 'jane',
            age: 23
        },
        {
            name: 'kitty',
            age: 24
        }
    ],
    function(val) {
        return val.age === 24;
    }
); // -> 2
```

## flatten 

Recursively flatten an array.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function flatten(arr: any[]): any[];</code>
</pre>
</details>

|Name  |Desc               |
|------|-------------------|
|arr   |Array to flatten   |
|return|New flattened array|

```javascript
flatten(['a', ['b', ['c']], 'd', ['e']]); // -> ['a', 'b', 'c', 'd', 'e']
```

## fnArgs 

Validate function arguments.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function fnArgs(types: string[], args: any): void;</code>
</pre>
</details>

|Name |Desc           |
|-----|---------------|
|types|Argument types |
|args |Argument object|

It throws an exception when validation failed.

```javascript
function test(a, b, c) {
    fnArgs(['number|string', '?Function', '...number'], arguments);
    // Do something.
}
test(15);
test('test', () => {});
test('test', () => {}, 5);
test(); // Throw error
test('test', 'test'); // Throw error
test('test', () => {}, 5, 'test'); // Throw error
```

## fnParams 

Get a function parameter's names.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function fnParams(fn: types.AnyFn | string): string[];</code>
</pre>
</details>

|Name  |Desc                      |
|------|--------------------------|
|fn    |Function to get parameters|
|return|Names                     |

```javascript
fnParams(function(a, b) {}); // -> ['a', 'b']
```

## fnv1a 

Simple FNV-1a implementation.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function fnv1a(str: string): number;</code>
</pre>
</details>

|Name  |Desc          |
|------|--------------|
|str   |String to hash|
|return|Hast result   |

```javascript
fnv1a('test'); // -> 2949673445
```

## format 

Format string in a printf-like format.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function format(str: string, ...values: any[]): string;</code>
</pre>
</details>

|Name     |Desc                               |
|---------|-----------------------------------|
|str      |String to format                   |
|...values|Values to replace format specifiers|
|return   |Formatted string                   |

### Format Specifiers

|Specifier|Desc                |
|---------|--------------------|
|%s       |String              |
|%d, %i   |Integer             |
|%f       |Floating point value|
|%o       |Object              |

```javascript
format('%s_%s', 'foo', 'bar'); // -> 'foo_bar'
```

## fraction 

Convert number to fraction.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function fraction(num: number): string;</code>
</pre>
</details>

|Name  |Desc                  |
|------|----------------------|
|num   |Number to convert     |
|return|Corresponding fraction|

```javascript
fraction(1.2); // -> '6/5'
```

## freeze 

Shortcut for Object.freeze.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function freeze&lt;T&gt;(obj: T): T;</code>
</pre>
</details>

Use Object.defineProperties if Object.freeze is not supported.

|Name  |Desc            |
|------|----------------|
|obj   |Object to freeze|
|return|Object passed in|

```javascript
const a = { b: 1 };
freeze(a);
a.b = 2;
console.log(a); // -> {b: 1}
```

## freezeDeep 

Recursively use Object.freeze.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function freezeDeep&lt;T&gt;(obj: T): T;</code>
</pre>
</details>

|Name  |Desc            |
|------|----------------|
|obj   |Object to freeze|
|return|Object passed in|

```javascript
const a = { b: { c: 1 } };
freezeDeep(a);
a.b.c = 2;
console.log(a); // -> {b: {c: 1}}
```

## fs 

Promised version of node.js fs module.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">const fs: {
    readFile(path: string, encoding: string): Promise&lt;string&gt;;
    readFile(path: string): Promise&lt;Buffer&gt;;
    exists(path: string): Promise&lt;boolean&gt;;
    unlink(path: string): Promise&lt;void&gt;;
    writeFile(path: string, data: string, options?: string): Promise&lt;void&gt;;
    writeFile(path: string, data: Buffer): Promise&lt;void&gt;;
    readdir(path: string): Promise&lt;string[]&gt;;
    rmdir(path: string): Promise&lt;void&gt;;
    [key: string]: any;
};</code>
</pre>
</details>

```javascript
fs.readFile('test.js')
    .then(function(data) {
        // Do something
    })
    .catch(function(err) {
        // Handle errors
    });
```

## fullscreen 

Fullscreen api wrapper.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">namespace fullscreen {
    interface IFullscreen extends Emitter {
        request(el?: Element): void;
        exit(): void;
        toggle(el?: Element): void;
        isActive(): boolean;
        getEl(): Element | null;
        isEnabled(): boolean;
    }
}
const fullscreen: fullscreen.IFullscreen;</code>
</pre>
</details>

### request

Request fullscreen.

|Name  |Desc              |
|------|------------------|
|el    |Fullscreen element|

### exit

Exit fullscreen.

### toggle

Toggle fullscreen.

|Name  |Desc              |
|------|------------------|
|el    |Fullscreen element|

### isActive

Check Whether fullscreen is active.

### getEl

Return Fullscreen element if exists.

### isEnabled

Whether you are allowed to enter fullscreen.

```javascript
fullscreen.request();
fullscreen.isActive(); // -> false, not a synchronous api
fullscreen.on('error', () => {});
fullscreen.on('change', () => {});
```

## fuzzySearch 

Simple fuzzy search.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function fuzzySearch(
    needle: string,
    haystack: any[],
    options?: {
        caseSensitive?: boolean;
        key?: string | string[];
    }
): any[];</code>
</pre>
</details>

|Name     |Desc            |
|---------|----------------|
|needle   |String to search|
|haystacks|Search list     |
|options  |Search options  |

Available options:

|Name               |Desc                                        |
|-------------------|--------------------------------------------|
|caseSensitive=false|Whether comparisons should be case sensitive|
|key                |Object key path if item is object           |

```javascript
fuzzySearch('lic', ['licia', 'll', 'lic']); // -> ['lic', 'licia']
fuzzySearch(
    'alpha-test',
    [
        {
            name: 'alpha-test-1'
        },
        {
            name: 'beta-test'
        }
    ],
    {
        key: 'name'
    }
); // -> [{ name: 'alpha-test-1' }]
```

## gcd 

Compute the greatest common divisor using Euclid's algorithm.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function gcd(a: number, b: number): number;</code>
</pre>
</details>

|Name  |Desc                   |
|------|-----------------------|
|a     |Number to calculate    |
|b     |Number to calculate    |
|return|Greatest common divisor|

```javascript
gcd(121, 44); // -> 11
```

## getPort 

Get an available TCP port.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function getPort(
    port?: number | number[],
    host?: string
): Promise&lt;number&gt;;</code>
</pre>
</details>

|Name  |Desc           |
|------|---------------|
|port  |Preferred ports|
|host  |Host address   |
|return|Available port |

If preferred ports are not available, a random port will be returned.

```javascript
getPort([3000, 3001], '127.0.0.1').then(port => {
    console.log(port);
});
```

## getProto 

Get prototype of an object.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function getProto(obj: any): any;</code>
</pre>
</details>

|Name  |Desc                                         |
|------|---------------------------------------------|
|obj   |Target object                                |
|return|Prototype of given object, null if not exists|

```javascript
const a = {};
getProto(Object.create(a)); // -> a
```

## getUrlParam 

Get url param.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function getUrlParam(
    name: string,
    url?: string
): string | undefined;</code>
</pre>
</details>

|Name        |Desc            |
|------------|----------------|
|name        |Param name      |
|url=location|Url to get param|
|return      |Param value     |

```javascript
getUrlParam('test', 'http://example.com/?test=true'); // -> 'true'
```

## golangify 

Handle errors like golang.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function golangify&lt;T, U = Error&gt;(
    fn: (...args: any[]) =&gt; Promise&lt;T&gt;
): (...args: any[]) =&gt; Promise&lt;[T | undefined, U | null]&gt;;
function golangify&lt;T, U = Error&gt;(
    p: Promise&lt;T&gt;
): Promise&lt;[T | undefined, U | null]&gt;;</code>
</pre>
</details>

|Name  |Desc                                      |
|------|------------------------------------------|
|fn    |Function that returns a Promise           |
|return|Like fn, but resolves with [result, error]|

|Name  |Desc                                      |
|------|------------------------------------------|
|p     |Promise to transform                      |
|return|Promise that resolves with [result, error]|

```javascript
(async () => {
    let fnA = golangify(async () => {
        throw Error('err');
    });
    await fnA(); // -> [undefined, Error]
    let fnB = golangify(async num => num * 2);
    await fnB(2); // -> [4, null]

    await golangify(Promise.reject(Error('err'))); // -> [undefined, Error]
    await golangify(Promise.resolve(4)); // -> [4, null]
})();
```

## h 

Create html with JavaScript.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function h(
    tag: string,
    attrs?: types.PlainObj&lt;any&gt;,
    ...child: Array&lt;string | HTMLElement&gt;
): HTMLElement;</code>
</pre>
</details>

|Name    |Desc           |
|--------|---------------|
|tag     |Tag name       |
|attrs   |Attributes     |
|...child|Children       |
|return  |Created element|

```javascript
const el = h(
    'div#test.title',
    {
        onclick: function() {},
        title: 'test'
    },
    'inner text'
);
document.body.appendChild(el);
```

## has 

Checks if key is a direct property.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function has(obj: {}, key: string): boolean;</code>
</pre>
</details>

|Name  |Desc                            |
|------|--------------------------------|
|obj   |Object to query                 |
|key   |Path to check                   |
|return|True if key is a direct property|

```javascript
has({ one: 1 }, 'one'); // -> true
```

## heapSort 

Heap sort implementation.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function heapSort(arr: any[], cmp?: types.AnyFn): any[];</code>
</pre>
</details>

|Name  |Desc         |
|------|-------------|
|arr   |Array to sort|
|cmp   |Comparator   |
|return|Sorted array |

```javascript
heapSort([2, 1]); // -> [1, 2]
```

## hex 

Hex encoding and decoding.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">const hex: {
    encode(bytes: number[]): string;
    decode(str: string): number[];
};</code>
</pre>
</details>

### encode

Turn a byte array into a hex string.

|Name  |Desc      |
|------|----------|
|bytes |Byte array|
|return|hex string|

### decode

Turn a hex string into a byte array.

|Name  |Desc      |
|------|----------|
|str   |hex string|
|return|Byte array|

```javascript
hex.encode([168, 174, 155, 255]); // -> 'a8ae9bff'
hex.decode('a8ae9bff'); // -> [168, 174, 155, 255]
```

## highlight 

Highlight code.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function highlight(
    str: string,
    lang?: string,
    style?: {
        comment?: string;
        string?: string;
        number?: string;
        keyword?: string;
        operator?: string;
    }
): string;</code>
</pre>
</details>

|Name   |Desc                        |
|-------|----------------------------|
|str    |Code string                 |
|lang=js|Language, js, html or css   |
|style  |Keyword highlight style     |
|return |Highlighted html code string|

Available styles:

comment, string, number, keyword, operator

```javascript
highlight('const a = 5;', 'js', {
    keyword: 'color:#569cd6;'
}); // -> '<span class="keyword" style="color:#569cd6;">const</span> a <span class="operator" style="color:#994500;">=</span> <span class="number" style="color:#0086b3;">5</span>;'
```

## hotkey 

Capture keyboard input to trigger given events.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">const hotkey: {
    on(key: string, listener: types.AnyFn): void;
    off(key: string, listener: types.AnyFn): void;
};</code>
</pre>
</details>

### on

Register keyboard listener.

|Name    |Desc        |
|--------|------------|
|key     |Key string  |
|listener|Key listener|

### off

Unregister keyboard listener.

```javascript
hotkey.on('k', function() {
    console.log('k is pressed');
});
function keyDown() {}
hotkey.on('shift+a, shift+b', keyDown);
hotkey.off('shift+a', keyDown);
```

## hslToRgb 

Convert hsl to rgb.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function hslToRgb(hsl: number[]): number[];</code>
</pre>
</details>

|Name  |Desc      |
|------|----------|
|hsl   |Hsl values|
|return|Rgb values|

```javascript
hslToRgb([165, 59, 50, 0.8]); // -> [52, 203, 165, 0.8]
```

## html 

Html parser and serializer.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">const html: {
    parse(html: string): any[];
    stringify(tree: any[]): string;
};</code>
</pre>
</details>

### parse

Parse html string into js object.

|Name  |Desc            |
|------|----------------|
|html  |Html string     |
|return|Parsed js object|

### stringify

Stringify object into an html string.

|Name  |Desc               |
|------|-------------------|
|tree  |Object to stringify|
|return|Html string        |

```javascript
const tree = html.parse('<div id="name">licia</div>');
// -> [{tag: 'div', attrs: {id: 'name'}, content: ['licia']}]
html.stringify(tree);
```

## identity 

Return the first argument given.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function identity&lt;T&gt;(val: T): T;</code>
</pre>
</details>

|Name  |Desc       |
|------|-----------|
|val   |Any value  |
|return|Given value|

```javascript
identity('a'); // -> 'a'
```

## idxOf 

Get the index at which the first occurrence of value.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function idxOf(arr: any[], val: any, fromIdx?: number): number;</code>
</pre>
</details>

|Name     |Desc                |
|---------|--------------------|
|arr      |Array to search     |
|val      |Value to search for |
|fromIdx=0|Index to search from|
|return   |Value index         |

```javascript
idxOf([1, 2, 1, 2], 2, 2); // -> 3
```

## indent 

Indent each line in a string.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function indent(
    str: string,
    char?: string,
    len?: number
): string;</code>
</pre>
</details>

|Name  |Desc                |
|------|--------------------|
|str   |String to indent    |
|char  |Character to prepend|
|len   |Indent length       |
|return|Indented string     |

```javascript
indent('foo\nbar', ' ', 4); // -> '    foo\n    bar'
```

## inherits 

Inherit the prototype methods from one constructor into another.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function inherits(
    Class: types.AnyFn,
    SuperClass: types.AnyFn
): void;</code>
</pre>
</details>

|Name      |Desc       |
|----------|-----------|
|Class     |Child Class|
|SuperClass|Super Class|

```javascript
function People(name) {
    this._name = name;
}
People.prototype = {
    getName: function() {
        return this._name;
    }
};
function Student(name) {
    this._name = name;
}
inherits(Student, People);
const s = new Student('RedHood');
s.getName(); // -> 'RedHood'
```

## ini 

Ini parser and serializer.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">const ini: {
    parse(ini: string): any;
    stringify(
        obj: any,
        options?: {
            section?: string;
            whitespace: boolean;
        }
    ): string;
};</code>
</pre>
</details>

### parse

Parse ini string into js object.

|Name  |Desc            |
|------|----------------|
|ini   |Ini string      |
|return|Parsed js object|

### stringify

Stringify object into an ini formatted string.

|Name   |Desc                |
|-------|--------------------|
|obj    |Object to stringify |
|options|Stringify options   |
|return |Ini formatted string|

Options:

|Name            |Desc               |
|----------------|-------------------|
|section         |Top section        |
|whitespace=false|Whitespace around =|

```javascript
const config = ini.parse(`
; This is a comment
library = licia

[user.info]
name = surunzi
alias[] = redhoodsu
alias[] = red
`); // -> {library: 'licia', user: {info: {name: 'surunzi', alias: ['redhoodsu', 'red']}}}

ini.stringify(config);
```

## insertionSort 

Insertion sort implementation.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function insertionSort(arr: any[], cmp?: types.AnyFn): any[];</code>
</pre>
</details>

|Name  |Desc         |
|------|-------------|
|arr   |Array to sort|
|cmp   |Comparator   |
|return|Sorted array |

```javascript
insertionSort([2, 1]); // -> [1, 2]
```

## intersect 

Compute the list of values that are the intersection of all the arrays.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function intersect(...arr: Array&lt;any[]&gt;): any[];</code>
</pre>
</details>

|Name  |Desc                          |
|------|------------------------------|
|...arr|Arrays to inspect             |
|return|New array of inspecting values|

```javascript
intersect([1, 2, 3, 4], [2, 1, 10], [2, 1]); // -> [1, 2]
```

## intersectRange 

Intersect two ranges.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">namespace intersectRange {
    interface IRange {
        start: number;
        end: number;
    }
}
function intersectRange(
    a: intersectRange.IRange,
    b: intersectRange.IRange
): intersectRange.IRange | void;</code>
</pre>
</details>

|Name  |Desc                 |
|------|---------------------|
|a     |Range a              |
|b     |Range b              |
|return|Intersection if exist|

```javascript
intersectRange({ start: 0, end: 12 }, { start: 11, end: 13 });
// -> {start: 11, end: 12}
intersectRange({ start: 0, end: 5 }, { start: 6, end: 7 });
// -> undefined
```

## invariant 

Facebook's invariant.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function invariant(
    condition: boolean,
    format?: string,
    a?: string,
    b?: string,
    c?: string,
    d?: string,
    e?: string,
    f?: string
): void;</code>
</pre>
</details>

[Related docs](https://github.com/zertosh/invariant)

```javascript
invariant(true, 'This will not throw');
// No errors
invariant(false, 'This will throw an error with this message');
// Error: Invariant Violation: This will throw an error with this message
```

## invert 

Create an object composed of the inverted keys and values of object.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function invert(obj: any): any;</code>
</pre>
</details>

|Name  |Desc               |
|------|-------------------|
|obj   |Object to invert   |
|return|New inverted object|

If object contains duplicate values, subsequent values overwrite property assignments of previous values.

```javascript
invert({ a: 'b', c: 'd', e: 'f' }); // -> {b: 'a', d: 'c', f: 'e'}
```

## isAbsoluteUrl 

Check if an url is absolute.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isAbsoluteUrl(url: string): boolean;</code>
</pre>
</details>

|Name  |Desc                   |
|------|-----------------------|
|url   |Url to check           |
|return|True if url is absolute|

```javascript
isAbsoluteUrl('http://www.surunzi.com'); // -> true
isAbsoluteUrl('//www.surunzi.com'); // -> false
isAbsoluteUrl('surunzi.com'); // -> false
```

## isArgs 

Check if value is classified as an arguments object.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isArgs(val: any): boolean;</code>
</pre>
</details>

|Name  |Desc                                |
|------|------------------------------------|
|val   |Value to check                      |
|return|True if value is an arguments object|

```javascript
isArgs(
    (function() {
        return arguments;
    })()
); // -> true
```

## isArr 

Check if value is an `Array` object.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isArr(val: any): boolean;</code>
</pre>
</details>

|Name  |Desc                              |
|------|----------------------------------|
|val   |Value to check                    |
|return|True if value is an `Array` object|

```javascript
isArr([]); // -> true
isArr({}); // -> false
```

## isArrBuffer 

Check if value is an ArrayBuffer.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isArrBuffer(val: any): boolean;</code>
</pre>
</details>

|Name  |Desc                           |
|------|-------------------------------|
|val   |Value to check                 |
|return|True if value is an ArrayBuffer|

```javascript
isArrBuffer(new ArrayBuffer(8)); // -> true
```

## isArrLike 

Check if value is array-like.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isArrLike(val: any): boolean;</code>
</pre>
</details>

|Name  |Desc                       |
|------|---------------------------|
|val   |Value to check             |
|return|True if value is array like|

Function returns false.

```javascript
isArrLike('test'); // -> true
isArrLike(document.body.children); // -> true;
isArrLike([1, 2, 3]); // -> true
```

## isAsyncFn 

Check if value is an async function.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isAsyncFn(val: any): boolean;</code>
</pre>
</details>

|Name  |Desc                              |
|------|----------------------------------|
|val   |Value to check                    |
|return|True if value is an async function|

```javascript
isAsyncFn(function*() {}); // -> false
isAsyncFn(function() {}); // -> false
isAsyncFn(async function() {}); // -> true
```

## isBlob 

Check if value is a Blob.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isBlob(val: any): boolean;</code>
</pre>
</details>

|Name  |Desc                   |
|------|-----------------------|
|val   |Value to check         |
|return|True if value is a Blob|

```javascript
isBlob(new Blob([])); // -> true;
isBlob([]); // -> false
```

## isBool 

Check if value is a boolean primitive.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isBool(val: any): boolean;</code>
</pre>
</details>

|Name  |Desc                      |
|------|--------------------------|
|val   |Value to check            |
|return|True if value is a boolean|

```javascript
isBool(true); // -> true
isBool(false); // -> true
isBool(1); // -> false
```

## isBrowser 

Check if running in a browser.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">const isBrowser: boolean;</code>
</pre>
</details>

```javascript
console.log(isBrowser); // -> true if running in a browser
```

## isBuffer 

Check if value is a buffer.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isBuffer(val: any): boolean;</code>
</pre>
</details>

|Name  |Desc                     |
|------|-------------------------|
|val   |The value to check       |
|return|True if value is a buffer|

```javascript
isBuffer(new Buffer(4)); // -> true
```

## isClose 

Check if values are close(almost equal) to each other.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isClose(
    a: number,
    b: number,
    relTol?: number,
    absTol?: number
): boolean;</code>
</pre>
</details>

`abs(a-b) <= max(relTol * max(abs(a), abs(b)), absTol)`

|Name       |Desc                    |
|-----------|------------------------|
|a          |Number to compare       |
|b          |Number to compare       |
|relTol=1e-9|Relative tolerance      |
|absTol=0   |Absolute tolerance      |
|return     |True if values are close|

```javascript
isClose(1, 1.0000000001); // -> true
isClose(1, 2); // -> false
isClose(1, 1.2, 0.3); // -> true
isClose(1, 1.2, 0.1, 0.3); // -> true
```

## isCyclic 

Detect cyclic object reference.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isCyclic(val: any): boolean;</code>
</pre>
</details>

|Name  |Desc                   |
|------|-----------------------|
|val   |Value to detect        |
|return|True if value is cyclic|

```javascript
isCyclic({}); // -> false
const obj = { a: 1 };
obj.b = obj;
isCyclic(obj); // -> true
```

## isDarkMode 

Detect dark mode.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isDarkMode(): boolean;</code>
</pre>
</details>

```javascript
console.log(isDarkMode()); // true if dark mode
```

## isDataUrl 

Check if a string is a valid data url.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isDataUrl(str: string): boolean;</code>
</pre>
</details>

|Name  |Desc                        |
|------|----------------------------|
|str   |String to check             |
|return|True if string is a data url|

```javascript
isDataUrl('http://eustia.liriliri.io'); // -> false
isDataUrl('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D'); // -> true
```

## isDate 

Check if value is classified as a Date object.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isDate(val: any): boolean;</code>
</pre>
</details>

|Name  |Desc                          |
|------|------------------------------|
|val   |value to check                |
|return|True if value is a Date object|

```javascript
isDate(new Date()); // -> true
```

## isDir 

Check if a path is directory.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isDir(path: string): Promise&lt;boolean&gt;;</code>
</pre>
</details>

|Name  |Desc                       |
|------|---------------------------|
|path  |Path to check              |
|return|True if path is a directory|

```javascript
isDir('/foo/bar');
```

## isEl 

Check if value is a DOM element.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isEl(val: any): boolean;</code>
</pre>
</details>

|Name  |Desc                          |
|------|------------------------------|
|val   |Value to check                |
|return|True if value is a DOM element|

```javascript
isEl(document.body); // -> true
```

## isEmail 

Loosely validate an email address.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isEmail(val: string): boolean;</code>
</pre>
</details>

|Name  |Desc                                 |
|------|-------------------------------------|
|val   |Value to check                       |
|return|True if value is an email like string|

```javascript
isEmail('surunzi@foxmail.com'); // -> true
```

## isEmpty 

Check if value is an empty object or array.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isEmpty(val: any): boolean;</code>
</pre>
</details>

|Name  |Desc                  |
|------|----------------------|
|val   |Value to check        |
|return|True if value is empty|

```javascript
isEmpty([]); // -> true
isEmpty({}); // -> true
isEmpty(''); // -> true
```

## isEqual 

Performs an optimized deep comparison between the two objects, to determine if they should be considered equal.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isEqual(val: any, other: any): boolean;</code>
</pre>
</details>

|Name  |Desc                         |
|------|-----------------------------|
|val   |Value to compare             |
|other |Other value to compare       |
|return|True if values are equivalent|

```javascript
isEqual([1, 2, 3], [1, 2, 3]); // -> true
```

## isErr 

Check if value is an error.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isErr(val: any): boolean;</code>
</pre>
</details>

|Name  |Desc                     |
|------|-------------------------|
|val   |Value to check           |
|return|True if value is an error|

```javascript
isErr(new Error()); // -> true
```

## isEven 

Check if number is even.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isEven(num: number): boolean;</code>
</pre>
</details>

|Name  |Desc                  |
|------|----------------------|
|num   |Number to check       |
|return|True if number is even|

```javascript
isEven(0); // -> true
isEven(1); // -> false
isEven(2); // -> true
```

## isFile 

Check if value is a file.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isFile(val: any): boolean;</code>
</pre>
</details>

|Name  |Desc                   |
|------|-----------------------|
|val   |Value to check         |
|return|True if value is a file|

```javascript
isFile(new File(['test'], 'test.txt', { type: 'text/plain' })); // -> true
```

## isFinite 

Check if value is a finite primitive number.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isFinite(val: any): boolean;</code>
</pre>
</details>

|Name  |Desc                            |
|------|--------------------------------|
|val   |Value to check                  |
|return|True if value is a finite number|

```javascript
isFinite(3); // -> true
isFinite(Infinity); // -> false
```

## isFn 

Check if value is a function.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isFn(val: any): boolean;</code>
</pre>
</details>

|Name  |Desc                       |
|------|---------------------------|
|val   |Value to check             |
|return|True if value is a function|

Generator function is also classified as true.

```javascript
isFn(function() {}); // -> true
isFn(function*() {}); // -> true
isFn(async function() {}); // -> true
```

## isFullWidth 

Check if character is full width.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isFullWidth(codePoint: number): boolean;</code>
</pre>
</details>

|Name     |Desc                           |
|---------|-------------------------------|
|codePoint|Unicode code point             |
|return   |True if character is full width|

```javascript
isFullWidth('a'.codePointAt(0)); // -> false
isFullWidth(','.codePointAt(0)); // -> false
isFullWidth('我'.codePointAt(0)); // -> true
isFullWidth('，'.codePointAt(0)); // -> true
```

## isGeneratorFn 

Check if value is a generator function.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isGeneratorFn(val: any): boolean;</code>
</pre>
</details>

|Name  |Desc                                 |
|------|-------------------------------------|
|val   |Value to check                       |
|return|True if value is a generator function|

```javascript
isGeneratorFn(function*() {}); // -> true
isGeneratorFn(function() {}); // -> false
```

## isHidden 

Check if element is hidden.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isHidden(
    el: Element,
    options?: {
        display?: boolean;
        visibility?: boolean;
        opacity?: boolean;
        size?: boolean;
        viewport?: boolean;
        overflow?: boolean;
    }
): boolean;</code>
</pre>
</details>

|Name   |Desc                     |
|-------|-------------------------|
|el     |Target element           |
|options|Check options            |
|return |True if element is hidden|

Available options:

|Name            |Desc                         |
|----------------|-----------------------------|
|display=true    |Check if it is displayed     |
|visibility=false|Check visibility css property|
|opacity=false   |Check opacity css property   |
|size=false      |Check width and height       |
|viewport=false  |Check if it is in viewport   |
|overflow=false  |Check if hidden in overflow  |

```javascript
isHidden(document.createElement('div')); // -> true
```

## isInt 

Checks if value is classified as a Integer.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isInt(val: any): boolean;</code>
</pre>
</details>

|Name  |Desc                                 |
|------|-------------------------------------|
|val   |Value to check                       |
|return|True if value is correctly classified|

```javascript
isInt(5); // -> true
isInt(5.1); // -> false
isInt({}); // -> false
```

## isIp 

Check if value is an IP address.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">namespace isIp {
    function v4(str: string): boolean;
    function v6(str: string): boolean;
}
function isIp(str: string): boolean;</code>
</pre>
</details>

|Name  |Desc                          |
|------|------------------------------|
|str   |String to check               |
|return|True if value is an IP address|

### v4

Check if value is an IPv4 address.

### v6

Check if value is an IPv6 address.

```javascript
isIp('192.168.191.1'); // -> true
isIp('1:2:3:4:5:6:7:8'); // -> true
isIp('test'); // -> false
isIp.v4('192.168.191.1'); // -> true
isIp.v6('1:2:3:4:5:6:7:8'); // -> true
```

## isJson 

Check if value is a valid JSON.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isJson(val: string): boolean;</code>
</pre>
</details>

It uses `JSON.parse()` and a `try... catch` block.

|Name  |Desc                         |
|------|-----------------------------|
|val   |JSON string                  |
|return|True if value is a valid JSON|

```javascript
isJson('{"a": 5}'); // -> true
isJson("{'a': 5}"); // -> false
```

## isLeapYear 

Check if a year is a leap year.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isLeapYear(year: number): boolean;</code>
</pre>
</details>

|Name  |Desc                       |
|------|---------------------------|
|year  |Year to check              |
|return|True if year is a leap year|

```javascript
isLeapYear(2000); // -> true
isLeapYear(2002); // -> false
```

## isMap 

Check if value is a Map object.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isMap(val: any): boolean;</code>
</pre>
</details>

|Name  |Desc                  |
|------|----------------------|
|val   |Value to check        |
|return|True if value is a Map|

```javascript
isMap(new Map()); // -> true
isMap(new WeakMap()); // -> false
```

## isMatch 

Check if keys and values in src are contained in obj.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isMatch(obj: any, src: any): boolean;</code>
</pre>
</details>

|Name  |Desc                              |
|------|----------------------------------|
|obj   |Object to inspect                 |
|src   |Object of property values to match|
|return|True if object is match           |

```javascript
isMatch({ a: 1, b: 2 }, { a: 1 }); // -> true
```

## isMiniProgram 

Check if running in wechat mini program.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">const isMiniProgram: boolean;</code>
</pre>
</details>

```javascript
console.log(isMiniProgram); // -> true if running in mini program.
```

## isMobile 

Check whether client is using a mobile browser using ua.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isMobile(ua?: string): boolean;</code>
</pre>
</details>

|Name                  |Desc                                 |
|----------------------|-------------------------------------|
|ua=navigator.userAgent|User agent                           |
|return                |True if ua belongs to mobile browsers|

```javascript
isMobile(navigator.userAgent);
```

## isNaN 

Check if value is an NaN.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isNaN(val: any): boolean;</code>
</pre>
</details>

|Name  |Desc                   |
|------|-----------------------|
|val   |Value to check         |
|return|True if value is an NaN|

Undefined is not an NaN, different from global isNaN function.

```javascript
isNaN(0); // -> false
isNaN(NaN); // -> true
```

## isNative 

Check if value is a native function.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isNative(val: any): boolean;</code>
</pre>
</details>

|Name  |Desc                              |
|------|----------------------------------|
|val   |Value to check                    |
|return|True if value is a native function|

```javascript
isNative(function() {}); // -> false
isNative(Math.min); // -> true
```

## isNil 

Check if value is null or undefined, the same as value == null.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isNil(val: any): boolean;</code>
</pre>
</details>

|Name  |Desc                              |
|------|----------------------------------|
|val   |Value to check                    |
|return|True if value is null or undefined|

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

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">const isNode: boolean;</code>
</pre>
</details>

```javascript
console.log(isNode); // -> true if running in node
```

## isNull 

Check if value is an Null.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isNull(val: any): boolean;</code>
</pre>
</details>

|Name  |Desc                    |
|------|------------------------|
|val   |Value to check          |
|return|True if value is an Null|

```javascript
isNull(null); // -> true
```

## isNum 

Check if value is classified as a Number primitive or object.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isNum(val: any): boolean;</code>
</pre>
</details>

|Name  |Desc                                 |
|------|-------------------------------------|
|val   |Value to check                       |
|return|True if value is correctly classified|

```javascript
isNum(5); // -> true
isNum(5.1); // -> true
isNum({}); // -> false
```

## isNumeric 

Check if value is numeric.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isNumeric(val: any): boolean;</code>
</pre>
</details>

|Name  |Desc                    |
|------|------------------------|
|val   |Value to check          |
|return|True if value is numeric|

```javascript
isNumeric(1); // -> true
isNumeric('1'); // -> true
isNumeric(Number.MAX_VALUE); // -> true
isNumeric(0xff); // -> true
isNumeric(''); // -> false
isNumeric('1.1.1'); // -> false
isNumeric(NaN); // -> false
```

## isObj 

Check if value is the language type of Object.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isObj(val: any): boolean;</code>
</pre>
</details>

|Name  |Desc                      |
|------|--------------------------|
|val   |Value to check            |
|return|True if value is an object|

[Language Spec](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)

```javascript
isObj({}); // -> true
isObj([]); // -> true
```

## isOdd 

Check if number is odd.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isOdd(num: number): boolean;</code>
</pre>
</details>

|Name  |Desc                 |
|------|---------------------|
|num   |Number to check      |
|return|True if number is odd|

```javascript
isOdd(0); // -> false
isOdd(1); // -> true
isOdd(2); // -> false
```

## isPlainObj 

Check if value is an object created by Object constructor.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isPlainObj(val: any): boolean;</code>
</pre>
</details>

|Name  |Desc                           |
|------|-------------------------------|
|val   |Value to check                 |
|return|True if value is a plain object|

```javascript
isPlainObj({}); // -> true
isPlainObj([]); // -> false
isPlainObj(function() {}); // -> false
```

## isPortFree 

Check if a TCP port is free.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isPortFree(
    port: number,
    host?: string
): Promise&lt;boolean&gt;;</code>
</pre>
</details>

|Name  |Desc                      |
|------|--------------------------|
|port  |TCP port                  |
|host  |Host address              |
|return|True if given port is free|

```javascript
isPortFree(3000).then(isFree => {
    // Do something.
});
```

## isPrime 

Check if the provided integer is a prime number.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isPrime(num: number): boolean;</code>
</pre>
</details>

|Name  |Desc                            |
|------|--------------------------------|
|num   |Number to check                 |
|return|True if number is a prime number|

```javascript
isPrime(11); // -> true
isPrime(8); // -> false
```

## isPrimitive 

Check if value is string, number, boolean or null.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isPrimitive(val: any): boolean;</code>
</pre>
</details>

|Name  |Desc                        |
|------|----------------------------|
|val   |Value to check              |
|return|True if value is a primitive|

```javascript
isPrimitive(5); // -> true
isPrimitive('abc'); // -> true
isPrimitive(false); // -> true
```

## isPromise 

Check if value looks like a promise.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isPromise(val: any): boolean;</code>
</pre>
</details>

|Name  |Desc                              |
|------|----------------------------------|
|val   |Value to check                    |
|return|True if value looks like a promise|

```javascript
isPromise(new Promise(function() {})); // -> true
isPromise({}); // -> false
```

## isRegExp 

Check if value is a regular expression.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isRegExp(val: any): boolean;</code>
</pre>
</details>

|Name  |Desc                                 |
|------|-------------------------------------|
|val   |Value to check                       |
|return|True if value is a regular expression|

```javascript
isRegExp(/a/); // -> true
```

## isRelative 

Check if path appears to be relative.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isRelative(path: string): boolean;</code>
</pre>
</details>

|Name  |Desc                               |
|------|-----------------------------------|
|path  |Path to check                      |
|return|True if path appears to be relative|

```javascript
isRelative('README.md'); // -> true
```

## isRetina 

Determine if running on a high DPR device or not.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">const isRetina: boolean;</code>
</pre>
</details>

```javascript
console.log(isRetina); // -> true if high DPR
```

## isRunning 

Check if process is running.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isRunning(pid: number): boolean;</code>
</pre>
</details>

|Name  |Desc                      |
|------|--------------------------|
|pid   |Process id                |
|return|True if process is running|

```javascript
isRunning(123456); // true if running
```

## isSet 

Check if value is a Set object.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isSet(val: any): boolean;</code>
</pre>
</details>

|Name  |Desc                  |
|------|----------------------|
|val   |Value to check        |
|return|True if value is a Set|

```javascript
isSet(new Set()); // -> true
isSet(new WeakSet()); // -> false
```

## isSorted 

Check if an array is sorted.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isSorted(arr: any[], cmp?: types.AnyFn): boolean;</code>
</pre>
</details>

|Name  |Desc                   |
|------|-----------------------|
|arr   |Array to check         |
|cmp   |Comparator             |
|return|True if array is sorted|

```javascript
isSorted([1, 2, 3]); // -> true
isSorted([3, 2, 1]); // -> false
```

## isStr 

Check if value is a string primitive.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isStr(val: any): boolean;</code>
</pre>
</details>

|Name  |Desc                               |
|------|-----------------------------------|
|val   |Value to check                     |
|return|True if value is a string primitive|

```javascript
isStr('licia'); // -> true
```

## isStream 

Check if value is a Node.js stream.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isStream(val: any): boolean;</code>
</pre>
</details>

|Name  |Desc                             |
|------|---------------------------------|
|val   |Value to check                   |
|return|True if value is a Node.js stream|

```javascript
const stream = require('stream');

isStream(new stream.Stream()); // -> true
```

## isSymbol 

Check if value is a symbol.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isSymbol(val: any): boolean;</code>
</pre>
</details>

|Name  |Desc                     |
|------|-------------------------|
|val   |Value to check           |
|return|True if value is a symbol|

```javascript
isSymbol(Symbol('test')); // -> true
```

## isTypedArr 

Check if value is a typed array.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isTypedArr(val: any): boolean;</code>
</pre>
</details>

|Name  |Desc                          |
|------|------------------------------|
|val   |Value to check                |
|return|True if value is a typed array|

```javascript
isTypedArr([]); // -> false
isTypedArr(new Uint8Array(8)); // -> true
```

## isUndef 

Check if value is undefined.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isUndef(val: any): boolean;</code>
</pre>
</details>

|Name  |Desc                      |
|------|--------------------------|
|val   |Value to check            |
|return|True if value is undefined|

```javascript
isUndef(void 0); // -> true
isUndef(null); // -> false
```

## isUrl 

Loosely validate an url.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isUrl(val: string): boolean;</code>
</pre>
</details>

|Name  |Desc                               |
|------|-----------------------------------|
|val   |Value to check                     |
|return|True if value is an url like string|

```javascript
isUrl('http://www.example.com?foo=bar&param=test'); // -> true
```

## isWeakMap 

Check if value is a WeakMap object.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isWeakMap(val: any): boolean;</code>
</pre>
</details>

|Name  |Desc                      |
|------|--------------------------|
|val   |Value to check            |
|return|True if value is a WeakMap|

```javascript
isWeakMap(new Map()); // -> false
isWeakMap(new WeakMap()); // -> true
```

## isWeakSet 

Check if value is a WeakSet object.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function isWeakSet(val: any): boolean;</code>
</pre>
</details>

|Name  |Desc                      |
|------|--------------------------|
|val   |Value to check            |
|return|True if value is a WeakSet|

```javascript
isWeakSet(new Set()); // -> false
isWeakSet(new WeakSet()); // -> true
```

## isWindows 

Check if platform is windows.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">const isWindows: boolean;</code>
</pre>
</details>

```javascript
console.log(isWindows); // -> true if running on windows
```

## jsonClone 

Use JSON parse and stringify to clone object.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function jsonClone&lt;T&gt;(val: T): T;</code>
</pre>
</details>

|Name  |Desc          |
|------|--------------|
|val   |Value to clone|
|return|Cloned value  |

```javascript
jsonClone({ name: 'licia' }); // -> { name: 'licia' }
```

## jsonp 

A simple jsonp implementation.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function jsonp(options: {
    url: string;
    data?: any;
    success?: types.AnyFn;
    param?: string;
    name?: string;
    error?: types.AnyFn;
    complete?: types.AnyFn;
    timeout?: number;
}): void;</code>
</pre>
</details>

|Name   |Desc         |
|-------|-------------|
|options|Jsonp Options|

Available options:

|Name          |Desc                  |
|--------------|----------------------|
|url           |Request url           |
|data          |Request data          |
|success       |Success callback      |
|param=callback|Callback param        |
|name          |Callback name         |
|error         |Error callback        |
|complete      |Callback after request|
|timeout       |Request timeout       |

```javascript
jsonp({
    url: 'http://example.com',
    data: { test: 'true' },
    success: function(data) {
        // ...
    }
});
```

## kebabCase 

Convert string to "kebabCase".

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function kebabCase(str: string): string;</code>
</pre>
</details>

|Name  |Desc              |
|------|------------------|
|str   |String to convert |
|return|Kebab cased string|

```javascript
kebabCase('fooBar'); // -> foo-bar
kebabCase('foo bar'); // -> foo-bar
kebabCase('foo_bar'); // -> foo-bar
kebabCase('foo.bar'); // -> foo-bar
```

## keyCode 

Key codes and key names conversion.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function keyCode(name: string): number;
function keyCode(code: number): string;</code>
</pre>
</details>

Get key code's name.

|Name  |Desc                  |
|------|----------------------|
|code  |Key code              |
|return|Corresponding key name|

Get key name's code.

|Name  |Desc                  |
|------|----------------------|
|name  |Key name              |
|return|Corresponding key code|

```javascript
keyCode(13); // -> 'enter'
keyCode('enter'); // -> 13
```

## keys 

Create an array of the own enumerable property names of object.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function keys(obj: any): string[];</code>
</pre>
</details>

|Name  |Desc                   |
|------|-----------------------|
|obj   |Object to query        |
|return|Array of property names|

```javascript
keys({ a: 1 }); // -> ['a']
```

## kill 

Kill process.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function kill(pid: number): void;</code>
</pre>
</details>

|Name|Desc|
|----|----|
|pid |Process ID|

```javascript
kill(9420);
```

## last 

Get the last element of array.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function last(arr: any[]): any;</code>
</pre>
</details>

|Name  |Desc                     |
|------|-------------------------|
|arr   |The array to query       |
|return|The last element of array|

```javascript
last([1, 2]); // -> 2
```

## lazyImport 

Import modules lazily, Proxy is used.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function lazyImport&lt;T&gt;(
    importFn: (moduleId: string) =&gt; T,
    dirname?: string
): (moduleId: string) =&gt; T;</code>
</pre>
</details>

|Name    |Desc                             |
|--------|---------------------------------|
|importFn|Actual function to require module|
|dirname |Current file folder              |
|return  |New function to require module   |

```javascript
const r = lazyImport(require);

const _ = r('underscore');

_.isNumber(5);
```

## lazyRequire 

Require modules lazily.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function lazyRequire&lt;T&gt;(
    requireFn: (moduleId: string) =&gt; T
): (moduleId: string) =&gt; T;</code>
</pre>
</details>

```javascript
const r = lazyRequire(require);

const _ = r('underscore');

// underscore is required only when _ is called.
_().isNumber(5);
```

## levenshtein 

Levenshtein distance implementation.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function levenshtein(a: string, b: string): number;</code>
</pre>
</details>

|Name  |Desc                                |
|------|------------------------------------|
|a     |First string                        |
|b     |Second string                       |
|return|Levenshtein distance between a and b|

```javascript
levenshtein('cat', 'cake'); // -> 2
```

## linkify 

Hyperlink urls in a string.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function linkify(str: string, hyperlink?: types.AnyFn): string;</code>
</pre>
</details>

|Name     |Desc                     |
|---------|-------------------------|
|str      |String to hyperlink      |
|hyperlink|Function to hyperlink url|
|return   |Result string            |

```javascript
const str = 'Official site: http://eustia.liriliri.io';
linkify(str); // -> 'Official site: <a href="http://eustia.liriliri.io">http://eustia.liriliri.io</a>'
linkify(str, function(url) {
    return '<a href="' + url + '" target="_blank">' + url + '</a>';
});
```

## loadCss 

Inject link tag into page with given href value.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function loadCss(src: string, cb?: types.AnyFn): void;</code>
</pre>
</details>

|Name|Desc           |
|----|---------------|
|src |Style source   |
|cb  |Onload callback|

```javascript
loadCss('style.css', function(isLoaded) {
    // Do something...
});
```

## loadImg 

Load image with given src.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function loadImg(src: string, cb?: types.AnyFn): void;</code>
</pre>
</details>

|Name|Desc           |
|----|---------------|
|src |Image source   |
|cb  |Onload callback|

```javascript
loadImg('http://eustia.liriliri.io/img.jpg', function(err, img) {
    console.log(img.width, img.height);
});
```

## loadJs 

Inject script tag into page with given src value.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function loadJs(src: string, cb?: types.AnyFn): void;</code>
</pre>
</details>

|Name|Desc           |
|----|---------------|
|src |Script source  |
|cb  |Onload callback|

```javascript
loadJs('main.js', function(isLoaded) {
    // Do something...
});
```

## longest 

Get the longest item in an array.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function longest(arr: string[]): string;</code>
</pre>
</details>

|Name  |Desc            |
|------|----------------|
|arr   |Array to inspect|
|return|Longest item    |

```javascript
longest(['a', 'abcde', 'abc']); // -> 'abcde'
```

## lowerCase 

Convert string to lower case.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function lowerCase(str: string): string;</code>
</pre>
</details>

|Name  |Desc              |
|------|------------------|
|str   |String to convert |
|return|Lower cased string|

```javascript
lowerCase('TEST'); // -> 'test'
```

## lpad 

Pad string on the left side if it's shorter than length.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function lpad(str: string, len: number, chars?: string): string;</code>
</pre>
</details>

|Name  |Desc                  |
|------|----------------------|
|str   |String to pad         |
|len   |Padding length        |
|chars |String used as padding|
|return|Result string         |

```javascript
lpad('a', 5); // -> '    a'
lpad('a', 5, '-'); // -> '----a'
lpad('abc', 3, '-'); // -> 'abc'
lpad('abc', 5, 'ab'); // -> 'ababc'
```

## ltrim 

Remove chars or white-spaces from beginning of string.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function ltrim(str: string, chars?: string | string[]): string;</code>
</pre>
</details>

|Name  |Desc              |
|------|------------------|
|str   |String to trim    |
|chars |Characters to trim|
|return|Trimmed string    |

```javascript
ltrim(' abc  '); // -> 'abc  '
ltrim('_abc_', '_'); // -> 'abc_'
ltrim('_abc_', ['a', '_']); // -> 'bc_'
```

## map 

Create an array of values by running each element in collection through iteratee.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function map&lt;T, TResult&gt;(
    list: types.List&lt;T&gt;,
    iterator: types.ListIterator&lt;T, TResult&gt;,
    context?: any
): TResult[];
function map&lt;T, TResult&gt;(
    object: types.Dictionary&lt;T&gt;,
    iterator: types.ObjectIterator&lt;T, TResult&gt;,
    context?: any
): TResult[];</code>
</pre>
</details>

|Name    |Desc                          |
|--------|------------------------------|
|object  |Collection to iterate over    |
|iterator|Function invoked per iteration|
|context |Function context              |
|return  |New mapped array              |

```javascript
map([4, 8], function(n) {
    return n * n;
}); // -> [16, 64]
```

## mapObj 

Map for objects.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function mapObj&lt;T, TResult&gt;(
    object: types.Dictionary&lt;T&gt;,
    iterator: types.ObjectIterator&lt;T, TResult&gt;,
    context?: any
): types.Dictionary&lt;TResult&gt;;</code>
</pre>
</details>

|Name    |Desc                          |
|--------|------------------------------|
|object  |Object to iterate over        |
|iterator|Function invoked per iteration|
|context |Function context              |
|return  |New mapped object             |

```javascript
mapObj({ a: 1, b: 2 }, function(val, key) {
    return val + 1;
}); // -> {a: 2, b: 3}
```

## matcher 

Return a predicate function that checks if attrs are contained in an object.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function matcher(attrs: any): types.AnyFn;</code>
</pre>
</details>

|Name  |Desc                              |
|------|----------------------------------|
|attrs |Object of property values to match|
|return|New predicate function            |

```javascript
const filter = require('licia/filter');

const objects = [
    { a: 1, b: 2, c: 3 },
    { a: 4, b: 5, c: 6 }
];
filter(objects, matcher({ a: 4, c: 6 })); // -> [{a: 4, b: 5, c: 6}]
```

## max 

Get maximum value of given numbers.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function max(...num: number[]): number;</code>
</pre>
</details>

|Name  |Desc                |
|------|--------------------|
|...num|Numbers to calculate|
|return|Maximum value       |

```javascript
max(2.3, 1, 4.5, 2); // 4.5
```

## md5 

MD5 implementation.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function md5(msg: string | number[]): string;</code>
</pre>
</details>

|Name  |Desc              |
|------|------------------|
|msg   |Message to encrypt|
|return|MD5 hash          |

```javascript
md5('licia'); // -> 'e59f337d85e9a467f1783fab282a41d0'
```

## memStorage 

Memory-backed implementation of the Web Storage API.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">const memStorage: typeof window.localStorage;</code>
</pre>
</details>

A replacement for environments where localStorage or sessionStorage is not available.

```javascript
const localStorage = window.localStorage || memStorage;
localStorage.setItem('test', 'licia');
```

## memoize 

Memoize a given function by caching the computed result.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function memoize(
    fn: types.AnyFn,
    hashFn?: types.AnyFn
): types.AnyFn;</code>
</pre>
</details>

|Name  |Desc                                |
|------|------------------------------------|
|fn    |Function to have its output memoized|
|hashFn|Function to create cache key        |
|return|New memoized function               |

```javascript
const fibonacci = memoize(function(n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
});
```

## mergeArr 

Merge the contents of arrays together into the first array.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function mergeArr&lt;T, U&gt;(
    first: ArrayLike&lt;T&gt;,
    ...arrays: ArrayLike&lt;U&gt;[]
): ArrayLike&lt;T | U&gt;;</code>
</pre>
</details>

|Name  |Desc                                |
|------|------------------------------------|
|first |Array to merge                      |
|arrays|Arrays to merge into the first array|
|return|First array                         |

```javascript
const a = [1, 2];
mergeArr(a, [3, 4], [5, 6]);
console.log(a); // -> [1, 2, 3, 4, 5, 6]
```

## mergeSort 

Merge sort implementation.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function mergeSort(arr: any[], cmp?: types.AnyFn): any[];</code>
</pre>
</details>

Note: It's not an "in-place" sort.

|Name  |Desc         |
|------|-------------|
|arr   |Array to sort|
|cmp   |Comparator   |
|return|Sorted array |

```javascript
mergeSort([2, 1]); // -> [1, 2]
```

## meta 

Document meta manipulation, turn name and content into key value pairs.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">namespace meta {
    function remove(nameList: string | string[]): void;
}
function meta(): {};
function meta(key: string): string;
function meta(keys: string[]): {};
function meta(key, value): void;
function meta(pairs: {}): void;</code>
</pre>
</details>

Get meta content with given name. If name is omitted, all pairs will be return.

|Name  |Desc        |
|------|------------|
|name  |Meta name   |
|return|Meta content|

Set meta content.

|Name   |Desc        |
|-------|------------|
|name   |Meta name   |
|content|Meta content|

|Name |Desc                        |
|-----|----------------------------|
|metas|Object of name content pairs|

### remove

Remove metas.

|Name|Desc     |
|----|---------|
|name|Meta name|

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

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function methods(obj: any): string[];</code>
</pre>
</details>

|Name  |Desc                    |
|------|------------------------|
|obj   |Object to check         |
|return|Function names in object|

```javascript
methods(console); // -> ['Console', 'assert', 'dir', ...]
```

## mime 

Common mime types.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function mime(name: string): string | undefined;</code>
</pre>
</details>

|Name  |Desc     |
|------|---------|
|name  |Extension|
|return|Mime type|

|Name  |Desc     |
|------|---------|
|name  |Mime type|
|return|Extension|

It contains only the most common file types.

```javascript
mime('jpg'); // -> 'image/jpeg'
mime('bmp'); // -> 'image/bmp'
mime('video/mp4'); // -> 'mp4'
mime('test'); // -> undefined
```

## min 

Get minimum value of given numbers.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function min(...num: number[]): number;</code>
</pre>
</details>

|Name  |Desc                |
|------|--------------------|
|...num|Numbers to calculate|
|return|Minimum value       |

```javascript
min(2.3, 1, 4.5, 2); // 1
```

## mkdir 

Recursively create directories.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">namespace mkdir {
    function sync(dir: string, mode?: number): void;
}
function mkdir(
    dir: string,
    mode?: number,
    cb?: types.AnyFn
): void;
function mkdir(dir: string, cb?: types.AnyFn): void;</code>
</pre>
</details>

|Name     |Desc               |
|---------|-------------------|
|dir      |Directory to create|
|mode=0777|Directory mode     |
|cb       |Callback           |

### sync

Synchronous version.

```javascript
mkdir('/tmp/foo/bar/baz', function(err) {
    if (err) console.log(err);
    else console.log('Done');
});
mkdir.sync('/tmp/foo2/bar/baz');
```

## moment 

Tiny moment.js like implementation.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">namespace moment {
    class M {
        constructor(value: string | Date);
        format(mask: string): string;
        isValid(): boolean;
        isLeapYear(): boolean;
        isSame(that: M): boolean;
        valueOf(): number;
        isBefore(that: M): boolean;
        isAfter(that: M): boolean;
        year(): number;
        year(number): M;
        month(): number;
        month(number): M;
        date(): number;
        date(number): M;
        hour(): number;
        hour(number): M;
        minute(): number;
        minute(number): M;
        second(): number;
        second(number): M;
        millisecond(): number;
        millisecond(number): M;
        unix(): number;
        clone(): M;
        toDate(): Date;
        toArray(): number[];
        toJSON(): string;
        toISOString(): string;
        toObject(): any;
        toString(): string;
        set(unit: string, num: number): M;
        startOf(unit: string): M;
        endOf(unit: string): M;
        daysInMonth(): number;
        add(num: number, unit: string): M;
        subtract(num: number, unit: string): M;
        diff(input: M | string | Date, unit: string, asFloat: boolean): number;
    }
}
function moment(value: string | Date): moment.M;</code>
</pre>
</details>

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

## morphDom 

Morph a dom tree to match a target dom tree.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function morphDom(from: Node, to: Node | string): Node;</code>
</pre>
</details>

|Name  |Type              |
|------|------------------|
|from  |Node to morph     |
|to    |Node to be morphed|
|return|Morphed node      |

```javascript
const el1 = document.createElement('div');
el1.className = 'test';
const el2 = document.createElement('div');
el2.className = 'licia';
morphDom(el1, el2);
console.log(el1.className); // -> 'licia'
```

## morse 

Morse code encoding and decoding.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">const morse: {
    encode(txt: string): string;
    decode(morse: string): string;
};</code>
</pre>
</details>

### encode

Turn text into Morse code.

|Name  |Desc          |
|------|--------------|
|txt   |Text to encode|
|return|Morse code    |

### decode

Decode Morse code into text.

|Name  |Desc          |
|------|--------------|
|morse |Morse code    |
|return|Decoded string|

```javascript
const str = morse.encode('Hello, world.');
// -> '.... . .-.. .-.. --- --..-- ....... .-- --- .-. .-.. -.. .-.-.-'
morse.decode(str); // -> 'Hello, world.'
```

## ms 

Convert time string formats to milliseconds.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function ms(str: string): number;
function ms(num: number): string;</code>
</pre>
</details>

Turn time string into milliseconds.

|Name  |Desc         |
|------|-------------|
|str   |String format|
|return|Milliseconds |

Turn milliseconds into time string.

|Name  |Desc         |
|------|-------------|
|num   |Milliseconds |
|return|String format|

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

## naturalSort 

Sort values in natural order.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function naturalSort&lt;T extends any[]&gt;(arr: T): T;</code>
</pre>
</details>

|Name  |Desc           |
|------|---------------|
|arr   |Array of values|
|return|Sorted array   |

```javascript
naturalSort(['img12', 'img11', '$img', '_img', '1', '2', '12']);
// -> ['1', '2', '12', '$img', 'img11', 'img12', '_img']
naturalSort([2, '1', 13]); // -> ['1', 2, 13]
```

## negate 

Create a function that negates the result of the predicate function.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function negate&lt;T extends types.AnyFn&gt;(predicate: T): T;</code>
</pre>
</details>

|Name     |Desc               |
|---------|-------------------|
|predicate|Predicate to negate|
|return   |New function       |

```javascript
function even(n) {
    return n % 2 === 0;
}
// filter([1, 2, 3, 4, 5, 6], negate(even)); -> [1, 3, 5]
```

## nextTick 

Next tick for both node and browser.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function nextTick(cb: types.AnyFn): void;</code>
</pre>
</details>

|Name|Desc            |
|----|----------------|
|cb  |Function to call|

Use process.nextTick if available.

Otherwise setImmediate or setTimeout is used as fallback.

```javascript
nextTick(function() {
    // Do something...
});
```

## noop 

A no-operation function.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function noop(): void;</code>
</pre>
</details>

```javascript
noop(); // Does nothing
```

## normalizeHeader 

Normalize http header name.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function normalizeHeader(header: string): string;</code>
</pre>
</details>

|Name  |Desc               |
|------|-------------------|
|header|Header to normalize|
|return|Normalized header  |

```javascript
normalizeHeader('content-type'); // -> 'Content-Type'
normalizeHeader('etag'); // -> 'ETag'
```

## normalizePath 

Normalize file path slashes.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function normalizePath(path: string): string;</code>
</pre>
</details>

|Name  |Desc             |
|------|-----------------|
|path  |Path to normalize|
|return|Normalized path  |

```javascript
normalizePath('\\foo\\bar\\'); // -> '/foo/bar/'
normalizePath('./foo//bar'); // -> './foo/bar'
```

## normalizePhone 

Normalize phone numbers into E.164 format.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function normalizePhone(
    phone: string,
    options: {
        countryCode: number;
        trunkPrefix?: boolean;
    }
): string;</code>
</pre>
</details>

|Name   |Desc              |
|-------|------------------|
|phone  |Phone to normalize|
|options|Normalize options |
|return |Normalized phone  |

Available options:

|Name             |Desc                                 |
|-----------------|-------------------------------------|
|countryCode      |Country code                         |
|trunkPrefix=false|True if local format has trunk prefix|

```javascript
normalizePhone('13512345678', {
    countryCode: 86
}); // -> '+8613512345678'
normalizePhone('(415) 555-2671', {
    countryCode: 1
}); // -> '+14155552671'
normalizePhone('020 7183 8750', {
    countryCode: 44,
    trunkPrefix: true
}); // -> '+442071838750'
```

## notify 

Wrapper for the Web Notifications API.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">namespace notify {
    class Notification extends Emitter {
        constructor(title: string, options?: object);
        show(): void;
    }
}
function notify(title: string, options?: object): void;</code>
</pre>
</details>

|Name   |Desc                |
|-------|--------------------|
|title  |Notification title  |
|options|Notification options|

You can pass exactly the same options supported in the [Web Notification](https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification).

### Notification

Use this to create instance when certain events like close, show, click or error needed to be handled.

```javascript
notify('licia', {
    body: 'This is the notification content'
});
const notification = new notify.Notification('licia', {
    body: 'This is the notification content'
});
notification.on('error', err => console.log(err));
notification.on('click', e => console.log(e));
notification.show();
```

## now 

Gets the number of milliseconds that have elapsed since the Unix epoch.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function now(): number;</code>
</pre>
</details>

```javascript
now(); // -> 1468826678701
```

## objToStr 

Alias of Object.prototype.toString.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function objToStr(val: any): string;</code>
</pre>
</details>

|Name  |Desc                                |
|------|------------------------------------|
|val   |Source value                        |
|return|String representation of given value|

```javascript
objToStr(5); // -> '[object Number]'
```

## omit 

Opposite of pick.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function omit(
    obj: any,
    filter: string | string[] | Function
): any;</code>
</pre>
</details>

|Name  |Desc           |
|------|---------------|
|obj   |Source object  |
|filter|Object filter  |
|return|Filtered object|

```javascript
omit({ a: 1, b: 2 }, 'a'); // -> {b: 2}
omit({ a: 1, b: 2, c: 3 }, ['b', 'c']); // -> {a: 1}
omit({ a: 1, b: 2, c: 3, d: 4 }, function(val, key) {
    return val % 2;
}); // -> {b: 2, d: 4}
```

## once 

Create a function that invokes once.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function once(fn: types.AnyFn): types.AnyFn;</code>
</pre>
</details>

|Name  |Desc                   |
|------|-----------------------|
|fn    |Function to restrict   |
|return|New restricted function|

```javascript
function init() {}
const initOnce = once(init);
initOnce();
initOnce(); // -> init is invoked once
```

## open 

Open stuff like url, files.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function open(target: string): any;</code>
</pre>
</details>

|Name  |Desc         |
|------|-------------|
|target|Stuff to open|
|return|Child process|

```javascript
open('https://eustia.liriliri.io/');
```

## openFile 

Open file dialog to select file in browser.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function openFile(options?: {
    accept?: string;
    multiple?: boolean;
}): Promise&lt;File[]&gt;;</code>
</pre>
</details>

|Name   |Desc          |
|-------|--------------|
|options|Dialog options|
|return |Files promise |

Available options:

|Name          |Desc                        |
|--------------|----------------------------|
|accept        |File types                  |
|multiple=false|Select multiple files or not|

```javascript
openFile({ multiple: true }).then(fileList => {
    console.log(fileList);
});
```

## optimizeCb 

Used for function context binding.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function optimizeCb(
    fn: types.AnyFn,
    ctx: any,
    argCount?: number
): types.AnyFn;</code>
</pre>
</details>

## ordinal 

Add ordinal indicator to number.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function ordinal(num: number): string;</code>
</pre>
</details>

|Name  |Desc                   |
|------|-----------------------|
|num   |Number to add indicator|
|return|Result ordinal number  |

```javascript
ordinal(1); // -> '1st'
ordinal(2); // -> '2nd'
```

## orientation 

Screen orientation helper.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">namespace orientation {
    interface IOrientation extends Emitter {
        get(): string;
    }
}
const orientation: orientation.IOrientation;</code>
</pre>
</details>

### on

Bind change event.

### off

Unbind change event.

### get

Get current orientation(landscape or portrait).

```javascript
orientation.on('change', function(direction) {
    console.log(direction); // -> 'portrait'
});
orientation.get(); // -> 'landscape'
```

## pad 

Pad string on the left and right sides if it's shorter than length.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function pad(str: string, len: number, chars?: string): string;</code>
</pre>
</details>

|Name  |Desc                  |
|------|----------------------|
|str   |String to pad         |
|len   |Padding length        |
|chars |String used as padding|
|return|Result string         |

```javascript
pad('a', 5); // -> '  a  '
pad('a', 5, '-'); // -> '--a--'
pad('abc', 3, '-'); // -> 'abc'
pad('abc', 5, 'ab'); // -> 'babca'
pad('ab', 5, 'ab'); // -> 'ababa'
```

## pairs 

Convert an object into a list of [key, value] pairs.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function pairs(obj: any): Array&lt;any[]&gt;;</code>
</pre>
</details>

|Name  |Desc                      |
|------|--------------------------|
|obj   |Object to convert         |
|return|List of [key, value] pairs|

```javascript
pairs({ a: 1, b: 2 }); // -> [['a', 1], ['b', 2]]
```

## parallel 

Run an array of functions in parallel.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function parallel(tasks: types.AnyFn[], cb?: types.AnyFn): void;</code>
</pre>
</details>

|Name |Desc                   |
|-----|-----------------------|
|tasks|Array of functions     |
|cb   |Callback once completed|

```javascript
parallel(
    [
        function(cb) {
            setTimeout(function() {
                cb(null, 'one');
            }, 200);
        },
        function(cb) {
            setTimeout(function() {
                cb(null, 'two');
            }, 100);
        }
    ],
    function(err, results) {
        // results -> ['one', 'two']
    }
);
```

## parseArgs 

Parse command line argument options, the same as minimist.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function parseArgs(
    args: string[],
    options: {
        names: any;
        shorthands: any;
    }
): any;</code>
</pre>
</details>

|Name   |Desc           |
|-------|---------------|
|args   |Argument array |
|options|Parse options  |
|return |Parsed result  |

### options

|Name      |Desc             |
|----------|-----------------|
|names     |option names     |
|shorthands|option shorthands|

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

## parseHtml 

Simple html parser.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function parseHtml(
    html: string,
    handlers: {
        start?: (tag: string, attrs: any, unary: boolean) =&gt; void;
        end?: (tag: string) =&gt; void;
        comment?: (text: string) =&gt; void;
        text?: (text: string) =&gt; void;
    }
): void;</code>
</pre>
</details>

|Name   |Desc         |
|-------|-------------|
|html   |Html to parse|
|handler|Handlers     |

```javascript
parseHtml('<div>licia</div>', {
    start: (tag, attrs, unary) => {},
    end: tag => {},
    comment: text => {},
    text: text => {}
});
```

## partial 

Partially apply a function by filling in given arguments.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function partial(
    fn: types.AnyFn,
    ...partials: any[]
): types.AnyFn;</code>
</pre>
</details>

|Name       |Desc                                    |
|-----------|----------------------------------------|
|fn         |Function to partially apply arguments to|
|...partials|Arguments to be partially applied       |
|return     |New partially applied function          |

```javascript
const sub5 = partial(function(a, b) {
    return b - a;
}, 5);
sub5(20); // -> 15
```

## pascalCase 

Convert string to "pascalCase".

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function pascalCase(str: string): string;</code>
</pre>
</details>

|Name  |Desc               |
|------|-------------------|
|str   |String to convert  |
|return|Pascal cased string|

```javascript
pascalCase('fooBar'); // -> FooBar
pascalCase('foo bar'); // -> FooBar
pascalCase('foo_bar'); // -> FooBar
pascalCase('foo.bar'); // -> FooBar
```

## perfNow 

High resolution time up to microsecond precision.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function perfNow(): number;</code>
</pre>
</details>

```javascript
const start = perfNow();

// Do something.

console.log(perfNow() - start);
```

## pick 

Return a filtered copy of an object.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function pick(
    object: any,
    filter: string | string[] | Function
): any;</code>
</pre>
</details>

|Name  |Desc           |
|------|---------------|
|object|Source object  |
|filter|Object filter  |
|return|Filtered object|

```javascript
pick({ a: 1, b: 2 }, 'a'); // -> {a: 1}
pick({ a: 1, b: 2, c: 3 }, ['b', 'c']); // -> {b: 2, c: 3}
pick({ a: 1, b: 2, c: 3, d: 4 }, function(val, key) {
    return val % 2;
}); // -> {a: 1, c: 3}
```

## pipe 

Pipe all streams together.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">import stream = require(&#x27;stream&#x27;);
function pipe(...streams: stream.Stream[]): void;</code>
</pre>
</details>

|Name      |Desc           |
|----------|---------------|
|...streams|Streams to pipe|

```javascript
const fs = require('fs');
const through = require('licia/through');
pipe(
    fs.createReadStream('in.txt'),
    through(function(chunk, enc, cb) {
        this.push(chunk);
        cb();
    }),
    fs.createWriteStream('out.txt')
);
```

## pluck 

Extract a list of property values.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function pluck(object: any, key: string | string[]): any[];</code>
</pre>
</details>

|Name  |Desc                           |
|------|-------------------------------|
|obj   |Collection to iterate over     |
|key   |Property path                  |
|return|New array of specified property|

```javascript
const stooges = [
    { name: 'moe', age: 40 },
    { name: 'larry', age: 50 },
    { name: 'curly', age: 60 }
];
pluck(stooges, 'name'); // -> ['moe', 'larry', 'curly']
```

## precision 

Find decimal precision of a given number.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function precision(num: number): number;</code>
</pre>
</details>

|Name  |Desc           |
|------|---------------|
|num   |Number to check|
|return|Precision      |

```javascript
precision(1.234); // -> 3;
```

## prefetch 

Fetch a given url.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function prefetch(url: string): Promise&lt;void&gt;;</code>
</pre>
</details>

|Name  |Desc           |
|------|---------------|
|url   |Url to prefetch|

It uses `<link rel=prefetch>` if possible.

```javascript
prefetch('https://eustia.liriliri.io/');
```

## prefix 

Add vendor prefixes to a CSS attribute.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">namespace prefix {
    function dash(name: string): string;
}
function prefix(name: string): string;</code>
</pre>
</details>

|Name  |Desc                  |
|------|----------------------|
|name  |Property name         |
|return|Prefixed property name|

### dash

Create a dasherize version.

```javascript
prefix('text-emphasis'); // -> 'WebkitTextEmphasis'
prefix.dash('text-emphasis'); // -> '-webkit-text-emphasis'
prefix('color'); // -> 'color'
```

## promisify 

Convert callback based functions into Promises.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function promisify(
    fn: types.AnyFn,
    multiArgs?: boolean
): types.AnyFn;</code>
</pre>
</details>

|Name           |Desc                                  |
|---------------|--------------------------------------|
|fn             |Callback based function               |
|multiArgs=false|If callback has multiple success value|
|return         |Result function                       |

If multiArgs is set to true, the resulting promise will always fulfill with an array of the callback's success values.

```javascript
const fs = require('fs');

const readFile = promisify(fs.readFile);
readFile('test.js', 'utf-8').then(function(data) {
    // Do something with file content.
});
```

## property 

Return a function that will itself return the key property of any passed-in object.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function property(path: string | string[]): types.AnyFn;</code>
</pre>
</details>

|Name  |Desc                       |
|------|---------------------------|
|path  |Path of the property to get|
|return|New accessor function      |

```javascript
const obj = { a: { b: 1 } };
property('a')(obj); // -> {b: 1}
property(['a', 'b'])(obj); // -> 1
```

## query 

Parse and stringify url query strings.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">const query: {
    parse(str: string): any;
    stringify(object: any): string;
};</code>
</pre>
</details>

### parse

Parse a query string into an object.

|Name  |Desc        |
|------|------------|
|str   |Query string|
|return|Query object|

### stringify

Stringify an object into a query string.

|Name  |Desc        |
|------|------------|
|obj   |Query object|
|return|Query string|

```javascript
query.parse('foo=bar&eruda=true'); // -> {foo: 'bar', eruda: 'true'}
query.stringify({ foo: 'bar', eruda: 'true' }); // -> 'foo=bar&eruda=true'
query.parse('name=eruda&name=eustia'); // -> {name: ['eruda', 'eustia']}
```

## quickSort 

Quick sort implementation.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function quickSort(arr: any[], cmp?: types.AnyFn): any[];</code>
</pre>
</details>

|Name  |Desc         |
|------|-------------|
|arr   |Array to sort|
|cmp   |Comparator   |
|return|Sorted array |

```javascript
quickSort([2, 1]); // -> [1, 2]
```

## raf 

Shortcut for requestAnimationFrame.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">namespace raf {
    function cancel(id: number): void;
}
function raf(cb: types.AnyFn): number;</code>
</pre>
</details>

Use setTimeout if native requestAnimationFrame is not supported.

```javascript
const id = raf(function tick() {
    // Animation stuff
    raf(tick);
});
raf.cancel(id);
```

## random 

Produces a random number between min and max(inclusive).

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function random(
    min: number,
    max?: number,
    floating?: boolean
): number;</code>
</pre>
</details>

|Name          |Desc                  |
|--------------|----------------------|
|min           |Minimum possible value|
|max           |Maximum possible value|
|floating=false|Float or not          |
|return        |Random number         |

```javascript
random(1, 5); // -> an integer between 0 and 5
random(5); // -> an integer between 0 and 5
random(1.2, 5.2, true); /// -> a floating-point number between 1.2 and 5.2
```

## randomBytes 

Random bytes generator.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function randomBytes(size: number): Uint8Array;</code>
</pre>
</details>

Use crypto module in node or crypto object in browser if possible.

|Name  |Desc                        |
|------|----------------------------|
|size  |Number of bytes to generate |
|return|Random bytes of given length|

```javascript
randomBytes(5); // -> [55, 49, 153, 30, 122]
```

## randomColor 

Random color generator.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function randomColor(): string;
function randomColor(options: {
    count?: number;
    hue?: number;
    lightness?: number;
    format?: string;
    seed?: number;
}): string | string[];</code>
</pre>
</details>

|Name   |Desc          |
|-------|--------------|
|options|Random options|
|return |Random color  |

Available options:

|Name      |Desc                             |
|----------|---------------------------------|
|count=1   |Color number                     |
|hue       |Hue, number between 0 and 360    |
|lightness |Lightness, number between 0 and 1|
|format=hex|Color format, hex, hsl or rgb    |
|seed      |Random color seed                |

```javascript
randomColor({
    count: 2
}); // -> ['#fed7f4', '#526498']
```

## randomId 

A tiny id generator, similar to nanoid.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function randomId(size?: number, symbols?: string): string;</code>
</pre>
</details>

|Name   |Desc                                                |
|-------|----------------------------------------------------|
|size=21|Id size                                             |
|symbols|Symbols used to generate ids, a-zA-Z0-9_- by default|

```javascript
randomId(); // -> 'oKpy4HwU8E6IvU5I03gyQ'
randomId(5); // -> 'sM6E9'
randomId(5, 'abc'); // -> 'cbbcb'
```

## randomItem 

Get a random item from an array.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function randomItem(arr: any[]): any;</code>
</pre>
</details>

|Name  |Desc                |
|------|--------------------|
|arr   |Array to get        |
|return|Randomly picked item|

```javascript
randomItem([1, 2, 3]); // -> 2
```

## range 

Create flexibly-numbered lists of integers.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function range(
    start: number,
    end?: number,
    step?: number
): number[];</code>
</pre>
</details>

|Name  |Desc                              |
|------|----------------------------------|
|start |Start of the range                |
|end   |End of the range                  |
|step=1|Value to increment or decrement by|
|return|List of integers                  |

```javascript
range(5); // -> [0, 1, 2, 3, 4]
range(0, 5, 2); // -> [0, 2, 4]
```

## rc4 

RC4 symmetric encryption implementation.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">const rc4: {
    encrypt(key: string, str: string): string;
    decrypt(key: string, str: string): string;
};</code>
</pre>
</details>

### encrypt

RC4 encryption, result as base64 string.

### decrypt

RC4 decryption, pass base64 string as input.

|Name  |Desc                            |
|------|--------------------------------|
|key   |Secret key                      |
|str   |String to be encrypted/decrypted|
|return|Encrypted/decrypted string      |

```javascript
rc4.encrypt('licia', 'Hello world'); // -> 'j9y2VpSfR3AdNN8='
rc4.decrypt('licia', 'j9y2VpSfR3AdNN8='); // -> 'Hello world'
```

## ready 

Invoke callback when dom is ready, similar to jQuery ready.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function ready(fn: types.AnyFn): void;</code>
</pre>
</details>

|Name|Desc             |
|----|-----------------|
|fn  |Callback function|

```javascript
ready(function() {
    // It's safe to manipulate dom here.
});
```

## reduce 

Turn a list of values into a single value.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function reduce&lt;T, TResult&gt;(
    list: types.List&lt;T&gt;,
    iterator: types.MemoIterator&lt;T, TResult&gt;,
    memo?: TResult,
    context?: any
): TResult;
function reduce&lt;T, TResult&gt;(
    list: types.Dictionary&lt;T&gt;,
    iterator: types.MemoObjectIterator&lt;T, TResult&gt;,
    memo?: TResult,
    context?: any
): TResult;</code>
</pre>
</details>

|Name             |Desc                          |
|-----------------|------------------------------|
|obj              |Collection to iterate over    |
|iterator=identity|Function invoked per iteration|
|initial          |Initial value                 |
|ctx              |Function context              |
|return           |Accumulated value             |

```javascript
reduce(
    [1, 2, 3],
    function(sum, n) {
        return sum + n;
    },
    0
); // -> 6
```

## reduceRight 

Right-associative version of reduce.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function reduceRight&lt;T, TResult&gt;(
    list: types.Collection&lt;T&gt;,
    iterator: types.MemoIterator&lt;T, TResult&gt;,
    memo?: TResult,
    context?: any
): TResult;</code>
</pre>
</details>

```javascript
reduceRight(
    [[1], [2], [3]],
    function(a, b) {
        return a.concat(b);
    },
    []
); // -> [3, 2, 1]
```

## reject 

Opposite of filter.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function reject&lt;T&gt;(
    list: types.List&lt;T&gt;,
    iterator: types.ListIterator&lt;T, boolean&gt;,
    context?: any
): T[];
function reject&lt;T&gt;(
    object: types.Dictionary&lt;T&gt;,
    iterator: types.ObjectIterator&lt;T, boolean&gt;,
    context?: any
): T[];</code>
</pre>
</details>

|Name     |Desc                                          |
|---------|----------------------------------------------|
|obj      |Collection to iterate over                    |
|predicate|Function invoked per iteration                |
|ctx      |Predicate context                             |
|return   |Array of all values that didn't pass predicate|

```javascript
reject([1, 2, 3, 4, 5], function(val) {
    return val % 2 === 0;
}); // -> [1, 3, 5]
```

## remove 

Remove all elements from array that predicate returns truthy for and return an array of the removed elements.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function remove&lt;T, TResult&gt;(
    list: types.List&lt;T&gt;,
    iterator: types.ListIterator&lt;T, boolean&gt;,
    context?: any
): TResult[];</code>
</pre>
</details>

Unlike filter, this method mutates array.

|Name    |Desc                                |
|--------|------------------------------------|
|list    |Collection to iterate over          |
|iterator|Function invoked per iteration      |
|context |Predicate context                   |
|return  |Array of all values that are removed|

```javascript
const arr = [1, 2, 3, 4, 5];
const evens = remove(arr, function(val) {
    return val % 2 === 0;
});
console.log(arr); // -> [1, 3, 5]
console.log(evens); // -> [2, 4]
```

## repeat 

Repeat string n-times.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function repeat(str: string, n: number): string;</code>
</pre>
</details>

|Name  |Desc            |
|------|----------------|
|str   |String to repeat|
|n     |Repeat times    |
|return|Repeated string |

```javascript
repeat('a', 3); // -> 'aaa'
repeat('ab', 2); // -> 'abab'
repeat('*', 0); // -> ''
```

## replaceAll 

Replace all instance in a string.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function replaceAll(
    str: string,
    substr: string,
    newSubstr: string
): string;</code>
</pre>
</details>

|Name     |Desc                               |
|---------|-----------------------------------|
|str      |Source string                      |
|substr   |String to be replaced              |
|newSubstr|String to replace substr           |
|return   |New string with all substr replaced|

```javascript
replaceAll('hello world goodbye world', 'world', 'licia'); // -> 'hello licia goodbye licia'
```

## restArgs 

This accumulates the arguments passed into an array, after a given index.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function restArgs(
    fn: types.AnyFn,
    startIndex?: number
): types.AnyFn;</code>
</pre>
</details>

|Name      |Desc                                   |
|----------|---------------------------------------|
|function  |Function that needs rest parameters    |
|startIndex|The start index to accumulates         |
|return    |Generated function with rest parameters|

```javascript
const paramArr = restArgs(function(rest) {
    return rest;
});
paramArr(1, 2, 3, 4); // -> [1, 2, 3, 4]
```

## reverse 

Reverse array without mutating it.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function reverse(arr: any[]): any[];</code>
</pre>
</details>

|Name  |Desc           |
|------|---------------|
|arr   |Array to modify|
|return|Reversed array |

```javascript
reverse([1, 2, 3]); // -> [3, 2, 1]
```

## rgbToHsl 

Convert rgb to hsl.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function rgbToHsl(rgb: number[]): number[];</code>
</pre>
</details>

|Name  |Desc      |
|------|----------|
|rgb   |Rgb values|
|return|Hsl values|

```javascript
rgbToHsl([52, 203, 165, 0.8]); // -> [165, 59, 50, 0.8]
```

## ric 

Shortcut for requestIdleCallback.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">namespace ric {
    function cancel(id: number);
}
function ric(cb: types.AnyFn): number;</code>
</pre>
</details>

Use setTimeout if requestIdleCallback is not supported.

```javascript
const id = ric(function() {
    // Called during a browser's idle periods
});
ric.cancel(id);
```

## rmCookie 

Loop through all possible path and domain to remove cookie.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function rmCookie(key: string): void;</code>
</pre>
</details>

|Name|Desc      |
|----|----------|
|key |Cookie key|

```javascript
rmCookie('test');
```

## rmdir 

Recursively remove directories.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function rmdir(dir: string, cb?: types.AnyFn): void;</code>
</pre>
</details>

|Name|Desc               |
|----|-------------------|
|dir |Directory to remove|
|cb  |Callback           |

```javascript
rmdir('/tmp/foo/bar/baz', function(err) {
    if (err) console.log(err);
    else console.log('Done');
});
```

## root 

Root object reference, `global` in nodeJs, `window` in browser.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">const root: any;</code>
</pre>
</details>

## rpad 

Pad string on the right side if it's shorter than length.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function rpad(str: string, len: number, chars?: string): string;</code>
</pre>
</details>

|Name  |Desc                  |
|------|----------------------|
|str   |String to pad         |
|len   |Padding length        |
|chars |String used as padding|
|return|Result string         |

```javascript
rpad('a', 5); // -> 'a    '
rpad('a', 5, '-'); // -> 'a----'
rpad('abc', 3, '-'); // -> 'abc'
rpad('abc', 5, 'ab'); // -> 'abcab'
```

## rtrim 

Remove chars or white-spaces from end of string.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function rtrim(str: string, chars?: string | string[]): string;</code>
</pre>
</details>

|Name  |Desc              |
|------|------------------|
|str   |String to trim    |
|chars |Characters to trim|
|return|Trimmed string    |

```javascript
rtrim(' abc  '); // -> ' abc'
rtrim('_abc_', '_'); // -> '_abc'
rtrim('_abc_', ['c', '_']); // -> '_ab'
```

## safeCb 

Create callback based on input value.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function safeCb(
    val?: any,
    ctx?: any,
    argCount?: number
): types.AnyFn;</code>
</pre>
</details>

## safeDel 

Delete object property.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function safeDel(obj: any, path: string | string[]): any;</code>
</pre>
</details>

|Name  |Desc                      |
|------|--------------------------|
|obj   |Object to query           |
|path  |Path of property to delete|
|return|Deleted value or undefined|

```javascript
const obj = { a: { aa: { aaa: 1 } } };
safeDel(obj, 'a.aa.aaa'); // -> 1
safeDel(obj, ['a', 'aa']); // -> {}
safeDel(obj, 'a.b'); // -> undefined
```

## safeGet 

Get object property, don't throw undefined error.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function safeGet(obj: any, path: string | string[]): any;</code>
</pre>
</details>

|Name  |Desc                     |
|------|-------------------------|
|obj   |Object to query          |
|path  |Path of property to get  |
|return|Target value or undefined|

```javascript
const obj = { a: { aa: { aaa: 1 } } };
safeGet(obj, 'a.aa.aaa'); // -> 1
safeGet(obj, ['a', 'aa']); // -> {aaa: 1}
safeGet(obj, 'a.b'); // -> undefined
```

## safeSet 

Set value at path of object.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function safeSet(
    obj: any,
    path: string | string[],
    val: any
): void;</code>
</pre>
</details>

If a portion of path doesn't exist, it's created.

|Name|Desc                   |
|----|-----------------------|
|obj |Object to modify       |
|path|Path of property to set|
|val |Value to set           |

```javascript
const obj = {};
safeSet(obj, 'a.aa.aaa', 1); // obj = {a: {aa: {aaa: 1}}}
safeSet(obj, ['a', 'aa'], 2); // obj = {a: {aa: 2}}
safeSet(obj, 'a.b', 3); // obj = {a: {aa: 2, b: 3}}
```

## safeStorage 

Use storage safely in safari private browsing and older browsers.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function safeStorage(type?: string): typeof window.localStorage;</code>
</pre>
</details>

|Name        |Desc             |
|------------|-----------------|
|type='local'|local or session |
|return      |Specified storage|

```javascript
const localStorage = safeStorage('local');
localStorage.setItem('licia', 'util');
```

## sameOrigin 

Check if two urls pass the same origin policy.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function sameOrigin(url1: string, url2: string): boolean;</code>
</pre>
</details>

|Name  |Desc                                |
|------|------------------------------------|
|url1  |Url to check                        |
|url2  |Url to check                        |
|return|True if urls pass same origin policy|

```javascript
const url1 = 'http://example.com/a.html';
const url2 = 'http://example.com/b.html';
const url3 = 'http://licia.liriliri.io';
sameOrigin(url1, url2); // -> true
sameOrigin(url1, url3); // -> false
```

## sample 

Sample random values from a collection.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function sample(obj: any, n: number): any[];</code>
</pre>
</details>

|Name  |Desc                  |
|------|----------------------|
|obj   |Collection to sample  |
|n     |Number of values      |
|return|Array of sample values|

```javascript
sample([2, 3, 1], 2); // -> [2, 3]
sample({ a: 1, b: 2, c: 3 }, 1); // -> [2]
```

## scrollTo 

Scroll to a target with animation.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function scrollTo(
    target: Element | string | number,
    options: {
        tolerance?: number;
        duration?: number;
        easing?: string | Function;
        callback?: types.AnyFn;
    }
);</code>
</pre>
</details>

|Name   |Desc          |
|-------|--------------|
|target |Scroll target |
|options|Scroll options|

### Options

|Name           |Desc                                   |
|---------------|---------------------------------------|
|tolerance=0    |Tolerance of target to scroll          |
|duration=800   |Scroll duration                        |
|easing=outQuart|Easing function                        |
|callback=noop  |Function to run once scrolling complete|

```javascript
scrollTo('body', {
    tolerance: 0,
    duration: 800,
    easing: 'outQuart',
    callback: function() {}
});
```

## seedRandom 

Seeded random number generator.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function seedRandom(
    seed: number,
    min?: number,
    max?: number,
    floating?: boolean
): () =&gt; number;</code>
</pre>
</details>

|Name         |Desc                                          |
|-------------|----------------------------------------------|
|seed         |Random seed                                   |
|min=0        |Min possible value                            |
|max=1        |Maximum possible value                        |
|floating=true|Float or not                                  |
|return       |Function that generates random number sequence|

```javascript
const random = seedRandom(19920719, 0, 100, false);
random(); // -> 7
random(); // -> 68
```

## selectionSort 

Selection sort implementation.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function selectionSort(arr: any[], cmp?: types.AnyFn): any[];</code>
</pre>
</details>

|Name  |Desc         |
|------|-------------|
|arr   |Array to sort|
|cmp   |Comparator   |
|return|Sorted array |

```javascript
selectionSort([2, 1]); // -> [1, 2]
```

## selector 

Css selector parser and serializer.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">namespace selector {
    interface IToken {
        type: string;
        value: string;
    }
}
const selector: {
    parse(selector: string): Array&lt;selector.IToken[]&gt;;
    stringify(selector: Array&lt;selector.IToken[]&gt;): string;
};</code>
</pre>
</details>

### parse

Parse css selector into js object.

|Name    |Desc            |
|--------|----------------|
|selector|Css selector    |
|return  |Parsed js object|

### stringify

Stringify object into an css selector.

|Name  |Desc               |
|------|-------------------|
|groups|Object to stringify|
|return|Css selector       |

```javascript
const groups = selector.parse('#test, input.user[name="licia"]');
// -> [[{type: 'id', value: 'test'}],[{type: 'tag', value: 'input'}...]]
selector.stringify(groups);
```

## shebang 

Get command from a shebang.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function shebang(str: string): string | void;</code>
</pre>
</details>

|Name  |Desc                 |
|------|---------------------|
|str   |String to get command|
|return|Shebang command      |

```javascript
shebang('#!/usr/bin/env node'); // -> '/usr/bin/env node'
shebang('#!/bin/bash'); // -> '/bin/bash'
shebang('node'); // -> undefined
```

## shellSort 

Shell sort implementation.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function shellSort(arr: any[], cmp?: types.AnyFn): any[];</code>
</pre>
</details>

|Name  |Desc         |
|------|-------------|
|arr   |Array to sort|
|cmp   |Comparator   |
|return|Sorted array |

```javascript
shellSort([2, 1]); // -> [1, 2]
```

## shuffle 

Randomize the order of the elements in a given array.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function shuffle(arr: any[]): any[];</code>
</pre>
</details>

|Name  |Desc              |
|------|------------------|
|arr   |Array to randomize|
|return|Randomized Array  |

```javascript
shuffle([1, 2, 3]); // -> [3, 1, 2]
```

## size 

Get size of object or length of array like object.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function size(obj: any): number;</code>
</pre>
</details>

|Name  |Desc                 |
|------|---------------------|
|obj   |Collection to inspect|
|return|Collection size      |

```javascript
size({ a: 1, b: 2 }); // -> 2
size([1, 2, 3]); // -> 3
```

## sizeof 

Get approximate size of a js object.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function sizeof(obj: any): number;</code>
</pre>
</details>

|Name  |Desc               |
|------|-------------------|
|obj   |Object to calculate|
|return|Size in bytes      |

A char of string is counted as 2 bytes. And 4 bytes for boolean, 8 bytes for number.

Object keys are treated as strings.

```javascript
sizeof('a'); // -> 2
sizeof(8); // -> 8
sizeof(false); // -> 4
sizeof(function() {}); // -> 0
sizeof({ a: 'b' }); // -> 4
```

## sleep 

Resolve a promise after a specified timeout.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function sleep(timeout: number): Promise&lt;void&gt;;</code>
</pre>
</details>

|Name   |Desc         |
|-------|-------------|
|timeout|Sleep timeout|

```javascript
(async function() {
    await sleep(2000);
})();
```

## slice 

Create slice of source array or array-like object.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function slice(
    array: any[],
    start?: number,
    end?: number
): any[];</code>
</pre>
</details>

|Name            |Desc                      |
|----------------|--------------------------|
|array           |Array to slice            |
|start=0         |Start position            |
|end=array.length|End position, not included|

```javascript
slice([1, 2, 3, 4], 1, 2); // -> [2]
```

## slugify 

Slugify a string.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function slugify(
    str: string,
    replacement?: { [index: string]: string }
): string;</code>
</pre>
</details>

|Name       |Desc              |
|-----------|------------------|
|str        |String to slugify |
|replacement|Custom replacement|
|return     |Slugified string  |

```javascript
slugify('I ♥ pony'); // -> 'I-love-pony'
slugify('I ♥ pony', { ' ': '_' }); // -> 'I_love_pony'
```

## snakeCase 

Convert string to "snakeCase".

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function snakeCase(str: string): string;</code>
</pre>
</details>

|Name  |Desc              |
|------|------------------|
|str   |String to convert |
|return|Snake cased string|

```javascript
snakeCase('fooBar'); // -> foo_bar
snakeCase('foo bar'); // -> foo_bar
snakeCase('foo.bar'); // -> foo_bar
```

## some 

Check if predicate return truthy for any element.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function some&lt;T&gt;(
    list: types.List&lt;T&gt;,
    iterator?: types.ListIterator&lt;T, boolean&gt;,
    context?: any
): boolean;
function some&lt;T&gt;(
    object: types.Dictionary&lt;T&gt;,
    iterator?: types.ObjectIterator&lt;T, boolean&gt;,
    context?: any
): boolean;</code>
</pre>
</details>

|Name     |Desc                                          |
|---------|----------------------------------------------|
|obj      |Collection to iterate over                    |
|predicate|Function to invoked per iteration             |
|ctx      |Predicate context                             |
|return   |True if any element passes the predicate check|

```javascript
some([2, 5], function(val) {
    return val % 2 === 0;
}); // -> true
```

## sortBy 

Return an array of elements sorted in ascending order by results of running each element through iteratee.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function sortBy(
    arr: any,
    iterator?: types.AnyFn,
    ctx?: any
): any[];</code>
</pre>
</details>

|Name             |Desc                      |
|-----------------|--------------------------|
|arr              |Collection to iterate over|
|iterator=identity|Iterator to sort by       |
|ctx              |Iterator context          |
|return           |New sorted array          |

```javascript
sortBy([1, 2, 3, 4, 5, 6], function(num) {
    return Math.sin(num);
}); // -> [5, 4, 6, 3, 1, 2]
```

## sortKeys 

Sort keys of an object.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function sortKeys(
    obj: object,
    options?: {
        deep?: boolean;
        comparator?: types.AnyFn;
    }
): object;</code>
</pre>
</details>

|Name   |Desc                   |
|-------|-----------------------|
|obj    |Object to sort         |
|options|Sort options           |
|return |Object with sorted keys|

Available options:

|Name      |Desc                 |
|----------|---------------------|
|deep=false|Sort keys recursively|
|comparator|Comparator           |

```javascript
sortKeys(
    { b: { d: 2, c: 1 }, a: 0 },
    {
        deep: true
    }
); // -> {a: 0, b: {c: 1, d: 2}}
```

## spaceCase 

Convert string to "spaceCase".

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function spaceCase(str: string): string;</code>
</pre>
</details>

|Name  |Desc              |
|------|------------------|
|str   |String to convert |
|return|Space cased string|

```javascript
spaceCase('fooBar'); // -> foo bar
spaceCase('foo.bar'); // -> foo bar
spaceCase('foo.bar'); // -> foo bar
```

## splitCase 

Split different string case to an array.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function splitCase(str: string): string[];</code>
</pre>
</details>

|Name  |Desc           |
|------|---------------|
|str   |String to split|
|return|Result array   |

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

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function splitPath(
    path: string
): {
    dir: string;
    name: string;
    ext: string;
};</code>
</pre>
</details>

|Name  |Desc                               |
|------|-----------------------------------|
|path  |Path to split                      |
|return|Object containing dir, name and ext|

```javascript
splitPath('f:/foo/bar.txt'); // -> {dir: 'f:/foo/', name: 'bar.txt', ext: '.txt'}
splitPath('/home/foo/bar.txt'); // -> {dir: '/home/foo/', name: 'bar.txt', ext: '.txt'}
```

## stackTrace 

Get CallSite objects in v8.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function stackTrace(): any[];</code>
</pre>
</details>

[Stack trace API](https://v8.dev/docs/stack-trace-api)

```javascript
stackTrace(); // -> List of CallSite objects
```

## startWith 

Check if string starts with the given target string.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function startWith(str: string, prefix: string): boolean;</code>
</pre>
</details>

|Name  |Desc                             |
|------|---------------------------------|
|str   |String to search                 |
|prefix|String prefix                    |
|return|True if string starts with prefix|

```javascript
startWith('ab', 'a'); // -> true
```

## strHash 

String hash function using djb2.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function strHash(str: string): number;</code>
</pre>
</details>

|Name  |Desc          |
|------|--------------|
|str   |String to hash|
|return|Hash result   |

```javascript
strHash('test'); // -> 2090770981
```

## strToBytes 

Convert string into bytes.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function strToBytes(str: string, encoding?: string): number[];</code>
</pre>
</details>

|Name         |Desc              |
|-------------|------------------|
|str          |String to convert |
|encoding=utf8|Encoding of string|
|return       |Bytes array       |

Supported encoding: utf8, hex, base64

```javascript
strToBytes('licia'); // -> [108, 105, 99, 105, 97]
strToBytes('qK6b/w==', 'base64'); // -> [168, 174, 155, 255]
```

## strTpl 

Simple string template.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function strTpl(str: string, data: types.PlainObj&lt;any&gt;): string;</code>
</pre>
</details>

|Name  |Desc           |
|------|---------------|
|str   |Template string|
|data  |Data to pass in|
|return|Result string  |

```javascript
strTpl('Hello, {{name.first}}!', { name: { first: 'licia' } }); // -> 'Hello, licia!'
```

## strWidth 

Get string's visual width.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function strWidth(str: string): number;</code>
</pre>
</details>

|Name  |Desc               |
|------|-------------------|
|str   |String to get width|
|return|Visual width       |

```javascript
strWidth('Hello \nworld!'); // -> 12
strWidth('\u001b[4m你好，世界！\u001b[0m'); // -> 12
```

## stringify 

JSON stringify with support for circular object, function etc.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function stringify(obj: any, spaces?: number): string;</code>
</pre>
</details>

Undefined is treated as null value.

|Name  |Desc               |
|------|-------------------|
|obj   |Object to stringify|
|spaces|Indent spaces      |
|return|Stringified object |

```javascript
stringify({ a: function() {} }); // -> '{"a":"[Function function () {}]"}'
const obj = { a: 1, b: {} };
obj.b = obj;
stringify(obj); // -> '{"a":1,"b":"[Circular ~]"}'
```

## stringifyAll 

Stringify object into json with types.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">namespace stringifyAll {
    function parse(str: string): any;
}
function stringifyAll(
    obj: any,
    options?: {
        unenumerable?: boolean;
        symbol?: boolean;
        accessGetter?: boolean;
        timeout?: number;
        depth?: number;
        ignore?: any[];
    }
): string;</code>
</pre>
</details>

|Name   |Desc               |
|-------|-------------------|
|obj    |Object to stringify|
|options|Stringify options  |
|return |Stringified object |

Available options:

|Name              |Desc                     |
|------------------|-------------------------|
|unenumerable=false|Include unenumerable keys|
|symbol=false      |Include symbol keys      |
|accessGetter=false|Access getter value      |
|timeout=0         |Timeout of stringify     |
|depth=0           |Max depth of recursion   |
|ignore            |Values to ignore         |

When time is out, all remaining values will all be "Timeout".

### parse

Parse result string back to object.

|Name  |Type           |
|------|---------------|
|obj   |String to parse|
|return|Result object  |

```javascript
stringifyAll(function test() {}); // -> '{"value":"function test() {}","type":"Function",...}'
```

## stripAnsi 

Strip ansi codes from a string.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function stripAnsi(str: string): string;</code>
</pre>
</details>

|Name  |Desc           |
|------|---------------|
|str   |String to strip|
|return|Result string  |

```javascript
stripAnsi('\u001b[4mcake\u001b[0m'); // -> 'cake'
```

## stripCmt 

Strip comments from source code.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function stripCmt(str: string): string;</code>
</pre>
</details>

|Name  |Desc                 |
|------|---------------------|
|str   |Source code          |
|return|Code without comments|

```javascript
stripCmt('// comment \n var a = 5; \/* comment2\n * comment3\n *\/'); // -> ' var a = 5; '
```

## stripColor 

Strip ansi color codes from a string.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function stripColor(str: string): string;</code>
</pre>
</details>

|Name  |Desc           |
|------|---------------|
|str   |String to strip|
|return|Result string  |

```javascript
stripColor('\u001b[31mred\u001b[39m'); // -> 'red'
```

## stripHtmlTag 

Strip html tags from a string.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function stripHtmlTag(str: string): string;</code>
</pre>
</details>

|Name  |Desc           |
|------|---------------|
|str   |String to strip|
|return|Result string  |

```javascript
stripHtmlTag('<p>Hello</p>'); // -> 'Hello'
```

## stripIndent 

Strip indentation from multi-line strings.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function stripIndent(str: string): string;
function stripIndent(
    literals: TemplateStringsArray,
    ...placeholders: any[]
): string;</code>
</pre>
</details>

|Name  |Desc           |
|------|---------------|
|str   |String to strip|
|return|Result string  |

It can be used as function or template tag.

```javascript
stripIndent`
    Test string
        * item one
        * item two
`; // -> 'Test string\n    * item one\n    * item two'
```

## stripNum 

Strip number to a specified precision.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function stripNum(num: number, precision?: number): number;</code>
</pre>
</details>

|Name        |Desc           |
|------------|---------------|
|num         |Number to strip|
|precision=12|Precision      |
|return      |Result number  |

```javascript
stripNum(0.1 + 0.2); // -> 0.3
```

## sum 

Compute sum of given numbers.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function sum(...num: number[]): number;</code>
</pre>
</details>

|Name  |Desc                |
|------|--------------------|
|...num|Numbers to calculate|
|return|Sum of numbers      |

```javascript
sum(1, 2, 5); // -> 8
```

## swap 

Swap two items in an array.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function swap(arr: any[], a: number, b: number): any[];</code>
</pre>
</details>

|Name  |Desc         |
|------|-------------|
|arr   |Array to swap|
|a     |First index  |
|b     |Second index |
|return|Array given  |

```javascript
const arr = [1, 2];
swap(arr, 0, 1); // -> [2, 1]
```

## table 

Output table string.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function table(rows: Array&lt;string[]&gt;): string;</code>
</pre>
</details>

|Name  |Desc        |
|------|------------|
|rows  |Table data  |
|return|Table string|

```javascript
table([
    ['', 'firstName', 'lastName'],
    ['daughter', 'Emily', 'Smith'],
    ['father', 'John', 'Smith'],
    ['mother', 'Jane', 'Smith']
]);
```

## template 

Compile JavaScript template into function that can be evaluated for rendering.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function template(str: string, util?: any): types.AnyFn;</code>
</pre>
</details>

|Name  |Desc                      |
|------|--------------------------|
|str   |Template string           |
|util  |Utility functions         |
|return|Compiled template function|

```javascript
template('Hello <%= name %>!')({ name: 'licia' }); // -> 'Hello licia!'
template('<p><%- name %></p>')({ name: '<licia>' }); // -> '<p>&lt;licia&gt;</p>'
template('<%if (echo) {%>Hello licia!<%}%>')({ echo: true }); // -> 'Hello licia!'
template('<p><%= util["upperCase"](name) %></p>', {
    upperCase: function(str) {
        return str.toLocaleUpperCase();
    }
})({ name: 'licia' }); // -> '<p>LICIA</p>'
```

## throttle 

Return a new throttled version of the passed function.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function throttle&lt;T extends types.AnyFn&gt;(fn: T, wait: number): T;</code>
</pre>
</details>

|Name  |Desc                           |
|------|-------------------------------|
|fn    |Function to throttle           |
|wait  |Number of milliseconds to delay|
|return|New throttled function         |

```javascript
const updatePos = throttle(function() {}, 100);
// $(window).scroll(updatePos);
```

## through 

Tiny wrapper of stream Transform.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">import stream = require(&#x27;stream&#x27;);
namespace through {
    interface ThroughConstructor extends stream.Transform {
        new (opts?: stream.DuplexOptions): stream.Transform;
        (opts?: stream.DuplexOptions): stream.Transform;
    }
    type TransformCallback = (err?: any, data?: any) =&gt; void;
    type TransformFunction = (
        this: stream.Transform,
        chunk: any,
        enc: string,
        callback: TransformCallback
    ) =&gt; void;
    type FlushCallback = (
        this: stream.Transform,
        flushCallback: () =&gt; void
    ) =&gt; void;
    function obj(
        transform?: TransformFunction,
        flush?: FlushCallback
    ): stream.Transform;
    function ctor(
        transform?: TransformFunction,
        flush?: FlushCallback
    ): ThroughConstructor;
    function ctor(
        opts?: stream.DuplexOptions,
        transform?: TransformFunction,
        flush?: FlushCallback
    ): ThroughConstructor;
}
function through(
    transform?: through.TransformFunction,
    flush?: through.FlushCallback
): stream.Transform;
function through(
    opts?: stream.DuplexOptions,
    transform?: through.TransformFunction,
    flush?: through.FlushCallback
): stream.Transform;</code>
</pre>
</details>

|Name     |Desc                        |
|---------|----------------------------|
|opts={}  |Options to initialize stream|
|transform|Transform implementation    |
|flush    |Flush implementation        |

### obj

Shortcut for setting objectMode to true.

### ctor

Return a class that extends stream Transform.

```javascript
const fs = require('fs');
fs.createReadStream('in.txt')
    .pipe(
        through(function(chunk, enc, cb) {
            // Do something to chunk
            this.push(chunk);
            cb();
        })
    )
    .pipe(fs.createWriteStream('out.txt'));
```

## timeAgo 

Format datetime with *** time ago statement.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function timeAgo(
    date: Date | number,
    now?: Date | number
): string;</code>
</pre>
</details>

|Name        |Desc                     |
|------------|-------------------------|
|date        |Date to calculate        |
|now=new Date|Current date             |
|return      |Formatted time ago string|

```javascript
const now = new Date().getTime();
timeAgo(now - 1000 * 6); // -> right now
timeAgo(now + 1000 * 15); // -> in 15 minutes
timeAgo(now - 1000 * 60 * 60 * 5, now); // -> 5 hours ago
```

## timeTaken 

Get execution time of a function.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function timeTaken(fn: types.AnyFn): number;</code>
</pre>
</details>

|Name  |Desc                    |
|------|------------------------|
|fn    |Function to measure time|
|return|Execution time, ms      |

```javascript
timeTaken(function() {
    // Do something.
}); // -> Time taken to execute given function.
```

## times 

Invoke given function n times.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function times&lt;T&gt;(
    n: number,
    fn: (n: number) =&gt; T,
    ctx?: any
): T[];</code>
</pre>
</details>

|Name  |Desc                          |
|------|------------------------------|
|n     |Times to invoke function      |
|fn    |Function invoked per iteration|
|ctx   |Function context              |
|return|Array of results              |

```javascript
times(3, String); // -> ['0', '1', '2']
```

## toArr 

Convert value to an array.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function toArr(val: any): any[];</code>
</pre>
</details>

|Name  |Desc            |
|------|----------------|
|val   |Value to convert|
|return|Converted array |

```javascript
toArr({ a: 1, b: 2 }); // -> [{a: 1, b: 2}]
toArr('abc'); // -> ['abc']
toArr(1); // -> [1]
toArr(null); // -> []
```

## toAsync 

Use generator like async/await.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function toAsync(fn: types.AnyFn): types.AnyFn;</code>
</pre>
</details>

|Name  |Desc              |
|------|------------------|
|fn    |Generator function|
|return|Result function   |

```javascript
const sleep = require('licia/sleep');

const fn = toAsync(function*() {
    yield sleep(200);
    return 'licia';
});

fn().then(str => {});
```

## toBool 

Convert value to a boolean.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function toBool(val: any): boolean;</code>
</pre>
</details>

|Name  |Desc             |
|------|-----------------|
|val   |Value to convert |
|return|Converted boolean|

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

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function toDate(val: any): Date;</code>
</pre>
</details>

|Name  |Desc            |
|------|----------------|
|val   |Value to convert|
|return|Converted Date  |

```javascript
toDate('20180501');
toDate('2018-05-01');
toDate(1525107450849);
```

## toEl 

Convert html string to dom elements.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function toEl(str: string): Element;</code>
</pre>
</details>

There should be only one root element.

|Name  |Desc        |
|------|------------|
|str   |Html string |
|return|Html element|

```javascript
toEl('<div>test</div>');
```

## toInt 

Convert value to an integer.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function toInt(val: any): number;</code>
</pre>
</details>

|Name  |Desc             |
|------|-----------------|
|val   |Value to convert |
|return|Converted integer|

```javascript
toInt(1.1); // -> 1
toInt(undefined); // -> 0
```

## toNum 

Convert value to a number.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function toNum(val: any): number;</code>
</pre>
</details>

|Name  |Desc            |
|------|----------------|
|val   |Value to process|
|return|Result number   |

```javascript
toNum('5'); // -> 5
```

## toSrc 

Convert function to its source code.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function toSrc(fn: types.AnyFn): string;</code>
</pre>
</details>

|Name  |Desc               |
|------|-------------------|
|fn    |Function to convert|
|return|Source code        |

```javascript
toSrc(Math.min); // -> 'function min() { [native code] }'
toSrc(function() {}); // -> 'function () { }'
```

## toStr 

Convert value to a string.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function toStr(val: any): string;</code>
</pre>
</details>

|Name  |Desc            |
|------|----------------|
|val   |Value to convert|
|return|Result string   |

```javascript
toStr(null); // -> ''
toStr(1); // -> '1'
toStr(false); // -> 'false'
toStr([1, 2, 3]); // -> '1,2,3'
```

## topoSort 

Topological sorting algorithm.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function topoSort(edges: any[]): any[];</code>
</pre>
</details>

|Name  |Desc        |
|------|------------|
|edges |Dependencies|
|return|Sorted order|

```javascript
topoSort([
    [1, 2],
    [1, 3],
    [3, 2]
]); // -> [1, 3, 2]
```

## trigger 

Trigger browser events.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function trigger(el: Element, type: string, options?: any);
function trigger(type: string, options?: any);</code>
</pre>
</details>

|Name       |Desc              |
|-----------|------------------|
|el=document|Element to trigger|
|type       |Event type        |
|options    |Options           |

```javascript
trigger(document.getElementById('test'), 'mouseup');
trigger('keydown', { keyCode: 65 });
```

## trim 

Remove chars or white-spaces from beginning end of string.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function trim(str: string, chars?: string | string[]): string;</code>
</pre>
</details>

|Name  |Desc              |
|------|------------------|
|str   |String to trim    |
|chars |Characters to trim|
|return|Trimmed string    |

```javascript
trim(' abc  '); // -> 'abc'
trim('_abc_', '_'); // -> 'abc'
trim('_abc_', ['a', 'c', '_']); // -> 'b'
```

## truncate 

Truncate a string to a specific width.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function truncate(
    txt: string,
    width: number,
    options?: {
        ellipsis?: string;
        separator: string;
    }
): string;</code>
</pre>
</details>

|Name   |Desc                 |
|-------|---------------------|
|txt    |Text to truncate     |
|width  |Maximum string length|
|options|Options object       |
|return |Truncated string     |

Options:

|Name          |Desc                              |
|--------------|----------------------------------|
|ellipsis='...'|String to indicate text is omitted|
|separator     |Separator pattern to truncate to  |

```javascript
truncate('ORA ORA ORA ORA ORA ORA', 12); // -> 'ORA ORA O...'
truncate('ORA ORA ORA ORA ORA ORA', 10, {
    separator: ' ',
    ellipsis: '……'
}); // -> 'ORA ORA……'
```

## tryIt 

Run function in a try catch.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function tryIt(fn: types.AnyFn, cb?: types.AnyFn): void;</code>
</pre>
</details>

|Name|Desc                 |
|----|---------------------|
|fn  |Function to try catch|
|cb  |Callback             |

```javascript
tryIt(
    function() {
        // Do something that might cause an error.
    },
    function(err, result) {
        if (err) console.log(err);
    }
);
```

## type 

Determine the internal JavaScript [[Class]] of an object.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function type(val: any, lowerCase?: boolean): string;</code>
</pre>
</details>

|Name          |Desc             |
|--------------|-----------------|
|val           |Value to get type|
|lowerCase=true|LowerCase result |
|return        |Type of object   |

```javascript
type(5); // -> 'number'
type({}); // -> 'object'
type(function() {}); // -> 'function'
type([]); // -> 'array'
type([], false); // -> 'Array'
type(async function() {}, false); // -> 'AsyncFunction'
```

## types 

Used for typescript definitions only.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">namespace types {
    interface Collection&lt;T&gt; {}
    interface List&lt;T&gt; extends Collection&lt;T&gt; {
        [index: number]: T;
        length: number;
    }
    interface ListIterator&lt;T, TResult&gt; {
        (value: T, index: number, list: List&lt;T&gt;): TResult;
    }
    interface Dictionary&lt;T&gt; extends Collection&lt;T&gt; {
        [index: string]: T;
    }
    interface ObjectIterator&lt;T, TResult&gt; {
        (element: T, key: string, list: Dictionary&lt;T&gt;): TResult;
    }
    interface MemoIterator&lt;T, TResult&gt; {
        (prev: TResult, curr: T, index: number, list: List&lt;T&gt;): TResult;
    }
    interface MemoObjectIterator&lt;T, TResult&gt; {
        (prev: TResult, curr: T, key: string, list: Dictionary&lt;T&gt;): TResult;
    }
    type Fn&lt;T&gt; = (...args: any[]) =&gt; T;
    type AnyFn = Fn&lt;any&gt;;
    type PlainObj&lt;T&gt; = { [name: string]: T };
}
const types: {};</code>
</pre>
</details>

## ucs2 

UCS-2 encoding and decoding.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">const ucs2: {
    encode(arr: number[]): string;
    decode(str: string): number[];
};</code>
</pre>
</details>

### encode

Create a string using an array of code point values.

|Name  |Desc                |
|------|--------------------|
|arr   |Array of code points|
|return|Encoded string      |

### decode

Create an array of code point values using a string.

|Name  |Desc                |
|------|--------------------|
|str   |Input string        |
|return|Array of code points|

```javascript
ucs2.encode([0x61, 0x62, 0x63]); // -> 'abc'
ucs2.decode('abc'); // -> [0x61, 0x62, 0x63]
'𝌆'.length; // -> 2
ucs2.decode('𝌆').length; // -> 1
```

## uncaught 

Handle global uncaught errors and promise rejections.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">const uncaught: {
    start(): void;
    stop(): void;
    addListener(fn: (err: Error) =&gt; void): void;
    rmListener(fn: (err: Error) =&gt; void): void;
    rmAllListeners(): void;
};</code>
</pre>
</details>

### start

Start handling of errors.

### stop

Stop handling.

### addListener

Add listener for handling errors.

|Name|Desc          |
|----|--------------|
|fn  |Error listener|

### rmListener

Remove listener.

### rmAllListeners

Remove all listeners.

```javascript
uncaught.start();
uncaught.addListener(err => {
    // Do something.
});
```

## unescape 

Convert HTML entities back, the inverse of escape.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function unescape(str: string): string;</code>
</pre>
</details>

|Name  |Desc              |
|------|------------------|
|str   |String to unescape|
|return|Unescaped string  |

```javascript
unescape('You &amp; Me'); // -> 'You & Me'
```

## union 

Create an array of unique values, in order, from all given arrays.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function union(...arr: Array&lt;any[]&gt;): any[];</code>
</pre>
</details>

|Name  |Desc                        |
|------|----------------------------|
|...arr|Arrays to inspect           |
|return|New array of combined values|

```javascript
union([2, 1], [4, 2], [1, 2]); // -> [2, 1, 4]
```

## uniqId 

Generate a globally-unique id.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function uniqId(prefix?: string): string;</code>
</pre>
</details>

|Name  |Desc              |
|------|------------------|
|prefix|Id prefix         |
|return|Globally-unique id|

```javascript
uniqId('eustia_'); // -> 'eustia_xxx'
```

## unique 

Create duplicate-free version of an array.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function unique(
    arr: any[],
    cmp?: (a: any, b: any) =&gt; boolean | number
): any[];</code>
</pre>
</details>

|Name  |Desc                         |
|------|-----------------------------|
|arr   |Array to inspect             |
|cmp   |Function for comparing values|
|return|New duplicate free array     |

```javascript
unique([1, 2, 3, 1]); // -> [1, 2, 3]
```

## universalify 

Make an async function support both promises and callbacks.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function universalify(
    fn: types.AnyFn,
    type: string
): types.AnyFn;</code>
</pre>
</details>

|Name  |Desc                            |
|------|--------------------------------|
|fn    |Async function                  |
|type  |Source type, promise or callback|
|return|Result function                 |

```javascript
function callbackFn(str, cb) {
    setTimeout(() => {
        cb(null, str);
    }, 10);
}

const fn = universalify(callbackFn, 'callback');
fn('licia', (err, result) => {
    console.log(result); // -> 'licia'
});
fn('licia').then(result => {
    console.log(result); // -> 'licia'
});
```

## unzip 

Opposite of zip.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">declare function unzip(arr: Array&lt;any[]&gt;): Array&lt;any[]&gt;;</code>
</pre>
</details>

|Name  |Desc                                |
|------|------------------------------------|
|arr   |Array of grouped elements to process|
|return|New array of regrouped elements     |

```javascript
unzip([
    ['a', 1, true],
    ['b', 2, false]
]); // -> [['a', 'b'], [1, 2], [true, false]]
```

## upperCase 

Convert string to upper case.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function upperCase(str: string): string;</code>
</pre>
</details>

|Name  |Desc             |
|------|-----------------|
|str   |String to convert|
|return|Uppercased string|

```javascript
upperCase('test'); // -> 'TEST'
```

## upperFirst 

Convert the first character of string to upper case.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function upperFirst(str: string): string;</code>
</pre>
</details>

|Name  |Desc             |
|------|-----------------|
|str   |String to convert|
|return|Converted string |

```javascript
upperFirst('red'); // -> Red
```

## use 

Use modules that is created by define.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function use(requires: string[], method: types.AnyFn): void;
function use(method: types.AnyFn): void;</code>
</pre>
</details>

|Name    |Desc                |
|--------|--------------------|
|requires|Dependencies        |
|method  |Codes to be executed|

```javascript
// define('A', () => 'A');
use(['A'], function(A) {
    console.log(A + 'B'); // -> 'AB'
});
```

## utf8 

UTF-8 encoding and decoding.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">const utf8: {
    encode(str: string): string;
    decode(str: string, safe?: boolean): string;
};</code>
</pre>
</details>

### encode

Turn any UTF-8 decoded string into UTF-8 encoded string.

|Name  |Desc            |
|------|----------------|
|str   |String to encode|
|return|Encoded string  |

### decode

Turn any UTF-8 encoded string into UTF-8 decoded string.

|Name      |Desc                  |
|----------|----------------------|
|str       |String to decode      |
|safe=false|Suppress error if true|
|return    |Decoded string        |

```javascript
utf8.encode('\uD800\uDC00'); // ->  '\xF0\x90\x80\x80'
utf8.decode('\xF0\x90\x80\x80'); // -> '\uD800\uDC00'
```

## uuid 

RFC4122 version 4 compliant uuid generator.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function uuid(): string;</code>
</pre>
</details>

Check [RFC4122 4.4](http://www.ietf.org/rfc/rfc4122.txt) for reference.

```javascript
uuid(); // -> '53ce0497-6554-49e9-8d79-347406d2a88b'
```

## values 

Create an array of the own enumerable property values of object.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function values(obj: any): any[];</code>
</pre>
</details>

|Name  |Desc                    |
|------|------------------------|
|obj   |Object to query         |
|return|Array of property values|

```javascript
values({ one: 1, two: 2 }); // -> [1, 2]
```

## viewportScale 

Get viewport scale.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function viewportScale(): number;</code>
</pre>
</details>

```javascript
viewportScale(); // -> 3
```

## vlq 

Variable-length quantity encoding and decoding.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">const vlq: {
    encode(number: number | number[]): string;
    decode(string: string): number[];
};</code>
</pre>
</details>

### encode

Encode numbers into vlq string.

|Name  |Desc            |
|------|----------------|
|number|Number to encode|
|return|Encoded string  |

### decode

Decode vlq string into numbers.

|Name  |Desc            |
|------|----------------|
|string|String to decode|
|return|Decoded numbers |

```javascript
vlq.encode(123); // -> '2H'
vlq.encode([123, 456, 789]); // -> '2HwcqxB'
vlq.decode('2H'); // -> [123]
vlq.decode('2HwcqxB'); // -> [123, 456, 789]
```

## waitUntil 

Wait until function returns a truthy value.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function waitUntil(
    condition: types.AnyFn,
    timeout?: number,
    interval?: number
): Promise&lt;any&gt;;</code>
</pre>
</details>

|Name        |Desc              |
|------------|------------------|
|condition   |Condition function|
|timeout=0   |Timeout           |
|interval=250|Wait interval     |

```javascript
let a = 5;
setTimeout(() => (a = 10), 500);
waitUntil(() => a === 10).then(() => {
    console.log(a); // -> 10
});
```

## waterfall 

Run an array of functions in series.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function waterfall(tasks: types.AnyFn[], cb?: types.AnyFn): void;</code>
</pre>
</details>

|Name |Desc                   |
|-----|-----------------------|
|tasks|Array of functions     |
|cb   |Callback once completed|

```javascript
waterfall(
    [
        function(cb) {
            cb(null, 'one');
        },
        function(arg1, cb) {
            // arg1 -> 'one'
            cb(null, 'done');
        }
    ],
    function(err, result) {
        // result -> 'done'
    }
);
```

## wordWrap 

Wrap a string to a given length.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function wordWrap(txt: string, width: number): string;</code>
</pre>
</details>

|Name  |Desc                          |
|------|------------------------------|
|txt   |Text to wrap                  |
|width |Text width                    |
|return|String wrapped at given length|

```javascript
wordWrap('Licia is a utility library.', 10);
// -> 'Licia is \na utility \nlibrary.'
```

## wordsToBytes 

Convert 32-bit words to bytes.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function wordsToBytes(words: number[]): number[];</code>
</pre>
</details>

|Name  |Desc      |
|------|----------|
|words |Word array|
|return|Byte array|

```javascript
wordsToBytes([0x12345678]); // -> [0x12, 0x34, 0x56, 0x78]
```

## workerize 

Move a stand-alone function to a worker thread.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function workerize(fn: types.AnyFn): types.AnyFn;</code>
</pre>
</details>

|Name  |Desc               |
|------|-------------------|
|fn    |Function to turn   |
|return|Workerized Function|

```javascript
const worker = workerize(function(a, b) {
    return a + b;
});
worker(1, 2).then(function(value) {
    console.log(value); // -> 3
});
```

## wrap 

Wrap the function inside a wrapper function, passing it as the first argument.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function wrap(
    fn: types.AnyFn,
    wrapper: types.AnyFn
): types.AnyFn;</code>
</pre>
</details>

|Name   |Desc            |
|-------|----------------|
|fn     |Function to wrap|
|wrapper|Wrapper function|
|return |New function    |

```javascript
const p = wrap(escape, function(fn, text) {
    return '<p>' + fn(text) + '</p>';
});
p('You & Me'); // -> '<p>You &amp; Me</p>'
```

## wx 

Promised version of mini program wx object.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">const wx: any;</code>
</pre>
</details>

```javascript
wx.getStorage('test').then(res => {
    console.log(res.data);
});
```

## xpath 

Select elements using xpath, IE is not supported.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function xpath(xpath: string): HTMLElement[];</code>
</pre>
</details>

|Name  |Desc           |
|------|---------------|
|xpath |Xpath          |
|return|Target elements|

```javascript
xpath('//html/body'); // -> [body]
```

## zip 

Merge together the values of each of the arrays with the values at the corresponding position.

<details>
<summary>Type Definition</summary>
<pre>
<code class="language-typescript">function zip(...arr: Array&lt;any[]&gt;): Array&lt;any[]&gt;;</code>
</pre>
</details>

|Name  |Desc                         |
|------|-----------------------------|
|arr   |Arrays to process            |
|return|New array of grouped elements|

```javascript
zip(['a', 'b'], [1, 2], [true, false]); // -> [['a', 1, true], ['b', 2, false]]
```
