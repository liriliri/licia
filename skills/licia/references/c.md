# Licia Reference: c

## Caseless

Modify object props without caring about letter case.

<details>
<summary>Type Definition</summary>

```typescript
class Caseless {
    constructor(obj: any);
    getKey(key: string): string | void;
    set(key: string, val: any): void;
    get(key: string): any;
    remove(key: string): void;
    has(key: string): boolean;
}
```

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

## Channel

Interconnectable Message channel.

<details>
<summary>Type Definition</summary>

```typescript
class Channel extends Emitter {
    send(msg: any): void;
    connect(channel: Channel): void;
    disconnect(channel: Channel): void;
    isConnected(channel: Channel): boolean;
    destroy(): void;
}
```

</details>

### send

Send a message to all connected channels.

|Name|Desc           |
|----|---------------|
|msg |Message to send|

### connect

Connect to another channel.

|Name   |Desc              |
|-------|------------------|
|channel|Channel to connect|

### disconnect

Disconnect from another channel.

|Name   |Desc                 |
|-------|---------------------|
|channel|Channel to disconnect|

### isConnected

Check if a channel is connected to another channel.

|Name   |Desc                  |
|-------|----------------------|
|channel|Channel to check      |
|return |Whether it's connected|

### destroy

Destroy the channel, disconnect from all connected channels.

```javascript
const channelA = new Channel();
const channelB = new Channel();
channelA.connect(channelB);
channelB.on('message', msg => {
    console.log(msg); // -> 'hello'
});
channelA.send('hello');
channelA.on('message', msg => {
    console.log(msg); // -> 'world'
});
channelB.send('world');
channelA.isConnected(channelB); // -> true
channelB.isConnected(channelA); // -> true
```

## Class

Create JavaScript class.

<details>
<summary>Type Definition</summary>

```typescript
namespace Class {
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
function Class(methods: any, statics?: any): Class.IConstructor;
```

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

```typescript
namespace Color {
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
}
```

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

## Component

Imperative UI component base class, inspired by Backbone.View.

<details>
<summary>Type Definition</summary>

```typescript
class Component extends Emitter {
    container: HTMLElement;
    $container: $.$;
    options: any;
    constructor(container: Element);
    setup(
        config?: {
            defaults?: any | (() => any);
            option?: types.PlainObj<(val: any, oldVal?: any) => void>;
            events?: types.PlainObj<types.AnyFn>;
        },
        options?: any
    ): Component;
    set(name: string, val?: any): Component;
    set(options: types.PlainObj<any>): Component;
    get(name: string): any;
    html(): string;
    html(html: string): Component;
    find(selector: string): $.$;
    listen(type: string, handler: types.AnyFn): Component;
    listen(type: string, selector: string, handler: types.AnyFn): Component;
    destroy(): void;
}
```

</details>

Extend from Emitter. Manages options and declarative DOM events. Does not
take ownership of rendering — subclasses build and update the DOM
themselves.

Call `setup()` in the subclass constructor to declare `defaults`, `option`
and `events`. `html()` applies `option` handlers after updating the DOM.

### constructor

|Name     |Desc               |
|---------|-------------------|
|container|Element to mount on|

### setup

Configure defaults, option handlers and DOM events, then apply options.

|Name   |Desc                             |
|-------|---------------------------------|
|config |`defaults`, `option` and `events`|
|options|Component options                |
|return |This                             |

#### defaults

Default option values. Can also be a function returning an object.

#### option

Map of option change handlers. Keys are option names; values are functions
`(val, oldVal)`.

#### events

DOM events hash: `'click .inc': this.inc`. Handlers are used as-is; bind
`this` yourself (e.g. class field arrows).

### set

Set option value. Emits `change` when value changes and runs `option`
handlers.

|Name|Desc         |
|----|-------------|
|name|Option name  |
|val |Option value |

Set multiple options.

