# Licia Reference: f

## FileBlobStore

Binary file storage.

<details>
<summary>Type Definition</summary>

```typescript
class FileBlobStore extends Emitter {
    constructor(path: string, data?: types.PlainObj<Buffer>);
    set(key: string, buf: Buffer): void;
    set(values: types.PlainObj<Buffer>): void;
    get(key: string): Buffer | void;
    get(keys: string[]): types.PlainObj<Buffer>;
    remove(key: string): void;
    remove(keys: string[]): void;
    clear(): void;
    each(fn: (val: Buffer, key: string) => void): void;
    save(): void;
}
```

</details>

Most api is the same as Store module, except only buffer is accepted.

### save

Save data to disk.

```javascript
const store = new FileBlobStore('path/to/file');
store.set('name', Buffer.from('licia'));
process.on('exit', () => store.save());
```

## FileStore

File storage.

<details>
<summary>Type Definition</summary>

```typescript
class FileStore extends Store {
    constructor(path: string, data?: any);
}
```

</details>

### constructor

|Name|Desc              |
|----|------------------|
|path|File path to store|
|data|Default data      |

```javascript
const store = new FileStore('path/to/file');
store.set('name', 'licia');
```

## fetch

Turn XMLHttpRequest into promise like.

<details>
<summary>Type Definition</summary>

```typescript
namespace fetch {
    interface IResult {
        ok: boolean;
        status: number;
        statusText: string;
        url: string;
        clone(): IResult;
        text(): Promise<string>;
        json(): Promise<any>;
        xml(): Promise<Document | null>;
        blob(): Promise<Blob>;
        headers: {
            keys(): string[];
            entries(): Array<string[]>;
            get(name: string): string;
            has(name: string): boolean;
        };
    }
}
function fetch(
    url: string,
    options?: {
        method?: string;
        timeout?: number;
        headers?: types.PlainObj<string>;
        body?: any;
    }
): Promise<fetch.IResult>;
```

</details>

Note: This is not a complete fetch pollyfill.

|Name   |Desc           |
|-------|---------------|
|url    |Request url    |
|options|Request options|
|return |Request promise|

```javascript
fetch('test.json', {
    method: 'GET',
    timeout: 3000,
    headers: {},
    body: ''
})
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data);
    });
```

## fibonacci

Calculate fibonacci number.

<details>
<summary>Type Definition</summary>

```typescript
function fibonacci(n: number): number;
```

</details>

|Name  |Desc                       |
|------|---------------------------|
|n     |Index of fibonacci sequence|
|return|Expected fibonacci number  |

```javascript
fibonacci(1); // -> 1
fibonacci(3); // -> 2
```

## fileSize

Turn bytes into human readable file size.

<details>
<summary>Type Definition</summary>

```typescript
function fileSize(bytes: number): string;
function fileSize(size: string): number;
```

</details>

|Name  |Desc              |
|------|------------------|
|bytes |File bytes        |
|return|Readable file size|

Turn human readable file size into bytes.

|Name  |Desc              |
|------|------------------|
|size  |Readable file size|
|return|File bytes        |

```javascript
fileSize(5); // -> '5'
fileSize(1500); // -> '1.46K'
fileSize(1500000); // -> '1.43M'
fileSize(1500000000); // -> '1.4G'
fileSize(1500000000000); // -> '1.36T'
```

## fileType

Detect file type using magic number.

<details>
<summary>Type Definition</summary>

```typescript
function fileType(
    input: Buffer | ArrayBuffer | Uint8Array
):
    | {
          ext: string;
          mime: string;
      }
    | undefined;
```

</details>

|Name  |Desc                          |
|------|------------------------------|
|input |File input                    |
|return|Object containing ext and mime|

### Supported file types

jpg, png, gif, webp, bmp, gz, zip, rar, pdf, exe

```javascript
const fs = require('fs');
const file = fs.readFileSync('path/to/file');
console.log(fileType(file)); // -> { ext: 'jpg', mime: 'image/jpeg' }
```

## fileUrl

Convert a file path to a file URL.

<details>
<summary>Type Definition</summary>

```typescript
function fileUrl(path: string): string;
```

</details>

|Name  |Desc     |
|------|---------|
|path  |File path|
|return|File URL |

```javascript
fileUrl('c:\\foo\\bar'); // -> 'file:///c:/foo/bar'
```

## fill

Fill elements of array with value.

<details>
<summary>Type Definition</summary>

```typescript
function fill(
    list: any[],
    val: any,
    start?: number,
    end?: number
): any[];
```

</details>

|Name          |Desc                    |
|--------------|------------------------|
|list          |Array to fill           |
|val           |Value to fill array with|
|start=0       |Start position          |
|end=arr.length|End position            |
|return        |Filled array            |

```javascript
fill([1, 2, 3], '*'); // -> ['*', '*', '*']
fill([1, 2, 3], '*', 1, 2); // -> [1, '*', 3]
```

