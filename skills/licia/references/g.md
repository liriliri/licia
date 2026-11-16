# Licia Reference: g

## gcd

Compute the greatest common divisor using Euclid's algorithm.

<details>
<summary>Type Definition</summary>

```typescript
function gcd(a: number, b: number): number;
```

</details>

|Name  |Desc                   |
|------|-----------------------|
|a     |Number to calculate    |
|b     |Number to calculate    |
|return|Greatest common divisor|

```javascript
gcd(121, 44); // -> 11
```

## getPort

Get an available TCP port.

<details>
<summary>Type Definition</summary>

```typescript
function getPort(
    port?: number | number[],
    host?: string
): Promise<number>;
```

</details>

|Name  |Desc           |
|------|---------------|
|port  |Preferred ports|
|host  |Host address   |
|return|Available port |

If preferred ports are not available, a random port will be returned.

```javascript
getPort([3000, 3001], '127.0.0.1').then(port => {
    console.log(port);
});
```

## getProto

Get prototype of an object.

<details>
<summary>Type Definition</summary>

```typescript
function getProto(obj: any): any;
```

</details>

|Name  |Desc                                         |
|------|---------------------------------------------|
|obj   |Target object                                |
|return|Prototype of given object, null if not exists|

```javascript
const a = {};
getProto(Object.create(a)); // -> a
```

## getUrlParam

Get url param.

<details>
<summary>Type Definition</summary>

```typescript
function getUrlParam(
    name: string,
    url?: string
): string | undefined;
```

</details>

|Name        |Desc            |
|------------|----------------|
|name        |Param name      |
|url=location|Url to get param|
|return      |Param value     |

```javascript
getUrlParam('test', 'http://example.com/?test=true'); // -> 'true'
```

## golangify

Handle errors like golang.

<details>
<summary>Type Definition</summary>

```typescript
function golangify<T, U = Error>(
    fn: (...args: any[]) => Promise<T>
): (...args: any[]) => Promise<[T | undefined, U | null]>;
function golangify<T, U = Error>(
    p: Promise<T>
): Promise<[T | undefined, U | null]>;
```

</details>

|Name  |Desc                                      |
|------|------------------------------------------|
|fn    |Function that returns a Promise           |
|return|Like fn, but resolves with [result, error]|

|Name  |Desc                                      |
|------|------------------------------------------|
|p     |Promise to transform                      |
|return|Promise that resolves with [result, error]|

```javascript
(async () => {
    let fnA = golangify(async () => {
        throw Error('err');
    });
    await fnA(); // -> [undefined, Error]
    let fnB = golangify(async num => num * 2);
    await fnB(2); // -> [4, null]

    await golangify(Promise.reject(Error('err'))); // -> [undefined, Error]
    await golangify(Promise.resolve(4)); // -> [4, null]
})();
```
