# Licia Reference: t

## Trace

Parse, manipulate and generate chrome tracing data.

<details>
<summary>Type Definition</summary>

```typescript
namespace Trace {
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
}
```

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

Easily create chrome tracing data.

<details>
<summary>Type Definition</summary>

```typescript
class Tracing {
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
        scope?: 'g' | 'p' | 't',
        args?: any
    ): void;
    id(): string;
}
```

</details>

### constructor

|Name   |Desc           |
|-------|---------------|
|options|Tracing options|

Available options:

|Name       |Desc        |
|-----------|------------|
|pid        |Process id  |
|tid        |Thread id   |
|processName|Process name|
|threadName |Thread name |

### start

Start recording.

|Name|Desc              |
|----|------------------|
|cat |Enabled categories|

### stop

Stop recording and get result events.

### begin

Record begin event.

|Name|Desc            |
|----|----------------|
|cat |Event categories|
|name|Event name      |
|args|Arguments       |

### end

Record end event.

### asyncBegin

Record async begin event.

### asyncEnd

Record async end event.

### instant

Record instant event.

### id

Get an unique id.

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

Trie data structure.

<details>
<summary>Type Definition</summary>

```typescript
class Trie {
    add(word: string): void;
    remove(word: string): void;
    has(word: string): boolean;
    words(prefix: string): string[];
    clear(): void;
}
```

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

```typescript
class Tween extends Emitter {
    constructor(target: any);
    to(props: any, duration?: number, ease?: string | Function): Tween;
    progress(): number;
    progress(progress: number): Tween;
    play(): Tween;
    pause(): Tween;
    paused(): boolean;
}
```

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

## table

Output table string.

<details>
<summary>Type Definition</summary>

```typescript
namespace table {
    interface IOptions {
        border?: {
            topBody?: string;
            topJoin?: string;
            topLeft?: string;
            topRight?: string;
            bottomBody?: string;
            bottomJoin?: string;
            bottomLeft?: string;
            bottomRight?: string;
            bodyLeft?: string;
            bodyRight?: string;
            bodyJoin?: string;
            joinBody?: string;
            joinLeft?: string;
            joinRight?: string;
            joinJoin?: string;
        };
    }
    function parse(table: string, options?: IOptions): Array<string[]>;
}
function table(
    rows: Array<string[]>,
    options?: table.IOptions
): string;
```

</details>

|Name   |Desc         |
|-------|-------------|
|rows   |Table data   |
|options|Table options|
|return |Table string |

### parse

Parse table string back to object.

|Name   |Type         |
|-------|-------------|
|table  |Table string |
|options|Table options|
|return |Table data   |

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

```typescript
function template(str: string, util?: any): types.AnyFn;
```

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

## theme

Theme helper.

<details>
<summary>Type Definition</summary>

```typescript
namespace theme {
    interface ITheme extends Emitter {
        get(): string;
    }
}
const theme: theme.ITheme;
```

</details>

### on

Bind change event.

### off

Unbind change event.

### get

Get current theme(light or dark).

```javascript
theme.on('change', function(theme) {
    console.log(theme); // -> 'dark'
});
theme.get(); // -> 'light'
```

## throttle

Return a new throttled version of the passed function.

<details>
<summary>Type Definition</summary>

```typescript
function throttle<T extends types.AnyFn>(fn: T, wait: number): T;
```

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

```typescript
import stream = require('stream');
namespace through {
    interface ThroughConstructor extends stream.Transform {
        new (opts?: stream.DuplexOptions): stream.Transform;
        (opts?: stream.DuplexOptions): stream.Transform;
    }
    type TransformCallback = (err?: any, data?: any) => void;
    type TransformFunction = (
        this: stream.Transform,
        chunk: any,
        enc: string,
        callback: TransformCallback
    ) => void;
    type FlushCallback = (
        this: stream.Transform,
        flushCallback: () => void
    ) => void;
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
): stream.Transform;
```

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

## tildify

Convert absolute path to tilde path.

<details>
<summary>Type Definition</summary>

```typescript
function tildify(path: string): string;
```

</details>

|Name  |Desc           |
|------|---------------|
|path  |Path to convert|
|return|Tilde path     |

