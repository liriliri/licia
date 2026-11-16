# Licia Reference: u

## Url

Simple url manipulator.

<details>
<summary>Type Definition</summary>

```typescript
namespace Url {
    interface IUrl {
        protocol: string;
        auth: string;
        hostname: string;
        hash: string;
        query: any;
        port: string;
        pathname: string;
        slashes: boolean;
    }
}
class Url {
    protocol: string;
    auth: string;
    hostname: string;
    hash: string;
    query: any;
    port: string;
    pathname: string;
    slashes: boolean;
    constructor(url?: string);
    setQuery(name: string, val: string | number): Url;
    setQuery(query: types.PlainObj<string | number>): Url;
    rmQuery(name: string | string[]): Url;
    toString(): string;
    static parse(url: string): Url.IUrl;
    static stringify(object: Url.IUrl): string;
}
```

</details>

### constructor

|Name        |Desc      |
|------------|----------|
|url=location|Url string|

### setQuery

Set query value.

|Name  |Desc       |
|------|-----------|
|name  |Query name |
|val   |Query value|
|return|this       |

|Name  |Desc        |
|------|------------|
|query |query object|
|return|this        |

### rmQuery

Remove query value.

|Name  |Desc      |
|------|----------|
|name  |Query name|
|return|this      |

### parse

[static] Parse url into an object.

|Name  |Desc      |
|------|----------|
|url   |Url string|
|return|Url object|

### stringify

[static] Stringify url object into a string.

|Name  |Desc      |
|------|----------|
|url   |Url object|
|return|Url string|

An url object contains the following properties:

