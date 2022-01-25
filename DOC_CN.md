## $

类似 jQuery 的 dom 操作库。

<details>
<summary>类型定义</summary>
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

### 支持方法列表 
 
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

操作元素属性。

<details>
<summary>类型定义</summary>
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

获取元素集中第一个元素的指定属性值。

|参数名|说明|
|-----|---|
|element|目标元素集|
|name|属性名|
|返回值|第一个元素的属性值|

设置元素集中一个或多个属性的值。

|参数名|说明|
|-----|---|
|element|目标元素集|
|name|属性名|
|val|属性值|

|参数名|说明|
|-----|---|
|element|目标元素集|
|attributes|包含多个要设置属性-值对的对象|

### remove

对元素集中的所有元素，移除指定的属性。

|参数名|说明|
|-----|---|
|element|目标元素集|
|name|属性名|

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

操作元素 class。

<details>
<summary>类型定义</summary>
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

对元素集中的所有元素，添加指定的 class。

|参数名|说明|
|-----|---|
|element|目标元素集|
|names|添加的 class|

### has

判断元素集中是否有元素含有指定的 class。

|参数名|说明|
|-----|---|
|element|目标元素集|
|name|class 值|
|返回值|如果有，返回真|

### toggle

对于元素集中的每个元素，如果含有指定的 class 就将其删除，反之则添加。

|参数名|说明|
|-----|---|
|element|目标元素集|
|name|class 值|

### remove

对于元素集中的所有元素，移除指定的 class。

|参数名|说明|
|-----|---|
|element|目标元素集|
|name|class 值|

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

<details>
<summary>类型定义</summary>
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

获取元素集中第一个元素的指定样式。

|参数名|说明|
|-----|---|
|element|目标元素集|
|name|样式名|
|返回值|样式值|

设置元素集中一个或多个样式的值。

|参数名|说明|
|-----|---|
|element|目标元素集|
|name|样式名|
|val|样式值|

|参数名|说明|
|-----|---|
|element|目标元素集|
|properties|包含多个要设置样式-值对的对象|

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

同 $attr，自动给属性名加 data- 前缀。

<details>
<summary>类型定义</summary>
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

给指定 dom 元素绑定事件。

<details>
<summary>类型定义</summary>
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

插入 html 到不同位置。

<details>
<summary>类型定义</summary>
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

插入 html 到元素前。

### after

插入 html 到元素后。

### prepend

插入 html 到元素内部前。

### append

插入 html 到元素内部后。

|参数名|说明|
|-----|---|
|element|目标元素集|
|content|html 字符串或元素|

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

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|element|目标元素集|
|返回值|元素位置|

```javascript
$offset('#test'); // -> {left: 0, top: 0, width: 0, height: 0}
```

## $property

设置或获取元素的 html， text，val 等值。

<details>
<summary>类型定义</summary>
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

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function $remove(element: $safeEls.El);</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|element|目标元素集|

```javascript
$remove('#test');
```

## $safeEls

将值转换为数组，如果值为字符串，使用 querySelector 获取元素集。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">namespace $safeEls {
    type El = Element | Element[] | NodeListOf&lt;Element&gt; | string;
}
function $safeEls(val: $safeEls.El): Element[];</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要转换的值|
|返回值|元素集|

```javascript
$safeEls(document.querySelector('.test'));
$safeEls(document.querySelectorAll('.test'));
$safeEls('.test'); // -> Array of elements with test class
```

## $show

显示元素。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function $show(element: $safeEls.El): void;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|element|目标元素集|

```javascript
$show('#test');
```

## Benchmark

JavaScript 基准测试。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|fn|要测试的代码|
|options|测试选项|

可用选项：

|参数名|说明|
|-----|---|
|minTime=50|用于减少误差的时间|
|maxTime=5000|测试运行最大时间|
|minSamples=5|最小样本数量|
|delay=5|测试周期间隔|
|name|测试名称|

### run

运行基准测试，返回 promise。

### all

[static] 运行多个基准测试。

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

如果支持 Blob，直接返回 Blob，否则使用 BlobBuilder 进行兼容。

### constructor

|参数名|说明|
|-----|---|
|parts|Blob 分片|
|options|选项|

```javascript
const blob = new Blob([]);
```

## BloomFilter

布隆过滤器实现。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">class BloomFilter {
    constructor(size?: number, k?: number);
    add(val: string): void;
    test(val: string): boolean;
}</code>
</pre>
</details>

### constructor

|参数名|说明|
|-----|---|
|size=1024|桶数目|
|k=3|哈希函数数目|

### add

添加元素。

|参数名|说明|
|-----|---|
|val|要加的值|

### test

检测元素是否在过滤器中。

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果可能在返回真，如果绝对不在返回假|

```javascript
const bloom = new BloomFilter(256, 3);
bloom.add('Bruce Wayne');
bloom.add('Clark Kent');
bloom.test('Clark Kent'); // -> true
bloom.test('Bruce Wayne'); // -> true
bloom.test('Tony Stark'); // -> false
```

## Caseless

修复对象的属性值时，无需关心键值的大小写情况。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|obj|目标对象|

### getKey

获取原始键值。
 
|参数名|说明|
|-----|---|
|key|不区分大小写的键名|
|返回值|原始键值|

### set

设置值。

|参数名|说明|
|-----|---|
|key|不区分大小写的键名|
|val|要设置的值|

### get

获取值。

|参数名|说明|
|-----|---|
|key|不区分大小写的键名|
|返回值|键值|

### remove

移除值。

|参数名|说明|
|-----|---|
|key|不区分大小写的键名|

### has

判断是否存在给定的键名。

|参数名|说明|
|-----|---|
|key|不区分大小写的键名|
|返回值|如果有，返回真|

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

创建 JavaScript 类。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|methods|公有方法|
|statics|静态方法|
|返回值|用于创建实例的函数|

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

颜色转换。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|color|要转换的颜色|

### toRgb

获取颜色 rgb 格式。

### toHex

获取颜色十六进制格式。

### toHsl

获取颜色 hsl 格式。

### parse

【静态】将颜色字符串转换为含有值及颜色模型的对象。

|参数名|说明|
|-----|---|
|color|颜色字符串|
|返回值|含有值及颜色模型的对象|

```javascript
Color.parse('rgb(170, 287, 204, 0.5)'); // -> {val: [170, 187, 204, 0.5], model: 'rgb'}
const color = new Color('#abc');
color.toRgb(); // -> 'rgb(170, 187, 204)'
color.toHsl(); // -> 'hsl(210, 25%, 73%)'
```

## Delegator

对象委托。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|host|宿主对象|
|target|委托目标|

### method

允许在宿主对象上访问目标方法。

|参数名|说明|
|-----|---|
|name|宿主方法名|
|target=name|目标方法名|

### getter

创建 getter。

### setter

创建 setter。

### access

创建 accessor，效果等于同时调用 setter 和 getter。

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

Flux 调度器。

<details>
<summary>类型定义</summary>
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

[相关文档](https://facebook.github.io/flux/docs/dispatcher.html)

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

提供观察者模式的 Event emitter 类。

<details>
<summary>类型定义</summary>
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

绑定事件。

### off

解绑事件。

### once

绑定只触发一次的事件。

|参数名|说明|
|-----|---|
|event|事件名称|
|listener|事件监听器|

### emit

触发事件。

|参数名|说明|
|-----|---|
|event|事件名称|
|...args|传递给监听器的参数|

### removeAllListeners

解绑所有事件。

|参数名|说明|
|-----|---|
|event|事件名称|

### mixin

【静态】 将 Emitter 类的方法绑定到指定对象上去。

|参数名|说明|
|-----|---|
|obj|目标对象|

```javascript
const event = new Emitter();
event.on('test', function(name) {
    console.log(name);
});
event.emit('test', 'licia'); // Logs out 'licia'.
Emitter.mixin({});
```

## Enum

Enum 类实现。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">class Enum {
    size: number;
    constructor(map: string[] | { [member: string]: any });
    [key: string]: any;
}</code>
</pre>
</details>

### constructor

|参数名|说明|
|-----|---|
|arr|字符串数组|

|参数名|说明|
|-----|---|
|obj|键值对|

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

二进制文件存储。

<details>
<summary>类型定义</summary>
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

API 基本与 Store 模块一致，主要不同点是只接收 Buffer 类型。

### save

保存内容到磁盘。

```javascript
const store = new FileBlobStore('path/to/file');
store.set('name', Buffer.from('licia'));
process.on('exit', () => store.save());
```

## FileStore

### constructor

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">class FileStore extends Store {
    constructor(path: string, data?: any);
}</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|path|存储文件路径|
|data|默认数据|

```javascript
const store = new FileStore('path/to/file');
store.set('name', 'licia');
```

## HashTable

哈希表实现。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|size=32|桶数目|

### set

设置值。

|参数名|说明|
|-----|---|
|key|键名|
|val|键值|

### get

获取值。

|参数名|说明|
|-----|---|
|key|键名|
|返回值|键值|

### has

检查是否有指定值。

|参数名|说明|
|-----|---|
|key|键名|
|返回值|如果值存在，返回真|

### delete

删除值。

```javascript
const hashTable = new HashTable(128);
hashTable.set('name', 'redhoodsu');
hashTable.get('name'); // -> 'redhoodsu'
hashTable.has('name'); // -> true
hashTable.delete('name');
hashTable.has('name'); // -> false
```

## Heap

堆实现。

<details>
<summary>类型定义</summary>
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

堆大小。

### constructor

|参数名|说明|
|-----|---|
|cmp|比较器|

### clear

清空堆数据。

### add

往堆里添加元素。

|参数名|说明|
|-----|---|
|item|入堆元素|
|返回值|当前大小|

### poll

获取并删除堆的根元素。

### peek

与 poll 一样，只是不删除。

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

V8 内存快照操作库。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">class HeapSnapshot {
    nodes: LinkedList;
    edges: LinkedList;
    constructor(profile: any);
}</code>
</pre>
</details>

### constructor

|参数名|说明|
|-----|---|
|profile|要解析的内存快照|

### nodes

解析后的节点信息。

### edges

解析后的边信息。

```javascript
const fs = require('fs');
const data = fs.readFileSync('path/to/heapsnapshot', 'utf8');
const heapSnapshot = new HeapSnapshot(data);
let totalSize = 0;
heapSnapshot.nodes.forEach(node => (totalSize += node.selfSize));
console.log(totalSize);
```

## I18n

简单国际化库。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|locale|地区代码|
|langs|语言数据|

### set

添加语言或者向已有的语言新增键值。

|参数名|说明|
|-----|---|
|locale|地区代码|
|lang|语言数据|

### locale

设置当前地区。

|参数名|说明|
|-----|---|
|locale|地区代码|

### t

获取翻译文本。

|参数名|说明|
|-----|---|
|path|要获取文本的键值|
|data|要传递的数据|
|返回值|翻译文本|

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

JSON 转换器。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|data={}|目标 JSON 对象|

### set

设置属性值。

|参数名|说明|
|-----|---|
|key|属性路径|
|val|值|

如果属性路径为空，整个对象将被值替换。

### get

获取属性值。

|参数名|说明|
|-----|---|
|key|属性路径|
|返回值|指定值或整个对象|

### remove

移除属性值。

|参数名|说明|
|-----|---|
|key|属性路径|

### map

数组 map 的快捷方式。

|参数名|说明|
|-----|---|
|from|源对象路径|
|to|目标对象路径|
|fn|真值检测函数|

### filter

数组 filter 的快捷方式。

### compute

从多个属性值计算新值。

|参数名|说明|
|-----|---|
|from|源属性路径|
|to|目标属性路径|
|fn|计算函数|

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

双向链表实现。

<details>
<summary>类型定义</summary>
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

链表大小。

### head

链表首结点。

### tail

链表尾结点。

### push

向链表尾部添加值。

|参数名|说明|
|-----|---|
|val|要添加的值|
|返回值|链表大小|

### pop

获取链表尾部值。

### unshift

向链表头部添加值。

### shift

获取链表头部值。

### rmNode

删除节点。

### find

查找节点。

|参数名|说明|
|-----|---|
|fn|真值检测函数|
|返回值|第一个通过的节点|

### forEach

遍历链表。

### toArr

将链表转换成 JavaScript 数组。

```javascript
const linkedList = new LinkedList();
linkedList.push(5);
linkedList.pop(); // -> 5
```

## LocalStore

LocalStorage 存储。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">class LocalStore extends Store {
    constructor(name: string, data?: {});
}</code>
</pre>
</details>

继承自 Store 类。

### constructor

|参数名|说明|
|-----|---|
|name|LocalStorage 存储名|
|data|默认数据|

```javascript
const store = new LocalStore('licia');
store.set('name', 'licia');
```

## Logger

带日志级别的简单日志库。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|name|日志名称|
|level=DEBUG|日志级别|

### setLevel

设置日志级别。

|参数名|说明|
|-----|---|
|level|日志级别|

### getLevel

获取当前日志级别。

### trace，debug，info，warn，error

打日志方法。

### 日志级别 

TRACE，DEBUG，INFO，WARN，ERROR 和 SILENT。

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

简单 LRU 缓存。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|max|最大缓存数|

### has

检查是否有缓存。

|参数名|说明|
|-----|---|
|key|缓存键名|
|返回值|如果有，返回真|

### remove

删除缓存。

|参数名|说明|
|-----|---|
|key|缓存键名|

### get

获取缓存。

|参数名|说明|
|-----|---|
|key|缓存键名|
|返回值|缓存值|

### set

设置缓存。

|参数名|说明|
|-----|---|
|key|缓存键名|
|val|缓存值|

### clear

清除所有缓存。

```javascript
const cache = new Lru(50);
cache.set('test', 'licia');
cache.get('test'); // -> 'licia'
```

## MediaQuery

CSS 媒体查询监听器。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">class MediaQuery extends Emitter {
    constructor(query: string);
    isMatch(): boolean;
}</code>
</pre>
</details>

继承自 Emitter 类。

### constructor

|参数名|说明|
|-----|---|
|query|媒体查询字符串|

### isMatch

如果媒体查询匹配，返回真。

### 事件 

#### match

当媒体查询匹配时触发。

#### unmatch

与 match 事件相反。

```javascript
const mediaQuery = new MediaQuery('screen and (max-width:1000px)');
mediaQuery.isMatch(); // -> false
mediaQuery.on('match', () => {
    // Do something...
});
```

## MutationObserver

MutationObserver 安全版本，如果不支持，则什么也不做。

```javascript
const observer = new MutationObserver(function(mutations) {
    // Do something.
});
observer.observe(document.documentElement);
observer.disconnect();
```

## PriorityQueue

优先队列实现。

<details>
<summary>类型定义</summary>
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

队列大小。

### constructor

|参数名|说明|
|-----|---|
|cmp|比较器|

### clear

清空队列。

### enqueue

元素入列。

|参数名|说明|
|-----|---|
|item|入列元素|
|返回值|当前大小|

### dequeue

获取并删除队列中拥有最高优先级的元素。

### peek

同 dequeue，只是不删除。

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

轻量 Promise 实现。

[Promises 标准](https://github.com/promises-aplus/promises-spec)

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

类似 es6 的 Map，不支持遍历器。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">const PseudoMap: typeof Map;</code>
</pre>
</details>

只支持字符串键名，当 Map 存在时会直接使用 Map。

```javascript
const map = new PseudoMap();
map.set('1', 1);
map.get('1'); // -> 1
```

## Queue

队列数据结构。

<details>
<summary>类型定义</summary>
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

队列大小。

### clear

清空队列。

### enqueue

元素入列。

|参数名|说明|
|-----|---|
|item|入列元素|
|返回值|当前大小|

### dequeue

元素出列。

### peek

获取第一个元素但不移除它。

### forEach

遍历队列。

|参数名|说明|
|-----|---|
|iterator|调用函数|
|ctx|*|函数上下文|

### toArr

将队列转换为 JavaScript 数组。

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

不使用链表的 LRU 实现。

<details>
<summary>类型定义</summary>
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

参考 [hashlru 算法](https://github.com/dominictarr/hashlru#algorithm)，空间占用相比使用链表更多。

API 与 Lru 模块保持一致。

```javascript
const cache = new QuickLru(50);
cache.set('test', 'licia');
cache.get('test'); // -> 'licia'
```

## Readiness

任务就绪回调管理。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">class Readiness {
    signal(tasks: string | string[]): void;
    isReady(tasks: string | string[]): boolean;
    ready(tasks: string | string[], fn?: types.AnyFn): Promise&lt;void&gt;;
}</code>
</pre>
</details>

### signal

设置任务为就绪状态。

|参数名|说明|
|-----|---|
|tasks|就绪任务|

### ready

注册任务就绪回调。

|参数名|说明|
|-----|---|
|tasks|要监听的任务|
|fn|任务就绪时触发的回调函数|
|返回值|任务就绪时 resolve 的 Promise|

### isReady

检查任务是否准备就绪。

|参数名|说明|
|-----|---|
|tasks|要检查的任务|
|返回值|任务准备就绪，返回真|

```javascript
const readiness = new Readiness();
readiness.ready('serverCreated', function() {
    // Do something.
});
readiness.signal('serverCreated');
readiness.isReady('serverCreated'); // -> true
```

## ReduceStore

简单类 redux 状态管理。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|reducer|生成下一个状态的函数|
|initialState|初始状态|

### subscribe

订阅状态改变事件。

|参数名|说明|
|-----|---|
|listener|回调函数|
|返回值|取消订阅函数|

### dispatch

发出动作。

|参数名|说明|
|-----|---|
|action|描述改变内容的对象|
|返回值|传入对象|

### getState

获取当前状态。

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

检查元素的大小是否发生变化。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">class ResizeSensor extends SingleEmitter {
    constructor(el: HTMLElement);
    destroy(): void;
}</code>
</pre>
</details>

### constructor

|参数名|说明|
|-----|---|
|element|要监听大小的元素|

### destroy

停止监听大小变化事件。

```javascript
const target = document.getElementById('test');
const sensor = new ResizeSensor(target);
sensor.addListener(function() {
    // Trigger if element's size changed.
});
```

## Select

querySelectorAll 的简单包装类。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">class Select {
    constructor(selector: string | Element | Document);
    find(selector: string): Select;
    each(fn: types.AnyFn): Select;
}</code>
</pre>
</details>

### constructor

|参数名|说明|
|-----|---|
|selector|选择器|

### find

查找子元素。

