# Licia Reference: s

## Select

Simple wrapper of querySelectorAll to make dom selection easier.

<details>
<summary>Type Definition</summary>

```typescript
class Select {
    constructor(selector: string | Element | Document);
    find(selector: string): Select;
    each(fn: types.AnyFn): Select;
}
```

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

```typescript
class Semaphore {
    constructor(counter?: number);
    wait(fn: () => void): void;
    signal(): void;
}
```

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

```typescript
class SessionStore extends Store {
    constructor(name: string, data?: any);
}
```

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

```typescript
class SingleEmitter {
    addListener(listener: types.AnyFn): void;
    rmListener(listener: types.AnyFn): void;
    emit(...args: any[]): void;
    rmAllListeners(): void;
    static mixin(obj: any): void;
}
```

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
event.addListener(function(name) {
    console.log(name);
});
event.emit('licia'); // Logs out 'licia'.
```

## Socket

Tiny WebSocket wrapper.

<details>
<summary>Type Definition</summary>

```typescript
class Socket extends Emitter {
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
}
```

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

```typescript
class Stack {
    size: number;
    clear(): void;
    push(item: any): number;
    pop(): any;
    peek(): any;
    forEach(iterator: types.AnyFn, context?: any): void;
    toArr(): any[];
}
```

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

```typescript
class State extends Emitter {
    constructor(initial: string, events: any);
    is(state: string): boolean;
    [event: string]: any;
}
```

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

```typescript
class Store extends Emitter {
    constructor(data?: Record<string, any>);
    set<T>(key: string, val: T): void;
    set(values: Record<string, any>): void;
    get<T = any>(key: string): T;
    get(keys: string[]): Record<string, any>;
    remove(key: string): void;
    remove(keys: string[]): void;
    clear(): void;
    each(fn: (val: any, key: string) => void): void;
}
```

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
const store = new Store();
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

## safeCb

Create callback based on input value.

<details>
<summary>Type Definition</summary>

```typescript
function safeCb(
    val?: any,
    ctx?: any,
    argCount?: number
): types.AnyFn;
```

</details>

## safeDel

Delete object property.

<details>
<summary>Type Definition</summary>

```typescript
function safeDel(obj: any, path: string | string[]): any;
```

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

```typescript
function safeGet(obj: any, path: string | string[]): any;
```

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

```typescript
function safeSet(
    obj: any,
    path: string | string[],
    val: any
): void;
```

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

```typescript
function safeStorage(type?: string): typeof window.localStorage;
```

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

```typescript
function sameOrigin(url1: string, url2: string): boolean;
```

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

```typescript
function sample(obj: any, n: number): any[];
```

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

```typescript
function scrollTo(
    target: Element | string | number,
    options: {
        tolerance?: number;
        duration?: number;
        easing?: string | Function;
        callback?: types.AnyFn;
    }
);
```

</details>

|Name   |Desc          |
|-------|--------------|
|target |Scroll target |
|options|Scroll options|

### options

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

```typescript
function seedRandom(
    seed: number,
    min?: number,
    max?: number,
    floating?: boolean
): () => number;
```

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

```typescript
function selectionSort(arr: any[], cmp?: types.AnyFn): any[];
```

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

```typescript
namespace selector {
    interface IToken {
        type: string;
        value: string;
    }
}
const selector: {
    parse(selector: string): Array<selector.IToken[]>;
    stringify(selector: Array<selector.IToken[]>): string;
};
```

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

## sha1

SHA1 implementation.

<details>
<summary>Type Definition</summary>

```typescript
function sha1(msg: string | number[] | Uint8Array): string;
```

</details>

|Name  |Desc              |
|------|------------------|
|msg   |Message to encrypt|
|return|SHA1 hash         |

```javascript
sha1('licia'); // -> 'bf29b6b1e26689ce4fbb320df1ee534216b579d5'
```

## shebang

Get command from a shebang.

<details>
<summary>Type Definition</summary>

```typescript
function shebang(str: string): string | void;
```

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

```typescript
function shellSort(arr: any[], cmp?: types.AnyFn): any[];
```

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

```typescript
function shuffle(arr: any[]): any[];
```

</details>

|Name  |Desc              |
|------|------------------|
|arr   |Array to randomize|
|return|Randomized Array  |

```javascript
shuffle([1, 2, 3]); // -> [3, 1, 2]
```

## singleton

Ensure an async function is only called once before it resolves.

<details>
<summary>Type Definition</summary>

```typescript
function singleton<F extends types.Fn<Promise<any>>>(
    fn: F,
    hashFn?: types.AnyFn
): F;
```

</details>

|Name  |Desc                        |
|------|----------------------------|
|fn    |Function to restrict        |
|hashFn|Function to create cache key|
|return|New restricted function     |

```javascript
const fetch = singleton(async function fetch(id) {});
const f1 = fetch(1);
const f2 = fetch(1);
const f3 = fetch(2);
console.log(f1 === f2); // -> true
console.log(f1 === f3); // -> false