|Name   |Desc           |
|-------|---------------|
|options|Key value pairs|

### get

|Name  |Desc               |
|------|-------------------|
|name  |Option name        |
|return|Value of the option|

### html

Get or set container HTML. When setting, runs all `option` handlers.

|Name  |Desc        |
|------|------------|
|html  |Html string |
|return|This or html|

### find

Find element inside container.

|Name    |Desc          |
|--------|--------------|
|selector|Query selector|
|return  |Wrapped result|

### listen

Bind DOM event on the component container; automatically unbound in
`destroy`.

|Name    |Desc             |
|--------|-----------------|
|type    |Event type       |
|selector|Delegate selector|
|handler |Event handler    |

### destroy

Unbind listeners, empty container, emit `destroy` and remove all emitter
listeners.

### Events

#### change

Triggered when an option value changes via `set`.

#### destroy

Triggered when component is destroyed.

```javascript
class Badge extends Component {
    constructor(container, options) {
        super(container);
        this.setup(
            {
                defaults: { count: 0 },
                option: {
                    count: this.onCount
                }
            },
            options
        );
        this.html('<span class="count"></span>');
    }
    onCount = val => {
        this.find('.count').text(String(val));
    };
}

class Counter extends Component {
    constructor(container, options) {
        super(container);
        this.setup(
            {
                defaults: { value: 0, disabled: false },
                option: {
                    value: this.onValue,
                    disabled: this.onDisabled
                },
                events: {
                    'click .inc': this.inc,
                    'click .dec': this.dec
                }
            },
            options
        );
        this.html(
            '<button class="dec">-</button>' +
                '<span class="val"></span>' +
                '<button class="inc">+</button>' +
                '<span class="badge"></span>'
        );
        this._badge = new Badge(this.find('.badge').get(0), {
            count: this.get('value')
        });
    }
    onValue = val => {
        this.find('.val').text(String(val));
        if (this._badge) this._badge.set('count', val);
    };
    onDisabled = val => {
        this.$container[val ? 'addClass' : 'rmClass']('disabled');
    };
    inc = () => {
        if (this.get('disabled')) return;
        this.set('value', this.get('value') + 1);
    };
    dec = () => {
        if (this.get('disabled')) return;
        this.set('value', this.get('value') - 1);
    };
    destroy() {
        this._badge.destroy();
        super.destroy();
    }
}

const counter = new Counter(document.getElementById('counter'), { value: 1 });
counter.on('change', (name, val) => console.log(name, val));
counter.set('disabled', true);
counter.destroy();
```

## cacheRequire

Cache everything in module require to speed up app load.

<details>
<summary>Type Definition</summary>

```typescript
function cacheRequire(options?: {
    dir?: string;
    requirePath?: boolean;
    code?: boolean;
    compileCache?: boolean;
}): void;
```

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

```typescript
function callbackify(fn: types.AnyFn): types.AnyFn;
```

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

```typescript
function camelCase(str: string): string;
```

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

```typescript
function capitalize(str: string): string;
```

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

```typescript
function castPath(path: string | string[], obj?: any): string[];
```

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

```typescript
function centerAlign(
    str: string | string[],
    width?: number
): string;
```

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

## cgroup

Read cgroup metrics inside container.

<details>
<summary>Type Definition</summary>

```typescript
const cgroup: {
    cpu: {
        stat(): {
            usage: number;
        };
        max(): number;
    };
    cpuset: {
        cpus(): {
            effective: number[];
        };
    };
    memory: {
        max(): number;
        current(): number;
    };
    version(): number;
};
```

</details>

```javascript
cgroup.cpu.stat();
```

## char

Return string representing a character whose Unicode code point is the given integer.

<details>
<summary>Type Definition</summary>

```typescript
function char(num: number): string;
```

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

```typescript
function chunk(arr: any[], size?: number): Array<any[]>;
```

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