|参数名|说明|
|-----|---|
|selector|选择器|

### each

遍历匹配的元素。

|参数名|说明|
|-----|---|
|fn|调用函数|

```javascript
const $test = new Select('#test');
$test.find('.test').each(function(idx, element) {
    // Manipulate dom nodes
});
```

## Semaphore

限制资源同时访问次数。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">class Semaphore {
    constructor(counter?: number);
    wait(fn: () =&gt; void): void;
    signal(): void;
}</code>
</pre>
</details>

### constructor

|参数名|说明|
|-----|---|
|counter=1|初始计数|

### wait

等待计数器大于 0 时，执行函数。

|参数名|说明|
|-----|---|
|fn|要执行的函数|

### signal

执行队列中未执行任务。

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

SessionStorage 存储。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">class SessionStore extends Store {
    constructor(name: string, data?: any);
}</code>
</pre>
</details>

继承自 Store 类。

### constructor

|参数名|说明|
|-----|---|
|name|SessionStorage 存储名|
|data|默认数据|

```javascript
const store = new SessionStore('licia');
store.set('name', 'licia');
```

## SingleEmitter

与 Event emitter 类似，但仅有一种事件类型。

<details>
<summary>类型定义</summary>
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

添加监听器。

### rmListener

移除监听器。

|参数名|说明|
|-----|---|
|listener|事件监听器|

### rmAllListeners

移除所有监听器。

### emit

触发监听器。

|参数名|说明|
|-----|---|
|...args|传递给监听器的参数|

### mixin

【静态】将 SingleEmitter 类的方法绑定到指定对象上去。

|参数名|说明|
|-----|---|
|obj|目标对象|

```javascript
const event = new SingleEmitter();
event.addListener(function(name) {
    console.log(name);
});
event.emit('licia'); // Logs out 'licia'.
```

## Socket

WebSocket 类的简单包装。

<details>
<summary>类型定义</summary>
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

继续自 Emitter 类。

### constructor

|参数名|说明|
|-----|---|
|url|WebSocket 地址|
|options|连接选项|

可用选项：

|参数名|说明|
|-----|---|
|protocols|协议|
|reconnect=true|是否尝试重新连接|

### send

发送数据。

|参数名|说明|
|-----|---|
|message|要发送的数据|

### close

关闭 WebSocket 连接。

|参数名|说明|
|-----|---|
|code|状态码|
|reason|关闭原因|

### connect

连接 WebSocket，初始化时就会被调用。

```javascript
const ws = new Socket('ws://localhost:8001');
ws.on('open', e => ws.send('Hello'));
```

## Stack

栈数据结构。

<details>
<summary>类型定义</summary>
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

栈大小。

### clear

清空栈。

### push

元素入栈。

|参数名|说明|
|-----|---|
|item|入栈元素|
|返回值|当前大小|

### pop

元素出栈。

### peek

获取最后一个元素但不移除它。

### forEach

遍历栈。

|参数名|说明|
|-----|---|
|iterator|调用函数|
|ctx|函数上下文|

### toArr

将栈转换为 JavaScript 数组。

```javascript
const stack = new Stack();

stack.push(2); // -> 1
stack.push(3); // -> 2
stack.pop(); // -> 3
```

## State

简单状态机。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">class State extends Emitter {
    constructor(initial: string, events: any);
    is(state: string): boolean;
    [event: string]: any;
}</code>
</pre>
</details>

继承自 Emitter 类。

### constructor

|参数名|说明|
|-----|---|
|initial|初始状态|
|events|改变状态的事件|

### is

检查当前状态是否是指定状态。

|参数名|说明|
|-----|---|
|state|要检查的状态|
|返回值|如果是，返回真|

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

内存存储。

<details>
<summary>类型定义</summary>
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

继承自 Emitter 类。

### constructor

|参数名|说明|
|-----|---|
|data|初始数据|

### set

设置值。

|参数名|说明|
|-----|---|
|key|键名|
|val|键值|

设置多个值。

|参数名|说明|
|-----|---|
|values|包含多个键值对的对象|

该方法被调用时发触发 change 事件。

### get

获取值。

|参数名|说明|
|-----|---|
|key|键名|
|返回值|键值|

获取多个值。

|参数名|说明|
|-----|---|
|keys|键名列表|
|返回值|包含多个键值对的对象|

### remove

移除值。

|参数名|说明|
|-----|---|
|key|键名|

### clear

清空数据。

### each

遍历数据。

|参数名|说明|
|-----|---|
|fn|遍历函数|

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

## Trace

解析、处理和生成 Chrome Trace 格式数据。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">namespace Trace {
    interface IEvent {
        name: string;
        cat: string;
        ph: string;
        ts: number;
        pid: number;
        tid: number;
        args: any;
        [key: string]: any;
    }
    class Process {
        constructor(id);
        id(): string;
        name(): string;
        addEvent(IEvent): void;
        rmEvent(IEvent): void;
        getThread(id: number): Thread;
        rmThread(id: number): void;
        threads(): Thread[];
        toJSON(): IEvent[];
    }
    class Thread {
        constructor(id, pid);
        id(): string;
        name(): string;
        addEvent(IEvent): void;
        rmEvent(IEvent): void;
        events(): IEvent[];
        toJSON(): IEvent[];
    }
}
class Trace {
    constructor(events: Trace.IEvent[]);
    addEvent(event: Trace.IEvent);
    rmEvent(event: Trace.IEvent);
    getProcess(id: number): Trace.Process;
    rmProcess(id: number): void;
    processes(): Trace.Process[];
    toJSON(): Trace.IEvent[];
}</code>
</pre>
</details>

```javascript
const fs = require('fs');
const data = fs.readFileSync('path/to/trace', 'utf8');
const trace = new Trace(JSON.parse(data));
trace.rmProcess(627);
fs.writeFileSync(
    'path/to/trace',
    JSON.stringify(trace.toJSON()),
    'utf8',
    function() {}
);
```

## Tracing

创建 chrome trace 格式数据。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">class Tracing {
    constructor(options?: {
        pid?: number;
        tid?: number;
        processName?: string;
        threadName?: string;
    });
    start(cat?: string): void;
    stop(): Trace.IEvent[];
    metadata(name: string, args: any): void;
    begin(cat: string, name: string, args?: any): void;
    end(args?: any): void;
    asyncBegin(cat: string, name: string, id?: string, args?: any): string;
    asyncEnd(id: string, args?: any): void;
    instant(
        cat: string,
        name: string,
        scope?: &#x27;g&#x27; | &#x27;p&#x27; | &#x27;t&#x27;,
        args?: any
    ): void;
    id(): string;
}</code>
</pre>
</details>

### constructor

|参数名|说明|
|-----|---|
|options|录制选项|

可用选项：

|参数名|说明|
|-----|---|
|pid|进程 id|
|tid|线程 id|
|processName|进程名称|
|threadName|线程名称|

### start

开始录制。

|参数名|说明|
|-----|---|
|cat|开启类别|

### stop

停止录制并获取事件列表。

### begin

记录开始事件。

|参数名|说明|
|-----|---|
|cat|事件类别|
|name|事件名称|
|args|参数|

### end

记录结束事件。

### asyncBegin 

记录异步开始事件。

### asyncEnd

记录异步结束事件。

### instant

记录 instant 事件。

### id

获取一个唯一 id。

```javascript
const fs = require('fs');
const tracing = new Tracing();
tracing.start();
tracing.begin('cat', 'name');
// Do something...
tracing.end();
fs.writeFileSync(
    'path/to/trace',
    JSON.stringify(tracing.stop()),
    'utf8',
    function() {}
);
```

## Trie

字典树数据结构。

<details>
<summary>类型定义</summary>
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

添加单词到字典数。

|参数名|说明|
|-----|---|
|word|要添加的单词|

### remove

从字典树中移除单词。

### has

检查字典树中是否存在单词。

### words

获取所有带指定前缀的单词。

|参数名|说明|
|-----|---|
|prefix|单词前缀|
|返回值|所有带指定前缀的单词|

### clear

清除字典树中的所有单词。

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

JavaScript 补间动画库。

<details>
<summary>类型定义</summary>
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

继承自 Emitter 类。

### constructor

|参数名|说明|
|-----|---|
|obj|要补间的对象|

### to

|参数名|说明|
|-----|---|
|destination|目标属性值|
|duration|补间时长|
|ease|缓动函数|

### play

开始播放。

### pause

暂停动画。

### paused

检查动画是否暂停。

### progress

设置或获取动画进度。

|参数名|说明|
|-----|---|
|progress|介于 0 到 1 之间的数字|

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

简单 url 操作库。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|url=location|url 地址|

### setQuery

设置 query 值。

|参数名|说明|
|-----|---|
|name|query 名|
|val|query 值|
|返回值|this|

|参数名|说明|
|-----|---|
|query|query 对象|
|返回值|this|

### rmQuery

移除 query 值。

|参数名|说明|
|-----|---|
|name|query 名|
|返回值|this|

### parse

【静态】将 url 解析成对象。

|参数名|说明|
|-----|---|
|url|url 地址|
|返回值|url 对象|

### stringify

【静态】将 url 对象转换为 url 地址。