|Name    |Desc                                                                                  |
|--------|--------------------------------------------------------------------------------------|
|protocol|The protocol scheme of the URL (e.g. http:)                                           |
|slashes |A boolean which indicates whether the protocol is followed by two forward slashes (//)|
|auth    |Authentication information portion (e.g. username:password)                           |
|hostname|Host name without port number                                                         |
|port    |Optional port number                                                                  |
|pathname|URL path                                                                              |
|query   |Parsed object containing query string                                                 |
|hash    |The "fragment" portion of the URL including the pound-sign (#)                        |

```javascript
const url = new Url('http://example.com:8080?eruda=true');
console.log(url.port); // -> '8080'
url.query.foo = 'bar';
url.rmQuery('eruda');
url.toString(); // -> 'http://example.com:8080/?foo=bar'
```

## ucs2

UCS-2 encoding and decoding.

<details>
<summary>Type Definition</summary>

```typescript
const ucs2: {
    encode(arr: number[]): string;
    decode(str: string): number[];
};
```

</details>

### encode

Create a string using an array of code point values.

|Name  |Desc                |
|------|--------------------|
|arr   |Array of code points|
|return|Encoded string      |

### decode

Create an array of code point values using a string.

|Name  |Desc                |
|------|--------------------|
|str   |Input string        |
|return|Array of code points|

```javascript
ucs2.encode([0x61, 0x62, 0x63]); // -> 'abc'
ucs2.decode('abc'); // -> [0x61, 0x62, 0x63]
'𝌆'.length; // -> 2
ucs2.decode('𝌆').length; // -> 1
```

## uncaught

Handle global uncaught errors and promise rejections.

<details>
<summary>Type Definition</summary>

```typescript
const uncaught: {
    start(): void;
    stop(): void;
    addListener(fn: (err: Error) => void): void;
    rmListener(fn: (err: Error) => void): void;
    rmAllListeners(): void;
};
```

</details>

### start

Start handling of errors.

### stop

Stop handling.

### addListener

Add listener for handling errors.

|Name|Desc          |
|----|--------------|
|fn  |Error listener|

### rmListener

Remove listener.

### rmAllListeners

Remove all listeners.

```javascript
uncaught.start();
uncaught.addListener(err => {
    // Do something.
});
```

## unescape

Convert HTML entities back, the inverse of escape.

<details>
<summary>Type Definition</summary>

```typescript
function unescape(str: string): string;
```

</details>

|Name  |Desc              |
|------|------------------|
|str   |String to unescape|
|return|Unescaped string  |

```javascript
unescape('You &amp; Me'); // -> 'You & Me'
```

## union

Create an array of unique values, in order, from all given arrays.

<details>
<summary>Type Definition</summary>

```typescript
function union(...arr: Array<any[]>): any[];
```

</details>

|Name  |Desc                        |
|------|----------------------------|
|...arr|Arrays to inspect           |
|return|New array of combined values|

```javascript
union([2, 1], [4, 2], [1, 2]); // -> [2, 1, 4]
```

## uniqId

Generate a globally-unique id.

<details>
<summary>Type Definition</summary>

```typescript
function uniqId(prefix?: string): string;
```

</details>

|Name  |Desc              |
|------|------------------|
|prefix|Id prefix         |
|return|Globally-unique id|

```javascript
uniqId('eustia_'); // -> 'eustia_xxx'
```

## unique

Create duplicate-free version of an array.

<details>
<summary>Type Definition</summary>

```typescript
function unique(
    arr: any[],
    cmp?: (a: any, b: any) => boolean | number
): any[];
```

</details>

|Name  |Desc                         |
|------|-----------------------------|
|arr   |Array to inspect             |
|cmp   |Function for comparing values|
|return|New duplicate free array     |

```javascript
unique([1, 2, 3, 1]); // -> [1, 2, 3]
```

## universalify

Make an async function support both promises and callbacks.

<details>
<summary>Type Definition</summary>

```typescript
function universalify(
    fn: types.AnyFn,
    type: string
): types.AnyFn;
```

</details>

|Name  |Desc                            |
|------|--------------------------------|
|fn    |Async function                  |
|type  |Source type, promise or callback|
|return|Result function                 |

```javascript
function callbackFn(str, cb) {
    setTimeout(() => {
        cb(null, str);
    }, 10);
}

const fn = universalify(callbackFn, 'callback');
fn('licia', (err, result) => {
    console.log(result); // -> 'licia'
});
fn('licia').then(result => {
    console.log(result); // -> 'licia'
});
```

## unzip

Opposite of zip.

<details>
<summary>Type Definition</summary>

```typescript
declare function unzip(arr: Array<any[]>): Array<any[]>;
```

</details>

|Name  |Desc                                |
|------|------------------------------------|
|arr   |Array of grouped elements to process|
|return|New array of regrouped elements     |

```javascript
unzip([
    ['a', 1, true],
    ['b', 2, false]
]); // -> [['a', 'b'], [1, 2], [true, false]]
```

## upperCase

Convert string to upper case.

<details>
<summary>Type Definition</summary>

```typescript
function upperCase(str: string): string;
```

</details>

|Name  |Desc             |
|------|-----------------|
|str   |String to convert|
|return|Uppercased string|

```javascript
upperCase('test'); // -> 'TEST'
```

## upperFirst

Convert the first character of string to upper case.

<details>
<summary>Type Definition</summary>

```typescript
function upperFirst(str: string): string;
```

</details>

|Name  |Desc             |
|------|-----------------|
|str   |String to convert|
|return|Converted string |

```javascript
upperFirst('red'); // -> Red
```

## use

Use modules that is created by define.

<details>
<summary>Type Definition</summary>

```typescript
function use(requires: string[], method: types.AnyFn): void;
function use(method: types.AnyFn): void;
```

</details>

|Name    |Desc                |
|--------|--------------------|
|requires|Dependencies        |
|method  |Codes to be executed|

```javascript
// define('A', () => 'A');
use(['A'], function(A) {
    console.log(A + 'B'); // -> 'AB'
});
```

## utf8

UTF-8 encoding and decoding.

<details>
<summary>Type Definition</summary>

```typescript
const utf8: {
    encode(str: string): string;
    decode(str: string, safe?: boolean): string;
};
```

</details>

### encode

Turn any UTF-8 decoded string into UTF-8 encoded string.

|Name  |Desc            |
|------|----------------|
|str   |String to encode|
|return|Encoded string  |

### decode

Turn any UTF-8 encoded string into UTF-8 decoded string.

|Name      |Desc                  |
|----------|----------------------|
|str       |String to decode      |
|safe=false|Suppress error if true|
|return    |Decoded string        |

```javascript
utf8.encode('\uD800\uDC00'); // ->  '\xF0\x90\x80\x80'
utf8.decode('\xF0\x90\x80\x80'); // -> '\uD800\uDC00'
```

## uuid

RFC4122 version 4 compliant uuid generator.

<details>
<summary>Type Definition</summary>

```typescript
function uuid(): string;
```

</details>

Check [RFC4122 4.4](http://www.ietf.org/rfc/rfc4122.txt) for reference.

```javascript
uuid(); // -> '53ce0497-6554-49e9-8d79-347406d2a88b'
```