```typescript
function clamp(n: number, lower: number, upper: number): number;
function clamp(n: number, upper: number): number;
```

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

```typescript
function className(
    ...names: Array<
        | string
        | number
        | boolean
        | null
        | undefined
        | { [key: string]: any }
        | Array<any>
    >
): string;
```

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

```typescript
namespace cliHelp {
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
function cliHelp(data: cliHelp.IData | cliHelp.ICommand): string;
```

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

```typescript
function clone<T>(val: T): T;
```

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

```typescript
function cloneDeep<T>(val: T): T;
```

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

```typescript
function cmpVersion(v1: string, v2: string): number;
```

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

```typescript
function combine(keys: string[], values: any[]): any;
```

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

```typescript
function compact(arr: any[]): any[];
```

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

```typescript
function compose(...fn: types.AnyFn[]): types.AnyFn;
```

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

```typescript
function compressImg(
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
): void;
```

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

```typescript
function concat(...args: Array<any[]>): any[];
```

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

```typescript
function contain(
    arr: readonly any[] | {} | string,
    val: any
): boolean;
```

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

## container

Get container stats inside container.

<details>
<summary>Type Definition</summary>

```typescript
const container: {
    cpuNum(): number;
    cpuUsage(period?: number): Promise<number>;
    cpuLoad(period?: number): Promise<number>;
    memUsage(): number;
    memLoad(): number;
};
```

</details>

```javascript
container.cpuNum();
```

## convertBase

Convert base of a number.

<details>
<summary>Type Definition</summary>

```typescript
function convertBase(
    num: number | string,
    from: number,
    to: number
): string;
```

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

```typescript
namespace convertBin {
    type Source =
        | string
        | number[]
        | ArrayBuffer
        | ArrayBufferView
        | Uint8Array;
    function blobToArrBuffer(blob: Blob): Promise<ArrayBuffer>;
}
function convertBin(
    bin: convertBin.Source,
    type: 'Uint8Array' | 'uint8array'
): Uint8Array;
function convertBin(
    bin: convertBin.Source,
    type: 'Array' | 'array'
): number[];
function convertBin(
    bin: convertBin.Source,
    type: 'ArrayBuffer' | 'arraybuffer'
): ArrayBuffer;
function convertBin(
    bin: convertBin.Source,
    type: 'base64'
): string;
function convertBin(
    bin: convertBin.Source,
    type: 'Blob' | 'blob'
): Blob;
function convertBin(
    bin: convertBin.Source,
    type: 'Buffer' | 'buffer'
): any;
function convertBin(bin: any, type: string): any;
```

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

```typescript
namespace cookie {
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
const cookie: cookie.ICookie;
```

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

```typescript
function copy(text: string, cb?: types.AnyFn): void;
```

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

```typescript
function crc1(
    input: string | number[],
    previous?: number
): number;
```

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

```typescript
function crc16(
    input: string | number[],
    previous?: number
): number;
```

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

```typescript
function crc32(
    input: string | number[],
    previous?: number
): number;
```

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

```typescript
function crc8(
    input: string | number[],
    previous?: number
): number;
```

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

```typescript
function create(proto?: object): any;
```

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

```typescript
function createAssigner(
    keysFn: types.AnyFn,
    defaults: boolean
): types.AnyFn;
```

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

```typescript
function createUrl(
    data: any,
    options?: { type?: string }
): string;
```

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

```typescript
const css: {
    parse(css: string): object;
    stringify(stylesheet: object, options?: { indent?: string }): string;
};
```

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

```typescript
namespace cssPriority {
    function compare(p1: number[], p2: number[]): number;
}
function cssPriority(
    selector: string,
    options?: {
        important?: boolean;
        inlineStyle?: boolean;
        position?: number;
    }
): number[];
```

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

```typescript
function cssSupports(name: string, val?: string): boolean;
```

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

```typescript
function curry(fn: types.AnyFn): types.AnyFn;
```

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