|参数名|说明|
|-----|---|
|url|url 对象|
|返回值|url 地址|

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
const url = new Url('http://example.com:8080?eruda=true');
console.log(url.port); // -> '8080'
url.query.foo = 'bar';
url.rmQuery('eruda');
url.toString(); // -> 'http://example.com:8080/?foo=bar'
```

## Validator

对象属性值校验。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|options|校验配置|

### validate

校验对象。

|参数名|说明|
|-----|---|
|obj|目标对象|
|返回值|校验结果，true 表示通过|

### addPlugin

【静态】添加插件。

|参数名|说明|
|-----|---|
|name|插件名|
|plugin|校验函数|

### 默认插件 

required，number，boolean，string 和 regexp。

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

加权轮询调度算法实现。

<details>
<summary>类型定义</summary>
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

池大小。

### set

设置值和权重，如果值已存在则更新其权重。

|参数名|说明|
|-----|---|
|val|要设置的值|
|weight|值的权重|

### get

获取指定值的权重。

|参数名|说明|
|-----|---|
|val|要获取的值|
|返回值|值的权重|

### remove

移除指定值。

|参数名|说明|
|-----|---|
|val|要移除的值|

### next

从池中获取下一个值。

### clear

清除所有值。

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

计算字符串集的缩写集合。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function abbrev(...names: string[]): types.PlainObj&lt;string&gt;;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|names|字符串集|
|返回值|缩写集合|

```javascript
abbrev('lina', 'luna');
// -> {li: 'lina', lin: 'lina', lina: 'lina', lu: 'luna', lun: 'luna', luna: 'luna'}
```

## after

创建一个函数，只有在调用 n 次后才会调用一次。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function after&lt;T extends types.AnyFn&gt;(n: number, fn: T): T;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|n|调用次数|
|fn|源函数|
|返回值|输出函数|

```javascript
const fn = after(5, function() {
    // -> Only invoke after fn is called 5 times.
});
```

## ajax

执行异步 HTTP 请求。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|options|Ajax 选项|

可用选项：

|参数名|说明|
|-----|---|
|type|请求类型|
|url|请求地址|
|data|请求数据|
|dataType=json|响应类型（json，xml）|
|contentType=application/x-www-form-urlencoded|请求内容类型|
|success|成功回调|
|error|失败回调|
|complete|结束回调|
|timeout|请求超时|

### get

type = GET 的快捷方式。

### post

type = POST 的快捷方式。

|参数名|说明|
|-----|---|
|url|请求地址|
|data|请求数据|
|success|成功回调|
|dataType|响应类型|

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

获取对象的所有键名，包括自身的及继承的。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|obj|目标对象|
|options|选项|
|返回值|包含所有键名的数组|

可用选项：

|参数名|说明|
|-----|---|
|prototype=true|包含原型键名|
|unenumerable=false|包含不可枚举键名|
|symbol=false|包含 Symbol 键名|

Object 对象原型上的方法不会被获取到。

```javascript
const obj = Object.create({ zero: 0 });
obj.one = 1;
allKeys(obj); // -> ['zero', 'one']
```

## ansiColor

控制台颜色。

<details>
<summary>类型定义</summary>
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

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function arrToMap&lt;T&gt;(
    arr: string[],
    val?: T
): { [key: string]: T };</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|arr|字符串列表|
|val=true|键值|
|返回值|映射|

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

window.atob，运行在 node 环境时使用 Buffer 进行模拟。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function atob(str: string): string;</code>
</pre>
</details>

```javascript
atob('SGVsbG8gV29ybGQ='); // -> 'Hello World'
```

## average

获取数字的平均值。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function average(...numbers: number[]): number;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|numbers|要计算的数字|
|返回值|平均值|

```javascript
average(5, 3, 1); // -> 3
```

## base64

base64 编解码。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">const base64: {
    encode(bytes: number[]): string;
    decode(str: string): number[];
};</code>
</pre>
</details>

### encode

将字节数组编码为 base64 字符串。

|参数名|说明|
|-----|---|
|bytes|字节数组|
|返回值|base64 编码的字符串|

### decode

将 base64 字符串解码为字节数组。

|参数名|说明|
|-----|---|
|str|base64 编码的字符串|
|返回值|字节数组|

```javascript
base64.encode([168, 174, 155, 255]); // -> 'qK6b/w=='
base64.decode('qK6b/w=='); // -> [168, 174, 155, 255]
```

## before

创建一个函数，只能调用少于 n 次。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function before&lt;T extends types.AnyFn&gt;(n: number, fn: T): T;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|n|调用次数|
|fn|源函数|
|返回值|输出函数|

超过 n 次后再次调用函数将直接返回最后一次函数的调用结果。

```javascript
const fn = before(5, function() {});
fn(); // Allow function to be call 4 times at last.
```

## binarySearch

二分查找实现。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function binarySearch(
    array: any[],
    val: any,
    cmp?: types.AnyFn
): number;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|array|目标数组|
|val|要查找的值|
|cmp|比较器|
|返回值|第一次出现的位置，如果没有，返回 -1|

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

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function bind(
    fn: types.AnyFn,
    ctx: any,
    ...args: any[]
): types.AnyFn;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|fn|源函数|
|ctx|绑定对象|
|args|可选参数|
|返回值|输出函数|

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

window.btoa，运行在 node 环境时使用 Buffer 进行模拟。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function btoa(str: string): string;</code>
</pre>
</details>

```javascript
btoa('Hello World'); // -> 'SGVsbG8gV29ybGQ='
```

## bubbleSort

冒泡排序实现。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function bubbleSort(arr: any[], cmp?: types.AnyFn): any[];</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|arr|要排序的数组|
|cmp|比较器|
|返回值|有序数组|

```javascript
bubbleSort([2, 1]); // -> [1, 2]
```

## bytesToStr

将字节数组转换为字符串。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function bytesToStr(bytes: number[], encoding?: string): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|bytes|字节数组|
|encoding=utf8|字符串编码|
|返回值|目标字符串|

```javascript
bytesToStr([108, 105, 99, 105, 97]); // -> 'licia'
```

## bytesToWords

将字节数组转换为 32 位字长数组。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function bytesToWords(bytes: number[]): number[];</code>
</pre>
</details>

在使用 CryptoJS 时会派上用处。

|参数名|说明|
|-----|---|
|bytes|字节数组|
|返回值|字长数组|

```javascript
bytesToWords([0x12, 0x34, 0x56, 0x78]); // -> [0x12345678]
```

## cacheRequire

缓存模块加载，提高应用启动速度。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function cacheRequire(options?: {
    dir?: string;
    requirePath?: boolean;
    code?: boolean;
    compileCache?: boolean;
}): void;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|options|缓存选项|

可用选项：

|参数名|说明|
|-----|---|
|dir|缓存文件夹|
|requirePath=true|Whether require path should be cached|
|code=false|Whether js code should be cached|
|compileCache=true|Whether compile cache should be used|

```javascript
cacheRequire({
    dir: 'path/to/cache/dir'
});
```

## callbackify

将返回 Promise 的函数转换为使用回调的函数。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function callbackify(fn: types.AnyFn): types.AnyFn;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|fn|返回 Promise 的函数|
|返回值|使用回调的函数|

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

将字符串转换为驼峰式。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function camelCase(str: string): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|源字符串|
|返回值|驼峰式字符串|

```javascript
camelCase('foo-bar'); // -> fooBar
camelCase('foo bar'); // -> fooBar
camelCase('foo_bar'); // -> fooBar
camelCase('foo.bar'); // -> fooBar
```

## capitalize

将字符串的第一个字符转换为大写，其余字符转换为小写。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function capitalize(str: string): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|源字符串|
|返回值|目标字符串|

```javascript
capitalize('rED'); // -> Red
```

## castPath

将值转换为属性路径数组。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function castPath(path: string | string[], obj?: any): string[];</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|path|要转换的值|
|obj|目标对象|
|返回值|属性路径数组|

```javascript
castPath('a.b.c'); // -> ['a', 'b', 'c']
castPath(['a']); // -> ['a']
castPath('a[0].b'); // -> ['a', '0', 'b']
castPath('a.b.c', { 'a.b.c': true }); // -> ['a.b.c']
```

## centerAlign

字符串居中。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function centerAlign(
    str: string | string[],
    width?: number
): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|源字符串|
|width|每行宽度|
|返回值|居中字符串|

```javascript
centerAlign('test', 8); // -> '  test'
centerAlign('test\nlines', 8); // -> '  test\n lines'
centerAlign(['test', 'lines'], 8); // -> '  test\n lines'
```

## char

根据指定的整数返回 unicode 编码为该整数的字符。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function char(num: number): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|num|要转换的整数|
|返回值|对应字符|

```javascript
char(65); // -> 'A'
char(97); // -> 'a'
```

## chunk

将数组拆分为指定长度的子数组。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function chunk(arr: any[], size?: number): Array&lt;any[]&gt;;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|arr|源数组|
|size=1|子数组的长度|
|返回值|目标数组|

```javascript
chunk([1, 2, 3, 4], 2); // -> [[1, 2], [3, 4]]
chunk([1, 2, 3, 4], 3); // -> [[1, 2, 3], [4]]
chunk([1, 2, 3, 4]); // -> [[1], [2], [3], [4]]
```

## clamp

将数字限定于指定区间。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function clamp(n: number, lower: number, upper: number): number;
function clamp(n: number, upper: number): number;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|n|要处理的数字|
|lower|下限|
|upper|上限|
|返回值|限定后的数字|

```javascript
clamp(-10, -5, 5); // -> -5
clamp(10, -5, 5); // -> 5
clamp(2, -5, 5); // -> 2
clamp(10, 5); // -> 5
clamp(2, 5); // -> 2
```

## className

合并 class。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function className(...names: any[]): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|names|要合并的 class|
|返回值|合并后的 class 字符串|

```javascript
className('a', 'b', 'c'); // -> 'a b c'
className('a', false, 'b', 0, 1, 'c'); // -> 'a b 1 c'
className('a', ['b', 'c']); // -> 'a b c'
className('a', { b: false, c: true }); // -> 'a c'
className('a', ['b', 'c', { d: true, e: false }]); // -> 'a b c d';
```

## cliHelp

输出命令行帮助。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|data|帮助数据|
|返回值|命令行帮助|

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

对指定对象进行浅复制。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function clone&lt;T&gt;(val: T): T;</code>
</pre>
</details>

任何嵌套的对象或数组只会拷贝其引用。

|参数名|说明|
|-----|---|
|val|要克隆的值|
|返回值|克隆值|

```javascript
clone({ name: 'eustia' }); // -> {name: 'eustia'}
```

## cloneDeep

深复制。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function cloneDeep&lt;T&gt;(val: T): T;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要克隆的值|
|返回值|克隆值|

```javascript
const obj = [{ a: 1 }, { a: 2 }];
const obj2 = cloneDeep(obj);
console.log(obj[0] === obj2[1]); // -> false
```

## cmpVersion

比较版本号。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function cmpVersion(v1: string, v2: string): number;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|v1|版本号|
|v2|版本号|
|返回值|比较结果|

```javascript
cmpVersion('1.1.8', '1.0.4'); // -> 1
cmpVersion('1.0.2', '1.0.2'); // -> 0
cmpVersion('2.0', '2.0.0'); // -> 0
cmpVersion('3.0.1', '3.0.0.2'); // -> 1
cmpVersion('1.1.1', '1.2.3'); // -> -1
```

## combine

创建一个数组，用一个数组的值作为其键名，另一个数组的值作为其值。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function combine(keys: string[], values: any[]): any;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|keys|键名数组|
|values|键值数组|
|返回值|目标对象|

```javascript
combine(['a', 'b', 'c'], [1, 2, 3]); // -> {a: 1, b: 2, c: 3}
```

## compact

返回数组的拷贝并移除其中的虚值。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function compact(arr: any[]): any[];</code>
</pre>
</details>

虚值包括 false，null，0，空字符串，undefined 和 NaN。

|参数名|说明|
|-----|---|
|arr|源数组|
|返回值|目标数组|

```javascript
compact([0, 1, false, 2, '', 3]); // -> [1, 2, 3]
```

## compose

将多个函数组合成一个函数。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function compose(...fn: types.AnyFn[]): types.AnyFn;</code>
</pre>
</details>

每个函数使用下一个函数的返回值作为参数。

|参数名|说明|
|-----|---|
|...fn|要组合的函数|
|返回值|目标函数|

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

使用 canvas 对图像进行压缩。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|file|图片文件或 url|
|options|选项|
|cb|回调|

可用选项：

|参数名|说明|
|-----|---|
|maxWidth|最大宽度|
|maxHeight|最大高度|
|width|输出图片宽度|
|height|输出图片高度|
|mimeType|Mine 类型|
|quality=0.8|图片质量，从 0 到 1|

为了保持图片比例，当宽度设置时高度将被忽略。

如果设置了宽高，最大宽度跟最大高度将被忽略。

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

将多个数组合并成一个数组。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function concat(...args: Array&lt;any[]&gt;): any[];</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|...arr|要合并的数组|
|返回值|合并后的数组|

```javascript
concat([1, 2], [3], [4, 5]); // -> [1, 2, 3, 4, 5]
```

## contain

检查数组中是否有指定值。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function contain(arr: any[] | {} | string, val: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|target|目标对象|
|val|要检查的值|
|返回值|如果有，返回真|

```javascript
contain([1, 2, 3], 1); // -> true
contain({ a: 1, b: 2 }, 1); // -> true
contain('abc', 'a'); // -> true
```

## convertBase

对数字进行进制转换。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function convertBase(
    num: number | string,
    from: number,
    to: number
): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|num|要转换的数字|
|from|源进制|
|to|目标进制|
|返回值|转换后的数字|

```javascript
convertBase('10', 2, 10); // -> '2'
convertBase('ff', 16, 2); // -> '11111111'
```

## convertBin

二进制数据格式转换。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">namespace convertBin {
    function blobToArrBuffer(blob: any): Promise&lt;ArrayBuffer&gt;;
}
function convertBin(bin: any, type: string): any;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|bin|源二进制数据|
|type|二进制类型|
|返回值|目标二进制数据|

### 支持格式

base64, ArrayBuffer, Array, Uint8Array, Blob(browser), Buffer(node)

因为将 Blob 转换为其它格式是个异步过程，所以你不能直接对它进行转换。

### blobToArrBuffer

将 Blob 类型转换为 ArrayBuffer 类型。

|参数名|说明|
|-----|---|
|blob|Blob 数据|
|返回值|ArrayBuffer promise|

```javascript
convertBin('qK6b/w==', 'Uint8Array'); // -> [168, 174, 155, 255]
convertBin.blobToArrBuffer(new Blob([])).then(arrBuffer => {
    // Do something...
});
```

## cookie

浏览器 cookie 操作库。

<details>
<summary>类型定义</summary>
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

获取 cookie 值。

|参数名|说明|
|-----|---|
|key|Cookie 键名|
|返回值|对应的 cookie 值|

### set

设置 cookie 值。

|参数名|说明|
|-----|---|
|key|cookie 键名|
|val|cookie 值|
|options|cookie 选项|
|返回值|cookie 模块|

### remove

移除 cookie 值。

|参数名|说明|
|-----|---|
|key|Cookie 键名|
|options|Cookie 选项|
|返回值|cookie 模块|

```javascript
cookie.set('a', '1', { path: '/' });
cookie.get('a'); // -> '1'
cookie.remove('a');
```

## copy

使用 document.execCommand 将文本拷贝到剪贴板。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function copy(text: string, cb?: types.AnyFn): void;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|text|要拷贝的文本|
|cb|可选回调|

```javascript
copy('text', function(err) {
    // Handle errors.
});
```

## crc1

CRC1 算法实现。 

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function crc1(
    input: string | number[],
    previous?: number
): number;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|input|信息码|
|previous|用于累积计算的 CRC1 校验码|
|返回值|CRC1 校验码|

```javascript
crc1('1234567890').toString(16); // -> 'd'
```

## crc16

CRC16 算法实现。 

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function crc16(
    input: string | number[],
    previous?: number
): number;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|input|信息码|
|previous|用于累积计算的 CRC16 校验码|
|返回值|CRC16 校验码|

```javascript
crc16('1234567890').toString(16); // -> 'c57a'
```

## crc32

CRC32 算法实现。 

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function crc32(
    input: string | number[],
    previous?: number
): number;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|input|信息码|
|previous|用于累积计算的 CRC32 校验码|
|返回值|CRC32 校验码|

```javascript
crc32('1234567890').toString(16); // -> '261daee5'
```

## crc8

CRC8 算法实现。 

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function crc8(
    input: string | number[],
    previous?: number
): number;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|input|信息码|
|previous|用于累积计算的 CRC8 校验码|
|返回值|CRC8 校验码|

```javascript
crc8('1234567890').toString(16); // -> '52'
```

## create

创建对象并指定它的原型。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function create(proto?: object): any;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|proto|新对象原型|
|返回值|目标对象|

```javascript
const obj = create({ a: 1 });
console.log(obj.a); // -> 1
```

## createAssigner

用于创建 extend，extendOwn 和 defaults 等模块。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function createAssigner(
    keysFn: types.AnyFn,
    defaults: boolean
): types.AnyFn;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|keysFn|获取对象键名的函数|
|defaults|设置为真时不对值进行覆盖|
|返回值|目标函数|

## createUrl

CreateObjectURL 的包裹函数。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function createUrl(
    data: any,
    options?: { type?: string }
): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|data|数据| 
|options|当数据不是 File 或者 Blob 对象时使用|
|返回值|Blob 地址|

```javascript
createUrl('test', { type: 'text/plain' }); // -> Blob url
createUrl(['test', 'test']);
createUrl(new Blob([]));
createUrl(new File(['test'], 'test.txt'));
```

## css

CSS 解析器。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">const css: {
    parse(css: string): object;
    stringify(stylesheet: object, options?: { indent?: string }): string;
};</code>
</pre>
</details>

注释会被移除掉。

### parse

将 CSS 字符串转换为 js 对象。

|参数名|说明|
|-----|---|
|css|CSS 字符串|
|返回值|js 对象|

### stringify

将 js 对象序列化成 CSS 字符串。

|参数名|说明|
|-----|---|
|stylesheet|要序列化的对象|
|options|序列化选项|
|返回值|CSS 字符串|

选项：

|参数名|说明|
|-----|---|
|indent='  '|缩进|

```javascript
const stylesheet = css.parse('.name { background: #000; color: red; }');
// {type: 'stylesheet', rules: [{type: 'rule', selector: '.name', declarations: [...]}]}
css.stringify(stylesheet);
```

## cssPriority

计算与比较 CSS 选择器/样式的优先级。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|selector|CSS 选择器|
|options|样式额外信息|
|返回值|优先级数组|

优先级数组包括六个数字值。

1. important 标识 
2. 内联样式
3. ID 选择器
4. 类选择器
5. 类型选择器
6. 样式位置

### compare

比较优先级。

|参数名|说明|
|-----|---|
|p1|优先级数组|
|p2|优先级数组|
|返回值|比较结果|

```javascript
cssPriority('a.button > i.icon:before', {
    important: true,
    inlineStyle: false,
    position: 100
}); // -> [1, 0, 0, 2, 3, 100]
```

## cssSupports

检查浏览器是否支持某项 CSS 特性。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function cssSupports(name: string, val?: string): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|name|Css 属性名|
|val|Css 属性值|
|返回值|如果支持，返回真|

```javascript
cssSupports('display', 'flex'); // -> true
cssSupports('display', 'invalid'); // -> false
cssSupports('text-decoration-line', 'underline'); // -> true
cssSupports('grid'); // -> true
cssSupports('invalid'); // -> false
```

## curry

函数柯里化。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function curry(fn: types.AnyFn): types.AnyFn;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|fn|源函数|
|返回值|目标函数|

```javascript
const add = curry(function(a, b) {
    return a + b;
});
const add1 = add(1);
add1(2); // -> 3
```

## dateFormat

简单日期格式化。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|date=new Date|要格式化的日期对象|
|mask|日期掩码|
|utc=false|是否是 UTC|
|gmt=false|是否是 GMT|
|返回值|格式化日期|

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

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function debounce&lt;T extends types.AnyFn&gt;(fn: T, wait: number): T;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|fn|源函数|
|wait|延迟毫秒数|
|返回值|目标函数|

```javascript
const calLayout = debounce(function() {}, 300);
// $(window).resize(calLayout);
```

## debug

简单的 JavaScript 输出 debug 日志函数。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function debug(name: string): any;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|name|名称|
|返回值|打印格式化日志的函数|

```javascript
const d = debug('test');
d('doing lots of uninteresting work');
d.enabled = false;
```

## deburr

转换拉丁语-1补充字母和拉丁语扩展字母-A为基本拉丁字母，并且去除组合变音标记。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function deburr(str: string): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|要处理的字符串|
|返回值|目标字符串|

```javascript
deburr('déjà vu'); // -> 'deja vu'
```

## decodeUriComponent

类似 decodeURIComponent 函数，只是输入不合法时不抛出错误并尽可能地对其进行解码。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function decodeUriComponent(str: string): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|要解码的字符串|
|返回值|解码后的字符串|

```javascript
decodeUriComponent('%%25%'); // -> '%%%'
decodeUriComponent('%E0%A4%A'); // -> '\xE0\xA4%A'
```

## defaults

填充对象的默认值。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function defaults(obj: any, ...src: any[]): any;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|obj|目标对象|
|...src|提供默认值对象|
|返回值|目标对象|

```javascript
defaults({ name: 'RedHood' }, { name: 'Unknown', age: 24 }); // -> {name: 'RedHood', age: 24}
```

## define

定义一个模块，需要跟 use 模块配合使用。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function define(
    name: string,
    requires: string[],
    method: types.AnyFn
): void;
function define(name: string, method: types.AnyFn): void;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|name|模块名|
|requires|依赖|
|method|模块主体函数|

模块主体函数只有被 use 模块使用时才会被执行。

```javascript
define('A', function() {
    return 'A';
});
define('B', ['A'], function(A) {
    return 'B' + A;
});
```

## defineProp

Object.defineProperty(defineProperties) 的快捷方式。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|obj|要定义的对象|
|prop|属性路径|
|descriptor|属性描述|
|返回值|传入对象|

|参数名|说明|
|-----|---|
|obj|要定义的对象|
|prop|属性描述|
|返回值|传入对象|

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

返回第一个不是未定义的参数。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function defined(...args: any[]): any;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|...args|参数列表|
|返回值|第一个定义了的参数|

```javascript
defined(false, 2, void 0, 100); // -> false
```

## delRequireCache

删除 node.js require 缓存。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function delRequireCache(id: string): void;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|id|模块名或路径|

```javascript
const licia = require('licia');
licia.a = 5;
delRequireCache('licia');
require('licia').a; // -> undefined
```

## delay

在指定时长后执行函数。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function delay(
    fn: types.AnyFn,
    wait: number,
    ...args: any[]
): void;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|fn|源函数|
|wait|延迟的毫秒数|
|...args|绑定参数|

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

事件委托。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">const delegate: {
    add(el: Element, type: string, selector: string, cb: types.AnyFn): void;
    remove(el: Element, type: string, selector: string, cb: types.AnyFn): void;
};</code>
</pre>
</details>

### add

添加事件委托。

|参数名|说明|
|-----|---|
|el|父元素|
|type|事件类型|
|selector|匹配选择器|
|cb|事件回调|

### remove

移除事件委托。

```javascript
const container = document.getElementById('container');
function clickHandler() {
    // Do something...
}
delegate.add(container, 'click', '.children', clickHandler);
delegate.remove(container, 'click', '.children', clickHandler);
```

## deprecate

Node.js util.deprecate 方法，支持浏览器。 

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function deprecate(fn: types.AnyFn, msg: string): types.AnyFn;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|fn|即将废弃的方法|
|msg|调用警告|
|返回值|废弃方法，调用时会打印警告|

```javascript
const fn = () => {};
const obsoleteFn = deprecate(fn, 'obsoleteFn is deprecated.');
obsoleteFn();
```

## detectBrowser

使用 ua 检测浏览器信息。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function detectBrowser(
    ua?: string
): {
    name: string;
    version: number;
};</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|ua=navigator.userAgent|浏览器用户代理|
|返回值|包含名称和版本的对象|

支持浏览器：ie，chrome，edge，firefox，opera，safari，ios（mobile safari），android（android browser）

```javascript
const browser = detectBrowser();
if (browser.name === 'ie' && browser.version < 9) {
    // Do something about old IE...
}
```

## detectMocha

检测是否有 mocha 测试框架在运行。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function detectMocha(): boolean;</code>
</pre>
</details>

```javascript
detectMocha(); // -> True if mocha is running.
```

## detectOs

使用 ua 检测操作系统。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function detectOs(ua?: string): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|ua=navigator.userAgent|浏览器用户代理|
|返回值|操作系统名称|

支持操作系统: windows, os x, linux, ios, android, windows phone

```javascript
if (detectOs() === 'ios') {
    // Do something about ios...
}
```

## difference

创建一个数组，该数组的元素不存在于给定的其它数组中。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function difference(arr: any[], ...args: any[]): any[];</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|arr|源数组|
|...args|要排除的元素|
|返回值|目标数组|

```javascript
difference([3, 2, 1], [4, 2]); // -> [3, 1]
```

## dotCase

将字符串转换为点式。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function dotCase(str: string): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|源字符串|
|返回值|点式字符串|

```javascript
dotCase('fooBar'); // -> foo.bar
dotCase('foo bar'); // -> foo.bar
```

## download

在浏览器端触发文件下载。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function download(
    data: Blob | File | string | any[],
    name: string,
    type?: string
): void;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|data|下载的数据|
|name|文件名|
|type=text/plain|数据类型|

```javascript
download('test', 'test.txt');
```

## durationFormat

简单时间格式化。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function durationFormat(duration: number, mask?: string): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|duration|要格式化的时间，单位为毫秒|
|mask='hh:mm:ss'|时间掩码|
|返回值|格式化时间|

|掩码|说明|
|----|----|
|d|天数|
|h|小时数|
|m|分钟数|
|s|秒数|
|l|毫秒数|

```javascript
durationFormat(12345678); // -> '03:25:45'
durationFormat(12345678, 'h:m:s:l'); // -> '3:25:45:678'
```

## each

遍历集合中的所有元素，用每个元素当做参数调用迭代器。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|obj|目标集合|
|iterator|迭代器|
|ctx|函数上下文|

```javascript
each({ a: 1, b: 2 }, function(val, key) {});
```

## easing

缓动函数，参考 http://jqueryui.com/ 。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|percent|位于 0 到 1 之前的数字|
|返回值|计算结果|

```javascript
easing.linear(0.5); // -> 0.5
easing.inElastic(0.5, 500); // -> 0.03125
```

## emulateTouch

在桌面端浏览器模拟 touch 事件。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function emulateTouch(el: Element): void;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|el|目标元素|

```javascript
const el = document.querySelector('#test');
emulateTouch(el);
el.addEventListener('touchstart', () => {}, false);
```

## endWith

检查字符串是否以指定字符串结尾。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function endWith(str: string, suffix: string): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|目标字符串|
|suffix|字符串后缀|
|返回值|如果是后缀，返回真|

```javascript
endWith('ab', 'b'); // -> true
```

## escape

转义 HTML 字符串，替换 &，<，>，"，`，和 ' 字符。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function escape(str: string): string;</code>
</pre>
</details>


|参数名|说明|
|-----|---|
|str|源字符串|
|返回值|目标字符串|

```javascript
escape('You & Me'); // -> 'You &amp; Me'
```

## escapeJsStr

