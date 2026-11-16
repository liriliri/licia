# Licia Reference: i

## I18n

Simple internationalization library.

<details>
<summary>Type Definition</summary>

```typescript
class I18n {
    constructor(locale: string, langs: types.PlainObj<any>);
    set(locale: string, lang: types.PlainObj<any>): void;
    t(path: string | string[], data?: types.PlainObj<any>): string;
    locale(locale: string): void;
}
```

</details>

### constructor

|Name  |Desc         |
|------|-------------|
|locale|Locale code  |
|langs |Language data|

### set

Add language or append extra keys to existing language.

|Name  |Desc         |
|------|-------------|
|locale|Locale code  |
|lang  |Language data|

### locale

Set default locale.

|Name  |Desc       |
|------|-----------|
|locale|Locale code|

### t

Get translation text.

|Name  |Desc                      |
|------|--------------------------|
|path  |Path of translation to get|
|data  |Data to pass in           |
|return|Translation text          |

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

## identity

Return the first argument given.

<details>
<summary>Type Definition</summary>

```typescript
function identity<T>(val: T): T;
```

</details>

|Name  |Desc       |
|------|-----------|
|val   |Any value  |
|return|Given value|

```javascript
identity('a'); // -> 'a'
```

## idxOf

Get the index at which the first occurrence of value.

<details>
<summary>Type Definition</summary>

```typescript
function idxOf(arr: any[], val: any, fromIdx?: number): number;
```

</details>

|Name     |Desc                |
|---------|--------------------|
|arr      |Array to search     |
|val      |Value to search for |
|fromIdx=0|Index to search from|
|return   |Value index         |

```javascript
idxOf([1, 2, 1, 2], 2, 2); // -> 3
```

## indent

Indent each line in a string.

<details>
<summary>Type Definition</summary>

```typescript
function indent(
    str: string,
    char?: string,
    len?: number
): string;
```

</details>

|Name  |Desc                |
|------|--------------------|
|str   |String to indent    |
|char  |Character to prepend|
|len   |Indent length       |
|return|Indented string     |

```javascript
indent('foo\nbar', ' ', 4); // -> '    foo\n    bar'
```

## inherits

Inherit the prototype methods from one constructor into another.

<details>
<summary>Type Definition</summary>

```typescript
function inherits(
    Class: types.AnyFn,
    SuperClass: types.AnyFn
): void;
```

</details>

|Name      |Desc       |
|----------|-----------|
|Class     |Child Class|
|SuperClass|Super Class|

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

Ini parser and serializer.

<details>
<summary>Type Definition</summary>

```typescript
const ini: {
    parse(ini: string): any;
    stringify(
        obj: any,
        options?: {
            section?: string;
            whitespace: boolean;
        }
    ): string;
};
```

</details>

### parse

Parse ini string into js object.

|Name  |Desc            |
|------|----------------|
|ini   |Ini string      |
|return|Parsed js object|

### stringify

Stringify object into an ini formatted string.

|Name   |Desc                |
|-------|--------------------|
|obj    |Object to stringify |
|options|Stringify options   |
|return |Ini formatted string|

Options:

|Name            |Desc               |
|----------------|-------------------|
|section         |Top section        |
|whitespace=false|Whitespace around =|

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

Insertion sort implementation.

<details>
<summary>Type Definition</summary>

```typescript
function insertionSort(arr: any[], cmp?: types.AnyFn): any[];
```

</details>

|Name  |Desc         |
|------|-------------|
|arr   |Array to sort|
|cmp   |Comparator   |
|return|Sorted array |

```javascript
insertionSort([2, 1]); // -> [1, 2]
```

## intersect

Compute the list of values that are the intersection of all the arrays.

<details>
<summary>Type Definition</summary>

```typescript
function intersect(...arr: Array<any[]>): any[];
```

</details>

|Name  |Desc                          |
|------|------------------------------|
|...arr|Arrays to inspect             |
|return|New array of inspecting values|

```javascript
intersect([1, 2, 3, 4], [2, 1, 10], [2, 1]); // -> [1, 2]
```

