# Licia Reference: w

## Wrr

Weighted Round Robin implementation.

<details>
<summary>Type Definition</summary>

```typescript
class Wrr {
    size: number;
    set(val: any, weight: number): void;
    get(val: any): number | void;
    remove(val: any): void;
    clear(): void;
    next(): any;
}
```

</details>

### size

Pool size.

### set

Set a value to the pool. Weight is updated if value already exists.

|Name  |Desc               |
|------|-------------------|
|val   |Value to set       |
|weight|Weight of the value|

### get

Get weight of given value.

|Name  |Desc               |
|------|-------------------|
|val   |Value to get       |
|return|Weight of the value|

### remove

Remove given value.

|Name|Desc           |
|----|---------------|
|val |Value to remove|

### next

Get next value from pool.

### clear

Clear all values.

```javascript
const pool = new Wrr();
pool.set('A', 4);
pool.set('B', 8);
pool.set('C', 2);
pool.next();
pool.remove('A');
console.log(pool.size); // -> 2
```

## waitUntil

Wait until function returns a truthy value.

<details>
<summary>Type Definition</summary>

```typescript
function waitUntil<T>(
    condition: () => T | PromiseLike<T>,
    timeout?: number,
    interval?: number
): Promise<T>;
```

</details>

|Name        |Desc              |
|------------|------------------|
|condition   |Condition function|
|timeout=0   |Timeout           |
|interval=250|Wait interval     |

```javascript
let a = 5;
setTimeout(() => (a = 10), 500);
waitUntil(() => a === 10).then(() => {
    console.log(a); // -> 10
});
```

## waterfall

Run an array of functions in series.

<details>
<summary>Type Definition</summary>

```typescript
function waterfall(tasks: types.AnyFn[], cb?: types.AnyFn): void;
```

</details>

|Name |Desc                   |
|-----|-----------------------|
|tasks|Array of functions     |
|cb   |Callback once completed|

```javascript
waterfall(
    [
        function(cb) {
            cb(null, 'one');
        },
        function(arg1, cb) {
            // arg1 -> 'one'
            cb(null, 'done');
        }
    ],
    function(err, result) {
        // result -> 'done'
    }
);
```

## wordWrap

Wrap a string to a given length.

<details>
<summary>Type Definition</summary>

```typescript
function wordWrap(txt: string, width: number): string;
```

</details>

|Name  |Desc                          |
|------|------------------------------|
|txt   |Text to wrap                  |
|width |Text width                    |
|return|String wrapped at given length|

```javascript
wordWrap('Licia is a utility library.', 10);
// -> 'Licia is \na utility \nlibrary.'
```

## wordsToBytes

Convert 32-bit words to bytes.

<details>
<summary>Type Definition</summary>

```typescript
function wordsToBytes(words: number[]): number[];
```

</details>

|Name  |Desc      |
|------|----------|
|words |Word array|
|return|Byte array|

```javascript
wordsToBytes([0x12345678]); // -> [0x12, 0x34, 0x56, 0x78]
```

## workerize

Move a stand-alone function to a worker thread.

<details>
<summary>Type Definition</summary>

```typescript
function workerize(fn: types.AnyFn): types.AnyFn;
```

</details>

|Name  |Desc               |
|------|-------------------|
|fn    |Function to turn   |
|return|Workerized Function|

```javascript
const worker = workerize(function(a, b) {
    return a + b;
});
worker(1, 2).then(function(value) {
    console.log(value); // -> 3
});
```

## wrap

Wrap the function inside a wrapper function, passing it as the first argument.

<details>
<summary>Type Definition</summary>

```typescript
function wrap(
    fn: types.AnyFn,
    wrapper: types.AnyFn
): types.AnyFn;
```

</details>

|Name   |Desc            |
|-------|----------------|
|fn     |Function to wrap|
|wrapper|Wrapper function|
|return |New function    |

```javascript
const p = wrap(escape, function(fn, text) {
    return '<p>' + fn(text) + '</p>';
});
p('You & Me'); // -> '<p>You &amp; Me</p>'
```

## wx

Promised version of mini program wx object.

<details>
<summary>Type Definition</summary>

```typescript
const wx: any;
```

</details>

```javascript
wx.getStorage('test').then(res => {
    console.log(res.data);
});
```