转义字符串为合法的 JavaScript 字符串字面量。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function escapeJsStr(str: string): string;</code>
</pre>
</details>

http://www.ecma-international.org/ecma-262/5.1/#sec-7.8.4

|参数名|说明|
|-----|---|
|str|源字符串|
|返回值|目标字符串|

```javascript
escapeJsStr('"\n'); // -> '\\"\\\\n'
```

## escapeRegExp

转义特殊字符用于 RegExp 构造函数。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function escapeRegExp(str: string): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|源字符串|
|返回值|目标字符串|

```javascript
escapeRegExp('[licia]'); // -> '\\[licia\\]'
```

## evalCss

加载 css 到页面中。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function evalCss(css: string): HTMLStyleElement;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|css|css 代码|
|返回值|style 节点|

```javascript
evalCss('body{background:#08c}');
```

## evalJs

在指定的上下文执行 js 代码。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function evalJs(js: string, ctx?: any): void;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|js|JavaScript 代码|
|ctx=global|上下文|

```javascript
evalJs('5+2'); // -> 7
evalJs('this.a', { a: 2 }); // -> 2
```

## every

检查是否集合中的所有元素都能通过真值检测。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|object|目标集合|
|iterator|真值检测函数|
|context|函数上下文|
|返回值|如果都能通过，返回真|

```javascript
every([2, 4], function(val) {
    return val % 2 === 0;
}); // -> true
```

## extend

复制多个对象中的所有属性到目标对象上。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function extend(destination: any, ...sources: any[]): any;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|destination|目标对象|
|...sources|源对象|
|返回值|目标对象|

```javascript
extend({ name: 'RedHood' }, { age: 24 }); // -> {name: 'RedHood', age: 24}
```

## extendDeep

类似 extend，但会递归进行扩展。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function extendDeep(destination: any, ...sources: any[]): any;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|destination|目标对象|
|...sources|源对象|
|返回值|目标对象|

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

类似 extend，但只复制自己的属性，不包括原型链上的属性。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function extendOwn(destination: any, ...sources: any[]): any;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|obj|目标对象|
|...sources|源对象|
|返回值|目标对象|

```javascript
extendOwn({ name: 'RedHood' }, { age: 24 }); // -> {name: 'RedHood', age: 24}
```

## extractBlockCmts

从源码中提取块注释。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function extractBlockCmts(str: string): string[];</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|源码|
|返回值|块注释|

```javascript
extractBlockCmts('\/*licia*\/'); // -> ['licia']
```

## extractUrls

从文本中提取 url。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function extractUrls(str: string): string[];</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|文本|
|返回值|url 列表|

```javascript
const str =
    '[Official site: http://eustia.liriliri.io](http://eustia.liriliri.io)';
extractUrls(str); // -> ['http://eustia.liriliri.io']
```

## fetch

将 XMLHttpRequest 转换为 promise 的形式。

<details>
<summary>类型定义</summary>
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

注意：这并不是 fetch 的 pollyfill。

|参数名|说明|
|-----|---|
|url|请求地址|
|options|请求选项|
|返回值|请求 promise|

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

计算斐波那契数列中某位数字。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function fibonacci(n: number): number;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|n|序号 n|
|返回值|斐波那契数列 n 位的数字|

```javascript
fibonacci(1); // -> 1
fibonacci(3); // -> 2
```

## fileSize

将字节数转换为易于阅读的形式。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function fileSize(bytes: number): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|bytes|文件字节大小|
|返回值|易于阅读的文件大小|

```javascript
fileSize(5); // -> '5'
fileSize(1500); // -> '1.46K'
fileSize(1500000); // -> '1.43M'
fileSize(1500000000); // -> '1.4G'
fileSize(1500000000000); // -> '1.36T'
```

## fileType

使用幻数检测文件类型。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|input|文件输入|
|返回值|包括扩展名和 mime 类型的对象|

### 支持的文件类型

jpg, png, gif, webp, bmp, gz, zip, rar, pdf, exe

```javascript
const fs = require('fs');
const file = fs.readFileSync('path/to/file');
console.log(fileType(file)); // -> { ext: 'jpg', mime: 'image/jpeg' }
```

## fill

在数组指定位置填充指定值。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function fill(
    list: any[],
    val: any,
    start?: number,
    end?: number
): any[];</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|list|源数组|
|val|填充数组的值|
|start=0|起始位置|
|end=arr.length|结束位置，不包括|
|返回值|目标数组|

```javascript
fill([1, 2, 3], '*'); // -> ['*', '*', '*']
fill([1, 2, 3], '*', 1, 2); // -> [1, '*', 3]
```

## filter

遍历集合中的每个元素，返回所有通过真值检测的元素组成的数组。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|obj|要遍历的集合|
|predicate|真值检测函数|
|ctx|函数上下文|
|返回值|包含所有通过真值检测元素的数组|

```javascript
filter([1, 2, 3, 4, 5], function(val) {
    return val % 2 === 0;
}); // -> [2, 4]
```

## find

找到集合中第一个通过真值检测的元素。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|object|目标集合|
|iterator|真值检测函数|
|context|函数上下文|
|返回值|第一个通过的元素|

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

返回第一个通过真值检测元素在数组中的位置。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function findIdx(arr: any[], predicate: types.AnyFn): number;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|arr|目标集合|
|predicate|真值检测函数|
|返回值|第一个符合条件元素的位置|

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

返回对象中第一个通过真值检测的属性键名。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function findKey(
    obj: any,
    predicate: types.AnyFn,
    ctx?: any
): string | void;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|obj|目标对象|
|predicate|真值检测函数|
|ctx|函数上下文|
|返回值|符合条件的键名|

```javascript
findKey({ a: 1, b: 2 }, function(val) {
    return val === 1;
}); // -> a
```

## findLastIdx

同 findIdx，只是查找顺序改为从后往前。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function findLastIdx(arr: any[], predicate: types.AnyFn): number;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|arr|目标集合|
|predicate|真值检测函数|
|返回值|从后往前，第一个符合条件元素的位置|

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

递归拍平数组。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function flatten(arr: any[]): any[];</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|arr|源数组|
|返回值|目标数组|

```javascript
flatten(['a', ['b', ['c']], 'd', ['e']]); // -> ['a', 'b', 'c', 'd', 'e']
```

## fnArgs

检验函数参数。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function fnArgs(types: string[], args: any): void;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|types|参数类型|
|args|Argument 对象|

如果检验失败，抛出异常。

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

获取函数的参数名列表。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function fnParams(fn: types.AnyFn | string): string[];</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|fn|目标函数|
|返回值|参数名|

```javascript
fnParams(function(a, b) {}); // -> ['a', 'b']
```

## fnv1a

简单 FNV-1a 哈希算法实现。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function fnv1a(str: string): number;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|目标字符串|
|返回值|哈希结果|

```javascript
fnv1a('test'); // -> 2949673445
```

## format

使用类似于 printf 的方式来格式化字符串。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function format(str: string, ...values: any[]): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|源字符串|
|...values|替换占位符的值|
|返回值|目标字符串|

### 格式占位符 

|占位符|说明|
|-----|----|
|%s|字符串|
|%d, %i|整数|
|%f|浮点数|
|%o|对象|

```javascript
format('%s_%s', 'foo', 'bar'); // -> 'foo_bar'
```

## fraction

转换数字为分数形式。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function fraction(num: number): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|num|数字|
|返回值|对应的分数|

```javascript
fraction(1.2); // -> '6/5'
```

## freeze

Object.freeze 的快捷方式。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function freeze&lt;T&gt;(obj: T): T;</code>
</pre>
</details>

如果不支持 Object.freeze，使用 Object.defineProperties 进行模拟。

|参数名|说明|
|-----|---|
|obj|目标对象|
|返回值|目标对象|

```javascript
const a = { b: 1 };
freeze(a);
a.b = 2;
console.log(a); // -> {b: 1}
```

## freezeDeep

递归进行 Object.freeze。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function freezeDeep&lt;T&gt;(obj: T): T;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|obj|目标对象|
|返回值|目标对象|

```javascript
const a = { b: { c: 1 } };
freezeDeep(a);
a.b.c = 2;
console.log(a); // -> {b: {c: 1}}
```

## fs

node.js fs 模块的 promise 版本。

<details>
<summary>类型定义</summary>
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

全屏接口封装。

<details>
<summary>类型定义</summary>
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

进入全屏。

|参数名|说明|
|-----|---|
|el|Element|全屏元素|

### exit

退出全屏。

### toggle

切换全屏。

|参数名|说明|
|-----|---|
|el|全屏元素|

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

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|needle|搜索字符串|
|haystacks|搜索集合|
|options|搜索选项|

可用选项：

|参数名|说明|
|-----|---|
|caseSensitive=false|是否大小写敏感|
|key|搜索项是对象时的字符串路径|

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

使用欧几里德算法求最大公约数。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function gcd(a: number, b: number): number;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|a|要计算的数字|
|b|要计算的数字|
|返回值|最大公约数|

```javascript
gcd(121, 44); // -> 11
```

## getPort

获取有效的 TCP 端口。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function getPort(
    port?: number | number[],
    host?: string
): Promise&lt;number&gt;;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|port|首选端口|
|host|地址|
|返回值|有效端口|

如果首选端口无法使用，将会返回一个有效的随机端口。

```javascript
getPort([3000, 3001], '127.0.0.1').then(port => {
    console.log(port);
});
```

## getProto

获取对象的原型。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function getProto(obj: any): any;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|obj|目标对象|
|返回值|对象原型，如果不存在，返回 null|

```javascript
const a = {};
getProto(Object.create(a)); // -> a
```

## getUrlParam

获取 url 参数值。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function getUrlParam(
    name: string,
    url?: string
): string | undefined;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|name|参数名|
|url=location|目标 url|
|返回值|参数值|

```javascript
getUrlParam('test', 'http://example.com/?test=true'); // -> 'true'
```

## golangify

像 Go 一样处理错误。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function golangify&lt;T, U = Error&gt;(
    fn: (...args: any[]) =&gt; Promise&lt;T&gt;
): (...args: any[]) =&gt; Promise&lt;[T | undefined, U | null]&gt;;
function golangify&lt;T, U = Error&gt;(
    p: Promise&lt;T&gt;
): Promise&lt;[T | undefined, U | null]&gt;;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|fn|返回 Promise 的函数| 
|返回值|同上，但 Promise 的结果形式为 [result, error]|

|参数名|说明|
|-----|---|
|p|要转换的 Promise|
|返回值|目标 Promise，结果形式为 [result, error]|

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

创建 HTML 元素。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function h(
    tag: string,
    attrs?: types.PlainObj&lt;any&gt;,
    ...child: Array&lt;string | HTMLElement&gt;
): HTMLElement;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|tag|标签名|
|attrs|属性|
|...child|子节点|
|返回值|目标元素|

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

检查属性是否是对象自身的属性（原型链上的不算）。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function has(obj: {}, key: string): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|obj|目标对象|
|key|键名|
|返回值|如果是自身的属性，返回真|

```javascript
has({ one: 1 }, 'one'); // -> true
```

## heapSort

堆排序实现。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function heapSort(arr: any[], cmp?: types.AnyFn): any[];</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|arr|要排序的数组|
|cmp|比较器|
|返回值|有序数组|

```javascript
heapSort([2, 1]); // -> [1, 2]
```

## hex

hex 编解码。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">const hex: {
    encode(bytes: number[]): string;
    decode(str: string): number[];
};</code>
</pre>
</details>

### encode

将字节数组编码为 hex 字符串。

|参数名|说明|
|-----|---|
|bytes|字节数组|
|返回值|hex 编码的字符串|

### decode

将 hex 字符串解码为字节数组。

|参数名|说明|
|-----|---|
|str|hex 编码的字符串|
|返回值|字节数组|

```javascript
hex.encode([168, 174, 155, 255]); // -> 'a8ae9bff'
hex.decode('a8ae9bff'); // -> [168, 174, 155, 255]
```

## highlight

高亮代码。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|str|代码字符串|
|lang=js|语言，js，html 或者 css|
|style|高亮样式|
|返回值|高亮后的 html 代码字符串|

可设置样式：

comment，string，number，keyword，operator

```javascript
highlight('const a = 5;', 'js', {
    keyword: 'color:#569cd6;'
}); // -> '<span class="keyword" style="color:#569cd6;">const</span> a <span class="operator" style="color:#994500;">=</span> <span class="number" style="color:#0086b3;">5</span>;'
```

## hookFn

监听，修改函数参数和结果。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function hookFn&lt;T&gt;(
    fn: T,
    options: {
        before?: types.AnyFn;
        after?: types.AnyFn;
        error?: types.AnyFn;
    }
): T;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|fn|要监听修改的函数|
|options|监听选项|
|返回值|包装后的函数|

可用选项：

|参数名|说明|
|-----|---|
|before|参数处理函数|
|after|结果处理函数|
|error|异常处理函数|

```javascript
let sum = function(a, b) {
    if (a > 100) {
        throw Error('a is bigger than 100');
    }
    return a + b;
};
let totalSum = 0;
sum = hookFn(sum, {
    before(a, b) {
        return [+a, +b];
    },
    after(result) {
        totalSum += result;
        return totalSum;
    },
    error() {
        return totalSum;
    }
});
sum('2', '5'); // -> 7
```

## hotkey

监听键盘触发对应的事件。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">const hotkey: {
    on(key: string, listener: types.AnyFn): void;
    off(key: string, listener: types.AnyFn): void;
};</code>
</pre>
</details>

### on

注册键盘按键监听器。

|参数名|说明|
|-----|---|
|key|按键|
|listener|监听器|

### off

注销监听器。

```javascript
hotkey.on('k', function() {
    console.log('k is pressed');
});
function keyDown() {}
hotkey.on('shift+a, shift+b', keyDown);
hotkey.off('shift+a', keyDown);
```

## hslToRgb

将 hsl 格式的颜色值转换为 rgb 格式。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function hslToRgb(hsl: number[]): number[];</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|hsl|hsl 值|
|返回值|rgb 值|

```javascript
hslToRgb([165, 59, 50, 0.8]); // -> [52, 203, 165, 0.8]
```

## html

HTML 解析器。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">const html: {
    parse(html: string): any[];
    stringify(tree: any[]): string;
};</code>
</pre>
</details>

### parse

将 HTML 字符串转换为 js 对象。

|参数名|说明|
|-----|---|
|html|HTML 字符串|
|返回值|js 对象|

### stringify

将 js 对象序列化成 HTML 字符串。

|参数名|说明|
|-----|---|
|tree|要序列化的对象|
|返回值|HTML 字符串|

```javascript
const tree = html.parse('<div id="name">licia</div>');
// -> [{tag: 'div', attrs: {id: 'name'}, content: ['licia']}]
html.stringify(tree);
```

## identity

返回传入的第一个参数。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function identity&lt;T&gt;(val: T): T;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|任何值|
|返回值|第一个参数|

```javascript
identity('a'); // -> 'a'
```

## idxOf

返回指定值第一次在数组中出现的位置。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function idxOf(arr: any[], val: any, fromIdx?: number): number;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|arr|目标数组|
|val|要查找的值|
|fromIdx=0|查找起始位置|
|返回值|第一次出现的位置，如果没有，返回 -1|

```javascript
idxOf([1, 2, 1, 2], 2, 2); // -> 3
```

## indent

对文本的每一行进行缩进处理。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function indent(
    str: string,
    char?: string,
    len?: number
): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|源字符串|
|char|缩进字符|
|len|缩进长度|
|返回值|目标字符串|

```javascript
indent('foo\nbar', ' ', 4); // -> '    foo\n    bar'
```

## inherits

使构造函数继承另一个构造函数原型链上的方法。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function inherits(
    Class: types.AnyFn,
    SuperClass: types.AnyFn
): void;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|Class|子类|
|SuperClass|父类|

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

ini 文件解析器。

<details>
<summary>类型定义</summary>
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

将 ini 文件转换为 js 对象。

|参数名|说明|
|-----|---|
|ini|ini 文件|
|返回值|js 对象|

### stringify

将 js 对象序列化成 ini 文件格式。

|参数名|说明|
|-----|---|
|obj|要序列化的对象|
|options|序列化选项|
|返回值|ini 文件|

选项：

|参数名|说明|
|-----|---|
|section|顶部名称|
|whitespace=false|是否在 = 周围添加空格|

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

插入排序实现。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function insertionSort(arr: any[], cmp?: types.AnyFn): any[];</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|arr|要排序的数组|
|cmp|比较器|
|返回值|有序数组|

```javascript
insertionSort([2, 1]); // -> [1, 2]
```

## intersect

计算所有数组的交集。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function intersect(...arr: Array&lt;any[]&gt;): any[];</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|...arr|源数组|
|返回值|交集|

```javascript
intersect([1, 2, 3, 4], [2, 1, 10], [2, 1]); // -> [1, 2]
```

## intersectRange

计算两个区间的交集。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|a|区间 a|
|b|区间 b|
|返回值|如果存在区间交集，返回它|

```javascript
intersectRange({ start: 0, end: 12 }, { start: 11, end: 13 });
// -> {start: 11, end: 12}
intersectRange({ start: 0, end: 5 }, { start: 6, end: 7 });
// -> undefined
```

## invariant

Facebook 的 invariant 模块。

<details>
<summary>类型定义</summary>
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