## intersectRange

Intersect two ranges.

<details>
<summary>Type Definition</summary>

```typescript
namespace intersectRange {
    interface IRange {
        start: number;
        end: number;
    }
}
function intersectRange(
    a: intersectRange.IRange,
    b: intersectRange.IRange
): intersectRange.IRange | void;
```

</details>

|Name  |Desc                 |
|------|---------------------|
|a     |Range a              |
|b     |Range b              |
|return|Intersection if exist|

```javascript
intersectRange({ start: 0, end: 12 }, { start: 11, end: 13 });
// -> {start: 11, end: 12}
intersectRange({ start: 0, end: 5 }, { start: 6, end: 7 });
// -> undefined
```

## invariant

Facebook's invariant.

<details>
<summary>Type Definition</summary>

```typescript
function invariant(
    condition: boolean,
    format?: string,
    a?: string,
    b?: string,
    c?: string,
    d?: string,
    e?: string,
    f?: string
): void;
```

</details>

[Related docs](https://github.com/zertosh/invariant)

```javascript
invariant(true, 'This will not throw');
// No errors
invariant(false, 'This will throw an error with this message');
// Error: Invariant Violation: This will throw an error with this message
```

## invert

Create an object composed of the inverted keys and values of object.

<details>
<summary>Type Definition</summary>

```typescript
function invert(obj: any): any;
```

</details>

|Name  |Desc               |
|------|-------------------|
|obj   |Object to invert   |
|return|New inverted object|

If object contains duplicate values, subsequent values overwrite property assignments of previous values.

```javascript
invert({ a: 'b', c: 'd', e: 'f' }); // -> {b: 'a', d: 'c', f: 'e'}
```

## isAbsoluteUrl

Check if an url is absolute.

<details>
<summary>Type Definition</summary>

```typescript
function isAbsoluteUrl(url: string): boolean;
```

</details>

|Name  |Desc                   |
|------|-----------------------|
|url   |Url to check           |
|return|True if url is absolute|

```javascript
isAbsoluteUrl('http://www.surunzi.com'); // -> true
isAbsoluteUrl('//www.surunzi.com'); // -> false
isAbsoluteUrl('surunzi.com'); // -> false
```

## isArgs

Check if value is classified as an arguments object.

<details>
<summary>Type Definition</summary>

```typescript
function isArgs(val: any): val is IArguments;
```

</details>

|Name  |Desc                                |
|------|------------------------------------|
|val   |Value to check                      |
|return|True if value is an arguments object|

```javascript
isArgs(
    (function() {
        return arguments;
    })()
); // -> true
```

## isArr

Check if value is an `Array` object.

<details>
<summary>Type Definition</summary>

```typescript
function isArr(val: any): val is any[];
```

</details>

|Name  |Desc                              |
|------|----------------------------------|
|val   |Value to check                    |
|return|True if value is an `Array` object|

```javascript
isArr([]); // -> true
isArr({}); // -> false
```

## isArrBuffer

Check if value is an ArrayBuffer.

<details>
<summary>Type Definition</summary>

```typescript
function isArrBuffer(val: any): val is ArrayBuffer;
```

</details>

|Name  |Desc                           |
|------|-------------------------------|
|val   |Value to check                 |
|return|True if value is an ArrayBuffer|

```javascript
isArrBuffer(new ArrayBuffer(8)); // -> true
```

## isArrLike

Check if value is array-like.

<details>
<summary>Type Definition</summary>

```typescript
function isArrLike(val: any): boolean;
```

</details>

|Name  |Desc                       |
|------|---------------------------|
|val   |Value to check             |
|return|True if value is array like|

Function returns false.

```javascript
isArrLike('test'); // -> true
isArrLike(document.body.children); // -> true;
isArrLike([1, 2, 3]); // -> true
```

## isAsyncFn

Check if value is an async function.

<details>
<summary>Type Definition</summary>

```typescript
function isAsyncFn(val: any): boolean;
```

</details>

|Name  |Desc                              |
|------|----------------------------------|
|val   |Value to check                    |
|return|True if value is an async function|

```javascript
isAsyncFn(function*() {}); // -> false
isAsyncFn(function() {}); // -> false
isAsyncFn(async function() {}); // -> true
```

## isBlob

Check if value is a Blob.

<details>
<summary>Type Definition</summary>

```typescript
function isBlob(val: any): boolean;
```

</details>

|Name  |Desc                   |
|------|-----------------------|
|val   |Value to check         |
|return|True if value is a Blob|

```javascript
isBlob(new Blob([])); // -> true;
isBlob([]); // -> false
```

## isBool

Check if value is a boolean primitive.

<details>
<summary>Type Definition</summary>

```typescript
function isBool(val: any): val is boolean;
```

</details>

|Name  |Desc                      |
|------|--------------------------|
|val   |Value to check            |
|return|True if value is a boolean|

```javascript
isBool(true); // -> true
isBool(false); // -> true
isBool(1); // -> false
```

## isBrowser

Check if running in a browser.

<details>
<summary>Type Definition</summary>

```typescript
const isBrowser: boolean;
```

</details>

```javascript
console.log(isBrowser); // -> true if running in a browser
```

## isBuffer

Check if value is a buffer.

<details>
<summary>Type Definition</summary>

```typescript
function isBuffer(val: any): boolean;
```

</details>

|Name  |Desc                     |
|------|-------------------------|
|val   |The value to check       |
|return|True if value is a buffer|

```javascript
isBuffer(Buffer.alloc(4)); // -> true
```

## isClose

Check if values are close(almost equal) to each other.

<details>
<summary>Type Definition</summary>

```typescript
function isClose(
    a: number,
    b: number,
    relTol?: number,
    absTol?: number
): boolean;
```

</details>

`abs(a-b) <= max(relTol * max(abs(a), abs(b)), absTol)`

|Name       |Desc                    |
|-----------|------------------------|
|a          |Number to compare       |
|b          |Number to compare       |
|relTol=1e-9|Relative tolerance      |
|absTol=0   |Absolute tolerance      |
|return     |True if values are close|

```javascript
isClose(1, 1.0000000001); // -> true
isClose(1, 2); // -> false
isClose(1, 1.2, 0.3); // -> true
isClose(1, 1.2, 0.1, 0.3); // -> true
```

## isCyclic

Detect cyclic object reference.

<details>
<summary>Type Definition</summary>

```typescript
function isCyclic(val: any): boolean;
```

</details>

|Name  |Desc                   |
|------|-----------------------|
|val   |Value to detect        |
|return|True if value is cyclic|

```javascript
isCyclic({}); // -> false
const obj = { a: 1 };
obj.b = obj;
isCyclic(obj); // -> true
```

## isDarkMode

Detect dark mode.

<details>
<summary>Type Definition</summary>

```typescript
function isDarkMode(): boolean;
```

</details>

```javascript
console.log(isDarkMode()); // true if dark mode
```

## isDataUrl

Check if a string is a valid data url.

<details>
<summary>Type Definition</summary>

```typescript
function isDataUrl(str: string): boolean;
```

</details>

|Name  |Desc                        |
|------|----------------------------|
|str   |String to check             |
|return|True if string is a data url|

```javascript
isDataUrl('http://eustia.liriliri.io'); // -> false
isDataUrl('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D'); // -> true
```

## isDate

Check if value is classified as a Date object.

<details>
<summary>Type Definition</summary>

```typescript
function isDate(val: any): boolean;
```

</details>

|Name  |Desc                          |
|------|------------------------------|
|val   |value to check                |
|return|True if value is a Date object|

```javascript
isDate(new Date()); // -> true
```

## isDir

Check if a path is directory.

<details>
<summary>Type Definition</summary>

```typescript
function isDir(path: string): Promise<boolean>;
```

</details>

|Name  |Desc                       |
|------|---------------------------|
|path  |Path to check              |
|return|True if path is a directory|

```javascript
isDir('/foo/bar');
```

## isDocker

Check if the process is running inside a docker container.

<details>
<summary>Type Definition</summary>

```typescript
function isDocker(): boolean;
```

</details>

```javascript
console.log(isDocker()); // -> true if running inside a docker container.
```

## isEl

Check if value is a DOM element.

<details>
<summary>Type Definition</summary>

```typescript
function isEl(val: any): val is Element;
```

</details>

|Name  |Desc                          |
|------|------------------------------|
|val   |Value to check                |
|return|True if value is a DOM element|

```javascript
isEl(document.body); // -> true
```

## isEmail

Loosely validate an email address.

<details>
<summary>Type Definition</summary>

```typescript
function isEmail(val: string): boolean;
```

</details>

|Name  |Desc                                 |
|------|-------------------------------------|
|val   |Value to check                       |
|return|True if value is an email like string|

```javascript
isEmail('surunzi@foxmail.com'); // -> true
```

## isEmpty

Check if value is an empty object or array.

<details>
<summary>Type Definition</summary>

```typescript
function isEmpty(val: any): boolean;
```

</details>

|Name  |Desc                  |
|------|----------------------|
|val   |Value to check        |
|return|True if value is empty|

```javascript
isEmpty([]); // -> true
isEmpty({}); // -> true
isEmpty(''); // -> true
```

## isEqual

Performs an optimized deep comparison between the two objects, to determine if they should be considered equal.

<details>
<summary>Type Definition</summary>

```typescript
function isEqual(val: any, other: any): boolean;
```

</details>

|Name  |Desc                         |
|------|-----------------------------|
|val   |Value to compare             |
|other |Other value to compare       |
|return|True if values are equivalent|

```javascript
isEqual([1, 2, 3], [1, 2, 3]); // -> true
```

## isErr

Check if value is an error.

<details>
<summary>Type Definition</summary>

```typescript
function isErr(val: any): val is Error;
```

</details>

|Name  |Desc                     |
|------|-------------------------|
|val   |Value to check           |
|return|True if value is an error|

```javascript
isErr(new Error()); // -> true
```

## isEven

Check if number is even.

<details>
<summary>Type Definition</summary>

```typescript
function isEven(num: number): boolean;
```

</details>

|Name  |Desc                  |
|------|----------------------|
|num   |Number to check       |
|return|True if number is even|

```javascript
isEven(0); // -> true
isEven(1); // -> false
isEven(2); // -> true
```

## isFile

Check if value is a file.

<details>
<summary>Type Definition</summary>

```typescript
function isFile(val: any): boolean;
```

</details>

|Name  |Desc                   |
|------|-----------------------|
|val   |Value to check         |
|return|True if value is a file|

```javascript
isFile(new File(['test'], 'test.txt', { type: 'text/plain' })); // -> true
```

## isFinite

Check if value is a finite primitive number.

<details>
<summary>Type Definition</summary>

```typescript
function isFinite(val: any): boolean;
```

</details>

|Name  |Desc                            |
|------|--------------------------------|
|val   |Value to check                  |
|return|True if value is a finite number|

```javascript
isFinite(3); // -> true
isFinite(Infinity); // -> false
```

## isFn

Check if value is a function.

<details>
<summary>Type Definition</summary>

```typescript
function isFn(val: any): val is Function;
```

</details>

|Name  |Desc                       |
|------|---------------------------|
|val   |Value to check             |
|return|True if value is a function|

Generator function is also classified as true.

```javascript
isFn(function() {}); // -> true
isFn(function*() {}); // -> true
isFn(async function() {}); // -> true
```

## isFullWidth

Check if character is full width.

<details>
<summary>Type Definition</summary>

```typescript
function isFullWidth(codePoint: number): boolean;
```

</details>

|Name     |Desc                           |
|---------|-------------------------------|
|codePoint|Unicode code point             |
|return   |True if character is full width|

```javascript
isFullWidth('a'.codePointAt(0)); // -> false
isFullWidth(','.codePointAt(0)); // -> false
isFullWidth('我'.codePointAt(0)); // -> true
isFullWidth('，'.codePointAt(0)); // -> true
```

## isGeneratorFn

Check if value is a generator function.

<details>
<summary>Type Definition</summary>

```typescript
function isGeneratorFn(val: any): boolean;
```

</details>

|Name  |Desc                                 |
|------|-------------------------------------|
|val   |Value to check                       |
|return|True if value is a generator function|

```javascript
isGeneratorFn(function*() {}); // -> true
isGeneratorFn(function() {}); // -> false
```

## isHidden

Check if element is hidden.

<details>
<summary>Type Definition</summary>

```typescript
function isHidden(
    el: Element,
    options?: {
        display?: boolean;
        visibility?: boolean;
        opacity?: boolean;
        size?: boolean;
        viewport?: boolean;
        overflow?: boolean;
    }
): boolean;
```

</details>

|Name   |Desc                     |
|-------|-------------------------|
|el     |Target element           |
|options|Check options            |
|return |True if element is hidden|

Available options:

|Name            |Desc                         |
|----------------|-----------------------------|
|display=true    |Check if it is displayed     |
|visibility=false|Check visibility css property|
|opacity=false   |Check opacity css property   |
|size=false      |Check width and height       |
|viewport=false  |Check if it is in viewport   |
|overflow=false  |Check if hidden in overflow  |

```javascript
isHidden(document.createElement('div')); // -> true
```

## isInt

Checks if value is classified as a Integer.

<details>
<summary>Type Definition</summary>

```typescript
function isInt(val: any): boolean;
```

</details>

|Name  |Desc                                 |
|------|-------------------------------------|
|val   |Value to check                       |
|return|True if value is correctly classified|

```javascript
isInt(5); // -> true
isInt(5.1); // -> false
isInt({}); // -> false
```

## isIp

Check if value is an IP address.

<details>
<summary>Type Definition</summary>

```typescript
namespace isIp {
    function v4(str: string): boolean;
    function v6(str: string): boolean;
}
function isIp(str: string): boolean;
```

</details>

|Name  |Desc                          |
|------|------------------------------|
|str   |String to check               |
|return|True if value is an IP address|

### v4

Check if value is an IPv4 address.

### v6

Check if value is an IPv6 address.

```javascript
isIp('192.168.191.1'); // -> true
isIp('1:2:3:4:5:6:7:8'); // -> true
isIp('test'); // -> false
isIp.v4('192.168.191.1'); // -> true
isIp.v6('1:2:3:4:5:6:7:8'); // -> true
```

## isJson

Check if value is a valid JSON.

<details>
<summary>Type Definition</summary>

```typescript
function isJson(val: string): boolean;
```

</details>

It uses `JSON.parse()` and a `try... catch` block.

|Name  |Desc                         |
|------|-----------------------------|
|val   |JSON string                  |
|return|True if value is a valid JSON|

```javascript
isJson('{"a": 5}'); // -> true
isJson("{'a': 5}"); // -> false
```

## isLeapYear

Check if a year is a leap year.

<details>
<summary>Type Definition</summary>

```typescript
function isLeapYear(year: number): boolean;
```

</details>

|Name  |Desc                       |
|------|---------------------------|
|year  |Year to check              |
|return|True if year is a leap year|

```javascript
isLeapYear(2000); // -> true
isLeapYear(2002); // -> false
```

## isMac

Check if platform is mac.

<details>
<summary>Type Definition</summary>

```typescript
const isMac: boolean;
```

</details>

```javascript
console.log(isMac); // -> true if running on mac
```

## isMap

Check if value is a Map object.

<details>
<summary>Type Definition</summary>

```typescript
function isMap(val: any): boolean;
```

</details>

|Name  |Desc                  |
|------|----------------------|
|val   |Value to check        |
|return|True if value is a Map|

```javascript
isMap(new Map()); // -> true
isMap(new WeakMap()); // -> false
```

## isMatch

Check if keys and values in src are contained in obj.

<details>
<summary>Type Definition</summary>

```typescript
function isMatch(obj: any, src: any): boolean;
```

</details>

|Name  |Desc                              |
|------|----------------------------------|
|obj   |Object to inspect                 |
|src   |Object of property values to match|
|return|True if object is match           |

```javascript
isMatch({ a: 1, b: 2 }, { a: 1 }); // -> true
```

## isMiniProgram

Check if running in wechat mini program.

<details>
<summary>Type Definition</summary>

```typescript
const isMiniProgram: boolean;
```

</details>

```javascript
console.log(isMiniProgram); // -> true if running in mini program.
```

## isMobile

Check whether client is using a mobile browser using ua.

<details>
<summary>Type Definition</summary>

```typescript
function isMobile(ua?: string): boolean;
```

</details>

|Name                  |Desc                                 |
|----------------------|-------------------------------------|
|ua=navigator.userAgent|User agent                           |
|return                |True if ua belongs to mobile browsers|

```javascript
isMobile(navigator.userAgent);
```

## isNaN

Check if value is an NaN.

<details>
<summary>Type Definition</summary>

```typescript
function isNaN(val: any): boolean;
```

</details>

|Name  |Desc                   |
|------|-----------------------|
|val   |Value to check         |
|return|True if value is an NaN|

Undefined is not an NaN, different from global isNaN function.

```javascript
isNaN(0); // -> false
isNaN(NaN); // -> true
```

## isNative

Check if value is a native function.

<details>
<summary>Type Definition</summary>

```typescript
function isNative(val: any): boolean;
```

</details>

|Name  |Desc                              |
|------|----------------------------------|
|val   |Value to check                    |
|return|True if value is a native function|

```javascript
isNative(function() {}); // -> false
isNative(Math.min); // -> true
```

## isNil

Check if value is null or undefined, the same as value == null.

<details>
<summary>Type Definition</summary>

```typescript
function isNil(val: any): boolean;
```

</details>

|Name  |Desc                              |
|------|----------------------------------|
|val   |Value to check                    |
|return|True if value is null or undefined|

```javascript
isNil(null); // -> true
isNil(void 0); // -> true
isNil(undefined); // -> true
isNil(false); // -> false
isNil(0); // -> false
isNil([]); // -> false
```

## isNode

Check if running in node.

<details>
<summary>Type Definition</summary>

```typescript
const isNode: boolean;
```

</details>

```javascript
console.log(isNode); // -> true if running in node
```

## isNull

Check if value is an Null.

<details>
<summary>Type Definition</summary>

```typescript
function isNull(val: any): val is null;
```

</details>

|Name  |Desc                    |
|------|------------------------|
|val   |Value to check          |
|return|True if value is an Null|

```javascript
isNull(null); // -> true
```

## isNum

Check if value is classified as a Number primitive or object.

<details>
<summary>Type Definition</summary>

```typescript
function isNum(val: any): val is number;
```

</details>

|Name  |Desc                                 |
|------|-------------------------------------|
|val   |Value to check                       |
|return|True if value is correctly classified|

```javascript
isNum(5); // -> true
isNum(5.1); // -> true
isNum({}); // -> false
```

## isNumeric

Check if value is numeric.

<details>
<summary>Type Definition</summary>

```typescript
function isNumeric(val: any): boolean;
```

</details>

|Name  |Desc                    |
|------|------------------------|
|val   |Value to check          |
|return|True if value is numeric|

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

Check if value is the language type of Object.

<details>
<summary>Type Definition</summary>

```typescript
function isObj(val: any): boolean;
```

</details>

|Name  |Desc                      |
|------|--------------------------|
|val   |Value to check            |
|return|True if value is an object|

[Language Spec](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)

```javascript
isObj({}); // -> true
isObj([]); // -> true
```

## isOdd

Check if number is odd.

<details>
<summary>Type Definition</summary>

```typescript
function isOdd(num: number): boolean;
```

</details>

|Name  |Desc                 |
|------|---------------------|
|num   |Number to check      |
|return|True if number is odd|

```javascript
isOdd(0); // -> false
isOdd(1); // -> true
isOdd(2); // -> false
```

## isPlainObj

Check if value is an object created by Object constructor.

<details>
<summary>Type Definition</summary>

```typescript
function isPlainObj(val: any): boolean;
```

</details>

|Name  |Desc                           |
|------|-------------------------------|
|val   |Value to check                 |
|return|True if value is a plain object|

```javascript
isPlainObj({}); // -> true
isPlainObj([]); // -> false
isPlainObj(function() {}); // -> false
```

## isPortFree

Check if a TCP port is free.

<details>
<summary>Type Definition</summary>

```typescript
function isPortFree(
    port: number,
    host?: string
): Promise<boolean>;
```

</details>

|Name  |Desc                      |
|------|--------------------------|
|port  |TCP port                  |
|host  |Host address              |
|return|True if given port is free|

```javascript
isPortFree(3000).then(isFree => {
    // Do something.
});
```

## isPrime

Check if the provided integer is a prime number.

<details>
<summary>Type Definition</summary>

```typescript
function isPrime(num: number): boolean;
```

</details>

|Name  |Desc                            |
|------|--------------------------------|
|num   |Number to check                 |
|return|True if number is a prime number|

```javascript
isPrime(11); // -> true
isPrime(8); // -> false
```

## isPrimitive

Check if value is string, number, boolean or null.

<details>
<summary>Type Definition</summary>

```typescript
function isPrimitive(val: any): boolean;
```

</details>

|Name  |Desc                        |
|------|----------------------------|
|val   |Value to check              |
|return|True if value is a primitive|

```javascript
isPrimitive(5); // -> true
isPrimitive('abc'); // -> true
isPrimitive(false); // -> true
```

## isPromise

Check if value looks like a promise.

<details>
<summary>Type Definition</summary>

```typescript
function isPromise(val: any): boolean;
```

</details>

|Name  |Desc                              |
|------|----------------------------------|
|val   |Value to check                    |
|return|True if value looks like a promise|

```javascript
isPromise(new Promise(function() {})); // -> true
isPromise({}); // -> false
```

## isRegExp

Check if value is a regular expression.

<details>
<summary>Type Definition</summary>

```typescript
function isRegExp(val: any): val is RegExp;
```

</details>

|Name  |Desc                                 |
|------|-------------------------------------|
|val   |Value to check                       |
|return|True if value is a regular expression|

```javascript
isRegExp(/a/); // -> true
```

## isRelative

Check if path appears to be relative.

<details>
<summary>Type Definition</summary>

```typescript
function isRelative(path: string): boolean;
```

</details>

|Name  |Desc                               |
|------|-----------------------------------|
|path  |Path to check                      |
|return|True if path appears to be relative|

```javascript
isRelative('README.md'); // -> true
```

## isRetina

Determine if running on a high DPR device or not.

<details>
<summary>Type Definition</summary>

```typescript
const isRetina: boolean;
```

</details>

```javascript
console.log(isRetina); // -> true if high DPR
```

## isRunning

Check if process is running.

<details>
<summary>Type Definition</summary>

```typescript
function isRunning(pid: number): boolean;
```

</details>

|Name  |Desc                      |
|------|--------------------------|
|pid   |Process id                |
|return|True if process is running|

```javascript
isRunning(123456); // true if running
```

## isSet

Check if value is a Set object.

<details>
<summary>Type Definition</summary>

```typescript
function isSet(val: any): boolean;
```

</details>

|Name  |Desc                  |
|------|----------------------|
|val   |Value to check        |
|return|True if value is a Set|

```javascript
isSet(new Set()); // -> true
isSet(new WeakSet()); // -> false
```

## isShadowRoot

Check if value is a ShadowRoot object.

<details>
<summary>Type Definition</summary>

```typescript
function isShadowRoot(val: any): val is ShadowRoot;
```

</details>

|Name  |Desc                         |
|------|-----------------------------|
|val   |Value to check               |
|return|True if value is a ShadowRoot|

```javascript
isShadowRoot(document.body); // -> false
```

## isSorted

Check if an array is sorted.

<details>
<summary>Type Definition</summary>

```typescript
function isSorted(arr: any[], cmp?: types.AnyFn): boolean;
```

</details>

|Name  |Desc                   |
|------|-----------------------|
|arr   |Array to check         |
|cmp   |Comparator             |
|return|True if array is sorted|

```javascript
isSorted([1, 2, 3]); // -> true
isSorted([3, 2, 1]); // -> false
```

## isStr

Check if value is a string primitive.

<details>
<summary>Type Definition</summary>

```typescript
function isStr(val: any): val is string;
```

</details>

|Name  |Desc                               |
|------|-----------------------------------|
|val   |Value to check                     |
|return|True if value is a string primitive|

```javascript
isStr('licia'); // -> true
```

## isStrBlank

Check if string is blank.

<details>
<summary>Type Definition</summary>

```typescript
function isStrBlank(str: string): boolean;
```

</details>

|Name  |Desc                   |
|------|-----------------------|
|str   |String to check        |
|return|True if string is blank|

```javascript
isStrBlank('licia'); // -> false
isStrBlank(''); // -> true
isStrBlank('    '); // -> true
isStrBlank('\r\n '); // -> true
```

## isStream

Check if value is a Node.js stream.

<details>
<summary>Type Definition</summary>

```typescript
function isStream(val: any): boolean;
```

</details>

|Name  |Desc                             |
|------|---------------------------------|
|val   |Value to check                   |
|return|True if value is a Node.js stream|

```javascript
const stream = require('stream');

isStream(new stream.Stream()); // -> true
```

## isSymbol

Check if value is a symbol.

<details>
<summary>Type Definition</summary>

```typescript
function isSymbol(val: any): val is symbol;
```

</details>

|Name  |Desc                     |
|------|-------------------------|
|val   |Value to check           |
|return|True if value is a symbol|

```javascript
isSymbol(Symbol('test')); // -> true
```

## isTypedArr

Check if value is a typed array.

<details>
<summary>Type Definition</summary>

```typescript
function isTypedArr(val: any): boolean;
```

</details>

|Name  |Desc                          |
|------|------------------------------|
|val   |Value to check                |
|return|True if value is a typed array|

```javascript
isTypedArr([]); // -> false
isTypedArr(new Uint8Array(8)); // -> true
```

## isUndef

Check if value is undefined.

<details>
<summary>Type Definition</summary>

```typescript
function isUndef(val: any): val is undefined;
```

</details>

|Name  |Desc                      |
|------|--------------------------|
|val   |Value to check            |
|return|True if value is undefined|

```javascript
isUndef(void 0); // -> true
isUndef(null); // -> false
```

## isUrl

Loosely validate an url.

<details>
<summary>Type Definition</summary>

```typescript
function isUrl(val: string): boolean;
```

</details>

|Name  |Desc                               |
|------|-----------------------------------|
|val   |Value to check                     |
|return|True if value is an url like string|

```javascript
isUrl('http://www.example.com?foo=bar&param=test'); // -> true
```

## isWeakMap

Check if value is a WeakMap object.

<details>
<summary>Type Definition</summary>

```typescript
function isWeakMap(val: any): boolean;
```

</details>

|Name  |Desc                      |
|------|--------------------------|
|val   |Value to check            |
|return|True if value is a WeakMap|

```javascript
isWeakMap(new Map()); // -> false
isWeakMap(new WeakMap()); // -> true
```

## isWeakSet

Check if value is a WeakSet object.

<details>
<summary>Type Definition</summary>

```typescript
function isWeakSet(val: any): boolean;
```

</details>

|Name  |Desc                      |
|------|--------------------------|
|val   |Value to check            |
|return|True if value is a WeakSet|

```javascript
isWeakSet(new Set()); // -> false
isWeakSet(new WeakSet()); // -> true
```

## isWindows

Check if platform is windows.

<details>
<summary>Type Definition</summary>

```typescript
const isWindows: boolean;
```

</details>

```javascript
console.log(isWindows); // -> true if running on windows
```