```javascript
tildify('/home/surunzi/dev'); // -> '~/dev'
```

## timeAgo

Format datetime with *** time ago statement.

<details>
<summary>Type Definition</summary>

```typescript
namespace timeAgo {
    interface ITimeAgo {
        (date: Date | number, now?: Date | number): string;
        i18n: string[][];
    }
}
const timeAgo: timeAgo.ITimeAgo;
```

</details>

|Name        |Desc                     |
|------------|-------------------------|
|date        |Date to calculate        |
|now=new Date|Current date             |
|return      |Formatted time ago string|

```javascript
const now = new Date().getTime();
timeAgo(now - 1000 * 6); // -> just now
timeAgo(now - 1000 * 15); // -> 15 seconds ago
timeAgo(now + 1000 * 60 * 15); // -> in 15 minutes
timeAgo(now - 1000 * 60 * 60 * 5, now); // -> 5 hours ago
// Replace i18n to support other languages.
timeAgo.i18n = [
    ['刚刚', '马上'],
    ['%s 秒前', '%s 秒后'],
    ['1 分钟前', '1 分钟后'],
    ['%s 分钟前', '%s 分钟后'],
    ['1 小时前', '1 小时后'],
    ['%s 小时前', '%s 小时后'],
    ['1 天前', '1 天后'],
    ['%s 天前', '%s 天后'],
    ['1 周前', '1 周后'],
    ['%s 周前', '%s 周后'],
    ['1 个月前', '1 个月后'],
    ['%s 个月前', '%s 个月后'],
    ['1 年前', '1 年后'],
    ['%s 年前', '%s 年后']
];
timeAgo(now - 1000 * 15); // -> 15 秒前
```

## timeTaken

Get execution time of a function.

<details>
<summary>Type Definition</summary>

```typescript
function timeTaken(fn: types.AnyFn): number;
```

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

```typescript
function times<T>(
    n: number,
    fn: (n: number) => T,
    ctx?: any
): T[];
```

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

```typescript
function toArr(val: null | undefined): any[];
function toArr(val: string): string[];
function toArr<T>(val: T[]): T[];
function toArr<T>(val: ArrayLike<T>): T[];
function toArr<T>(val: T): T[];
```

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

```typescript
function toAsync(fn: types.AnyFn): types.AnyFn;
```

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

```typescript
function toBool(val: any): boolean;
```

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

```typescript
function toDate(val: any): Date;
```

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

```typescript
function toEl(str: string): Element;
```

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

```typescript
function toInt(val: any): number;
```

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

```typescript
function toNum(val: any): number;
```

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

```typescript
function toSrc(fn: types.AnyFn): string;
```

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

```typescript
function toStr(val: any): string;
```

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

```typescript
function topoSort(edges: any[]): any[];
```

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

```typescript
function trigger(
    el: Element | Document,
    type: string,
    options?: any
): void;
function trigger(type: string, options?: any): void;
```

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

```typescript
function trim(str: string, chars?: string | string[]): string;
```

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

```typescript
function truncate(
    txt: string,
    width: number,
    options?: {
        ellipsis?: string;
        separator: string;
    }
): string;
```

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

```typescript
function tryIt(fn: types.AnyFn, cb?: types.AnyFn): void;
```

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

```typescript
function type(val: any, lowerCase?: boolean): string;
```

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

```typescript
namespace types {
    interface Collection<T> {}
    interface List<T> extends Collection<T> {
        [index: number]: T;
        length: number;
    }
    interface ListIterator<T, TResult> {
        (value: T, index: number, list: List<T>): TResult;
    }
    interface Dictionary<T> extends Collection<T> {
        [index: string]: T;
    }
    interface ObjectIterator<T, TResult> {
        (element: T, key: string, list: Dictionary<T>): TResult;
    }
    interface MemoIterator<T, TResult> {
        (prev: TResult, curr: T, index: number, list: List<T>): TResult;
    }
    interface MemoObjectIterator<T, TResult> {
        (prev: TResult, curr: T, key: string, list: Dictionary<T>): TResult;
    }
    type Fn<T> = (...args: any[]) => T;
    type AnyFn = Fn<any>;
    type PlainObj<T> = { [name: string]: T };
}
const types: {};
```

</details>
