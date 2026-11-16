# Licia Reference: l

## LinkedList

Doubly-linked list implementation.

<details>
<summary>Type Definition</summary>

```typescript
namespace LinkedList {
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
}
```

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

```typescript
class LocalStore extends Store {
    constructor(name: string, data?: Record<string, any>);
}
```

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

```typescript
class Logger extends Emitter {
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
}
```

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

```typescript
class Lru {
    constructor(max: number);
    has(key: string): boolean;
    remove(key: string): void;
    get(key: string): any;
    set(key: string, val: any): void;
    clear(): void;
}
```

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

## last

Get the last element of array.

<details>
<summary>Type Definition</summary>

```typescript
function last(arr: any[]): any;
```

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

```typescript
function lazyImport<T>(
    importFn: (moduleId: string) => T,
    dirname?: string
): (moduleId: string) => T;
```

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

```typescript
function lazyRequire<T>(
    requireFn: (moduleId: string) => T
): (moduleId: string) => T;
```

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

```typescript
function levenshtein(a: string, b: string): number;
```

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

```typescript
function linkify(str: string, hyperlink?: types.AnyFn): string;
```

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

```typescript
function loadCss(src: string, cb?: types.AnyFn): void;
```

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

```typescript
function loadImg(src: string, cb?: types.AnyFn): void;
```

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

```typescript
function loadJs(src: string, cb?: types.AnyFn): void;
```

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

```typescript
function longest(arr: string[]): string;
```

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

```typescript
function lowerCase(str: string): string;
```

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

```typescript
function lpad(str: string, len: number, chars?: string): string;
```

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

```typescript
function ltrim(str: string, chars?: string | string[]): string;
```

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