## filter

Iterates over elements of collection, returning an array of all the values that pass a truth test.

<details>
<summary>Type Definition</summary>

```typescript
function filter<T>(
    list: types.List<T>,
    iterator: types.ListIterator<T, boolean>,
    context?: any
): T[];
function filter<T>(
    object: types.Dictionary<T>,
    iterator: types.ObjectIterator<T, boolean>,
    context?: any
): T[];
```

</details>

|Name     |Desc                                   |
|---------|---------------------------------------|
|obj      |Collection to iterate over             |
|predicate|Function invoked per iteration         |
|ctx      |Predicate context                      |
|return   |Array of all values that pass predicate|

```javascript
filter([1, 2, 3, 4, 5], function(val) {
    return val % 2 === 0;
}); // -> [2, 4]
```

## find

Find the first value that passes a truth test in a collection.

<details>
<summary>Type Definition</summary>

```typescript
function find<T>(
    object: types.List<T>,
    iterator: types.ListIterator<T, boolean>,
    context?: any
): T | undefined;
function find<T>(
    object: types.Dictionary<T>,
    iterator: types.ObjectIterator<T, boolean>,
    context?: any
): T | undefined;
```

</details>

|Name    |Desc                             |
|--------|---------------------------------|
|object  |Collection to iterate over       |
|iterator|Function invoked per iteration   |
|context |Predicate context                |
|return  |First value that passes predicate|

```javascript
find(
    [
        {
            name: 'john',
            age: 24
        },
        {
            name: 'jane',
            age: 23
        }
    ],
    function(val) {
        return val.age === 23;
    }
); // -> {name: 'jane', age: 23}
```

## findIdx

Return the first index where the predicate truth test passes.

<details>
<summary>Type Definition</summary>

```typescript
function findIdx<T>(
    arr: T[],
    predicate: (val: T, idx: number, arr: T[]) => boolean
): number;
```

</details>

|Name     |Desc                          |
|---------|------------------------------|
|arr      |Array to search               |
|predicate|Function invoked per iteration|
|return   |Index of matched element      |

```javascript
findIdx(
    [
        {
            name: 'john',
            age: 24
        },
        {
            name: 'jane',
            age: 23
        }
    ],
    function(val) {
        return val.age === 23;
    }
); // -> 1
```

## findKey

Return the first key where the predicate truth test passes.

<details>
<summary>Type Definition</summary>

```typescript
function findKey(
    obj: any,
    predicate: types.AnyFn,
    ctx?: any
): string | undefined;
```

</details>

|Name     |Desc                          |
|---------|------------------------------|
|obj      |Object to search              |
|predicate|Function invoked per iteration|
|ctx      |Predicate context             |
|return   |Key of matched element        |

```javascript
findKey({ a: 1, b: 2 }, function(val) {
    return val === 1;
}); // -> a
```

## findLastIdx

Return the last index where the predicate truth test passes.

<details>
<summary>Type Definition</summary>

```typescript
function findLastIdx(arr: any[], predicate: types.AnyFn): number;
```

</details>

|Name     |Desc                          |
|---------|------------------------------|
|arr      |Array to search               |
|predicate|Function invoked per iteration|
|return   |Last index of matched element |

```javascript
findLastIdx(
    [
        {
            name: 'john',
            age: 24
        },
        {
            name: 'jane',
            age: 23
        },
        {
            name: 'kitty',
            age: 24
        }
    ],
    function(val) {
        return val.age === 24;
    }
); // -> 2
```

## flatten

Recursively flatten an array.

<details>
<summary>Type Definition</summary>

```typescript
function flatten(arr: any[]): any[];
```

</details>

|Name  |Desc               |
|------|-------------------|
|arr   |Array to flatten   |
|return|New flattened array|

```javascript
flatten(['a', ['b', ['c']], 'd', ['e']]); // -> ['a', 'b', 'c', 'd', 'e']
```

## fnArgs

Validate function arguments.

<details>
<summary>Type Definition</summary>

```typescript
function fnArgs(types: string[], args: any): void;
```

</details>

|Name |Desc           |
|-----|---------------|
|types|Argument types |
|args |Argument object|

It throws an exception when validation failed.

```javascript
function test(a, b, c) {
    fnArgs(['number|string', '?Function', '...number'], arguments);
    // Do something.
}
test(15);
test('test', () => {});
test('test', () => {}, 5);
test(); // Throw error
test('test', 'test'); // Throw error
test('test', () => {}, 5, 'test'); // Throw error
```

## fnParams

Get a function parameter's names.

<details>
<summary>Type Definition</summary>

```typescript
function fnParams(fn: types.AnyFn | string): string[];
```

</details>

|Name  |Desc                      |
|------|--------------------------|
|fn    |Function to get parameters|
|return|Names                     |

```javascript
fnParams(function(a, b) {}); // -> ['a', 'b']
```