[相关文档](https://github.com/zertosh/invariant)

```javascript
invariant(true, 'This will not throw');
// No errors
invariant(false, 'This will throw an error with this message');
// Error: Invariant Violation: This will throw an error with this message
```

## invert

生成一个新对象，该对象的键名和键值进行调换。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function invert(obj: any): any;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|obj|源对象|
|返回值|目标对象|

如果对象存在重复的键值，后面的值会覆盖前面的值。

```javascript
invert({ a: 'b', c: 'd', e: 'f' }); // -> {b: 'a', d: 'c', f: 'e'}
```

## isAbsoluteUrl

检查 url 是否是绝对地址。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isAbsoluteUrl(url: string): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|url|目标 url|
|返回值|如果是绝对地址，返回真|

```javascript
isAbsoluteUrl('http://www.surunzi.com'); // -> true
isAbsoluteUrl('//www.surunzi.com'); // -> false
isAbsoluteUrl('surunzi.com'); // -> false
```

## isArgs

检查值是否是参数类型。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isArgs(val: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果是参数类型，返回真|

```javascript
isArgs(
    (function() {
        return arguments;
    })()
); // -> true
```

## isArr

检查值是否是数组类型。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isArr(val: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果是数组类型，返回真|

```javascript
isArr([]); // -> true
isArr({}); // -> false
```

## isArrBuffer

检查值是否是 ArrayBuffer 类型。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isArrBuffer(val: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果是 ArrayBuffer 类型，返回真|

```javascript
isArrBuffer(new ArrayBuffer(8)); // -> true
```

## isArrLike

检查值是否是类数组对象。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isArrLike(val: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果是类数组对象，返回真|

对于函数，返回假。

```javascript
isArrLike('test'); // -> true
isArrLike(document.body.children); // -> true;
isArrLike([1, 2, 3]); // -> true
```

## isAsyncFn

检查值是否是 Async 函数。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isAsyncFn(val: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果是 Async 函数，返回真|

```javascript
isAsyncFn(function*() {}); // -> false
isAsyncFn(function() {}); // -> false
isAsyncFn(async function() {}); // -> true
```

## isBlob

检查值是否是 Blob 类型。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isBlob(val: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果是 Blob 类型，返回真|

```javascript
isBlob(new Blob([])); // -> true;
isBlob([]); // -> false
```

## isBool

检查值是否是布尔类型。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isBool(val: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果是布尔类型，返回真|

```javascript
isBool(true); // -> true
isBool(false); // -> true
isBool(1); // -> false
```

## isBrowser

检测是否运行于浏览器环境。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">const isBrowser: boolean;</code>
</pre>
</details>

```javascript
console.log(isBrowser); // -> true if running in a browser
```

## isBuffer

检查值是否是 Buffer 类型。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isBuffer(val: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果是 Buffer 类型，返回真|

```javascript
isBuffer(new Buffer(4)); // -> true
```

## isClose

检查两个数字是否近似相等。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|a|要比较的数字|
|b|要比较的数字|
|relTol=1e-9|相对误差|
|absTol=0|绝对误差|
|返回值|如果近似相等，返回真|

```javascript
isClose(1, 1.0000000001); // -> true
isClose(1, 2); // -> false
isClose(1, 1.2, 0.3); // -> true
isClose(1, 1.2, 0.1, 0.3); // -> true
```

## isCyclic

检查值是否存在循环引用。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isCyclic(val: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果存在循环引用，返回真|

```javascript
isCyclic({}); // -> false
const obj = { a: 1 };
obj.b = obj;
isCyclic(obj); // -> true
```

## isDarkMode

检测是否暗黑模式。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isDarkMode(): boolean;</code>
</pre>
</details>

```javascript
console.log(isDarkMode()); // true if dark mode
```

## isDataUrl

检查字符串是否是有效的 Data Url。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isDataUrl(str: string): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|要检查的字符串|
|返回值|如果是有效的 Data Url，返回真|

```javascript
isDataUrl('http://eustia.liriliri.io'); // -> false
isDataUrl('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D'); // -> true
```

## isDate

检查值是否是 Date 类型。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isDate(val: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果是 Date 类型，返回真|

```javascript
isDate(new Date()); // -> true
```

## isDir

检查路径是否是文件夹。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isDir(path: string): Promise&lt;boolean&gt;;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|path|要检查的路径|
|返回值|如果是文件夹，返回真|

```javascript
isDir('/foo/bar');
```

## isEl

检查值是否是 DOM 元素。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isEl(val: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果是 DOM 元素，返回真|

```javascript
isEl(document.body); // -> true
```

## isEmail

简单检查值是否是合法的邮件地址。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isEmail(val: string): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果是合法的邮件地址，返回真|

```javascript
isEmail('surunzi@foxmail.com'); // -> true
```

## isEmpty

检查值是否是空对象或空数组。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isEmpty(val: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果为空，返回真|

```javascript
isEmpty([]); // -> true
isEmpty({}); // -> true
isEmpty(''); // -> true
```

## isEqual

对两个对象进行深度比较，如果相等，返回真。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isEqual(val: any, other: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要比较的对象|
|other|要比较的对象|
|返回值|如果相等，返回真|

```javascript
isEqual([1, 2, 3], [1, 2, 3]); // -> true
```

## isErr

检查值是否是 Error 类型。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isErr(val: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果是 Error 类型，返回真|

```javascript
isErr(new Error()); // -> true
```

## isEven

检查数字是否是偶数。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isEven(num: number): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|num|要检查的数字|
|返回值|如果是偶数，返回真|

```javascript
isEven(0); // -> true
isEven(1); // -> false
isEven(2); // -> true
```

## isFile

检查值是否是 File 类型。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isFile(val: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果是 File 类型，返回真|

```javascript
isFile(new File(['test'], 'test.txt', { type: 'text/plain' })); // -> true
```

## isFinite

检查值是否是有限数字。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isFinite(val: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果是有限数字，返回真|

```javascript
isFinite(3); // -> true
isFinite(Infinity); // -> false
```

## isFn

检查值是否是函数。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isFn(val: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果是函数，返回真|

Generator 函数返回真。

```javascript
isFn(function() {}); // -> true
isFn(function*() {}); // -> true
isFn(async function() {}); // -> true
```

## isFullWidth

检查值是否是全角字符。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isFullWidth(codePoint: number): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|codePoint|Unicode 码点|
|返回值|如果字符是全角，返回真|

```javascript
isFullWidth('a'.codePointAt(0)); // -> false
isFullWidth(','.codePointAt(0)); // -> false
isFullWidth('我'.codePointAt(0)); // -> true
isFullWidth('，'.codePointAt(0)); // -> true
```

## isGeneratorFn

检查值是否是 Generator 函数。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isGeneratorFn(val: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果是 Generator 函数，返回真|

```javascript
isGeneratorFn(function*() {}); // -> true
isGeneratorFn(function() {}); // -> false
```

## isHidden

检查元素是否隐藏。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|el|目标元素|
|options|检查选项|
|返回值|如果元素隐藏，返回真|

可用选项：

|参数名|说明|
|-----|---|
|display=true|检查是否显示|
|visibility=false|检查 visibility css 属性|
|opacity=false|检查 opacity css 属性|
|size=false|检查宽高|
|viewport=false|检查是否在可视区域|
|overflow=false|检查是否因 overflow 隐藏|

```javascript
isHidden(document.createElement('div')); // -> true
```

## isInt

检查值是否是整数。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isInt(val: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果是整数，返回真|

```javascript
isInt(5); // -> true
isInt(5.1); // -> false
isInt({}); // -> false
```

## isIp

检查值是否是 IP 地址。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">namespace isIp {
    function v4(str: string): boolean;
    function v6(str: string): boolean;
}
function isIp(str: string): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|要检查的字符串|
|返回值|如果是 IP 地址，返回真|

### v4

检查值是否是 IPv4 地址。

### v6

检查值是否是 IPv6 地址。

```javascript
isIp('192.168.191.1'); // -> true
isIp('1:2:3:4:5:6:7:8'); // -> true
isIp('test'); // -> false
isIp.v4('192.168.191.1'); // -> true
isIp.v6('1:2:3:4:5:6:7:8'); // -> true
```

## isJson

检查值是否是有效的 JSON。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isJson(val: string): boolean;</code>
</pre>
</details>

该模块使用 `JSON.parse()` 和 `try... catch` 进行检测。

|参数名|说明|
|-----|---|
|val|JSON 字符串|
|返回值|如果是有效的 JSON，返回真|

```javascript
isJson('{"a": 5}'); // -> true
isJson("{'a': 5}"); // -> false
```

## isLeapYear

检查年份是否是闰年。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isLeapYear(year: number): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|year|要检查的年份|
|返回值|如果是闰年，返回真|

```javascript
isLeapYear(2000); // -> true
isLeapYear(2002); // -> false
```

## isMap

检查值是否是 Map 对象。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isMap(val: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果是 Map 类型，返回真|

```javascript
isMap(new Map()); // -> true
isMap(new WeakMap()); // -> false
```

## isMatch

检查对象所有键名和键值是否在指定的对象中。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isMatch(obj: any, src: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|obj|目标对象|
|src|进行匹配的对象|
|返回值|如果匹配，返回真|

```javascript
isMatch({ a: 1, b: 2 }, { a: 1 }); // -> true
```

## isMiniProgram

检测是否运行于微信小程序环境中。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">const isMiniProgram: boolean;</code>
</pre>
</details>

```javascript
console.log(isMiniProgram); // -> true if running in mini program.
```

## isMobile

使用 ua 检测是否运行于移动端浏览器。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isMobile(ua?: string): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|ua=navigator.userAgent|浏览器用户代理|
|返回值|如果是移动端浏览器，返回真|

```javascript
isMobile(navigator.userAgent);
```

## isNaN

检测值是否是 NaN。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isNaN(val: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果是 NaN，返回真|

跟全局 isNaN 不同的是，Undefined 不是 NaN。

```javascript
isNaN(0); // -> false
isNaN(NaN); // -> true
```

## isNative

检查值是否是原生函数。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isNative(val: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果是原生函数，返回真|

```javascript
isNative(function() {}); // -> false
isNative(Math.min); // -> true
```

## isNil

检查值是否是 null 或 undefined，等价于 value == null。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isNil(val: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果是 null 或 undefined，返回真|

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

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">const isNode: boolean;</code>
</pre>
</details>

```javascript
console.log(isNode); // -> true if running in node
```

## isNull

检查值是否是 Null 类型。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isNull(val: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果是 Null 类型，返回真|

```javascript
isNull(null); // -> true
```

## isNum

检测值是否是数字类型。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isNum(val: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果是数字，返回真|

```javascript
isNum(5); // -> true
isNum(5.1); // -> true
isNum({}); // -> false
```

## isNumeric

检查值是否是数字，包括数字字符串。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isNumeric(val: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果是数字，返回真|

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

检查值是否是对象。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isObj(val: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果是对象，返回真|

[标准定义](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)

```javascript
isObj({}); // -> true
isObj([]); // -> true
```

## isOdd

检查数字是否是奇数。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isOdd(num: number): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|num|要检查的数字|
|返回值|如果是奇数，返回真|

```javascript
isOdd(0); // -> false
isOdd(1); // -> true
isOdd(2); // -> false
```

## isPlainObj

检查值是否是用 Object 构造函数创建的对象。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isPlainObj(val: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果是 plain object，返回真|

```javascript
isPlainObj({}); // -> true
isPlainObj([]); // -> false
isPlainObj(function() {}); // -> false
```

## isPortFree

检查 TCP 端口是否可用。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isPortFree(
    port: number,
    host?: string
): Promise&lt;boolean&gt;;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|port|TCP 端口|
|host|地址|
|返回值|如果端口可用，返回真|

```javascript
isPortFree(3000).then(isFree => {
    // Do something.
});
```

## isPrime

检查整数是否是质数。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isPrime(num: number): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|num|要检查的数字|
|返回值|如果是质数，返回真|

```javascript
isPrime(11); // -> true
isPrime(8); // -> false
```

## isPrimitive

检测值是否是字符串，数字，布尔值或 null。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isPrimitive(val: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果是原始类型，返回真|

```javascript
isPrimitive(5); // -> true
isPrimitive('abc'); // -> true
isPrimitive(false); // -> true
```

## isPromise

检查值是否是类 promise 对象。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isPromise(val: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果是类 promise 对象，返回真|

```javascript
isPromise(new Promise(function() {})); // -> true
isPromise({}); // -> false
```

## isRegExp

检查值是否是正则类型。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isRegExp(val: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果是正则类型，返回真|

```javascript
isRegExp(/a/); // -> true
```

## isRelative

检查路径是否是相对路径。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isRelative(path: string): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|path|要检查的路径|
|返回值|如果是相对路径，返回真|

```javascript
isRelative('README.md'); // -> true
```

## isRetina

判断是否运行在 retina 屏幕的设备上。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">const isRetina: boolean;</code>
</pre>
</details>

```javascript
console.log(isRetina); // -> true if high DPR
```

## isRunning

检查进程是否运行中。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isRunning(pid: number): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---
|pid|进程 id|
|返回值|如果进程运行中，返回真|

```javascript
isRunning(123456); // true if running
```

## isSet

检查值是否是 Set 类型。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isSet(val: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果是 Set 类型，返回真|

```javascript
isSet(new Set()); // -> true
isSet(new WeakSet()); // -> false
```

## isSorted

检查数组是否有序。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isSorted(arr: any[], cmp?: types.AnyFn): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|arr|目标数组|
|cmp|比较器|
|返回值|如果数组有序，返回真|

```javascript
isSorted([1, 2, 3]); // -> true
isSorted([3, 2, 1]); // -> false
```

## isStr

检查值是否是字符串。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isStr(val: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果是字符串，返回真|

```javascript
isStr('licia'); // -> true
```

## isStream

检查值是否是 Node.js Stream 类型。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isStream(val: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果是 Node.js Stream 类型，返回真|

```javascript
const stream = require('stream');

isStream(new stream.Stream()); // -> true
```

## isSymbol

检查值是否是 Symbol 类型。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isSymbol(val: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果是 Symbol 类型，返回真|

```javascript
isSymbol(Symbol('test')); // -> true
```

## isTypedArr

检查值是否 TypedArray 类型。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isTypedArr(val: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果值是 TypedArray 类型，返回真|

```javascript
isTypedArr([]); // -> false
isTypedArr(new Uint8Array(8)); // -> true
```

## isUndef

检查值是否是 undefined。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isUndef(val: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果是 undefined，返回真|

```javascript
isUndef(void 0); // -> true
isUndef(null); // -> false
```

## isUrl

简单检查值是否是有效的 url 地址。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isUrl(val: string): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果是有效的 url 地址，返回真|

```javascript
isUrl('http://www.example.com?foo=bar&param=test'); // -> true
```

## isWeakMap

检查值是否是 WeakMap 类型。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isWeakMap(val: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果是 WeakMap 类型，返回真|

```javascript
isWeakMap(new Map()); // -> false
isWeakMap(new WeakMap()); // -> true
```

## isWeakSet

检查值是否是 WeakSet 类型。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function isWeakSet(val: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要检查的值|
|返回值|如果是 WeakSet 类型，返回真|

```javascript
isWeakSet(new Set()); // -> false
isWeakSet(new WeakSet()); // -> true
```

## isWindows

检测是否运行在 windows 操作系统上。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">const isWindows: boolean;</code>
</pre>
</details>

```javascript
console.log(isWindows); // -> true if running on windows
```

## jsonClone

使用 JSON parse 和 stringify 方法对指定对象进行复制。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function jsonClone&lt;T&gt;(val: T): T;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要克隆的值|
|返回值|克隆值|

```javascript
jsonClone({ name: 'licia' }); // -> { name: 'licia' }
```

## jsonp

简单 jsonp 实现。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|options|jsonp 选项|

可用选项：

|参数名|说明|
|-----|---|
|url|请求地址|
|data|请求数据|
|success|成功回调|
|param=callback|回调参数名|
|name|回调函数名|
|error|失败回调|
|complete|结束回调|
|timeout|请求超时|

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

将字符串转换为短横线式。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function kebabCase(str: string): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|源字符串|
|返回值|短横线式字符串|

```javascript
kebabCase('fooBar'); // -> foo-bar
kebabCase('foo bar'); // -> foo-bar
kebabCase('foo_bar'); // -> foo-bar
kebabCase('foo.bar'); // -> foo-bar
```

## keyCode

键码键名转换。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function keyCode(name: string): number;
function keyCode(code: number): string;</code>
</pre>
</details>

获取键码对应的键名。

|参数名|说明|
|-----|---|
|code|键码|
|返回值|对应的键名|

获取键名对应的键码。

|参数名|说明|
|-----|---|
|name|键名|
|返回值|对应的键码|

```javascript
keyCode(13); // -> 'enter'
keyCode('enter'); // -> 13
```

## keys

返回包含对象自身可遍历所有键名的数组。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function keys(obj: any): string[];</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|obj|目标对象|
|返回值|所有键名|

```javascript
keys({ a: 1 }); // -> ['a']
```

## kill

杀死进程。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function kill(pid: number): void;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|pid|进程 ID|

```javascript
kill(9420);
```

## last

获取数组的最后一个元素。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function last(arr: any[]): any;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|arr|目标数组|
|返回值|数组的最后一个元素|

```javascript
last([1, 2]); // -> 2
```

## lazyImport

模块懒加载，底层使用 Proxy。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function lazyImport&lt;T&gt;(
    importFn: (moduleId: string) =&gt; T,
    dirname?: string
): (moduleId: string) =&gt; T;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|importFn|实际引入模块的方法|
|dirname|当前脚本所在目录|
|返回值|用于引入模块的新方法|

```javascript
const r = lazyImport(require);

const _ = r('underscore');

_.isNumber(5);
```

## lazyRequire

模块懒加载。

<details>
<summary>类型定义</summary>
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

计算字符串编辑距离，使用 levenshtein 算法。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function levenshtein(a: string, b: string): number;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|a|字符串 a|
|b|字符串 b|
|返回值|a 和 b 的字符串编辑距离|

```javascript
levenshtein('cat', 'cake'); // -> 2
```

## linkify

将文本中的 url 地址转换为超链接。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function linkify(str: string, hyperlink?: types.AnyFn): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|源字符串|
|hyperlink|转换超链接函数|
|返回值|目标字符串|

```javascript
const str = 'Official site: http://eustia.liriliri.io';
linkify(str); // -> 'Official site: <a href="http://eustia.liriliri.io">http://eustia.liriliri.io</a>'
linkify(str, function(url) {
    return '<a href="' + url + '" target="_blank">' + url + '</a>';
});
```

## loadCss

往页面插入样式链接。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function loadCss(src: string, cb?: types.AnyFn): void;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|src|样式文件地址|
|cb|加载完回调|

```javascript
loadCss('style.css', function(isLoaded) {
    // Do something...
});
```

## loadImg

加载指定地址的图片。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function loadImg(src: string, cb?: types.AnyFn): void;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|src|图片地址|
|cb|加载完回调|

```javascript
loadImg('http://eustia.liriliri.io/img.jpg', function(err, img) {
    console.log(img.width, img.height);
});
```

## loadJs

往页面插入脚本链接。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function loadJs(src: string, cb?: types.AnyFn): void;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|src|脚本地址|
|cb|加载完回调|

```javascript
loadJs('main.js', function(isLoaded) {
    // Do something...
});
```

## longest

获取数组中最长的一项。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function longest(arr: string[]): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|arr|目标数组|
|返回值|最长的一项|

```javascript
longest(['a', 'abcde', 'abc']); // -> 'abcde'
```

## lowerCase

转换字符串为小写。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function lowerCase(str: string): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|源字符串|
|返回值|目标字符串|

```javascript
lowerCase('TEST'); // -> 'test'
```

## lpad

对字符串进行左填充。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function lpad(str: string, len: number, chars?: string): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|源字符串|
|len|填充长度|
|chars|填充字符串|
|返回值|目标字符串|

```javascript
lpad('a', 5); // -> '    a'
lpad('a', 5, '-'); // -> '----a'
lpad('abc', 3, '-'); // -> 'abc'
lpad('abc', 5, 'ab'); // -> 'ababc'
```

## ltrim

删除字符串头部指定字符或空格。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function ltrim(str: string, chars?: string | string[]): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|源字符串|
|chars|删除字符|
|返回值|目标字符串|

```javascript
ltrim(' abc  '); // -> 'abc  '
ltrim('_abc_', '_'); // -> 'abc_'
ltrim('_abc_', ['a', '_']); // -> 'bc_'
```

## map

对集合的每个元素调用转换函数生成与之对应的数组。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|object|源集合|
|iterator|转换函数|
|context|函数上下文|
|返回值|目标集合|

```javascript
map([4, 8], function(n) {
    return n * n;
}); // -> [16, 64]
```

## mapObj

类似 map，但针对对象，生成一个新对象。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function mapObj&lt;T, TResult&gt;(
    object: types.Dictionary&lt;T&gt;,
    iterator: types.ObjectIterator&lt;T, TResult&gt;,
    context?: any
): types.Dictionary&lt;TResult&gt;;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|object|源对象|
|iterator|转换函数|
|context|函数上下文|
|返回值|目标对象|

```javascript
mapObj({ a: 1, b: 2 }, function(val, key) {
    return val + 1;
}); // -> {a: 2, b: 3}
```

## matcher

传入对象返回函数，如果传入参数中包含该对象则返回真。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function matcher(attrs: any): types.AnyFn;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|attrs|要匹配的对象|
|返回值|真值检测函数|

```javascript
const filter = require('licia/filter');

const objects = [
    { a: 1, b: 2, c: 3 },
    { a: 4, b: 5, c: 6 }
];
filter(objects, matcher({ a: 4, c: 6 })); // -> [{a: 4, b: 5, c: 6}]
```

## max

获取数字中的最大值。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function max(...num: number[]): number;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|...num|要计算的数字|
|返回值|最大值|

```javascript
max(2.3, 1, 4.5, 2); // 4.5
```

## md5

MD5 算法实现。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function md5(msg: string | number[]): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|msg|密文|
|返回值|MD5 摘要|

```javascript
md5('licia'); // -> 'e59f337d85e9a467f1783fab282a41d0'
```

## memStorage

Web Storage 接口的纯内存实现。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">const memStorage: typeof window.localStorage;</code>
</pre>
</details>

当 localStorage 或者 sessionStorage 无法使用时可以使用其作为替代。

```javascript
const localStorage = window.localStorage || memStorage;
localStorage.setItem('test', 'licia');
```

## memoize

缓存函数计算结果。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function memoize(
    fn: types.AnyFn,
    hashFn?: types.AnyFn
): types.AnyFn;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|fn|源函数|
|hashFn|计算缓存键名函数|
|返回值|目标函数|

```javascript
const fibonacci = memoize(function(n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
});
```

## mergeArr

将数组合并到第一个数组里。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function mergeArr&lt;T, U&gt;(
    first: ArrayLike&lt;T&gt;,
    ...arrays: ArrayLike&lt;U&gt;[]
): ArrayLike&lt;T | U&gt;;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|first|要修改的数组|
|arrays|合并到第一个数组的数组|
|返回值|第一个数组|

```javascript
const a = [1, 2];
mergeArr(a, [3, 4], [5, 6]);
console.log(a); // -> [1, 2, 3, 4, 5, 6]
```

## mergeSort

归并排序实现。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function mergeSort(arr: any[], cmp?: types.AnyFn): any[];</code>
</pre>
</details>

注意：它不改变原数组。

|参数名|说明|
|-----|---|
|arr|要排序的数组|
|cmp|比较器|
|返回值|有序数组|

```javascript
mergeSort([2, 1]); // -> [1, 2]
```

## meta

meta 操作库，将 name 和 content 属性值转换为键值对。

<details>
<summary>类型定义</summary>
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

获取指定 meta 值。如果忽略 meta 名，所有的 meta 键值对都被返回。

|参数名|说明|
|-----|---|
|name|meta 名|
|返回值|meta 值|

设置 meta 值。

|参数名|说明|
|-----|---|
|name|meta 名|
|content|meta 值|

|参数名|说明|
|-----|---|
|metas|包含所有 meta 键值对的对象|

### remove

移除指定 meta。

|参数名|说明|
|-----|---|
|name|meta 名|

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

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function methods(obj: any): string[];</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|obj|目标对象|
|返回值|方法名列表|

```javascript
methods(console); // -> ['Console', 'assert', 'dir', ...]
```

## mime

常用 mime 类型。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function mime(name: string): string | undefined;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|name|扩展名|
|返回值|mime 类型|

|参数名|说明|
|-----|---|
|name|mime 类型|
|返回值|扩展名|

该模块只包含常用的文件类型。

```javascript
mime('jpg'); // -> 'image/jpeg'
mime('bmp'); // -> 'image/bmp'
mime('video/mp4'); // -> 'mp4'
mime('test'); // -> undefined
```

## min

获取数字中的最小值。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function min(...num: number[]): number;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|...num|要计算的数字|
|返回值|最小值|

```javascript
min(2.3, 1, 4.5, 2); // 1
```

## mkdir

递归地创建文件夹。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|dir|文件夹路径|
|mode=0777|文件夹模式|
|cb|回调|

### sync

同步版本。

```javascript
mkdir('/tmp/foo/bar/baz', function(err) {
    if (err) console.log(err);
    else console.log('Done');
});
mkdir.sync('/tmp/foo2/bar/baz');
```

## moment

简单的类 moment.js 实现。

<details>
<summary>类型定义</summary>
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

## morphDom

将 DOM 树变化成目标 DOM 树。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function morphDom(from: Node, to: Node | string): Node;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|from|原始 DOM 树|
|to|要变化的 DOM 树|
|返回值|变化后的 DOM 树|

```javascript
const el1 = document.createElement('div');
el1.className = 'test';
const el2 = document.createElement('div');
el2.className = 'licia';
morphDom(el1, el2);
console.log(el1.className); // -> 'licia'
```

## morse

摩尔斯电码编解码。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">const morse: {
    encode(txt: string): string;
    decode(morse: string): string;
};</code>
</pre>
</details>

### encode

将文本转换为摩尔斯电码。

|参数名|说明|
|-----|---|
|txt|要编码的文本|
|返回值|摩尔斯电码|

### decode

将摩尔斯电码转换为文本。

|参数名|说明|
|-----|---|
|morse|摩尔斯电码|
|返回值|解码后的文本|

```javascript
const str = morse.encode('Hello, world.');
// -> '.... . .-.. .-.. --- --..-- ....... .-- --- .-. .-.. -.. .-.-.-'
morse.decode(str); // -> 'Hello, world.'
```

## ms

时长字符串与毫秒转换库。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function ms(str: string): number;
function ms(num: number): string;</code>
</pre>
</details>

转换时长字符串为毫秒。

|参数名|说明|
|-----|---|
|str|字符串格式|
|返回值|毫秒|

转换毫秒为时长字符串。

|参数名|说明|
|-----|---|
|num|毫秒|
|返回值|字符串格式|

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

以自然顺序排序数组。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function naturalSort&lt;T extends any[]&gt;(arr: T): T;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|arr|要排序的数组|
|返回值|有序数组|

```javascript
naturalSort(['img12', 'img11', '$img', '_img', '1', '2', '12']);
// -> ['1', '2', '12', '$img', 'img11', 'img12', '_img']
naturalSort([2, '1', 13]); // -> ['1', 2, 13]
```

## negate

创建一个将原函数结果取反的函数。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function negate&lt;T extends types.AnyFn&gt;(predicate: T): T;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|predicate|源函数|
|返回值|目标函数|

```javascript
function even(n) {
    return n % 2 === 0;
}
[1, 2, 3, 4, 5, 6].filter(negate(even)); // -> [1, 3, 5]
```

## nextTick

能够同时运行在 node 和浏览器端的 next tick 实现。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function nextTick(cb: types.AnyFn): void;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|cb|调用函数|

如果支持 process.nextTick，则调用它，否则使用 setImmediate 或 setTimeout 进行兼容。

```javascript
nextTick(function() {
    // Do something...
});
```

## noop

一个什么也不做的空函数。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function noop(): void;</code>
</pre>
</details>

```javascript
noop(); // Does nothing
```

## normalizeHeader

标准化 HTTP 头部名。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function normalizeHeader(header: string): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|header|源头部名|
|返回值|目标头部名|

```javascript
normalizeHeader('content-type'); // -> 'Content-Type'
normalizeHeader('etag'); // -> 'ETag'
```

## normalizePath

标准化文件路径中的斜杠。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function normalizePath(path: string): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|path|源路径|
|返回值|目标路径|

```javascript
normalizePath('\\foo\\bar\\'); // -> '/foo/bar/'
normalizePath('./foo//bar'); // -> './foo/bar'
```

## normalizePhone

标准化电话号码为 E.164 格式。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|phone|电话号码|
|options|标准化选项|
|返回值|E.164 格式电话号码|

可用选项：

|参数名|说明|
|-----|---|
|countryCode|国家代码|
|trunkPrefix=false|如果本地格式有长途字冠，设为真|

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

Web Notifications 接口简单包装。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|title|通知标题|
|options|通知选项|

你可以传入所有在 [Web Notification](https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification) 中支持的选项。

### Notification

如果你想要监听并处理像 close，show，click 或者 error 等事件，使用这个类创建实例。

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

获取当前时间戳。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function now(): number;</code>
</pre>
</details>

```javascript
now(); // -> 1468826678701
```

## objToStr

Object.prototype.toString 的别名。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function objToStr(val: any): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|目标值|
|返回值|字符串表示|

```javascript
objToStr(5); // -> '[object Number]'
```

## omit

类似 pick，但结果相反。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function omit(
    obj: any,
    filter: string | string[] | Function
): any;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|obj|源对象|
|filter|对象过滤器|
|返回值|目标对象|

```javascript
omit({ a: 1, b: 2 }, 'a'); // -> {b: 2}
omit({ a: 1, b: 2, c: 3 }, ['b', 'c']); // -> {a: 1}
omit({ a: 1, b: 2, c: 3, d: 4 }, function(val, key) {
    return val % 2;
}); // -> {b: 2, d: 4}
```

## once

创建只能调用一次的函数。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function once(fn: types.AnyFn): types.AnyFn;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|fn|源函数|
|返回值|目标函数|

```javascript
function init() {}
const initOnce = once(init);
initOnce();
initOnce(); // -> init is invoked once
```

## open

打开 url 地址或文件。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function open(target: string): any;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|target|要打开的目标|
|返回值|子进程对象|

```javascript
open('https://eustia.liriliri.io/');
```

## openFile

在浏览器中打开文件选择框。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function openFile(options?: {
    accept?: string;
    multiple?: boolean;
}): Promise&lt;File[]&gt;;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|options|选项|
|返回值|文件列表|

可用选项：

|参数名|说明|
|-----|---|
|accept|文件类型|
|multiple=false|是否支持多选|

```javascript
openFile({ multiple: true }).then(fileList => {
    console.log(fileList);
});
```

## optimizeCb

用于高效的函数上下文绑定。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function optimizeCb(
    fn: types.AnyFn,
    ctx: any,
    argCount?: number
): types.AnyFn;</code>
</pre>
</details>

## ordinal

转换数字为序数形式。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function ordinal(num: number): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|num|要转换的数字|
|返回值|目标序数|

```javascript
ordinal(1); // -> '1st'
ordinal(2); // -> '2nd'
```

## orientation

屏幕方向工具库。

<details>
<summary>类型定义</summary>
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

绑定 change 事件。

### off

解绑 change 事件。

### get

获取当前屏幕方向（横屏 landscape 或 竖屏 portrait）。

```javascript
orientation.on('change', function(direction) {
    console.log(direction); // -> 'portrait'
});
orientation.get(); // -> 'landscape'
```

## pad

对字符串进行左右填充。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function pad(str: string, len: number, chars?: string): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|源字符串|
|len|填充长度|
|chars|填充字符串|
|返回值|目标字符串|

```javascript
pad('a', 5); // -> '  a  '
pad('a', 5, '-'); // -> '--a--'
pad('abc', 3, '-'); // -> 'abc'
pad('abc', 5, 'ab'); // -> 'babca'
pad('ab', 5, 'ab'); // -> 'ababa'
```

## pairs

将对象转换为包含【键名，键值】对的数组。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function pairs(obj: any): Array&lt;any[]&gt;;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|obj|目标对象|
|返回值|键值对数组|

```javascript
pairs({ a: 1, b: 2 }); // -> [['a', 1], ['b', 2]]
```

## parallel

同时执行多个函数。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function parallel(tasks: types.AnyFn[], cb?: types.AnyFn): void;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|tasks|函数数组|
|cb|结束回调|

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

命令行参数简单解析。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|args|参数数组|
|options|解析选项|
|返回值|解析结果|

### options

|参数名|说明|
|-----|---|
|names|选项名及类型|
|shorthands|选项名缩写|

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

HTML 解析器。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|html|要解析的 HTML|
|handler|处理函数|

```javascript
parseHtml('<div>licia</div>', {
    start: (tag, attrs, unary) => {},
    end: tag => {},
    comment: text => {},
    text: text => {}
});
```

## partial

返回局部填充参数的函数，与 bind 模块相似。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function partial(
    fn: types.AnyFn,
    ...partials: any[]
): types.AnyFn;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|fn|源函数|
|...partials|局部填充参数|
|返回值|目标函数|

```javascript
const sub5 = partial(function(a, b) {
    return b - a;
}, 5);
sub5(20); // -> 15
```

## pascalCase

将字符串转换为帕斯卡式。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function pascalCase(str: string): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|源字符串|
|返回值|帕斯卡式字符串|

```javascript
pascalCase('fooBar'); // -> FooBar
pascalCase('foo bar'); // -> FooBar
pascalCase('foo_bar'); // -> FooBar
pascalCase('foo.bar'); // -> FooBar
```

## perfNow

高精度时间戳。

<details>
<summary>类型定义</summary>
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

过滤对象。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function pick(
    object: any,
    filter: string | string[] | Function
): any;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|object|源对象|
|filter|对象过滤器|
|返回值|目标对象|

```javascript
pick({ a: 1, b: 2 }, 'a'); // -> {a: 1}
pick({ a: 1, b: 2, c: 3 }, ['b', 'c']); // -> {b: 2, c: 3}
pick({ a: 1, b: 2, c: 3, d: 4 }, function(val, key) {
    return val % 2;
}); // -> {a: 1, c: 3}
```

## pipe

将所有的 stream 流连接起来。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">import stream = require(&#x27;stream&#x27;);
function pipe(...streams: stream.Stream[]): void;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|...streams|要连接的 stream 流|

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

提取数组对象中指定属性值，返回一个数组。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function pluck(object: any, key: string | string[]): any[];</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|obj|目标集合|
|key|属性路径|
|返回值|指定属性值列表|

```javascript
const stooges = [
    { name: 'moe', age: 40 },
    { name: 'larry', age: 50 },
    { name: 'curly', age: 60 }
];
pluck(stooges, 'name'); // -> ['moe', 'larry', 'curly']
```

## precision

获取数字的精度。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function precision(num: number): number;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|num|要检查的数字|
|返回值|精度|

```javascript
precision(1.234); // -> 3;
```

## prefetch

预获取指定的 url。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function prefetch(url: string): Promise&lt;void&gt;;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|url|目标 url|

如果支持，它将使用`<link rel=prefetch>`进行预加载。

```javascript
prefetch('https://eustia.liriliri.io/');
```

## prefix

给 css 属性名增加浏览器前缀。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">namespace prefix {
    function dash(name: string): string;
}
function prefix(name: string): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|name|源属性名|
|返回值|目标属性名|

### dash

同上，但返回短横线命名方式的版本。

```javascript
prefix('text-emphasis'); // -> 'WebkitTextEmphasis'
prefix.dash('text-emphasis'); // -> '-webkit-text-emphasis'
prefix('color'); // -> 'color'
```

## promisify

转换使用回调的异步函数，使其返回 Promise。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function promisify(
    fn: types.AnyFn,
    multiArgs?: boolean
): types.AnyFn;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|fn|源函数|
|multiArgs=false|回调是否有多个结果|
|返回值|目标函数|

如果 multiArgs 设为真，返回的 Promise 会将回调的结果合并成一个数组。

```javascript
const fs = require('fs');

const readFile = promisify(fs.readFile);
readFile('test.js', 'utf-8').then(function(data) {
    // Do something with file content.
});
```

## property

返回一个函数，该函数返回任何传入对象的指定属性。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function property(path: string | string[]): types.AnyFn;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|path|属性路径|
|返回值|目标函数|

```javascript
const obj = { a: { b: 1 } };
property('a')(obj); // -> {b: 1}
property(['a', 'b'])(obj); // -> 1
```

## query

解析序列化 url 的 query 部分。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">const query: {
    parse(str: string): any;
    stringify(object: any): string;
};</code>
</pre>
</details>

### parse

将 query 字符串解析成对象。

|参数名|说明|
|-----|---|
|str|query 字符串|
|返回值|query 对象|

### stringify

将对象序列化成 query 字符串。

|参数名|说明|
|-----|---|
|obj|query 对象|
|返回值|query 字符串|

```javascript
query.parse('foo=bar&eruda=true'); // -> {foo: 'bar', eruda: 'true'}
query.stringify({ foo: 'bar', eruda: 'true' }); // -> 'foo=bar&eruda=true'
query.parse('name=eruda&name=eustia'); // -> {name: ['eruda', 'eustia']}
```

## quickSort

快排实现。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function quickSort(arr: any[], cmp?: types.AnyFn): any[];</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|arr|要排序的数组|
|cmp|比较器|
|返回值|有序数组|

```javascript
quickSort([2, 1]); // -> [1, 2]
```

## raf

requestAnimationFrame 快捷方式。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">namespace raf {
    function cancel(id: number): void;
}
function raf(cb: types.AnyFn): number;</code>
</pre>
</details>

如果原生 requestAnimationFrame 不支持，使用 setTimeout 进行兼容。

```javascript
const id = raf(function tick() {
    // Animation stuff
    raf(tick);
});
raf.cancel(id);
```

## random

在给定区间内生成随机数。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function random(
    min: number,
    max?: number,
    floating?: boolean
): number;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|min|最小值|
|max|最大值|
|floating=false|是否允许浮点数|
|返回值|随机数|

```javascript
random(1, 5); // -> an integer between 0 and 5
random(5); // -> an integer between 0 and 5
random(1.2, 5.2, true); /// -> a floating-point number between 1.2 and 5.2
```

## randomBytes

随机字节序列生成器。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function randomBytes(size: number): Uint8Array;</code>
</pre>
</details>

如果支持，使用 node 的 crypto 模块或浏览器的 crypto 对象。

|参数名|说明|
|-----|---|
|size|字节序列长度|
|返回值|随机字节序列|

```javascript
randomBytes(5); // -> [55, 49, 153, 30, 122]
```

## randomColor

随机颜色生成器。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|options|随机选项|
|返回值|随机颜色|

可用选项：

|参数名|说明|
|-----|---|
|count=1|生成数|
|hue|色调，取值为 0 - 360|
|lightness|亮度，取值为 0 - 1|
|format=hex|颜色格式，hex，hsl 或者 rgb|
|seed|随机种子|

```javascript
randomColor({
    count: 2
}); // -> ['#fed7f4', '#526498']
```

## randomId

简单 id 生成器，类似于 nanoid。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function randomId(size?: number, symbols?: string): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|size=21|id 长度|
|symbols|生成 id 字符，默认为 a-zA-Z0-9_-|

```javascript
randomId(); // -> 'oKpy4HwU8E6IvU5I03gyQ'
randomId(5); // -> 'sM6E9'
randomId(5, 'abc'); // -> 'cbbcb'
```

## randomItem

随机获取数组中的某项。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function randomItem(arr: any[]): any;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|arr|目标数组|
|返回值|随机项|

```javascript
randomItem([1, 2, 3]); // -> 2
```

## range

创建整数数组。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function range(
    start: number,
    end?: number,
    step?: number
): number[];</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|start|起始值|
|end|结束值|
|step=1|相邻差|
|返回值|整数数组|

```javascript
range(5); // -> [0, 1, 2, 3, 4]
range(0, 5, 2); // -> [0, 2, 4]
```

## rc4

RC4 对称加密算法实现。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">const rc4: {
    encrypt(key: string, str: string): string;
    decrypt(key: string, str: string): string;
};</code>
</pre>
</details>

### encrypt

RC4 加密，结果表示为 base64 字符串。

### decrypt

RC4 解密，传入 base64 字符串。

|参数名|说明|
|-----|---|
|key|密钥|
|str|源字符串|
|返回值|目标字符串|

```javascript
rc4.encrypt('licia', 'Hello world'); // -> 'j9y2VpSfR3AdNN8='
rc4.decrypt('licia', 'j9y2VpSfR3AdNN8='); // -> 'Hello world'
```

## ready

dom 准备好时调用回调函数，类似于 jQuery 的 ready 方法。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function ready(fn: types.AnyFn): void;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|fn|回调函数|

```javascript
ready(function() {
    // It's safe to manipulate dom here.
});
```

## reduce

合并多个值成一个值。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|obj|目标集合|
|iteratee=identity|合并函数|
|initial|初始值|
|ctx|函数上下文|
|返回值|合并值|

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

类似于 reduce，只是从后往前合并。

<details>
<summary>类型定义</summary>
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

类似 filter，但结果相反。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|obj|要遍历的集合|
|predicate|真值检测函数|
|ctx|函数上下文|
|返回值|包含所有未通过真值检测元素的数组|

```javascript
reject([1, 2, 3, 4, 5], function(val) {
    return val % 2 === 0;
}); // -> [1, 3, 5]
```

## remove

移除集合中所有通过真值检测的元素，返回包含所有删除元素的数组。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function remove&lt;T, TResult&gt;(
    list: types.List&lt;T&gt;,
    iterator: types.ListIterator&lt;T, boolean&gt;,
    context?: any
): TResult[];</code>
</pre>
</details>

与 filter 不同，该模块会改变原数组。

|参数名|说明|
|-----|---|
|list|要遍历的集合|
|iterator|真值检测函数|
|context|函数上下文|
|返回值|包含所有删除元素的数组|

```javascript
const arr = [1, 2, 3, 4, 5];
const evens = remove(arr, function(val) {
    return val % 2 === 0;
});
console.log(arr); // -> [1, 3, 5]
console.log(evens); // -> [2, 4]
```

## repeat

重复字符串指定次数。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function repeat(str: string, n: number): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|源字符串|
|n|重复次数|
|返回值|目标字符串|

```javascript
repeat('a', 3); // -> 'aaa'
repeat('ab', 2); // -> 'abab'
repeat('*', 0); // -> ''
```

## replaceAll

替换字符串中所有指定字符串。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function replaceAll(
    str: string,
    substr: string,
    newSubstr: string
): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|源字符串|
|substr|被替换的子串|
|newSubstr|替换的子串|
|返回值|所有子串被替换后的新字符串|

```javascript
replaceAll('hello world goodbye world', 'world', 'licia'); // -> 'hello licia goodbye licia'
```

## restArgs

将给定序号后的参数合并成一个数组。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function restArgs(
    fn: types.AnyFn,
    startIndex?: number
): types.AnyFn;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|function|源函数|
|startIndex|合并参数起始位置|
|返回值|目标函数|

```javascript
const paramArr = restArgs(function(rest) {
    return rest;
});
paramArr(1, 2, 3, 4); // -> [1, 2, 3, 4]
```

## reverse

将数组元素颠倒，不改变原数组。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function reverse(arr: any[]): any[];</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|arr|源数组|
|返回值|目标数组|

```javascript
reverse([1, 2, 3]); // -> [3, 2, 1]
```

## rgbToHsl

将 rgb 格式的颜色值转换为 hsl 格式。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function rgbToHsl(rgb: number[]): number[];</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|rgb|rgb 值|
|返回值|hsl 值|

```javascript
rgbToHsl([52, 203, 165, 0.8]); // -> [165, 59, 50, 0.8]
```

## ric

requestIdleCallback 的快捷方式。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">namespace ric {
    function cancel(id: number): void;
}
function ric(cb: types.AnyFn): number;</code>
</pre>
</details>

如果原生 requestIdleCallback 不支持，使用 setTimeout 进行兼容。

```javascript
const id = ric(function() {
    // Called during a browser's idle periods
});
ric.cancel(id);
```

## rmCookie

遍历所有可能的路径和域名将 cookie 删除。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function rmCookie(key: string): void;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|key|cookie 名|

```javascript
rmCookie('test');
```

## rmdir

递归地删除文件夹。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function rmdir(dir: string, cb?: types.AnyFn): void;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|dir|文件夹路径|
|cb|回调|

```javascript
rmdir('/tmp/foo/bar/baz', function(err) {
    if (err) console.log(err);
    else console.log('Done');
});
```

## root

根对象引用，对于 nodeJs，取 `global` 对象，对于浏览器，取 `window` 对象。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">const root: any;</code>
</pre>
</details>

## rpad

对字符串进行右填充。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function rpad(str: string, len: number, chars?: string): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|源字符串|
|len|填充长度|
|chars|填充字符|
|返回值|目标字符串|

```javascript
rpad('a', 5); // -> 'a    '
rpad('a', 5, '-'); // -> 'a----'
rpad('abc', 3, '-'); // -> 'abc'
rpad('abc', 5, 'ab'); // -> 'abcab'
```

## rtrim

删除字符串尾部指定字符或空格。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function rtrim(str: string, chars?: string | string[]): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|源字符串|
|chars|删除字符|
|返回值|目标字符串|

```javascript
rtrim(' abc  '); // -> ' abc'
rtrim('_abc_', '_'); // -> '_abc'
rtrim('_abc_', ['c', '_']); // -> '_ab'
```

## safeCb

创建回调函数，内部模块使用。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function safeCb(
    val?: any,
    ctx?: any,
    argCount?: number
): types.AnyFn;</code>
</pre>
</details>

## safeDel

删除对象属性。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function safeDel(obj: any, path: string | string[]): any;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|obj|目标对象|
|path|属性路径|
|返回值|删除值或 undefined|

```javascript
const obj = { a: { aa: { aaa: 1 } } };
safeDel(obj, 'a.aa.aaa'); // -> 1
safeDel(obj, ['a', 'aa']); // -> {}
safeDel(obj, 'a.b'); // -> undefined
```

## safeGet

获取对象属性值，路径不存在时不报错。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function safeGet(obj: any, path: string | string[]): any;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|obj|目标对象|
|path|属性路径|
|返回值|属性值或 undefined|

```javascript
const obj = { a: { aa: { aaa: 1 } } };
safeGet(obj, 'a.aa.aaa'); // -> 1
safeGet(obj, ['a', 'aa']); // -> {aaa: 1}
safeGet(obj, 'a.b'); // -> undefined
```

## safeSet

设置对象属性值。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function safeSet(
    obj: any,
    path: string | string[],
    val: any
): void;</code>
</pre>
</details>

如果路径的某一层不存在，将会创建一个空对象。

|参数名|说明|
|-----|---|
|obj|目标对象|
|path|属性路径|
|val|要设置的值|

```javascript
const obj = {};
safeSet(obj, 'a.aa.aaa', 1); // obj = {a: {aa: {aaa: 1}}}
safeSet(obj, ['a', 'aa'], 2); // obj = {a: {aa: 2}}
safeSet(obj, 'a.b', 3); // obj = {a: {aa: 2, b: 3}}
```

## safeStorage

安全地使用 storage，使其在旧浏览器及 safari 无痕模式下能正常运行。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function safeStorage(type?: string): typeof window.localStorage;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|type='local'|模式，local 或 session|
|返回值|指定 storage|

```javascript
const localStorage = safeStorage('local');
localStorage.setItem('licia', 'util');
```

## sameOrigin

检查两个 url 是否同源。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function sameOrigin(url1: string, url2: string): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|url1|要检查的 url|
|url2|要检查的 url|
|返回值|同源，返回真|

```javascript
const url1 = 'http://example.com/a.html';
const url2 = 'http://example.com/b.html';
const url3 = 'http://licia.liriliri.io';
sameOrigin(url1, url2); // -> true
sameOrigin(url1, url3); // -> false
```

## sample

从集合中随机抽取部分样本。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function sample(obj: any, n: number): any[];</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|obj|目标集合|
|n|样本数量|
|返回值|样本|

```javascript
sample([2, 3, 1], 2); // -> [2, 3]
sample({ a: 1, b: 2, c: 3 }, 1); // -> [2]
```

## scrollTo

以动画的形式滚动到指定目标。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|target|滚动目标|
|options|滚动选项|

### 选项 

|选项名|说明|
|-----|----|
|tolerance=0|偏移|
|duration=800|时长|
|easing=outQuart|缓动函数|
|callback=noop|结束回调|

```javascript
scrollTo('body', {
    tolerance: 0,
    duration: 800,
    easing: 'outQuart',
    callback: function() {}
});
```

## seedRandom

随机数生成器。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function seedRandom(
    seed: number,
    min?: number,
    max?: number,
    floating?: boolean
): () =&gt; number;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|seed|随机种子|
|min=0|最小值|
|max=1|最大值|
|floating=true|是否允许浮点数|
|返回值|生成随机数字序列的函数|

```javascript
const random = seedRandom(19920719, 0, 100, false);
random(); // -> 7
random(); // -> 68
```

## selectionSort

选择排序实现。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function selectionSort(arr: any[], cmp?: types.AnyFn): any[];</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|arr|要排序的数组|
|cmp|比较器|
|返回值|有序数组|

```javascript
selectionSort([2, 1]); // -> [1, 2]
```

## selector

CSS 选择器解析器。

<details>
<summary>类型定义</summary>
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

将 CSS 选择器转换为 js 对象。

|参数名|说明|
|-----|---|
|selector|CSS 选择器|
|返回值|js 对象|

### stringify

将 js 对象序列化成 CSS 选择器。

|参数名|说明|
|-----|---|
|groups|要序列化的对象|
|返回值|CSS 选择器|

```javascript
const groups = selector.parse('#test, input.user[name="licia"]');
// -> [[{type: 'id', value: 'test'}],[{type: 'tag', value: 'input'}...]]
selector.stringify(groups);
```

## shebang

获取 shebang 命令。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function shebang(str: string): string | void;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|要获取命令的文本|
|返回值|Shebang 命令|

```javascript
shebang('#!/usr/bin/env node'); // -> '/usr/bin/env node'
shebang('#!/bin/bash'); // -> '/bin/bash'
shebang('node'); // -> undefined
```

## shellSort

希尔排序实现。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function shellSort(arr: any[], cmp?: types.AnyFn): any[];</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|arr|要排序的数组|
|cmp|比较器|
|返回值|有序数组|

```javascript
shellSort([2, 1]); // -> [1, 2]
```

## shuffle

将数组中元素的顺序打乱。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function shuffle(arr: any[]): any[];</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|arr|源数组|
|返回值|目标数组|

```javascript
shuffle([1, 2, 3]); // -> [3, 1, 2]
```

## size

获取对象的大小或类数组元素的长度。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function size(obj: any): number;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|obj|目标集合|
|返回值|集合大小|

```javascript
size({ a: 1, b: 2 }); // -> 2
size([1, 2, 3]); // -> 3
```

## sizeof

计算 js 对象大概的内存占用。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function sizeof(obj: any): number;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|obj|要计算的对象|
|返回值|对象大小，单位是字节|

一个字符占用 2 字节，布尔值 4 字节，数字 8 字节。

对象键名当成字符串来计算。

```javascript
sizeof('a'); // -> 2
sizeof(8); // -> 8
sizeof(false); // -> 4
sizeof(function() {}); // -> 0
sizeof({ a: 'b' }); // -> 4
```

## sleep

使用 Promise 模拟暂停方法。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function sleep(timeout: number): Promise&lt;void&gt;;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|timeout|暂停时长|

```javascript
(async function() {
    await sleep(2000);
})();
```

## slice

截取数组的一部分生成新数组。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function slice(
    array: any[],
    start?: number,
    end?: number
): any[];</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|array|目标数组|
|start=0|起始位置|
|end=array.length|结束位置，不包含|

```javascript
slice([1, 2, 3, 4], 1, 2); // -> [2]
```

## slugify

Slug 化字符串。 

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function slugify(
    str: string,
    replacement?: { [index: string]: string }
): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|源字符串|
|replacement|自定义替换|
|返回值|目标字符串|

```javascript
slugify('I ♥ pony'); // -> 'I-love-pony'
slugify('I ♥ pony', { ' ': '_' }); // -> 'I_love_pony'
```

## snakeCase

转换字符串为下划线式。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function snakeCase(str: string): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|源字符串|
|返回值|下划线式字符串|

```javascript
snakeCase('fooBar'); // -> foo_bar
snakeCase('foo bar'); // -> foo_bar
snakeCase('foo.bar'); // -> foo_bar
```

## some

检查集合中是否有元素通过真值检测。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|obj|目标集合|
|predicate|真值检测函数|
|ctx|函数上下文|
|返回值|如果有元素通过真值检测，返回真|

```javascript
some([2, 5], function(val) {
    return val % 2 === 0;
}); // -> true
```

## sortBy

遍历集合中的元素，将其作为参数调用函数，并以得到的结果为依据对数组进行排序。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function sortBy(
    arr: any,
    iterator?: types.AnyFn,
    ctx?: any
): any[];</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|arr|源集合|
|iteratee=identity|排序依据生成函数|
|ctx|函数上下文|
|返回值|排序后的数组|

```javascript
sortBy([1, 2, 3, 4, 5, 6], function(num) {
    return Math.sin(num);
}); // -> [5, 4, 6, 3, 1, 2]
```

## sortKeys

排序对象的键名。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|obj|要排序的对象|
|options|排序选项|
|返回值|排序后的对象|

可用选项：

|参数名|说明|
|-----|---|
|deep=false|是否递归|
|comparator|比较器|

```javascript
sortKeys(
    { b: { d: 2, c: 1 }, a: 0 },
    {
        deep: true
    }
); // -> {a: 0, b: {c: 1, d: 2}}
```

## spaceCase

将字符串转换为空格式。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function spaceCase(str: string): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|源字符串|
|返回值|空格式字符串|

```javascript
spaceCase('fooBar'); // -> foo bar
spaceCase('foo.bar'); // -> foo bar
spaceCase('foo.bar'); // -> foo bar
```

## splitCase

将不同命名式的字符串拆分成数组。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function splitCase(str: string): string[];</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|目标字符串|
|返回值|拆分成的数组|

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

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|path|目标路径|
|返回值|包含文件夹路径，文件名和扩展名的对象|

```javascript
splitPath('f:/foo/bar.txt'); // -> {dir: 'f:/foo/', name: 'bar.txt', ext: '.txt'}
splitPath('/home/foo/bar.txt'); // -> {dir: '/home/foo/', name: 'bar.txt', ext: '.txt'}
```

## stackTrace

获取 v8 的 CallSite 对象。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function stackTrace(): any[];</code>
</pre>
</details>

[Stack trace 接口说明](https://v8.dev/docs/stack-trace-api)

```javascript
stackTrace(); // -> List of CallSite objects
```

## startWith

检查字符串是否以指定字符串开头。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function startWith(str: string, prefix: string): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|目标字符串|
|prefix|字符串前缀|
|返回值|如果是前缀，返回真|

```javascript
startWith('ab', 'a'); // -> true
```

## strHash

使用 djb2 算法进行字符串哈希。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function strHash(str: string): number;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|目标字符串|
|返回值|哈希结果|

```javascript
strHash('test'); // -> 2090770981
```

## strToBytes

将字符串转换为字节数组。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function strToBytes(str: string, encoding?: string): number[];</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|目标字符串|
|encoding=utf8|字符串编码|
|返回值|字节数组|

支持编码：utf8，hex，base64

```javascript
strToBytes('licia'); // -> [108, 105, 99, 105, 97]
strToBytes('qK6b/w==', 'base64'); // -> [168, 174, 155, 255]
```

## strTpl

简单的字符串模板。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function strTpl(str: string, data: types.PlainObj&lt;any&gt;): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|模板字符串|
|data|渲染数据|
|返回值|目标字符串|

```javascript
strTpl('Hello, {{name.first}}!', { name: { first: 'licia' } }); // -> 'Hello, licia!'
```

## strWidth

获取字符串的可见宽度。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function strWidth(str: string): number;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|要获取宽度的字符串|
|返回值|可见宽度|

```javascript
strWidth('Hello \nworld!'); // -> 12
strWidth('\u001b[4m你好，世界！\u001b[0m'); // -> 12
```

## stringify

JSON 序列化，支持循环引用和函数。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function stringify(obj: any, spaces?: number): string;</code>
</pre>
</details>

undefined 被当作 null 处理。

|参数名|说明|
|-----|---|
|obj|目标对象|
|spaces|缩进|
|返回值|序列化后的字符串|

```javascript
stringify({ a: function() {} }); // -> '{"a":"[Function function () {}]"}'
const obj = { a: 1, b: {} };
obj.b = obj;
stringify(obj); // -> '{"a":1,"b":"[Circular ~]"}'
```

## stringifyAll

序列化对象，保留类型信息。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|obj|源对象|
|options|序列化选项|
|返回值|序列化后的字符串|

可用选项：

|参数名|说明|
|-----|---|
|unenumerable=false|包含不可枚举值|
|symbol=false|包含 Symbol 键名|
|accessGetter=false|获取 getter 值|
|timeout=0|序列化超时时间|
|depth=0|遍历对象的最大深度|
|ignore|忽略的对象|

超时后，所有未序列化的值都会变成 “Timeout”。

### parse

将字符串反序列化回对象。

|参数名|说明|
|-----|---|
|obj|序列化后的字符串|
|返回值|目标对象|

```javascript
stringifyAll(function test() {}); // -> '{"value":"function test() {}","type":"Function",...}'
```

## stripAnsi

清除字符串中的 ansi 控制码。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function stripAnsi(str: string): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|源字符串|
|返回值|目标字符串|

```javascript
stripAnsi('\u001b[4mcake\u001b[0m'); // -> 'cake'
```

## stripCmt

清除源码中的注释。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function stripCmt(str: string): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|源码|
|返回值|无注释代码|

```javascript
stripCmt('// comment \n var a = 5; \/* comment2\n * comment3\n *\/'); // -> ' var a = 5; '
```

## stripColor

清除字符串中的 ansi 颜色控制码。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function stripColor(str: string): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|源字符串|
|返回值|目标字符串|

```javascript
stripColor('\u001b[31mred\u001b[39m'); // -> 'red'
```

## stripHtmlTag

清除字符串中的 html 标签。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function stripHtmlTag(str: string): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|源字符串|
|返回值|目标字符串|

```javascript
stripHtmlTag('<p>Hello</p>'); // -> 'Hello'
```

## stripIndent

清除多行文本的缩进。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function stripIndent(str: string): string;
function stripIndent(
    literals: TemplateStringsArray,
    ...placeholders: any[]
): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|源字符串|
|返回值|目标字符串|

它可以像函数一样调用，也可以当成标签模板使用。

```javascript
stripIndent`
    Test string
        * item one
        * item two
`; // -> 'Test string\n    * item one\n    * item two'
```

## stripNum

将数字转换为指定的精度。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function stripNum(num: number, precision?: number): number;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|num|源数字|
|precision=12|精度|
|返回值|目标数字|

```javascript
stripNum(0.1 + 0.2); // -> 0.3
```

## sum

计算数字和。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function sum(...num: number[]): number;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|...num|要计算的数字|
|返回值|数字和|

```javascript
sum(1, 2, 5); // -> 8
```

## swap

交换数组中的两项。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function swap(arr: any[], a: number, b: number): any[];</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|arr|目标数组|
|a|序号一|
|b|序号二|
|返回值|数组本身|

```javascript
const arr = [1, 2];
swap(arr, 0, 1); // -> [2, 1]
```

## table

输出表格字符串。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function table(rows: Array&lt;string[]&gt;): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|rows|表格数据|
|返回值|表格字符串|

```javascript
table([
    ['', 'firstName', 'lastName'],
    ['daughter', 'Emily', 'Smith'],
    ['father', 'John', 'Smith'],
    ['mother', 'Jane', 'Smith']
]);
```

## template

将模板字符串编译成函数用于渲染。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function template(str: string, util?: any): types.AnyFn;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|模板字符串|
|util|模板函数|
|返回值|编译后的模板函数|

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

返回函数的节流阀版本。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function throttle&lt;T extends types.AnyFn&gt;(fn: T, wait: number): T;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|fn|源函数|
|wait|延迟毫秒数|
|返回值|目标函数|

```javascript
const updatePos = throttle(function() {}, 100);
// $(window).scroll(updatePos);
```

## through

stream Transform 类的简单包装。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|opts={}|初始化流选项|
|transform|Transform 实现|
|flush|Flush 实现|

### obj

设置 objectMode 为真的快捷方式。

### ctor

返回继承 Transform 的类。

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

将时间格式化成多久之前的形式。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function timeAgo(
    date: Date | number,
    now?: Date | number
): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|date|目标日期|
|now=new Date|当时日期|
|返回值|格式化时间表示|

```javascript
const now = new Date().getTime();
timeAgo(now - 1000 * 6); // -> right now
timeAgo(now + 1000 * 15); // -> in 15 minutes
timeAgo(now - 1000 * 60 * 60 * 5, now); // -> 5 hours ago
```

## timeTaken

获取函数的执行时间。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function timeTaken(fn: types.AnyFn): number;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|fn|要计算执行时间的函数|
|返回值|执行时间，单位毫秒|

```javascript
timeTaken(function() {
    // Do something.
}); // -> Time taken to execute given function.
```

## times

调用目标函数 n 次。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function times&lt;T&gt;(
    n: number,
    fn: (n: number) =&gt; T,
    ctx?: any
): T[];</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|n|调用次数|
|fn|目标函数|
|ctx|函数上下文|
|返回值|结果数组|

```javascript
times(3, String); // -> ['0', '1', '2']
```

## toArr

将任意值转换为数组。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function toArr(val: any): any[];</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要转换的值|
|返回值|转换后的数组|

```javascript
toArr({ a: 1, b: 2 }); // -> [{a: 1, b: 2}]
toArr('abc'); // -> ['abc']
toArr(1); // -> [1]
toArr(null); // -> []
```

## toAsync

让 generator 可以像 async/await 一样使用。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function toAsync(fn: types.AnyFn): types.AnyFn;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|fn|Generator 函数|
|返回值|目标函数|

```javascript
const sleep = require('licia/sleep');

const fn = toAsync(function*() {
    yield sleep(200);
    return 'licia';
});

fn().then(str => {});
```

## toBool

将任意值转换为布尔值。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function toBool(val: any): boolean;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要转换的值|
|返回值|转换后的布尔值|

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

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function toDate(val: any): Date;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要转换的值|
|返回值|转换后的日期值|

```javascript
toDate('20180501');
toDate('2018-05-01');
toDate(1525107450849);
```

## toEl

将 html 字符串转换为 dom 元素。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function toEl(str: string): Element;</code>
</pre>
</details>

必须只有一个根元素。

|参数名|说明|
|-----|---|
|str|html 字符串|
|返回值|html 元素|

```javascript
toEl('<div>test</div>');
```

## toInt

将任意值转换为整数。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function toInt(val: any): number;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要转换的值|
|返回值|转换后的整数|

```javascript
toInt(1.1); // -> 1
toInt(undefined); // -> 0
```

## toNum

将任意值转换为数字。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function toNum(val: any): number;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要转换的值|
|返回值|转换后的数字|

```javascript
toNum('5'); // -> 5
```

## toSrc

将函数转换为源码。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function toSrc(fn: types.AnyFn): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|fn|目标函数|
|返回值|源码|

```javascript
toSrc(Math.min); // -> 'function min() { [native code] }'
toSrc(function() {}); // -> 'function () { }'
```

## toStr

将任意值转换为字符串。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function toStr(val: any): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|要转换的值|
|返回值|转换后的字符串|

```javascript
toStr(null); // -> ''
toStr(1); // -> '1'
toStr(false); // -> 'false'
toStr([1, 2, 3]); // -> '1,2,3'
```

## topoSort

拓扑排序实现。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function topoSort(edges: any[]): any[];</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|edges|依赖关系|
|返回值|排序后的数组|

```javascript
topoSort([
    [1, 2],
    [1, 3],
    [3, 2]
]); // -> [1, 3, 2]
```

## trigger

触发浏览器事件。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function trigger(el: Element, type: string, options?: any);
function trigger(type: string, options?: any);</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|el=document|目标元素|
|type|事件类型|
|options|选项|

```javascript
trigger(document.getElementById('test'), 'mouseup');
trigger('keydown', { keyCode: 65 });
```

## trim

删除字符串两边指定字符或空格。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function trim(str: string, chars?: string | string[]): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|源字符串|
|chars|删除字符|
|返回值|目标字符串|

```javascript
trim(' abc  '); // -> 'abc'
trim('_abc_', '_'); // -> 'abc'
trim('_abc_', ['a', 'c', '_']); // -> 'b'
```

## truncate

截取字符串，使其长度为指定值。

<details>
<summary>类型定义</summary>
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

|参数名|说明|
|-----|---|
|txt|要截取的字符串|
|width|最大字符串长度|
|options|选项|
|返回值|截取后的字符串|

选项：

|参数名|说明|
|-----|---|
|ellipsis='...'|表示截取掉部分的符号|
|separator|分隔符，尽可能使截取位置在该处|

```javascript
truncate('ORA ORA ORA ORA ORA ORA', 12); // -> 'ORA ORA O...'
truncate('ORA ORA ORA ORA ORA ORA', 10, {
    separator: ' ',
    ellipsis: '……'
}); // -> 'ORA ORA……'
```

## tryIt

在 try catch 块中运行函数。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function tryIt(fn: types.AnyFn, cb?: types.AnyFn): void;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|fn|目标函数|
|cb|回调|

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

获取 JavaScript 对象的内部类型。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function type(val: any, lowerCase?: boolean): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|val|目标对象|
|lowerCase=true|是否小写|
|返回值|对象类型|

```javascript
type(5); // -> 'number'
type({}); // -> 'object'
type(function() {}); // -> 'function'
type([]); // -> 'array'
type([], false); // -> 'Array'
type(async function() {}, false); // -> 'AsyncFunction'
```

## types

仅用于生成 ts 定义文件。

<details>
<summary>类型定义</summary>
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

UCS-2 编解码。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">const ucs2: {
    encode(arr: number[]): string;
    decode(str: string): number[];
};</code>
</pre>
</details>

### encode

通过码点序列创建字符串。

|参数名|说明|
|-----|---|
|arr|码点序列|
|返回值|编码后的字符串|

### decode

通过字符串创建码点序列。

|参数名|说明|
|-----|---|
|str|字符串|
|返回值|码点序列|

```javascript
ucs2.encode([0x61, 0x62, 0x63]); // -> 'abc'
ucs2.decode('abc'); // -> [0x61, 0x62, 0x63]
'𝌆'.length; // -> 2
ucs2.decode('𝌆').length; // -> 1
```

## uncaught

全局错误监听。

<details>
<summary>类型定义</summary>
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

开始监听错误。

### stop

停止监听错误。

### addListener

添加监听器。

|参数名|说明|
|-----|---|
|fn|错误监听器|

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

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function unescape(str: string): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|源字符串|
|返回值|目标字符串|

```javascript
unescape('You &amp; Me'); // -> 'You & Me'
```

## union

返回传入所有数组的并集。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function union(...arr: Array&lt;any[]&gt;): any[];</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|...arr|要合并的数组|
|返回值|数组并集|

```javascript
union([2, 1], [4, 2], [1, 2]); // -> [2, 1, 4]
```

## uniqId

生成全局唯一 id。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function uniqId(prefix?: string): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|prefix|id 前缀|
|返回值|全局唯一 id|

```javascript
uniqId('eustia_'); // -> 'eustia_xxx'
```

## unique

返回数组去重后的副本。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function unique(
    arr: any[],
    cmp?: (a: any, b: any) =&gt; boolean | number
): any[];</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|arr|源数组|
|cmp|比较器|
|返回值|目标数组|

```javascript
unique([1, 2, 3, 1]); // -> [1, 2, 3]
```

## universalify

使用异步函数同时支持 promise 及回调模式。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function universalify(
    fn: types.AnyFn,
    type: string
): types.AnyFn;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|fn|异步函数|
|type|源类型，promise 或 callback|
|返回值|目标函数|

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

与 zip 相反。 

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">declare function unzip(arr: Array&lt;any[]&gt;): Array&lt;any[]&gt;;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|arr|源数组|
|返回值|目标数组|

```javascript
unzip([
    ['a', 1, true],
    ['b', 2, false]
]); // -> [['a', 'b'], [1, 2], [true, false]]
```

## upperCase

转换字符串为大写。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function upperCase(str: string): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|源字符串|
|返回值|目标字符串|

```javascript
upperCase('test'); // -> 'TEST'
```

## upperFirst

将字符串的第一个字符转换为大写。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function upperFirst(str: string): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|str|源字符串|
|返回值|目标字符串|

```javascript
upperFirst('red'); // -> Red
```

## use

使用 define 创建的模块。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function use(requires: string[], method: types.AnyFn): void;
function use(method: types.AnyFn): void;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|requires|依赖|
|method|要执行的代码|

```javascript
// define('A', () => 'A');
use(['A'], function(A) {
    console.log(A + 'B'); // -> 'AB'
});
```

## utf8

UTF-8 编解码。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">const utf8: {
    encode(str: string): string;
    decode(str: string, safe?: boolean): string;
};</code>
</pre>
</details>

### encode

UTF-8 编码。

|参数名|说明|
|-----|---|
|str|源字符串|
|返回值|目标字符串|

### decode

UTF-8 解码。

|参数名|说明|
|-----|---|
|str|源字符串|
|safe=false|如果设为真，不抛错误|
|返回值|目标字符串|

```javascript
utf8.encode('\uD800\uDC00'); // ->  '\xF0\x90\x80\x80'
utf8.decode('\xF0\x90\x80\x80'); // -> '\uD800\uDC00'
```

## uuid

生成符合 RFC4112 版本 4 协议的 uuid。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function uuid(): string;</code>
</pre>
</details>

相关标准 [RFC4122 4.4](http://www.ietf.org/rfc/rfc4122.txt)。

```javascript
uuid(); // -> '53ce0497-6554-49e9-8d79-347406d2a88b'
```

## values

返回对象所有的属性值。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function values(obj: any): any[];</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|obj|目标对象|
|返回值|所有属性值|

```javascript
values({ one: 1, two: 2 }); // -> [1, 2]
```

## viewportScale

获取窗口缩放比。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function viewportScale(): number;</code>
</pre>
</details>

```javascript
viewportScale(); // -> 3
```

## vlq

vlq 编解码。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">const vlq: {
    encode(number: number | number[]): string;
    decode(string: string): number[];
};</code>
</pre>
</details>

### encode

将数字编码为 vlq 字符串。

|参数名|说明|
|-----|---|
|number|源数字|
|返回值|目标字符串|

### decode

将 vlq 字符串解码为数字。

|参数名|说明|
|-----|---|
|string|源字符串|
|返回值|目标数字|

```javascript
vlq.encode(123); // -> '2H'
vlq.encode([123, 456, 789]); // -> '2HwcqxB'
vlq.decode('2H'); // -> [123]
vlq.decode('2HwcqxB'); // -> [123, 456, 789]
```

## waitUntil

等待直到条件函数返回真值。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function waitUntil(
    condition: types.AnyFn,
    timeout?: number,
    interval?: number
): Promise&lt;any&gt;;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|condition|条件函数|
|timeout=0|超时|
|interval=250|等待间隔|

```javascript
let a = 5;
setTimeout(() => (a = 10), 500);
waitUntil(() => a === 10).then(() => {
    console.log(a); // -> 10
});
```

## waterfall

按顺序执行函数序列。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function waterfall(tasks: types.AnyFn[], cb?: types.AnyFn): void;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|tasks|函数序列|
|cb|结束回调|

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

按照指定长度对字符串进行折行处理。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function wordWrap(txt: string, width: number): string;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|txt|要折行的字符串|
|width|最大行宽度|
|返回值|折行后的字符串|

```javascript
wordWrap('Licia is a utility library.', 10);
// -> 'Licia is \na utility \nlibrary.'
```

## wordsToBytes

将 32 位字长数组转换为字节数组。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function wordsToBytes(words: number[]): number[];</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|words|字长数组|
|返回值|字节数组|

```javascript
wordsToBytes([0x12345678]); // -> [0x12, 0x34, 0x56, 0x78]
```

## workerize

将函数运行在 worker 线程中。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function workerize(fn: types.AnyFn): types.AnyFn;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|fn|源函数|
|返回值|目标函数|

```javascript
const worker = workerize(function(a, b) {
    return a + b;
});
worker(1, 2).then(function(value) {
    console.log(value); // -> 3
});
```

## wrap

将函数封装到包裹函数里面, 并把它作为第一个参数传给包裹函数。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function wrap(
    fn: types.AnyFn,
    wrapper: types.AnyFn
): types.AnyFn;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|fn|要包裹的函数|
|wrapper|包裹函数|
|返回值|目标函数|

```javascript
const p = wrap(escape, function(fn, text) {
    return '<p>' + fn(text) + '</p>';
});
p('You & Me'); // -> '<p>You &amp; Me</p>'
```

## wx

小程序 wx 对象的 promise 版本。

<details>
<summary>类型定义</summary>
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

使用 xpath 选择元素，不支持 IE。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function xpath(xpath: string): HTMLElement[];</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|xpath|Xpath|
|返回值|目标元素集|

```javascript
xpath('//html/body'); // -> [body]
```

## zip

将每个数组中相应位置的值合并在一起。

<details>
<summary>类型定义</summary>
<pre>
<code class="language-typescript">function zip(...arr: Array&lt;any[]&gt;): Array&lt;any[]&gt;;</code>
</pre>
</details>

|参数名|说明|
|-----|---|
|arr|源数组|
|返回值|目标数组|

```javascript
zip(['a', 'b'], [1, 2], [true, false]); // -> [['a', 1, true], ['b', 2, false]]
```