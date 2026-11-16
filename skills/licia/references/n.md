# Licia Reference: n

## naturalSort

Sort values in natural order.

<details>
<summary>Type Definition</summary>

```typescript
namespace naturalSort {
    interface INaturalSort {
        <T extends any[]>(arr: T): T;
        comparator(a: any, b: any): number;
    }
}
const naturalSort: naturalSort.INaturalSort;
```

</details>

|Name  |Desc           |
|------|---------------|
|arr   |Array of values|
|return|Sorted array   |

```javascript
naturalSort(['img12', 'img11', '$img', '_img', '1', '2', '12']);
// -> ['1', '2', '12', '$img', 'img11', 'img12', '_img']
naturalSort([2, '1', 13]); // -> ['1', 2, 13]
```

## negate

Create a function that negates the result of the predicate function.

<details>
<summary>Type Definition</summary>

```typescript
function negate<T extends types.AnyFn>(predicate: T): T;
```

</details>

|Name     |Desc               |
|---------|-------------------|
|predicate|Predicate to negate|
|return   |New function       |

```javascript
function even(n) {
    return n % 2 === 0;
}
[1, 2, 3, 4, 5, 6].filter(negate(even)); // -> [1, 3, 5]
```

## nextTick

Next tick for both node and browser.

<details>
<summary>Type Definition</summary>

```typescript
function nextTick(cb: types.AnyFn): void;
```

</details>

|Name|Desc            |
|----|----------------|
|cb  |Function to call|

Use process.nextTick if available.

Otherwise setImmediate or setTimeout is used as fallback.

```javascript
nextTick(function() {
    // Do something...
});
```

## noop

A no-operation function.

<details>
<summary>Type Definition</summary>

```typescript
function noop(): void;
```

</details>

```javascript
noop(); // Does nothing
```

## normalizeHeader

Normalize http header name.

<details>
<summary>Type Definition</summary>

```typescript
function normalizeHeader(header: string): string;
```

</details>

|Name  |Desc               |
|------|-------------------|
|header|Header to normalize|
|return|Normalized header  |

```javascript
normalizeHeader('content-type'); // -> 'Content-Type'
normalizeHeader('etag'); // -> 'ETag'
```

## normalizePath

Normalize file path slashes.

<details>
<summary>Type Definition</summary>

```typescript
function normalizePath(path: string): string;
```

</details>

|Name  |Desc             |
|------|-----------------|
|path  |Path to normalize|
|return|Normalized path  |

```javascript
normalizePath('\\foo\\bar\\'); // -> '/foo/bar/'
normalizePath('./foo//bar'); // -> './foo/bar'
```

## normalizePhone

Normalize phone numbers into E.164 format.

<details>
<summary>Type Definition</summary>

```typescript
function normalizePhone(
    phone: string,
    options: {
        countryCode: number;
        trunkPrefix?: boolean;
    }
): string;
```

</details>

|Name   |Desc              |
|-------|------------------|
|phone  |Phone to normalize|
|options|Normalize options |
|return |Normalized phone  |

Available options:

|Name             |Desc                                 |
|-----------------|-------------------------------------|
|countryCode      |Country code                         |
|trunkPrefix=false|True if local format has trunk prefix|

```javascript
normalizePhone('13512345678', {
    countryCode: 86
}); // -> '+8613512345678'
normalizePhone('(415) 555-2671', {
    countryCode: 1
}); // -> '+14155552671'
normalizePhone('020 7183 8750', {
    countryCode: 44,
    trunkPrefix: true
}); // -> '+442071838750'
```

## notify

Wrapper for the Web Notifications API.

<details>
<summary>Type Definition</summary>

```typescript
namespace notify {
    class Notification extends Emitter {
        constructor(title: string, options?: object);
        show(): void;
    }
}
function notify(title: string, options?: object): void;
```

</details>

|Name   |Desc                |
|-------|--------------------|
|title  |Notification title  |
|options|Notification options|

You can pass exactly the same options supported in the [Web Notification](https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification).

### Notification

Use this to create instance when certain events like close, show, click or error needed to be handled.

```javascript
notify('licia', {
    body: 'This is the notification content'
});
const notification = new notify.Notification('licia', {
    body: 'This is the notification content'
});
notification.on('error', err => console.log(err));
notification.on('click', e => console.log(e));
notification.show();
```

## now

Gets the number of milliseconds that have elapsed since the Unix epoch.

<details>
<summary>Type Definition</summary>

```typescript
function now(): number;
```

</details>

```javascript
now(); // -> 1468826678701
```
