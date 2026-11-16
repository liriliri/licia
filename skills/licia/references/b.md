# Licia Reference: b

## Benchmark

JavaScript Benchmark.

<details>
<summary>Type Definition</summary>

```typescript
namespace Benchmark {
    interface IOptions {
        minTime?: number;
        maxTime?: number;
        minSamples?: number;
        delay?: number;
        name?: string;
    }
    interface IResult {
        name: string;
        mean: number;
        variance: number;
        deviation: number;
        sem: number;
        moe: number;
        rme: number;
        hz: number;
        sample: number[];
    }
}
class Benchmark {
    constructor(fn: types.AnyFn, options?: Benchmark.IOptions);
    run(): Promise<Benchmark.IResult>;
    static all(
        benches: Array<types.AnyFn | Benchmark>,
        options?: Benchmark.IOptions
    ): Promise<Benchmark.IResult[]>;
}
```

</details>

### constructor

|Name   |Desc                  |
|-------|----------------------|
|fn     |Code for speed testing|
|options|Benchmark options     |

Available options:

|Name        |Desc                              |
|------------|----------------------------------|
|minTime=50  |Time needed to reduce uncertainty |
|maxTime=5000|Maximum time for running benchmark|
|minSamples=5|Minimum sample size               |
|delay=5     |Delay between test cycles         |
|name        |Benchmark name                    |

### run

Run benchmark, returns a promise.

### all

[static] Run some benchmarks.

```javascript
const benchmark = new Benchmark(
    function test() {
        !!'Hello World!'.match(/o/);
    },
    {
        maxTime: 1500
    }
);
benchmark.run().then(result => {
    console.log(String(result));
});
Benchmark.all([
    function regExp() {
        /o/.test('Hello World!');
    },
    function indexOf() {
        'Hello World!'.indexOf('o') > -1;
    },
    function match() {
        !!'Hello World!'.match(/o/);
    }
]).then(results => {
    console.log(String(results));
});
```

## Blob

Use Blob when available, otherwise BlobBuilder.

### constructor

|Name   |Desc      |
|-------|----------|
|parts  |Blob parts|
|options|Options   |

```javascript
const blob = new Blob([]);
```

## BloomFilter

Bloom filter implementation.

<details>
<summary>Type Definition</summary>

```typescript
class BloomFilter {
    constructor(size?: number, k?: number);
    add(val: string): void;
    test(val: string): boolean;
}
```

</details>

### constructor

|Name     |Desc                    |
|---------|------------------------|
|size=1024|Number of buckets       |
|k=3      |Number of Hash functions|

### add

Add an element to the filter.

|Name|Desc        |
|----|------------|
|val |Value to add|

### test

Test if an element is in the filter.

|Name  |Desc                                     |
|------|-----------------------------------------|
|val   |Value to test                            |
|return|True if probably, false if definitely not|

```javascript
const bloom = new BloomFilter(256, 3);
bloom.add('Bruce Wayne');
bloom.add('Clark Kent');
bloom.test('Clark Kent'); // -> true
bloom.test('Bruce Wayne'); // -> true
bloom.test('Tony Stark'); // -> false
```

## base64

Basic base64 encoding and decoding.

<details>
<summary>Type Definition</summary>

```typescript
const base64: {
    encode(bytes: number[] | Uint8Array | ArrayBufferView): string;
    decode(str: string): number[];
};
```

</details>

### encode

Turn a byte array into a base64 string.

|Name  |Desc         |
|------|-------------|
|bytes |Byte array   |
|return|Base64 string|

### decode

Turn a base64 string into a byte array.

|Name  |Desc         |
|------|-------------|
|str   |Base64 string|
|return|Byte array   |

```javascript
base64.encode([168, 174, 155, 255]); // -> 'qK6b/w=='
base64.decode('qK6b/w=='); // -> [168, 174, 155, 255]
```

## before

Create a function that invokes less than n times.

<details>
<summary>Type Definition</summary>

```typescript
function before<T extends types.AnyFn>(n: number, fn: T): T;
```

</details>

|Name  |Desc                                            |
|------|------------------------------------------------|
|n     |Number of calls at which fn is no longer invoked|
|fn    |Function to restrict                            |
|return|New restricted function                         |

Subsequent calls to the created function return the result of the last fn invocation.

```javascript
const fn = before(5, function() {});
fn(); // Allow function to be call 4 times at last.
```

## binarySearch

Binary search implementation.

<details>
<summary>Type Definition</summary>

```typescript
function binarySearch(
    array: any[],
    val: any,
    cmp?: types.AnyFn
): number;
```

</details>

|Name  |Desc         |
|------|-------------|
|array |Sorted array |
|val   |Value to seek|
|cmp   |Comparator   |
|return|Value index  |

```javascript
binarySearch([1, 2, 3], 2); // -> 1
binarySearch([1, 2], 3); // -> -1
binarySearch(
    [
        {
            key: 1
        },
        {
            key: 2
        }
    ],
    { key: 1 },
    (a, b) => {
        if (a.key === b.key) return 0;
        return a.key < b.key ? -1 : 1;
    }
); // -> 0
```

## bind

Create a function bound to a given object.

<details>
<summary>Type Definition</summary>

```typescript
function bind(
    fn: types.AnyFn,
    ctx: any,
    ...args: any[]
): types.AnyFn;
```

</details>

|Name  |Desc                    |
|------|------------------------|
|fn    |Function to bind        |
|ctx   |This binding of given fn|
|args  |Optional arguments      |
|return|New bound function      |

```javascript
const fn = bind(
    function(msg) {
        console.log(this.name + ':' + msg);
    },
    { name: 'eustia' },
    'I am a utility library.'
);
fn(); // -> 'eustia: I am a utility library.'
```

## btoa

Use Buffer to emulate btoa when running in node.

<details>
<summary>Type Definition</summary>

```typescript
function btoa(str: string): string;
```

</details>

```javascript
btoa('Hello World'); // -> 'SGVsbG8gV29ybGQ='
```

## bubbleSort

Bubble sort implementation.

<details>
<summary>Type Definition</summary>

```typescript
function bubbleSort(arr: any[], cmp?: types.AnyFn): any[];
```

</details>

|Name  |Desc         |
|------|-------------|
|arr   |Array to sort|
|cmp   |Comparator   |
|return|Sorted array |

```javascript
bubbleSort([2, 1]); // -> [1, 2]
```

## bytesToStr

Convert bytes to string.

<details>
<summary>Type Definition</summary>

```typescript
function bytesToStr(
    bytes: number[] | Uint8Array | ArrayBufferView,
    encoding?: 'utf8' | 'hex' | 'base64' | string
): string;
```

</details>

|Name         |Desc              |
|-------------|------------------|
|bytes        |Bytes array       |
|encoding=utf8|Encoding of string|
|return       |Result string     |

```javascript
bytesToStr([108, 105, 99, 105, 97]); // -> 'licia'
```

## bytesToWords

Convert bytes to 32-bit words.

<details>
<summary>Type Definition</summary>

```typescript
function bytesToWords(bytes: number[]): number[];
```

</details>

Useful when using CryptoJS.

|Name  |Desc      |
|------|----------|
|bytes |Byte array|
|return|Word array|

```javascript
bytesToWords([0x12, 0x34, 0x56, 0x78]); // -> [0x12345678]
```
