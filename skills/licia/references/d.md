# Licia Reference: d

## Delegator

Object delegation.

<details>
<summary>Type Definition</summary>

```typescript
class Delegator {
    constructor(host: object, target: object | string);
    method(name: string, target?: string): Delegator;
    getter(name: string, target?: string): Delegator;
    setter(name: string, target?: string): Delegator;
    access(name: string, target?: string): Delegator;
}
```

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

```typescript
class Dispatcher {
    dispatch(payload: any);
    register(cb: types.AnyFn): void;
    waitFor(ids: string[]): void;
    unregister(id: string): void;
    isDispatching(): boolean;
}
```

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

## dataUrl

Parse and stringify data urls.

<details>
<summary>Type Definition</summary>

```typescript
const dataUrl: {
    parse(
        dataUrl: string
    ): { data: string; mime: string; charset: string; base64: boolean } | null;
    stringify(
        data: string | number[] | Uint8Array | ArrayBuffer | ArrayBufferView,
        mime: string,
        options?: { base64?: boolean; charset?: string }
    ): string;
};
```

</details>

### parse

Parse a data url.

|Name   |Desc           |
|-------|---------------|
|dataUrl|Data url string|
|return |Parsed object  |

### stringify

Stringify an object into a data url.

|Name   |Desc             |
|-------|-----------------|
|data   |Data to stringify|
|mime   |Mime type        |
|options|Stringify options|
|return |Data url string  |

### options

|Name       |Desc             |
|-----------|-----------------|
|base64=true|Whether is base64|
|charset    |Charset          |

```javascript
dataUrl.parse('data:,Hello%2C%20World%21'); // -> {data: 'Hello, World!', mime: 'text/plain', charset: '', base64: false}
dataUrl.stringify('Hello, World!', 'text/plain'); // -> 'data:,Hello%2C%20World%21'
```

## dataView

Like DataView, but without creating a new object.

<details>
<summary>Type Definition</summary>

```typescript
const dataView: {
    getInt8(buf: Uint8Array, offset: number): number;
    getInt16(buf: Uint8Array, offset: number, le?: boolean): number;
    setInt16(buf: Uint8Array, offset: number, val: number, le?: boolean): void;
    getUint16(buf: Uint8Array, offset: number, le?: boolean): number;
    setUint16(buf: Uint8Array, offset: number, val: number, le?: boolean): void;
    getInt32(buf: Uint8Array, offset: number, le?: boolean): number;
    setInt32(buf: Uint8Array, offset: number, val: number, le?: boolean): void;
    getUint32(buf: Uint8Array, offset: number, le?: boolean): number;
    setUint32(buf: Uint8Array, offset: number, val: number, le?: boolean): void;
};
```

</details>

```javascript
const buf = new Uint8Array([0x80]);
dataView.getInt8(buf, 0); // -> -128
```

## dateFormat

Simple but extremely useful date format function.

<details>
<summary>Type Definition</summary>

```typescript
function dateFormat(
    date: Date,
    mask: string,
    utc?: boolean,
    gmt?: boolean
): string;
function dateFormat(
    mask: string,
    utc?: boolean,
    gmt?: boolean
): string;
```

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

```typescript
function debounce<T extends types.AnyFn>(fn: T, wait: number): T;
```

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

```typescript
function debug(name: string): any;
```

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

```typescript
function deburr(str: string): string;
```

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

```typescript
function decodeUriComponent(str: string): string;
```

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

```typescript
function defaults<T, T1>(obj: T, source1: T1): T & T1;
function defaults<T, T1, T2>(
    obj: T,
    source1: T1,
    source2: T2
): T & T1 & T2;
function defaults<T, T1, T2, T3>(
    obj: T,
    source1: T1,
    source2: T2,
    source3: T3
): T & T1 & T2 & T3;
function defaults(obj: any, ...src: any[]): any;
```

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

```typescript
function define(
    name: string,
    requires: string[],
    method: types.AnyFn
): void;
function define(name: string, method: types.AnyFn): void;
```

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

```typescript
function defineProp<T>(
    obj: T,
    prop: string,
    descriptor: PropertyDescriptor
): T;
function defineProp<T>(
    obj: T,
    descriptor: PropertyDescriptorMap
): T;
```

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

```typescript
function defined(...args: any[]): any;
```

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

```typescript
function delRequireCache(id: string): void;
```

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

```typescript
function delay(
    fn: types.AnyFn,
    wait: number,
    ...args: any[]
): void;
```

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

```typescript
const delegate: {
    add(el: Element, type: string, selector: string, cb: types.AnyFn): void;
    remove(el: Element, type: string, selector: string, cb: types.AnyFn): void;
};
```

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

```typescript
function deprecate(fn: types.AnyFn, msg: string): types.AnyFn;
```

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

```typescript
function detectBrowser(
    ua?: string
): {
    name: string;
    version: number;
};
```

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

```typescript
function detectMocha(): boolean;
```

</details>

```javascript
detectMocha(); // -> True if mocha is running.
```

## detectOs

Detect operating system using ua.

<details>
<summary>Type Definition</summary>

```typescript
function detectOs(ua?: string): string;
```

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

```typescript
function difference(arr: any[], ...args: any[]): any[];
```

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

```typescript
function dotCase(str: string): string;
```

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

```typescript
function download(
    data: Blob | File | string | any[],
    name: string,
    type?: string
): void;
```

</details>

|Name           |Desc            |
|---------------|----------------|
|data           |Data to download|
|name           |File name       |
|type=text/plain|Data type       |

```javascript
download('test', 'test.txt');
```

## dpr

Device pixel ratio helper.

<details>
<summary>Type Definition</summary>

```typescript
namespace dpr {
    interface IDpr extends Emitter {
        get(): number;
    }
}
const dpr: dpr.IDpr;
```

</details>

### on

Bind change event.

### off

Unbind change event.

### get

Get current device pixel ratio.

```javascript
dpr.on('change', function(dpr) {
    console.log(dpr); // -> 2
});
dpr.get(); // -> 1
```

## durationFormat

Simple duration format function.

<details>
<summary>Type Definition</summary>

```typescript
function durationFormat(duration: number, mask?: string): string;
```

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