## fnv1a

Simple FNV-1a implementation.

<details>
<summary>Type Definition</summary>

```typescript
function fnv1a(str: string): number;
```

</details>

|Name  |Desc          |
|------|--------------|
|str   |String to hash|
|return|Hast result   |

```javascript
fnv1a('test'); // -> 2949673445
```

## format

Format string in a printf-like format.

<details>
<summary>Type Definition</summary>

```typescript
function format(str: string, ...values: any[]): string;
```

</details>

|Name     |Desc                               |
|---------|-----------------------------------|
|str      |String to format                   |
|...values|Values to replace format specifiers|
|return   |Formatted string                   |

### Format Specifiers

|Specifier|Desc                |
|---------|--------------------|
|%s       |String              |
|%d, %i   |Integer             |
|%f       |Floating point value|
|%o       |Object              |

```javascript
format('%s_%s', 'foo', 'bar'); // -> 'foo_bar'
```

## fraction

Convert number to fraction.

<details>
<summary>Type Definition</summary>

```typescript
function fraction(num: number): string;
```

</details>

|Name  |Desc                  |
|------|----------------------|
|num   |Number to convert     |
|return|Corresponding fraction|

```javascript
fraction(1.2); // -> '6/5'
```

## freeze

Shortcut for Object.freeze.

<details>
<summary>Type Definition</summary>

```typescript
function freeze<T>(obj: T): T;
```

</details>

Use Object.defineProperties if Object.freeze is not supported.

|Name  |Desc            |
|------|----------------|
|obj   |Object to freeze|
|return|Object passed in|

```javascript
const a = { b: 1 };
freeze(a);
a.b = 2;
console.log(a); // -> {b: 1}
```

## freezeDeep

Recursively use Object.freeze.

<details>
<summary>Type Definition</summary>

```typescript
function freezeDeep<T>(obj: T): T;
```

</details>

|Name  |Desc            |
|------|----------------|
|obj   |Object to freeze|
|return|Object passed in|

```javascript
const a = { b: { c: 1 } };
freezeDeep(a);
a.b.c = 2;
console.log(a); // -> {b: {c: 1}}
```

## fs

Promised version of node.js fs module.

<details>
<summary>Type Definition</summary>

```typescript
const fs: {
    readFile(path: string, encoding: string): Promise<string>;
    readFile(path: string): Promise<Buffer>;
    exists(path: string): Promise<boolean>;
    unlink(path: string): Promise<void>;
    writeFile(path: string, data: string, options?: string): Promise<void>;
    writeFile(path: string, data: Buffer): Promise<void>;
    readdir(path: string): Promise<string[]>;
    rmdir(path: string): Promise<void>;
    [key: string]: any;
};
```

</details>

```javascript
fs.readFile('test.js')
    .then(function(data) {
        // Do something
    })
    .catch(function(err) {
        // Handle errors
    });
```

## fullscreen

Fullscreen api wrapper.

<details>
<summary>Type Definition</summary>

```typescript
namespace fullscreen {
    interface IFullscreen extends Emitter {
        request(el?: Element): void;
        exit(): void;
        toggle(el?: Element): void;
        isActive(): boolean;
        getEl(): Element | null;
        isEnabled(): boolean;
    }
}
const fullscreen: fullscreen.IFullscreen;
```

</details>

### request

Request fullscreen.

|Name  |Desc              |
|------|------------------|
|el    |Fullscreen element|

### exit

Exit fullscreen.

### toggle

Toggle fullscreen.

|Name  |Desc              |
|------|------------------|
|el    |Fullscreen element|

### isActive

Check Whether fullscreen is active.

### getEl

Return Fullscreen element if exists.

### isEnabled

Whether you are allowed to enter fullscreen.

```javascript
fullscreen.request();
fullscreen.isActive(); // -> false, not a synchronous api
fullscreen.on('error', () => {});
fullscreen.on('change', () => {});
```

## fuzzySearch

Simple fuzzy search.

<details>
<summary>Type Definition</summary>

```typescript
function fuzzySearch(
    needle: string,
    haystack: any[],
    options?: {
        caseSensitive?: boolean;
        key?: string | string[];
    }
): any[];
```

</details>

|Name     |Desc            |
|---------|----------------|
|needle   |String to search|
|haystacks|Search list     |
|options  |Search options  |

Available options:

|Name               |Desc                                        |
|-------------------|--------------------------------------------|
|caseSensitive=false|Whether comparisons should be case sensitive|
|key                |Object key path if item is object           |

```javascript
fuzzySearch('lic', ['licia', 'll', 'lic']); // -> ['lic', 'licia']
fuzzySearch(
    'alpha-test',
    [
        {
            name: 'alpha-test-1'
        },
        {
            name: 'beta-test'
        }
    ],
    {
        key: 'name'
    }
); // -> [{ name: 'alpha-test-1' }]
```
