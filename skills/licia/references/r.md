# Licia Reference: r

## Readiness

Readiness manager.

<details>
<summary>Type Definition</summary>

```typescript
class Readiness {
    signal(tasks: string | string[]): void;
    isReady(tasks: string | string[]): boolean;
    ready(tasks: string | string[], fn?: types.AnyFn): Promise<void>;
}
```

</details>

### signal

Signal task is ready.

|Name |Desc       |
|-----|-----------|
|tasks|Ready tasks|

### ready

Register ready callback.

|Name  |Desc                                    |
|------|----------------------------------------|
|tasks |Tasks to listen                         |
|fn    |Callback to trigger if tasks are ready  |
|return|Promise that will be resolved when ready|

### isReady

Check if tasks are ready.

|Name  |Desc                       |
|------|---------------------------|
|tasks |Tasks to check             |
|return|True if all tasks are ready|

```javascript
const readiness = new Readiness();
readiness.ready('serverCreated', function() {
    // Do something.
});
readiness.signal('serverCreated');
readiness.isReady('serverCreated'); // -> true
```

## ReduceStore

Simplified redux like state container.

<details>
<summary>Type Definition</summary>

```typescript
class ReduceStore {
    constructor(reducer: types.AnyFn, initialState: any);
    subscribe(listener: types.AnyFn): types.AnyFn;
    dispatch(action: any): any;
    getState(): any;
}
```

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

```typescript
class ResizeSensor extends SingleEmitter {
    constructor(el: HTMLElement);
    destroy(): void;
}
```

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

## raf

Shortcut for requestAnimationFrame.

<details>
<summary>Type Definition</summary>

```typescript
namespace raf {
    function cancel(id: number): void;
}
function raf(cb: types.AnyFn): number;
```

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

```typescript
function random(
    min: number,
    max?: number,
    floating?: boolean
): number;
```

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

```typescript
function randomBytes(size: number): Uint8Array;
```

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

```typescript
function randomColor(): string;
function randomColor(options: {
    count?: number;
    hue?: number;
    lightness?: number;
    format?: string;
    seed?: number;
}): string | string[];
```

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

```typescript
function randomId(size?: number, symbols?: string): string;
```

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

```typescript
function randomItem(arr: any[]): any;
```

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

```typescript
function range(
    start: number,
    end?: number,
    step?: number
): number[];
```

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

```typescript
const rc4: {
    encrypt(key: string, str: string): string;
    decrypt(key: string, str: string): string;
};
```

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

## reactive

Reactive state and side effects.

<details>
<summary>Type Definition</summary>

```typescript
function reactive<T extends object>(target: T): T;
namespace reactive {
    interface IEffectOptions {
        scheduler?: () => void;
        lazy?: boolean;
    }
    interface IEffectRunner {
        (): any;
        deps: any[];
        active: boolean;
        scheduler?: () => void;
        stop(): void;
    }
    type IWatchSource = (() => any) | object;
    interface IWatchOptions {
        immediate?: boolean;
        deep?: boolean;
    }
    function effect(fn: () => any, options?: IEffectOptions): IEffectRunner;
    function watch(
        source: IWatchSource,
        cb: (val: any, oldVal: any) => void,
        options?: IWatchOptions
    ): () => void;
    function computed<T>(getter: () => T): { value: T };
    function isReactive(target: any): boolean;
    function toRaw<T>(target: T): T;
}
```

</details>

### reactive

Create a deep reactive proxy of the given object, nested objects are
wrapped lazily when they are accessed.

|Name  |Desc           |
|------|---------------|
|target|Object to wrap |
|return|Reactive proxy |

### isReactive

Check whether the value is a reactive proxy.

|Name  |Desc                  |
|------|----------------------|
|target|Value to check        |
|return|True if it is a proxy |

### toRaw

Get the original object behind a reactive proxy.

|Name  |Desc           |
|------|---------------|
|target|Reactive proxy |
|return|Original object|

### effect

Run the given function and re-run it automatically when the reactive data
it reads changes.

|Name    |Desc           |
|--------|---------------|
|fn      |Function to run|
|options |Effect options |
|return  |Effect runner  |

### watch

Watch reactive data and call the callback when it changes.

|Name   |Desc                      |
|--------|--------------------------|
|source |Getter or reactive object |
|cb     |Callback function         |
|options|Watch options             |
|return |Function to stop watching |

### computed

Create a lazily evaluated derived value.

|Name   |Desc            |
|-------|----------------|
|getter |Getter function |
|return |Computed value  |

```javascript
const state = reactive({ count: 0 });

reactive.watch(
    function() {
        return state.count;
    },
    function(count) {
        console.log(count);
    }
);

state.count++;
```

## ready

Invoke callback when dom is ready, similar to jQuery ready.

<details>
<summary>Type Definition</summary>

```typescript
function ready(fn: types.AnyFn): void;
```

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

```typescript
function reduce<T, TResult>(
    list: types.List<T>,
    iterator: types.MemoIterator<T, TResult>,
    memo?: TResult,
    context?: any
): TResult;
function reduce<T, TResult>(
    list: types.Dictionary<T>,
    iterator: types.MemoObjectIterator<T, TResult>,
    memo?: TResult,
    context?: any
): TResult;
```

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

```typescript
function reduceRight<T, TResult>(
    list: types.Collection<T>,
    iterator: types.MemoIterator<T, TResult>,
    memo?: TResult,
    context?: any
): TResult;
```

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

```typescript
function reject<T>(
    list: types.List<T>,
    iterator: types.ListIterator<T, boolean>,
    context?: any
): T[];
function reject<T>(
    object: types.Dictionary<T>,
    iterator: types.ObjectIterator<T, boolean>,
    context?: any
): T[];
```

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

```typescript
function remove<T>(
    list: types.List<T>,
    iterator: types.ListIterator<T, boolean>,
    context?: any
): T[];
```

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

```typescript
function repeat(str: string, n: number): string;
```

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

```typescript
function replaceAll(
    str: string,
    substr: string,
    newSubstr: string
): string;
```

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

```typescript
function restArgs(
    fn: types.AnyFn,
    startIndex?: number
): types.AnyFn;
```

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

```typescript
function reverse(arr: any[]): any[];
```

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

```typescript
function rgbToHsl(rgb: number[]): number[];
```

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

```typescript
namespace ric {
    function cancel(id: number): void;
}
function ric(cb: types.AnyFn): number;
```

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

```typescript
function rmCookie(key: string): void;
```

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

```typescript
function rmdir(dir: string, cb?: types.AnyFn): void;
```

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

```typescript
const root: any;
```

</details>

## rpad

Pad string on the right side if it's shorter than length.

<details>
<summary>Type Definition</summary>

```typescript
function rpad(str: string, len: number, chars?: string): string;
```

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

```typescript
function rtrim(str: string, chars?: string | string[]): string;
```

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
