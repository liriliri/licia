# Licia Reference: m

## MediaQuery

CSS media query listener.

<details>
<summary>Type Definition</summary>

```typescript
class MediaQuery extends Emitter {
    constructor(query: string);
    setQuery(query: string): void;
    isMatch(): boolean;
}
```

</details>

Extend from Emitter.

### constructor

|Name |Desc       |
|-----|-----------|
|query|Media query|

### setQuery

Update query.

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

## map

Create an array of values by running each element in collection through iteratee.

<details>
<summary>Type Definition</summary>

```typescript
function map<T, TResult>(
    list: types.List<T>,
    iterator: types.ListIterator<T, TResult>,
    context?: any
): TResult[];
function map<T, TResult>(
    object: types.Dictionary<T>,
    iterator: types.ObjectIterator<T, TResult>,
    context?: any
): TResult[];
```

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

```typescript
function mapObj<T, TResult>(
    object: types.Dictionary<T>,
    iterator: types.ObjectIterator<T, TResult>,
    context?: any
): types.Dictionary<TResult>;
```

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

```typescript
function matcher(attrs: any): types.AnyFn;
```

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

```typescript
function max(...num: number[]): number;
```

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

```typescript
function md5(msg: string | number[] | Uint8Array): string;
```

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

```typescript
const memStorage: typeof window.localStorage;
```

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

```typescript
function memoize(
    fn: types.AnyFn,
    hashFn?: types.AnyFn
): types.AnyFn;
```

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

```typescript
function mergeArr<T, U>(
    first: ArrayLike<T>,
    ...arrays: ArrayLike<U>[]
): ArrayLike<T | U>;
```

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

```typescript
function mergeSort(arr: any[], cmp?: types.AnyFn): any[];
```

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

```typescript
namespace meta {
    function remove(nameList: string | string[]): void;
}
function meta(): {};
function meta(key: string): string;
function meta(keys: string[]): {};
function meta(key, value): void;
function meta(pairs: {}): void;
```

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

```typescript
function methods(obj: any): string[];
```

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

```typescript
function mime(name: string): string | undefined;
```

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

```typescript
function min(...num: number[]): number;
```

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

```typescript
namespace mkdir {
    function sync(dir: string, mode?: number): void;
}
function mkdir(
    dir: string,
    mode?: number,
    cb?: types.AnyFn
): void;
function mkdir(dir: string, cb?: types.AnyFn): void;
```

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

```typescript
namespace moment {
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
function moment(value: string | Date): moment.M;
```

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

```typescript
function morphDom(from: Node, to: Node | string): Node;
```

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

```typescript
const morse: {
    encode(txt: string): string;
    decode(morse: string): string;
};
```

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

```typescript
function ms(str: string): number;
function ms(num: number): string;
```

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
