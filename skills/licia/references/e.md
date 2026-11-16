# Licia Reference: e

## Emitter

Event emitter class which provides observer pattern.

<details>
<summary>Type Definition</summary>

```typescript
class Emitter {
    on(event: string, listener: types.AnyFn): Emitter;
    off(event: string, listener: types.AnyFn): Emitter;
    once(event: string, listener: types.AnyFn): Emitter;
    emit(event: string, ...args: any[]): Emitter;
    removeAllListeners(event?: string): Emitter;
    static mixin(obj: any): any;
}
```

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

```typescript
class Enum {
    size: number;
    constructor(map: string[] | { [member: string]: any });
    [key: string]: any;
}
```

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

## each

Iterate over elements of collection and invokes iterator for each element.

<details>
<summary>Type Definition</summary>

```typescript
function each<T>(
    list: types.List<T>,
    iterator: types.ListIterator<T, void>,
    ctx?: any
): types.List<T>;
function each<T>(
    object: types.Dictionary<T>,
    iterator: types.ObjectIterator<T, void>,
    ctx?: any
): types.Collection<T>;
```

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

```typescript
const easing: {
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
};
```

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

```typescript
function emulateTouch(el: Element): void;
```

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

```typescript
function endWith(str: string, suffix: string): boolean;
```

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

```typescript
function escape(str: string): string;
```

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

```typescript
function escapeJsStr(str: string): string;
```

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

```typescript
function escapeRegExp(str: string): string;
```

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

```typescript
function evalCss(css: string): HTMLStyleElement;
```

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

```typescript
function evalJs(js: string, ctx?: any): void;
```

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

```typescript
function every<T>(
    object: types.List<T>,
    iterator?: types.ListIterator<T, boolean>,
    context?: any
): boolean;
function every<T>(
    object: types.Dictionary<T>,
    iterator?: types.ObjectIterator<T, boolean>,
    context?: any
): boolean;
```

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

```typescript
function extend<T, T1>(destination: T, source1: T1): T & T1;
function extend<T, T1, T2>(
    destination: T,
    source1: T1,
    source2: T2
): T & T1 & T2;
function extend<T, T1, T2, T3>(
    destination: T,
    source1: T1,
    source2: T2,
    source3: T3
): T & T1 & T2 & T3;
function extend(destination: any, ...sources: any[]): any;
```

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

```typescript
function extendDeep(destination: any, ...sources: any[]): any;
```

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

```typescript
function extendOwn(destination: any, ...sources: any[]): any;
```

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

```typescript
function extractBlockCmts(str: string): string[];
```

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

```typescript
function extractUrls(str: string): string[];
```

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