f1.then(() => {
    const f4 = fetch(1);
    console.log(f1 === f4); // -> false
});
```

## size

Get size of object or length of array like object.

<details>
<summary>Type Definition</summary>

```typescript
function size(obj: any): number;
```

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

```typescript
function sizeof(obj: any): number;
```

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

```typescript
function sleep(timeout: number): Promise<void>;
```

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

```typescript
function slice(
    array: any[],
    start?: number,
    end?: number
): any[];
```

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

```typescript
function slugify(
    str: string,
    replacement?: { [index: string]: string }
): string;
```

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

## sm3

SM3 implementation.

<details>
<summary>Type Definition</summary>

```typescript
function sm3(
    msg: string | number[] | Uint8Array,
    options?: {
        mode?: string;
        key: string | number[] | Uint8Array;
    }
): string;
```

</details>

|Name   |Desc                                |
|-------|------------------------------------|
|msg    |Message to encrypt                  |
|options|Options, `mode` is `hmac` by default|
|return |SM3 hash                            |

### Options

|Name|Desc                                       |
|----|-------------------------------------------|
|mode|Hash mode, only `hmac` is supported        |
|key |HMAC key, string is treated as a hex string|

```javascript
sm3('licia'); // -> '33b901397725075d898a5508b2f0f3c3016d280a8c1658b7d172ba258cdfb150'
```

## sm4

SM4 implementation.

<details>
<summary>Type Definition</summary>

```typescript
const sm4: {
    encrypt(
        data: string | number[] | Uint8Array,
        key: string | number[] | Uint8Array,
        options?: {
            mode?: string;
            iv?: string | number[] | Uint8Array;
            padding?: string;
            output?: string;
        }
    ): string | number[];
    decrypt(
        data: string | number[] | Uint8Array,
        key: string | number[] | Uint8Array,
        options?: {
            mode?: string;
            iv?: string | number[] | Uint8Array;
            padding?: string;
            output?: string;
        }
    ): string | number[];
};
```

</details>

### encrypt

SM4 encryption, result as hex string.

### decrypt

SM4 decryption, pass hex string as input.

|Name   |Desc                           |
|-------|-------------------------------|
|data   |Data to be encrypted/decrypted |
|key    |Secret key, 16 bytes           |
|options|Options                        |
|return |Encrypted/decrypted data       |

### Options

|Name    |Desc                                      |
|--------|------------------------------------------|
|mode    |Block cipher mode, `ecb` or `cbc`         |
|iv      |Initialization vector, required by `cbc` |
|padding |Padding mode, `pkcs#7` or `none`          |
|output  |Output type, `string` or `array`          |

```javascript
sm4.encrypt('licia', '0123456789abcdeffedcba9876543210'); // -> '291c47f32f9aec055ac80310acd84260'
sm4.decrypt(
    '291c47f32f9aec055ac80310acd84260',
    '0123456789abcdeffedcba9876543210'
); // -> 'licia'
```

## snakeCase

Convert string to "snakeCase".

<details>
<summary>Type Definition</summary>

```typescript
function snakeCase(str: string): string;
```

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

```typescript
function some<T>(
    list: types.List<T>,
    iterator?: types.ListIterator<T, boolean>,
    context?: any
): boolean;
function some<T>(
    object: types.Dictionary<T>,
    iterator?: types.ObjectIterator<T, boolean>,
    context?: any
): boolean;
```

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

```typescript
function sortBy<T>(
    arr: T[],
    iterator?: keyof T | ((item: T, index: number, list: T[]) => any),
    ctx?: any
): T[];
```

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

```typescript
function sortKeys(
    obj: object,
    options?: {
        deep?: boolean;
        comparator?: types.AnyFn;
    }
): object;
```

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

```typescript
function spaceCase(str: string): string;
```

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

```typescript
function splitCase(str: string): string[];
```

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

```typescript
function splitPath(
    path: string
): {
    dir: string;
    name: string;
    ext: string;
};
```

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

```typescript
function stackTrace(): any[];
```

</details>

[Stack trace API](https://v8.dev/docs/stack-trace-api)

```javascript
stackTrace(); // -> List of CallSite objects
```

## startWith

Check if string starts with the given target string.

<details>
<summary>Type Definition</summary>

```typescript
function startWith(str: string, prefix: string): boolean;
```

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

```typescript
function strHash(str: string): number;
```

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

```typescript
function strToBytes(
    str: string,
    encoding?: 'utf8' | 'hex' | 'base64' | string
): number[];
```

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

```typescript
function strTpl(str: string, data: types.PlainObj<any>): string;
```

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

```typescript
function strWidth(str: string): number;
```

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

```typescript
function stringify(obj: any, spaces?: number): string;
```

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

```typescript
namespace stringifyAll {
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
): string;
```

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

```typescript
function stripAnsi(str: string): string;
```

</details>

|Name  |Desc           |
|------|---------------|
|str   |String to strip|
|return|Result string  |

```javascript
stripAnsi('\u001b[4mcake\u001b[0m'); // -> 'cake'
```

## stripBom

Strip UTF-8 byte order mark.

<details>
<summary>Type Definition</summary>

```typescript
function stripBom(str: string): string;
```

</details>

|Name  |Desc           |
|------|---------------|
|str   |String to strip|
|return|Result string  |

```javascript
stripBom('\uFEFFlicia'); // -> 'licia'
```

## stripCmt

Strip comments from source code.

<details>
<summary>Type Definition</summary>

```typescript
function stripCmt(str: string): string;
```

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

```typescript
function stripColor(str: string): string;
```

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

```typescript
function stripHtmlTag(str: string): string;
```

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

```typescript
function stripIndent(str: string): string;
function stripIndent(
    literals: TemplateStringsArray,
    ...placeholders: any[]
): string;
```

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

```typescript
function stripNum(num: number, precision?: number): number;
```

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

```typescript
function sum(...num: number[]): number;
```

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

```typescript
function swap(arr: any[], a: number, b: number): any[];
```

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
