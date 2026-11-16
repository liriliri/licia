# Licia Reference: p

## PriorityQueue

Priority queue implementation.

<details>
<summary>Type Definition</summary>

```typescript
class PriorityQueue {
    size: number;
    constructor(cmp?: types.AnyFn);
    clear(): void;
    enqueue(item: any): number;
    dequeue(): any;
    peek(): any;
}
```

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

```typescript
const PseudoMap: typeof Map;
```

</details>

It supports only string keys, and uses Map if exists.

```javascript
const map = new PseudoMap();
map.set('1', 1);
map.get('1'); // -> 1
```

## pad

Pad string on the left and right sides if it's shorter than length.

<details>
<summary>Type Definition</summary>

```typescript
function pad(str: string, len: number, chars?: string): string;
```

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

```typescript
function pairs(obj: any): Array<any[]>;
```

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

```typescript
function parallel(tasks: types.AnyFn[], cb?: types.AnyFn): void;
```

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

```typescript
function parseArgs(
    args: string[],
    options: {
        names: any;
        shorthands: any;
    }
): any;
```

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

```typescript
function parseHtml(
    html: string,
    handlers: {
        start?: (tag: string, attrs: any, unary: boolean) => void;
        end?: (tag: string) => void;
        comment?: (text: string) => void;
        text?: (text: string) => void;
    }
): void;
```

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

```typescript
function partial(
    fn: types.AnyFn,
    ...partials: any[]
): types.AnyFn;
```

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

```typescript
function pascalCase(str: string): string;
```

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

```typescript
function perfNow(): number;
```

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

```typescript
function pick(
    object: any,
    filter: string | string[] | Function
): any;
```

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

```typescript
import stream = require('stream');
function pipe(...streams: stream.Stream[]): void;
```

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

```typescript
function pluck<T, K extends keyof T>(
    list: types.List<T>,
    key: K
): T[K][];
function pluck(object: any, key: string | string[]): any[];
```

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

## pointerEvent

Get the pointer event name, use touch and mouse events as a fallback if not supported.

<details>
<summary>Type Definition</summary>

```typescript
function pointerEvent(type: 'down' | 'move' | 'up'): string;
```

</details>

|Name  |Desc                        |
|------|----------------------------|
|type  |Event type, down, move or up|
|return|Pointer event name          |

```javascript
pointerEvent('down'); // -> 'pointerdown' if supported
```

## precision

Find decimal precision of a given number.

<details>
<summary>Type Definition</summary>

```typescript
function precision(num: number): number;
```

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

```typescript
function prefetch(url: string): Promise<void>;
```

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

```typescript
namespace prefix {
    function dash(name: string): string;
}
function prefix(name: string): string;
```

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

```typescript
function promisify<TArgs extends any[], TResult>(
    fn: (...args: [...TArgs, (err: any, result: TResult) => void]) => any,
    multiArgs?: false
): (...args: TArgs) => Promise<TResult>;
function promisify(
    fn: types.AnyFn,
    multiArgs?: boolean
): (...args: any[]) => Promise<any>;
```

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

```typescript
function property(path: string | string[]): types.AnyFn;
```

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
